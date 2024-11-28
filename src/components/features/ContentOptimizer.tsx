import React from 'react';
import { Sparkles, Tags, Target } from 'lucide-react';

export function ContentOptimizer() {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-kustom-purple/20 p-6">
      <h2 className="text-xl font-semibold text-kustom-gold mb-6">Content Optimizer</h2>
      
      <div className="space-y-4">
        <div className="bg-kustom-black/40 rounded-lg p-4 border border-kustom-purple/10">
          <div className="flex items-center space-x-2 mb-3">
            <Sparkles className="h-5 w-5 text-kustom-gold" />
            <h3 className="font-medium text-white">Title Suggestions</h3>
          </div>
          <input
            type="text"
            placeholder="Enter your video title..."
            className="w-full bg-kustom-black border border-kustom-purple/30 text-white rounded-lg px-3 py-2"
          />
        </div>

        <div className="bg-kustom-black/40 rounded-lg p-4 border border-kustom-purple/10">
          <div className="flex items-center space-x-2 mb-3">
            <Tags className="h-5 w-5 text-kustom-gold" />
            <h3 className="font-medium text-white">Tag Generator</h3>
          </div>
          <textarea
            placeholder="Enter keywords..."
            className="w-full bg-kustom-black border border-kustom-purple/30 text-white rounded-lg px-3 py-2"
            rows={3}
          />
        </div>

        <button className="w-full bg-gradient-to-r from-kustom-purple to-kustom-gold text-white py-2 rounded-lg hover:opacity-90 transition-opacity">
          Optimize Content
        </button>
      </div>
    </div>
  );
}