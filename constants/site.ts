export const SITE_CONFIG = {
  name: "Soham Pawar",
  title: "Soham Pawar | Portfolio",
  description:
    "Official portfolio of Soham Pawar (sohampawar4912) — Software Engineer and Full Stack Developer specializing in Next.js, React, Node.js, and modern web technologies. Explore projects and contact details for Soham Pawar 4912.",
  url: "https://sohampawar.dev",
  keywords: [
    "Soham Pawar",
    "sohampawar4912",
    "soham pawar 4912",
    "sohampawar-sp4912",
    "Soham Pawar Portfolio",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer",
    "Node.js",
    "TypeScript",
  ],
  author: "Soham Pawar",
  email: "sohampawar859@gmail.com",
  github: "https://github.com/sohampawar4912",
  linkedin: "https://linkedin.com/in/sohampawar-sp4912",
  resumeUrl: "/resume/soham_pawar_resume.pdf",
  locale: "en_US",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO_ROLES = [
  "Software Engineer",
  "Software Developer",
  "FullStack Developer",
] as const;

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: SITE_CONFIG.github,
    icon: "github" as const,
  },
  {
    name: "LinkedIn",
    href: SITE_CONFIG.linkedin,
    icon: "linkedin" as const,
  },
  {
    name: "Email",
    href: `mailto:${SITE_CONFIG.email}`,
    icon: "mail" as const,
  },
] as const;
