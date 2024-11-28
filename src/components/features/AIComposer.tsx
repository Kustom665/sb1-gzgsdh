import React, { useState } from 'react';
import { Wand2 } from 'lucide-react';

export function AIComposer() {
  const [prompt, setPrompt] = useState('');

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Wand2 className="h-6 w-6 text-purple-600" />
        <h2 className="text-xl font-semibold">AI Music Composer</h2>
      </div>
      <div className="space-y-4">
        <textarea
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="Describe your music idea..."
          rows={4}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-colors"
          onClick={() => console.log('AI Composition requested:', prompt)}
        >
          Generate Composition
        </button>
      </div>
    </div>
  );
}