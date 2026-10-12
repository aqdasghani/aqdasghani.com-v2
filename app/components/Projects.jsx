import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { SITE, PROJECTS } from "../data";

const ACCENTS = {
  coral: { bar: "from-coral to-amber", tint: "bg-blush", dot: "bg-coral" },
  violet: { bar: "from-violet to-coral", tint: "bg-lilac", dot: "bg-violet" },
  teal: { bar: "from-teal to-violet", tint: "bg-teal/10", dot: "bg-teal" },
  amber: { bar: "from-amber to-coral", tint: "bg-honey", dot: "bg-amber" },
};

function GitHubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function ProjectCard({ project }) {
  const accent = ACCENTS[project.accent] || ACCENTS.violet;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/5 bg-cream shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-100 dark:hover:shadow-black/50">
      <div className={`h-2.5 bg-gradient-to-r ${accent.bar}`} aria-hidden="true" />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-lg font-extrabold text-ink sm:text-xl">{project.title}</h3>
        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
          {project.description}
        </p>
        <ul
          className="mt-5 flex flex-wrap gap-2"
          aria-label={`Technologies used in ${project.title}`}
        >
          {project.tags.map((tag) => (
            <li
              key={tag}
              className={`inline-flex items-center gap-1.5 rounded-full ${accent.tint} px-3 py-1 text-xs font-extrabold text-ink`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${accent.dot}`}
                aria-hidden="true"
              />
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open the live demo of ${project.title}`}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-gradient-to-r from-coral-deep via-violet-deep to-violet-deep px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-violet-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:shadow-violet-500/25"
            >
              <ExternalIcon />
              Live demo
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            className="inline-flex min-h-[44px] items-center gap-2 self-start rounded-xl bg-ink px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-deep dark:bg-[#e9e4ff] dark:text-[#241f3d] dark:hover:bg-white"
          >
            <GitHubIcon />
            View on GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" label="Projects" className="bg-white dark:bg-[#171226]">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Real projects, real code — from AI platforms to everyday tools people actually use."
          tint="bg-blush"
        />
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 100} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
      <Reveal delay={150}>
        <p className="mt-10 text-center text-ink-soft">
          Want the full picture?{" "}
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-extrabold text-violet-deep underline decoration-violet/40 decoration-2 underline-offset-4 hover:decoration-violet"
          >
            Browse all my repositories →
          </a>
        </p>
      </Reveal>
    </Section>
  );
}
