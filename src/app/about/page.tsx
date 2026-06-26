import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { SiteShell } from "@/components/layout/SiteShell";
import { FadeIn } from "@/components/ui/FadeIn";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Meet Arulkumar — professional photographer and visual storyteller based in Tamil Nadu. 5+ years capturing weddings, events, portraits, collaborations and premium photo frames.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <SiteShell headerOverlay>
      <main className="bg-[#29292c] text-white">
        <section className="relative overflow-hidden pb-16 pt-4 md:pb-24">
          <div className="mx-auto max-w-[1600px] px-4 md:px-10 lg:px-[160px]">
            <FadeIn>
              <p className="font-[family-name:var(--font-arimo)] text-lg font-bold uppercase md:text-[40px]">
                {siteConfig.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="mt-4 font-[family-name:var(--font-antonio)] text-5xl font-medium uppercase leading-none md:text-8xl lg:text-[121px]">
                {siteConfig.photographer}
              </h1>
            </FadeIn>

            <FadeIn delay={0.1} className="relative mt-8 md:mt-12">
              <div className="relative aspect-[1279/784] w-full overflow-hidden rounded-3xl md:rounded-[60px]">
                <Image
                  src={images.aboutHero}
                  alt="Arulkumar professional photography portrait"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 1280px"
                />
              </div>
              <p className="absolute bottom-4 right-4 hidden font-[family-name:var(--font-manrope)] text-xs font-medium uppercase tracking-widest text-[#797c86] md:block">
                Scroll Down To See My Journey
              </p>
            </FadeIn>

            <FadeIn delay={0.15} className="mt-12 md:mt-16">
              <h2 className="font-[family-name:var(--font-manrope)] text-2xl font-semibold uppercase text-[#797c86] md:text-[38px]">
                Capturing Moments. Crafting Stories. Delivering Excellence.
              </h2>
              <div className="mt-6 space-y-4 font-[family-name:var(--font-manrope)] text-lg leading-relaxed text-[#797c86] md:text-[28px]">
                <p>
                  Hi, I&apos;m ARULKUMAR, a professional photographer,
                  videographer, and visual storyteller based in TN.
                </p>
                <p>
                  With over 5+ years of professional experience behind the lens, I
                  specialize in turning fleeting moments into timeless visual
                  assets. Whether you are a couple planning your dream wedding,
                  a brand looking to elevate your commercial identity, or an
                  individual seeking a striking portrait, my goal is to deliver
                  stunning, high-impact visuals that resonate.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-12 md:mt-16">
              <div className="relative aspect-[1418/945] w-full overflow-hidden rounded-[40px] md:rounded-[152px]">
                <Image
                  src={images.aboutPortrait}
                  alt="Traditional bridal portrait by Arulkumar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1418px"
                />
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="border-t border-[#1c1c21] bg-[#29292c] px-4 py-16 md:px-10 md:py-24 lg:px-[160px]">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-manrope)] text-2xl font-semibold uppercase text-[#797c86] md:text-[38px]">
              My Philosophy
            </h2>
            <blockquote className="mt-6 font-[family-name:var(--font-manrope)] text-2xl font-semibold uppercase leading-snug text-[#797c86] md:mt-8 md:text-[48px]">
              &ldquo;A great photograph isn&apos;t just seen; it&apos;s felt.&rdquo;
            </blockquote>
            <p className="mt-8 font-[family-name:var(--font-manrope)] text-lg leading-relaxed text-[#797c86] md:text-[28px]">
              Every project is unique, and I treat it as such. I don&apos;t believe
              in a one-size-fits-all approach. I take the time to understand
              your vision, your brand, or your story, tailoring my
              style—whether candid, cinematic, or editorial—to match exactly what
              you need.
            </p>
          </FadeIn>
        </section>

        <section className="relative bg-white px-4 py-16 text-[#29292c] md:px-10 md:py-24 lg:px-[160px]">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-manrope)] text-2xl font-semibold uppercase md:text-[48px]">
              Let&apos;s Create Something Beautiful Together
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-center font-[family-name:var(--font-manrope)] text-lg text-[#797c86] md:text-[38px]">
              From corporate boardrooms to breathtaking outdoor landscapes, I am
              ready to bring your vision to life.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="relative mx-auto mt-12 max-w-[868px]">
            <Image
              src={images.aboutWatermark}
              alt="AINBOW CREATIVE STUDIO logo watermark"
              width={868}
              height={562}
              className="mx-auto h-auto w-full opacity-20"
            />
          </FadeIn>
        </section>

        <Footer />
      </main>
    </SiteShell>
  );
}
