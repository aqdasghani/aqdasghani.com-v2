import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

const HIGHLIGHTS = [
  "Competitive selection",
  "Ed-tech industry",
  "Real-world experience",
];

export default function Experience() {
  return (
    <Section id="experience" label="Experience">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Recognised among the best"
          description="Selected through a fiercely competitive process — and I bring that same drive to every client project."
          tint="bg-honey"
        />
      </Reveal>
      <Reveal delay={120}>
        <div className="relative mt-12 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#3b1d7a] via-[#6d28d9] to-[#9333ea] p-8 shadow-2xl shadow-violet-300 sm:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="animate-float absolute -right-16 -top-16 h-64 w-64 rounded-full bg-amber/30 blur-3xl" />
            <div className="animate-float-slow absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-coral/30 blur-3xl" />
          </div>
          <div className="relative grid items-center gap-10 lg:grid-cols-[auto_1fr]">
            <div className="text-center lg:text-left">
              <p className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl">
                Top&nbsp;5
              </p>
              <p className="mt-2 text-xl font-bold text-amber">
                out of 2700+ applicants
              </p>
            </div>
            <div className="border-t-2 border-white/20 pt-8 lg:border-l-2 lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="text-sm font-extrabold uppercase tracking-widest text-white/70">
                Internship
              </p>
              <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                Sheryians Pvt Ltd — Bhopal, India
              </h3>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/85">
                Chosen in the top 5 from more than 2700 applicants for an
                internship at one of India&apos;s leading ed-tech companies. A
                selection process this competitive only rewards real skill —
                the same skill I put into your website.
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {HIGHLIGHTS.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur"
                  >
                    ✓ {chip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
