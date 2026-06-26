import type { Metadata } from "next";
import Image from "next/image";
import { Footer, NameBanner } from "@/components/layout/Footer";
import { SiteShell } from "@/components/layout/SiteShell";
import { FadeIn } from "@/components/ui/FadeIn";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Arulkumar's photography portfolio — weddings, events, newborn, maternity, fashion, portraits, collaborations and photo frames across Tamil Nadu.",
  alternates: { canonical: "/portfolio" },
};

const portfolioAlts = [
  "Traditional wedding ceremony photography",
  "Couple portrait outdoor photography",
  "Full wedding celebration photography",
  "Event photography group portrait",
  "Traditional bridal portrait photography",
  "Couple intimate portrait session",
  "Wedding outdoor ceremony photography",
  "Maternity photoshoot portrait",
  "Fashion portrait in traditional attire",
  "Newborn baby photography",
  "Live event portrait photography",
  "Evening gown fashion photography",
  "Traditional saree portrait photography",
];

export default function PortfolioPage() {
  return (
    <SiteShell headerOverlay>
      <main>
        <section className="relative bg-[#29292c] pb-8 pt-4 text-white md:pb-16">
          <div className="mx-auto max-w-[1280px] px-4 md:px-20">
            <FadeIn className="relative z-10 pt-8 md:pt-16">
              <p className="font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase text-[#797c86]">
                Portfolio
              </p>
              <h1 className="mt-1 font-[family-name:var(--font-manrope)] text-3xl font-semibold uppercase md:text-[48px]">
                Visual Poetry in Pixels
              </h1>
              <p className="mt-4 max-w-3xl font-[family-name:var(--font-manrope)] text-base leading-relaxed text-[#797c86]">
                Step into a visual journey that encapsulates the essence of my
                lens. Each photograph in this portfolio is a narrative, a frozen
                moment in time, and a testament to the artistry and passion
                poured into every frame. Explore the diverse tapestry of stories
                I&apos;ve had the privilege to capture and witness the world
                through my lens.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="relative mt-8 md:mt-12">
              <div className="relative aspect-[1280/716] w-full overflow-hidden rounded-2xl">
                <Image
                  src={images.portfolioHero}
                  alt="Featured portfolio photography by Arulkumar"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 1280px"
                />
              </div>
              <p className="mt-4 text-right font-[family-name:var(--font-manrope)] text-xs font-medium uppercase tracking-widest text-[#797c86]">
                Scroll Down To See The Works
              </p>
            </FadeIn>
          </div>
        </section>

        <NameBanner />

        <section className="space-y-2 bg-white md:space-y-4">
          <FadeIn>
            <div className="relative aspect-[1609/858] w-full overflow-hidden">
              <Image
                src={images.portfolioBanner1}
                alt="Newborn and toddler photography portfolio"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="100vw"
              />
            </div>
          </FadeIn>
          <FadeIn>
            <div className="relative aspect-[1609/858] w-full overflow-hidden">
              <Image
                src={images.portfolioBanner2}
                alt="Wedding and event photography portfolio showcase"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="100vw"
              />
            </div>
          </FadeIn>
        </section>

        <section className="bg-[#29292c]">
          {images.portfolioGallery.map((src, index) => (
              <FadeIn key={src} delay={(index % 3) * 0.05}>
                <div className="relative w-full overflow-hidden bg-[#29292c]">
                  <div className="relative mx-auto max-w-[1600px]">
                    <div
                      className={`relative w-full ${
                        index <= 2
                          ? "aspect-[4/5] md:aspect-auto md:min-h-[600px]"
                          : "aspect-[4/3] md:aspect-[16/10]"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={
                          portfolioAlts[index] ||
                          `Professional photography portfolio image ${index + 1}`
                        }
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                        sizes="100vw"
                        loading={index < 3 ? "eager" : "lazy"}
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
          ))}
        </section>

        <section className="bg-[#29292c]">
          <FadeIn>
            <div className="relative aspect-[1600/952] w-full overflow-hidden">
              <Image
                src={images.portfolioFeature}
                alt="Featured wedding photography close-up"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative aspect-[1600/967] w-full overflow-hidden">
              <Image
                src={images.portfolioGalleryHero}
                alt="Bridal jewelry detail photography"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </FadeIn>
        </section>

        <Footer />
      </main>
    </SiteShell>
  );
}
