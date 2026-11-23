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
    id: "caffee-delicioso",
    title: "Caffee Delicioso — Smart Cafe & POS Management System",
    status: "coming-soon",
    description:
      "Caffee Delicioso is a full-stack, enterprise-grade Smart Cafe Management, Contactless QR Ordering, and Point-of-Sale (POS) platform. It is designed to streamline front-of-house customer experiences, accelerate kitchen turnaround times, and provide the cafe owner with real-time operational and financial intelligence.",
    image: "/projects/caffee-delicioso.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma ORM", "PostgreSQL", "Razorpay"],
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
