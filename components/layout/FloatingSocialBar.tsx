"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons/SocialIcons";
import { SOCIAL_LINKS } from "@/constants/site";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
};

export function FloatingSocialBar() {
  return (
    <motion.div
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      aria-label="Social links"
    >
      {SOCIAL_LINKS.map((link, index) => {
        const Icon = iconMap[link.icon];
        return (
          <motion.a
            key={link.name}
            href={link.href}
            target={link.icon !== "mail" ? "_blank" : undefined}
            rel={link.icon !== "mail" ? "noopener noreferrer" : undefined}
            className="group relative flex h-10 w-10 items-center justify-center rounded-xl glass border border-white/10 text-white/60 hover:text-white hover:border-primary/50 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 + index * 0.1 }}
            aria-label={link.name}
          >
            <Icon className="h-4 w-4" />
            <span className="absolute left-full ml-3 px-2 py-1 rounded-md bg-white/10 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {link.name}
            </span>
          </motion.a>
        );
      })}

      <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent mx-auto" />
    </motion.div>
  );
}
