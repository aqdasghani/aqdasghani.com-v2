import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "./data";

// Body copy relies on the default 400 weight — all three are needed.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Aqdas Ghani | Full-Stack Developer & Freelance Web Developer",
    template: "%s | Aqdas Ghani",
  },
  description:
    "Aqdas Ghani builds fast, beautiful, SEO-friendly websites and full-stack web apps with React, Next.js and the MERN stack. Selected in the top 5 of 2700+ applicants for a Sheryians Pvt Ltd internship.",
  keywords: [
    "Aqdas Ghani",
    "full-stack developer",
    "freelance web developer",
    "Next.js developer",
    "React developer",
    "MERN stack",
    "web development services",
    "portfolio website developer",
    "India web developer",
  ],
  authors: [{ name: "Aqdas Ghani", url: SITE.url }],
  creator: "Aqdas Ghani",
  publisher: "Aqdas Ghani",
  alternates: { canonical: SITE.url },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: "Aqdas Ghani",
    title: "Aqdas Ghani | Full-Stack Developer & Freelance Web Developer",
    description:
      "I build fast, beautiful, SEO-friendly websites and full-stack web apps. Top 5 of 2700+ applicants — Sheryians Pvt Ltd internship.",
    locale: "en_IN",
    images: [
      {
        url: `${SITE.url}/aqdas.jpg`,
        width: 1080,
        height: 1080,
        alt: "Portrait of Aqdas Ghani, full-stack developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqdas Ghani | Full-Stack Developer",
    description:
      "Fast, beautiful, SEO-friendly websites and full-stack web apps — built with React, Next.js and the MERN stack.",
    images: [`${SITE.url}/aqdas.jpg`],
  },
  category: "technology",
};

// Structured data: helps search engines understand who the site is about.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: SITE.url,
  jobTitle: "Full-Stack Developer",
  description:
    "Freelance full-stack developer building fast, beautiful, SEO-friendly websites and web applications.",
  image: `${SITE.url}/aqdas.jpg`,
  email: `mailto:${SITE.email}`,
  sameAs: [SITE.github, SITE.linkedin, SITE.instagram],
  knowsAbout: [
    "React",
    "Next.js",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Full-Stack Development",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fff9f3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
