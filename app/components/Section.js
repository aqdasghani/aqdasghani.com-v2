// Shared page section shell: consistent spacing, container and anchor offset.
export default function Section({
  id,
  label,
  children,
  spacing = "py-20 sm:py-28",
  className = "",
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={`scroll-mt-28 ${spacing} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 2xl:max-w-7xl">{children}</div>
    </section>
  );
}
