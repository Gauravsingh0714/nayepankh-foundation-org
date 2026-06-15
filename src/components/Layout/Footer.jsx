import { footerContent } from '../../data/content';
import { CONTACT_EMAIL, CONTACT_PHONE, SOCIAL_LINKS, TAX_EXEMPTION_LABEL } from '../../utils/constants';
import logoIcon from '../../assets/logos/logo-icon.webp';
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook, FaXTwitter } from 'react-icons/fa6';
import { FiMail, FiPhone, FiCheckCircle } from 'react-icons/fi';

// Legal Content Imports
import { privacyPolicy } from '../../data/privacy';
import { termsAndConditions } from '../../data/terms';
import { refundPolicy } from '../../data/refund';

export default function Footer({ onPolicyClick }) {
  return (
    <footer className="bg-surface-container-highest dark:bg-surface-dark-elevation w-full py-16 border-t border-outline-variant/30 dark:border-white/10 transition-all duration-200 text-left">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter-desktop max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Branding description */}
        <div className="flex flex-col gap-6 col-span-1 md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <img
              alt="NayePankh Logo"
              className="h-10 w-10 object-contain"
              src={logoIcon}
              width="40"
              height="40"
            />
            <span className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary dark:text-primary-container">
              NayePankh
            </span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant leading-relaxed">
            {footerContent.description}
          </p>

          {/* Social Profiles */}
          <div className="flex gap-4 mt-2">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-1 bg-surface-container-low dark:bg-background-dark border border-surface-variant/40 dark:border-white/5"
              aria-label="Instagram Profile"
            >
              <FaInstagram className="text-[20px]" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-1 bg-surface-container-low dark:bg-background-dark border border-surface-variant/40 dark:border-white/5"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-[20px]" />
            </a>
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-1 bg-surface-container-low dark:bg-background-dark border border-surface-variant/40 dark:border-white/5"
              aria-label="YouTube Channel"
            >
              <FaYoutube className="text-[20px]" />
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-1 bg-surface-container-low dark:bg-background-dark border border-surface-variant/40 dark:border-white/5"
              aria-label="Facebook Page"
            >
              <FaFacebook className="text-[20px]" />
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-1 bg-surface-container-low dark:bg-background-dark border border-surface-variant/40 dark:border-white/5"
              aria-label="Twitter Profile"
            >
              <FaXTwitter className="text-[20px]" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h2 className="font-title-md text-base font-bold text-on-surface dark:text-surface-light uppercase tracking-wider">
            Quick Links
          </h2>
          <div className="flex flex-col gap-2.5">
            {footerContent.quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-container transition-colors w-fit focus:outline-none focus:ring-1 focus:ring-primary rounded px-0.5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Legal links */}
        <div className="flex flex-col gap-4">
          <h2 className="font-title-md text-base font-bold text-on-surface dark:text-surface-light uppercase tracking-wider">
            Legal Policies
          </h2>
          <div className="flex flex-col gap-2.5">
            <button
              onClick={() => onPolicyClick(privacyPolicy)}
              className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-container transition-colors w-fit focus:outline-none focus:ring-1 focus:ring-primary rounded px-0.5 cursor-pointer text-left"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onPolicyClick(termsAndConditions)}
              className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-container transition-colors w-fit focus:outline-none focus:ring-1 focus:ring-primary rounded px-0.5 cursor-pointer text-left"
            >
              Terms &amp; Conditions
            </button>
            <button
              onClick={() => onPolicyClick(refundPolicy)}
              className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-container transition-colors w-fit focus:outline-none focus:ring-1 focus:ring-primary rounded px-0.5 cursor-pointer text-left"
            >
              Cancellation &amp; Refund
            </button>
          </div>
        </div>

        {/* Contact details */}
        <div className="flex flex-col gap-4">
          <h2 className="font-title-md text-base font-bold text-on-surface dark:text-surface-light uppercase tracking-wider">
            Contact
          </h2>
          <div className="flex flex-col gap-3">
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant flex items-center gap-2">
              <FiMail className="text-[18px] text-primary" aria-hidden="true" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline focus:outline-none focus:ring-1 focus:ring-primary rounded">{CONTACT_EMAIL}</a>
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant flex items-center gap-2">
              <FiPhone className="text-[18px] text-primary" aria-hidden="true" />
              <a href={`tel:${CONTACT_PHONE.replace(/-/g, '')}`} className="hover:underline focus:outline-none focus:ring-1 focus:ring-primary rounded">{CONTACT_PHONE}</a>
            </p>
            <p className="font-caption text-caption text-on-surface-variant dark:text-surface-variant mt-2 border-l-2 border-primary pl-3 py-1 bg-surface-container-low dark:bg-background-dark/50 leading-relaxed">
              {TAX_EXEMPTION_LABEL}
              <br />
              <span className="text-[10px] uppercase font-bold text-primary tracking-wide block mt-1">
                Societies Registration Act, 1860
              </span>
            </p>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-16 pt-8 border-t border-outline-variant/30 dark:border-white/10 max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-body-md text-sm text-on-surface-variant dark:text-surface-variant">
          © 2026 NayePankh Foundation. All rights reserved.
        </p>
        <p className="font-caption text-[11px] text-on-surface-variant dark:text-surface-variant flex items-center gap-1.5 justify-center">
          <FiCheckCircle className="text-[14px] text-success-green" />
          UP Govt. Registration Certificate: 12A &amp; 80G Certified
        </p>
      </div>
    </footer>
  );
}
