"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers,
  Palette,
  Server,
  Smartphone,
  Terminal,
  Wind,
  Box,
  Braces,
} from "lucide-react";
import { SKILLS } from "@/constants/skills";
import { SITE_CONFIG } from "@/constants/site";
import { SectionHeading } from "@/components/common/SectionHeading";
import { useTilt } from "@/hooks/useTilt";

const iconMap: Record<string, React.ElementType> = {
  nextjs: Layers,
  react: Code2,
  nodejs: Server,
  express: Terminal,
  html: Globe,
  css: Palette,
  javascript: Braces,
  bootstrap: Box,
  tailwind: Wind,
  mysql: Database,
  postgresql: Database,
  mongodb: Database,
  git: GitBranch,
  github: GitBranch,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function SkillCard({ skill, index }: { skill: (typeof SKILLS)[0]; index: number }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt(8);
  const Icon = iconMap[skill.icon] ?? Code2;

  return (
    <motion.div
      variants={itemVariants}
      className="group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative glass rounded-2xl p-5 border border-white/10 hover:border-primary/40 transition-all duration-500 cursor-default overflow-hidden"
        style={{ transformStyle: "preserve-3d", transition: "transform 0.1s ease-out" }}
      >
        {/* Glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${skill.color}15 0%, transparent 70%)`,
          }}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <motion.div
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/30 transition-colors"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Icon className="h-5 w-5" style={{ color: skill.color }} />
            </motion.div>
            <span className="font-medium text-white text-sm">{skill.name}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="section-padding relative"
      aria-label="About section"
    >
      <div className="container-custom">
        <SectionHeading
          subtitle="About Me"
          title="Crafting Digital Excellence"
          description="A passionate Software Engineer with expertise in building scalable, user-centric applications. I blend technical precision with creative design to deliver exceptional digital experiences."
        />

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-8 border border-white/10 h-full">
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  I&apos;m <span className="text-white font-medium">{SITE_CONFIG.name.split(" ")[0]}</span>,
                  a Software Engineer and Full Stack Developer based in India.
                  I specialize in creating modern web applications that are
                  fast, accessible, and visually stunning.
                </p>
                <p>
                  With a strong foundation in both frontend and backend
                  technologies, I enjoy turning complex problems into simple,
                  beautiful, and intuitive solutions.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new
                  technologies, contributing to open source, or refining my
                  craft in UI/UX design.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { label: "Projects", value: "10+", icon: Layers },
              { label: "Experience", value: "1+ Yrs", icon: Smartphone },
              { label: "Technologies", value: "15+", icon: Code2 },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass rounded-2xl p-6 border border-white/10 text-center hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <stat.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                <div className="font-display text-2xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div>
          <motion.h3
            className="font-display text-2xl font-semibold text-white mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h3>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {SKILLS.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}