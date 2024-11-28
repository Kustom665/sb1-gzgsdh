import React from 'react';
import { BarChart2, Calendar, Users, Briefcase } from 'lucide-react';

export function CareerStrategy() {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-kustom-purple/20 p-6">
      <h2 className="text-xl font-semibold text-kustom-gold mb-6">Career Strategy</h2>
      
      <div className="space-y-4">
        <div className="bg-kustom-black/40 rounded-lg p-4 border border-kustom-purple/10">
          <div className="flex items-center space-x-2 mb-3">
            <Calendar className="h-5 w-5 text-kustom-gold" />
            <h3 className="font-medium text-white">Upcoming Opportunities</h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-white/80">Music Festival Submission</span>
              <span className="text-kustom-gold">2 days left</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/80">Label Pitch Session</span>
              <span className="text-kustom-gold">5 days left</span>
            </div>
          </div>
        </div>

        <div className="bg-kustom-black/40 rounded-lg p-4 border border-kustom-purple/10">
          <div className="flex items-center space-x-2 mb-3">
            <Briefcase className="h-5 w-5 text-kustom-gold" />
            <h3 className="font-medium text-white">Industry Connections</h3>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-kustom-purple border-2 border-kustom-black"></div>
              ))}
            </div>
            <button className="text-kustom-gold hover:underline">View All</button>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-kustom-purple to-kustom-gold text-white py-2 rounded-lg hover:opacity-90 transition-opacity">
          Schedule Strategy Call
        </button>
      </div>
    </div>
  );
}