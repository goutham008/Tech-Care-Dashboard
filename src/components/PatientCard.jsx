import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { cn } from '../lib/utils';

export default function PatientCard({ 
  name, 
  gender, 
  age, 
  profile_picture, 
  isActive, 
  onClick 
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center justify-between px-5 py-4 cursor-pointer transition-colors",
        isActive ? "bg-[#D8FCF7]" : "hover:bg-[#F6F7F8]"
      )}
    >
      <div className="flex items-center gap-3">
        <img
          src={profile_picture}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="flex flex-col">
          <span className="font-bold text-[14px]">{name}</span>
          <span className="text-[14px] text-[#707070]">
            {gender}, {age}
          </span>
        </div>
      </div>
      <MoreHorizontal size={18} className="text-[#072635]" />
    </div>
  );
}
