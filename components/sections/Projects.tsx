"use client";

import { motion } from "framer-motion";
import { Clock, Sparkles } from "lucide-react";
import { PROJECTS } from "@/constants/projects";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { useTilt } from "@/hooks/useTilt";

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt(6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="gradient-border p-[1px] rounded-2xl">
        <div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative rounded-2xl bg-[#050816]/90 p-6 md:p-8 overflow-hidden h-full"
          style={{ transformStyle: "preserve-3d", transition: "transform 0.1s ease-out" }}
        >
          {/* Shimmer overlay */}
          <div className="absolute inset-0 shimmer opacity-50" />

          {/* Gradient glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <Badge variant="default" className="flex items-center gap-1.5">
                <Clock className="h-3 w-3" />
                Coming Soon
              </Badge>
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles className="h-5 w-5 text-secondary" />
              </motion.div>
            </div>

            {/* Placeholder image area */}
            <div className="relative aspect-video rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 border border-white/5 mb-6 overflow-hidden group-hover:border-primary/20 transition-colors">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="font-display text-4xl font-bold text-white/10"
                  animate={{ opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
            </div>

            <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:gradient-text transition-all">
              {project.title}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
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
          subtitle="Projects"
          title="Upcoming Projects"
          description="Exciting projects are in the works. Stay tuned for innovative solutions that push the boundaries of technology and design."
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
