import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, Database, Layout, LayoutGrid, Github } from 'lucide-react';

interface RadialLine {
  angle: number;       // Angle in radians from center
  progress: number;    // 0 (center) to 1 (outer edge)
  speed: number;       // Progression speed
  lengthScale: number; // Base length multiplier
  colorIdx: number;    // 0: purple, 1: blue, 2: pink, 3: orange
  maxAlpha: number;    // Subtle opacity ceiling
}

export const DeveloperSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Line color palette definitions (tail to head)
    const colorSchemes = [
      { tail: 'rgba(168, 85, 247, 0.15)', head: 'rgba(192, 132, 252, 0.85)' }, // Purple
      { tail: 'rgba(59, 130, 246, 0.15)',  head: 'rgba(96, 165, 250, 0.85)' },  // Blue
      { tail: 'rgba(236, 72, 153, 0.15)', head: 'rgba(244, 63, 94, 0.80)' },   // Pink
      { tail: 'rgba(249, 115, 22, 0.20)',  head: 'rgba(251, 146, 60, 0.90)' },  // Orange (occasional)
    ];

    const lineCount = 36; // Sparse, understated data-field
    const lines: RadialLine[] = [];

    // Helper to spawn/reset a line
    const initLine = (startRandomProgress: boolean): RadialLine => {
      // Color weighting: 40% Purple, 30% Blue, 20% Pink, 10% Orange
      const rand = Math.random();
      let colorIdx = 0;
      if (rand < 0.40) colorIdx = 0;
      else if (rand < 0.70) colorIdx = 1;
      else if (rand < 0.90) colorIdx = 2;
      else colorIdx = 3;

      return {
        angle: Math.random() * Math.PI * 2,
        progress: startRandomProgress ? Math.random() : 0.01,
        speed: 0.0022 + Math.random() * 0.0028, // 2x faster, smooth continuous outward flow
        lengthScale: 0.7 + Math.random() * 0.6,
        colorIdx,
        maxAlpha: 0.45 + Math.random() * 0.35,
      };
    };

    // Initialize evenly distributed lines across depth
    for (let i = 0; i < lineCount; i++) {
      lines.push(initLine(true));
    }

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

      // Invisible vanishing point around the upper-middle Enterprise CTA canvas
      const centerX = width * 0.52;
      const centerY = Math.min(height * 0.25, 240);
      const maxRadius = Math.sqrt(width * width + height * height) * 0.75;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Exponential perspective distance: accelerates slightly as it moves closer to viewer
        const rStart = Math.pow(line.progress, 1.8) * maxRadius;
        const lineLength = (20 + 90 * Math.pow(line.progress, 1.4)) * line.lengthScale;
        const rEnd = rStart + lineLength;

        const cosA = Math.cos(line.angle);
        const sinA = Math.sin(line.angle);

        const x1 = centerX + rStart * cosA;
        const y1 = centerY + rStart * sinA;
        const x2 = centerX + rEnd * cosA;
        const y2 = centerY + rEnd * sinA;

        // Smooth opacity fade: fades in near center, peaks in middle, fades out at edges
        let alpha = line.maxAlpha;
        if (line.progress < 0.18) {
          alpha *= (line.progress / 0.18);
        } else if (line.progress > 0.72) {
          alpha *= Math.max(0, (1 - line.progress) / 0.28);
        }

        if (alpha > 0.01) {
          const scheme = colorSchemes[line.colorIdx];
          const grad = ctx.createLinearGradient(x1, y1, x2, y2);
          grad.addColorStop(0, scheme.tail);
          grad.addColorStop(1, scheme.head);

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.1;
          ctx.lineCap = 'round';
          ctx.globalAlpha = alpha;
          ctx.stroke();
        }

        // Advance progress outward
        if (!prefersReducedMotion) {
          line.progress += line.speed;
          if (line.progress >= 1.0) {
            // Seamlessly recycle back to center
            lines[i] = initLine(false);
          }
        }
      }

      ctx.restore();

      if (!prefersReducedMotion) {
        animId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="relative w-full min-w-full bg-black text-white overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-24 lg:pb-28 px-6 sm:px-10 lg:px-16 xl:px-24" id="developers">
      
      {/* ========================================================= */}
      {/* CONTINUOUS RADIAL DATA-FIELD / TUNNEL ANIMATION (CANVAS)  */}
      {/* ========================================================= */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
      />

      {/* ========================================================= */}
      {/* CONTINUOUS COMPOSITION CONTAINER                           */}
      {/* ========================================================= */}
      <div className="w-full max-w-[1560px] mx-auto relative z-10">
        
        {/* ======================================================= */}
        {/* SECTION 1: ENTERPRISE CTA (UPPER-LEFT COMPACT BLOCK)    */}
        {/* ======================================================= */}
        <div className="max-w-xl lg:max-w-2xl mb-14 sm:mb-16 lg:mb-20">
          
          {/* Eyebrow */}
          <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-medium mb-3">
            Fastest industry-wide setup time
          </p>

          {/* 2-Line Headline matching exact line break */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-white leading-[1.14] mb-3 sm:mb-4">
            Build at enterprise scale. Ship at <br />
            startup speed.
          </h2>

          {/* Short Supporting Text */}
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6 font-normal">
            Integrate once. Go live in days, not quarters.
          </p>

          {/* Two Small CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://dash.metriport.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-white text-slate-950 font-medium text-xs inline-flex items-center gap-1.5 hover:bg-slate-100 transition-all shadow-xs"
            >
              Start building <ArrowRight size={13} />
            </a>
            <a
              href="https://docs.metriport.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-white/20 bg-transparent text-white font-medium text-xs hover:bg-white/10 hover:border-white/30 transition-all"
            >
              Read the docs
            </a>
          </div>

        </div>

        {/* ======================================================= */}
        {/* SECTION 2: OPEN SOURCE PANEL (ATMOSPHERIC GRADIENT)     */}
        {/* ======================================================= */}
        <div className="rounded-[28px] sm:rounded-3xl border border-white/15 p-8 sm:p-10 lg:p-12 relative overflow-hidden bg-[#0a0d14]/95 shadow-2xl">
          
          {/* Atmospheric Soft Blurred Glow Spots */}
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-20 right-1/4 w-[450px] h-[450px] bg-pink-600/15 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute top-1/3 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Panel Top Content: Title + Subtitle + GitHub Button */}
          <div className="max-w-3xl mb-10 relative z-10">
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-normal text-white leading-tight">
              Open source, with no black boxes:
            </h3>
            <p className="text-slate-400 font-normal text-2xl sm:text-3xl lg:text-[32px] leading-tight mb-6">
              best-in-class trust, transparency, and security.
            </p>

            <a
              href="https://github.com/metriport/metriport"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-white/20 bg-white/5 text-white text-xs font-medium hover:bg-white/10 transition-all"
            >
              <Github size={14} />
              View on GitHub <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Thin Horizontal Divider */}
          <div className="w-full h-px bg-white/10 mb-8 sm:mb-10 relative z-10" />

          {/* 4 Evenly Distributed Feature Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            
            {/* Column 1: API */}
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg border border-white/15 bg-white/5 flex items-center justify-center text-slate-300 font-mono text-xs">
                &#123; &#125;
              </div>
              <h4 className="text-sm font-semibold text-white">Build on our API</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Integrate anywhere with structured FHIR-native output.
              </p>
              <a
                href="https://docs.metriport.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-sky-400 hover:text-sky-300 transition-colors"
              >
                Read the guide &gt;
              </a>
            </div>

            {/* Column 2: Warehouse */}
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg border border-white/15 bg-white/5 flex items-center justify-center text-slate-300">
                <Database size={15} />
              </div>
              <h4 className="text-sm font-semibold text-white">Sync with our warehouse</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Analytics-ready data in a unified schema, deployed where you need it.
              </p>
              <a
                href="https://docs.metriport.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-sky-400 hover:text-sky-300 transition-colors"
              >
                Read the guide &gt;
              </a>
            </div>

            {/* Column 3: iFrame Embed */}
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg border border-white/15 bg-white/5 flex items-center justify-center text-slate-300">
                <Layout size={15} />
              </div>
              <h4 className="text-sm font-semibold text-white">Embed via iframe</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Integrate pre-built components into your existing workflows.
              </p>
              <a
                href="https://docs.metriport.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-sky-400 hover:text-sky-300 transition-colors"
              >
                Read the guide &gt;
              </a>
            </div>

            {/* Column 4: Dashboard */}
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg border border-white/15 bg-white/5 flex items-center justify-center text-slate-300">
                <LayoutGrid size={15} />
              </div>
              <h4 className="text-sm font-semibold text-white">Your own dashboard</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Standalone tools for platform setup and debugging.
              </p>
              <a
                href="https://docs.metriport.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-sky-400 hover:text-sky-300 transition-colors"
              >
                Read the guide &gt;
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
