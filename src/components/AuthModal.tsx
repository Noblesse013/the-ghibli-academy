import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'register';
  onSubmit: (email: string, password: string) => void;
  isDarkMode: boolean;
}

export function AuthModal({ isOpen, onClose, mode, onSubmit, isDarkMode }: AuthModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`${isDarkMode ? 'bg-[#2c3e36] text-white' : 'bg-white text-[#2c4a3d]'} p-6 rounded-lg shadow-xl w-full max-w-md`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{mode === 'login' ? 'Login' : 'Register'}</h2>
          <X 
            className="h-5 w-5 cursor-pointer hover:text-gray-500" 
            onClick={onClose}
          />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-2 rounded-md border ${
                isDarkMode 
                  ? 'bg-[#1a2a22] border-[#4a5d53] text-white' 
                  : 'border-gray-300 text-[#2c4a3d]'
              }`}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-2 rounded-md border ${
                isDarkMode 
                  ? 'bg-[#1a2a22] border-[#4a5d53] text-white' 
                  : 'border-gray-300 text-[#2c4a3d]'
              }`}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#7c9b88] text-white rounded-md hover:bg-[#6b8a77] transition-colors"
          >
            {mode === 'login' ? 'Login' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
}