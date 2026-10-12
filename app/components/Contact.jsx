import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import { SITE } from "../data";

const CONTACT_CARDS = [
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: "✉️",
    tint: "bg-blush",
  },
  {
    label: "GitHub",
    value: SITE.github.replace("https://", ""),
    href: SITE.github,
    icon: "💻",
    tint: "bg-lilac",
  },
  {
    label: "LinkedIn",
    value: SITE.linkedin.replace("https://www.", ""),
    href: SITE.linkedin,
    icon: "🔗",
    tint: "bg-honey",
  },
  {
    label: "Book a 15-min call",
    value: SITE.calendly.replace("https://", ""),
    href: SITE.calendly,
    icon: "📅",
    tint: "bg-teal/10",
  },
];

function ContactCard({ card }) {
  const isEmail = card.href.startsWith("mailto:");
  return (
    <a
      href={card.href}
      {...(isEmail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      className="group flex items-center gap-5 rounded-3xl border border-ink/5 bg-cream p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <span
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${card.tint} text-2xl`}
        aria-hidden="true"
      >
        {card.icon}
      </span>
      <span>
        <span className="block text-sm font-extrabold uppercase tracking-widest text-ink-soft">
          {card.label}
        </span>
        <span className="block break-all font-bold text-ink group-hover:text-violet-deep">
          {card.value}
        </span>
      </span>
      <span
        aria-hidden="true"
        className="ml-auto text-xl text-ink-soft transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}

export default function Contact() {
  return (
    <Section id="contact" label="Contact" className="bg-white dark:bg-[#171226]">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Have a project in mind? Send me a message — I reply within 24 hours."
          tint="bg-blush"
        />
      </Reveal>
      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="rounded-3xl border border-ink/5 bg-cream p-7 shadow-sm sm:p-9">
            <ContactForm />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="flex h-full flex-col gap-4">
            {CONTACT_CARDS.map((card) => (
              <ContactCard key={card.label} card={card} />
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
