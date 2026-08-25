import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "complaint-management-system",
    title: "Complaint Management System",
    status: "coming-soon",
    description:
      "A centralized issue tracking and grievance redressal platform with automated ticket routing, real-time status updates, and interactive analytics dashboards.",
    image: "/projects/complaint-system.jpg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
  },
  {
    id: "sports-tournament-management-system",
    title: "Sports Tournament Management System",
    status: "coming-soon",
    description:
      "A comprehensive tournament platform featuring automated bracket generation, live score tracking, team management, and real-time match analytics.",
    image: "/projects/sports-tournament.jpg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
  },
  {
    id: "dental-clinic-system",
    title: "Dental Clinic",
    status: "coming-soon",
    description:
      "A modern healthcare portal for dental clinics featuring automated appointment booking, patient history records, and treatment scheduling.",
    image: "/projects/dental-clinic.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Stripe"],
  },
];
