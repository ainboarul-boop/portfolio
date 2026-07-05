import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { SiteShell } from "@/components/layout/SiteShell";
import { ServicesPageSections } from "@/components/services/ServicesPageSections";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Arul Kumar's photography services for events, weddings, newborn sessions, portraits, fashion, and product photography.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <SiteShell headerVariant="light" headerOverlay>
      <ServicesPageSections />
      <Footer />
    </SiteShell>
  );
}
