"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { MobileMenu } from "./MobileMenu";

type SiteShellProps = {
  children: React.ReactNode;
  headerVariant?: "dark" | "light";
  headerOverlay?: boolean;
};

export function SiteShell({
  children,
  headerVariant = "dark",
  headerOverlay = false,
}: SiteShellProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const syncScrollState = () => {
      setIsScrolled(window.scrollY > 24);
    };

    syncScrollState();
    window.addEventListener("scroll", syncScrollState, { passive: true });

    return () => window.removeEventListener("scroll", syncScrollState);
  }, []);

  return (
    <>
      <header
        className={
          headerOverlay
            ? `fixed inset-x-0 z-40 transition-all duration-300 ${
                isScrolled ? "top-0 lg:top-5 lg:px-6" : "top-0"
              }`
            : `sticky top-0 z-40 transition-all duration-300 ${
                isScrolled ? "lg:top-5 lg:px-6" : ""
              }`
        }
      >
        <Header
          activePath={pathname}
          variant={headerVariant}
          onMenuOpen={() => setMenuOpen(true)}
          scrolled={isScrolled}
          overlay={headerOverlay}
        />
      </header>
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activePath={pathname}
      />
      {children}
    </>
  );
}
