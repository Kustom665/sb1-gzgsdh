import React from 'react';
import { TrendingUp, Users, PlayCircle, Share2 } from 'lucide-react';

export function AnalyticsDashboard() {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-kustom-purple/20 p-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-semibold text-kustom-gold">Performance Analytics</h2>
        <select className="bg-kustom-black border border-kustom-purple/30 text-white rounded-lg px-3 py-1">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { icon: TrendingUp, label: 'Views', value: '124.5K', trend: '+12.3%' },
          { icon: Users, label: 'Subscribers', value: '1,234', trend: '+5.7%' },
          { icon: PlayCircle, label: 'Watch Time', value: '5.2K hrs', trend: '+8.9%' },
          { icon: Share2, label: 'Shares', value: '2,456', trend: '+15.2%' }
        ].map((stat, index) => (
          <div key={index} className="bg-kustom-black/40 rounded-lg p-4 border border-kustom-purple/10">
            <div className="flex items-center space-x-2 mb-2">
              <stat.icon className="h-5 w-5 text-kustom-gold" />
              <span className="text-white/60">{stat.label}</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-bold text-white">{stat.value}</span>
              <span className="text-green-400 text-sm">{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="h-64 bg-kustom-black/40 rounded-lg border border-kustom-purple/10 p-4">
        <div className="text-center text-white/60 h-full flex items-center justify-center">
          Analytics Graph Placeholder
        </div>
      </div>
    </div>
  );
}