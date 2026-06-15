import { useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import logoIcon from '../../assets/logos/logo-icon.webp';

export default function MobileMenu({ isOpen, onClose, links, onDonateClick, activeSection }) {
  // Lock body scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Fullscreen Backdrop overlay */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-md cursor-pointer"
            id="mobile-menu-backdrop"
          />

          {/* Fullscreen Drawer Overlay */}
          <m.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-screen h-screen bg-white dark:bg-background-dark z-[210] flex flex-col shadow-2xl"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Header close panel */}
            <div className="p-6 flex justify-between items-center border-b border-surface-variant dark:border-white/5 bg-white dark:bg-background-dark">
              <div className="flex items-center gap-3">
                <img
                  alt="NayePankh Logo"
                  className="h-9 w-9 object-contain rounded-full bg-white p-0.5 border border-surface-variant dark:border-white/10"
                  src={logoIcon}
                  width="36"
                  height="36"
                />
                <span className="font-headline-lg-mobile text-lg font-bold text-primary dark:text-primary-container">
                  NayePankh
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-on-surface dark:text-surface-light hover:bg-surface-variant dark:hover:bg-background-dark rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                id="close-mobile-menu"
                aria-label="Close menu"
              >
                <FiX className="text-[24px]" />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 p-8 font-label-md text-label-md text-left flex-grow bg-white dark:bg-background-dark justify-center">
              <div className="flex flex-col gap-8 items-center justify-center my-auto">
                {links.map((link) => {
                  const isActive = activeSection === link.href.slice(1);
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={onClose}
                      className={`transition-all text-2xl focus:outline-none focus:ring-1 focus:ring-primary rounded px-4 py-2 w-full text-center ${
                        isActive
                          ? 'text-primary dark:text-primary-container font-bold border-b-2 border-primary dark:border-primary-container pb-2'
                          : 'text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-container'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
              <button
                onClick={() => {
                  onClose();
                  onDonateClick();
                }}
                className="text-center bg-primary-container text-on-primary font-label-md text-label-md px-6 py-4 rounded-xl shadow-md w-full hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer mt-auto"
              >
                Donate Now
              </button>
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}
