"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-[var(--navbar-height)]">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="font-display text-[8rem] sm:text-[12rem] font-bold gradient-text leading-none mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            404
          </motion.h1>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-white/50 max-w-md mx-auto mb-8 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild>
              <Link href="/">
                <Home className="h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/#contact">
                <ArrowLeft className="h-4 w-4" />
                Contact Me
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
