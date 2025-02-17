import React from 'react';
import { GraduationCap, Moon, Sun, User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  isDarkMode: boolean;
  handleToggleDarkMode: () => void;
  userName: string;
}

export function Header({ isDarkMode, handleToggleDarkMode, userName }: HeaderProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  return (
    <header className={`${isDarkMode ? 'bg-[#4a5d53]' : 'bg-[#7c9b88]'} p-4 shadow-lg`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-white" />
          <h1 className="text-2xl font-semibold text-white">Ghibli Academy</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={handleToggleDarkMode}>
            {isDarkMode ? (
              <Sun className="h-6 w-6 text-white" />
            ) : (
              <Moon className="h-6 w-6 text-white" />
            )}
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-[#e8d3a3] flex items-center justify-center">
              <User className="h-5 w-5 text-[#7c9b88]" />
            </div>
            <span className="text-white hidden sm:inline">{userName}</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-2 bg-[#e8d3a3] text-[#7c9b88] rounded-lg hover:bg-[#d8c393] transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}