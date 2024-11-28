import React from 'react';
import { Crown, TrendingUp, Youtube, Music2, Users2 } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-kustom-black border-b border-kustom-gold/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Crown className="h-8 w-8 text-kustom-gold" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-kustom-purple to-kustom-gold bg-clip-text text-transparent">
              KustomMoves
            </h1>
          </div>
          <nav>
            <ul className="flex items-center space-x-8">
              <li className="flex items-center space-x-2 text-white/80 hover:text-kustom-gold transition-colors">
                <TrendingUp className="h-4 w-4" />
                <a href="#analytics">Analytics</a>
              </li>
              <li className="flex items-center space-x-2 text-white/80 hover:text-kustom-gold transition-colors">
                <Youtube className="h-4 w-4" />
                <a href="#promotion">Promotion</a>
              </li>
              <li className="flex items-center space-x-2 text-white/80 hover:text-kustom-gold transition-colors">
                <Music2 className="h-4 w-4" />
                <a href="#content">Content</a>
              </li>
              <li className="flex items-center space-x-2 text-white/80 hover:text-kustom-gold transition-colors">
                <Users2 className="h-4 w-4" />
                <a href="#community">Community</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}