import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlatformBento } from './components/PlatformBento';
import { ByTheNumbers } from './components/ByTheNumbers';
import { HowItWorks } from './components/HowItWorks';
import { SolutionsSection } from './components/SolutionsSection';
import { DeveloperSection } from './components/DeveloperSection';
import { SecuritySection } from './components/SecuritySection';
import { ScaleSection } from './components/ScaleSection';
import { CustomerStories } from './components/CustomerStories';
import { BlogSection } from './components/BlogSection';
import { HiringSection } from './components/HiringSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans antialiased selection:bg-[#6366f1]/30 selection:text-white">
      {/* Dynamic Header / Announcement Bar */}
      <Navbar />

      {/* Main Page Layout containing all 27 reference sections */}
      <main className="relative z-10">
        {/* Section 1-4: Hero & Logo Strip */}
        <Hero />

        {/* Section 5-6: Platform Bento Cards */}
        <PlatformBento />

        {/* Section 7-8: By The Numbers & 3D Globe */}
        <ByTheNumbers />

        {/* Section 9-12: How It Works Connected Diagram */}
        <HowItWorks />

        {/* Section 13: Solutions Image Cards */}
        <SolutionsSection />

        {/* Section 14: Dark Developer & Open Source Panel */}
        <DeveloperSection />

        {/* Section 15: Healthcare Security & Compliance Cards */}
        <SecuritySection />

        {/* Section 16: Scale with Confidence & Wave Mesh */}
        <ScaleSection />

        {/* Section 17: Customer Stories & Testimonial Tab */}
        <CustomerStories />

        {/* Section 18: Blog & $26M Series A Featured Article */}
        <BlogSection />

        {/* Section 19: Hiring Card & Final CTAs */}
        <HiringSection />
      </main>

      {/* Section 27: Footer */}
      <Footer />
    </div>
  );
}

export default App;
