import React, { useEffect, useState } from 'react';
import { Clock, Calendar, Book } from 'lucide-react';
import { Header } from '../components/Header';
import { ProfileSection } from '../components/ProfileSection';
import { DashboardCard } from '../components/DashboardCard';
import { TotoroChat } from '../components/TotoroChat';

export function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Chihiro Ogino',
    year: '3rd Year',
    major: 'Magical Arts',
    spirit: 'Water Dragon'
  });
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editableProfile, setEditableProfile] = useState(profile);
  const [classes, setClasses] = useState([
    { name: 'Magical Botany', room: '101', time: '9:00 AM' },
    { name: 'Spirit Communication', room: '102', time: '11:00 AM' },
    { name: 'Advanced Spellcasting', room: '103', time: '2:00 PM' }
  ]);
  const [events, setEvents] = useState([
    { title: 'Forest Spirit Festival', date: 'March 15', attendees: 156 },
    { title: 'Potion Making Contest', date: 'March 20', attendees: 89 },
    { title: 'Spring Equinox Ceremony', date: 'March 21', attendees: 234 }
  ]);
  const [deadlines, setDeadlines] = useState([
    { task: 'Herbology Essay', due: 'March 18', subject: 'Magical Botany' },
    { task: 'Spirit Summoning Practice', due: 'March 22', subject: 'Spirit Communication' }
  ]);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Totoro, your magical assistant! How can I help you today?", isBot: true }
  ]);

  const handleProfileSave = () => {
    setProfile(editableProfile);
    setIsEditingProfile(false);
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`min-h-screen relative overflow-hidden ${isDarkMode ? 'bg-[#1a1a1a] text-white' : 'bg-[#f5f3ef] text-[#2c4a3d]'}`}>
      <div className="fixed inset-0 pointer-events-none">
        <div className="magical-particles" />
      </div>

      <div 
        className="pointer-events-none fixed w-8 h-8 rounded-full mix-blend-screen filter blur-sm bg-[#e8d3a3]/30"
        style={{ 
          left: mousePosition.x - 16, 
          top: mousePosition.y - 16,
          transition: 'all 0.1s ease-out'
        }}
      />

      <Header 
        isDarkMode={isDarkMode}
        handleToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        userName={profile.name}
      />

      <main className="max-w-7xl mx-auto p-4 md:p-6 relative">
        <div className={`
          mb-8 
          ${isDarkMode ? 'bg-[#2a3a31]' : 'bg-[#d4e4d9]'} 
          rounded-lg p-6 shadow-md
          transform hover:scale-[1.01] 
          transition-all duration-500 ease-in-out
          hover:shadow-xl hover:shadow-[#7c9b88]/20
          relative overflow-hidden
        `}>
          <div className="magical-border absolute inset-0 pointer-events-none" />
          
          <div className="relative overflow-hidden rounded-lg mb-6 group">
            <img 
              src="https://i.pinimg.com/736x/4b/98/a0/4b98a0da4cc43c61fa747614127733d4.jpg" 
              alt="Campus" 
              className="w-full h-48 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className={`
              absolute inset-0 
              bg-gradient-to-r from-[#7c9b88]/80 to-transparent 
              p-6 flex items-end
              group-hover:from-[#7c9b88]/90
              transition-all duration-500
            `}>
              <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h2 className="text-white text-2xl font-bold mb-2">
                  Welcome back, {profile.name}!
                </h2>
                <p className="text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Your magical learning journey continues
                </p>
              </div>
            </div>
          </div>

          <ProfileSection 
            isDarkMode={isDarkMode}
            profile={profile}
            isEditingProfile={isEditingProfile}
            editableProfile={editableProfile}
            setEditableProfile={setEditableProfile}
            setIsEditingProfile={setIsEditingProfile}
            handleProfileSave={handleProfileSave}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.length > 0 && (
            <DashboardCard
              isDarkMode={isDarkMode}
              title="Today's Classes"
              icon={<Clock className={`h-5 w-5 ${isDarkMode ? 'text-[#a0c1ab]' : 'text-[#7c9b88]'}`} />}
            >
              {classes.map((cls, index) => (
                <div 
                  key={index} 
                  className={`
                    flex items-center justify-between p-3 
                    ${isDarkMode ? 'bg-[#1a2a22]' : 'bg-[#f5f3ef]'} 
                    rounded-md
                    transform hover:translate-x-2
                    hover:shadow-md
                    transition-all duration-300
                    relative
                    overflow-hidden
                    group
                  `}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7c9b88]/0 to-[#7c9b88]/0 group-hover:from-[#7c9b88]/5 group-hover:to-[#7c9b88]/0 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <p className={`
                      font-medium 
                      ${isDarkMode ? 'text-white' : 'text-[#2c4a3d]'}
                      transform group-hover:translate-x-1
                      transition-transform duration-300
                    `}>
                      {cls.name}
                    </p>
                    <p className={`
                      text-sm 
                      ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}
                      transform group-hover:translate-x-1
                      transition-transform duration-300 delay-75
                    `}>
                      Room {cls.room} • {cls.time}
                    </p>
                  </div>
                </div>
              ))}
            </DashboardCard>
          )}

          {events.length > 0 && (
            <DashboardCard
              isDarkMode={isDarkMode}
              title="Upcoming Events"
              icon={<Calendar className={`h-5 w-5 ${isDarkMode ? 'text-[#a0c1ab]' : 'text-[#7c9b88]'}`} />}
            >
              {events.map((event, index) => (
                <div 
                  key={index} 
                  className={`
                    flex items-center justify-between p-3 
                    ${isDarkMode ? 'bg-[#1a2a22]' : 'bg-[#f5f3ef]'} 
                    rounded-md
                    transform hover:translate-x-2
                    hover:shadow-md
                    transition-all duration-300
                    relative
                    overflow-hidden
                    group
                  `}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7c9b88]/0 to-[#7c9b88]/0 group-hover:from-[#7c9b88]/5 group-hover:to-[#7c9b88]/0 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <p className={`
                      font-medium 
                      ${isDarkMode ? 'text-white' : 'text-[#2c4a3d]'}
                      transform group-hover:translate-x-1
                      transition-transform duration-300
                    `}>
                      {event.title}
                    </p>
                    <p className={`
                      text-sm 
                      ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}
                      transform group-hover:translate-x-1
                      transition-transform duration-300 delay-75
                    `}>
                      {event.date} • {event.attendees} attendees
                    </p>
                  </div>
                </div>
              ))}
            </DashboardCard>
          )}

          {deadlines.length > 0 && (
            <DashboardCard
              isDarkMode={isDarkMode}
              title="Upcoming Deadlines"
              icon={<Book className={`h-5 w-5 ${isDarkMode ? 'text-[#a0c1ab]' : 'text-[#7c9b88]'}`} />}
            >
              {deadlines.map((deadline, index) => (
                <div 
                  key={index} 
                  className={`
                    flex items-center justify-between p-3 
                    ${isDarkMode ? 'bg-[#1a2a22]' : 'bg-[#f5f3ef]'} 
                    rounded-md
                    transform hover:translate-x-2
                    hover:shadow-md
                    transition-all duration-300
                    relative
                    overflow-hidden
                    group
                  `}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7c9b88]/0 to-[#7c9b88]/0 group-hover:from-[#7c9b88]/5 group-hover:to-[#7c9b88]/0 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <p className={`
                      font-medium 
                      ${isDarkMode ? 'text-white' : 'text-[#2c4a3d]'}
                      transform group-hover:translate-x-1
                      transition-transform duration-300
                    `}>
                      {deadline.task}
                    </p>
                    <p className={`
                      text-sm 
                      ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}
                      transform group-hover:translate-x-1
                      transition-transform duration-300 delay-75
                    `}>
                      Due: {deadline.due} • {deadline.subject}
                    </p>
                  </div>
                </div>
              ))}
            </DashboardCard>
          )}
        </div>
      </main>

      <style jsx global="true">{`
        .magical-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle, #e8d3a3 1px, transparent 1px),
            radial-gradient(circle, #7c9b88 1px, transparent 1px);
          background-size: 40px 40px;
          animation: particleFloat 20s linear infinite;
          opacity: 0.1;
        }

        .magical-border::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            #7c9b88 0%,
            #e8d3a3 50%,
            #7c9b88 100%
          );
          mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: xor;
          padding: 1px;
          border-radius: 8px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        *:hover > .magical-border::before {
          opacity: 1;
        }

        @keyframes particleFloat {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-2px) translateX(2px);
          }
          50% {
            transform: translateY(-4px) translateX(0);
          }
          75% {
            transform: translateY(-2px) translateX(-2px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }

        .page-transition-enter {
          opacity: 0;
          transform: translateY(10px);
        }
        .page-transition-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 300ms, transform 300ms;
        }
      `}</style>

      <TotoroChat 
        isDarkMode={isDarkMode}
        messages={messages}
        setMessages={setMessages}
      />
    </div>
  );
}