import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { 
  Database, FileText, CheckCircle2, 
  Layers, RefreshCw, Globe, Users, Share2
} from 'lucide-react';
import { MetriportLogo } from './MetriportLogo';

// Mathematical Cubic Bézier Point Interpolator for exact path sampling
const getCubicBezierPoint = (
  t: number, 
  x0: number, y0: number, 
  x1: number, y1: number, 
  x2: number, y2: number, 
  x3: number, y3: number
) => {
  const clampedT = Math.max(0, Math.min(1, t));
  const mt = 1 - clampedT;
  const mt2 = mt * mt;
  const mt3 = mt2 * mt;
  const t2 = clampedT * clampedT;
  const t3 = t2 * clampedT;

  const x = mt3 * x0 + 3 * mt2 * clampedT * x1 + 3 * mt * t2 * x2 + t3 * x3;
  const y = mt3 * y0 + 3 * mt2 * clampedT * y1 + 3 * mt * t2 * y2 + t3 * y3;
  return { x, y };
};

// Text explanation data for each of the 5 stages
const STAGES_COPY = [
  {
    step: '01',
    tag: 'ACCESS',
    title: 'Every provider, one integration',
    description: '750K+ providers across every network that matters — one integration, not dozens. Query HIEs, ADT feeds, pharmacies, labs, and EHRs through a single unified connection.',
  },
  {
    step: '02',
    tag: 'DATA NORMALIZATION',
    title: 'One record per patient',
    description: 'Extracted, normalized, deduplicated, and enriched into consistent FHIR. Incoming clinical records from disparate formats are transformed into clean, standardized patient charts.',
  },
  {
    step: '03',
    tag: 'FLEXIBLE DELIVERY',
    title: 'Wherever your teams work',
    description: 'API, data warehouse, EHR apps, or embeds — deploy where teams already work. Seamlessly stream structured records into Snowflake, Databricks, or directly into EHR workflows.',
  },
  {
    step: '04',
    tag: 'INSIGHTS AND ANALYTICS',
    title: 'Answers, not just records',
    description: 'AI summaries, suspected conditions, and HEDIS care gaps, read off the whole record. Turn raw clinical data into actionable diagnosis recapture and quality metrics.',
  },
  {
    step: '05',
    tag: 'MESSAGING',
    title: 'Providers and public health',
    description: 'Referrals to other providers, and electronic case reports to public health agencies. Send and receive data across nationwide networks with automated compliance.',
  },
];

export const HowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  // Track scroll progress across the pinned container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth spring physics for fluid cinematic interpolation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 26,
    restDelta: 0.0001,
  });

  // SINGLE SOURCE OF TRUTH: Dynamically compute active stage directly from flowchart progress
  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (v) => {
      let stage = 0;
      if (v < 0.125) stage = 0;
      else if (v < 0.375) stage = 1;
      else if (v < 0.625) stage = 2;
      else if (v < 0.875) stage = 3;
      else stage = 4;

      setActiveStage((prev) => (prev !== stage ? stage : prev));
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // LEFT SIDE: Vertical translation of the continuous visual canvas
  // Stage 1 Center: 0px offset
  // Stage 2 Center: -270px
  // Stage 3 Center: -540px
  // Stage 4 Center: -810px
  // Stage 5 Center: -1080px
  const canvasY = useTransform(
    smoothProgress,
    [0, 0.25, 0.50, 0.75, 1.0],
    [0, -270, -540, -810, -1080]
  );

  // Left Flowchart Stages Opacity & Scale transforms
  const stage1Opacity = useTransform(smoothProgress, [0, 0.20, 0.35], [1.0, 0.75, 0.35]);
  const stage1Scale = useTransform(smoothProgress, [0, 0.25], [1.0, 0.94]);

  const stage2Opacity = useTransform(smoothProgress, [0, 0.15, 0.25, 0.40, 0.55], [0.45, 0.80, 1.0, 0.80, 0.35]);
  const stage2Scale = useTransform(smoothProgress, [0, 0.25, 0.50], [0.94, 1.0, 0.94]);

  const stage3Opacity = useTransform(smoothProgress, [0.20, 0.38, 0.50, 0.65, 0.80], [0.35, 0.80, 1.0, 0.80, 0.35]);
  const stage3Scale = useTransform(smoothProgress, [0.25, 0.50, 0.75], [0.94, 1.0, 0.94]);

  const stage4Opacity = useTransform(smoothProgress, [0.45, 0.62, 0.75, 0.88, 1.0], [0.35, 0.80, 1.0, 0.80, 0.45]);
  const stage4Scale = useTransform(smoothProgress, [0.50, 0.75, 1.0], [0.94, 1.0, 0.94]);

  const stage5Opacity = useTransform(smoothProgress, [0.68, 0.85, 1.0], [0.35, 0.80, 1.0]);
  const stage5Scale = useTransform(smoothProgress, [0.75, 1.0], [0.94, 1.0]);

  // =========================================================================
  // SCROLL-DRIVEN PARTICLE POSITIONS (STRICTLY TIED TO SCROLL PROGRESS)
  // Stops immediately when user stops scrolling. Reverses on backward scroll.
  // =========================================================================

  // Connector 1 (Stage 1 -> Stage 2: range 0.00 to 0.25)
  const c1_p1_x = useTransform(smoothProgress, v => getCubicBezierPoint(v / 0.25, 77, 0, 77, 35, 310, 35, 310, 70).x);
  const c1_p1_y = useTransform(smoothProgress, v => getCubicBezierPoint(v / 0.25, 77, 0, 77, 35, 310, 35, 310, 70).y);

  const c1_p2_x = useTransform(smoothProgress, v => getCubicBezierPoint(v / 0.25, 232, 0, 232, 35, 310, 35, 310, 70).x);
  const c1_p2_y = useTransform(smoothProgress, v => getCubicBezierPoint(v / 0.25, 232, 0, 232, 35, 310, 35, 310, 70).y);

  const c1_p3_x = useTransform(smoothProgress, v => getCubicBezierPoint(v / 0.25, 388, 0, 388, 35, 310, 35, 310, 70).x);
  const c1_p3_y = useTransform(smoothProgress, v => getCubicBezierPoint(v / 0.25, 388, 0, 388, 35, 310, 35, 310, 70).y);

  const c1_p4_x = useTransform(smoothProgress, v => getCubicBezierPoint(v / 0.25, 543, 0, 543, 35, 310, 35, 310, 70).x);
  const c1_p4_y = useTransform(smoothProgress, v => getCubicBezierPoint(v / 0.25, 543, 0, 543, 35, 310, 35, 310, 70).y);

  // Connector 2 (Stage 2 -> Stage 3: range 0.25 to 0.50)
  const c2_p1_x = useTransform(smoothProgress, v => getCubicBezierPoint((v - 0.25) / 0.25, 310, 0, 310, 35, 77, 35, 77, 70).x);
  const c2_p1_y = useTransform(smoothProgress, v => getCubicBezierPoint((v - 0.25) / 0.25, 310, 0, 310, 35, 77, 35, 77, 70).y);

  const c2_p2_x = useTransform(smoothProgress, v => getCubicBezierPoint((v - 0.25) / 0.25, 310, 0, 310, 35, 232, 35, 232, 70).x);
  const c2_p2_y = useTransform(smoothProgress, v => getCubicBezierPoint((v - 0.25) / 0.25, 310, 0, 310, 35, 232, 35, 232, 70).y);

  const c2_p3_x = useTransform(smoothProgress, v => getCubicBezierPoint((v - 0.25) / 0.25, 310, 0, 310, 35, 388, 35, 388, 70).x);
  const c2_p3_y = useTransform(smoothProgress, v => getCubicBezierPoint((v - 0.25) / 0.25, 310, 0, 310, 35, 388, 35, 388, 70).y);

  const c2_p4_x = useTransform(smoothProgress, v => getCubicBezierPoint((v - 0.25) / 0.25, 310, 0, 310, 35, 543, 35, 543, 70).x);
  const c2_p4_y = useTransform(smoothProgress, v => getCubicBezierPoint((v - 0.25) / 0.25, 310, 0, 310, 35, 543, 35, 543, 70).y);

  // Connector 3 (Stage 3 -> Stage 4: range 0.50 to 0.75)
  const c3_p1_x = useTransform(smoothProgress, v => getCubicBezierPoint((v - 0.50) / 0.25, 77, 0, 77, 35, 103, 35, 103, 70).x);
  const c3_p1_y = useTransform(smoothProgress, v => getCubicBezierPoint((v - 0.50) / 0.25, 77, 0, 77, 35, 103, 35, 103, 70).y);

  const c3_p2_x = useTransform(smoothProgress, v => getCubicBezierPoint((v - 0.50) / 0.25, 232, 0, 232, 35, 310, 35, 310, 70).x);
  const c3_p2_y = useTransform(smoothProgress, v => getCubicBezierPoint((v - 0.50) / 0.25, 232, 0, 232, 35, 310, 35, 310, 70).y);

  const c3_p3_x = useTransform(smoothProgress, v => getCubicBezierPoint((v - 0.50) / 0.25, 388, 0, 388, 35, 310, 35, 310, 70).x);
  const c3_p3_y = useTransform(smoothProgress, v => getCubicBezierPoint((v - 0.50) / 0.25, 388, 0, 388, 35, 310, 35, 310, 70).y);

  const c3_p4_x = useTransform(smoothProgress, v => getCubicBezierPoint((v - 0.50) / 0.25, 543, 0, 543, 35, 517, 35, 517, 70).x);
  const c3_p4_y = useTransform(smoothProgress, v => getCubicBezierPoint((v - 0.50) / 0.25, 543, 0, 543, 35, 517, 35, 517, 70).y);

  // Connector 4 (Stage 4 -> Stage 5: range 0.75 to 1.00)
  const c4_p1_x = useTransform(smoothProgress, v => getCubicBezierPoint((v - 0.75) / 0.25, 103, 0, 103, 35, 310, 35, 310, 70).x);
  const c4_p1_y = useTransform(smoothProgress, v => getCubicBezierPoint((v - 0.75) / 0.25, 103, 0, 103, 35, 310, 35, 310, 70).y);

  const c4_p2_x = useTransform(smoothProgress, () => 310);
  const c4_p2_y = useTransform(smoothProgress, v => Math.max(0, Math.min(70, ((v - 0.75) / 0.25) * 70)));

  const c4_p3_x = useTransform(smoothProgress, v => getCubicBezierPoint((v - 0.75) / 0.25, 517, 0, 517, 35, 310, 35, 310, 70).x);
  const c4_p3_y = useTransform(smoothProgress, v => getCubicBezierPoint((v - 0.75) / 0.25, 517, 0, 517, 35, 310, 35, 310, 70).y);

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-w-full bg-[#fbfbfa] text-[#0b0e14] border-t border-b border-slate-200/50" 
      data-theme="light" 
      id="how-it-works"
      style={{ height: '450vh' }}
    >
      {/* ========================================================= */}
      {/* STICKY FULL-VIEWPORT STAGE */}
      {/* ========================================================= */}
      <div className="sticky top-0 w-full h-screen min-h-[680px] max-h-[1050px] flex items-center justify-center py-6 sm:py-10 px-6 sm:px-10 lg:px-12 xl:px-16 overflow-hidden box-border">
        
        {/* MAIN 2-COLUMN WORKSPACE: 68% LEFT FLOWCHART | 32% RIGHT DYNAMIC TEXT */}
        <div className="w-full max-w-[1650px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-12 items-center">
          
          {/* ========================================================= */}
          {/* LEFT SIDE: FLOWCHART (67% WIDTH - PRIMARY FOCUS)          */}
          {/* ========================================================= */}
          <div 
            className="lg:col-span-8 xl:col-span-8 h-[540px] sm:h-[580px] lg:h-[630px] relative overflow-hidden flex items-start justify-center pt-[180px] w-full"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.85) 6%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0.85) 94%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.85) 6%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0.85) 94%, transparent 100%)'
            }}
          >
            {/* Smoothly Translating Continuous Visual Canvas */}
            <motion.div
              style={{ y: canvasY }}
              className="absolute top-0 left-0 right-0 w-full flex flex-col items-center select-none"
            >
              
              {/* --------------------------------------------------- */}
              {/* STAGE 1: INGESTION / ACCESS (Height ~220px) */}
              {/* --------------------------------------------------- */}
              <motion.div 
                style={{ opacity: stage1Opacity, scale: stage1Scale }}
                className="w-full flex flex-col items-center"
              >
                <div className="w-full max-w-[820px] flex items-center justify-between mb-3 px-1">
                  <span className="text-xs font-semibold text-slate-500 tracking-tight">
                    Connect with every source that matters
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold transition-colors duration-200 ${
                    activeStage === 0 
                      ? 'bg-indigo-50 text-indigo-600 border-indigo-200 font-bold' 
                      : 'bg-slate-50 text-slate-400 border-slate-200'
                  }`}>
                    STAGE 01
                  </span>
                </div>

                {/* 4 Source Cards Grid (Expanded to fill larger column) */}
                <div className="w-full max-w-[820px] grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
                  
                  {/* 1. HIE Networks */}
                  <div className={`bg-white p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between h-[190px] ${
                    activeStage === 0 ? 'border-indigo-200 shadow-sm' : 'border-slate-200/85 shadow-xs'
                  }`}>
                    <div>
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider text-center mb-2.5">
                        HIE Networks
                      </p>
                      <div className="space-y-1.5 text-center">
                        <div className="text-xs font-bold text-slate-800 tracking-tight flex items-center justify-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                          <span>commonwell</span>
                        </div>
                        <div className="text-xs font-bold text-slate-800 tracking-tight flex items-center justify-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                          <span>carequality</span>
                        </div>
                        <div className="text-[11px] font-medium text-slate-500 pt-0.5">
                          TEFCA · eHealth
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 text-[9px] text-slate-400 space-y-0.5 text-center font-mono">
                      <p>CA: San Mateo</p>
                      <p>ALDHR · Houston</p>
                    </div>
                  </div>

                  {/* 2. ADT Networks */}
                  <div className={`bg-white p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between h-[190px] ${
                    activeStage === 0 ? 'border-indigo-200 shadow-sm' : 'border-slate-200/85 shadow-xs'
                  }`}>
                    <div>
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider text-center mb-2.5">
                        ADT Networks
                      </p>
                      <div className="space-y-3 text-center mt-3">
                        <div className="text-xs font-bold text-slate-800">
                          <span className="text-xs font-extrabold text-slate-900 block">Bamboo</span>
                          <span className="text-slate-500 text-[9px] font-normal">HEALTH</span>
                        </div>
                        <div className="text-xs font-bold text-slate-800">
                          <span className="text-xs font-extrabold text-slate-900">PointClickCare</span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-100 text-[9px] text-slate-400 text-center font-mono">
                      Real-Time Feeds
                    </div>
                  </div>

                  {/* 3. Pharmacies & Labs */}
                  <div className={`bg-white p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between h-[190px] ${
                    activeStage === 0 ? 'border-indigo-200 shadow-sm' : 'border-slate-200/85 shadow-xs'
                  }`}>
                    <div>
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider text-center mb-2.5">
                        Pharmacies &amp; Labs
                      </p>
                      <div className="space-y-3 text-center mt-3">
                        <div className="text-xs font-bold text-slate-800 flex flex-col items-center">
                          <span className="text-xs font-extrabold text-slate-900">Quest</span>
                          <span className="text-[8px] text-slate-400 tracking-widest font-mono">DIAGNOSTICS</span>
                        </div>
                        <div className="text-xs font-bold text-slate-800">
                          <span className="text-xs font-extrabold text-slate-900">surescripts</span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-100 text-[9px] text-slate-400 text-center font-mono">
                      Rx &amp; Lab Data
                    </div>
                  </div>

                  {/* 4. EHRs */}
                  <div className={`bg-white p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between h-[190px] ${
                    activeStage === 0 ? 'border-indigo-200 shadow-sm' : 'border-slate-200/85 shadow-xs'
                  }`}>
                    <div>
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider text-center mb-2.5">
                        EHRs
                      </p>
                      <div className="space-y-1 text-center text-xs font-bold text-slate-800">
                        <p className="text-xs text-slate-900 font-extrabold">Epic</p>
                        <p className="text-slate-700">athenahealth</p>
                        <p className="text-slate-700">ORACLE</p>
                        <p className="text-[10px] text-slate-500 font-normal">Canvas · Elation</p>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-100 text-[9px] text-slate-400 text-center font-mono">
                      SMART on FHIR
                    </div>
                  </div>

                </div>
              </motion.div>

              {/* --------------------------------------------------- */}
              {/* CONNECTOR SPLINE: 1 -> 2 (Height ~70px) */}
              {/* --------------------------------------------------- */}
              <div className="w-full flex items-center justify-center h-[70px] pointer-events-none relative">
                <svg className="w-full max-w-[820px] h-full overflow-visible" viewBox="0 0 620 70" fill="none">
                  <defs>
                    <filter id="glowFlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  <path d="M 77 0 C 77 35, 310 35, 310 70" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M 232 0 C 232 35, 310 35, 310 70" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M 388 0 C 388 35, 310 35, 310 70" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M 543 0 C 543 35, 310 35, 310 70" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />

                  {/* Strictly Scroll-Driven Data Particles (No Autoplay) */}
                  <motion.circle cx={c1_p1_x} cy={c1_p1_y} r={3.5} fill="#6366f1" filter="url(#glowFlow)" />
                  <motion.circle cx={c1_p2_x} cy={c1_p2_y} r={3.5} fill="#a855f7" filter="url(#glowFlow)" />
                  <motion.circle cx={c1_p3_x} cy={c1_p3_y} r={3.5} fill="#3b82f6" filter="url(#glowFlow)" />
                  <motion.circle cx={c1_p4_x} cy={c1_p4_y} r={3.5} fill="#10b981" filter="url(#glowFlow)" />

                  <circle cx="310" cy="67" r="3.5" fill="#6366f1" />
                </svg>
              </div>

              {/* --------------------------------------------------- */}
              {/* STAGE 2: HARMONIZATION ENGINE (Height ~180px) */}
              {/* --------------------------------------------------- */}
              <motion.div 
                style={{ opacity: stage2Opacity, scale: stage2Scale }}
                className="w-full flex flex-col items-center"
              >
                <div className="w-full max-w-[820px] flex items-center justify-between mb-3 px-1">
                  <span className="text-xs font-semibold text-slate-500 tracking-tight">
                    Unify into a single source of truth
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold transition-colors duration-200 ${
                    activeStage === 1 
                      ? 'bg-indigo-50 text-indigo-600 border-indigo-200 font-bold' 
                      : 'bg-slate-50 text-slate-400 border-slate-200'
                  }`}>
                    STAGE 02
                  </span>
                </div>

                <div className={`w-full max-w-[820px] bg-white rounded-2xl border p-5 sm:p-6 transition-all duration-300 ${
                  activeStage === 1 ? 'border-indigo-200 shadow-md' : 'border-slate-200/85 shadow-sm'
                }`}>
                  
                  {/* Metriport Logo Header */}
                  <div className="flex items-center justify-center gap-2 mb-4 pb-3.5 border-b border-slate-100">
                    <MetriportLogo className="h-4.5 text-slate-900" />
                  </div>

                  {/* 4 Pipeline Steps */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative">
                    <div className="bg-[#fbfbfa] p-3.5 rounded-xl border border-slate-100 flex flex-col items-center text-center space-y-1.5">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                        <FileText size={16} />
                      </div>
                      <span className="text-xs font-semibold text-slate-900">Extract</span>
                    </div>

                    <div className="bg-[#fbfbfa] p-3.5 rounded-xl border border-slate-100 flex flex-col items-center text-center space-y-1.5">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                        <RefreshCw size={16} />
                      </div>
                      <span className="text-xs font-semibold text-slate-900">Normalize</span>
                    </div>

                    <div className="bg-[#fbfbfa] p-3.5 rounded-xl border border-slate-100 flex flex-col items-center text-center space-y-1.5">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                        <Layers size={16} />
                      </div>
                      <span className="text-xs font-semibold text-slate-900">Deduplicate</span>
                    </div>

                    <div className="bg-[#fbfbfa] p-3.5 rounded-xl border border-slate-100 flex flex-col items-center text-center space-y-1.5">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-xs font-semibold text-slate-900">Enrich</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* --------------------------------------------------- */}
              {/* CONNECTOR SPLINE: 2 -> 3 (Height ~70px) */}
              {/* --------------------------------------------------- */}
              <div className="w-full flex items-center justify-center h-[70px] pointer-events-none relative">
                <svg className="w-full max-w-[820px] h-full overflow-visible" viewBox="0 0 620 70" fill="none">
                  <path d="M 310 0 C 310 35, 77 35, 77 70" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M 310 0 C 310 35, 232 35, 232 70" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M 310 0 C 310 35, 388 35, 388 70" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M 310 0 C 310 35, 543 35, 543 70" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />

                  {/* Strictly Scroll-Driven Data Particles */}
                  <motion.circle cx={c2_p1_x} cy={c2_p1_y} r={3.5} fill="#6366f1" filter="url(#glowFlow)" />
                  <motion.circle cx={c2_p2_x} cy={c2_p2_y} r={3.5} fill="#38bdf8" filter="url(#glowFlow)" />
                  <motion.circle cx={c2_p3_x} cy={c2_p3_y} r={3.5} fill="#a855f7" filter="url(#glowFlow)" />
                  <motion.circle cx={c2_p4_x} cy={c2_p4_y} r={3.5} fill="#10b981" filter="url(#glowFlow)" />

                  <circle cx="310" cy="3" r="3.5" fill="#6366f1" />
                </svg>
              </div>

              {/* --------------------------------------------------- */}
              {/* STAGE 3: DEPLOY ANYWHERE (Height ~210px) */}
              {/* --------------------------------------------------- */}
              <motion.div 
                style={{ opacity: stage3Opacity, scale: stage3Scale }}
                className="w-full flex flex-col items-center"
              >
                <div className="w-full max-w-[820px] flex items-center justify-between mb-3 px-1">
                  <span className="text-xs font-semibold text-slate-500 tracking-tight">
                    Deploy anywhere
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold transition-colors duration-200 ${
                    activeStage === 2 
                      ? 'bg-indigo-50 text-indigo-600 border-indigo-200 font-bold' 
                      : 'bg-slate-50 text-slate-400 border-slate-200'
                  }`}>
                    STAGE 03
                  </span>
                </div>

                {/* 4 Destination Cards Grid (Expanded) */}
                <div className="w-full max-w-[820px] grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
                  
                  {/* 1. Analytics & warehouse */}
                  <div className={`bg-white p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between h-[185px] ${
                    activeStage === 2 ? 'border-indigo-200 shadow-sm' : 'border-slate-200/85 shadow-xs'
                  }`}>
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider text-center mb-1.5">
                      Analytics &amp; warehouse
                    </p>
                    <div className="space-y-2.5 text-center my-auto">
                      <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-800">
                        <Database size={13} className="text-[#38bdf8]" />
                        <span>snowflake</span>
                      </div>
                      <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-800">
                        <span className="w-2 h-2 rounded-xs bg-[#f97316]" />
                        <span>databricks</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-100 text-[9px] text-slate-400 text-center font-mono">
                      Analytics-Ready
                    </div>
                  </div>

                  {/* 2. Metriport dashboard */}
                  <div className={`bg-white p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between h-[185px] ${
                    activeStage === 2 ? 'border-indigo-200 shadow-sm' : 'border-slate-200/85 shadow-xs'
                  }`}>
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider text-center mb-1.5">
                      Metriport dashboard
                    </p>
                    <div className="bg-[#fbfbfa] p-2.5 rounded-lg border border-slate-200/70 space-y-1.5 my-auto">
                      <div className="flex items-center justify-between border-b border-slate-200/60 pb-1">
                        <span className="w-8 h-1 bg-slate-300 rounded-full" />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <div className="space-y-1">
                        <div className="h-1 bg-slate-200 rounded-full w-full" />
                        <div className="h-1 bg-slate-200 rounded-full w-4/5" />
                        <div className="h-1 bg-slate-200 rounded-full w-2/3" />
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-100 text-[9px] text-slate-400 text-center font-mono">
                      Interactive UI
                    </div>
                  </div>

                  {/* 3. Embedded EHR app */}
                  <div className={`bg-white p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between h-[185px] ${
                    activeStage === 2 ? 'border-indigo-200 shadow-sm' : 'border-slate-200/85 shadow-xs'
                  }`}>
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider text-center mb-1.5">
                      Embedded EHR app
                    </p>
                    <div className="space-y-1 text-center text-xs font-bold text-slate-800 my-auto">
                      <p className="text-xs font-extrabold text-slate-900">Epic · athena</p>
                      <p className="text-slate-700 text-[11px]">ORACLE · Canvas</p>
                      <p className="text-[10px] text-slate-500 font-normal">Elation · Healthie</p>
                    </div>
                    <div className="pt-2 border-t border-slate-100 text-[9px] text-slate-400 text-center font-mono">
                      Embedded iFrame
                    </div>
                  </div>

                  {/* 4. API */}
                  <div className={`bg-white p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between h-[185px] font-mono ${
                    activeStage === 2 ? 'border-indigo-200 shadow-sm' : 'border-slate-200/85 shadow-xs'
                  }`}>
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider text-center mb-1.5 font-sans">
                      API
                    </p>
                    <div className="bg-slate-900 p-2.5 rounded-lg text-indigo-300 text-[9px] leading-relaxed text-left my-auto space-y-0.5">
                      <p className="text-emerald-400">POST /patient</p>
                      <p className="text-slate-400">&#123; "id": "pt_892",</p>
                      <p className="text-slate-400 pl-2">"status": "ready" &#125;</p>
                    </div>
                    <div className="pt-2 border-t border-slate-100 text-[9px] text-slate-400 text-center font-mono font-sans">
                      REST &amp; Webhooks
                    </div>
                  </div>

                </div>
              </motion.div>

              {/* --------------------------------------------------- */}
              {/* CONNECTOR SPLINE: 3 -> 4 (Height ~70px) */}
              {/* --------------------------------------------------- */}
              <div className="w-full flex items-center justify-center h-[70px] pointer-events-none relative">
                <svg className="w-full max-w-[820px] h-full overflow-visible" viewBox="0 0 620 70" fill="none">
                  <path d="M 77 0 C 77 35, 103 35, 103 70" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M 232 0 C 232 35, 310 35, 310 70" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M 388 0 C 388 35, 310 35, 310 70" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M 543 0 C 543 35, 517 35, 517 70" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />

                  {/* Strictly Scroll-Driven Data Particles */}
                  <motion.circle cx={c3_p1_x} cy={c3_p1_y} r={3.5} fill="#6366f1" filter="url(#glowFlow)" />
                  <motion.circle cx={c3_p2_x} cy={c3_p2_y} r={3.5} fill="#a855f7" filter="url(#glowFlow)" />
                  <motion.circle cx={c3_p3_x} cy={c3_p3_y} r={3.5} fill="#3b82f6" filter="url(#glowFlow)" />
                  <motion.circle cx={c3_p4_x} cy={c3_p4_y} r={3.5} fill="#10b981" filter="url(#glowFlow)" />
                </svg>
              </div>

              {/* --------------------------------------------------- */}
              {/* STAGE 4: TURN RECORDS INTO ANSWERS (Height ~200px) */}
              {/* --------------------------------------------------- */}
              <motion.div 
                style={{ opacity: stage4Opacity, scale: stage4Scale }}
                className="w-full flex flex-col items-center"
              >
                <div className="w-full max-w-[820px] flex items-center justify-between mb-3 px-1">
                  <span className="text-xs font-semibold text-slate-500 tracking-tight">
                    Turn records into answers
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold transition-colors duration-200 ${
                    activeStage === 3 
                      ? 'bg-indigo-50 text-indigo-600 border-indigo-200 font-bold' 
                      : 'bg-slate-50 text-slate-400 border-slate-200'
                  }`}>
                    STAGE 04
                  </span>
                </div>

                {/* 3 Answer Panels (Expanded) */}
                <div className="w-full max-w-[820px] grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5">
                  
                  {/* 1. Record summaries */}
                  <div className={`bg-white p-4 rounded-xl border transition-all duration-300 space-y-2 h-[175px] flex flex-col justify-between ${
                    activeStage === 3 ? 'border-indigo-200 shadow-sm' : 'border-slate-200/85 shadow-xs'
                  }`}>
                    <div>
                      <p className="text-xs font-bold text-slate-900 mb-2">Record summaries</p>
                      <div className="space-y-1.5 opacity-70">
                        <div className="h-1.5 bg-slate-200 rounded-full w-full" />
                        <div className="h-1.5 bg-slate-200 rounded-full w-4/5" />
                        <div className="h-1.5 bg-slate-200 rounded-full w-2/3" />
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-indigo-600 font-medium">
                      <span>Clinical Summary</span>
                      <CheckCircle2 size={12} />
                    </div>
                  </div>

                  {/* 2. Suspected conditions */}
                  <div className={`bg-white p-4 rounded-xl border transition-all duration-300 space-y-2 h-[175px] flex flex-col justify-between ${
                    activeStage === 3 ? 'border-indigo-200 shadow-sm' : 'border-slate-200/85 shadow-xs'
                  }`}>
                    <div>
                      <p className="text-xs font-bold text-slate-900 mb-2">Suspected conditions</p>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between p-1 bg-purple-50/70 rounded border border-purple-100 text-[10px]">
                          <span className="font-semibold text-purple-900">F33.1</span>
                          <span className="text-purple-600">Major Depression</span>
                        </div>
                        <div className="flex items-center justify-between p-1 bg-purple-50/70 rounded border border-purple-100 text-[10px]">
                          <span className="font-semibold text-purple-900">E11.9</span>
                          <span className="text-purple-600">Type 2 Diabetes</span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-purple-600 font-medium">
                      <span>RAF Recapture</span>
                      <CheckCircle2 size={12} />
                    </div>
                  </div>

                  {/* 3. Care gaps */}
                  <div className={`bg-white p-4 rounded-xl border transition-all duration-300 space-y-2 h-[175px] flex flex-col justify-between ${
                    activeStage === 3 ? 'border-indigo-200 shadow-sm' : 'border-slate-200/85 shadow-xs'
                  }`}>
                    <div>
                      <p className="text-xs font-bold text-slate-900 mb-2">Care gaps</p>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between p-1 bg-emerald-50/70 rounded border border-emerald-100 text-[10px]">
                          <span className="font-semibold text-emerald-900">DSF-E</span>
                          <span className="text-emerald-700">Open Gap</span>
                        </div>
                        <div className="flex items-center justify-between p-1 bg-emerald-50/70 rounded border border-emerald-100 text-[10px]">
                          <span className="font-semibold text-emerald-900">CCS</span>
                          <span className="text-emerald-700">Open Gap</span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-emerald-600 font-medium">
                      <span>HEDIS Quality</span>
                      <CheckCircle2 size={12} />
                    </div>
                  </div>

                </div>
              </motion.div>

              {/* --------------------------------------------------- */}
              {/* CONNECTOR SPLINE: 4 -> 5 (Height ~70px) */}
              {/* --------------------------------------------------- */}
              <div className="w-full flex items-center justify-center h-[70px] pointer-events-none relative">
                <svg className="w-full max-w-[820px] h-full overflow-visible" viewBox="0 0 620 70" fill="none">
                  <path d="M 103 0 C 103 35, 310 35, 310 70" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M 310 0 L 310 70" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M 517 0 C 517 35, 310 35, 310 70" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />

                  {/* Strictly Scroll-Driven Data Particles */}
                  <motion.circle cx={c4_p1_x} cy={c4_p1_y} r={3.5} fill="#6366f1" filter="url(#glowFlow)" />
                  <motion.circle cx={c4_p2_x} cy={c4_p2_y} r={3.5} fill="#a855f7" filter="url(#glowFlow)" />
                  <motion.circle cx={c4_p3_x} cy={c4_p3_y} r={3.5} fill="#10b981" filter="url(#glowFlow)" />

                  <circle cx="310" cy="67" r="3.5" fill="#6366f1" />
                </svg>
              </div>

              {/* --------------------------------------------------- */}
              {/* STAGE 5: COMMUNICATE ON THE NETWORK (Height ~180px) */}
              {/* --------------------------------------------------- */}
              <motion.div 
                style={{ opacity: stage5Opacity, scale: stage5Scale }}
                className="w-full flex flex-col items-center"
              >
                <div className="w-full max-w-[820px] flex items-center justify-between mb-3 px-1">
                  <span className="text-xs font-semibold text-slate-500 tracking-tight">
                    Communicate on the network
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold transition-colors duration-200 ${
                    activeStage === 4 
                      ? 'bg-indigo-50 text-indigo-600 border-indigo-200 font-bold' 
                      : 'bg-slate-50 text-slate-400 border-slate-200'
                  }`}>
                    STAGE 05
                  </span>
                </div>

                <div className={`w-full max-w-[820px] bg-white rounded-2xl border p-5 sm:p-6 transition-all duration-300 ${
                  activeStage === 4 ? 'border-indigo-200 shadow-md' : 'border-slate-200/85 shadow-sm'
                }`}>
                  
                  {/* Panel Sub-Header */}
                  <div className="flex items-center justify-center gap-1.5 mb-4 pb-2.5 border-b border-slate-100 text-slate-400">
                    <Globe size={13} className="text-[#6366f1]" />
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      SEND AND RECEIVE ON THE NETWORK
                    </p>
                  </div>

                  {/* 3 Network Channels */}
                  <div className="grid grid-cols-3 gap-3 text-xs font-medium text-slate-700 text-center">
                    
                    {/* Channel 1: Referrals */}
                    <div className="flex flex-col items-center gap-1.5 p-1">
                      <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                        <Users size={15} />
                      </div>
                      <span className="font-semibold text-slate-800 text-[11px]">Referrals</span>
                    </div>

                    {/* Channel 2: Clinical data exchange */}
                    <div className="flex flex-col items-center gap-1.5 p-1">
                      <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
                        <Share2 size={15} />
                      </div>
                      <span className="font-semibold text-slate-800 text-[11px]">Clinical data exchange</span>
                    </div>

                    {/* Channel 3: Electronic case reports */}
                    <div className="flex flex-col items-center gap-1.5 p-1">
                      <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                        <FileText size={15} />
                      </div>
                      <span className="font-semibold text-slate-800 text-[11px]">Electronic case reports</span>
                    </div>

                  </div>
                </div>

                {/* Bottom Radiating Splines */}
                <div className="w-full flex items-center justify-center mt-3 pointer-events-none">
                  <svg className="w-full max-w-[820px] h-10 overflow-visible" viewBox="0 0 620 40" fill="none">
                    <path d="M 310 0 C 310 20, 155 20, 155 40" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                    <path d="M 310 0 L 310 40" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                    <path d="M 310 0 C 310 20, 465 20, 465 40" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                  </svg>
                </div>
              </motion.div>

            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT SIDE: TEXT (33% WIDTH - COMPACT & FIXED)            */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-center pl-0 lg:pl-2 xl:pl-4">
            
            {/* Fixed Section Header & Eyebrow */}
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-[#6366f1] rounded-full animate-pulse" />
                <span className="text-[#6366f1] font-bold text-xs uppercase tracking-wider">How it works</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-normal tracking-tight text-[#0b0e14] leading-[1.14]">
                One platform for every workflow
              </h2>
            </div>

            {/* Interactive Step Navigator / Stage Progress Rail */}
            <div className="flex flex-wrap items-center gap-1.5 mb-5 pb-4 border-b border-slate-200/70">
              {STAGES_COPY.map((item, idx) => {
                const isActive = idx === activeStage;
                return (
                  <div key={item.step} className="flex items-center gap-1.5">
                    <div 
                      className={`px-2 py-0.5 rounded-full text-[11px] font-mono font-semibold transition-all duration-200 flex items-center gap-1 ${
                        isActive 
                          ? 'bg-[#6366f1] text-white shadow-xs ring-2 ring-indigo-200 scale-105' 
                          : 'bg-white text-slate-400 border border-slate-200'
                      }`}
                    >
                      <span className={`w-1 h-1 rounded-full ${isActive ? 'bg-white' : 'bg-slate-300'}`} />
                      <span>{item.step}</span>
                    </div>
                    {idx < STAGES_COPY.length - 1 && (
                      <span className="w-2 h-px bg-slate-200 hidden sm:inline-block" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Dynamic Content Area: Transitions immediately when activeStage changes */}
            <div className="relative min-h-[175px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.20, ease: [0.25, 1, 0.5, 1] }}
                  className="flex flex-col justify-start"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-50 text-[#6366f1] border border-indigo-100">
                      {STAGES_COPY[activeStage].step}
                    </span>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#6366f1] font-bold">
                      {STAGES_COPY[activeStage].tag}
                    </p>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-slate-900 leading-snug mb-2.5">
                    {STAGES_COPY[activeStage].title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {STAGES_COPY[activeStage].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Scroll Helper Hint */}
            <div className="pt-3.5 mt-1 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] animate-pulse" />
                Stage {STAGES_COPY[activeStage].step} / 05
              </span>
              <span>Metriport Engine</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
