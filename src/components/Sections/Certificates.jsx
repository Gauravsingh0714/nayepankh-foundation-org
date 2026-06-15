import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { FiZoomIn, FiExternalLink, FiX } from 'react-icons/fi';
import SectionHeading from '../Shared/SectionHeading';
import { certificates } from '../../data/content';
import { staggerContainer, scaleIn } from '../../utils/animations';

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);

  // Close lightbox on Escape press
  useEffect(() => {
    if (!activeCert) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveCert(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeCert]);

  return (
    <section id="certificates" className="py-24 bg-surface dark:bg-background-dark/30 px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-surface-variant/30 dark:border-white/5">
      <div className="max-w-container-max-width mx-auto">
        <SectionHeading
          title="NGO Registrations & Certifications"
          subtitle="We are a fully registered non-profit organization holding valid tax exemption certificates from the Government of India."
          centered={true}
        />

        {/* Certificate Previews Grid */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {certificates.map((cert, idx) => (
            <m.div
              key={idx}
              variants={scaleIn}
              onClick={() => setActiveCert(cert)}
              className="group cursor-pointer bg-surface-light dark:bg-surface-dark-elevation rounded-2xl p-6 shadow-sm hover:shadow-md border border-surface-variant dark:border-white/10 transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Certificate Frame */}
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-low dark:bg-background-dark border border-surface-variant/40 dark:border-white/5 flex items-center justify-center p-2 relative">
                  <img
                    src={cert.image}
                    alt={`${cert.title} preview`}
                    className="max-w-full max-h-full object-contain rounded shadow-sm group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                    <FiZoomIn className="text-white text-[32px]" />
                  </div>
                </div>

                <h3 className="font-title-md text-lg font-semibold text-on-surface dark:text-surface-light">
                  {cert.title}
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant dark:text-surface-variant leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <button className="mt-6 text-primary dark:text-primary-container font-label-md text-xs font-semibold flex items-center gap-1 group-hover:underline">
                View Certificate Details
                <FiExternalLink className="text-[16px]" />
              </button>
            </m.div>
          ))}
        </m.div>

        {/* Dynamic Lightbox Modal */}
        <AnimatePresence>
          {activeCert && (
            <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
              {/* Backdrop */}
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveCert(null)}
                className="fixed inset-0 bg-black/85 backdrop-blur-sm cursor-pointer"
                aria-hidden="true"
              />

              {/* expanded container */}
              <m.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="relative bg-surface-light dark:bg-surface-dark-elevation rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl z-[160] flex flex-col items-center gap-4 text-left border border-white/10"
                role="dialog"
                aria-modal="true"
                aria-label={activeCert.title}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveCert(null)}
                  className="absolute top-4 right-4 p-2 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary text-on-surface dark:text-surface-light cursor-pointer"
                  aria-label="Close certificate lightbox"
                >
                  <FiX className="text-[24px] select-none block" />
                </button>

                <h3 className="font-title-md text-xl font-bold text-on-surface dark:text-surface-light self-start">
                  {activeCert.title}
                </h3>

                <div className="w-full aspect-[4/5] md:aspect-[3/4] bg-white border border-surface-variant/40 dark:border-white/5 rounded-xl overflow-hidden flex items-center justify-center p-4">
                  <img
                    src={activeCert.image}
                    alt={activeCert.title}
                    className="max-w-full max-h-full object-contain"
                    width="600"
                    height="800"
                  />
                </div>

                <p className="font-body-md text-sm text-on-surface-variant dark:text-surface-variant text-center mt-2 leading-relaxed">
                  {activeCert.description}
                </p>
              </m.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
