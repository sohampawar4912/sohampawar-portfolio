export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  color: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  status: "coming-soon" | "live";
  description: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
