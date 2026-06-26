"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
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

  return (
    <>
      <header
        className={
          headerOverlay
            ? "fixed inset-x-0 top-0 z-40"
            : "sticky top-0 z-40 bg-white/95 backdrop-blur-md"
        }
      >
        <Header
          activePath={pathname}
          variant={headerVariant}
          onMenuOpen={() => setMenuOpen(true)}
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
