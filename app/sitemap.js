import { SITE } from "./data";

// Generates /sitemap.xml for search engines.
// lastModified is a fixed date — Next.js 16 prerendering rejects `new Date()`.
export default function sitemap() {
  return [
    {
      url: SITE.url,
      lastModified: "2026-10-11",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
