import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const PlatformBento: React.FC = () => {
  return (
    <section className="rail-container-light py-20 px-6 sm:px-12 lg:px-16" data-theme="light" id="platform">
      {/* Section Label */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-[3px] h-4 bg-[#6366f1] rounded-full" />
        <span className="text-[#6366f1] font-semibold text-sm tracking-wide">Platform</span>
      </div>

      {/* Main Heading */}
      <div className="max-w-3xl mb-16">
        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#0b0e14] leading-[1.12]">
          Make data your advantage. <br />
          <span className="text-[#64748b] font-normal">
            For every healthcare organization, <br />
            from startup to enterprise.
          </span>
        </h2>
      </div>

      {/* 6 Feature Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* CARD 1: Dotted US Provider Map */}
        <div className="bento-card-shell p-8 flex flex-col justify-between min-h-[460px] relative overflow-hidden bg-slate-50/50">
          <div className="flex items-start justify-between mb-8 z-10">
            <h3 className="text-2xl font-normal tracking-tight text-[#0b0e14] max-w-md leading-snug">
              Access longitudinal medical records from every provider, instantly
            </h3>
            <div className="w-9 h-9 rounded-md border border-slate-200 bg-white flex items-center justify-center text-slate-700 flex-shrink-0">
              <ArrowUpRight size={18} />
            </div>
          </div>

          {/* Dotted Map Graphic Container */}
          <div className="relative w-full h-[260px] flex items-center justify-center">
            <svg className="w-full h-full max-w-lg text-[#6366f1]" viewBox="0 0 600 350" fill="none">
              <path
                d="M 60,110 Q 120,60 220,70 Q 340,50 480,80 Q 560,100 540,180 Q 520,240 460,280 Q 360,310 240,290 Q 140,300 80,220 Z"
                fill="url(#dot-pattern)"
                stroke="rgba(99, 102, 241, 0.25)"
                strokeWidth="1.5"
              />
              <defs>
                <pattern id="dot-pattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="4" cy="4" r="2" fill="#6366f1" fillOpacity="0.45" />
                </pattern>
              </defs>
              <circle cx="180" cy="140" r="5" fill="#6366f1" className="animate-ping" />
              <circle cx="180" cy="140" r="4" fill="#6366f1" />
              <circle cx="340" cy="180" r="5" fill="#a855f7" className="animate-ping" />
              <circle cx="340" cy="180" r="4" fill="#a855f7" />
              <circle cx="440" cy="120" r="5" fill="#f97316" className="animate-ping" />
              <circle cx="440" cy="120" r="4" fill="#f97316" />
            </svg>
          </div>
        </div>

        {/* CARD 2: ADT Notifications Interface */}
        <div className="bento-card-shell p-8 flex flex-col justify-between min-h-[460px] relative overflow-hidden bg-gradient-to-br from-purple-50/40 to-slate-50">
          <div className="flex items-start justify-between mb-8 z-10">
            <h3 className="text-2xl font-normal tracking-tight text-[#0b0e14] max-w-md leading-snug">
              Get notified of critical patient events, with complete records, in real-time
            </h3>
            <div className="w-9 h-9 rounded-md border border-slate-200 bg-white flex items-center justify-center text-slate-700 flex-shrink-0">
              <ArrowUpRight size={18} />
            </div>
          </div>

          <div className="flex flex-col gap-4 relative z-10 my-auto">
            <div className="bg-white rounded-lg p-4 border border-slate-200/80 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="bg-slate-900 text-white font-mono text-[10px] font-bold px-2 py-1 rounded">ADT</span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Discharge complete</p>
                  <p className="text-xs text-slate-500">Mercy General · just now</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-200/80 shadow-md ml-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-800">Discharge summary</span>
                <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded">RETRIEVED</span>
              </div>
              <div className="space-y-1.5 opacity-60">
                <div className="h-2 bg-slate-200 rounded w-3/4" />
                <div className="h-2 bg-slate-200 rounded w-1/2" />
              </div>
              <div className="flex gap-2 mt-3">
                <span className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Encounter</span>
                <span className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Medications</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-3 border border-slate-200/80 shadow-sm ml-8 opacity-75 flex items-center gap-3">
              <span className="bg-slate-800 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">RX</span>
              <p className="text-xs font-semibold text-slate-700">Prescription filled</p>
            </div>
          </div>
        </div>

        {/* CARD 3: Universal API & FHIR Code Transformation */}
        <div className="bento-card-shell p-8 flex flex-col justify-between min-h-[480px] relative overflow-hidden bg-slate-50/50">
          <div className="flex items-start justify-between mb-6 z-10">
            <h3 className="text-2xl font-normal tracking-tight text-[#0b0e14] max-w-md leading-snug">
              Build on top of a single universal API, unified schema, and data warehouse
            </h3>
            <div className="w-9 h-9 rounded-md border border-slate-200 bg-white flex items-center justify-center text-slate-700 flex-shrink-0">
              <ArrowUpRight size={18} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center z-10">
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs font-mono text-slate-600">
                <p className="font-semibold text-slate-800 mb-1">HL7 v2</p>
                <p className="text-[10px] text-slate-400 truncate">MSH|^~\&amp;|PID|1||^^^MR</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs font-mono text-slate-600">
                <p className="font-semibold text-slate-800 mb-1">C-CDA XML</p>
                <p className="text-[10px] text-slate-400 truncate">&lt;ClinicalDocument&gt; &lt;recordTarget&gt;</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs font-mono text-slate-600">
                <p className="font-semibold text-slate-800 mb-1">PDF · OCR</p>
                <div className="h-1.5 bg-slate-200 rounded w-2/3 mt-1" />
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm font-mono text-[11px] text-slate-700 space-y-1">
              <div className="flex items-center justify-between border-b pb-2 mb-2 text-slate-400">
                <span className="font-semibold text-slate-800">Consolidated FHIR R4</span>
              </div>
              <p className="text-purple-600">&#123;</p>
              <p className="pl-3 text-slate-500">"resourceType": <span className="text-emerald-600">"Bundle"</span>,</p>
              <p className="pl-3 text-slate-500">"type": <span className="text-emerald-600">"collection"</span>,</p>
              <p className="pl-3 text-slate-500">"entry": [</p>
              <p className="pl-6 text-purple-600">&#123; "resource": &#123; <span className="text-indigo-600">"Condition"</span> ... &#125;&#125;,</p>
              <p className="pl-6 text-purple-600">&#123; "resource": &#123; <span className="text-indigo-600">"Observation"</span> ... &#125;&#125;</p>
              <p className="pl-3 text-slate-500">]</p>
              <p className="text-purple-600">&#125;</p>
            </div>
          </div>
        </div>

        {/* CARD 4: EHR Apps & Integrations */}
        <div className="bento-card-shell p-8 flex flex-col justify-between min-h-[480px] relative overflow-hidden bg-slate-50/50">
          <div className="flex items-start justify-between mb-6 z-10">
            <h3 className="text-2xl font-normal tracking-tight text-[#0b0e14] max-w-md leading-snug">
              Leverage pre-built apps in major EHRs, standalone, or baked into your homegrown systems
            </h3>
            <div className="w-9 h-9 rounded-md border border-slate-200 bg-white flex items-center justify-center text-slate-700 flex-shrink-0">
              <ArrowUpRight size={18} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 z-10 my-auto">
            <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2 border-b pb-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600" />
                <span className="text-[11px] font-bold text-slate-800">athenahealth</span>
              </div>
              <div className="h-12 bg-indigo-50/50 rounded border border-indigo-100/80 p-2 space-y-1">
                <div className="h-2 bg-indigo-200 rounded w-3/4" />
                <div className="h-2 bg-indigo-200 rounded w-1/2" />
              </div>
            </div>

            <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2 border-b pb-2">
                <span className="w-2 h-2 rounded-full bg-purple-600" />
                <span className="text-[11px] font-bold text-slate-800">dash.metriport.com</span>
              </div>
              <div className="h-12 bg-purple-50/50 rounded border border-purple-100/80 p-2 space-y-1">
                <div className="h-2 bg-purple-200 rounded w-2/3" />
                <div className="h-2 bg-purple-200 rounded w-1/3" />
              </div>
            </div>
          </div>
        </div>

        {/* CARD 5: AI Summaries, Suspects & Care Gaps */}
        <div className="bento-card-shell p-8 flex flex-col justify-between min-h-[460px] relative overflow-hidden bg-slate-50/50">
          <div className="flex items-start justify-between mb-6 z-10">
            <h3 className="text-2xl font-normal tracking-tight text-[#0b0e14] max-w-md leading-snug">
              Answer all of your patient questions with AI summaries, suspects, and care gaps
            </h3>
            <div className="w-9 h-9 rounded-md border border-slate-200 bg-white flex items-center justify-center text-slate-700 flex-shrink-0">
              <ArrowUpRight size={18} />
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-4 z-10">
            <div className="border-b pb-3">
              <p className="text-[10px] font-bold tracking-wider text-indigo-600 uppercase mb-1">CARE GAPS</p>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="bg-indigo-50 text-indigo-700 font-semibold px-2 py-0.5 rounded text-[11px]">DSF-E</span>
                <span className="text-slate-600">Depression screening &amp; follow-up</span>
                <span className="text-emerald-600 font-medium text-[11px] bg-emerald-50 px-2 py-0.5 rounded">Open</span>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-wider text-purple-600 uppercase mb-1">SUSPECTS</p>
              <div className="flex items-center justify-between text-xs">
                <span className="bg-purple-50 text-purple-700 font-semibold px-2 py-0.5 rounded text-[11px]">F33.1</span>
                <span className="text-slate-600">Major depressive disorder</span>
                <span className="h-1.5 bg-purple-200 rounded w-16" />
              </div>
            </div>
          </div>
        </div>

        {/* CARD 6: Referrals & Public Health Sharing */}
        <div className="bento-card-shell p-8 flex flex-col justify-between min-h-[460px] relative overflow-hidden bg-slate-50/50">
          <div className="flex items-start justify-between mb-6 z-10">
            <h3 className="text-2xl font-normal tracking-tight text-[#0b0e14] max-w-md leading-snug">
              Securely send referrals, and share records with other providers and public health agencies
            </h3>
            <div className="w-9 h-9 rounded-md border border-slate-200 bg-white flex items-center justify-center text-slate-700 flex-shrink-0">
              <ArrowUpRight size={18} />
            </div>
          </div>

          <div className="space-y-3 z-10 my-auto">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <ArrowUpRight size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Referral</p>
                  <p className="text-xs text-slate-500">Another provider</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between ml-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">Shared record</p>
                <p className="text-xs text-slate-500">Epic CareEverywhere</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
