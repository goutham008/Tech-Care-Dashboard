import React, { useState } from 'react';
import { ArrowDown, ArrowUp, Wind, Thermometer, HeartPulse } from 'lucide-react';

export default function StatsCards({ latestRecord }) {
  const [imgErrors, setImgErrors] = useState({});

  if (!latestRecord) return null;

  const handleImgError = (id) => {
    setImgErrors(prev => ({ ...prev, [id]: true }));
  };

  const stats = [
    {
      id: 'respiratory',
      label: 'Respiratory Rate',
      value: `${latestRecord.respiratory_rate.value} bpm`,
      levels: latestRecord.respiratory_rate.levels,
      bgColor: 'bg-[#E0F3FA]',
      icon: Wind,
      iconColor: 'text-[#072635]',
      imgSrc: 'https://fedskillstest.s3.us-east-2.amazonaws.com/RespiratoryRate.png'
    },
    {
      id: 'temperature',
      label: 'Temperature',
      value: `${latestRecord.temperature.value}°F`,
      levels: latestRecord.temperature.levels,
      bgColor: 'bg-[#FFE6E9]',
      icon: Thermometer,
      iconColor: 'text-[#072635]',
      imgSrc: 'https://fedskillstest.s3.us-east-2.amazonaws.com/Temperature.png'
    },
    {
      id: 'heart_rate',
      label: 'Heart Rate',
      value: `${latestRecord.heart_rate.value} bpm`,
      levels: latestRecord.heart_rate.levels,
      bgColor: 'bg-[#FFE6F1]',
      icon: HeartPulse,
      iconColor: 'text-[#072635]',
      imgSrc: 'https://fedskillstest.s3.us-east-2.amazonaws.com/HeartRate.png'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[21px]">
      {stats.map((stat) => (
        <div key={stat.id} className={`${stat.bgColor} rounded-[12px] p-[16px] flex flex-col gap-[16px]`}>
          <div className="w-[96px] h-[96px] bg-white rounded-full flex items-center justify-center overflow-hidden">
            {!imgErrors[stat.id] ? (
              <img 
                src={stat.imgSrc} 
                alt={stat.label} 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
                onError={() => handleImgError(stat.id)}
              />
            ) : (
              <stat.icon size={48} className={stat.iconColor} />
            )}
          </div>
          <div className="flex flex-col">
            <div className="text-[16px] font-medium text-[#072635]">{stat.label}</div>
            <div className="text-[30px] font-extrabold text-[#072635] leading-tight">
              {stat.value}
            </div>
          </div>
          <div className="flex items-center gap-[8px] text-[14px] text-[#072635]">
            {stat.id === 'heart_rate' && (
              <>
                {stat.levels.toLowerCase().includes('lower') ? (
                  <ArrowDown size={14} className="text-[#072635]" />
                ) : stat.levels.toLowerCase().includes('higher') ? (
                  <ArrowUp size={14} className="text-[#072635]" />
                ) : null}
              </>
            )}
            <span>{stat.levels}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
