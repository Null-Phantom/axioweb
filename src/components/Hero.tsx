import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated Metriport multi-mesh wave that converges to an exact point
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth || 700);
    let height = (canvas.height = canvas.offsetHeight || 460);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || 700;
      height = canvas.height = canvas.offsetHeight || 460;
    };
    window.addEventListener('resize', handleResize);

    let step = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      step += 0.007;

      const ribbonCount = 12;
      const yCenter = height * 0.5; // midpoint of canvas height

      for (let i = 0; i < ribbonCount; i++) {
        ctx.beginPath();

        for (let x = 0; x <= width; x += 4) {
          const progress = x / width; // 0 at left, 1 at right convergence point
          
          // Intersecting wave network mesh
          const wave1 = Math.sin(progress * Math.PI * 2.6 + step + i * 0.35) * (56 + i * 12);
          const wave2 = Math.cos(progress * Math.PI * 1.6 - step * 0.75 + i * 0.2) * (30 + i * 6);
          
          // Damping factor: at progress = 1, wave amplitude becomes strictly 0
          const envelope = Math.pow(1 - progress, 1.6);
          const y = yCenter + (wave1 + wave2) * envelope;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        // Gradient along wave ribbon mesh
        const grad = ctx.createLinearGradient(0, 0, width, 0);
        grad.addColorStop(0, 'rgba(79, 70, 229, 0.12)');
        grad.addColorStop(0.25, 'rgba(99, 102, 241, 0.4)');
        grad.addColorStop(0.55, 'rgba(168, 85, 247, 0.65)');
        grad.addColorStop(0.82, 'rgba(249, 115, 22, 0.85)');
        grad.addColorStop(1.0, 'rgba(251, 146, 60, 1.0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5 + (i * 0.5);
        ctx.stroke();
      }

      // Draw subtle glowing point at convergence
      ctx.beginPath();
      ctx.arc(width - 2, yCenter, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = '#ff8a4c';
      ctx.shadowColor = '#f97316';
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0;

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  const logos = [
    { name: 'SOLLIS HEALTH' },
    { name: 'COLOR' },
    { name: 'STRIVE HEALTH' },
    { name: 'AMAZON ONE MEDICAL' },
    { name: 'MAVEN' },
    { name: 'WEIGHTWATCHERS' },
    { name: 'WELLPATH' },
    { name: 'BRIGHTSIDE' },
    { name: 'THYME CARE' },
    { name: 'CIRCLE MEDICAL' },
    { name: 'CANVAS' },
  ];

  return (
    <section 
      id="hero"
      className="relative bg-black text-white overflow-hidden w-full"
      style={{
        marginTop: '103px',
        minHeight: 'calc(100vh - 103px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
      }}
    >
      {/* HERO MAIN BODY CONTAINER */}
      <div className="relative w-full flex-1 flex items-center justify-center py-12 md:py-16">
        
        {/* WAVE CANVAS (Absolute positioned layer behind text, z-index 1) */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none z-[1] hidden md:block"
          style={{
            width: '48%',
            height: '460px',
            maxWidth: '720px',
          }}
        >
          <canvas ref={canvasRef} className="w-full h-full block" />
        </div>

        {/* ORANGE HORIZONTAL LINE (Absolute positioned layer behind text, z-index 2) */}
        <div 
          className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none z-[2] hidden md:block"
          style={{
            left: '42%',
            height: '2px',
            background: 'linear-gradient(to right, #ff8a4c 0%, #f97316 35%, #eab308 100%)',
          }}
        />

        {/* HERO CONTENT CONTAINER (Centered Max-width container, z-index 3) */}
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-[3]">
          <div className="md:ml-[42%] max-w-[680px] flex flex-col">
            
            {/* HEADLINE (Single H1 element, normal flow) */}
            <h1 
              className="text-[36px] sm:text-[48px] lg:text-[56px] font-normal leading-[1.05] tracking-tight text-white mb-8"
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
              }}
            >
              <span className="block text-white font-normal">
                Healthcare data infrastructure
              </span>
              <span className="block mt-1">
                <span className="bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#a855f7] bg-clip-text text-transparent font-medium">
                  for next generation{' '}
                </span>
                <span className="bg-gradient-to-r from-[#f97316] to-[#eab308] bg-clip-text text-transparent font-medium">
                  care delivery.
                </span>
              </span>
            </h1>

            {/* PARAGRAPH (Single P element, normal flow below H1) */}
            <p className="text-[17px] sm:text-[19px] leading-[1.4] text-slate-400 font-normal mb-8 max-w-[640px]">
              Complete real-time patient context from every source that matters - transformed into relevant intelligence for your care teams and their AI agents.
            </p>

            {/* CTA BUTTONS (Single Flex container, normal flow below paragraph) */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://docs.metriport.com/medical-api/getting-started/quickstart"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded border border-white/25 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all shadow-sm"
              >
                Read the docs
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-white hover:bg-slate-100 text-[#0b0e14] font-semibold text-sm transition-all shadow-md"
              >
                Book a demo
                <ArrowRight size={16} className="text-[#0b0e14]" />
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* CUSTOMER LOGO STRIP (Bottom of Hero) */}
      <div className="w-full bg-black border-t border-white/10 py-5 relative z-[10] overflow-hidden">
        <div className="w-full overflow-hidden">
          <div className="animate-marquee-slow flex items-center gap-14 whitespace-nowrap">
            {[...logos, ...logos, ...logos].map((logo, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2.5 text-slate-400 text-xs sm:text-[13px] font-semibold tracking-wider uppercase"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] inline-block" />
                <span>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};



