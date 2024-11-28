import React from 'react';
import { Info } from 'lucide-react';

export function TrackMetadata() {
  return (
    <div className="mt-8">
      <div className="flex items-center space-x-2 mb-4">
        <Info className="h-5 w-5 text-purple-600" />
        <h3 className="font-medium">Track Information</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Track Title"
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <input
          type="text"
          placeholder="Artist Name"
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <input
          type="text"
          placeholder="Genre"
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <input
          type="text"
          placeholder="Release Date"
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent col-span-2"
          rows={3}
        />
      </div>
    </div>
  );
}