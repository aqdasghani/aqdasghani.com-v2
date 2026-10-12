import { SITE } from "./data";

// Generates /robots.txt for search engine crawlers.
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
