import React, { useState } from 'react';
import { Calendar, User, Phone, ShieldCheck } from 'lucide-react';

export default function PatientProfile({ patient }) {
  const [imgErrors, setImgErrors] = useState({});

  if (!patient) return null;

  const handleImgError = (idx) => {
    setImgErrors(prev => ({ ...prev, [idx]: true }));
  };

  const infoItems = [
    { label: 'Date Of Birth', value: patient.date_of_birth, icon: Calendar, imgUrl: '/Images/BirthIcon.png' },
    { label: 'Gender', value: patient.gender, icon: User, imgUrl: patient.gender === 'Female' ? '/Images/FemaleIcon.png' : '/Images/MaleIcon.png' },
    { label: 'Contact Info.', value: patient.phone_number, icon: Phone, imgUrl: '/Images/PhoneIcon.png' },
    { label: 'Emergency Contacts', value: patient.emergency_contact, icon: Phone, imgUrl: '/Images/PhoneIcon.png' },
    { label: 'Insurance Provider', value: patient.insurance_type, icon: ShieldCheck, imgUrl: '/Images/InsuranceIcon.png' },
  ];

  return (
    <div className="bg-white rounded-[16px] p-[32px] flex flex-col items-center gap-[32px]">
      <div className="flex flex-col items-center gap-[24px]">
        <img
          src={patient.profile_picture}
          alt={patient.name}
          className="w-[200px] h-[200px] rounded-full object-cover"
          referrerPolicy="no-referrer"
          onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(patient.name)}&background=random`; }}
        />
        <h2 className="text-[24px] font-extrabold text-[#072635]">{patient.name}</h2>
      </div>

      <div className="w-full flex flex-col gap-[24px]">
        {infoItems.map((item, index) => (
          <div key={index} className="flex items-center gap-[16px]">
            <div className="w-[42px] h-[42px] rounded-full bg-[#F6F7F8] flex items-center justify-center text-[#072635] overflow-hidden shrink-0">
              {!imgErrors[index] ? (
                <img 
                  src={item.imgUrl} 
                  alt={item.label} 
                  className="w-[20px] h-[20px] object-contain"
                  referrerPolicy="no-referrer"
                  onError={() => handleImgError(index)}
                />
              ) : (
                <item.icon size={20} />
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] text-[#072635] font-medium leading-tight">{item.label}</span>
              <span className="font-bold text-[14px] leading-tight mt-1">{item.value}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full bg-[#01F0D0] text-[#072635] font-bold py-[14px] px-[24px] rounded-full transition-shadow hover:shadow-md mt-[8px]">
        Show All Information
      </button>
    </div>
  );
}
