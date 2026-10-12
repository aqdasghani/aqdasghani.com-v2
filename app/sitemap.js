import { SITE } from "./data";

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
