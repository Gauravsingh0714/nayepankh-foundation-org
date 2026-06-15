import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { FiZoomIn, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import SectionHeading from '../Shared/SectionHeading';
import img1 from '../../assets/images/gallery/474736695_915576594026641_3179658605975014542_n.webp';
import img2 from '../../assets/images/gallery/474888027_916948890556078_2808523926614975879_n.webp';
import img3 from '../../assets/images/gallery/475037012_915577774026523_6226837440407572730_n.webp';
import img4 from '../../assets/images/gallery/475167134_917994113784889_6471518826280191354_n.webp';
import img5 from '../../assets/images/gallery/475286826_916952507222383_6698522246083270860_n.webp';
import img6 from '../../assets/images/team/Team Image 2.webp';

const images = [
  { src: img1, alt: "Volunteers and children gathered at a food distribution drive" },
  { src: img2, alt: "NayePankh Foundation volunteers sorting school supplies for education program" },
  { src: img3, alt: "Women hygiene drive: volunteers handing out hygiene kits" },
  { src: img4, alt: "Underprivileged students smiling with NayePankh notebooks" },
  { src: img5, alt: "Food drive distribution to poor community members" },
  { src: img6, alt: "NayePankh Foundation youth volunteers and team members gathered together" }
];

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activeIdx === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveIdx(null);
      if (e.key === 'ArrowRight') setActiveIdx((prev) => (prev + 1) % images.length);
      if (e.key === 'ArrowLeft') setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx]);

  return (
    <section id="gallery" className="py-24 bg-surface-container-lowest dark:bg-background-dark px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-surface-variant/30 dark:border-white/5">
      <div className="max-w-container-max-width mx-auto">
        <SectionHeading
          title="On-Ground Action Gallery"
          subtitle="Real snapshots of our team, volunteers, and distribution campaigns working actively across cities."
          centered={true}
        />

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {images.map((img, idx) => (
            <m.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setActiveIdx(idx)}
              className={`group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-surface-variant dark:border-white/10 bg-surface-light dark:bg-surface-dark-elevation p-2.5 transition-all duration-300 ${
                idx === 1 || idx === 3 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="overflow-hidden rounded-xl relative w-full h-64 md:h-80">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="400"
                  height="320"
                />
                <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                  <FiZoomIn className="text-white text-[28px] self-start mb-2 bg-primary p-2 rounded-full shadow-md box-content" />
                  <p className="text-white font-body-md text-sm font-medium leading-relaxed">{img.alt}</p>
                </div>
              </div>
            </m.div>
          ))}
        </div>

        {/* Interactive Lightbox overlay */}
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
                className="relative max-w-4xl w-full z-[160] flex flex-col gap-4 text-left"
                role="dialog"
                aria-modal="true"
                aria-label={images[activeIdx].alt}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveIdx(null)}
                  className="absolute -top-14 right-0 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer shadow-md"
                  aria-label="Close gallery lightbox"
                >
                  <FiX className="text-[26px] select-none block" />
                </button>

                {/* Main Expanded Image Container */}
                <div className="w-full h-[60vh] md:h-[70vh] bg-black rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center relative p-2 shadow-2xl">
                  <img
                    src={images[activeIdx].src}
                    alt={images[activeIdx].alt}
                    className="max-w-full max-h-full object-contain rounded-2xl"
                    width="800"
                    height="640"
                  />

                  {/* Navigation Arrows */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/60 border border-white/10 text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer shadow-md"
                    aria-label="Previous image"
                  >
                    <FiChevronLeft className="text-[24px] select-none block" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIdx((prev) => (prev + 1) % images.length);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/60 border border-white/10 text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer shadow-md"
                    aria-label="Next image"
                  >
                    <FiChevronRight className="text-[24px] select-none block" />
                  </button>
                </div>

                {/* Subtitle / Caption Info */}
                <div className="bg-surface-light/95 dark:bg-surface-dark-elevation/95 backdrop-blur-md px-6 py-4 rounded-2xl border border-surface-variant dark:border-white/10 shadow-lg text-center mt-2">
                  <p className="font-body-md text-on-surface dark:text-surface-light font-semibold leading-relaxed">
                    {images[activeIdx].alt}
                  </p>
                  <span className="font-caption text-xs text-on-surface-variant dark:text-surface-variant mt-1 block">
                    Image {activeIdx + 1} of {images.length} • Use Arrow keys to navigate
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
