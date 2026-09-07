import React from 'react';
import { ArrowUpRight, CheckCircle2, Lock, ShieldCheck, Key } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  return (
    <section className="rail-container-dark py-24 px-6 sm:px-12 lg:px-16" id="security">
      {/* Label */}
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
        Security &amp; compliance
      </p>

      {/* Heading & Trust Center CTA */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-white">
          Healthcare-grade security, built in
        </h2>
        <a
          href="https://trust.metriport.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/20 bg-white/5 text-white text-xs font-semibold hover:bg-white/10 transition-all flex-shrink-0"
        >
          View Trust Center <ArrowUpRight size={14} />
        </a>
      </div>

      {/* 3 Certification Seals / Badges */}
      <div className="flex flex-wrap items-center gap-8 mb-16 pb-12 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full border border-amber-500/40 bg-amber-500/10 flex flex-col items-center justify-center text-center p-1 text-[9px] font-bold text-amber-400">
            <span>AICPA</span>
            <span>SOC 2</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-white flex items-center gap-1.5">
              SOC 2 Type II <CheckCircle2 size={14} className="text-emerald-400" />
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full border border-indigo-500/40 bg-indigo-500/10 flex flex-col items-center justify-center text-center p-1 text-[9px] font-bold text-indigo-400">
            <span>HITRUST</span>
            <span>r2</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-white flex items-center gap-1.5">
              HITRUST r2 <CheckCircle2 size={14} className="text-emerald-400" />
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full border border-purple-500/40 bg-purple-500/10 flex flex-col items-center justify-center text-center p-1 text-[9px] font-bold text-purple-400">
            <span>HIPAA</span>
            <span>BAA</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-white flex items-center gap-1.5">
              HIPAA Compliant <CheckCircle2 size={14} className="text-emerald-400" />
            </p>
          </div>
        </div>
      </div>

      {/* 3 Security Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* CARD 1: Fully Encrypted */}
        <div className="rounded-2xl border border-white/12 bg-[#0c1017] p-8 flex flex-col justify-between min-h-[440px] relative overflow-hidden">
          <div className="flex items-start justify-between mb-4 z-10">
            <div>
              <h3 className="text-2xl font-normal text-white mb-2">Fully Encrypted</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                AES-256 encryption at rest and in transit across the platform.
              </p>
            </div>
            <div className="w-8 h-8 rounded border border-white/15 bg-white/5 flex items-center justify-center text-slate-300 flex-shrink-0">
              <ArrowUpRight size={14} />
            </div>
          </div>

          {/* Lock UI mockup */}
          <div className="rounded-xl border border-white/10 bg-[#07090e] p-5 font-mono text-xs text-slate-500 space-y-3 z-10 mt-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px]">
              <span>tls 1.3 · aes-256-gcm</span>
            </div>
            <div className="flex items-center justify-between pt-2">
              <div className="space-y-1.5 text-[11px] text-slate-600">
                <p>A3 F2 91 CE B7</p>
                <p>7D 0A 3F BC E1</p>
                <p>FF 2C 18 94 5A</p>
              </div>
              <div className="w-16 h-20 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-indigo-400 shadow-lg">
                <Lock size={28} />
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2: Audit logging */}
        <div className="rounded-2xl border border-white/12 bg-[#0c1017] p-8 flex flex-col justify-between min-h-[440px] relative overflow-hidden">
          <div className="flex items-start justify-between mb-4 z-10">
            <div>
              <h3 className="text-2xl font-normal text-white mb-2">Audit logging</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                End-to-end audit trails and provenance for data access across the platform.
              </p>
            </div>
            <div className="w-8 h-8 rounded border border-white/15 bg-white/5 flex items-center justify-center text-slate-300 flex-shrink-0">
              <ArrowUpRight size={14} />
            </div>
          </div>

          {/* Audit log timeline mockup */}
          <div className="rounded-xl border border-white/10 bg-[#07090e] p-5 font-mono text-xs text-slate-400 space-y-3 z-10 mt-auto">
            <div className="border-b border-white/10 pb-2 text-[10px] text-slate-500">
              audit.log
            </div>
            <div className="space-y-3 text-[11px]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full border border-slate-500" />
                <span className="text-slate-500">10:24:01</span>
                <span>Patient query</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="text-slate-500">10:31:44</span>
                <span className="text-white font-semibold">Record accessed</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full border border-slate-500" />
                <span className="text-slate-500">10:45:12</span>
                <span>Export logged</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full border border-slate-500" />
                <span className="text-slate-500">11:02:37</span>
                <span>Access revoked</span>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3: Access controls */}
        <div className="rounded-2xl border border-white/12 bg-[#0c1017] p-8 flex flex-col justify-between min-h-[440px] relative overflow-hidden">
          <div className="flex items-start justify-between mb-4 z-10">
            <div>
              <h3 className="text-2xl font-normal text-white mb-2">Access controls</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Role-based access and least-privilege controls for patient data and operations.
              </p>
            </div>
            <div className="w-8 h-8 rounded border border-white/15 bg-white/5 flex items-center justify-center text-slate-300 flex-shrink-0">
              <ArrowUpRight size={14} />
            </div>
          </div>

          {/* Access permissions matrix mockup */}
          <div className="rounded-xl border border-white/10 bg-[#07090e] p-5 font-mono text-xs text-slate-400 space-y-3 z-10 mt-auto">
            <div className="border-b border-white/10 pb-2 text-[10px] text-slate-500 flex justify-between">
              <span>access-controls</span>
              <div className="flex gap-4">
                <span>Records</span>
                <span>Audit</span>
                <span>Export</span>
              </div>
            </div>
            <div className="space-y-2 text-[11px]">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Admin</span>
                <div className="flex gap-6 pr-1">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Clinician</span>
                <div className="flex gap-6 pr-1">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  <span className="text-slate-600">✕</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Viewer</span>
                <div className="flex gap-6 pr-1">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  <span className="text-slate-600">✕</span>
                  <span className="text-slate-600">✕</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
