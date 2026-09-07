import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Activity, Database, Layers, Cpu, Share2, ShieldCheck, BookOpen, FileText } from 'lucide-react';
import { MetriportLogo } from './MetriportLogo';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [isLightMode, setIsLightMode] = useState(false);

  // Dynamic theme switcher: detects whether the header is currently scrolling over a light section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 80;
      const lightElements = document.querySelectorAll('.rail-container-light, [data-theme="light"]');
      let overLight = false;

      lightElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;
        if (scrollPos >= top && scrollPos <= bottom) {
          overLight = true;
        }
      });

      setIsLightMode(overLight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dropdownsData: Record<string, any> = {
    Solutions: [
      { title: 'Digital Health', desc: 'Accelerate care delivery with real-time patient data', icon: Activity },
      { title: 'Health Systems & EMRs', desc: 'Connect homegrown EMRs to national exchange networks', icon: Database },
      { title: 'Payers & Risk Entities', desc: 'Automate chart retrieval and risk adjustment workflows', icon: Layers },
      { title: 'AI Agents & Scribes', desc: 'Feed LLMs and clinical agents structured FHIR patient context', icon: Cpu },
    ],
    Platform: [
      { title: 'Medical API', desc: 'Single universal REST API for query & push across HIEs', icon: Share2 },
      { title: 'EHR Connectors', desc: 'Pre-built SMART-on-FHIR apps for Epic, Athena, Cerner', icon: Layers },
      { title: 'Engine & Deduplication', desc: 'Patient matching, identity resolution & record consolidation', icon: Cpu },
      { title: 'Security & Compliance', desc: 'HIPAA, SOC 2 Type II, ISO 27001 certified infrastructure', icon: ShieldCheck },
    ],
    Resources: [
      { title: 'Documentation', desc: 'Guides, quickstarts, and comprehensive API docs', icon: BookOpen },
      { title: 'API Reference', desc: 'Explore OpenAPI schemas and interactive endpoints', icon: FileText },
      { title: 'Network Coverage', desc: 'Interactive map of 750k+ connected US providers', icon: Share2 },
      { title: 'Blog & Insights', desc: 'Technical deep dives into FHIR R4 and interoperability', icon: Activity },
    ],
  };

  const textColor = isLightMode ? '#0b0e14' : '#ffffff';
  const navBg = isLightMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.95)';
  const borderBottomColor = isLightMode ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.1)';

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, width: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <AnimatePresence>
        {announcementVisible && (
          <div 
            style={{ 
              width: '100%', 
              height: '38px',
              background: 'linear-gradient(90deg, #4f46e5 0%, #7c3aed 35%, #d97706 75%, #d97706 100%)', 
              color: '#ffffff',
              padding: '0 20px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              boxSizing: 'border-box',
              zIndex: 50
            }}
          >
            <div style={{ margin: '0 auto', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#ffffff' }}>
              <span style={{ fontWeight: 400 }}>
                Metriport raises $26 million to give clinicians insight at the point of care
              </span>
              <span style={{ opacity: 0.7 }}>|</span>
              <a
                href="https://docs.metriport.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                Watch the launch video <ArrowRight size={12} />
              </a>
            </div>
            <button
              type="button"
              onClick={() => setAnnouncementVisible(false)}
              style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', padding: '4px' }}
              aria-label="Close announcement"
            >
              <X size={16} />
            </button>
          </div>
        )}
      </AnimatePresence>

      {/* 2. STICKY NAVBAR */}
      <header 
        style={{ 
          width: '100%', 
          height: '65px', 
          backgroundColor: navBg, 
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${borderBottomColor}`, 
          display: 'flex', 
          alignItems: 'center', 
          boxSizing: 'border-box',
          transition: 'background-color 0.25s, border-color 0.25s',
        }}
      >
        <div style={{ maxWidth: '1600px', margin: '0 auto', width: '100%', padding: '0 clamp(20px, 3vw, 48px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxSizing: 'border-box' }}>
          
          {/* LEFT: Metriport Logo */}
          <a href="#" aria-label="Metriport — home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', width: '150px' }}>
            <MetriportLogo className={`h-6 ${isLightMode ? 'text-black' : 'text-white'}`} />
          </a>

          {/* CENTER: Primary Navigation */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '20px' }} className="hidden lg:flex">
            {['Solutions', 'Platform', 'Resources'].map((item) => (
              <div
                key={item}
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveDropdown(item)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '6px 12px',
                    color: textColor,
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    opacity: activeDropdown === item ? 1 : 0.85,
                    transition: 'all 0.2s',
                  }}
                >
                  {item}
                  <ChevronDown size={14} style={{ transform: activeDropdown === item ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', opacity: 0.6 }} />
                </button>

                {/* Dropdown Card */}
                <AnimatePresence>
                  {activeDropdown === item && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15 }}
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        marginTop: '8px',
                        width: '320px',
                        borderRadius: '12px',
                        border: isLightMode ? '1px solid rgba(0,0,0,0.1)' : '1px solid rgba(255,255,255,0.15)',
                        backgroundColor: isLightMode ? '#ffffff' : '#121622',
                        padding: '8px',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
                        zIndex: 50,
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {dropdownsData[item]?.map((sub: any, idx: number) => {
                          const IconComp = sub.icon;
                          return (
                            <a
                              key={idx}
                              href="#"
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '12px',
                                padding: '10px',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                transition: 'background-color 0.2s',
                              }}
                              className={isLightMode ? 'hover:bg-slate-100' : 'hover:bg-white/10'}
                            >
                              <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: isLightMode ? 'rgba(99,102,241,0.1)' : 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6366f1', flexShrink: 0 }}>
                                <IconComp size={16} />
                              </div>
                              <div>
                                <p style={{ margin: 0, fontSize: '13px', fontWeight: 600, color: textColor }}>
                                  {sub.title}
                                </p>
                                <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: isLightMode ? '#64748b' : 'rgba(255,255,255,0.6)' }}>
                                  {sub.desc}
                                </p>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <a
              href="#customers"
              style={{
                color: textColor,
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
                padding: '6px 12px',
                opacity: 0.85,
              }}
            >
              Customers
            </a>
          </nav>

          {/* RIGHT: Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="https://dash.metriport.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '36px',
                padding: '0 16px',
                border: isLightMode ? '1px solid rgba(0,0,0,0.2)' : '1px solid rgba(255,255,255,0.25)',
                borderRadius: '4px',
                backgroundColor: 'transparent',
                color: textColor,
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Sign in
            </a>

            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                height: '36px',
                padding: '0 18px',
                border: 'none',
                borderRadius: '4px',
                backgroundColor: isLightMode ? '#0b0e14' : '#ffffff',
                color: isLightMode ? '#ffffff' : '#0b0e14',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              }}
            >
              Book a demo
              <ArrowRight size={14} color={isLightMode ? '#ffffff' : '#0b0e14'} />
            </a>

            {/* Mobile drawer toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ background: 'none', border: 'none', color: textColor, cursor: 'pointer', padding: '4px', marginLeft: '6px' }}
              className="lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{ width: '100%', backgroundColor: isLightMode ? '#ffffff' : '#0b0e14', borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '24px', boxSizing: 'border-box' }} className="lg:hidden">
          {['Solutions', 'Platform', 'Resources'].map((item) => (
            <div key={item} style={{ marginBottom: '16px' }}>
              <p style={{ margin: '0 0 8px 0', fontSize: '11px', fontWeight: 600, color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {item}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '8px' }}>
                {dropdownsData[item]?.map((sub: any, idx: number) => (
                  <a key={idx} href="#" style={{ color: textColor, textDecoration: 'none', fontSize: '14px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>{sub.title}</span>
                    <span style={{ fontSize: '11px', color: '#64748b' }}>{sub.desc}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
          <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href="https://dash.metriport.com/"
              style={{ width: '100%', textAlign: 'center', padding: '10px', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.2)', color: textColor, textDecoration: 'none', fontSize: '14px' }}
            >
              Sign in
            </a>
            <a
              href="#contact"
              style={{ width: '100%', textAlign: 'center', padding: '10px', borderRadius: '4px', backgroundColor: isLightMode ? '#0b0e14' : '#ffffff', color: isLightMode ? '#ffffff' : '#0b0e14', textDecoration: 'none', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              Book a demo
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
