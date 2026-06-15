import { m } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiShield, FiHeart, FiArrowDown } from 'react-icons/fi';
import PrimaryButton from '../Shared/PrimaryButton';
import SecondaryButton from '../Shared/SecondaryButton';
import { heroContent } from '../../data/content';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const heroStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0 : 0.1,
        delayChildren: isMobile ? 0 : 0.05
      }
    }
  };

  const heroFadeRight = {
    hidden: { opacity: 0, x: isMobile ? 0 : -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const heroFadeLeft = {
    hidden: { opacity: 0, x: isMobile ? 0 : 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 lg:py-28 px-margin-mobile md:px-margin-desktop bg-gradient-to-br from-background via-surface-container-low to-background dark:from-background-dark dark:via-surface-dark-elevation/50 dark:to-background-dark">
      {/* Background Graphic Accents */}
      <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/3 rounded-full blur-[100px] pointer-events-none select-none" />
      <div className="hidden md:block absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 dark:bg-secondary/3 rounded-full blur-[80px] pointer-events-none select-none" />

      <div className="max-w-container-max-width mx-auto w-full relative z-20">
        <m.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-left"
        >
          {/* Left Text Column */}
          <m.div
            variants={heroFadeRight}
            className="lg:col-span-7 flex flex-col items-start gap-6"
          >
            {/* Glass Trust Badge */}
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary-container/10 dark:bg-primary-container/20 text-primary dark:text-primary-container rounded-full font-label-md text-xs backdrop-blur-sm border border-primary-container/20 shadow-sm">
              <FiShield className="text-[16px] text-primary" />
              {heroContent.badge}
            </span>

            {/* Headline */}
            <h1 className="font-display-lg-mobile md:font-display-lg text-on-surface dark:text-surface-light tracking-tight leading-[1.1] font-bold">
              {heroContent.title}
            </h1>

            {/* Subtitle */}
            <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-surface-variant leading-relaxed max-w-2xl">
              {heroContent.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <PrimaryButton href="#donate" className="w-full sm:w-auto">
                {heroContent.primaryCta}
                <FiHeart className="text-[20px] select-none" />
              </PrimaryButton>
              <SecondaryButton href="#about" className="w-full sm:w-auto">
                {heroContent.secondaryCta}
                <FiArrowDown className="text-[20px] select-none" />
              </SecondaryButton>
            </div>

            {/* Metric counters highlight */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-surface-variant dark:border-white/10 w-full max-w-xl">
              {heroContent.highlightStats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-1 text-left">
                  <span className="font-display font-bold text-2xl md:text-3xl text-primary dark:text-primary-container tracking-tight">
                    {stat.value.toLocaleString()}{stat.suffix}
                  </span>
                  <span className="font-caption text-caption text-on-surface-variant dark:text-surface-variant leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </m.div>

          {/* Right Image Frame Column */}
          <m.div
            variants={heroFadeLeft}
            className="lg:col-span-5 relative w-full flex justify-center"
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-3xl blur-2xl -z-10 transform scale-105" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-surface-variant dark:border-white/10 bg-surface-light dark:bg-surface-dark-elevation p-3 w-full max-w-md lg:max-w-full">
              <img
                src={heroContent.heroImage}
                srcSet={`${heroContent.heroImage400} 400w, ${heroContent.heroImage600} 600w, ${heroContent.heroImage800} 800w, ${heroContent.heroImage} 1200w`}
                sizes="(max-width: 480px) 400px, (max-width: 768px) 600px, (max-width: 1024px) 800px, 1200px"
                alt="NayePankh Foundation volunteers and kids"
                className="w-full aspect-[4/3] lg:aspect-[4/3] object-cover rounded-2xl"
                fetchPriority="high"
                width="800"
                height="600"
                decoding="async"
              />
              {/* Trust overlay badge */}
              <div className="absolute bottom-6 right-6 bg-surface-light/95 dark:bg-surface-dark-elevation/95 backdrop-blur px-4 py-2 rounded-xl border border-surface-variant dark:border-white/10 flex items-center gap-2 shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-success-green animate-pulse" />
                <span className="font-label-md text-xs text-on-surface dark:text-surface-light font-semibold">Active NGO Work</span>
              </div>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
