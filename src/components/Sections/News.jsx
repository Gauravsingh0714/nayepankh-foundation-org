import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { FiZoomIn, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import SectionHeading from '../Shared/SectionHeading';
import { staggerContainer, scaleIn } from '../../utils/animations';

import news1 from '../../assets/images/media/news article1.webp';
import news2 from '../../assets/images/media/news article2.webp';
import news3 from '../../assets/images/media/news article3.webp';
import news4 from '../../assets/images/media/news article4.webp';
import news5 from '../../assets/images/media/news article5.webp';

const articles = [
  { src: news1, title: "Media coverage of NayePankh distribution drives in local city edition" },
  { src: news2, title: "Newspaper reporting on youth-led hygiene awareness initiatives" },
  { src: news3, title: "Special column on NayePankh Foundation's Covid relief work" },
  { src: news4, title: "Press report highlighting sanitary napkins distribution drives" },
  { src: news5, title: "News article covering stray animal welfare & food drives" }
];

export default function News() {
  const [activeIdx, setActiveIdx] = useState(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activeIdx === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveIdx(null);
      if (e.key === 'ArrowRight') setActiveIdx((prev) => (prev + 1) % articles.length);
      if (e.key === 'ArrowLeft') setActiveIdx((prev) => (prev - 1 + articles.length) % articles.length);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx]);

  return (
    <section id="news" className="py-24 bg-surface dark:bg-background-dark/30 px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-surface-variant/30 dark:border-white/5">
      <div className="max-w-container-max-width mx-auto">
        <SectionHeading
          title="Media Recognition & News"
          subtitle="How local newspapers and media outlets have highlighted the efforts of our youth volunteers."
          centered={true}
        />

        {/* Newspaper Grid */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12"
        >
          {articles.map((art, idx) => (
            <m.div
              key={idx}
              variants={scaleIn}
              onClick={() => setActiveIdx(idx)}
              className="group cursor-pointer bg-surface-light dark:bg-surface-dark-elevation rounded-2xl p-4 shadow-sm hover:shadow-md border border-surface-variant dark:border-white/10 transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Image frame */}
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-container-low dark:bg-background-dark border border-surface-variant/40 dark:border-white/5 flex items-center justify-center p-1.5 relative">
                  <img
                    src={art.src}
                    alt={art.title}
                    className="max-w-full max-h-full object-cover rounded shadow-sm group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                    width="300"
                    height="400"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                    <FiZoomIn className="text-white text-[28px]" />
                  </div>
                </div>
                <h3 className="font-title-md text-sm font-semibold text-on-surface dark:text-surface-light line-clamp-2 leading-relaxed">
                  {art.title}
                </h3>
              </div>
            </m.div>
          ))}
        </m.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeIdx !== null && (
            <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
              {/* Backdrop */}
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveIdx(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
                aria-hidden="true"
              />

              {/* expanded Container */}
              <m.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="relative max-w-xl w-full z-[160] flex flex-col gap-4 text-left"
                role="dialog"
                aria-modal="true"
                aria-label={articles[activeIdx].title}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveIdx(null)}
                  className="absolute -top-14 right-0 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer shadow-md"
                  aria-label="Close article lightbox"
                >
                  <FiX className="text-[26px] select-none block" />
                </button>

                {/* Main Expanded Image Container */}
                <div className="w-full h-[65vh] bg-white rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center relative p-4 shadow-2xl">
                  <img
                    src={articles[activeIdx].src}
                    alt={articles[activeIdx].title}
                    className="max-w-full max-h-full object-contain"
                    width="600"
                    height="800"
                  />

                  {/* Navigation Arrows */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIdx((prev) => (prev - 1 + articles.length) % articles.length);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/50 border border-white/10 text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer shadow-md"
                    aria-label="Previous article"
                  >
                    <FiChevronLeft className="text-[24px] select-none block" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIdx((prev) => (prev + 1) % articles.length);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/50 border border-white/10 text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer shadow-md"
                    aria-label="Next article"
                  >
                    <FiChevronRight className="text-[24px] select-none block" />
                  </button>
                </div>

                {/* Subtitle / Caption Info */}
                <div className="bg-surface-light/95 dark:bg-surface-dark-elevation/95 backdrop-blur-md px-6 py-4 rounded-2xl border border-surface-variant dark:border-white/10 shadow-lg text-center mt-2">
                  <p className="font-body-md text-on-surface dark:text-surface-light font-semibold leading-relaxed">
                    {articles[activeIdx].title}
                  </p>
                  <span className="font-caption text-xs text-on-surface-variant dark:text-surface-variant mt-1 block">
                    Article {activeIdx + 1} of {articles.length} • Use Arrow keys to navigate
                  </span>
                </div>
              </m.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
