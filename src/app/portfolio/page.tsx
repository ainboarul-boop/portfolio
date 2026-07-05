import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { SiteShell } from "@/components/layout/SiteShell";
import { PortfolioPageSections } from "@/components/portfolio/PortfolioPageSections";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Arul Kumar's curated wedding, portrait, and event photography portfolio with a more premium and professional presentation.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <SiteShell headerVariant="light" headerOverlay>
      <PortfolioPageSections />
      <Footer />
    </SiteShell>
  );
}
