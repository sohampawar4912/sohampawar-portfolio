"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, Building2 } from "lucide-react";
import { EXPERIENCES } from "@/constants/experience";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-padding relative"
      aria-label="Experience section"
    >
      <div className="container-custom">
        <SectionHeading
          subtitle="Experience"
          title="Professional Journey"
          description="My career path and the impactful work I've done along the way."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:-translate-x-1/2"
            aria-hidden="true"
          />

          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-[#050816] md:-translate-x-1/2 z-10 shadow-glow"
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              />

              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <motion.div
                  className="glass rounded-2xl p-6 md:p-8 border border-white/10 hover:border-primary/30 transition-all duration-500 group"
                  whileHover={{ y: -5 }}
                >
                  {/* Company logo placeholder */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white group-hover:gradient-text transition-all">
                        {exp.company}
                      </h3>
                      <p className="text-primary font-medium text-sm flex items-center gap-1.5 mt-1">
                        <Briefcase className="h-3.5 w-3.5" />
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-4">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {exp.duration}
                    </Badge>
                  </div>

                  <p className="text-white/60 text-sm leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  <ul className="space-y-2" role="list">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 text-sm text-white/50"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
