import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Proxy endpoint to handle CORS
  app.get('/api/patients', async (req, res) => {
    console.log('Incoming request for /api/patients');
    try {
      const auth = Buffer.from('coalition:skills-test').toString('base64');
      // Try the worker first as it is the primary source
      let response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
        headers: {
          'Authorization': `Basic ${auth}`,
          'Accept': 'application/json'
        }
      });

      // If worker fails, try S3 direct fetch as fallback
      if (!response.ok || response.headers.get('content-type')?.includes('text/html')) {
        console.warn(`Worker fetch failed or returned HTML. Trying S3 fallback...`);
        response = await fetch('https://fedskillstest.s3.us-east-2.amazonaws.com/patients_data.json');
      }

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`External API returned status: ${response.status}. Body: ${errorText.substring(0, 200)}`);
        throw new Error(`External API returned ${response.status}`);
      }
      
      const data = await response.json();
      res.header('Content-Type', 'application/json');
      res.json(data);
    } catch (error) {
      console.error('Proxy Fetch Error:', error.message);
      // Fallback to local JSON if external fetch fails
      try {
        const fs = await import('fs/promises');
        const localData = await fs.readFile(path.join(process.cwd(), 'src/data/patients.json'), 'utf-8');
        res.header('Content-Type', 'application/json');
        res.json(JSON.parse(localData));
      } catch (fallbackError) {
        console.error('Fallback Error:', fallbackError.message);
        res.header('Content-Type', 'application/json');
        res.status(500).json({ 
          error: 'Failed to fetch patient data from all sources',
          details: error.message
        });
      }
    }
  });

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Serve Images from root if it exists
  const imagesPath = path.join(process.cwd(), 'Images');
  app.use('/Images', express.static(imagesPath));

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
