import React from 'react';
import { ShieldCheck, Lock, Key, FileCheck, CheckCircle2 } from 'lucide-react';

export const SecurityCompliance: React.FC = () => {
  const badges = [
    { title: 'HIPAA Compliant', desc: 'BAA executed across all API tiers and data pipelines.' },
    { title: 'SOC 2 Type II Certified', desc: 'Independently audited for security, availability & confidentiality.' },
    { title: 'ISO 27001 Certified', desc: 'Global gold standard for information security management systems.' },
    { title: 'CCPA & State Privacy', desc: 'Strict data handling compliant with state patient privacy mandates.' },
  ];

  return (
    <section className="relative w-full bg-[#0b0e14] text-white py-24 border-t border-white/10">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#818cf8]">
            Security & Compliance
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-white">
            Enterprise security built into every layer
          </h2>
          <p className="font-display text-base text-white/60">
            We handle sensitive health data with zero compromises on security, privacy, or compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-[#121622] p-6 space-y-4 shadow-lg hover:border-[#6366f1]/50 transition-colors"
            >
              <div className="size-10 rounded-xl bg-[#6366f1]/10 text-[#818cf8] flex items-center justify-center border border-[#6366f1]/20">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-white">{badge.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed mt-1">{badge.desc}</p>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 pt-2 border-t border-white/5">
                <CheckCircle2 className="size-3.5" /> Verified Compliant
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
