"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";

type ServiceItem = {
  id: string;
  title: string;
  short: string;
  description: string;
  deliverables: string[];
  hero: string;
  gallery: string[];
};

const serviceItems: ServiceItem[] = [
  {
    id: "event",
    title: "Event Photography",
    short: "Corporate events, stage functions, family gatherings, and celebrations documented with polish and clarity.",
    description:
      "Event coverage is designed to feel organized, elegant, and complete. From stage moments to guest interactions and atmosphere shots, the goal is to create a balanced story of the full occasion.",
    deliverables: [
      "Stage highlights and guest interactions",
      "Venue atmosphere and decor details",
      "Candid crowd moments with clean coverage",
    ],
    hero: images.servicesBg,
    gallery: [images.portfolioGallery[3], images.portfolioGallery[8], images.gallery1],
  },
  {
    id: "wedding",
    title: "Wedding Photography",
    short: "Emotional, cinematic, and timeless storytelling for rituals, portraits, and real in-between moments.",
    description:
      "Wedding photography blends guided elegance with genuine emotion. The focus stays on family connection, rituals, styling, and portraits that still feel personal rather than over-directed.",
    deliverables: [
      "Ceremony, rituals, and couple portraits",
      "Family storytelling with emotional candids",
      "A polished gallery ready for albums and sharing",
    ],
    hero: images.servicesGold,
    gallery: [images.heroBg, images.introBride, images.galleryHands],
  },
  {
    id: "newborn",
    title: "Newborn Photography",
    short: "Soft, careful sessions for babies and families with a gentle, minimal aesthetic.",
    description:
      "Newborn sessions move at a comfortable pace with attention to safety, softness, and natural family connection. The result is a calm gallery that feels warm and lasting.",
    deliverables: [
      "Baby portraits with soft styling",
      "Family-led frames with natural warmth",
      "Clean retouching with delicate tones",
    ],
    hero: images.bookNewborn,
    gallery: [images.newbornFooter, images.portfolioBanner1, images.portfolioGallery[12]],
  },
  {
    id: "portrait",
    title: "Portrait Photography",
    short: "Personal, bridal, and lifestyle portraits with natural expression and premium finishing.",
    description:
      "Portrait sessions are built around comfort and confidence. Whether traditional, editorial, or relaxed lifestyle imagery, the session is guided to feel expressive without looking forced.",
    deliverables: [
      "Natural posing and calm direction",
      "Individual, bridal, and editorial portraits",
      "Consistent color with timeless finishing",
    ],
    hero: images.servicesGreen,
    gallery: [images.aboutPortrait, images.eventsModel, images.portfolioGallery[9]],
  },
  {
    id: "fashion",
    title: "Fashion Photography",
    short: "Sharper styling, stronger framing, and a more editorial visual language for creators and brands.",
    description:
      "Fashion and model shoots are handled with stronger composition, styling awareness, and a visual approach that feels contemporary while staying clean and premium.",
    deliverables: [
      "Editorial portraits and fashion direction",
      "Location and styling-aware compositions",
      "Images suited for campaigns and socials",
    ],
    hero: images.eventsModel,
    gallery: [images.servicesGreen, images.portfolioGallery[0], images.portfolioGallery[6]],
  },
  {
    id: "product",
    title: "Product Photography",
    short: "Clear, attractive product imagery for businesses, catalogues, promotions, and digital campaigns.",
    description:
      "Product work focuses on shape, texture, clarity, and a polished presentation. The aim is to create frames that feel elevated and ready for professional brand use.",
    deliverables: [
      "Product-focused composition and lighting",
      "Brand-friendly editing and clean backgrounds",
      "Visual consistency across product sets",
    ],
    hero: images.portfolioFeature,
    gallery: [images.fabricatedBg, images.portfolioGalleryHero, images.galleryHands],
  },
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-[#f3efe8] px-4 py-2 font-[family-name:var(--font-manrope)] text-xs font-semibold uppercase tracking-[0.22em] text-[#746b5d]">
      {children}
    </span>
  );
}

export function ServicesPageSections() {
  const [activeId, setActiveId] = useState("event");
  const activeService = serviceItems.find((item) => item.id === activeId) ?? serviceItems[0];

  return (
    <main className="bg-white text-[#1d1d1d]">
      <section className="relative isolate overflow-hidden bg-[#17120e]">
        <Image
          src={activeService.hero}
          alt={activeService.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,11,0.78)_0%,rgba(18,14,11,0.56)_40%,rgba(18,14,11,0.4)_100%)]" />

        <div className="relative z-10 mx-auto grid min-h-[86svh] max-w-[1360px] items-end gap-12 px-4 pb-14 pt-30 md:px-8 md:pb-18 md:pt-34 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-12">
          <FadeIn className="max-w-3xl text-white">
            <SectionLabel>Services</SectionLabel>
            <h1 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3.3rem,8vw,6rem)] font-semibold leading-[0.94] text-white">
              Photography shaped around the kind of story you want to keep.
            </h1>
            <p className="mt-5 max-w-2xl font-[family-name:var(--font-manrope)] text-base leading-8 text-white/82 md:text-lg">
              Choose a category to explore how each type of shoot is approached,
              what it includes, and the style of images you can expect.
            </p>
          </FadeIn>

          <FadeIn delay={0.08} direction="left" className="hidden lg:block" />
        </div>
      </section>

      <section className="px-4 py-18 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-[380px_minmax(0,1fr)]">
          <FadeIn>
            <div className="rounded-[28px] border border-[#ebe4d9] bg-[#faf8f4] p-4">
              <div className="px-3 pb-4 pt-2">
                <SectionLabel>Categories</SectionLabel>
                <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-semibold leading-tight text-[#171717]">
                  Explore every type of session.
                </h2>
              </div>

              <div className="space-y-3">
                {serviceItems.map((item, index) => {
                  const isActive = item.id === activeId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveId(item.id)}
                      className={`w-full rounded-[22px] border px-5 py-5 text-left transition-all duration-300 ${
                        isActive
                          ? "border-[#d9ccb8] bg-white shadow-[0_14px_30px_rgba(30,24,18,0.06)]"
                          : "border-transparent bg-transparent hover:border-[#e7dfd3] hover:bg-white/70"
                      }`}
                      aria-pressed={isActive}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8d7f6b]">
                            {String(index + 1).padStart(2, "0")}
                          </p>
                          <h3 className="mt-2 font-[family-name:var(--font-manrope)] text-lg font-semibold text-[#1f1f1f]">
                            {item.title}
                          </h3>
                          <p className="mt-2 font-[family-name:var(--font-manrope)] text-sm leading-7 text-[#666]">
                            {item.short}
                          </p>
                        </div>
                        <span className={`mt-1 text-xl ${isActive ? "text-[#7b694a]" : "text-[#b6aa97]"}`}>
                          {isActive ? "−" : "+"}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid gap-6">
                <div className="grid gap-6 xl:grid-cols-[minmax(0,1.02fr)_320px]">
                  <div className="overflow-hidden rounded-[28px] bg-[#f6f2eb]">
                    <Image
                      src={activeService.hero}
                      alt={activeService.title}
                      width={1600}
                      height={1100}
                      className="h-[420px] w-full object-cover md:h-[520px]"
                    />
                  </div>

                  <div className="rounded-[28px] border border-[#ebe4d9] bg-white p-6">
                    <SectionLabel>Selected service</SectionLabel>
                    <h3 className="mt-5 font-[family-name:var(--font-cormorant)] text-4xl font-semibold leading-tight text-[#171717]">
                      {activeService.title}
                    </h3>
                    <p className="mt-4 font-[family-name:var(--font-manrope)] text-base leading-8 text-[#616161]">
                      {activeService.description}
                    </p>
                    <div className="mt-6 space-y-3">
                      {activeService.deliverables.map((item) => (
                        <div
                          key={item}
                          className="rounded-[18px] bg-[#faf8f4] px-4 py-4 font-[family-name:var(--font-manrope)] text-sm leading-7 text-[#555] md:text-base"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {activeService.gallery.map((src, index) => (
                    <div key={`${activeService.id}-${src}-${index}`} className="overflow-hidden rounded-[22px] bg-[#f6f2eb]">
                      <Image
                        src={src}
                        alt={`${activeService.title} sample ${index + 1}`}
                        width={900}
                        height={1100}
                        className="h-[280px] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="bg-[#faf8f4] px-4 py-18 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1360px]">
          <FadeIn className="grid gap-8 rounded-[30px] border border-[#ebe4d9] bg-white p-8 md:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-3xl">
              <SectionLabel>Booking support</SectionLabel>
              <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,5vw,4.5rem)] font-semibold leading-[0.96] text-[#171717]">
                Need help choosing the right type of coverage?
              </h2>
              <p className="mt-5 font-[family-name:var(--font-manrope)] text-base leading-8 text-[#616161] md:text-lg">
                Share your event, timeline, or vision and we can shape the most suitable
                session around it.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/book-now"
                className="inline-flex items-center justify-center rounded-full bg-[#1c1c1c] px-7 py-3.5 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.2em] text-white"
              >
                Start Booking
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center rounded-full border border-[#d8d1c5] bg-white px-7 py-3.5 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.2em] text-[#181818]"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
