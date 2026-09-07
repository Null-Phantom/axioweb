import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const articles = [
    {
      title: 'What FHIR R4 and TEFCA Mean for Health Data Exchange',
      date: 'August 14, 2026',
      category: 'Interoperability',
    },
    {
      title: 'Building SMART-on-FHIR Applications for Major EHR Networks',
      date: 'July 28, 2026',
      category: 'Engineering',
    },
    {
      title: 'Automating Clinical Chart Retrieval for Value-Based Care Entities',
      date: 'July 12, 2026',
      category: 'Clinical Workflows',
    },
  ];

  return (
    <section className="rail-container-light py-24 px-6 sm:px-12 lg:px-16" data-theme="light" id="blog">
      {/* Section Label */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-[3px] h-4 bg-[#6366f1] rounded-full" />
        <span className="text-[#6366f1] font-semibold text-sm tracking-wide">Latest</span>
      </div>

      {/* Heading & View All Blog Posts CTA */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-4">
        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#0b0e14]">
          Blog
        </h2>
        <a
          href="#blog"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0b0e14] text-white text-sm font-semibold hover:bg-slate-800 transition-all flex-shrink-0"
        >
          View all blog posts <ArrowRight size={16} />
        </a>
      </div>

      <p className="text-slate-600 text-base mb-12">
        Get updates on upcoming products and features from the Metriport team.
      </p>

      {/* Featured Blog Card (Large 2-column card) */}
      <div className="bento-card-shell overflow-hidden grid grid-cols-1 lg:grid-cols-12 mb-12">
        {/* Left Visual Banner */}
        <div className="lg:col-span-6 bg-[#07090e] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden text-white min-h-[300px]">
          <div className="relative z-10">
            <span className="font-mono text-xs text-slate-400">metriport</span>
            <div className="mt-8 space-y-2">
              <p className="text-sm text-slate-400">We've raised</p>
              <p className="text-5xl sm:text-6xl font-normal text-metriport-gradient">$26M</p>
              <p className="text-sm text-slate-400">in Series A and Seed+ funding</p>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex items-center gap-6 text-xs text-slate-400 font-mono relative z-10">
            <span>matrix</span>
            <span>ARTIS</span>
            <span>Y Combinator</span>
          </div>
        </div>

        {/* Right Article Excerpt */}
        <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between bg-white">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs">
              <div className="flex gap-2">
                <span className="bg-slate-100 text-slate-700 font-medium px-2.5 py-1 rounded-full">Press Release</span>
                <span className="bg-slate-100 text-slate-700 font-medium px-2.5 py-1 rounded-full">Funding</span>
              </div>
              <span className="text-slate-400 font-mono">August 27, 2026</span>
            </div>

            <h3 className="text-2xl font-normal text-slate-900 leading-snug">
              Metriport raises $26 million to give clinicians insight into any patient question at the point of care
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              The company turns scattered, fragmented patient records into structured information that gives clinicians what they need, exactly when they need it, to provide the best possible care.
            </p>
          </div>

          <div className="pt-6 flex justify-end">
            <div className="w-9 h-9 rounded-md border border-slate-200 flex items-center justify-center text-slate-700">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* 3 Secondary Article Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((item, idx) => (
          <div key={idx} className="bento-card-shell p-6 flex flex-col justify-between min-h-[220px]">
            <div className="space-y-3">
              <span className="text-xs font-mono text-slate-400">{item.date}</span>
              <h4 className="text-lg font-normal text-slate-900 leading-snug">
                {item.title}
              </h4>
            </div>
            <div className="pt-4 flex justify-end">
              <div className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center text-slate-700">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
