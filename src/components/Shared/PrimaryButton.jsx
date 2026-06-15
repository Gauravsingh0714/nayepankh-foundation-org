export default function PrimaryButton({ children, onClick, type = "button", className = "", href = "" }) {
  const Component = href ? "a" : "button";
  const extraProps = href ? { href } : { onClick, type };

  return (
    <Component
      className={`bg-primary-container text-on-primary font-label-md text-label-md px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:opacity-95 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.03] active:scale-[0.98] ${className}`}
      {...extraProps}
    >
      {children}
    </Component>
  );
}
