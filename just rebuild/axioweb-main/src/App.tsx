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
    <div className="min-h-screen w-full bg-black text-white antialiased overflow-x-clip">
      <Navbar />
      <main className="w-full">
        <Hero />
        <PlatformBento />
        <ByTheNumbers />
        <HowItWorks />
        <SolutionsSection />
        <DeveloperSection />
        <SecuritySection />
        <ScaleSection />
        <CustomerStories />
        <BlogSection />
        <HiringSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
