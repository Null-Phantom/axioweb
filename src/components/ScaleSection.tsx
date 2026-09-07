import React, { useEffect, useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const ScaleSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated wave graphic expanding from horizontal line into right mesh
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth || 700);
    let height = (canvas.height = canvas.offsetHeight || 300);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || 700;
      height = canvas.height = canvas.offsetHeight || 300;
    };
    window.addEventListener('resize', handleResize);

    let step = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      step += 0.008;

      const ribbonCount = 9;
      const yCenter = height * 0.5;

      for (let i = 0; i < ribbonCount; i++) {
        ctx.beginPath();

        for (let x = 0; x <= width; x += 6) {
          const progress = x / width; // 0 at left origin, 1 at right expansion
          const wave1 = Math.sin(progress * Math.PI * 2.2 + step + i * 0.4) * (20 + i * 14);
          const wave2 = Math.cos(progress * Math.PI * 1.4 - step * 0.6) * 15;
          const envelope = Math.pow(progress, 1.4); // expands wider toward the right

          const y = yCenter + (wave1 + wave2) * envelope;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        const grad = ctx.createLinearGradient(0, 0, width, 0);
        grad.addColorStop(0, 'rgba(249, 115, 22, 0.85)');
        grad.addColorStop(0.35, 'rgba(168, 85, 247, 0.65)');
        grad.addColorStop(0.75, 'rgba(99, 102, 241, 0.45)');
        grad.addColorStop(1, 'rgba(79, 70, 229, 0.15)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6 + i * 0.5;
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="rail-container-dark py-24 px-6 sm:px-12 lg:px-16" id="scale">
      {/* Label */}
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
        Built for scale
      </p>

      {/* Heading & Read the docs CTA */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-white">
          Scale with confidence
        </h2>
        <a
          href="https://docs.metriport.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/20 bg-white/5 text-white text-xs font-semibold hover:bg-white/10 transition-all flex-shrink-0"
        >
          Read the docs <ArrowRight size={14} />
        </a>
      </div>

      {/* Grid Layout: Checklist + Wave Animation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 relative">
        {/* Checklist */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-3 text-slate-200 text-sm">
            <Check size={16} className="text-indigo-400 flex-shrink-0" />
            <span>Consistent performance under peak load</span>
          </div>
          <div className="flex items-center gap-3 text-slate-200 text-sm">
            <Check size={16} className="text-indigo-400 flex-shrink-0" />
            <span>Infrastructure that scales with your growth</span>
          </div>
          <div className="flex items-center gap-3 text-slate-200 text-sm">
            <Check size={16} className="text-indigo-400 flex-shrink-0" />
            <span>Sub-second response times, every request</span>
          </div>
        </div>

        {/* Orange line transitioning into expanding wave graphic */}
        <div className="lg:col-span-7 h-[260px] relative overflow-hidden flex items-center">
          <div className="absolute left-0 w-24 h-[2px] bg-gradient-to-r from-[#ff8a4c] to-[#f97316] hidden lg:block" />
          <canvas ref={canvasRef} className="w-full h-full block" />
        </div>
      </div>

      {/* 2 Big Stat Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-white/10">
        <div className="space-y-2">
          <p className="text-5xl sm:text-6xl font-normal tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-purple-300 bg-clip-text text-transparent">
            99.999%
          </p>
          <p className="text-slate-400 text-sm">Platform uptime</p>
        </div>

        <div className="space-y-2">
          <p className="text-5xl sm:text-6xl font-normal tracking-tight bg-gradient-to-r from-orange-400 via-amber-400 to-amber-200 bg-clip-text text-transparent">
            100M+
          </p>
          <p className="text-slate-400 text-sm">Network requests processed per day</p>
        </div>
      </div>
    </section>
  );
};
