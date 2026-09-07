import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const CustomerStories: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1); // 1 = EasyHealth

  const stories = [
    {
      company: 'SOLLIS HEALTH',
      author: 'Dr. Ben Stein',
      role: 'Chief Medical Officer, Sollis Health',
      quote: 'Metriport gives our clinical teams real-time patient history right at the point of care, eliminating missing records during critical emergency house calls.',
      link: '#',
    },
    {
      company: 'EasyHealth',
      author: 'David Duel',
      role: 'Founder and CEO, EasyHealth',
      quote: '“We used to work from whatever medical record fragments we could get. With the great partnership we have with Metriport, we work from a real clinical record.”',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
      link: '#',
    },
    {
      company: 'color',
      author: 'Sara Lin',
      role: 'Head of Product, Color',
      quote: 'Integrating Metriport enabled automated FHIR queries across national HIEs with zero maintenance overhead for our internal engineering team.',
      link: '#',
    },
    {
      company: 'Canvas',
      author: 'Michael Ray',
      role: 'VP Engineering, Canvas Medical',
      quote: 'The universal FHIR schema and pre-built EHR app embeddings saved us months of custom development per health system deployment.',
      link: '#',
    },
    {
      company: 'Brightside Health',
      author: 'Elena Rostova',
      role: 'Director of Clinical Operations, Brightside Health',
      quote: 'Instant access to comprehensive medical records allows our tele-psychiatry providers to close care gaps on day one of treatment.',
      link: '#',
    },
  ];

  const current = stories[activeTab];

  return (
    <section className="rail-container-light py-24 px-6 sm:px-12 lg:px-16" data-theme="light" id="customers">
      {/* Section Label */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-[3px] h-4 bg-[#6366f1] rounded-full" />
        <span className="text-[#6366f1] font-semibold text-sm tracking-wide">Customer stories</span>
      </div>

      {/* Heading & All Customer Stories Button */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
        <div>
          <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#0b0e14] leading-[1.12]">
            From startup to enterprise health systems.
          </h2>
          <p className="text-2xl sm:text-3xl font-normal text-slate-500 tracking-tight mt-1">
            Every care model, on a single platform.
          </p>
        </div>
        <a
          href="#customers"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0b0e14] text-white text-sm font-semibold hover:bg-slate-800 transition-all flex-shrink-0"
        >
          All customer stories <ArrowRight size={16} />
        </a>
      </div>

      {/* Central Testimonial Card */}
      <div className="max-w-3xl mx-auto text-center py-12 px-6 mb-16 space-y-6">
        {/* CEO Avatar Photo */}
        <div className="w-20 h-20 rounded-full mx-auto overflow-hidden border-2 border-slate-200 shadow-md">
          <img
            src={current.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80'}
            alt={current.author}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quote */}
        <blockquote className="text-2xl sm:text-3xl font-normal text-[#0b0e14] tracking-tight leading-relaxed">
          {current.quote}
        </blockquote>

        {/* Author Attribution */}
        <p className="text-sm font-medium text-slate-500">
          <strong className="text-slate-900 font-semibold">{current.author}</strong>, {current.role}
        </p>

        {/* Read the story Link */}
        <div>
          <a href={current.link} className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:underline">
            Read the story <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* Customer Logo Tab Strip at Bottom */}
      <div className="border-t border-slate-200 pt-8 flex items-center justify-around flex-wrap gap-6">
        {stories.map((s, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveTab(idx)}
            className={`pb-3 text-sm font-bold tracking-wider uppercase transition-all relative ${
              activeTab === idx ? 'text-slate-900 opacity-100' : 'text-slate-400 opacity-60 hover:opacity-100'
            }`}
          >
            <span>{s.company}</span>
            {activeTab === idx && (
              <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#6366f1] rounded-full" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};
