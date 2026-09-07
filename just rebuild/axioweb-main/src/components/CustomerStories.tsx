import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Story {
  id: string;
  company: string;
  author: string;
  role: string;
  quote: string;
  avatar: string;
  link: string;
  logoType: 'sollis' | 'easyhealth' | 'color' | 'canvas' | 'brightside';
}

const stories: Story[] = [
  {
    id: 'sollis',
    company: 'SOLLIS HEALTH',
    author: 'Dr. Ben Stein',
    role: 'Chief Medical Officer, Sollis Health',
    quote: 'Metriport gives our emergency teams real-time patient medical history right at the point of care, eliminating critical data gaps when every minute counts.',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&h=200&q=80',
    link: 'https://metriport.com/customers',
    logoType: 'sollis',
  },
  {
    id: 'easyhealth',
    company: 'EasyHealth',
    author: 'David Duel',
    role: 'Founder and CEO, EasyHealth',
    quote: 'We used to work from whatever medical record fragments we could get. With the great partnership we have with Metriport, we work from a real clinical record.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    link: 'https://metriport.com/customers',
    logoType: 'easyhealth',
  },
  {
    id: 'color',
    company: 'color',
    author: 'Sara Lin',
    role: 'Head of Product, Color',
    quote: 'Integrating Metriport enabled automated, structured FHIR queries across national healthcare networks with zero maintenance overhead for our engineering team.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80',
    link: 'https://metriport.com/customers',
    logoType: 'color',
  },
  {
    id: 'canvas',
    company: 'Canvas:',
    author: 'Michael Ray',
    role: 'VP of Engineering, Canvas Medical',
    quote: 'The universal FHIR schema and pre-built EHR workflow embeddings saved us months of custom integration development per health system deployment.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    link: 'https://metriport.com/customers',
    logoType: 'canvas',
  },
  {
    id: 'brightside',
    company: 'Brightside Health',
    author: 'Elena Rostova',
    role: 'Director of Clinical Operations, Brightside Health',
    quote: 'Instant access to comprehensive medical records allows our tele-psychiatry providers to close vital care gaps on day one of treatment.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    link: 'https://metriport.com/customers',
    logoType: 'brightside',
  },
];

const STORY_DURATION = 9000; // 9 seconds per story (steady, readable pace)

export const CustomerStories: React.FC = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0); // Single reliable source of truth (0=Sollis, 1=EasyHealth, 2=Color, 3=Canvas, 4=Brightside)
  const [progress, setProgress] = useState(0);                 // 0 to 100%
  const [isFading, setIsFading] = useState(false);

  // Deterministic timer and carousel state machine
  useEffect(() => {
    setProgress(0);
    setIsFading(false);

    let startTime = performance.now();
    let animId: number;
    let hasTriggeredTransition = false;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const currentProgress = Math.min((elapsed / STORY_DURATION) * 100, 100);
      setProgress(currentProgress);

      if (currentProgress >= 100 && !hasTriggeredTransition) {
        hasTriggeredTransition = true;
        // Trigger soft 250ms crossfade
        setIsFading(true);
        setTimeout(() => {
          // Advance exactly ONE index (0 -> 1 -> 2 -> 3 -> 4 -> 0)
          setActiveStoryIndex((prev) => (prev + 1) % stories.length);
        }, 250);
        return; // Stop current RAF loop
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [activeStoryIndex]);

  // Handle manual customer tab click
  const handleSelectStory = (idx: number) => {
    if (idx === activeStoryIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveStoryIndex(idx);
    }, 200);
  };

  const current = stories[activeStoryIndex];

  return (
    <section className="relative w-full min-w-full bg-white text-slate-950 py-14 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-16 xl:px-24" id="customers">
      <div className="w-full max-w-[1560px] mx-auto">
        
        {/* Top Header Area (Stationary) */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 sm:mb-10">
          
          {/* Left: Eyebrow + 2-Line Headline */}
          <div>
            <p className="text-xs font-semibold text-indigo-600 tracking-wide mb-2">
              Customer stories
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-normal tracking-tight text-slate-950 leading-[1.15]">
              From startup to enterprise health systems.
            </h2>
            <p className="text-2xl sm:text-3xl lg:text-[36px] font-normal tracking-tight text-slate-400 leading-[1.15] mt-1">
              Every care model, on a single platform.
            </p>
          </div>

          {/* Right: Black Rounded CTA Button */}
          <a
            href="https://metriport.com/customers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-black text-white text-xs font-medium hover:bg-slate-800 transition-all flex-shrink-0 self-start md:self-auto shadow-xs"
          >
            All customer stories &gt;
          </a>
        </div>

        {/* Center Testimonial Editorial Feature (Smooth Crossfade) */}
        <div className="max-w-2xl lg:max-w-3xl mx-auto text-center my-8 sm:my-10 min-h-[260px] flex flex-col items-center justify-center">
          
          <div className={`transition-opacity duration-250 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'} flex flex-col items-center`}>
            {/* Circular Customer Portrait */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mx-auto overflow-hidden ring-4 ring-slate-100/90 shadow-xs mb-5">
              <img
                src={current.avatar}
                alt={current.author}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Large Centered Testimonial Quote */}
            <blockquote className="text-xl sm:text-2xl lg:text-[26px] font-normal text-slate-900 leading-[1.38] tracking-tight mb-4 max-w-2xl lg:max-w-3xl">
              <span className="text-indigo-600 font-serif mr-0.5">“</span>
              {current.quote}
              <span className="text-indigo-600 font-serif ml-0.5">”</span>
            </blockquote>

            {/* Customer Name and Role/Company */}
            <p className="text-xs text-slate-500 font-normal">
              <strong className="text-slate-800 font-semibold">{current.author}</strong>, {current.role}
            </p>

            {/* Centered Read the story Link */}
            <div className="mt-2.5">
              <a
                href={current.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                Read the story <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Horizontal Customer-Story Selector with Live Filling Timeline */}
        <div className="grid grid-cols-5 gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-10 mt-8 sm:mt-10">
          
          {stories.map((story, idx) => {
            const isActive = idx === activeStoryIndex;

            return (
              <button
                key={story.id}
                type="button"
                onClick={() => handleSelectStory(idx)}
                className="group flex flex-col items-center text-left focus:outline-hidden cursor-pointer"
              >
                {/* Timeline Progress Bar ABOVE each logo */}
                <div className="w-full h-[2px] bg-slate-200 relative overflow-hidden mb-4 rounded-full">
                  {isActive && (
                    <div
                      className="absolute top-0 left-0 bottom-0 bg-indigo-600 rounded-full"
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                  )}
                </div>

                {/* Customer Logo / Name */}
                <div className="flex items-center justify-center min-h-[28px]">
                  {story.logoType === 'sollis' && (
                    <span className={`text-[11px] sm:text-xs lg:text-sm font-bold tracking-widest uppercase transition-colors ${
                      isActive ? 'text-slate-950 font-bold' : 'text-slate-400 group-hover:text-slate-600'
                    }`}>
                      SOLLIS <span className="font-light">HEALTH</span>
                    </span>
                  )}

                  {story.logoType === 'easyhealth' && (
                    <span className={`text-sm sm:text-base lg:text-lg font-bold tracking-tight font-serif italic transition-colors ${
                      isActive ? 'text-slate-950 font-bold' : 'text-slate-400 group-hover:text-slate-600'
                    }`}>
                      EasyHealth
                    </span>
                  )}

                  {story.logoType === 'color' && (
                    <span className={`text-sm sm:text-base lg:text-lg font-semibold tracking-tight lowercase font-sans transition-colors ${
                      isActive ? 'text-slate-950 font-bold' : 'text-slate-400 group-hover:text-slate-600'
                    }`}>
                      color
                    </span>
                  )}

                  {story.logoType === 'canvas' && (
                    <span className={`text-sm sm:text-base lg:text-lg font-semibold tracking-tight transition-colors ${
                      isActive ? 'text-slate-950 font-bold' : 'text-slate-400 group-hover:text-slate-600'
                    }`}>
                      Canvas:
                    </span>
                  )}

                  {story.logoType === 'brightside' && (
                    <span className={`text-[11px] sm:text-xs lg:text-sm font-medium flex items-center justify-center gap-1 transition-colors ${
                      isActive ? 'text-slate-950 font-semibold' : 'text-slate-400 group-hover:text-slate-600'
                    }`}>
                      <span className={`text-xs leading-none transition-colors ${
                        isActive ? 'text-slate-950' : 'text-slate-300'
                      }`}>✻</span> Brightside Health
                    </span>
                  )}
                </div>
              </button>
            );
          })}

        </div>

      </div>
    </section>
  );
};
