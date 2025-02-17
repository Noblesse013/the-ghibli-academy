import React, { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
}

interface TotoroChatProps {
  isDarkMode: boolean;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
}

export function TotoroChat({ isDarkMode, messages, setMessages }: TotoroChatProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const updatedMessages = [...messages, { text: newMessage, isBot: false }];
      setMessages(updatedMessages);
      
      // Enhanced AI responses
      setTimeout(() => {
        const lowerCaseMessage = newMessage.toLowerCase();
        let response = "I'm here to help! What would you like to know about your magical studies?";

        // More contextual and varied responses
        const responses = {
          "yes": [
            "Wonderful! Let me tell you about our main subjects: We have Potion Making, Spellcasting, Magical Creatures, and Herbology. Which one interests you the most?",
            "Excellent! Would you like to learn about potions, spells, or perhaps our magical creature studies?",
            "Great! We can explore potions, spells, or magical creatures. What catches your interest?"
          ],
          "help": [
            "I'd be delighted to assist you with your magical studies! What subject interests you?",
            "As your magical guide, I can help you with potions, spells, or finding your way around the academy.",
            "Let me know what you need help with - I'm quite knowledgeable about all things magical!"
          ],
          "potion": [
            "Ah, potions! Remember to always check your ingredients twice and stir with intention.",
            "Would you like some tips on brewing more effective potions?",
            "Don't forget to log your potion-making progress in your tracker!"
          ],
          "spell": [
            "Practice makes perfect with spellcasting! Have you tried meditation before casting?",
            "Remember the three keys to successful spells: focus, intention, and proper pronunciation.",
            "Would you like to review some basic spellcasting techniques?"
          ],
          "mood": [
            "Your emotional state affects your magic. How are you feeling today?",
            "Remember to track your mood - it's closely tied to your magical abilities!",
            "Taking care of your emotional well-being is just as important as studying spells."
          ],
          "tired": [
            "Perhaps a refreshing Energizing Elixir would help? Don't forget to rest between studies!",
            "Magic requires energy - make sure you're getting enough rest!",
            "Take a break and try some meditation exercises I can teach you."
          ],
          "affirmation": [
            "Would you like to hear today's magical affirmation?",
            "Remember: 'My magical abilities grow stronger each day!'",
            "Let's practice some positive magical intentions together!"
          ]
        };

        // Find matching keywords and get random response
        for (const [keyword, responseList] of Object.entries(responses)) {
          if (lowerCaseMessage.includes(keyword)) {
            response = responseList[Math.floor(Math.random() * responseList.length)];
            break;
          }
        }

        // Additional contextual responses
        if (lowerCaseMessage.includes("thank")) {
          response = "You're most welcome! Remember, a grateful heart enhances magical abilities! 🌟";
        } else if (lowerCaseMessage.includes("bye") || lowerCaseMessage.includes("goodbye")) {
          response = "Farewell for now! May your magic shine bright until we meet again! ✨";
        }

        setMessages([...updatedMessages, { text: response, isBot: true }]);
      }, 1000);
      
      setNewMessage('');
    }
  };

  return (
    <div className={`
      fixed transition-all duration-300
      ${isChatOpen 
        ? 'bottom-0 right-0 md:bottom-4 md:right-4 w-full md:w-80 h-[100vh] md:h-auto' 
        : 'bottom-4 right-4 w-auto'
      }
    `}>
      {isChatOpen ? (
        <div className={`
          ${isDarkMode ? 'bg-[#2c3e36]' : 'bg-white'} 
          shadow-lg overflow-hidden
          h-full md:h-auto md:rounded-lg
        `}>
          {/* Chat Header */}
          <div className="bg-[#7c9b88] p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPpUrW9IfGJ9S5BCpNH5s-yRQfuYiLDblw4p3eU2TkLgdBLZeVoYt8dvn-ORQzJ2Wy8E&usqp=CAU" 
                alt="Totoro"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-white font-medium">Totoro Helper</span>
            </div>
            <X 
              className="h-5 w-5 text-white cursor-pointer" 
              onClick={() => setIsChatOpen(false)}
            />
          </div>

          {/* Chat Messages */}
          <div className={`
            overflow-y-auto p-4 space-y-4
            h-[calc(100vh-132px)] 
            md:h-80
          `}>
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`
                  max-w-[80%] p-3 rounded-lg
                  ${message.isBot 
                    ? (isDarkMode ? 'bg-[#1a2a22] text-white' : 'bg-[#f5f3ef] text-[#2c4a3d]')
                    : 'bg-[#7c9b88] text-white'
                  }
                `}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className={`
            p-4 border-t 
            ${isDarkMode ? 'border-[#4a5d53]' : ''}
            bg-inherit
          `}>
            <div className="flex space-x-2 max-w-full">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask Totoro..."
                className={`
                  flex-1 p-2 border rounded-lg 
                  focus:outline-none focus:border-[#7c9b88]
                  ${isDarkMode 
                    ? 'bg-[#1a2a22] border-[#4a5d53] text-white placeholder-gray-400' 
                    : 'bg-white border-gray-200 text-[#2c4a3d]'
                  }
                `}
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-[#7c9b88] text-white rounded-lg flex-shrink-0 hover:bg-[#6b8a77] transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsChatOpen(true)}
          className="bg-[#7c9b88] text-white p-4 rounded-full shadow-lg hover:bg-[#6b8a77] transition-colors"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}