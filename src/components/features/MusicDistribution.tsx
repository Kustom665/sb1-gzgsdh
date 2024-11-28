import React from 'react';
import { Share2, Music, DollarSign } from 'lucide-react';

export function MusicDistribution() {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Share2 className="h-6 w-6 text-purple-600" />
        <h2 className="text-xl font-semibold">Distribution & Royalties</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg bg-gray-50">
          <div className="flex items-center space-x-2 mb-2">
            <Music className="h-5 w-5 text-purple-600" />
            <h3 className="font-medium">Platform Distribution</h3>
          </div>
          <p className="text-sm text-gray-600">Distribute your music to major streaming platforms</p>
        </div>
        <div className="p-4 border rounded-lg bg-gray-50">
          <div className="flex items-center space-x-2 mb-2">
            <DollarSign className="h-5 w-5 text-purple-600" />
            <h3 className="font-medium">Royalty Tracking</h3>
          </div>
          <p className="text-sm text-gray-600">Monitor your earnings across all platforms</p>
        </div>
      </div>
    </div>
  );
}