import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export function Ecobot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-96 h-[600px] flex flex-col">  {/* Increased width and height */}
          {/* Header */}
          <div className="bg-green-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-medium">Ecobot</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Iframe for Chatbot */}
          <div className="flex-1 overflow-hidden">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/TRMTPn_PYS_8Twl8OA5aG"
              width="100%"
              style={{ height: '100%', minHeight: '100%', border: 'none' }}
              frameBorder="0"
              title="Eco-bot"
            ></iframe>
          </div>
        </div>
      ) : (
        /* Floating Button */
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}

