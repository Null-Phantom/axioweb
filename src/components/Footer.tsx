import React, { useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { MetriportLogo } from './MetriportLogo';

export const Footer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Footer wave canvas animation across bottom right
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth || 1000);
    let height = (canvas.height = canvas.offsetHeight || 140);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || 1000;
      height = canvas.height = canvas.offsetHeight || 140;
    };
    window.addEventListener('resize', handleResize);

    let step = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      step += 0.006;

      const ribbonCount = 8;
      const yCenter = height * 0.5;

      for (let i = 0; i < ribbonCount; i++) {
        ctx.beginPath();

        for (let x = 0; x <= width; x += 8) {
          const progress = x / width;
          const wave1 = Math.sin(progress * Math.PI * 2.2 + step + i * 0.4) * (20 + i * 8);
          const y = yCenter + wave1;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        const grad = ctx.createLinearGradient(0, 0, width, 0);
        grad.addColorStop(0, 'rgba(99, 102, 241, 0.05)');
        grad.addColorStop(0.5, 'rgba(168, 85, 247, 0.35)');
        grad.addColorStop(1, 'rgba(249, 115, 22, 0.5)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2 + i * 0.4;
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
    <footer className="rail-container-dark pt-20 pb-12 px-6 sm:px-12 lg:px-16 relative overflow-hidden bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 relative z-10">
        {/* Column 1: Logo & Newsletter */}
        <div className="space-y-6 lg:col-span-1">
          <a href="#" aria-label="Metriport — home">
            <MetriportLogo className="h-6 text-white" />
          </a>
          <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
            Healthcare data infrastructure for next generation care delivery.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded border border-white/15 bg-white/5 flex items-center justify-center text-slate-300 hover:bg-white/10 transition-all">
              <Linkedin size={14} />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded border border-white/15 bg-white/5 flex items-center justify-center text-slate-300 hover:bg-white/10 transition-all">
              <Twitter size={14} />
            </a>
            <a href="https://github.com/metriport/metriport" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded border border-white/15 bg-white/5 flex items-center justify-center text-slate-300 hover:bg-white/10 transition-all">
              <Github size={14} />
            </a>
          </div>

          {/* Newsletter */}
          <div className="space-y-2 pt-2">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">NEWSLETTER</p>
            <p className="text-xs text-slate-500">
              Product updates and healthcare data insights from the Metriport team.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/5 border border-white/15 rounded px-3 py-1.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 w-full"
              />
              <button type="submit" className="px-3 py-1.5 rounded bg-white text-slate-950 font-semibold text-xs hover:bg-slate-200 transition-all">
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Column 2: PLATFORM */}
        <div className="space-y-3">
          <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400">PLATFORM</p>
          <ul className="space-y-2 text-xs text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">HIE Networks</a></li>
            <li><a href="#" className="hover:text-white transition-colors">ADT Networks</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pharmacies &amp; Labs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">EHRs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Harmonization Engine</a></li>
            <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Data Warehouse</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Ambient Monitoring &amp; TCM</a></li>
            <li><a href="#" className="hover:text-white transition-colors">EHR Apps</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Dashboard &amp; iFrame</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Messaging</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Medical Record Summaries</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Condition Suspecting &amp; Recapture</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Care Gap Identification</a></li>
          </ul>
        </div>

        {/* Column 3: SOLUTIONS */}
        <div className="space-y-3">
          <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400">SOLUTIONS</p>
          <ul className="space-y-2 text-xs text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">Enterprises &amp; health systems</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Providers &amp; startups</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Value-based care</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Healthcare IT &amp; EHRs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Customer stories</a></li>
          </ul>
        </div>

        {/* Column 4: DEVELOPERS */}
        <div className="space-y-3">
          <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400">DEVELOPERS</p>
          <ul className="space-y-2 text-xs text-slate-400">
            <li><a href="https://docs.metriport.com" className="hover:text-white transition-colors">Docs</a></li>
            <li><a href="https://github.com/metriport/metriport" className="hover:text-white transition-colors">GitHub</a></li>
            <li><a href="https://trust.metriport.com" className="hover:text-white transition-colors">Security</a></li>
          </ul>
        </div>

        {/* Column 5: COMPANY */}
        <div className="space-y-3">
          <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400">COMPANY</p>
          <ul className="space-y-2 text-xs text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Wave Mesh Canvas */}
      <div className="w-full h-24 relative overflow-hidden pointer-events-none opacity-60">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Metriport Inc. All rights reserved.</p>
        <div className="flex items-center gap-6 mt-2 sm:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">HIPAA Compliance</a>
        </div>
      </div>
    </footer>
  );
};
