import React from 'react';
import { Search } from 'lucide-react';
import PatientCard from './PatientCard';

export default function PatientList({ 
  patients, 
  selectedPatientName, 
  onSelectPatient 
}) {
  return (
    <div className="bg-white rounded-[16px] h-full flex flex-col overflow-hidden">
      <div className="p-5 flex items-center justify-between sticky top-0 bg-white z-10">
        <h2 className="text-[24px] font-extrabold text-[#072635]">Patients</h2>
        <Search size={18} className="text-[#072635] cursor-pointer" />
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200">
        {patients.map((patient) => (
          <PatientCard
            key={patient.name}
            name={patient.name}
            gender={patient.gender}
            age={patient.age}
            profile_picture={patient.profile_picture}
            isActive={patient.name === selectedPatientName}
            onClick={() => onSelectPatient(patient.name)}
          />
        ))}
      </div>
    </div>
  );
}
