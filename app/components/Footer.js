import { NAV_LINKS } from "../data";

// Fixed at build time — Next.js 16 prerendering rejects `new Date()` here.
// Bump this each January.
const YEAR = 2026;

export default function Footer() {
  return (
    <footer className="bg-ink py-10 text-center">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 2xl:max-w-7xl">
        <p className="text-lg font-extrabold text-white">
          Aqdas<span className="text-gradient-animated">.</span>
        </p>
        <nav
          aria-label="Footer"
          className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="mt-6 text-sm text-white/60">
          © {YEAR} Aqdas Ghani. Built with Next.js, with 💛 in India.
        </p>
      </div>
    </footer>
  );
}
