import React from 'react';
import { Share2, Music2, Youtube, Music, Radio } from 'lucide-react';

interface Platform {
  icon: any;
  name: string;
  description: string;
  status: 'connected' | 'pending' | 'disconnected';
}

export function PlatformIntegration() {
  const platforms: Platform[] = [
    {
      icon: Music2,
      name: "DistroKid",
      description: "Music distribution to major streaming platforms",
      status: 'connected'
    },
    {
      icon: Youtube,
      name: "TubeAnalytics",
      description: "YouTube channel optimization and analytics",
      status: 'pending'
    },
    {
      icon: Music,
      name: "Spotify for Artists",
      description: "Manage your artist profile and analytics",
      status: 'connected'
    },
    {
      icon: Radio,
      name: "SubmitHub",
      description: "Submit music to playlist curators",
      status: 'disconnected'
    }
  ];

  const getStatusColor = (status: Platform['status']) => {
    switch (status) {
      case 'connected':
        return 'text-green-400';
      case 'pending':
        return 'text-yellow-400';
      case 'disconnected':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-kustom-purple/20 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Share2 className="h-6 w-6 text-kustom-gold" />
          <h2 className="text-xl font-semibold text-kustom-gold">Platform Integrations</h2>
        </div>
        <button className="text-sm text-kustom-gold hover:underline">
          Manage All
        </button>
      </div>

      <div className="space-y-4">
        {platforms.map((platform, index) => (
          <div 
            key={index}
            className="bg-kustom-black/40 rounded-lg p-4 border border-kustom-purple/10 hover:border-kustom-purple/30 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <platform.icon className="h-5 w-5 text-kustom-gold" />
                <div>
                  <h3 className="font-medium text-white">{platform.name}</h3>
                  <p className="text-sm text-white/60">{platform.description}</p>
                </div>
              </div>
              <span className={`text-sm ${getStatusColor(platform.status)}`}>
                {platform.status.charAt(0).toUpperCase() + platform.status.slice(1)}
              </span>
            </div>
          </div>
        ))}

        <button className="w-full bg-gradient-to-r from-kustom-purple to-kustom-gold text-white py-2 rounded-lg hover:opacity-90 transition-opacity mt-4">
          Connect New Platform
        </button>
      </div>
    </div>
  );
}