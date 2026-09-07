import React from 'react';
import { ArrowDown, Database, Activity, Share2, FileText, Send, CheckCircle2, Layout, Layers, RefreshCw } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="rail-container-light py-24 px-6 sm:px-12 lg:px-16 relative" data-theme="light" id="how-it-works">
      {/* Section Label */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-[3px] h-4 bg-[#6366f1] rounded-full" />
        <span className="text-[#6366f1] font-semibold text-sm tracking-wide">How it works</span>
      </div>

      {/* Section Heading */}
      <div className="max-w-3xl mb-16">
        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#0b0e14] leading-[1.12]">
          One platform for every workflow
        </h2>
      </div>

      {/* LEVEL 1: INPUT SOURCES */}
      <div className="mb-16">
        <p className="text-center text-sm font-semibold text-slate-500 mb-8">Connect with every source that matters</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 4 Input Cards */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">HIE Networks</p>
              <div className="space-y-2 text-xs font-bold text-slate-800">
                <p>commonwell</p>
                <p>carequality</p>
                <p className="text-[10px] text-slate-400">TEFCA · eHealth</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">ADT Networks</p>
              <div className="space-y-2 text-xs font-bold text-slate-800">
                <p>Bamboo Health</p>
                <p>PointClickCare</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Pharmacies &amp; Labs</p>
              <div className="space-y-2 text-xs font-bold text-slate-800">
                <p>Quest Diagnostics</p>
                <p>surescripts</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">EHRs</p>
              <div className="space-y-2 text-xs font-bold text-slate-800">
                <p>Epic · athena</p>
                <p>ORACLE · Canvas</p>
              </div>
            </div>
          </div>

          {/* Level 1 Explanatory Text */}
          <div className="lg:col-span-4 pl-0 lg:pl-6 border-l-0 lg:border-l border-indigo-500/40 space-y-2">
            <p className="text-xs font-mono uppercase tracking-wider text-indigo-600 font-semibold">ACCESS</p>
            <h3 className="text-2xl font-normal tracking-tight text-slate-900">Every provider, one integration</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              750K+ providers across every network that matters — one integration, not dozens.
            </p>
          </div>
        </div>
      </div>

      {/* Dotted Connection Lines to Level 2 */}
      <div className="flex justify-center my-8">
        <div className="w-px h-12 border-l-2 border-dashed border-indigo-400 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-node-pulse" />
        </div>
      </div>

      {/* LEVEL 2: CENTRAL ENGINE */}
      <div className="mb-16">
        <p className="text-center text-sm font-semibold text-slate-500 mb-6">Unify into a single source of truth</p>

        <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="font-semibold text-slate-900 text-base">Metriport Harmonization Engine</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium text-slate-700">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-center justify-center gap-2">
              <FileText size={14} className="text-indigo-600" /> Extract
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-center justify-center gap-2">
              <RefreshCw size={14} className="text-indigo-600" /> Normalize
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-center justify-center gap-2">
              <Layers size={14} className="text-indigo-600" /> Deduplicate
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-center justify-center gap-2">
              <CheckCircle2 size={14} className="text-indigo-600" /> Enrich
            </div>
          </div>
        </div>
      </div>

      {/* Dotted Connection Lines to Level 3 */}
      <div className="flex justify-center my-8">
        <div className="w-px h-12 border-l-2 border-dashed border-indigo-400 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-node-pulse" />
        </div>
      </div>

      {/* LEVEL 3: DEPLOY ANYWHERE */}
      <div className="mb-16">
        <p className="text-center text-sm font-semibold text-slate-500 mb-8">Deploy anywhere</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Analytics &amp; warehouse</p>
              <div className="space-y-1 text-xs font-bold text-slate-800">
                <p>Snowflake</p>
                <p>databricks</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Metriport dashboard</p>
              <div className="h-10 bg-slate-100 rounded border border-slate-200 flex items-center justify-center text-[10px] text-slate-500">
                Interactive UI
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Embedded EHR app</p>
              <div className="space-y-1 text-xs font-bold text-slate-800">
                <p>Epic · athena</p>
                <p>Canvas · Elation</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center font-mono">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 font-sans">API</p>
              <div className="text-[10px] bg-slate-900 text-indigo-300 p-2 rounded text-left">
                POST /patient
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 pl-0 lg:pl-6 border-l-0 lg:border-l border-indigo-500/40 space-y-2">
            <p className="text-xs font-mono uppercase tracking-wider text-indigo-600 font-semibold">FLEXIBLE DELIVERY</p>
            <h3 className="text-2xl font-normal tracking-tight text-slate-900">Wherever your teams work</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              API, data warehouse, EHR apps, or embeds - deploy where teams already work.
            </p>
          </div>
        </div>
      </div>

      {/* Dotted Connection Lines to Level 4 */}
      <div className="flex justify-center my-8">
        <div className="w-px h-12 border-l-2 border-dashed border-indigo-400 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-node-pulse" />
        </div>
      </div>

      {/* LEVEL 4: TURN RECORDS INTO ANSWERS */}
      <div className="mb-16">
        <p className="text-center text-sm font-semibold text-slate-500 mb-8">Turn records into answers</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-xs font-semibold text-slate-900 mb-2">Record summaries</p>
              <div className="space-y-1.5 opacity-60">
                <div className="h-2 bg-slate-200 rounded w-full" />
                <div className="h-2 bg-slate-200 rounded w-4/5" />
                <div className="h-2 bg-slate-200 rounded w-2/3" />
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-xs font-semibold text-slate-900 mb-2">Suspected conditions</p>
              <div className="space-y-1.5 opacity-60">
                <div className="h-2 bg-purple-200 rounded w-full" />
                <div className="h-2 bg-purple-200 rounded w-3/4" />
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-xs font-semibold text-slate-900 mb-2">Care gaps</p>
              <div className="space-y-1.5 opacity-60">
                <div className="h-2 bg-indigo-200 rounded w-full" />
                <div className="h-2 bg-indigo-200 rounded w-1/2" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 pl-0 lg:pl-6 border-l-0 lg:border-l border-indigo-500/40 space-y-2">
            <p className="text-xs font-mono uppercase tracking-wider text-indigo-600 font-semibold">INSIGHTS AND ANALYTICS</p>
            <h3 className="text-2xl font-normal tracking-tight text-slate-900">Answers, not just records</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              AI summaries, suspected conditions, and HEDIS care gaps, read off the whole record.
            </p>
          </div>
        </div>
      </div>

      {/* LEVEL 5: COMMUNICATE ON THE NETWORK */}
      <div>
        <p className="text-center text-sm font-semibold text-slate-500 mb-8">Communicate on the network</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">SEND AND RECEIVE ON THE NETWORK</p>
            <div className="grid grid-cols-3 gap-4 text-xs font-medium text-slate-700">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Send size={18} />
                </div>
                <span>Referrals</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Share2 size={18} />
                </div>
                <span>Clinical data exchange</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                  <FileText size={18} />
                </div>
                <span>Electronic case reports</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 pl-0 lg:pl-6 border-l-0 lg:border-l border-indigo-500/40 space-y-2">
            <p className="text-xs font-mono uppercase tracking-wider text-indigo-600 font-semibold">MESSAGING</p>
            <h3 className="text-2xl font-normal tracking-tight text-slate-900">Providers and public health</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Referrals to other providers, and electronic case reports to public health agencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
