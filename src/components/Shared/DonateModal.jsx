import { useEffect, useRef } from 'react';
import { m } from 'framer-motion';
import { FiX, FiInfo, FiExternalLink } from 'react-icons/fi';
import { TAX_EXEMPTION_LABEL, GOVT_REGISTRATION_LABEL } from '../../utils/constants';

export default function DonateModal({ isOpen, onClose }) {
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Focus trap and accessibility keyboard handlers
  useEffect(() => {
    if (!isOpen) return;

    const previousActiveElement = document.activeElement;
    closeBtnRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }

      if (e.key === 'Tab') {
        const modal = modalRef.current;
        if (!modal) return;

        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex="0"], [select-all]'
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
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      previousActiveElement?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDonateRedirect = () => {
    window.open('https://pages.razorpay.com/pl_NUcVhpQzK8rI1b/view', '_blank', 'noopener,noreferrer');
  };

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

      {/* Modal Dialog */}
      <m.div
        ref={modalRef}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="w-full max-w-lg bg-surface-light dark:bg-surface-dark-elevation rounded-3xl p-6 md:p-8 shadow-2xl border border-surface-variant dark:border-white/10 pointer-events-auto flex flex-col relative text-left z-[120]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="donate-modal-title"
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

        {/* Govt Registration Badge */}
        <span className="inline-block px-3 py-1 bg-primary-container/10 text-primary dark:text-primary-container rounded-full font-label-md text-xs mb-4 border border-primary-container/20 w-fit">
          {GOVT_REGISTRATION_LABEL}
        </span>

        <h2
          id="donate-modal-title"
          className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface dark:text-surface-light font-bold mb-3"
        >
          Support Our Mission
        </h2>

        <p className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant mb-6 leading-relaxed">
          Every contribution empowers students with critical education initiatives, food distribution drives, and practical skill development opportunities.
        </p>

        {/* 80G Tax Exemption Notice */}
        <div className="p-4 bg-primary-container/5 rounded-xl border border-primary-container/10 mb-6 flex gap-3">
          <FiInfo className="text-primary text-[24px] shrink-0 select-none" />
          <p className="font-caption text-caption text-on-surface-variant dark:text-surface-variant leading-relaxed">
            {TAX_EXEMPTION_LABEL}
          </p>
        </div>

        {/* Razorpay Redirect Container */}
        <div className="flex flex-col gap-4 bg-surface-container-low dark:bg-background-dark/50 p-6 rounded-2xl border border-surface-variant dark:border-white/5 text-center">
          <h3 className="font-title-md text-[16px] text-on-surface dark:text-surface-light font-semibold border-b border-surface-variant dark:border-white/10 pb-2 text-left">
            Secure Payment Gateway
          </h3>
          <p className="font-body-md text-sm text-on-surface-variant dark:text-surface-variant text-left leading-relaxed">
            We use **Razorpay** to securely process all our voluntary donations. Click the button below to visit our official secure payment page.
          </p>
          <button
            onClick={handleDonateRedirect}
            className="w-full py-3 bg-primary text-white dark:bg-primary-container dark:text-on-primary-container hover:opacity-90 rounded-xl font-label-md text-sm font-semibold flex items-center justify-center gap-2 transition-opacity cursor-pointer shadow-md mt-2"
          >
            <span>Proceed to Secure Donation</span>
            <FiExternalLink className="text-[18px]" />
          </button>
        </div>

        {/* Receipt guidance */}
        <p className="font-caption text-caption text-on-surface-variant dark:text-surface-variant mt-4 text-center">
          After completing the transfer, please email the transaction receipt to <a href="mailto:contact@nayepankh.com" className="underline font-semibold text-primary dark:text-primary-container focus:outline-none focus:ring-1 focus:ring-primary rounded">contact@nayepankh.com</a> to receive your 80G tax receipt.
        </p>
      </m.div>
    </div>
  );
}
