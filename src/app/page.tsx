import type { Metadata } from "next";
import { Footer, NameBanner } from "@/components/layout/Footer";
import { SiteShell } from "@/components/layout/SiteShell";
import {
  GallerySection,
  HomeHero,
  IntroductionSection,
  LogoBreakSection,
  NewbornSection,
  ServicesPreviewSection,
} from "@/components/home/HomeSections";
import { defaultMetadata } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: defaultMetadata.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <SiteShell headerOverlay>
      <HomeHero />
      <main>
        <NameBanner />
        <IntroductionSection />
        <ServicesPreviewSection />
        <LogoBreakSection />
        <GallerySection />
        <NewbornSection />
        <Footer />
      </main>
    </SiteShell>
  );
}
