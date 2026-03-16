import React, { useEffect, useState, useRef } from 'react';
import './LoadingScreen.css';
import { teamData } from '../data/teamData';
import { glimpsesImages } from '../data/glimpsesData';

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<{ id: number, x: number, y: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // List of critical assets to preload
    const essentialAssets = [
      '/assets/logos/highways-logo.webp',
      '/assets/logos/svce-logo.webp',
      ...teamData.flatMap(group => group.members.map(m => m.image)),
      ...glimpsesImages.map(img => `/assets/glimpses/${img}`)
    ];

    let loadedCount = 0;
    const totalImages = essentialAssets.length;

    const updateProgress = () => {
      loadedCount++;
      const newProgress = Math.floor((loadedCount / totalImages) * 100);
      setProgress(newProgress);
    };

    // Preload function
    const preloadImages = async () => {
      const promises = essentialAssets.map(src => {
        return new Promise((resolve) => {
          const img = new Image();
          // @ts-ignore - fetchPriority is supported in modern browsers
          img.fetchPriority = 'high';
          img.src = src;
          // Ignore ts issues with image onload
          img.onload = () => { updateProgress(); resolve(null); };
          img.onerror = () => { updateProgress(); resolve(null); }; 
        });
      });
      await Promise.all(promises);
      
      // Wait until all images are successfully loaded, then transition
      setIsLoading(false);
      setTimeout(() => {
        setShouldRender(false);
      }, 1000);
    };

    preloadImages();

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e: MouseEvent) => {
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples(prev => [...prev.slice(-5), newRipple]);

      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      ref={containerRef}
      className={`loading-wrapper ${!isLoading ? 'fade-out' : ''}`}
    >
      <div className="interactive-bg">
        <div
          className="cursor-glow"
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`
          }}
        />

        {ripples.map(ripple => (
          <div
            key={ripple.id}
            className="ripple"
            style={{
              left: ripple.x,
              top: ripple.y
            }}
          />
        ))}
      </div>

      <div className="loading-content">
        <div className="loader-ring">
          <div className="ring-inner"></div>
          <div className="ring-outer" style={{ borderTopColor: '#ff4d4d' }}></div>
        </div>

        <h1 className="loader-logo">HIGHWAYS</h1>
        <div className="loader-line">
          <div className="loader-progress" style={{ width: `${progress}%`, transition: 'width 0.3s ease' }}></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '300px', margin: '15px auto 0' }}>
            <p className="loader-status" style={{ margin: 0 }}>INITIALIZING EXPERIENCE</p>
            <p className="loader-status" style={{ margin: 0, color: '#ff4d4d' }}>{progress}%</p>
        </div>
      </div>

      <div className="grain-overlay"></div>
    </div>
  );
};

export default LoadingScreen;