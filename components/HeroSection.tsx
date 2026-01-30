
import React, { useEffect, useState } from 'react';
import VideoBackground from './VideoBackground';

interface HeroSectionProps {
  videoUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ videoUrl }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <VideoBackground 
        overlayOpacity={0.5} 
        placeholderUrl={videoUrl} 
      />
      
      <div className={`relative z-10 flex flex-col items-center reveal-blur ${isLoaded ? 'visible' : ''}`}>
        <h1 className="cinematic-text text-3xl md:text-5xl lg:text-7xl font-extralight text-white tracking-[0.4em] mb-12">
          Vision Without End
        </h1>
        
        <p className={`transition-all duration-[4000ms] delay-[1500ms] ease-in-out font-light text-xs md:text-sm text-gray-400 tracking-[0.3em] uppercase ${isLoaded ? 'opacity-40 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Cinema is only the beginning
        </p>
      </div>

      <div className={`absolute bottom-16 left-1/2 -translate-x-1/2 transition-opacity duration-[3000ms] delay-[2500ms] ${isLoaded ? 'opacity-20' : 'opacity-0'}`}>
        <div className="w-[1px] h-16 bg-white animate-pulse"></div>
      </div>
    </div>
  );
};

export default HeroSection;
