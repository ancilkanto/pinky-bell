'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

interface VideoPlayerProps {
  videoUrl: string;
  posterUrl?: string;
  poster?: string;
  className?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export default function VideoPlayer({ 
  videoUrl, 
  posterUrl, 
  poster, 
  className = '', 
  controls = false, 
  autoPlay = false, 
  loop = false, 
  muted = false 
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [showControls, setShowControls] = useState(false);
  
  // Use poster prop if provided, otherwise use posterUrl
  const videoPoster = poster || posterUrl;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div 
      className={`relative w-full h-full group cursor-pointer ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-lg"
        poster={videoPoster}
        onEnded={handleVideoEnd}
        preload="metadata"
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Play/Pause Button Overlay */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          className="blur-background cursor-pointer hover:bg-opacity-70 rounded-full p-4 transition-all duration-300 transform hover:scale-110 border border-white"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? (
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-white rounded-sm"></div>
                <div className="w-1 h-4 bg-white rounded-sm"></div>
              </div>
            </div>
          ) : (
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
