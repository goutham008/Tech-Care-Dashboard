import React from 'react';
import { Download } from 'lucide-react';

export default function LabResults({ results }) {
  if (!results) return null;
  
  return (
    <div className="bg-white rounded-[16px] p-[20px] flex flex-col gap-[16px] h-full">
      <h2 className="text-[24px] font-extrabold text-[#072635]">Lab Results</h2>
      
      <div className="flex-1 overflow-y-auto no-scrollbar pr-[4px] mt-[16px]">
        <div className="flex flex-col gap-[8px]">
          {results.map((result, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-[12px] px-[16px] hover:bg-[#F6F7F8] transition-colors rounded-[8px] group"
            >
              <span className="text-[14px] text-[#072635] font-medium">{result}</span>
              <button className="text-[#072635] transition-colors opacity-80 hover:opacity-100">
                <Download size={20} strokeWidth={2.5} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
