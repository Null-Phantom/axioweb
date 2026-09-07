import React from 'react';
import { ArrowUpRight, Activity, Database, CheckCircle2, Zap, Send, Share2, Landmark, Search, FileText } from 'lucide-react';

export const PlatformBento: React.FC = () => {
  return (
    <section className="w-full min-w-full bg-[#fbfbfa] py-24 sm:py-28 lg:py-32 text-[#0b0e14] border-t border-b border-slate-200/50" data-theme="light" id="platform">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-[3px] h-4 bg-[#6366f1] rounded-full" />
          <span className="text-[#6366f1] font-semibold text-sm tracking-wide">Platform</span>
        </div>

        {/* Main Heading */}
        <div className="max-w-4xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal tracking-tight text-[#0b0e14] leading-[1.12]">
            Make data your advantage. <br />
            <span className="text-[#64748b] font-normal">
              For every healthcare organization, <br />
              from startup to enterprise.
            </span>
          </h2>
        </div>

        {/* 2-Column × 3-Row Immersive Feature Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7">
          
          {/* ========================================================= */}
          {/* PANEL 1: Dotted US Provider Map & Network */}
          {/* ========================================================= */}
          <a
            href="#medical-records"
            className="group relative flex flex-col justify-between min-h-[640px] lg:h-[660px] p-10 sm:p-12 lg:p-14 bg-white border border-slate-200/50 rounded-[10px] transition-all duration-300 hover:border-slate-300 hover:bg-slate-50/[0.2] no-underline cursor-pointer block overflow-hidden shadow-none"
          >
            {/* Header Area */}
            <div className="flex items-start justify-between gap-6 mb-2 z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-[29px] font-normal tracking-tight text-[#0b0e14] max-w-[540px] leading-[1.2] group-hover:text-[#4f46e5] transition-colors">
                Access longitudinal medical records from every provider, instantly
              </h3>
              <div className="w-10 h-10 rounded-lg bg-[#5865F2] flex items-center justify-center text-white flex-shrink-0 group-hover:bg-[#4752c4] group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
                <ArrowUpRight size={20} />
              </div>
            </div>

            {/* Lower 65%: Large Interactive Map Visual */}
            <div className="relative w-full h-[420px] flex items-center justify-center mt-2 flex-1">
              <svg
                className="w-full h-full max-h-[400px] drop-shadow-[0_4px_24px_rgba(99,102,241,0.12)]"
                viewBox="0 0 960 560"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="us-map-dots-large" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="8" cy="8" r="1.85" fill="#6366f1" fillOpacity="0.55" />
                  </pattern>
                  <filter id="us-map-ambient-glow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="4" stdDeviation="12" floodColor="#6366f1" floodOpacity="0.18" />
                  </filter>
                  <linearGradient id="panel-arc-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.85" />
                    <stop offset="50%" stopColor="#a855f7" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.85" />
                  </linearGradient>
                  <linearGradient id="panel-arc-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.85" />
                  </linearGradient>
                </defs>

                {/* Contiguous US Map Silhouette */}
                <path
                  d="M 120 80 
                     C 145 75, 175 75, 205 76
                     C 260 76, 320 74, 380 75
                     C 440 76, 500 76, 545 78
                     C 552 60, 560 55, 570 76
                     C 590 78, 615 82, 630 85
                     C 645 80, 655 90, 665 95
                     C 675 85, 690 102, 700 112
                     C 720 106, 740 114, 755 120
                     C 775 116, 795 122, 810 130
                     C 830 112, 855 102, 875 75
                     C 890 65, 905 72, 915 90
                     C 925 110, 905 132, 895 148
                     C 885 158, 895 168, 890 178
                     C 875 192, 855 215, 845 235
                     C 835 255, 838 280, 828 300
                     C 815 325, 798 345, 790 375
                     C 795 415, 808 460, 818 505
                     C 805 520, 790 510, 780 485
                     C 765 435, 745 400, 710 395
                     C 675 395, 645 420, 620 445
                     C 605 440, 598 415, 575 405
                     C 550 435, 525 480, 490 525
                     C 478 530, 468 500, 465 475
                     C 448 460, 428 465, 405 440
                     C 375 420, 355 415, 350 380
                     C 285 390, 230 380, 170 380
                     C 155 365, 145 335, 125 305
                     C 100 265, 85 220, 80 170
                     C 78 140, 70 110, 80 90
                     C 90 75, 105 82, 120 80 Z"
                  fill="url(#us-map-dots-large)"
                  stroke="rgba(99, 102, 241, 0.45)"
                  strokeWidth="1.5"
                  filter="url(#us-map-ambient-glow)"
                />

                {/* Telemetry Arcs */}
                <path d="M 190 230 Q 380 120 540 220" stroke="url(#panel-arc-grad-1)" strokeWidth="1.75" strokeDasharray="4 4" className="opacity-75" />
                <path d="M 540 220 Q 690 140 820 190" stroke="url(#panel-arc-grad-2)" strokeWidth="1.75" strokeDasharray="4 4" className="opacity-75" />
                <path d="M 480 390 Q 650 310 820 190" stroke="url(#panel-arc-grad-1)" strokeWidth="1.75" strokeDasharray="4 4" className="opacity-55" />
                <path d="M 190 230 Q 320 340 480 390" stroke="url(#panel-arc-grad-2)" strokeWidth="1.75" strokeDasharray="4 4" className="opacity-50" />

                {/* Pulsing Nodes */}
                <circle cx="190" cy="230" r="14" fill="#6366f1" className="animate-ping opacity-25" />
                <circle cx="190" cy="230" r="6" fill="#6366f1" />
                <circle cx="190" cy="230" r="2.5" fill="#ffffff" />

                <circle cx="150" cy="110" r="10" fill="#3b82f6" className="animate-ping opacity-25" />
                <circle cx="150" cy="110" r="4.5" fill="#3b82f6" />
                <circle cx="150" cy="110" r="2" fill="#ffffff" />

                <circle cx="540" cy="220" r="16" fill="#a855f7" className="animate-ping opacity-25" />
                <circle cx="540" cy="220" r="6.5" fill="#a855f7" />
                <circle cx="540" cy="220" r="3" fill="#ffffff" />

                <circle cx="820" cy="190" r="18" fill="#ec4899" className="animate-ping opacity-30" />
                <circle cx="820" cy="190" r="7" fill="#ec4899" />
                <circle cx="820" cy="190" r="3" fill="#ffffff" />

                <circle cx="480" cy="390" r="14" fill="#f97316" className="animate-ping opacity-25" />
                <circle cx="480" cy="390" r="5.5" fill="#f97316" />
                <circle cx="480" cy="390" r="2.5" fill="#ffffff" />

                <circle cx="700" cy="340" r="12" fill="#3b82f6" className="animate-ping opacity-25" />
                <circle cx="700" cy="340" r="5" fill="#3b82f6" />
                <circle cx="700" cy="340" r="2" fill="#ffffff" />
              </svg>

              {/* Floating Live Badge */}
              <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-full px-4 py-1.5 text-xs font-medium text-slate-700 shadow-sm flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>280M+ Patient Records Connected Nationwide</span>
              </div>
            </div>
          </a>

          {/* ========================================================= */}
          {/* PANEL 2: ADT Notifications & Real-Time Events Interface */}
          {/* ========================================================= */}
          <a
            href="#patient-events"
            className="group relative flex flex-col justify-between min-h-[640px] lg:h-[660px] p-10 sm:p-12 lg:p-14 bg-white border border-slate-200/50 rounded-[10px] transition-all duration-300 hover:border-slate-300 hover:bg-slate-50/[0.2] no-underline cursor-pointer block overflow-hidden shadow-none"
          >
            {/* Ambient Multi-Color Gradient Mesh */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -bottom-16 -left-16 w-96 h-96 bg-gradient-to-tr from-rose-200/40 via-purple-200/30 to-transparent rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-[420px] h-[420px] bg-gradient-to-tl from-indigo-200/50 via-purple-200/30 to-transparent rounded-full blur-3xl" />
            </div>

            {/* Header Area */}
            <div className="flex items-start justify-between gap-6 mb-2 z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-[29px] font-normal tracking-tight text-[#0b0e14] max-w-[540px] leading-[1.2] group-hover:text-[#4f46e5] transition-colors">
                Get notified of critical patient events, with complete records, in real-time
              </h3>
              <div className="w-10 h-10 rounded-lg border border-slate-200/80 bg-white flex items-center justify-center text-slate-700 flex-shrink-0 group-hover:bg-slate-50 group-hover:border-slate-300 group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
                <ArrowUpRight size={20} />
              </div>
            </div>

            {/* Lower 65%: Real-Time Patient Events Stack */}
            <div className="relative z-10 flex flex-col gap-3.5 my-auto w-full max-w-[540px] mx-auto mt-2 flex-1 justify-center">
              {/* 1. ADT Notification Card */}
              <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/70 shadow-sm flex items-center justify-between group-hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-4">
                  <span className="bg-[#0b0e14] text-white font-mono text-xs font-bold px-2.5 py-1.5 rounded-md">ADT</span>
                  <div>
                    <p className="text-sm font-semibold text-[#0b0e14]">Patient admitted — Emergency Dept</p>
                    <p className="text-xs text-slate-500">St. Mary's General Hospital · 2m ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 font-medium text-xs px-3 py-1 rounded-full border border-emerald-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>LIVE</span>
                </div>
              </div>

              {/* Connecting Data Spine */}
              <div className="w-[2px] h-4 bg-slate-200 ml-7 -my-1.5" />

              {/* 2. Expanded Encounter Context Card */}
              <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/70 shadow-md group-hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <Activity size={16} className="text-[#6366f1]" />
                    <span className="text-sm font-semibold text-[#0b0e14]">Encounter context</span>
                  </div>
                  <span className="text-xs font-medium tracking-wider text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-md">
                    RETRIEVED
                  </span>
                </div>
                <div className="space-y-2.5 mb-4">
                  <div className="h-2 bg-slate-200 rounded-full w-full opacity-75" />
                  <div className="h-2 bg-slate-200 rounded-full w-5/6 opacity-55" />
                  <div className="h-2 bg-slate-200 rounded-full w-3/4 opacity-35" />
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <span className="text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-md">
                    Patient: Sarah Jenkins (DOB: 1984-11-04)
                  </span>
                  <span className="text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-md">
                    Encounter: Inpatient
                  </span>
                  <span className="text-xs font-medium bg-indigo-50 text-indigo-700 px-3 py-1 rounded-md border border-indigo-100">
                    Vitals: Synthesized
                  </span>
                </div>
              </div>

              {/* 3. Prescription Refill Card */}
              <div className="bg-white rounded-xl p-4 border border-slate-200/70 shadow-sm flex items-center justify-between w-full max-w-[400px] ml-auto group-hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-3.5">
                  <span className="bg-[#0b0e14] text-white font-mono text-[11px] font-bold px-2.5 py-1 rounded-md">RX</span>
                  <div>
                    <p className="text-xs font-semibold text-[#0b0e14]">Prescription Refill Authorized</p>
                    <p className="text-[11px] text-slate-500">Atorvastatin 20mg · Walgreens #4812</p>
                  </div>
                </div>
                <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0" />
              </div>
            </div>
          </a>

          {/* ========================================================= */}
          {/* PANEL 3: Universal API & FHIR Transformation */}
          {/* ========================================================= */}
          <a
            href="#universal-api"
            className="group relative flex flex-col justify-between min-h-[640px] lg:h-[660px] p-10 sm:p-12 lg:p-14 bg-white border border-slate-200/50 rounded-[10px] transition-all duration-300 hover:border-slate-300 hover:bg-slate-50/[0.2] no-underline cursor-pointer block overflow-hidden shadow-none"
          >
            {/* Ambient Multi-Color Gradient Mesh */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-gradient-to-tl from-purple-200/35 via-indigo-100/25 to-transparent rounded-full blur-3xl" />
            </div>

            {/* Header Area */}
            <div className="flex items-start justify-between gap-6 mb-2 z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-[29px] font-normal tracking-tight text-[#0b0e14] max-w-[540px] leading-[1.2] group-hover:text-[#4f46e5] transition-colors">
                Build on top of a single universal API, unified schema, and data warehouse
              </h3>
              <div className="w-10 h-10 rounded-lg border border-slate-200/80 bg-white flex items-center justify-center text-slate-700 flex-shrink-0 group-hover:bg-slate-50 group-hover:border-slate-300 group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
                <ArrowUpRight size={20} />
              </div>
            </div>

            {/* Lower 65%: Schema Transformation Pipeline Visual */}
            <div className="relative z-10 flex items-center justify-between gap-4 my-auto w-full mt-2 flex-1">
              {/* Left Input Cards */}
              <div className="w-[38%] space-y-3">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm">
                  <p className="text-[11px] font-bold text-slate-700 mb-0.5">HL7 v2</p>
                  <p className="text-[10px] text-slate-400 font-mono truncate">MSH|^~\&|...|PID|1||^^^MR</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm">
                  <p className="text-[11px] font-bold text-slate-700 mb-0.5">C-CDA XML</p>
                  <p className="text-[10px] text-slate-400 font-mono truncate">&lt;ClinicalDocument&gt; &lt;recordTarget&gt;</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm">
                  <p className="text-[11px] font-bold text-slate-700 mb-1">PDF · OCR</p>
                  <div className="space-y-1">
                    <div className="h-1.5 bg-slate-200 rounded-full w-full" />
                    <div className="h-1.5 bg-slate-200 rounded-full w-3/4" />
                  </div>
                </div>
              </div>

              {/* Connecting Curved Connector Splines in SVG */}
              <div className="w-[10%] h-[240px] flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 50 240" fill="none">
                  <path d="M 0 45 C 30 45, 20 120, 50 120" stroke="#cbd5e1" strokeWidth="1.5" />
                  <path d="M 0 120 C 30 120, 20 120, 50 120" stroke="#cbd5e1" strokeWidth="1.5" />
                  <path d="M 0 195 C 30 195, 20 120, 50 120" stroke="#cbd5e1" strokeWidth="1.5" />
                  <circle cx="50" cy="120" r="3" fill="#6366f1" />
                </svg>
              </div>

              {/* Right Output: Consolidated FHIR R4 JSON Box */}
              <div className="w-[52%] bg-white p-5 rounded-xl border border-slate-200/90 shadow-md font-mono text-[11px] text-slate-700 space-y-1.5">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-2 mb-2">
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#6366f1]" />
                  <span className="font-bold text-slate-800 text-[11px]">Consolidated FHIR R4</span>
                </div>
                <p className="text-purple-600">&#123;</p>
                <p className="pl-3 text-slate-500">"resourceType": <span className="text-emerald-600">"Bundle"</span>,</p>
                <p className="pl-3 text-slate-500">"type": <span className="text-emerald-600">"collection"</span>,</p>
                <p className="pl-3 text-slate-500">"entry": [</p>
                <p className="pl-6 text-purple-600">&#123; "resourceType": <span className="text-indigo-600">"Condition"</span> ... &#125;,</p>
                <p className="pl-6 text-purple-600">&#123; "resourceType": <span className="text-indigo-600">"Observation"</span> ... &#125;</p>
                <p className="pl-3 text-slate-500">]</p>
                <p className="text-purple-600">&#125;</p>
                <div className="flex items-center gap-4 pt-2 mt-2 border-t border-slate-100 text-[10px] text-slate-400 font-sans">
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> REST API</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-sm bg-indigo-500" /> Data warehouse</span>
                </div>
              </div>
            </div>
          </a>

          {/* ========================================================= */}
          {/* PANEL 4: EHR Apps & Integrations */}
          {/* ========================================================= */}
          <a
            href="#integrations"
            className="group relative flex flex-col justify-between min-h-[640px] lg:h-[660px] p-10 sm:p-12 lg:p-14 bg-white border border-slate-200/50 rounded-[10px] transition-all duration-300 hover:border-slate-300 hover:bg-slate-50/[0.2] no-underline cursor-pointer block overflow-hidden shadow-none"
          >
            {/* Header Area */}
            <div className="flex items-start justify-between gap-6 mb-2 z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-[29px] font-normal tracking-tight text-[#0b0e14] max-w-[540px] leading-[1.2] group-hover:text-[#4f46e5] transition-colors">
                Leverage pre-built apps in major EHRs, standalone, or baked into your homegrown systems
              </h3>
              <div className="w-10 h-10 rounded-lg border border-slate-200/80 bg-white flex items-center justify-center text-slate-700 flex-shrink-0 group-hover:bg-slate-50 group-hover:border-slate-300 group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
                <ArrowUpRight size={20} />
              </div>
            </div>

            {/* Lower 65%: EHR Application Ecosystem UI */}
            <div className="relative z-10 grid grid-cols-12 gap-4 items-center my-auto w-full mt-2 flex-1">
              {/* Left Large Athenahealth EHR Window */}
              <div className="col-span-7 bg-white rounded-xl border border-slate-200/90 shadow-md p-4 space-y-3">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-slate-300" />
                    <span className="w-2 h-2 rounded-full bg-slate-300" />
                    <span className="w-2 h-2 rounded-full bg-slate-300" />
                    <span className="text-[11px] font-bold text-slate-800 ml-2">athenahealth</span>
                  </div>
                  <div className="w-16 h-2 bg-slate-100 rounded-full" />
                </div>

                {/* Metrics & Graph Preview */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-slate-50/80 p-2.5 rounded-lg border border-slate-100">
                    <div className="h-1.5 bg-slate-200 rounded w-1/2 mb-2" />
                    <svg className="w-full h-8" viewBox="0 0 100 30" fill="none">
                      <path d="M 0 25 Q 30 5, 50 18 T 100 8" stroke="#3b82f6" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="bg-slate-50/80 p-2.5 rounded-lg border border-slate-100 flex items-end gap-1.5 h-14 pb-1 justify-center">
                    <div className="w-2.5 h-6 bg-indigo-200 rounded-sm" />
                    <div className="w-2.5 h-9 bg-indigo-500 rounded-sm" />
                    <div className="w-2.5 h-4 bg-indigo-300 rounded-sm" />
                    <div className="w-2.5 h-8 bg-indigo-400 rounded-sm" />
                  </div>
                </div>

                {/* Patient Rows */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between p-1.5 bg-slate-50/60 rounded border border-slate-100 text-[10px]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="font-medium text-slate-700">Patient Longitudinal Summary</span>
                    </div>
                    <span className="text-slate-400">Synced</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 bg-slate-50/60 rounded border border-slate-100 text-[10px]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <span className="font-medium text-slate-700">Clinical Data Ingestion</span>
                    </div>
                    <span className="text-slate-400">Active</span>
                  </div>
                </div>
              </div>

              {/* Right Stacked Smaller Windows */}
              <div className="col-span-5 space-y-3">
                {/* Dash Metriport App */}
                <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-3 space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-[10px] font-bold text-slate-800">dash.metriport.com</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  </div>
                  <svg className="w-full h-7" viewBox="0 0 100 25" fill="none">
                    <path d="M 0 20 Q 40 5, 70 12 T 100 4" stroke="#8b5cf6" strokeWidth="2" />
                  </svg>
                </div>

                {/* Your App */}
                <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-3 space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-[10px] font-bold text-slate-800">Your custom EHR app</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  </div>
                  <div className="space-y-1">
                    <div className="h-1.5 bg-slate-100 rounded w-full" />
                    <div className="h-1.5 bg-slate-100 rounded w-3/4" />
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* ========================================================= */}
          {/* PANEL 5: AI Summaries, Suspects & Care Gaps */}
          {/* ========================================================= */}
          <a
            href="#ai-insights"
            className="group relative flex flex-col justify-between min-h-[640px] lg:h-[660px] p-10 sm:p-12 lg:p-14 bg-white border border-slate-200/50 rounded-[10px] transition-all duration-300 hover:border-slate-300 hover:bg-slate-50/[0.2] no-underline cursor-pointer block overflow-hidden shadow-none"
          >
            {/* Header Area */}
            <div className="flex items-start justify-between gap-6 mb-2 z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-[29px] font-normal tracking-tight text-[#0b0e14] max-w-[540px] leading-[1.2] group-hover:text-[#4f46e5] transition-colors">
                Answer all of your patient questions with AI summaries, suspects, and care gaps
              </h3>
              <div className="w-10 h-10 rounded-lg border border-slate-200/80 bg-white flex items-center justify-center text-slate-700 flex-shrink-0 group-hover:bg-slate-50 group-hover:border-slate-300 group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
                <ArrowUpRight size={20} />
              </div>
            </div>

            {/* Lower 65%: Clinical AI Dashboard Interface */}
            <div className="relative z-10 my-auto w-full mt-2 flex-1 flex items-center justify-center">
              <div className="w-full bg-white rounded-xl border border-slate-200/90 shadow-md p-5 sm:p-6 grid grid-cols-12 gap-5 relative overflow-hidden">
                {/* Left Mini Sidebar */}
                <div className="col-span-2 border-r border-slate-100 pr-3 space-y-3">
                  <div className="w-8 h-2 bg-slate-300 rounded" />
                  <div className="w-full h-2 bg-indigo-500/80 rounded" />
                  <div className="w-4/5 h-2 bg-slate-200 rounded" />
                  <div className="w-3/4 h-2 bg-slate-200 rounded" />
                  <div className="w-4/5 h-2 bg-slate-200 rounded" />
                  <div className="w-2/3 h-2 bg-slate-200 rounded" />
                </div>

                {/* Right Content */}
                <div className="col-span-10 space-y-4">
                  {/* AI Summary Header & Search */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">AI SUMMARY</p>
                      <div className="w-28 h-2 bg-slate-100 rounded-full" />
                    </div>
                    <div className="space-y-1.5 relative">
                      <div className="h-2 bg-slate-200 rounded-full w-full opacity-70" />
                      <div className="h-2 bg-slate-200 rounded-full w-5/6 opacity-50" />
                      <div className="h-2 bg-slate-200 rounded-full w-2/3 opacity-30" />
                      {/* Magnifying Glass Overlay */}
                      <div className="absolute -right-2 top-0 bg-white/90 backdrop-blur-sm p-1.5 rounded-full border border-slate-200 shadow-sm text-slate-600">
                        <Search size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Care Gaps */}
                  <div>
                    <p className="text-[10px] font-bold tracking-wider text-indigo-600 uppercase mb-2">CARE GAPS</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="bg-indigo-50 text-indigo-700 font-semibold px-2 py-0.5 rounded text-[10px] border border-indigo-100">DSF-E</span>
                          <span className="text-slate-700 font-medium">Depression screening &amp; follow-up</span>
                        </div>
                        <span className="text-emerald-600 font-medium text-[10px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">Open</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="bg-indigo-50 text-indigo-700 font-semibold px-2 py-0.5 rounded text-[10px] border border-indigo-100">CCS</span>
                          <span className="text-slate-700 font-medium">Cervical cancer screening</span>
                        </div>
                        <span className="text-emerald-600 font-medium text-[10px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">Open</span>
                      </div>
                    </div>
                  </div>

                  {/* Suspects */}
                  <div>
                    <p className="text-[10px] font-bold tracking-wider text-purple-600 uppercase mb-2">SUSPECTS</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="bg-purple-50 text-purple-700 font-semibold px-2 py-0.5 rounded text-[10px] border border-purple-100">F33.1</span>
                          <span className="text-slate-700 font-medium">Major depressive disorder</span>
                        </div>
                        <div className="w-24 h-2 bg-purple-500 rounded-full" />
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="bg-purple-50 text-purple-700 font-semibold px-2 py-0.5 rounded text-[10px] border border-purple-100">E11.9</span>
                          <span className="text-slate-700 font-medium">Type 2 diabetes</span>
                        </div>
                        <div className="w-16 h-2 bg-purple-300 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* ========================================================= */}
          {/* PANEL 6: Referrals & Public Health Sharing */}
          {/* ========================================================= */}
          <a
            href="#referrals"
            className="group relative flex flex-col justify-between min-h-[640px] lg:h-[660px] p-10 sm:p-12 lg:p-14 bg-white border border-slate-200/50 rounded-[10px] transition-all duration-300 hover:border-slate-300 hover:bg-slate-50/[0.2] no-underline cursor-pointer block overflow-hidden shadow-none"
          >
            {/* Ambient Multi-Color Gradient Mesh */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-gradient-to-tl from-purple-200/40 via-rose-100/30 to-transparent rounded-full blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-gradient-to-tr from-blue-200/35 via-indigo-100/25 to-transparent rounded-full blur-3xl" />
            </div>

            {/* Header Area */}
            <div className="flex items-start justify-between gap-6 mb-2 z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-[29px] font-normal tracking-tight text-[#0b0e14] max-w-[540px] leading-[1.2] group-hover:text-[#4f46e5] transition-colors">
                Securely send referrals, and share records with other providers and public health agencies
              </h3>
              <div className="w-10 h-10 rounded-lg bg-[#5865F2] flex items-center justify-center text-white flex-shrink-0 group-hover:bg-[#4752c4] group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
                <ArrowUpRight size={20} />
              </div>
            </div>

            {/* Lower 65%: Document Dispatcher Pipeline Visual */}
            <div className="relative z-10 flex items-center justify-between gap-4 my-auto w-full mt-2 flex-1">
              {/* Left Clinical Document Card */}
              <div className="w-[34%] bg-white rounded-xl border border-slate-200/90 shadow-sm p-4 space-y-2.5">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                  <FileText size={16} className="text-[#6366f1]" />
                  <div className="w-14 h-2 bg-slate-300 rounded" />
                </div>
                <div className="space-y-1.5">
                  <div className="h-1.5 bg-slate-200 rounded-full w-full" />
                  <div className="h-1.5 bg-slate-200 rounded-full w-4/5" />
                  <div className="h-1.5 bg-slate-200 rounded-full w-2/3" />
                  <div className="h-1.5 bg-slate-200 rounded-full w-3/4" />
                </div>
              </div>

              {/* Connecting Curved Connector Splines in SVG */}
              <div className="w-[12%] h-[240px] flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 60 240" fill="none">
                  <circle cx="0" cy="120" r="3" fill="#6366f1" />
                  <path d="M 0 120 C 30 120, 30 45, 60 45" stroke="#cbd5e1" strokeWidth="1.5" />
                  <path d="M 0 120 C 30 120, 30 120, 60 120" stroke="#cbd5e1" strokeWidth="1.5" />
                  <path d="M 0 120 C 30 120, 30 195, 60 195" stroke="#cbd5e1" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Right 3 Destination Cards */}
              <div className="w-[54%] space-y-3">
                {/* Destination 1: Referral */}
                <div className="bg-white rounded-xl p-3.5 border border-slate-200/90 shadow-sm flex items-center gap-3.5 group-hover:border-indigo-200 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Send size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Referral</p>
                    <p className="text-[11px] text-slate-500">Another provider</p>
                  </div>
                </div>

                {/* Destination 2: Shared Record */}
                <div className="bg-white rounded-xl p-3.5 border border-slate-200/90 shadow-sm flex items-center gap-3.5 group-hover:border-purple-200 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <Share2 size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Shared record</p>
                    <p className="text-[11px] text-slate-500">Epic CareEverywhere</p>
                  </div>
                </div>

                {/* Destination 3: Case Report */}
                <div className="bg-white rounded-xl p-3.5 border border-slate-200/90 shadow-sm flex items-center gap-3.5 group-hover:border-blue-200 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Landmark size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Case report</p>
                    <p className="text-[11px] text-slate-500">Public health agency</p>
                  </div>
                </div>
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};
