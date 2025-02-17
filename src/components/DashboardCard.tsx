import React from 'react';
import { Plus } from 'lucide-react';

interface DashboardCardProps {
  isDarkMode: boolean;
  title: string;
  icon?: React.ReactNode;
  onAdd?: () => void;
  children: React.ReactNode;
}

export function DashboardCard({ isDarkMode, title, icon, onAdd, children }: DashboardCardProps) {
  return (
    <div className={`${isDarkMode ? 'bg-[#2c3e36]' : 'bg-white'} p-6 rounded-lg shadow-md`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-[#2c4a3d]'}`}>{title}</h3>
        <div className="flex items-center space-x-2">
          {icon}
          {onAdd && (
            <Plus 
              className={`h-5 w-5 ${isDarkMode ? 'text-[#a0c1ab]' : 'text-[#7c9b88]'} cursor-pointer`} 
              onClick={onAdd}
            />
          )}
        </div>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}