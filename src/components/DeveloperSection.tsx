import React from 'react';
import { ArrowRight, ArrowUpRight, Code, Database, Layout, Grid, Github } from 'lucide-react';

export const DeveloperSection: React.FC = () => {
  return (
    <section className="rail-container-dark py-24 px-6 sm:px-12 lg:px-16" id="developers">
      {/* Label */}
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
        Fastest industry-wide setup time
      </p>

      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-white leading-tight max-w-2xl mb-4">
        Build at enterprise scale. Ship at startup speed.
      </h2>

      <p className="text-slate-400 text-lg mb-8">
        Integrate once. Go live in days, not quarters.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-4 mb-20">
        <a
          href="https://dash.metriport.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded bg-white text-slate-950 font-semibold text-sm flex items-center gap-2 hover:bg-slate-100 transition-all"
        >
          Start building <ArrowRight size={16} />
        </a>
        <a
          href="https://docs.metriport.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded border border-white/20 bg-white/5 text-white font-medium text-sm hover:bg-white/10 transition-all"
        >
          Read the docs
        </a>
      </div>

      {/* Open Source Radial Glow Container */}
      <div className="rounded-2xl border border-white/15 p-8 lg:p-12 relative overflow-hidden bg-gradient-to-br from-indigo-950/40 via-purple-950/20 to-slate-950">
        {/* Radial glow background effect */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl mb-12 relative z-10">
          <h3 className="text-3xl font-normal text-white leading-snug mb-6">
            Open source, with no black boxes: <br />
            <span className="text-slate-400">best-in-class trust, transparency, and security.</span>
          </h3>

          <a
            href="https://github.com/metriport/metriport"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/20 bg-white/5 text-white text-xs font-semibold hover:bg-white/10 transition-all"
          >
            <Github size={16} />
            View on GitHub <ArrowUpRight size={14} />
          </a>
        </div>

        {/* 4 Developer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-white/10 relative z-10">
          {/* Column 1 */}
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg border border-white/15 bg-white/5 flex items-center justify-center text-indigo-400">
              <Code size={18} />
            </div>
            <h4 className="text-base font-semibold text-white">Build on our API</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Integrate anywhere with structured FHIR-native output.
            </p>
            <a href="https://docs.metriport.com" className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:underline">
              Read the guide <ArrowRight size={12} />
            </a>
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg border border-white/15 bg-white/5 flex items-center justify-center text-indigo-400">
              <Database size={18} />
            </div>
            <h4 className="text-base font-semibold text-white">Sync with our warehouse</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Analytics-ready data in a unified schema, deployed where you need it.
            </p>
            <a href="https://docs.metriport.com" className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:underline">
              Read the guide <ArrowRight size={12} />
            </a>
          </div>

          {/* Column 3 */}
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg border border-white/15 bg-white/5 flex items-center justify-center text-indigo-400">
              <Layout size={18} />
            </div>
            <h4 className="text-base font-semibold text-white">Embed via iframe</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Integrate pre-built components into your existing workflows.
            </p>
            <a href="https://docs.metriport.com" className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:underline">
              Read the guide <ArrowRight size={12} />
            </a>
          </div>

          {/* Column 4 */}
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg border border-white/15 bg-white/5 flex items-center justify-center text-indigo-400">
              <Grid size={18} />
            </div>
            <h4 className="text-base font-semibold text-white">Your own dashboard</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Standalone tools for platform setup and debugging.
            </p>
            <a href="https://docs.metriport.com" className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:underline">
              Read the guide <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
