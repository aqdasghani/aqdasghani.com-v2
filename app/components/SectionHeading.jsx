export default function SectionHeading({
  eyebrow,
  title,
  description,
  tint = "bg-lilac",
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span
        className={`inline-block rounded-full ${tint} px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-ink`}
      >
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-lg text-ink-soft">{description}</p>
      )}
    </div>
  );
}
