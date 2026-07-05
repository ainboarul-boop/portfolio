"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { navLinks } from "@/lib/site";
import { ArrowIcon, ChevronDown } from "./Header";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  activePath: string;
};

export function MobileMenu({ open, onClose, activePath }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            aria-label="Close menu overlay"
          />

          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-full w-[min(100%,340px)] flex-col bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] shadow-2xl lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <span className="font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-widest text-gray-400">
                Menu
              </span>
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white transition-all hover:bg-white/10"
                aria-label="Close menu"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M2 2L14 14M14 2L2 14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-2 overflow-y-auto px-5 py-3">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`flex items-center justify-between rounded-lg px-3 py-3 font-[family-name:var(--font-alan)] text-lg font-medium tracking-wide transition-all ${
                      activePath === link.href
                        ? "bg-gradient-to-r from-[#6366f1]/30 to-[#6366f1]/10 text-white"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    } ${"cta" in link && link.cta ? "border border-[#6366f1]/50" : ""}`}
                  >
                    {link.label}
                    <span className="flex items-center gap-2">
                      {"hasSubmenu" in link && link.hasSubmenu && (
                        <ChevronDown className="h-2 w-3 text-current/70" />
                      )}
                      {"cta" in link && link.cta && (
                        <ArrowIcon className="h-4 w-4 text-[#6366f1]" />
                      )}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
