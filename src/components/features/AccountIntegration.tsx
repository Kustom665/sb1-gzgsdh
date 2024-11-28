import React from 'react';
import { Link2, BarChart3, Users } from 'lucide-react';

export function AccountIntegration() {
  return (
    <div className="bg-white rounded-xl shadow-xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Link2 className="h-6 w-6 text-purple-600" />
        <h2 className="text-xl font-semibold">Connect Your Accounts</h2>
      </div>

      <div className="space-y-4">
        <div className="p-4 border rounded-lg hover:border-purple-400 cursor-pointer transition-colors">
          <div className="flex items-center space-x-3">
            <BarChart3 className="h-5 w-5 text-purple-600" />
            <div>
              <h3 className="font-medium">Chartmetric</h3>
              <p className="text-sm text-gray-600">Track your music analytics and performance</p>
            </div>
          </div>
        </div>

        <div className="p-4 border rounded-lg hover:border-purple-400 cursor-pointer transition-colors">
          <div className="flex items-center space-x-3">
            <Users className="h-5 w-5 text-purple-600" />
            <div>
              <h3 className="font-medium">Indie On The Move</h3>
              <p className="text-sm text-gray-600">Connect with venues and book shows</p>
            </div>
          </div>
        </div>

        <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors mt-4">
          Sync Accounts
        </button>
      </div>
    </div>
  );
}