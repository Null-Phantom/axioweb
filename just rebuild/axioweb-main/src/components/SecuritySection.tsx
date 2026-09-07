import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  return (
    <section className="relative w-full min-w-full bg-black text-white py-20 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-16 xl:px-24 border-t border-white/10" id="security">
      <div className="w-full max-w-[1560px] mx-auto">
        
        {/* Eyebrow */}
        <p className="text-xs font-normal text-slate-400 mb-3">
          Security &amp; compliance
        </p>

        {/* Heading & View Trust Center CTA */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-white leading-tight">
            Healthcare-grade security, built in
          </h2>
          <a
            href="https://trust.metriport.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/20 bg-transparent text-white text-xs font-medium hover:bg-white/10 transition-all flex-shrink-0 self-start md:self-auto"
          >
            View Trust Center &gt;
          </a>
        </div>

        {/* 3 Certification Seals / Badges */}
        <div className="flex flex-wrap items-center gap-8 sm:gap-12 mb-16 sm:mb-20">
          
          {/* Badge 1: SOC 2 */}
          <div className="flex flex-col items-center gap-2.5">
            <div className="relative w-14 h-14 flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="w-full h-full">
                <path
                  d="M32 2 L38 5.5 L44.5 4 L48 10 L54.5 11.5 L55.5 18 L61.5 22.5 L59.5 29 L63 35 L58.5 40 L59.5 46.5 L53 49 L51.5 55.5 L45 55 L41 60.5 L34.5 58 L29.5 60.5 L25.5 55 L19 55.5 L17.5 49 L11 46.5 L12 40 L7.5 35 L11 29 L9 22.5 L15 18 L16 11.5 L22.5 10 L26 4 L32.5 5.5 Z"
                  stroke="#ea580c"
                  strokeWidth="1.2"
                  fill="rgba(234, 88, 12, 0.08)"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-[8px] font-bold tracking-wider text-orange-400 leading-none mb-0.5">AICPA</span>
                <span className="text-[9px] font-extrabold text-orange-500 leading-none">SOC 2</span>
              </div>
            </div>
            <p className="text-xs font-normal text-slate-300 flex items-center gap-1.5">
              SOC 2 Type II
              <span className="w-3.5 h-3.5 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white">
                <Check size={9} strokeWidth={3} />
              </span>
            </p>
          </div>

          {/* Badge 2: HITRUST */}
          <div className="flex flex-col items-center gap-2.5">
            <div className="relative w-14 h-14 flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="w-full h-full">
                <path
                  d="M32 2 L38 5.5 L44.5 4 L48 10 L54.5 11.5 L55.5 18 L61.5 22.5 L59.5 29 L63 35 L58.5 40 L59.5 46.5 L53 49 L51.5 55.5 L45 55 L41 60.5 L34.5 58 L29.5 60.5 L25.5 55 L19 55.5 L17.5 49 L11 46.5 L12 40 L7.5 35 L11 29 L9 22.5 L15 18 L16 11.5 L22.5 10 L26 4 L32.5 5.5 Z"
                  stroke="#ea580c"
                  strokeWidth="1.2"
                  fill="rgba(234, 88, 12, 0.08)"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-[8px] font-bold tracking-wider text-orange-400 leading-none mb-0.5">HITRUST</span>
                <span className="text-[9px] font-extrabold text-orange-500 leading-none">r2</span>
              </div>
            </div>
            <p className="text-xs font-normal text-slate-300 flex items-center gap-1.5">
              HITRUST · r2
              <span className="w-3.5 h-3.5 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white">
                <Check size={9} strokeWidth={3} />
              </span>
            </p>
          </div>

          {/* Badge 3: HIPAA */}
          <div className="flex flex-col items-center gap-2.5">
            <div className="relative w-14 h-14 flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="w-full h-full">
                <path
                  d="M32 2 L38 5.5 L44.5 4 L48 10 L54.5 11.5 L55.5 18 L61.5 22.5 L59.5 29 L63 35 L58.5 40 L59.5 46.5 L53 49 L51.5 55.5 L45 55 L41 60.5 L34.5 58 L29.5 60.5 L25.5 55 L19 55.5 L17.5 49 L11 46.5 L12 40 L7.5 35 L11 29 L9 22.5 L15 18 L16 11.5 L22.5 10 L26 4 L32.5 5.5 Z"
                  stroke="#ea580c"
                  strokeWidth="1.2"
                  fill="rgba(234, 88, 12, 0.08)"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-[8px] font-bold tracking-wider text-orange-400 leading-none mb-0.5">HIPAA</span>
                <span className="text-[9px] font-extrabold text-orange-500 leading-none">BAA</span>
              </div>
            </div>
            <p className="text-xs font-normal text-slate-300 flex items-center gap-1.5">
              HIPAA · Compliant
              <span className="w-3.5 h-3.5 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white">
                <Check size={9} strokeWidth={3} />
              </span>
            </p>
          </div>

        </div>

        {/* 3 Large Security Cards in a Single Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* ===================================================== */}
          {/* CARD 1: Fully Encrypted                               */}
          {/* ===================================================== */}
          <div className="rounded-2xl border border-white/10 bg-[#090c13] p-7 sm:p-8 flex flex-col justify-between min-h-[440px] relative overflow-hidden">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl sm:text-2xl font-normal text-white">Fully Encrypted</h3>
                <div className="w-7 h-7 rounded border border-white/15 bg-white/5 flex items-center justify-center text-slate-300">
                  <ArrowUpRight size={13} />
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xs mb-8">
                AES-256 encryption at rest and in transit across the platform.
              </p>
            </div>

            {/* Lock Terminal Visual Mockup */}
            <div className="rounded-xl border border-white/10 bg-[#06080d] p-5 font-mono text-xs text-slate-500 mt-auto">
              <div className="flex items-center gap-2 border-b border-white/10 pb-3 text-[11px] text-slate-500">
                <span className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-600 inline-block" />
                  <span className="w-2 h-2 rounded-full bg-slate-600 inline-block" />
                </span>
                <span className="ml-2">tls 1.3 · aes-256-gcm</span>
              </div>
              
              <div className="flex items-center justify-between pt-5">
                <div className="space-y-2 text-[11px] font-mono text-slate-500">
                  <p>A3 F2 91 CE B7</p>
                  <p>7D 0A 3F BC E1</p>
                  <p>FF 2C 18 94 5A</p>
                  <p>4B 7E A2 D3 0F</p>
                </div>
                
                {/* Padlock Illustration */}
                <div className="relative w-20 h-24 flex items-center justify-center">
                  <svg viewBox="0 0 80 96" className="w-full h-full" fill="none">
                    {/* Shackle */}
                    <path
                      d="M24 44 V26 C24 17.16 31.16 10 40 10 C48.84 10 56 17.16 56 26 V44"
                      stroke="#475569"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                    {/* Body */}
                    <rect
                      x="14"
                      y="40"
                      width="52"
                      height="48"
                      rx="10"
                      fill="#1e293b"
                      stroke="#334155"
                      strokeWidth="2"
                    />
                    {/* Inner highlight */}
                    <rect
                      x="16"
                      y="42"
                      width="48"
                      height="44"
                      rx="8"
                      fill="#0f172a"
                    />
                    {/* Keyhole */}
                    <circle cx="40" cy="58" r="4.5" fill="#38bdf8" />
                    <polygon points="38,58 42,58 43,72 37,72" fill="#38bdf8" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================== */}
          {/* CARD 2: Audit logging                                 */}
          {/* ===================================================== */}
          <div className="rounded-2xl border border-white/10 bg-[#090c13] p-7 sm:p-8 flex flex-col justify-between min-h-[440px] relative overflow-hidden">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl sm:text-2xl font-normal text-white">Audit logging</h3>
                <div className="w-7 h-7 rounded border border-white/15 bg-white/5 flex items-center justify-center text-slate-300">
                  <ArrowUpRight size={13} />
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xs mb-8">
                End-to-end audit trails and provenance for data access across the platform.
              </p>
            </div>

            {/* Audit Log Timeline Visual Mockup */}
            <div className="rounded-xl border border-white/10 bg-[#06080d] p-5 font-mono text-xs text-slate-400 mt-auto">
              <div className="flex items-center gap-2 border-b border-white/10 pb-3 text-[11px] text-slate-500">
                <span className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-600 inline-block" />
                  <span className="w-2 h-2 rounded-full bg-slate-600 inline-block" />
                </span>
                <span className="ml-2">audit.log</span>
              </div>
              
              <div className="relative pt-4 space-y-3.5 text-[11px]">
                {/* Timeline vertical line */}
                <div className="absolute left-[5px] top-6 bottom-3 w-px bg-slate-700 pointer-events-none" />

                {/* Event 1 */}
                <div className="flex items-center gap-3 relative z-10">
                  <span className="w-2.5 h-2.5 rounded-full border border-slate-500 bg-[#06080d]" />
                  <span className="text-slate-500 font-mono w-16">10:24:01</span>
                  <span className="text-slate-400">Patient query</span>
                </div>

                {/* Event 2 (Active/Highlighted) */}
                <div className="flex items-center gap-3 relative z-10">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  <span className="text-slate-400 font-mono w-16">10:31:44</span>
                  <span className="text-white font-medium">Record accessed</span>
                </div>

                {/* Event 3 */}
                <div className="flex items-center gap-3 relative z-10">
                  <span className="w-2.5 h-2.5 rounded-full border border-slate-500 bg-[#06080d]" />
                  <span className="text-slate-500 font-mono w-16">10:45:12</span>
                  <span className="text-slate-400">Export logged</span>
                </div>

                {/* Event 4 */}
                <div className="flex items-center gap-3 relative z-10">
                  <span className="w-2.5 h-2.5 rounded-full border border-slate-500 bg-[#06080d]" />
                  <span className="text-slate-500 font-mono w-16">11:02:37</span>
                  <span className="text-slate-400">Access revoked</span>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================== */}
          {/* CARD 3: Access controls                               */}
          {/* ===================================================== */}
          <div className="rounded-2xl border border-white/10 bg-[#090c13] p-7 sm:p-8 flex flex-col justify-between min-h-[440px] relative overflow-hidden">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl sm:text-2xl font-normal text-white">Access controls</h3>
                <div className="w-7 h-7 rounded bg-white text-black flex items-center justify-center font-bold">
                  <ArrowUpRight size={14} />
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xs mb-8">
                Role-based access and least-privilege controls for patient data and operations.
              </p>
            </div>

            {/* Access Matrix Visual Mockup */}
            <div className="rounded-xl border border-white/10 bg-[#06080d] p-5 font-mono text-xs text-slate-400 mt-auto">
              <div className="flex items-center gap-2 border-b border-white/10 pb-3 text-[11px] text-slate-500">
                <span className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-600 inline-block" />
                  <span className="w-2 h-2 rounded-full bg-slate-600 inline-block" />
                </span>
                <span className="ml-2">access-controls</span>
              </div>

              <div className="pt-3 space-y-3 text-[11px]">
                {/* Column Headers */}
                <div className="flex justify-between items-center text-slate-500 text-[10px]">
                  <span></span>
                  <div className="flex gap-7 pr-2">
                    <span className="w-8 text-center">Records</span>
                    <span className="w-8 text-center">Audit</span>
                    <span className="w-8 text-center">Export</span>
                  </div>
                </div>

                {/* Row 1: Admin */}
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Admin</span>
                  <div className="flex gap-7 pr-2">
                    <span className="w-8 flex justify-center"><span className="w-2 h-2 rounded-full bg-blue-500" /></span>
                    <span className="w-8 flex justify-center"><span className="w-2 h-2 rounded-full bg-blue-500" /></span>
                    <span className="w-8 flex justify-center"><span className="w-2 h-2 rounded-full bg-blue-500" /></span>
                  </div>
                </div>

                {/* Row 2: Clinician */}
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Clinician</span>
                  <div className="flex gap-7 pr-2">
                    <span className="w-8 flex justify-center"><span className="w-2 h-2 rounded-full bg-blue-500" /></span>
                    <span className="w-8 flex justify-center"><span className="w-2 h-2 rounded-full bg-blue-500" /></span>
                    <span className="w-8 flex justify-center text-slate-600 font-sans text-xs">✕</span>
                  </div>
                </div>

                {/* Row 3: Viewer */}
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Viewer</span>
                  <div className="flex gap-7 pr-2">
                    <span className="w-8 flex justify-center"><span className="w-2 h-2 rounded-full bg-blue-500/40" /></span>
                    <span className="w-8 flex justify-center text-slate-600 font-sans text-xs">✕</span>
                    <span className="w-8 flex justify-center text-slate-600 font-sans text-xs">✕</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
