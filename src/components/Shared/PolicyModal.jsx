import { useEffect, useRef } from 'react';
import { m } from 'framer-motion';
import { FiX } from 'react-icons/fi';

export default function PolicyModal({ isOpen, onClose, policyData }) {
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Focus trap and accessibility keyboard handlers
  useEffect(() => {
    if (!isOpen) return;

    // Save active element to restore focus on close
    const previousActiveElement = document.activeElement;

    // Focus close button initially
    closeBtnRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }

      if (e.key === 'Tab') {
        const modal = modalRef.current;
        if (!modal) return;

        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex="0"]'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Disable background body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      previousActiveElement?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen || !policyData) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
        aria-hidden="true"
      />

      {/* Modal Box */}
      <m.div
        ref={modalRef}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="w-full max-w-2xl bg-surface-light dark:bg-surface-dark-elevation rounded-3xl p-6 md:p-8 shadow-2xl border border-surface-variant dark:border-white/10 pointer-events-auto flex flex-col relative text-left max-h-[85vh] z-[120]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="policy-modal-title"
      >
        {/* Close Button */}
        <button
          ref={closeBtnRef}
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant dark:hover:bg-background-dark rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
          aria-label="Close dialog"
        >
          <FiX className="text-[24px] select-none block" />
        </button>

        {/* Header */}
        <div className="border-b border-surface-variant dark:border-white/10 pb-4 mb-6">
          <h2
            id="policy-modal-title"
            className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface dark:text-surface-light font-bold"
          >
            {policyData.title}
          </h2>
          <p className="font-caption text-caption text-on-surface-variant dark:text-surface-variant mt-1">
            Last Updated: {policyData.lastUpdated}
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="flex-grow overflow-y-auto pr-2 space-y-6 hide-scrollbar focus-visible:outline-none" tabIndex="0">
          {policyData.sections.map((section) => (
            <div key={section.id} className="space-y-3">
              {section.title && section.id !== "intro" && (
                <h3 className="font-title-md text-[16px] text-on-surface dark:text-surface-light font-semibold">
                  {section.title}
                </h3>
              )}
              <div className="space-y-2">
                {section.paragraphs.map((p, idx) => {
                  // Clean parsing of contacts
                  const hasEmail = p.includes("Email:");
                  const hasPhone = p.includes("Phone:");
                  const hasWebsite = p.includes("Website:");

                  if (hasEmail || hasPhone || hasWebsite) {
                    return (
                      <p key={idx} className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant leading-relaxed">
                        {hasEmail && (
                          <>📧 Email: <a href="mailto:contact@nayepankh.com" className="text-primary dark:text-primary-container hover:underline focus:outline-none focus:ring-1 focus:ring-primary rounded">contact@nayepankh.com</a></>
                        )}
                        {hasPhone && (
                          <>📞 Phone: <a href="tel:+918318500748" className="text-primary dark:text-primary-container hover:underline focus:outline-none focus:ring-1 focus:ring-primary rounded">+91 8318500748</a></>
                        )}
                        {hasWebsite && (
                          <>🌐 Website: <a href="https://www.nayepankh.com" target="_blank" rel="noreferrer" className="text-primary dark:text-primary-container hover:underline focus:outline-none focus:ring-1 focus:ring-primary rounded">www.nayepankh.com</a></>
                        )}
                      </p>
                    );
                  }

                  return (
                    <p key={idx} className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant leading-relaxed">
                      {p}
                    </p>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="border-t border-surface-variant dark:border-white/10 pt-4 mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-primary-container text-on-primary font-label-md text-label-md px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </m.div>
    </div>
  );
}
