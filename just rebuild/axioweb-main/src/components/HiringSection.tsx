import React from 'react';
import { ArrowRight } from 'lucide-react';

export const HiringSection: React.FC = () => {
  return (
    <section className="rail-container-light py-24 px-4 sm:px-8 lg:px-12 xl:px-16 w-full" data-theme="light" id="hiring">
      <div className="w-full max-w-[1560px] mx-auto">
        {/* Large Hiring Card with flowing wave background */}
        <div className="bento-card-shell p-8 sm:p-14 relative overflow-hidden bg-white border border-slate-200 mb-8 min-h-[300px] flex flex-col justify-center">
          {/* Subtle decorative wave SVG in background */}
          <svg
            className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
            viewBox="0 0 1000 300"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 0,150 Q 250,50 500,180 T 1000,120"
              stroke="url(#hiring-wave-1)"
              strokeWidth="2"
            />
            <path
              d="M 0,180 Q 300,240 600,80 T 1000,160"
              stroke="url(#hiring-wave-2)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="hiring-wave-1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
              <linearGradient id="hiring-wave-2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">
              WE'RE HIRING
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-900 leading-tight">
              Healthcare data has been broken since HITECH. <br />
              <span className="text-slate-400 font-normal">We're fixing it.</span>
            </h2>
          </div>
        </div>

        {/* 2 Action CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: See our open roles */}
          <a
            href="https://metriport.com/careers"
            className="bento-card-shell p-8 flex items-center justify-between group hover:border-[#6366f1] transition-all bg-white"
          >
            <span className="text-2xl font-normal text-slate-900 group-hover:text-[#6366f1] transition-colors">
              See our open roles
            </span>
            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-[#6366f1] group-hover:text-white group-hover:border-[#6366f1] transition-all">
              <ArrowRight size={18} />
            </div>
          </a>

          {/* Card 2: Book a demo */}
          <a
            href="#contact"
            className="p-8 rounded-xl bg-[#0b0e14] text-white flex items-center justify-between group hover:bg-slate-900 transition-all border border-slate-800"
          >
            <div>
              <p className="text-xs text-slate-400 mb-1">We'll walk you through how Metriport works.</p>
              <span className="text-2xl font-normal text-white">
                Book a demo
              </span>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#0b0e14] transition-all">
              <ArrowRight size={18} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
