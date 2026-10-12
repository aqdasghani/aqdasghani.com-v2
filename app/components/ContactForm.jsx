"use client";

import { useState } from "react";
import { SITE } from "../data";

// Contact form — submits to the existing Formspree endpoint via fetch,
// so the page never reloads and the user gets instant feedback.
export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const payload = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };
    try {
      const res = await fetch(SITE.formspree, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-2xl border-2 border-ink/10 bg-white px-5 py-4 text-base text-ink placeholder:text-ink-soft/60 transition-colors focus:border-violet focus:outline-none dark:bg-[#1e1830]";

  return (
    <div>
      {status === "success" ? (
        <div
          role="status"
          className="rounded-3xl border-2 border-teal/30 bg-teal/10 p-8 text-center"
        >
          <p className="text-3xl" aria-hidden="true">🎉</p>
          <h3 className="mt-3 text-xl font-extrabold text-ink">Message sent!</h3>
          <p className="mt-2 text-ink-soft">
            Thanks for reaching out — I&apos;ll get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-bold text-ink">
              Your name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Jane Cooper"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-bold text-ink">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="jane@company.com"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-bold text-ink">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project, timeline and budget…"
              className={`${inputClass} resize-y`}
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-coral-deep via-violet-deep to-violet px-8 py-4 text-base font-bold text-white shadow-lg shadow-violet-300/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-wait disabled:opacity-70 dark:shadow-violet-500/25"
          >
            {status === "sending" ? "Sending…" : "Send message →"}
          </button>
          {status === "error" && (
            <p role="alert" className="rounded-xl bg-coral/10 p-4 text-sm font-bold text-coral-deep">
              Something went wrong — please email me directly at {SITE.email}.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
