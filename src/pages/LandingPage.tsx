import React, { useState } from 'react';
import { GraduationCap, BookOpen, Users, Star, Moon, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AuthModal } from '../components/AuthModal'; // Import the AuthModal component

export function LandingPage() {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const handleAuth = (email: string, password: string) => {
    console.log(`Attempting to ${authMode}:`, { email, password });
    // Dummy authentication logic
    setTimeout(() => {
      setIsAuthModalOpen(false);
      if (authMode === 'login') {
        navigate('/dashboard');
      } else {
        alert('Registration successful! Please log in.');
        setAuthMode('login');
        setIsAuthModalOpen(true);
      }
    }, 1000);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#1a1a1a] text-white' : 'bg-[#f5f3ef]'}`}>
      <header className={`${isDarkMode ? 'bg-[#4a5d53]' : 'bg-[#7c9b88]'} p-4`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-white" />
            <h1 className="text-2xl font-semibold text-white">Ghibli Academy</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div 
              className="cursor-pointer"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? (
                <Sun className="h-6 w-6 text-white" />
              ) : (
                <Moon className="h-6 w-6 text-white" />
              )}
            </div>
            <div className="space-x-4">
              <button
                onClick={() => {
                  setAuthMode('login');
                  setIsAuthModalOpen(true);
                }}
                className="px-4 py-2 bg-white text-[#7c9b88] rounded-lg font-medium hover:bg-[#e8d3a3] transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setAuthMode('register');
                  setIsAuthModalOpen(true);
                }}
                className="px-4 py-2 bg-[#e8d3a3] text-[#7c9b88] rounded-lg font-medium hover:bg-[#d8c393] transition-colors"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="relative h-[600px] flex items-center">
          <img 
            src="https://images.unsplash.com/photo-1490131784822-b4626a8ec96a?auto=format&fit=crop&w=2000"
            alt="Magical Academy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative max-w-7xl mx-auto px-4 text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Ghibli Academy</h1>
            <p className="text-xl mb-8 max-w-2xl">Where magic meets education in a world of endless possibilities. Join us on a journey of discovery and wonder.</p>
            <button
              onClick={() => {
                console.log('Navigating to dashboard...');
                navigate('/dashboard');
              }}
              className="px-6 py-3 bg-[#7c9b88] text-white rounded-lg font-medium hover:bg-[#6b8a77] transition-colors"
            >
              Start Your Journey
            </button>
          </div>
        </section>

        <section className={`py-20 ${isDarkMode ? 'bg-[#2c3e36]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4">
            <h2 className={`text-3xl font-bold text-center ${isDarkMode ? 'text-white' : 'text-[#2c4a3d]'} mb-12`}>
              Why Choose Ghibli Academy?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <BookOpen className={`h-12 w-12 ${isDarkMode ? 'text-[#a0c1ab]' : 'text-[#7c9b88]'} mx-auto mb-4`} />
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-[#2c4a3d]'}`}>
                  Magical Curriculum
                </h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Comprehensive courses in spellcasting, potion-making, and magical creature care.
                </p>
              </div>
              <div className="text-center p-6">
                <Users className={`h-12 w-12 ${isDarkMode ? 'text-[#a0c1ab]' : 'text-[#7c9b88]'} mx-auto mb-4`} />
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-[#2c4a3d]'}`}>
                  Diverse Community
                </h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Join students from all realms and dimensions in a vibrant learning environment.
                </p>
              </div>
              <div className="text-center p-6">
                <Star className={`h-12 w-12 ${isDarkMode ? 'text-[#a0c1ab]' : 'text-[#7c9b88]'} mx-auto mb-4`} />
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-[#2c4a3d]'}`}>
                  Expert Faculty
                </h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Learn from renowned masters of magic and mystical arts.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2c4a3d] text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>Spirit Realm, Cloud District</p>
              <p>enchanted@ghibli.academy</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#e8d3a3]">About Us</a></li>
                <li><a href="#" className="hover:text-[#e8d3a3]">Programs</a></li>
                <li><a href="#" className="hover:text-[#e8d3a3]">Admissions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#e8d3a3]">Twitter</a>
                <a href="#" className="hover:text-[#e8d3a3]">Instagram</a>
                <a href="#" className="hover:text-[#e8d3a3]">Facebook</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p>&copy; 2025 Ghibli Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onSubmit={handleAuth}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}