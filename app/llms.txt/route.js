import { SITE, PROJECTS, SERVICES, HACKATHONS } from "../data";

const lines = [
  `# ${SITE.name}`,
  "",
  `> ${SITE.role} — ${SITE.tagline}`,
  "",
  `Website: ${SITE.url}`,
  `Contact: ${SITE.email}`,
  `GitHub: ${SITE.github}`,
  `LinkedIn: ${SITE.linkedin}`,
  `Instagram: ${SITE.instagram}`,
  "",
  "## Experience",
  "",
  "- Selected in the top 5 out of 2700+ applicants for an internship at Sheryians Pvt Ltd, Bhopal, India.",
  "",
  "## Projects",
  "",
  ...PROJECTS.flatMap((p) => [
    `- ${p.title}: ${p.description} (Code: ${p.github}${p.live ? `, Live: ${p.live}` : ""})`,
  ]),
  "",
  "## Services",
  "",
  ...SERVICES.map((s) => `- ${s.title}: ${s.description}`),
  "",
  "## Contact",
  "",
  `- Use the contact form at ${SITE.url}#contact or book a 15-min call: ${SITE.calendly}`,
];

export function GET() {
  return new Response(lines.join("\n") + "\n", {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
