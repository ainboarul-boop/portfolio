"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { images } from "@/lib/images";

type Collection = {
  id: string;
  label: string;
  title: string;
  description: string;
  hero: string;
  feature: string;
  gallery: string[];
};

const collections: Collection[] = [
  {
    id: "weddings",
    label: "Weddings",
    title: "Wedding stories with elegance, emotion, and visual rhythm.",
    description:
      "A curated wedding presentation focused on ceremonies, portraits, family connection, and quiet in-between moments that give the day emotional depth.",
    hero: images.portfolioHero,
    feature: images.portfolioFeature,
    gallery: [
      images.heroBg,
      images.introBride,
      images.galleryHands,
      images.portfolioGallery[1],
      images.portfolioGallery[5],
      images.portfolioGallery[11],
    ],
  },
  {
    id: "portraits",
    label: "Portraits",
    title: "Portraits that feel polished without losing personality.",
    description:
      "This collection highlights expressive portraiture, bridal frames, fashion-inspired sessions, and individual images shaped with a calm editorial eye.",
    hero: images.aboutPortrait,
    feature: images.eventsModel,
    gallery: [
      images.servicesGreen,
      images.aboutHero,
      images.portfolioGallery[0],
      images.portfolioGallery[6],
      images.portfolioGallery[9],
      images.portfolioGallery[12],
    ],
  },
  {
    id: "events",
    label: "Events",
    title: "Events presented with clarity, energy, and a premium finish.",
    description:
      "From functions to celebrations and milestone gatherings, the work here is organized to show atmosphere, people, movement, and key highlights with balance.",
    hero: images.servicesBg,
    feature: images.gallery1,
    gallery: [
      images.portfolioBanner2,
      images.portfolioGallery[2],
      images.portfolioGallery[3],
      images.portfolioGallery[4],
      images.portfolioGallery[7],
      images.portfolioGallery[8],
    ],
  },
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-[#f3efe8] px-4 py-2 font-[family-name:var(--font-manrope)] text-xs font-semibold uppercase tracking-[0.22em] text-[#746b5d]">
      {children}
    </span>
  );
}

export function PortfolioPageSections() {
  const [activeId, setActiveId] = useState("weddings");
  const activeCollection = collections.find((item) => item.id === activeId) ?? collections[0];

  return (
    <main className="bg-white text-[#1d1d1d]">
      <section className="relative isolate overflow-hidden bg-[#17120e]">
        <Image
          src={activeCollection.hero}
          alt={activeCollection.label}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,11,0.74)_0%,rgba(18,14,11,0.52)_42%,rgba(18,14,11,0.38)_100%)]" />

        <div className="relative z-10 mx-auto grid min-h-[86svh] max-w-[1360px] items-end gap-12 px-4 pb-14 pt-30 md:px-8 md:pb-18 md:pt-34 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-12">
          <FadeIn className="max-w-3xl text-white">
            <SectionLabel>Portfolio</SectionLabel>
            <h1 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3.3rem,8vw,6rem)] font-semibold leading-[0.94] text-white">
              A curated portfolio that feels more like a premium presentation than a gallery dump.
            </h1>
            <p className="mt-5 max-w-2xl font-[family-name:var(--font-manrope)] text-base leading-8 text-white/82 md:text-lg">
              Explore the work by collection to see how different stories are shaped,
              edited, and presented with a consistent visual standard.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="sticky top-[72px] z-20 border-b border-[#eee7dd] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1360px] gap-3 overflow-x-auto px-4 py-4 md:px-8 lg:px-12">
          {collections.map((item) => {
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className={`shrink-0 rounded-full border px-5 py-2.5 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.16em] transition-colors duration-200 ${
                  isActive
                    ? "border-[#1e1e1e] bg-[#1e1e1e] text-white"
                    : "border-[#ded5c9] bg-white text-[#222] hover:border-[#bfa885]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="px-4 py-18 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1360px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCollection.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid gap-8 xl:grid-cols-[minmax(0,1.08fr)_360px]">
                <div className="grid gap-4 md:grid-cols-[1.08fr_0.92fr]">
                  <div className="overflow-hidden rounded-[30px] bg-[#f6f2eb]">
                    <Image
                      src={activeCollection.hero}
                      alt={activeCollection.label}
                      width={1600}
                      height={1100}
                      className="h-[420px] w-full object-cover md:h-[560px]"
                    />
                  </div>
                  <div className="grid gap-4">
                    <div className="overflow-hidden rounded-[30px] bg-[#f6f2eb]">
                      <Image
                        src={activeCollection.feature}
                        alt={`${activeCollection.label} feature`}
                        width={1200}
                        height={1200}
                        className="h-[280px] w-full object-cover md:h-full"
                      />
                    </div>
                    <div className="rounded-[26px] border border-[#ebe4d9] bg-white p-6">
                      <SectionLabel>Current collection</SectionLabel>
                      <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-4xl font-semibold leading-tight text-[#171717]">
                        {activeCollection.title}
                      </h2>
                      <p className="mt-4 font-[family-name:var(--font-manrope)] text-base leading-8 text-[#616161]">
                        {activeCollection.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[28px] border border-[#ebe4d9] bg-[#faf8f4] p-6">
                  <SectionLabel>Why this works</SectionLabel>
                  <div className="mt-5 space-y-4">
                    {[
                      "A cleaner client-facing presentation",
                      "Focused browsing through curated collections",
                      "Stronger premium feel with less visual clutter",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-[18px] bg-white px-4 py-4 font-[family-name:var(--font-manrope)] text-sm leading-7 text-[#585858] md:text-base"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-col gap-3">
                    <Link
                      href="/book-now"
                      className="inline-flex items-center justify-center rounded-full bg-[#1c1c1c] px-7 py-3.5 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.2em] text-white"
                    >
                      Book a Session
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center rounded-full border border-[#d8d1c5] bg-white px-7 py-3.5 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.2em] text-[#181818]"
                    >
                      Explore Services
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
                {activeCollection.gallery.map((src, index) => (
                  <FadeIn key={`${activeCollection.id}-${src}-${index}`} delay={index * 0.04} className="mb-4 break-inside-avoid">
                    <div className="group overflow-hidden rounded-[22px] bg-[#f6f2eb]">
                      <Image
                        src={src}
                        alt={`${activeCollection.label} image ${index + 1}`}
                        width={900}
                        height={1200}
                        className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                  </FadeIn>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* <section className="bg-[#faf8f4] px-4 py-18 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1360px] gap-8 rounded-[30px] border border-[#ebe4d9] bg-white p-8 md:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <FadeIn>
            <SectionLabel>Portfolio direction</SectionLabel>
            <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,5vw,4.5rem)] font-semibold leading-[0.96] text-[#171717]">
              A professional portfolio should guide attention, not compete for it.
            </h2>
            <p className="mt-5 max-w-3xl font-[family-name:var(--font-manrope)] text-base leading-8 text-[#616161] md:text-lg">
              This layout keeps the interaction intentional: clearer collections,
              better pacing, and a more premium visual rhythm throughout the page.
            </p>
          </FadeIn>

          <FadeIn delay={0.08} className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/book-now"
              className="inline-flex items-center justify-center rounded-full bg-[#1c1c1c] px-7 py-3.5 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.2em] text-white"
            >
              Work With Arul Kumar
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-[#d8d1c5] bg-white px-7 py-3.5 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.2em] text-[#181818]"
            >
              About the Studio
            </Link>
          </FadeIn>
        </div>
      </section> */}
    </main>
  );
}
