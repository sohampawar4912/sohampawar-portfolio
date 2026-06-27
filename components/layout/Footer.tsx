"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black/20 min-h-[40px] flex items-center justify-center" role="contentinfo">
      <div className="container-custom py-10 flex items-center justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-white/40 text-center">
            © 2026 Soham Pawar. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
