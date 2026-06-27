"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { Search, ArrowRight, Home, User, Briefcase, FolderOpen, Mail } from "lucide-react";
import { NAV_ITEMS } from "@/constants/site";
import { scrollToSection } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Home,
  About: User,
  Experience: Briefcase,
  Projects: FolderOpen,
  Contact: Mail,
};

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredItems = NAV_ITEMS.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = useCallback((href: string) => {
    scrollToSection(href.replace("#", ""));
    setIsOpen(false);
    setSearch("");
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        setSearch("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <motion.div
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[9999] w-[90%] max-w-lg"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-label="Command palette"
            aria-modal="true"
          >
            <div className="glass rounded-2xl border border-white/10 overflow-hidden shadow-glow-lg">
              <div className="flex items-center gap-3 px-4 border-b border-white/10">
                <Search className="h-4 w-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Search sections..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 h-12 bg-transparent text-white text-sm placeholder:text-white/40 focus:outline-none"
                  autoFocus
                  aria-label="Search commands"
                />
                <kbd className="hidden sm:inline-flex h-6 items-center rounded border border-white/10 bg-white/5 px-2 text-xs text-white/40">
                  ESC
                </kbd>
              </div>

              <ul className="py-2 max-h-64 overflow-y-auto" role="listbox">
                {filteredItems.map((item) => {
                  const Icon = iconMap[item.label] ?? Home;
                  return (
                    <li key={item.href}>
                      <button
                        onClick={() => handleSelect(item.href)}
                        className="flex w-full items-center gap-3 px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white transition-colors"
                        role="option"
                        aria-selected={false}
                      >
                        <Icon className="h-4 w-4 text-primary" />
                        <span className="flex-1 text-left">{item.label}</span>
                        <ArrowRight className="h-3 w-3 text-white/30" />
                      </button>
                    </li>
                  );
                })}
                {filteredItems.length === 0 && (
                  <li className="px-4 py-6 text-center text-sm text-white/40">
                    No results found
                  </li>
                )}
              </ul>

              <div className="px-4 py-2 border-t border-white/10 flex items-center gap-4 text-xs text-white/30">
                <span>
                  <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">↑↓</kbd>{" "}
                  Navigate
                </span>
                <span>
                  <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">↵</kbd>{" "}
                  Select
                </span>
                <span>
                  <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">esc</kbd>{" "}
                  Close
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
