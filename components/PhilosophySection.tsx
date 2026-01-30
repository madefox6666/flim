
import React, { useEffect, useRef, useState } from 'react';
import VideoBackground from './VideoBackground';

interface PhilosophySectionProps {
  videoUrl: string;
}

const PhilosophySection: React.FC<PhilosophySectionProps> = ({ videoUrl }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full h-full flex flex-col justify-center px-8 md:px-24 lg:px-48 text-left bg-[#050505]">
      <VideoBackground 
        overlayOpacity={0.85} 
        isSubtle={true}
        placeholderUrl={videoUrl} 
      />

      <div className="relative z-10 max-w-5xl">
        <div className={`transition-all duration-[3000ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <p className="text-xl md:text-3xl lg:text-4xl font-light leading-relaxed text-gray-500 italic font-serif transition-all duration-[4000ms] delay-[500ms]">
            Cinema is no longer finite.
            <br />
            Neither are we.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhilosophySection;
