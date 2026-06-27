"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">
        {subtitle}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
