"use client";

import { useState } from "react";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";
import { NAV_LINKS, SITE } from "../data";

// Sticky navbar with blur backdrop + mobile menu. Only interactive island on the page besides the form.
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav aria-label="Primary" className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-lg shadow-violet-100/60 backdrop-blur-xl sm:px-6 dark:border-white/10 dark:bg-[#1c152e]/80 dark:shadow-black/40">
          <a
            href="#home"
            className="text-xl font-extrabold tracking-tight text-ink"
            aria-label="Aqdas Ghani — home"
          >
            Aqdas<span className="text-gradient-animated">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-xl px-4 py-2 text-sm font-bold text-ink-soft transition-colors hover:bg-lilac hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-1 md:flex">
            <ThemeToggle />
            <Button href={SITE.calendly} external className="px-5 py-2.5 text-sm">
              Hire me <span aria-hidden="true">→</span>
            </Button>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl p-2.5 text-ink hover:bg-lilac md:hidden"
            >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            id="mobile-menu"
            className="mt-2 rounded-2xl border border-white/60 bg-white/95 p-3 shadow-xl backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-[#1c152e]/95"
          >
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-bold text-ink hover:bg-lilac"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <Button
                  href={SITE.calendly}
                  external
                  className="w-full justify-center px-4 py-3"
                >
                  Hire me <span aria-hidden="true">→</span>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
