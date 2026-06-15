import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      id="theme-toggle"
      className="text-on-surface dark:text-surface-light p-2 rounded-full hover:bg-surface-variant dark:hover:bg-surface-dark-elevation transition-all duration-200 hover:scale-110 active:scale-90 focus:outline-none focus:ring-2 focus:ring-primary-container cursor-pointer"
      aria-label="Toggle theme"
    >
      <span className="text-[24px] select-none block flex items-center justify-center">
        {theme === 'dark' ? <FiSun /> : <FiMoon />}
      </span>
    </button>
  );
}
