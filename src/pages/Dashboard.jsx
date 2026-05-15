import React, { useState } from 'react';
import { Home, Users, Calendar, MessageSquare, CreditCard, Settings, MoreVertical, Menu, X } from 'lucide-react';
import BloodPressureChart from '../components/BloodPressureChart';
import DiagnosticList from '../components/DiagnosticList';
import PatientProfile from '../components/PatientProfile';
import StatsCards from '../components/StatsCards';
import LabResults from '../components/LabResults';
import PatientList from '../components/PatientList';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';


export default function Dashboard({ patients, selectedPatient, onSelectPatient }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const latestRecord = selectedPatient?.diagnosis_history?.[selectedPatient.diagnosis_history.length - 1];

  const navItems = [
    { name: 'Overview', icon: Home, active: false },
    { name: 'Patients', icon: Users, active: true },
    { name: 'Schedule', icon: Calendar, active: false },
    { name: 'Message', icon: MessageSquare, active: false },
    { name: 'Transactions', icon: CreditCard, active: false },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F6F7F8] pt-28 pb-8 px-4 font-manrope"
    >
      {/* Header Inside Dashboard for simplified structure per screenshot */}
      <header className="fixed top-[18px] left-[18px] right-[18px] z-50 h-[72px] bg-white rounded-full px-[32px] flex items-center justify-between shadow-sm border border-[#EDEDED] max-w-[1564px] mx-auto">
        <div className="flex items-center">
          <img src="Images/Logo.png" alt="Tech.Care" className="h-[48px]" referrerPolicy="no-referrer" />
        </div>


        <nav className="hidden lg:flex items-center gap-[10px]">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className={cn(
                "flex items-center gap-2 px-4 py-3 rounded-full transition-colors font-bold text-sm",
                item.active
                  ? "bg-[#01F0D0] text-[#072635]"
                  : "text-[#072635] hover:bg-[#F6F7F8]"
              )}
            >
              <item.icon size={18} />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-[40px] pl-[12px] border-l border-[#EDEDED]">
          <div className="flex items-center gap-[8px]">
            <img
              src="/Images/Dr_Jose_Simmons.png"
              alt="Dr. Jose Simmons"
              className="w-[44px] h-[44px] rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="text-[14px] font-bold text-[#072635]">Dr. Jose Simmons</span>
              <span className="text-[14px] text-[#707070]">General Practitioner</span>
            </div>
          </div>
          <div className="flex items-center gap-[3px]">
            <button className="text-[#072635] hover:bg-[#F6F7F8] px-[12px] py-[10px] rounded-full transition-colors border-r border-[#EDEDED]">
              <Settings size={20} />
            </button>
            <button className="text-[#072635] hover:bg-[#F6F7F8] px-[12px] py-[10px] rounded-full transition-colors">
              <MoreVertical size={20} />
            </button>
          </div>
        </div>

        <button
          className="lg:hidden p-2 text-[#072635]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden pt-24 px-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "flex items-center gap-4 px-6 py-4 rounded-[12px] font-bold text-lg",
                  item.active ? "bg-[#01F0D0] text-[#072635]" : "text-[#072635] hover:bg-[#F6F7F8]"
                )}
              >
                <item.icon size={24} />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Main Layout */}
      <main className="max-w-[1564px] mx-auto grid grid-cols-1 lg:grid-cols-[290px_1fr] xl:grid-cols-[367px_1fr] gap-[32px] items-start pt-[12px]">
        {/* Sidebar: Patient List */}
        <aside className="bg-white rounded-[16px] overflow-hidden lg:h-[calc(100vh-140px)] lg:sticky lg:top-[118px]">
          <PatientList
            patients={patients}
            selectedPatientName={selectedPatient?.name}
            onSelectPatient={onSelectPatient}
          />
        </aside>

        {/* Content Area */}
        <div className="flex flex-col xl:flex-row gap-[32px]">
          {/* Diagnosis History Row */}
          <div className="flex-1 flex flex-col gap-[32px] min-w-0">
            <div className="bg-white rounded-[16px] p-[20px] flex flex-col gap-[40px]">
              <h2 className="text-[24px] font-extrabold text-[#072635]">Diagnosis History</h2>
              <BloodPressureChart history={selectedPatient?.diagnosis_history || []} />
              <StatsCards latestRecord={latestRecord} />
            </div>
            <DiagnosticList list={selectedPatient?.diagnostic_list || []} />
          </div>

          {/* Right Column: Profile and Lab Results */}
          <div className="xl:w-[367px] flex flex-col gap-[32px] flex-shrink-0">
            <PatientProfile patient={selectedPatient} />
            <LabResults results={selectedPatient?.lab_results || []} />
          </div>
        </div>
      </main>
    </motion.div>
  );
}
