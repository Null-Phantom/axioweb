import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

export const ByTheNumbers: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  useEffect(() => {
    let phi = 4.65; // North America / US centered
    let width = 0;
    const currentCanvas = canvasRef.current;
    if (!currentCanvas) return;

    const onResize = () => {
      if (currentCanvas) {
        width = currentCanvas.offsetWidth;
      }
    };
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(currentCanvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      width: (width || 900) * 2,
      height: (width || 900) * 2,
      phi: 4.65,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 25000,
      mapBrightness: 7,
      mapBaseBrightness: 0.05,
      baseColor: [0.42, 0.5, 0.78],
      markerColor: [0.9, 0.95, 1.0],
      glowColor: [0.15, 0.22, 0.45],
      markers: [
        { location: [37.7749, -122.4194], size: 0.09 }, // San Francisco
        { location: [40.7128, -74.006], size: 0.1 },   // New York
        { location: [41.8781, -87.6298], size: 0.08 }, // Chicago
        { location: [29.7604, -95.3698], size: 0.08 }, // Houston
        { location: [33.749, -84.388], size: 0.07 },   // Atlanta
        { location: [47.6062, -122.3321], size: 0.07 }, // Seattle
        { location: [39.7392, -104.9903], size: 0.06 }, // Denver
        { location: [25.7617, -80.1918], size: 0.06 }, // Miami
        { location: [42.3601, -71.0589], size: 0.08 }, // Boston
        { location: [34.0522, -118.2437], size: 0.08 }, // Los Angeles
        { location: [38.9072, -77.0369], size: 0.08 }, // Washington D.C.
        { location: [32.7767, -96.7970], size: 0.07 }, // Dallas
        { location: [44.9778, -93.2650], size: 0.06 }, // Minneapolis
        { location: [39.9526, -75.1652], size: 0.07 }, // Philadelphia
        { location: [33.4484, -112.0740], size: 0.06 }, // Phoenix
      ],
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phi += 0.0015; // Subtle continuous rotation
        }
        state.phi = phi + pointerInteractionMovement.current;
        state.width = (width || 900) * 2;
        state.height = (width || 900) * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section className="w-full bg-[#12192b] pt-24 sm:pt-28 pb-0 text-white relative overflow-hidden" id="by-the-numbers">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Section Label */}
        <div className="text-center mb-4">
          <span className="text-[#818cf8] font-semibold text-xs uppercase tracking-wider">By the numbers</span>
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-white leading-tight">
            Built for the scale of U.S. healthcare
          </h2>
        </div>

        {/* 4 Statistics Row */}
        <div className="border-t border-b border-white/10 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-6xl mx-auto mb-4">
          <div className="space-y-2">
            <p className="text-4xl sm:text-5xl font-normal tracking-tight text-white">4.2B</p>
            <p className="text-xs sm:text-sm text-slate-400 max-w-[220px] mx-auto leading-snug">
              Network requests processed per month
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl sm:text-5xl font-normal tracking-tight text-white">750k+</p>
            <p className="text-xs sm:text-sm text-slate-400 max-w-[220px] mx-auto leading-snug">
              Providers connected across the country
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl sm:text-5xl font-normal tracking-tight text-white">340M+</p>
            <p className="text-xs sm:text-sm text-slate-400 max-w-[220px] mx-auto leading-snug">
              Individuals accessible across networks
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl sm:text-5xl font-normal tracking-tight text-white">&lt;15 s</p>
            <p className="text-xs sm:text-sm text-slate-400 max-w-[220px] mx-auto leading-snug">
              p80 time to first structured record
            </p>
          </div>
        </div>
      </div>

      {/* Large Realistic Dotted Globe Container */}
      <div className="relative w-full max-w-[1050px] lg:max-w-[1150px] mx-auto aspect-square flex items-center justify-center -mt-6 sm:-mt-12 lg:-mt-16 z-10 cursor-grab active:cursor-grabbing select-none">
        {/* Subtle Atmospheric Blue Glow Behind Globe */}
        <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.20)_0%,_rgba(99,102,241,0.05)_50%,_transparent_70%)] blur-2xl pointer-events-none" />

        <canvas
          ref={canvasRef}
          style={{ width: '100%', height: '100%', maxWidth: '100%', aspectRatio: '1' }}
          className="opacity-95 block"
          onPointerDown={(e) => {
            pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          }}
          onPointerUp={() => {
            pointerInteracting.current = null;
          }}
          onPointerOut={() => {
            pointerInteracting.current = null;
          }}
          onMouseMove={(e) => {
            if (pointerInteracting.current !== null) {
              const delta = e.clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta * 0.005;
            }
          }}
          onTouchMove={(e) => {
            if (pointerInteracting.current !== null && e.touches[0]) {
              const delta = e.touches[0].clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta * 0.005;
            }
          }}
        />

        {/* Realistic Curved Connection Arcs */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-80"
          viewBox="0 0 800 800"
          fill="none"
        >
          <defs>
            <linearGradient id="arc-stream-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.1" />
              <stop offset="40%" stopColor="#c7d2fe" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="arc-stream-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#a5b4fc" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.95" />
            </linearGradient>
            <filter id="arc-point-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#818cf8" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* West Coast (SF/CA) to Texas/South connection arc */}
          <path
            d="M 288 375 Q 335 410, 375 445"
            stroke="url(#arc-stream-1)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="288" cy="375" r="2" fill="#c7d2fe" />
          <circle cx="375" cy="445" r="2.8" fill="#ffffff" filter="url(#arc-point-glow)" />

          {/* Midwest to East Coast (NYC) connection arc */}
          <path
            d="M 340 400 Q 405 385, 458 370"
            stroke="url(#arc-stream-2)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="340" cy="400" r="2" fill="#a5b4fc" />
          <circle cx="458" cy="370" r="2.8" fill="#ffffff" filter="url(#arc-point-glow)" />
        </svg>
      </div>

      {/* 100% FULL-VIEWPORT-WIDTH SOFT GRADIENT FADE INTO WHITE "How it works" */}
      <div className="absolute inset-x-0 bottom-0 w-full h-44 sm:h-56 lg:h-64 bg-gradient-to-b from-transparent via-[#12192b]/35 via-35% via-[#c7d2fe]/20 via-70% to-[#fbfbfa] pointer-events-none z-20" />
    </section>
  );
};
