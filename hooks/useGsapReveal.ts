"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface UseGsapRevealOptions {
  delay?: number;
  duration?: number;
  y?: number;
}

export function useGsapReveal<T extends HTMLElement>(
  options: UseGsapRevealOptions = {}
) {
  const ref = useRef<T>(null);
  const { delay = 0, duration = 0.8, y = 40 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      el,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
      }
    );
  }, [delay, duration, y]);

  return ref;
}
