import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { SERVICES } from "../data";

function ServiceCard({ service }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-ink/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-100 sm:p-8 dark:bg-[#1e1830] dark:hover:shadow-black/40">
      <div
        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-coral via-violet to-amber text-2xl shadow-lg shadow-violet-200 dark:shadow-violet-500/25"
        aria-hidden="true"
      >
        {service.icon}
      </div>
      <h3 className="mt-6 text-xl font-extrabold text-ink">{service.title}</h3>
      <p className="mt-3 leading-relaxed text-ink-soft">{service.description}</p>
      <ul className="mt-6 flex flex-col gap-3">
        {service.points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-3 text-sm font-bold text-ink"
          >
            <span
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/15 text-xs text-teal"
              aria-hidden="true"
            >
              ✓
            </span>
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Services() {
  return (
    <Section id="services" label="Services" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-float-slow absolute -left-24 top-24 h-80 w-80 rounded-full bg-teal/15 blur-2xl sm:blur-3xl" />
        <div className="animate-float absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-coral/15 blur-2xl sm:blur-3xl" />
      </div>
      <div className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="How I can help you"
            description="Clear, honest freelance services — no jargon, no surprises."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 100} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
