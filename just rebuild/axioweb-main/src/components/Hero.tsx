import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const LOGOS = [
  'SOLLIS HEALTH', 'color', 'strive HEALTH', 'amazon one medical',
  'MAVEN', 'WEIGHT WATCHERS', 'WELLPATH', 'BRIGHTSIDE',
  'THYMECARE', 'CIRCLE MEDICAL', 'CANVAS'
];

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let t = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      t += 0.0035;

      const count = 15;
      const center = h * 0.5;
      const convergence = w;

      for (let i = 0; i < count; i++) {
        ctx.beginPath();
        const offset = (i - (count - 1) / 2) * 9;

        for (let x = -20; x <= convergence; x += 3) {
          const p = Math.max(0, Math.min(1, x / convergence));
          const envelope = Math.pow(1 - p, 1.15);
          const primary = Math.sin(p * Math.PI * 2.15 + i * 0.19 + t) * (105 + i * 3);
          const secondary = Math.sin(p * Math.PI * 5.2 - i * 0.08 - t * 0.6) * 18;
          const y = center + offset * envelope + (primary + secondary) * envelope;

          if (x === -20) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.lineTo(convergence, center);

        const g = ctx.createLinearGradient(0, 0, w, 0);
        g.addColorStop(0, 'rgba(65, 72, 170, 0.20)');
        g.addColorStop(0.42, 'rgba(99, 102, 241, 0.68)');
        g.addColorStop(0.68, 'rgba(168, 85, 247, 0.80)');
        g.addColorStop(0.88, 'rgba(244, 114, 182, 0.82)');
        g.addColorStop(1, 'rgba(249, 115, 22, 0.98)');

        ctx.strokeStyle = g;
        ctx.lineWidth = i === 7 ? 2.4 : 1.25;
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="hero" className="hero-shell">
      <div className="hero-stage">
        <div className="hero-wave" aria-hidden="true">
          <canvas ref={canvasRef} />
        </div>

        <div className="hero-line" aria-hidden="true" />

        <div className="hero-inner">
          <div className="hero-copy">
            <h1>
              <span className="hero-title-white">Healthcare data infrastructure</span>
              <span className="hero-title-gradient">
                for next generation <span className="hero-title-orange">care delivery.</span>
              </span>
            </h1>

            <p>
              Complete real-time patient context from every source that matters -
              transformed into relevant intelligence for your care teams and their AI agents.
            </p>

            <div className="hero-actions">
              <a href="https://docs.metriport.com/" target="_blank" rel="noreferrer" className="hero-btn hero-btn-secondary">
                Read the docs
              </a>
              <a href="#contact" className="hero-btn hero-btn-primary">
                Book a demo <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-logo-strip">
        <div className="hero-logo-track">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <span className="hero-logo" key={`${logo}-${i}`}>
              <i />
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
