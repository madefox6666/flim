
import React from 'react';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import ConnectSection from './components/ConnectSection';

/**
 * PRODUCTION ASSET CONFIGURATION
 * 
 * 1. Create a folder named 'public' in your project root.
 * 2. Inside 'public', create a folder named 'assets'.
 * 3. Place 'hero.mp4' and 'philosophy.mp4' inside 'public/assets/'.
 * 
 * When you build, Vite will place these at yourdomain.com/assets/...
 */
const VIDEO_ASSETS = {
  hero: "/assets/hero.mp4", 
  philosophy: "/assets/philosophy.mp4" 
};

const App: React.FC = () => {
  return (
    <main className="snap-container">
      {/* SECTION 1: HERO */}
      <section className="snap-section">
        <HeroSection videoUrl={VIDEO_ASSETS.hero} />
      </section>

      {/* SECTION 2: PHILOSOPHY */}
      <section className="snap-section">
        <PhilosophySection videoUrl={VIDEO_ASSETS.philosophy} />
      </section>

      {/* SECTION 3: CONNECT */}
      <section className="snap-section">
        <ConnectSection />
      </section>
    </main>
  );
};

export default App;
