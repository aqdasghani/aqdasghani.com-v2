// Shared CTA link styled as a button. Two variants: gradient (primary) and outline (secondary).
const VARIANTS = {
  primary:
    "bg-gradient-to-r from-[#cf3a2c] via-[#6d28d9] to-[#6d28d9] text-white shadow-lg shadow-violet-300/50 hover:shadow-xl dark:shadow-violet-500/25",
  instagram:
    "bg-gradient-to-r from-[#cf3a2c] via-[#c026d3] to-[#6d28d9] text-white shadow-lg hover:shadow-xl",
  secondary:
    "border-2 border-ink/10 bg-white text-ink shadow-sm hover:border-violet/40 hover:shadow-lg dark:bg-[#1e1830]",
};

export default function Button({
  href,
  variant = "primary",
  external = false,
  className = "",
  children,
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-base font-bold transition-all duration-300 hover:-translate-y-1 ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
