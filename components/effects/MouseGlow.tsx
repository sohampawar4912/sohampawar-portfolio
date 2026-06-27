"use client";

import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function MouseGlow() {
  const { x, y } = useMousePosition();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (!isDesktop) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-0 mix-blend-screen"
      aria-hidden="true"
      animate={{
        x: x - 200,
        y: y - 200,
      }}
      transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      style={{
        width: 400,
        height: 400,
        background:
          "radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)",
      }}
    />
  );
}
