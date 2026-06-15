export default function SecondaryButton({ children, onClick, type = "button", className = "", href = "" }) {
  const Component = href ? "a" : "button";
  const extraProps = href ? { href } : { onClick, type };

  return (
    <Component
      className={`bg-surface-light dark:bg-surface-dark-elevation text-on-surface dark:text-surface-light border border-outline-variant dark:border-white/10 font-label-md text-label-md px-8 py-4 rounded-xl shadow-sm hover:bg-surface-dim dark:hover:bg-background-dark flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.03] active:scale-[0.98] ${className}`}
      {...extraProps}
    >
      {children}
    </Component>
  );
}
