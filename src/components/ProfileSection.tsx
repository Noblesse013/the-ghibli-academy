import React from 'react';
import { Edit, Save } from 'lucide-react';

interface ProfileData {
  name: string;
  year: string;
  major: string;
  spirit: string;
}

interface ProfileSectionProps {
  isDarkMode: boolean;
  profile: ProfileData;
  isEditingProfile: boolean;
  editableProfile: ProfileData;
  setEditableProfile: (profile: ProfileData) => void;
  setIsEditingProfile: (isEditing: boolean) => void;
  handleProfileSave: () => void;
}

export function ProfileSection({
  isDarkMode,
  profile,
  isEditingProfile,
  editableProfile,
  setEditableProfile,
  setIsEditingProfile,
  handleProfileSave,
}: ProfileSectionProps) {
  return (
    <div className={`${isDarkMode ? 'bg-[#2c3e36]' : 'bg-white'} rounded-lg p-6 shadow-sm`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-[#2c4a3d]'}`}>Student Profile</h3>
        {isEditingProfile ? (
          <Save 
            className={`h-5 w-5 ${isDarkMode ? 'text-[#a0c1ab]' : 'text-[#7c9b88]'} cursor-pointer`} 
            onClick={handleProfileSave}
          />
        ) : (
          <Edit 
            className={`h-5 w-5 ${isDarkMode ? 'text-[#a0c1ab]' : 'text-[#7c9b88]'} cursor-pointer`} 
            onClick={() => setIsEditingProfile(true)}
          />
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {isEditingProfile ? (
          <>
            <input
              className={`p-2 border rounded ${
                isDarkMode ? 'bg-[#1a2a22] border-[#4a5d53] text-white' : 'bg-white text-[#2c4a3d]'
              }`}
              value={editableProfile.name}
              onChange={(e) => setEditableProfile({...editableProfile, name: e.target.value})}
              placeholder="Name"
            />
            <input
              className={`p-2 border rounded ${
                isDarkMode ? 'bg-[#1a2a22] border-[#4a5d53] text-white' : 'bg-white text-[#2c4a3d]'
              }`}
              value={editableProfile.year}
              onChange={(e) => setEditableProfile({...editableProfile, year: e.target.value})}
              placeholder="Year"
            />
            <input
              className={`p-2 border rounded ${
                isDarkMode ? 'bg-[#1a2a22] border-[#4a5d53] text-white' : 'bg-white text-[#2c4a3d]'
              }`}
              value={editableProfile.major}
              onChange={(e) => setEditableProfile({...editableProfile, major: e.target.value})}
              placeholder="Major"
            />
            <input
              className={`p-2 border rounded ${
                isDarkMode ? 'bg-[#1a2a22] border-[#4a5d53] text-white' : 'bg-white text-[#2c4a3d]'
              }`}
              value={editableProfile.spirit}
              onChange={(e) => setEditableProfile({...editableProfile, spirit: e.target.value})}
              placeholder="Guardian Spirit"
            />
          </>
        ) : (
          <>
            <div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Year</p>
              <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-[#2c4a3d]'}`}>{profile.year}</p>
            </div>
            <div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Major</p>
              <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-[#2c4a3d]'}`}>{profile.major}</p>
            </div>
            <div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Guardian Spirit</p>
              <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-[#2c4a3d]'}`}>{profile.spirit}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}