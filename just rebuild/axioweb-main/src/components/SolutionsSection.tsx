import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const SolutionsSection: React.FC = () => {
  return (
    <section className="rail-container-light py-24 px-4 sm:px-8 lg:px-12 xl:px-16 w-full" data-theme="light" id="solutions">
      <div className="w-full max-w-[1560px] mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-[3px] h-4 bg-[#6366f1] rounded-full" />
          <span className="text-[#6366f1] font-semibold text-sm tracking-wide">Solutions</span>
        </div>

        {/* Main Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#0b0e14] leading-[1.12] mb-4">
            Solutions for every healthcare organization
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Whatever you need to do with patient data, the platform covers it: integrations, a unified data layer, apps, and analytics, all on one record.
          </p>
        </div>

        {/* 4 Solutions Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CARD 1: Enterprises & health systems */}
          <div className="bento-card-shell overflow-hidden flex flex-col justify-between">
            <div className="h-64 w-full bg-slate-200 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80"
                alt="Enterprises and health systems hospital building"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-normal text-slate-900">Enterprises &amp; health systems</h3>
                <div className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center text-slate-700">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Scale, security, and support behind one API, one data warehouse, and turnkey integrations with the EHRs you already run.
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <span>one medical</span>
                <span>hoag.</span>
                <span>wellpath</span>
              </div>
            </div>
          </div>

          {/* CARD 2: Value-based care */}
          <div className="bento-card-shell overflow-hidden flex flex-col justify-between">
            <div className="h-64 w-full bg-slate-200 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
                alt="Value-based care medical campus"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-normal text-slate-900">Value-based care</h3>
                <div className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center text-slate-700">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Data from every integration we run, aimed at RAF accuracy, care gap closure, and 30-day readmission prevention.
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <span>STRIVE HEALTH</span>
                <span>Thyme Care</span>
                <span>EasyHealth</span>
              </div>
            </div>
          </div>

          {/* CARD 3: Healthcare IT & EHRs */}
          <div className="bento-card-shell overflow-hidden flex flex-col justify-between">
            <div className="h-64 w-full bg-slate-200 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="Healthcare IT and EHR desk setup"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-normal text-slate-900">Healthcare IT &amp; EHRs</h3>
                <div className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center text-slate-700">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                One integration behind every provider you serve, and the record foundation every downstream system and AI tool is built on.
              </p>
            </div>
          </div>

          {/* CARD 4: Providers & startups */}
          <div className="bento-card-shell overflow-hidden flex flex-col justify-between">
            <div className="h-64 w-full bg-slate-200 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
                alt="Providers and startups office workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-normal text-slate-900">Providers &amp; startups</h3>
                <div className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center text-white bg-indigo-600">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Complete patient records from day one, with no chart chasing. Integrate in days and get value from the first query.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
