import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';

export function ChatSupport() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([
    { type: 'bot', text: 'Hi! How can I help you today?' }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    setChat([
      ...chat,
      { type: 'user', text: message },
      { type: 'bot', text: 'Thanks for your message! Our support team will respond shortly.' }
    ]);
    setMessage('');
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 h-[600px] flex flex-col">
      <div className="flex items-center space-x-3 mb-6">
        <MessageCircle className="h-6 w-6 text-purple-600" />
        <h2 className="text-xl font-semibold">Customer Support</h2>
      </div>

      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                msg.type === 'user'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}