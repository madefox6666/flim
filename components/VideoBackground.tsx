
import React, { useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  overlayOpacity?: number;
  placeholderUrl?: string;
  isSubtle?: boolean;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  overlayOpacity = 0.5, 
  placeholderUrl = "https://cdn.pixabay.com/video/2021/04/12/70817-537456726_tiny.mp4",
  isSubtle = false
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Explicitly trigger play to handle some edge-case browser behaviors
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.warn("Autoplay was prevented by the browser, but will trigger on interaction:", error);
      });
    }
  }, [placeholderUrl]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <video
        ref={videoRef}
        src={placeholderUrl}
        autoPlay
        loop
        muted
        playsInline
        className={`w-full h-full object-cover video-pan ${isSubtle ? 'opacity-30 grayscale contrast-125' : 'opacity-70'}`}
      />
      <div 
        className="absolute inset-0 bg-black" 
        style={{ opacity: overlayOpacity }}
      />
      {/* VIGNETTE EFFECT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
    </div>
  );
};

export default VideoBackground;
