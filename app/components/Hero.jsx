import { Fragment } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import Button from "./Button";
import { SITE, PROJECTS, HACKATHONS } from "../data";
import heroPhoto from "../../public/aqdas.jpg";

// Real numbers derived from data.js — update the data, the stats follow.
const TECH_COUNT = new Set(PROJECTS.flatMap((p) => p.tags)).size;
const STATS = [
  [`${PROJECTS.length}+`, "Projects shipped"],
  [`${TECH_COUNT}+`, "Technologies"],
  [`${HACKATHONS}`, "Hackathons"],
];

function FloatingBadge({ className, style, title, subtitle }) {
  return (
    <div
      className={`animate-float absolute rounded-2xl bg-white px-4 py-3 shadow-xl dark:bg-[#1e1830] dark:shadow-black/40 ${className}`}
      style={style}
      aria-hidden="true"
    >
      <p className="text-sm font-extrabold text-ink">{title}</p>
      <p className="text-xs font-bold text-ink-soft">{subtitle}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative overflow-hidden pb-20 pt-36 sm:pb-28 sm:pt-44"
    >
      {/* Floating gradient blobs — pure CSS motion */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute -left-24 -top-24 h-96 w-96 rounded-full bg-coral/25 blur-2xl sm:blur-3xl" />
        <div className="animate-float-slow absolute -right-24 top-32 h-[28rem] w-[28rem] rounded-full bg-violet/25 blur-2xl sm:blur-3xl" />
        <div
          className="animate-float absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber/25 blur-2xl sm:blur-3xl"
          style={{ animationDelay: "-4s" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:gap-14 sm:px-6 lg:grid-cols-2 2xl:max-w-7xl">
        <Reveal>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet/20 bg-white/70 px-4 py-2 text-sm font-bold text-ink shadow-sm backdrop-blur dark:bg-[#1e1830]/70">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal" />
              </span>
              Available for freelance projects
            </span>
            <h1 className="mt-6 text-[clamp(2.75rem,8vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-ink">
              Hi, I&apos;m{" "}
              <span className="text-gradient-animated">Aqdas Ghani</span>
            </h1>
            <p className="mt-4 text-xl font-bold text-ink sm:text-2xl lg:text-3xl">
              Full-Stack Developer
            </p>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink-soft">
              Turning ideas into fast, beautiful websites. I help businesses
              win customers with modern, responsive and SEO-friendly web
              experiences — built with React, Next.js and the MERN stack.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#projects">
                View my work <span aria-hidden="true">↓</span>
              </Button>
              <Button href={SITE.calendly} variant="secondary" external>
                Book a call <span aria-hidden="true">📅</span>
              </Button>
            </div>
            <div
              className="mt-10 inline-flex max-w-full flex-wrap items-center gap-x-8 gap-y-4 rounded-2xl border border-white/60 bg-white/70 px-6 py-5 shadow-sm backdrop-blur sm:gap-x-10 dark:border-white/10 dark:bg-[#1e1830]/70"
              role="list"
              aria-label="Quick stats"
            >
              {STATS.map(([value, label], i) => (
                <Fragment key={label}>
                  {i > 0 && (
                    <span
                      aria-hidden="true"
                      className="hidden h-10 w-px bg-ink/10 sm:block"
                    />
                  )}
                  <div role="listitem" className="flex flex-col">
                    <span className="text-gradient-animated text-3xl font-extrabold">
                      {value}
                    </span>
                    <span className="mt-1 text-xs font-bold uppercase tracking-wider text-ink-soft">
                      {label}
                    </span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="flex justify-center">
          <div className="relative">
            <div
              aria-hidden="true"
              className="animate-spin-slow absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-coral via-violet to-amber opacity-70 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl shadow-violet-200 dark:border-[#2a2145] dark:shadow-black/50">
              <Image
                src={heroPhoto}
                alt="Portrait of Aqdas Ghani, full-stack developer"
                width={1080}
                height={1080}
                priority
                fetchPriority="high"
                placeholder="blur"
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 480px"
                className="h-auto w-72 sm:w-96"
              />
            </div>
            <FloatingBadge
              className="-left-8 top-10 sm:-left-12"
              title="⚡ Lightning-fast"
              subtitle="SEO-friendly builds"
            />
            <FloatingBadge
              className="-right-6 bottom-12 sm:-right-10"
              style={{ animationDelay: "-4.5s" }}
              title="💛 Client-first"
              subtitle="Clear communication"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
