import React from 'react';
import { Users2, MessageCircle, Heart } from 'lucide-react';

export function CommunityInsights() {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-kustom-purple/20 p-6">
      <h2 className="text-xl font-semibold text-kustom-gold mb-6">Community Insights</h2>
      
      <div className="space-y-4">
        <div className="bg-kustom-black/40 rounded-lg p-4 border border-kustom-purple/10">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Users2 className="h-5 w-5 text-kustom-gold" />
              <span className="text-white">Audience Growth</span>
            </div>
            <span className="text-green-400">+23%</span>
          </div>
          <div className="w-full bg-kustom-black/60 rounded-full h-2">
            <div className="bg-gradient-to-r from-kustom-purple to-kustom-gold w-3/4 h-full rounded-full"></div>
          </div>
        </div>

        <div className="bg-kustom-black/40 rounded-lg p-4 border border-kustom-purple/10">
          <div className="flex items-center space-x-2 mb-3">
            <MessageCircle className="h-5 w-5 text-kustom-gold" />
            <h3 className="font-medium text-white">Recent Comments</h3>
          </div>
          <div className="space-y-2">
            {['Great content!', 'Love your style!', 'Keep it up!'].map((comment, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-kustom-purple" />
                <span className="text-white/80">{comment}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}