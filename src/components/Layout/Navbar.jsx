import { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import ThemeToggle from '../Shared/ThemeToggle';
import MobileMenu from '../Shared/MobileMenu';
import { navLinks } from '../../data/content';
import logoIcon from '../../assets/logos/logo-icon.webp';

export default function Navbar({ theme, toggleTheme, onDonateClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sections = ['home', 'about', 'impact', 'programs', 'volunteer', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // offset to trigger slightly before center screen
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-surface-light/95 md:bg-surface-light/80 dark:bg-background-dark/95 md:dark:bg-background-dark/80 md:backdrop-blur-xl shadow-sm dark:border-b dark:border-white/10 fixed top-0 w-full z-50 transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop h-20">
        
        {/* Logo and Branding */}
        <a href="#home" className="flex items-center gap-4 cursor-pointer">
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
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-label-md text-label-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`transition-all duration-200 focus:outline-none rounded px-1.5 py-0.5 ${
                  isActive
                    ? 'text-primary dark:text-primary-container font-bold border-b-2 border-primary dark:border-primary-container pb-1'
                    : 'text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-container'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right side interactions */}
        <div className="flex items-center gap-4">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          
          <button
            onClick={onDonateClick}
            className="hidden md:block bg-primary-container text-on-primary font-label-md text-label-md px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Donate Now
          </button>
          
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-on-surface dark:text-surface-light p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
            id="mobile-menu-btn"
            aria-label="Open menu"
          >
            <FiMenu className="text-[24px]" />
          </button>
        </div>
      </div>

      {/* Mobile sliding navigation menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        links={navLinks}
        onDonateClick={onDonateClick}
        activeSection={activeSection}
      />
    </nav>
  );
}
