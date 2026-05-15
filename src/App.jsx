import React, { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import { getPatients } from './services/api';
import './App.css';

export default function App() {
  const [patients, setPatients] = useState([]);
  const [selectedPatientName, setSelectedPatientName] = useState("Jessica Taylor");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getPatients();
        setPatients(data);
        // Ensure Jessica Taylor is found as default per instructions
        const jessica = data.find(p => p.name === "Jessica Taylor");
        if (jessica) {
          setSelectedPatientName("Jessica Taylor");
        }
      } catch (err) {
        console.error("Failed to load patients:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const selectedPatient = patients.find(p => p.name === selectedPatientName) || patients[0];

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-[#F6F7F8]">Loading...</div>;
  }

  return (
    <Dashboard 
      patients={patients}
      selectedPatient={selectedPatient}
      onSelectPatient={setSelectedPatientName}
    />
  );
}
