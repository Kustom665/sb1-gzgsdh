import React from 'react';
import { Header } from './components/layout/Header';
import { AnalyticsDashboard } from './components/features/AnalyticsDashboard';
import { ContentOptimizer } from './components/features/ContentOptimizer';
import { CommunityInsights } from './components/features/CommunityInsights';
import { ArtistDevelopmentHub } from './components/features/ArtistDevelopmentHub';
import { CareerStrategy } from './components/features/CareerStrategy';
import { PlatformIntegration } from './components/features/PlatformIntegration';
import { MusicUpload } from './components/features/MusicUpload';
import { AccountIntegration } from './components/features/AccountIntegration';
import { ChatSupport } from './components/features/ChatSupport';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-kustom-black to-kustom-black/95 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <AnalyticsDashboard />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <MusicUpload />
              <AccountIntegration />
            </div>
            <ArtistDevelopmentHub />
          </div>
          <div className="space-y-8">
            <ContentOptimizer />
            <PlatformIntegration />
            <CareerStrategy />
            <CommunityInsights />
            <ChatSupport />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;