"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-md z-[9997]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="glass rounded-2xl border border-white/10 p-5 shadow-glow">
            <div className="flex items-start gap-3">
              <Cookie className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-white mb-1">
                  Cookie Notice
                </h3>
                <p className="text-xs text-white/50 leading-relaxed mb-4">
                  This website uses cookies to enhance your browsing experience
                  and analyze site traffic. By continuing, you consent to our use
                  of cookies.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" onClick={accept}>
                    Accept
                  </Button>
                  <Button size="sm" variant="outline" onClick={decline}>
                    Decline
                  </Button>
                </div>
              </div>
              <button
                onClick={decline}
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Close cookie notice"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
