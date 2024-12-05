import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Hero } from './components/Hero';
import { QuoteGrid } from './components/QuoteGrid';
import { FAQ } from './components/FAQ';
import { SEOHead } from './components/SEOHead';
import { FAQSchema } from './components/FAQSchema';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-100 pb-16">
        <SEOHead />
        <FAQSchema />
        <Hero />
        <QuoteGrid />
        <FAQ />
        <AnnouncementBar />
      </div>
    </HelmetProvider>
  );
}

export default App;