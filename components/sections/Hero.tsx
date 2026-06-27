"use client";

import { motion } from "framer-motion";
import { Download, ArrowDown, Code2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons/SocialIcons";
import { HERO_ROLES, SITE_CONFIG, SOCIAL_LINKS } from "@/constants/site";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

const socialIconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
};

function TypingEffect() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = HERO_ROLES[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % HERO_ROLES.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <span className="gradient-text font-semibold whitespace-nowrap">
      {displayText || "\u200b"}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
      />
    </span>
  );
}

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [rotateY, setRotateY] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRotateY(1080); // 3 full spins like a coin
    }, 2300);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 60, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-[calc(var(--navbar-height)+2rem)]"
      aria-label="Hero section"
    >
      <div className="container-custom w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 min-w-0">
            <motion.p
              className="text-white/60 text-lg mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi,
            </motion.p>

            <motion.h1
              ref={headingRef}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              I&apos;m{" "}
              <span className="gradient-text">{SITE_CONFIG.name}</span>
            </motion.h1>

            <motion.div
              className="text-lg sm:text-2xl md:text-3xl font-semibold mb-6 h-[2rem] sm:h-[2.5rem] md:h-[3rem] overflow-hidden max-w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <TypingEffect />
            </motion.div>

            <motion.p
              className="text-white/50 text-base md:text-lg max-w-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              I craft beautiful, performant web experiences with modern
              technologies. Passionate about clean code, elegant design, and
              pushing the boundaries of what&apos;s possible on the web.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href={SITE_CONFIG.resumeUrl}
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl text-sm font-medium bg-gradient-to-r from-primary via-purple-500 to-secondary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <Button
                variant="outline"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {SOCIAL_LINKS.map((link, index) => {
                const Icon = socialIconMap[link.icon];
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target={link.icon !== "mail" ? "_blank" : undefined}
                    rel={link.icon !== "mail" ? "noopener noreferrer" : undefined}
                    className="flex h-11 w-11 items-center justify-center rounded-xl glass border border-white/10 text-white/60 hover:text-white hover:border-primary/50 hover:shadow-glow transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -3 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Hero Illustration */}
          <motion.div
            className="order-1 lg:order-2 relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-30"
                style={{
                  background:
                    "conic-gradient(from 0deg, #7C3AED, #06B6D4, #38BDF8, #7C3AED)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Profile Image (Fitted, non-floating, zoomed, with flipper effect) */}
              <motion.div
                className="absolute inset-4 rounded-full border-2 border-white/10 shadow-glow flex items-center justify-center cursor-pointer"
                animate={{ rotateY: rotateY }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ transformStyle: "preserve-3d" }}
                onClick={() => setRotateY((prev) => prev + 180)}
              >
                {/* Front Side: Profile Image */}
                <div
                  className="absolute inset-0 rounded-full overflow-hidden flex items-center justify-center"
                  style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/profile.jpg"
                    alt="Soham Pawar"
                    className="w-full h-full object-cover object-[center_15%] scale-110"
                  />
                </div>

                {/* Back Side: Coding Icon */}
                <div
                  className="absolute inset-0 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 via-black/80 to-secondary/20 flex flex-col items-center justify-center gap-2 border border-white/5"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-lg">
                    <Code2 className="h-10 w-10 text-primary" />
                  </div>
                  <span className="font-display font-bold text-sm tracking-widest uppercase gradient-text">
                    SP
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
        onClick={() => scrollToSection("about")}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll to about section"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
