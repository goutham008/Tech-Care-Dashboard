import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronDown, ArrowUp, ArrowDown } from 'lucide-react';

export default function BloodPressureChart({ history }) {
  if (!history || history.length === 0) return null;

  const chartData = history.slice(-6).map(record => ({
    name: `${record.month.substring(0, 3)}. ${record.year}`,
    systolic: record.blood_pressure.systolic.value,
    diastolic: record.blood_pressure.diastolic.value,
  }));

  const latestRecord = history[history.length - 1];

  return (
    <div className="bg-[#F4F0FE] rounded-[16px] p-[20px] flex flex-col lg:flex-row gap-[20px]">
      <div className="flex-1 min-h-[300px]">
        <div className="flex items-center justify-between mb-[20px]">
          <h3 className="text-[18px] font-bold text-[#072635]">Blood Pressure</h3>
          <div className="flex items-center gap-[8px] text-[14px] text-[#072635] cursor-pointer">
            <span>Last 6 months</span>
            <ChevronDown size={16} />
          </div>
        </div>
        <div className="h-[240px] w-full relative" style={{ minHeight: '240px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="0" vertical={false} stroke="#CBC8D4" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#072635', fontSize: 12 }} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#072635', fontSize: 12 }} 
                domain={[60, 180]}
                ticks={[60, 80, 100, 120, 140, 160, 180]}
              />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="systolic" 
                stroke="#E66FD2" 
                strokeWidth={2} 
                dot={{ r: 6, fill: "#E66FD2", strokeWidth: 1, stroke: "#FFFFFF" }}
                activeDot={{ r: 8 }}
              />
              <Line 
                type="monotone" 
                dataKey="diastolic" 
                stroke="#8C6FE6" 
                strokeWidth={2} 
                dot={{ r: 6, fill: "#8C6FE6", strokeWidth: 1, stroke: "#FFFFFF" }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="lg:w-[200px] flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[8px] pb-[16px] border-b border-[#CBC8D4]">
          <div className="flex items-center gap-[4px]">
            <div className="w-[14px] h-[14px] rounded-full bg-[#E66FD2] border-[1px] border-white" />
            <span className="font-bold text-[14px]">Systolic</span>
          </div>
          <div className="text-[22px] font-bold text-[#072635]">
            {latestRecord.blood_pressure.systolic.value}
          </div>
          <div className="flex items-center gap-[8px] text-[14px] font-normal text-[#072635]">
            {latestRecord.blood_pressure.systolic.levels.toLowerCase().includes('higher') ? (
              <ArrowUp size={14} className="text-[#072635] fill-[#072635]" />
            ) : latestRecord.blood_pressure.systolic.levels.toLowerCase().includes('lower') ? (
              <ArrowDown size={14} className="text-[#072635] fill-[#072635]" />
            ) : null}
            <span>{latestRecord.blood_pressure.systolic.levels}</span>
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="flex items-center gap-[4px]">
            <div className="w-[14px] h-[14px] rounded-full bg-[#8C6FE6] border-[1px] border-white" />
            <span className="font-bold text-[14px]">Diastolic</span>
          </div>
          <div className="text-[22px] font-bold text-[#072635]">
            {latestRecord.blood_pressure.diastolic.value}
          </div>
          <div className="flex items-center gap-[8px] text-[14px] font-normal text-[#072635]">
            {latestRecord.blood_pressure.diastolic.levels.toLowerCase().includes('higher') ? (
              <ArrowUp size={14} className="text-[#072635] fill-[#072635]" />
            ) : latestRecord.blood_pressure.diastolic.levels.toLowerCase().includes('lower') ? (
              <ArrowDown size={14} className="text-[#072635] fill-[#072635]" />
            ) : null}
            <span>{latestRecord.blood_pressure.diastolic.levels}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
