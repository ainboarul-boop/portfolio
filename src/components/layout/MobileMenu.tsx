"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { navLinks } from "@/lib/site";
import { ArrowIcon } from "./Header";

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
            className="fixed right-0 top-0 z-50 flex h-full w-[min(100%,320px)] flex-col bg-[#1c1c21] shadow-2xl lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-[#2f2f37] px-6 py-5">
              <span className="font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-widest text-[#797c86]">
                Menu
              </span>
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2f2f37] text-white transition-colors hover:bg-[#29292c]"
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

            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
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
                    className={`flex items-center justify-between rounded-xl px-4 py-4 font-[family-name:var(--font-alan)] text-xl tracking-wide transition-colors ${
                      activePath === link.href
                        ? "bg-[#29292c] text-white"
                        : "text-[#afb0b6] hover:bg-[#29292c]/60 hover:text-white"
                    } ${"cta" in link && link.cta ? "mt-4 border border-white/20" : ""}`}
                  >
                    {link.label}
                    {"cta" in link && link.cta && (
                      <ArrowIcon className="h-4 w-4 text-white" />
                    )}
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
