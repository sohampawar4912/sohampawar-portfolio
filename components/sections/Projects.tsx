"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { PROJECTS } from "@/constants/projects";
import { SectionHeading } from "@/components/common/SectionHeading";
import { useTilt } from "@/hooks/useTilt";

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt(6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group h-full"
    >
      <div className="gradient-border p-[1px] rounded-2xl h-full">
        <div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative rounded-2xl bg-[#050816]/95 p-6 md:p-7 overflow-hidden h-full flex flex-col justify-between"
          style={{ transformStyle: "preserve-3d", transition: "transform 0.1s ease-out" }}
        >
          {/* Shimmer overlay */}
          <div className="absolute inset-0 shimmer opacity-40 pointer-events-none" />

          {/* Gradient glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/15 blur-3xl group-hover:bg-primary/25 transition-colors duration-500 pointer-events-none" />

          <div className="relative z-10 flex-1 flex flex-col">
            {/* Project Image Preview */}
            <div className="relative aspect-video rounded-xl bg-slate-900/80 border border-white/10 mb-5 overflow-hidden group-hover:border-primary/40 transition-colors shadow-inner">
              {project.image ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="font-display text-4xl font-bold text-white/10"
                    animate={{ opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between mb-2">
              <h3 className="font-display text-xl font-semibold text-white group-hover:gradient-text transition-all">
                {project.title}
              </h3>
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="opacity-60 group-hover:opacity-100 transition-opacity"
              >
                <Sparkles className="h-4 w-4 text-secondary" />
              </motion.div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed flex-1">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="section-padding relative"
      aria-label="Projects section"
    >
      <div className="container-custom">
        <SectionHeading
          subtitle="Portfolio"
          title="Projects"
          description="Explore applications and digital systems engineered with modern technologies and clean design."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
