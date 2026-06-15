import { useState, useEffect, lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';

// Layout & Custom Hook
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import useTheme from './hooks/useTheme';

// Above-fold sections — loaded eagerly
import Hero from './components/Sections/Hero';

// Below-fold sections — lazy loaded
const About        = lazy(() => import('./components/Sections/About'));
const Founder      = lazy(() => import('./components/Sections/Founder'));

// Below-fold sections — lazy loaded
const ImpactStats  = lazy(() => import('./components/Sections/ImpactStats'));
const Certificates = lazy(() => import('./components/Sections/Certificates'));
const Programs     = lazy(() => import('./components/Sections/Programs'));
const Volunteer    = lazy(() => import('./components/Sections/Volunteer'));
const Gallery      = lazy(() => import('./components/Sections/Gallery'));
const News         = lazy(() => import('./components/Sections/News'));
const Contact      = lazy(() => import('./components/Sections/Contact'));

// Modals — lazy loaded (only needed on user interaction)
const DonateModal  = lazy(() => import('./components/Shared/DonateModal'));
const PolicyModal  = lazy(() => import('./components/Shared/PolicyModal'));

// Legal Policy Content — loaded on demand inside click handler


export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [policyModalData, setPolicyModalData] = useState(null); // Holds privacyPolicy, termsAndConditions, or refundPolicy

  // Global anchor-click listener to capture hash navigation for modals from inline texts
  // Note: legal data is already eagerly loaded via Footer, so static refs are used here
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.closest('a')?.getAttribute('href');
      if (href === '#donate') {
        e.preventDefault();
        setIsDonateOpen(true);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-background dark:bg-background-dark text-on-surface dark:text-surface-light flex flex-col font-body-md transition-colors duration-300">
      
      {/* Toast Notifications Provider */}
      <Toaster position="bottom-right" reverseOrder={false} />

      {/* Main Header Navigation */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onDonateClick={() => setIsDonateOpen(true)} 
      />

      {/* Single Page Layout Sections */}
      <main className="flex-grow pt-20">
        {/* Above-fold — eager */}
        <Hero />
        {/* Below-fold — deferred until JS is free */}
        <Suspense fallback={null}>
          <About />
          <Founder />
          <ImpactStats />
          <Certificates />
          <Programs />
          <Volunteer />
          <Gallery />
          <News />
          <Contact />
        </Suspense>
      </main>

      {/* Main Page Footer */}
      <Footer onPolicyClick={(policy) => setPolicyModalData(policy)} />

      {/* Modals — lazy, only mount when open */}
      <Suspense fallback={null}>
        <AnimatePresence>
          {isDonateOpen && (
            <DonateModal
              isOpen={isDonateOpen}
              onClose={() => setIsDonateOpen(false)}
            />
          )}
        </AnimatePresence>
      </Suspense>

      <Suspense fallback={null}>
        <AnimatePresence>
          {policyModalData && (
            <PolicyModal
              isOpen={!!policyModalData}
              policyData={policyModalData}
              onClose={() => setPolicyModalData(null)}
            />
          )}
        </AnimatePresence>
      </Suspense>
      
      </div>
    </LazyMotion>
  );
}
