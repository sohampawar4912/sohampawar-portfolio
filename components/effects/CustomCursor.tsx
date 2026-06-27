"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isDesktop = useMediaQuery("(min-width: 1024px) and (hover: hover)");

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("a, button, [role='button'], input, textarea, select") !==
        null;
      setIsHovering(isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        aria-hidden="true"
        animate={{
          x: position.x - (isHovering ? 20 : 8),
          y: position.y - (isHovering ? 20 : 8),
          width: isHovering ? 40 : 16,
          height: isHovering ? 40 : 16,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.5 }}
        style={{
          borderRadius: "50%",
          border: "1.5px solid white",
        }}
      />
      <motion.div
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9998]"
        aria-hidden="true"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
        }}
        transition={{ type: "spring", damping: 35, stiffness: 500, mass: 0.2 }}
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "rgba(124, 58, 237, 0.8)",
        }}
      />
    </>
  );
}
