"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/constants/site";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn, scrollToSection } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    scrollToSection(id);
    setIsMobileOpen(false);
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300",
          isScrolled
            ? "glass border-b-white/5 border-x-0 border-t-0 shadow-lg shadow-black/20"
            : "bg-transparent border-b-transparent border-x-0 border-t-0"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          className="container-custom flex h-[var(--navbar-height)] items-center justify-between"
          aria-label="Main navigation"
        >
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full p-[1.5px] bg-gradient-to-tr from-primary via-purple-500 to-secondary shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Soham Pawar - Home"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#050816] transition-colors group-hover:bg-[#050816]/80">
              <span className="font-display text-sm font-bold gradient-text tracking-wide group-hover:scale-105 transition-transform duration-300">
                SP
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors duration-300",
                      isActive ? "text-white" : "text-white/60 hover:text-white"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 bg-gradient-to-r from-primary to-secondary rounded-full"
                        layoutId="navbar-indicator"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <button
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl glass border border-white/10 text-white"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              className="fixed top-0 right-0 z-40 h-full w-[280px] glass border-l border-white/10 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="flex flex-col gap-2 p-6 pt-24">
                {NAV_ITEMS.map((item, index) => {
                  const id = item.href.replace("#", "");
                  const isActive = activeSection === id;
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className={cn(
                        "px-4 py-3 rounded-xl text-base font-medium transition-all",
                        isActive
                          ? "bg-primary/10 text-white border border-primary/30"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      )}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.label}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
