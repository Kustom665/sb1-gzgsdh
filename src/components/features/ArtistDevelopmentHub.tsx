import React from 'react';
import { Lightbulb, BookOpen, Target, Award } from 'lucide-react';

export function ArtistDevelopmentHub() {
  const resources = [
    {
      icon: Lightbulb,
      title: "Industry Insights",
      description: "Latest trends and strategies in music production",
      progress: 75
    },
    {
      icon: BookOpen,
      title: "Learning Paths",
      description: "Structured courses for artist development",
      progress: 30
    },
    {
      icon: Target,
      title: "Career Goals",
      description: "Track your progress and milestones",
      progress: 60
    },
    {
      icon: Award,
      title: "Achievements",
      description: "Unlock badges and certifications",
      progress: 45
    }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-kustom-purple/20 p-6">
      <h2 className="text-xl font-semibold text-kustom-gold mb-6">Artist Development</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resources.map((resource, index) => (
          <div key={index} className="bg-kustom-black/40 rounded-lg p-4 border border-kustom-purple/10">
            <div className="flex items-center space-x-3 mb-3">
              <resource.icon className="h-5 w-5 text-kustom-gold" />
              <div>
                <h3 className="font-medium text-white">{resource.title}</h3>
                <p className="text-sm text-white/60">{resource.description}</p>
              </div>
            </div>
            <div className="w-full bg-kustom-black/60 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-kustom-purple to-kustom-gold h-full rounded-full"
                style={{ width: `${resource.progress}%` }}
              ></div>
            </div>
            <div className="mt-2 text-right">
              <span className="text-sm text-kustom-gold">{resource.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}