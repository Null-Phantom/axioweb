import React, { useEffect, useRef } from 'react';

export const ByTheNumbers: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Canvas particle globe and US network connection arcs animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth || 800);
    let height = (canvas.height = canvas.offsetHeight || 450);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || 800;
      height = canvas.height = canvas.offsetHeight || 450;
    };
    window.addEventListener('resize', handleResize);

    // Globe particle grid dots
    const dotsCount = 450;
    const dots: Array<{ x: number; y: number; r: number; alpha: number }> = [];
    const centerX = width * 0.5;
    const centerY = height * 0.5;
    const radius = Math.min(width, height) * 0.38;

    for (let i = 0; i < dotsCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const x = centerX + radius * Math.sin(phi) * Math.cos(theta);
      const y = centerY + radius * Math.sin(phi) * Math.sin(theta);
      dots.push({
        x,
        y,
        r: Math.random() * 1.5 + 0.8,
        alpha: Math.random() * 0.5 + 0.25,
      });
    }

    // Connection arcs
    const arcs = [
      { startX: centerX - 120, startY: centerY + 10, endX: centerX + 140, endY: centerY - 40, progress: 0 },
      { startX: centerX - 80, startY: centerY - 60, endX: centerX + 90, endY: centerY + 70, progress: 0.3 },
      { startX: centerX - 160, startY: centerY + 40, endX: centerX + 40, endY: centerY - 90, progress: 0.6 },
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint globe outline glow
      const grad = ctx.createRadialGradient(centerX, centerY, radius * 0.2, centerX, centerY, radius * 1.2);
      grad.addColorStop(0, 'rgba(99, 102, 241, 0.15)');
      grad.addColorStop(0.7, 'rgba(99, 102, 241, 0.04)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.1, 0, Math.PI * 2);
      ctx.fill();

      // Render particle dots
      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(165, 180, 252, ${dot.alpha})`;
        ctx.fill();
      });

      // Render animated arc lines
      arcs.forEach((arc) => {
        arc.progress = (arc.progress + 0.008) % 1;
        const currentX = arc.startX + (arc.endX - arc.startX) * arc.progress;
        const currentY = arc.startY + (arc.endY - arc.startY) * arc.progress - Math.sin(arc.progress * Math.PI) * 45;

        ctx.beginPath();
        ctx.moveTo(arc.startX, arc.startY);
        ctx.quadraticCurveTo((arc.startX + arc.endX) / 2, (arc.startY + arc.endY) / 2 - 50, arc.endX, arc.endY);
        ctx.strokeStyle = 'rgba(129, 140, 248, 0.25)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Moving glowing pulse dot
        ctx.beginPath();
        ctx.arc(currentX, currentY, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#6366f1';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="rail-container-dark py-24 px-6 sm:px-12 lg:px-16" style={{ backgroundColor: '#121624' }}>
      {/* Section Label */}
      <div className="text-center mb-4">
        <span className="text-[#818cf8] font-semibold text-xs uppercase tracking-wider">By the numbers</span>
      </div>

      {/* Main Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
          Built for the scale of U.S. healthcare
        </h2>
      </div>

      {/* 4 Stats Row */}
      <div className="border-y border-white/10 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-5xl mx-auto mb-16">
        <div className="space-y-2">
          <p className="text-4xl sm:text-5xl font-normal tracking-tight text-white">4.2B</p>
          <p className="text-xs sm:text-sm text-slate-400 max-w-[180px] mx-auto leading-snug">
            Network requests processed per month
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-4xl sm:text-5xl font-normal tracking-tight text-white">750k+</p>
          <p className="text-xs sm:text-sm text-slate-400 max-w-[180px] mx-auto leading-snug">
            Providers connected across the country
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-4xl sm:text-5xl font-normal tracking-tight text-white">340M+</p>
          <p className="text-xs sm:text-sm text-slate-400 max-w-[180px] mx-auto leading-snug">
            Individuals accessible across networks
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-4xl sm:text-5xl font-normal tracking-tight text-white">&lt;15 s</p>
          <p className="text-xs sm:text-sm text-slate-400 max-w-[180px] mx-auto leading-snug">
            p80 time to first structured record
          </p>
        </div>
      </div>

      {/* 3D Particle Globe Graphic Container */}
      <div className="relative w-full max-w-4xl mx-auto h-[400px] flex items-center justify-center overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
    </section>
  );
};
