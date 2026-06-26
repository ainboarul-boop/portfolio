"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { images } from "@/lib/images";
import { serviceHighlights, siteConfig } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden md:min-h-[952px]">
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

      <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-4 pb-16 pt-24 md:min-h-[952px] md:pb-24">
        <FadeIn className="relative w-full max-w-[957px]">
          <div className="mx-auto rounded-[60px] bg-white/15 px-6 py-8 backdrop-blur-[2px] md:rounded-[105px] md:px-12 md:py-10">
            <Image
              src={images.logo}
              alt="AINBOW CREATIVE STUDIO logo"
              width={900}
              height={582}
              className="mx-auto h-auto w-full max-w-[700px] object-contain"
              priority
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-8 text-center md:mt-10">
          <p className="font-[family-name:var(--font-raleway)] text-2xl font-extralight uppercase tracking-wide text-white md:text-[67px]">
            {siteConfig.tagline}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

export function IntroductionSection() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-8 px-6 py-12 md:px-10 md:py-16 lg:px-12">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-medium text-black md:text-[50px]">
              Introduction
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-[family-name:var(--font-manrope)] text-base leading-relaxed text-black md:text-[23px]">
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
            <div className="mt-4 border-t border-[#f2f2f2] pt-8">
              <h3 className="font-[family-name:var(--font-manrope)] text-3xl font-medium text-black md:text-[50px]">
                Contact Information
              </h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="font-[family-name:var(--font-manrope)] text-base font-medium text-black md:text-xl">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-[family-name:var(--font-manrope)] text-lg text-black transition-colors hover:text-[#797c86] md:text-[23px]"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-manrope)] text-base font-medium text-black md:text-xl">
                    Phone Number
                  </p>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="font-[family-name:var(--font-manrope)] text-lg text-black transition-colors hover:text-[#797c86] md:text-[23px]"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
              <Link
                href="/book-now"
                className="mt-8 flex w-full items-center justify-center rounded-[10px] border border-[#2f2f37] bg-[#1c1c21] px-8 py-4 font-[family-name:var(--font-manrope)] text-lg font-medium text-white transition-colors hover:bg-[#29292c] md:py-[18px] md:text-[18px]"
              >
                Let&apos;s Work
              </Link>
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="left" className="relative min-h-[400px] lg:min-h-[857px]">
          <Image
            src={images.introBride}
            alt="Traditional Indian bridal portrait photography"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </FadeIn>
      </div>
    </section>
  );
}

export function ServicesPreviewSection() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
        <FadeIn className="relative min-h-[400px] lg:min-h-[857px] lg:order-1">
          <Image
            src={images.eventsModel}
            alt="Event photography portrait in traditional attire"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </FadeIn>

        <div
          className="relative flex flex-col justify-center px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:order-2"
          style={{
            backgroundImage: `url(${images.eventsBg})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <FadeIn>
            <p className="font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase text-black md:text-base">
              Services
            </p>
            <h2 className="mt-1 font-[family-name:var(--font-manrope)] text-3xl font-semibold uppercase text-black md:text-[48px]">
              My Photography Services
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-8">
            <h3 className="font-[family-name:var(--font-manrope)] text-2xl font-semibold uppercase text-black md:text-[34px]">
              Events
            </h3>
            <p className="mt-4 font-[family-name:var(--font-manrope)] text-base leading-relaxed text-black">
              Our event photography service is dedicated to capturing the magic
              of your special occasions. Whether it&apos;s a wedding, corporate
              event, or milestone celebration, we&apos;re there to document every
              heartfelt moment. We blend into the background, ensuring natural
              and candid shots that reflect the emotions of the day.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-8">
            <p className="font-[family-name:var(--font-manrope)] text-base font-medium text-black">
              Service Highlights
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {serviceHighlights.map((item) => (
                <li
                  key={item}
                  className="rounded-[10px] border border-[#1c1c21] px-4 py-4 font-[family-name:var(--font-manrope)] text-sm uppercase text-black md:px-5 md:text-base"
                >
                  {item}
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
    <section className="relative bg-[#f2f2f2] py-16 md:py-24">
      <FadeIn className="mx-auto max-w-[900px] px-6">
        <Image
          src={images.logoWatermark}
          alt="AINBOW CREATIVE STUDIO watermark"
          width={868}
          height={562}
          className="mx-auto h-auto w-full opacity-20"
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
    { src: images.gallery3, alt: "Formal evening wear couple portrait" },
  ];

  return (
    <section className="bg-[#29292c]">
      <FadeIn>
        <div className="relative mx-auto max-w-[1600px]">
          <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[1600/952]">
            <Image
              src={galleryItems[0].src}
              alt={galleryItems[0].alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              sizes="100vw"
            />
          </div>
        </div>
      </FadeIn>

      <div className="mx-auto grid max-w-[1600px] gap-4 px-4 py-4 sm:grid-cols-3 md:gap-6 md:px-8 md:py-8">
        {galleryItems.slice(1).map((item, i) => (
          <FadeIn key={item.src} delay={i * 0.08}>
            <div className="relative aspect-[427/350] overflow-hidden rounded-[33px]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
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
