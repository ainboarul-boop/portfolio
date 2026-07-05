"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-[#f3efe8] px-4 py-2 font-[family-name:var(--font-manrope)] text-xs font-semibold uppercase tracking-[0.22em] text-[#746b5d]">
      {children}
    </span>
  );
}

export function HomeHero() {
  return (
    <section className="bg-white px-4 pt-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1480px] overflow-hidden rounded-[28px] bg-[#15110d]">
        <div className="relative min-h-[72svh] md:min-h-[78svh]">
          <Image
            src={images.heroBg}
            alt="Wedding couple portrait by Arul Kumar"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0.56)_100%)]" />

          <div className="relative z-10 flex min-h-[72svh] items-end justify-center px-6 pb-12 pt-28 text-center text-white md:min-h-[78svh] md:px-10 md:pb-16">
            <FadeIn className="max-w-3xl">
              <p className="font-[family-name:var(--font-manrope)] text-xs font-semibold uppercase tracking-[0.36em] text-white/80">
                Wedding . Portrait . Events
              </p>
              <h1 className="mt-4 font-[family-name:var(--font-antonio)] text-[clamp(2.8rem,7vw,5.2rem)] uppercase leading-[0.95] tracking-[0.04em]">
                {siteConfig.photographer}
              </h1>
              <p className="mt-4 font-[family-name:var(--font-raleway)] text-lg font-light tracking-[0.08em] text-white/90 md:text-2xl">
                Clean photography. Timeless moments. Professional presentation.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.2em] text-[#181818]"
                >
                  View Work
                </Link>
                <Link
                  href="/book-now"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.2em] text-white"
                >
                  Contact Now
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IntroductionSection() {
  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-20 lg:px-12">
      <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.1fr)] lg:items-center">
        <FadeIn>
          <div className="overflow-hidden rounded-[24px] bg-[#f6f3ee]">
            <Image
              src={images.gallery1}
              alt="Wedding function photography"
              width={900}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <SectionLabel>About the studio</SectionLabel>
          <h2 className="mt-5 font-[family-name:var(--font-manrope)] text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight text-[#161616]">
            Simple, neat, and built to let the photography stand out.
          </h2>
          <p className="mt-5 max-w-3xl font-[family-name:var(--font-manrope)] text-base leading-8 text-[#575757] md:text-lg">
            {siteConfig.name} delivers wedding, portrait, event, maternity, and
            family photography with a polished client experience. The focus is on
            natural direction, elegant compositions, and final images that feel
            premium without looking over-edited.
          </p>
          <p className="mt-4 max-w-3xl font-[family-name:var(--font-manrope)] text-base leading-8 text-[#575757] md:text-lg">
            Based in {siteConfig.location}, the studio covers sessions with a calm,
            professional style from first conversation to final delivery.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

export function ServicesPreviewSection() {
  const services = [
    "Wedding photography",
    "Reception and engagement coverage",
    "Portrait and fashion sessions",
    "Maternity and newborn shoots",
    "Family functions and events",
    "Brand and product photography",
  ];

  return (
    <section className="bg-[#faf8f4] px-4 py-16 md:px-8 md:py-20 lg:px-12">
      <div className="mx-auto max-w-[1360px]">
        <FadeIn className="text-center">
          <SectionLabel>What we cover</SectionLabel>
          <h2 className="mt-5 font-[family-name:var(--font-manrope)] text-[clamp(2rem,4vw,3rem)] font-extrabold text-[#171717]">
            Professional photography for every important occasion.
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service} delay={index * 0.05}>
              <div className="rounded-[20px] border border-[#e8e1d6] bg-white px-6 py-5">
                <p className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[#222]">
                  {service}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  const galleryItems = [
    images.portfolioGallery[0],
    images.portfolioGallery[1],
    images.portfolioGallery[2],
    images.portfolioGallery[3],
    images.portfolioGallery[4],
    images.portfolioGallery[5],
    images.portfolioGallery[6],
    images.portfolioGallery[7],
    images.portfolioGallery[8],
    images.portfolioGallery[9],
    images.portfolioGallery[10],
    images.portfolioGallery[11],
  ];

  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-20 lg:px-12">
      <div className="mx-auto max-w-[1360px]">
        <FadeIn className="text-center">
          <SectionLabel>Latest work</SectionLabel>
          <h2 className="mt-5 font-[family-name:var(--font-manrope)] text-[clamp(2rem,4vw,3rem)] font-extrabold text-[#171717]">
            A clean gallery preview.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-manrope)] text-base leading-8 text-[#616161]">
            A simple layout inspired by your reference, with more space, cleaner cards,
            and less visual noise.
          </p>
        </FadeIn>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {galleryItems.map((src, index) => (
            <FadeIn key={src} delay={index * 0.04} className="mb-4 break-inside-avoid">
              <div className="overflow-hidden rounded-[18px] bg-[#f6f3ee]">
                <Image
                  src={src}
                  alt={`Portfolio image ${index + 1}`}
                  width={700}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-full bg-[#181818] px-7 py-3.5 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.2em] text-white"
          >
            Explore Full Portfolio
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

export function NewbornSection() {
  return (
    <section className="bg-[#faf8f4] px-4 py-16 md:px-8 md:py-20 lg:px-12">
      <div className="mx-auto max-w-[1120px] text-center">
        <FadeIn>
          <SectionLabel>Book a session</SectionLabel>
          <h2 className="mt-5 font-[family-name:var(--font-manrope)] text-[clamp(2rem,4vw,3rem)] font-extrabold text-[#171717]">
            Ready to create a gallery that feels clean, elegant, and professional?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-manrope)] text-base leading-8 text-[#616161]">
            Reach out for weddings, portraits, family events, maternity, newborn,
            and branded shoots.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/book-now"
              className="inline-flex items-center justify-center rounded-full bg-[#181818] px-7 py-3.5 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.2em] text-white"
            >
              Book Now
            </Link>
            {/* <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center rounded-full border border-[#d8d1c5] bg-white px-7 py-3.5 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.2em] text-[#181818]"
            >
              Call {siteConfig.phone}
            </a> */}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
