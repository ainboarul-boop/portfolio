"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { images } from "@/lib/images";
import { serviceHighlights, siteConfig } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative min-h-screen overflow-hidden md:min-h-screen">
      <Image
        src={images.heroBg}
        alt="Professional wedding photography hero by Arulkumar"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <Image
        src={images.heroOverlay}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        aria-hidden
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pb-16 pt-20 md:pb-24">
        <FadeIn className="relative w-full max-w-[957px]">
          <div className="mx-auto rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl px-6 py-8 shadow-2xl md:rounded-4xl md:px-12 md:py-12">
            <Image
              src={images.logo}
              alt="AINBOW CREATIVE STUDIO logo"
              width={900}
              height={582}
              className="mx-auto h-auto w-full max-w-[600px] md:max-w-[700px] object-contain"
              priority
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-8 text-center md:mt-12">
          <p className="font-[family-name:var(--font-raleway)] text-xl font-light uppercase tracking-[0.15em] text-white md:text-5xl lg:text-6xl drop-shadow-lg">
            {siteConfig.tagline}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

export function IntroductionSection() {
  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 pb-12 md:pb-20 lg:pb-24">
      <div className="mx-auto grid max-w-[1600px] gap-0 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col justify-center gap-8 px-6 py-12 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <FadeIn>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#6366f1] mb-2">About</span>
            <h2 className="font-[family-name:var(--font-manrope)] text-4xl font-bold text-[#0f0f1a] md:text-5xl lg:text-6xl leading-tight">Introduction</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-[family-name:var(--font-manrope)] text-base leading-relaxed text-gray-700 md:text-lg lg:text-xl">
              My journey as a photographer has been a lifelong quest to capture
              the extraordinary in the ordinary, to freeze fleeting moments in
              time, and to share the world&apos;s beauty as I see it. Based in
              the enchanting landscapes of the TN, I find inspiration in every
              corner of this diverse and vibrant country. Join me as we embark
              on a visual odyssey, where each photograph tells a story, and every
              frame is a piece of my heart.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-8 border-t border-gray-300 pt-10">
              <h3 className="font-[family-name:var(--font-manrope)] text-2xl font-bold text-[#0f0f1a] md:text-3xl lg:text-4xl">
                Contact Information
              </h3>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
                  <p className="font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-wide text-gray-600 mb-3">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-[family-name:var(--font-manrope)] text-base font-medium text-[#6366f1] hover:text-[#818cf8] transition-colors break-all"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
                  <p className="font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-wide text-gray-600 mb-3">
                    Phone Number
                  </p>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="font-[family-name:var(--font-manrope)] text-base font-medium text-[#6366f1] hover:text-[#818cf8] transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
              <Link
                href="/book-now"
                className="mt-10 flex w-full items-center justify-center rounded-xl border-2 border-transparent bg-gradient-to-r from-[#6366f1] to-[#818cf8] px-8 py-4 font-[family-name:var(--font-manrope)] text-base font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all md:text-lg"
              >
                Let&apos;s Work Together
              </Link>
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="left" className="px-6 md:px-10 lg:px-14 relative min-h-[500px] lg:block lg:min-h-[700px] lg:mx-auto lg:max-w-2xl">
          <Image
            src={images.introBride}
            alt="Traditional Indian bridal portrait photography"
            fill
            className="object-cover rounded-2xl !relative"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </FadeIn>
      </div>
    </section>
  );
}

export function ServicesPreviewSection() {
  return (
    <section className="relative py-12 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto grid max-w-[1600px] gap-0 lg:grid-cols-2 lg:gap-8">
        <FadeIn className="relative hidden min-h-[500px] lg:block lg:min-h-[700px] lg:order-1 rounded-2xl overflow-hidden lg:mx-auto lg:max-w-2xl">
          <Image
            src={images.eventsModel}
            alt="Event photography portrait in traditional attire"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </FadeIn>

        <div className="relative flex flex-col justify-center px-6 md:px-10 lg:px-14 lg:order-2">
          <FadeIn>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#6366f1] mb-2">Services</span>
            <h2 className="font-[family-name:var(--font-manrope)] text-4xl font-bold text-[#0f0f1a] md:text-5xl lg:text-6xl leading-tight">
              My Photography Services
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-10">
            <h3 className="font-[family-name:var(--font-manrope)] text-2xl font-bold text-[#0f0f1a] md:text-3xl lg:text-4xl">
              Events
            </h3>
            <p className="mt-6 font-[family-name:var(--font-manrope)] text-base leading-relaxed text-gray-700 md:text-lg">
              Our event photography service is dedicated to capturing the magic
              of your special occasions. Whether it&apos;s a wedding, corporate
              event, or milestone celebration, we&apos;re there to document every
              heartfelt moment. We blend into the background, ensuring natural
              and candid shots that reflect the emotions of the day.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-10">
            <p className="font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-wide text-gray-600 mb-4">
              Service Highlights
            </p>
            <ul className="flex flex-col gap-3">
              {serviceHighlights.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-[#6366f1]/30 bg-[#6366f1]/5 px-5 py-4 font-[family-name:var(--font-manrope)] text-sm font-medium uppercase text-[#0f0f1a] hover:bg-[#6366f1]/10 hover:border-[#6366f1]/50 transition-all md:text-base"
                >
                  ✓ {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function LogoBreakSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-1/2 h-96 w-96 rounded-full bg-gradient-to-r from-[#6366f1]/20 to-transparent blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-gradient-to-l from-[#6366f1]/20 to-transparent blur-3xl" />
      </div>
      <FadeIn className="relative mx-auto max-w-[900px] px-6">
        <Image
          src={images.logoWatermark}
          alt="AINBOW CREATIVE STUDIO watermark"
          width={868}
          height={562}
          className="mx-auto h-auto w-full opacity-100"
        />
      </FadeIn>
    </section>
  );
}

export function GallerySection() {
  const galleryItems = [
    { src: images.galleryHands, alt: "Wedding mehndi and rings close-up photography", full: true },
    { src: images.gallery1, alt: "Traditional wedding couple portrait" },
    { src: images.gallery2, alt: "Intimate couple outdoor photography" },
    { src: images.gallery3, alt: "Candid family moments photography" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] py-0">
      <FadeIn>
        <div className="relative mx-auto max-w-[1600px]">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-b-3xl md:aspect-[1600/952]">
            <Image
              src={galleryItems[0].src}
              alt={galleryItems[0].alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="100vw"
            />
          </div>
        </div>
      </FadeIn>

      <div className="mx-auto grid max-w-[1600px] gap-4 px-4 py-8 sm:grid-cols-3 md:gap-6 md:px-8 md:py-12">
        {galleryItems.slice(1).map((item, i) => (
          <FadeIn key={item.src} delay={i * 0.08}>
            <div className="group relative aspect-[427/350] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div className="relative mx-auto max-w-[1600px]">
          <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[1600/967]">
            <Image
              src={images.fabricatedBg}
              alt="Detailed bridal jewelry and portrait photography"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export function NewbornSection() {
  return (
    <section className="relative">
      <div className="relative aspect-[1600/968] w-full overflow-hidden">
        <Image
          src={images.newbornFooter}
          alt="Newborn baby photography on terracotta background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
