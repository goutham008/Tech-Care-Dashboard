import React from 'react';

export default function DiagnosticList({ list }) {
  if (!list) return null;

  return (
    <div className="bg-white rounded-[16px] p-[20px] flex flex-col gap-[40px]">
      <h2 className="text-[24px] font-extrabold text-[#072635]">Diagnostic List</h2>
      
      <div className="overflow-x-auto max-h-[350px] no-scrollbar">
        <table className="w-full text-left border-separate border-spacing-0">
          <thead className="sticky top-0 z-10">
            <tr className="bg-[#F6F7F8]">
              <th className="p-[16px] rounded-l-[24px] font-bold text-[14px] text-[#072635]">Problem/Diagnosis</th>
              <th className="p-[16px] font-bold text-[14px] text-[#072635]">Description</th>
              <th className="p-[16px] rounded-r-[24px] font-bold text-[14px] text-[#072635]">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {list.map((item, index) => (
              <tr key={index} className="border-b border-[#F6F7F8] last:border-0">
                <td className="p-[16px] text-[14px] text-[#072635] border-b border-[#F6F7F8]">{item.name}</td>
                <td className="p-[16px] text-[14px] text-[#072635] border-b border-[#F6F7F8]">{item.description}</td>
                <td className="p-[16px] text-[14px] text-[#072635] border-b border-[#F6F7F8]">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
