import type { Metadata } from "next";
import { AboutPageSections } from "@/components/about/AboutPageSections";
import { Footer } from "@/components/layout/Footer";
import { SiteShell } from "@/components/layout/SiteShell";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the story, philosophy, and working style behind Arul Kumar's wedding and event photography.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <SiteShell headerVariant="light" headerOverlay>
      <AboutPageSections />
      <Footer />
    </SiteShell>
  );
}
