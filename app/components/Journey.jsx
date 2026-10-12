import Reveal from "./Reveal";
import Button from "./Button";
import { SITE } from "../data";

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.6" cy="6.4" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Bold banner inviting visitors to follow the 300-day coding journey.
export default function Journey() {
  return (
    <section aria-label="Coding journey" className="px-4 pb-20 sm:px-6 sm:pb-28">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink p-8 text-center shadow-2xl sm:p-14 dark:bg-[#0e0a18]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="animate-float absolute -left-16 -top-16 h-64 w-64 rounded-full bg-coral/25 blur-2xl sm:blur-3xl" />
            <div className="animate-float-slow absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-amber/25 blur-2xl sm:blur-3xl" />
          </div>
          <div className="relative">
            <p className="text-5xl" aria-hidden="true">
              🎬
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Follow my 300-day journey to becoming a full-stack developer
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Daily coding reels, real lessons, honest mistakes — learn
              alongside me on Instagram.
            </p>
            <div className="mt-8">
              <Button href={SITE.instagram} variant="instagram" external>
                <InstagramIcon />
                @aqdas.tech on Instagram
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
