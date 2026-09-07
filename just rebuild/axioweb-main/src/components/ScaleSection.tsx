import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

export const ScaleSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 30 dense, luminous ribbon lines matching the reference density
    const ribbonCount = 30;
    const splitRatio = 0.22; // Tight horizontal bundle across first 22% of width

    // Precompute ribbon parameters with smooth harmonic phase progression and thickness density
    const ribbons = Array.from({ length: ribbonCount }, (_, i) => {
      const s = i / (ribbonCount - 1); // 0 to 1
      return {
        s,
        phase: s * 1.85 * Math.PI,     // Harmonic linear phase progression
        baseSpread: (s - 0.5) * 4,      // Tight 4px bundle on the left
        fanSpread: (s - 0.5) * 44,      // Deep, dense vertical dispersion on the right
        lineWidth: 1.0 + Math.sin(s * Math.PI) * 0.4,
        opacity: 0.35 + Math.sin(s * Math.PI) * 0.55,
      };
    });

    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const yCenter = height * 0.5;
      const splitX = width * splitRatio;

      // Color gradient across 100vw width:
      // Solid Orange (0-20%) -> Pink (20-34%) -> Purple (34-54%) -> Indigo (54-76%) -> Electric Blue (76-100vw full edge)
      const grad = ctx.createLinearGradient(0, 0, width, 0);
      grad.addColorStop(0, 'rgba(249, 115, 22, 1)');          // Solid Orange
      grad.addColorStop(0.20, 'rgba(249, 115, 22, 0.98)');   // Orange before transition
      grad.addColorStop(0.32, 'rgba(236, 72, 153, 0.95)');   // Pink transition
      grad.addColorStop(0.50, 'rgba(192, 132, 252, 0.90)');   // Purple
      grad.addColorStop(0.72, 'rgba(129, 140, 248, 0.88)');   // Indigo
      grad.addColorStop(0.88, 'rgba(59, 130, 246, 0.90)');    // Electric Blue
      grad.addColorStop(1, 'rgba(96, 165, 250, 0.85)');       // Dense, vibrant all the way to 100vw edge

      const stepX = 4;
      const waveFreq = 0.0036; // Broad, sweeping harmonic sinusoidal waves
      const baseMaxAmp = Math.min(height * 0.38, 95); // Controlled amplitude

      // Draw all continuous lines from x = -10 to x = width + 60 (extends through 100vw boundary)
      for (let i = 0; i < ribbonCount; i++) {
        const r = ribbons[i];
        ctx.beginPath();
        ctx.moveTo(-10, yCenter + r.baseSpread);

        for (let x = 0; x <= width + 60; x += stepX) {
          let y = yCenter + r.baseSpread;

          if (x > splitX) {
            const dx = x - splitX;
            const totalWaveWidth = width - splitX;
            const u = Math.min(Math.max(dx / totalWaveWidth, 0), 1);

            // Progressive envelope: gentle start, sustained dense wave height through the right edge
            const envelope = Math.sin(Math.min(u * 1.35, 1) * (Math.PI * 0.5));

            // Harmonic sinusoidal traveling wave
            const wave = Math.sin(dx * waveFreq - time * 0.32 + r.phase) * (baseMaxAmp * envelope);
            const spread = r.fanSpread * envelope;

            y = yCenter + r.baseSpread + wave + spread;
          }

          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = grad;
        ctx.lineWidth = r.lineWidth;
        ctx.globalAlpha = r.opacity;
        ctx.stroke();
      }

      ctx.restore();

      // Slow, continuous ambient animation loop
      if (!prefersReducedMotion) {
        time += 0.0032;
        animId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="relative w-full min-w-full bg-black text-white pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-24 lg:pb-28 border-t border-white/10 overflow-hidden" id="scale">
      
      {/* 1. Header & Checklist Area (Completely unobstructed with natural vertical flow) */}
      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-20">
        
        {/* Eyebrow */}
        <p className="text-xs font-normal text-slate-400 mb-3">
          Built for scale
        </p>

        {/* Heading & Read the docs CTA */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-white leading-tight">
            Scale with confidence
          </h2>
          <a
            href="https://docs.metriport.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/20 bg-transparent text-white text-xs font-medium hover:bg-white/10 transition-all flex-shrink-0 self-start md:self-auto"
          >
            Read the docs &gt;
          </a>
        </div>

        {/* 3 Checklist Items */}
        <div className="space-y-3.5 max-w-xl mb-4 sm:mb-6">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
            <Check size={14} className="text-blue-400 flex-shrink-0" />
            <span>Consistent performance under peak load</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
            <Check size={14} className="text-blue-400 flex-shrink-0" />
            <span>Infrastructure that scales with your growth</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
            <Check size={14} className="text-blue-400 flex-shrink-0" />
            <span>Sub-second response times, every request</span>
          </div>
        </div>

      </div>

      {/* 2. 100vw Full-Bleed Wave Canvas (Positioned below checklist with clear vertical separation) */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-60 sm:h-68 lg:h-72 my-4 sm:my-6 overflow-hidden flex items-center pointer-events-none select-none z-10">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
        />
      </div>

      {/* 3. Bottom Area: 2 Big Stat Metrics matching Screenshot 2 */}
      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-20 pt-4 sm:pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14">
          
          {/* Stat 1: 99.999% */}
          <div>
            <p className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              99.999%
            </p>
            <p className="text-xs sm:text-sm text-slate-400 font-normal mt-2">
              Platform uptime
            </p>
          </div>

          {/* Stat 2: 100M+ */}
          <div>
            <p className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-200 bg-clip-text text-transparent">
              100M+
            </p>
            <p className="text-xs sm:text-sm text-slate-400 font-normal mt-2">
              Network requests processed per day
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};
