"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { images } from "@/lib/images";
import { serviceHighlights, siteConfig } from "@/lib/site";

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[26px] border border-white/12 bg-white/10 px-5 py-4 backdrop-blur-md">
      <p className="font-[family-name:var(--font-antonio)] text-3xl uppercase tracking-[0.12em] text-white md:text-4xl">
        {value}
      </p>
      <p className="mt-2 font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
        {label}
      </p>
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#0c0e13] text-white">
      <div className="absolute inset-0">
        <div className="absolute left-[-8%] top-[-12%] h-[30rem] w-[30rem] rounded-full bg-[#ab8452]/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[12%] h-[26rem] w-[26rem] rounded-full bg-[#4f6078]/24 blur-3xl" />
        <div className="absolute bottom-[-14%] left-[20%] h-[24rem] w-[24rem] rounded-full bg-[#1d273a]/28 blur-3xl" />
      </div>
      <Image
        src={images.heroOverlay}
        alt=""
        fill
        className="pointer-events-none object-cover opacity-20 mix-blend-screen"
        sizes="100vw"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-[1600px] items-center gap-10 px-4 pb-12 pt-28 md:px-8 md:pb-16 md:pt-32 lg:grid-cols-[minmax(0,1.02fr)_minmax(430px,0.98fr)] lg:px-16 lg:pb-18">
        <div className="max-w-3xl">
          <FadeIn>
            <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-2 font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.34em] text-white/78 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#d7b56d] shadow-[0_0_14px_rgba(215,181,109,0.95)]" />
              Professional photographer in Tamil Nadu
            </span>
          </FadeIn>

          <FadeIn delay={0.08} className="mt-6">
            <p className="font-[family-name:var(--font-arimo)] text-sm font-bold uppercase tracking-[0.36em] text-white/62 md:text-base">
              {siteConfig.subtitle}
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-antonio)] text-[clamp(3.4rem,10vw,8.1rem)] uppercase leading-[0.92] tracking-[0.06em]">
              {siteConfig.photographer}
            </h1>
            <p className="mt-5 max-w-2xl font-[family-name:var(--font-manrope)] text-base leading-8 text-white/76 md:text-lg">
              Weddings, receptions, birthdays, naming ceremonies, portraits,
              maternity, newborn, fashion, products, and every event that
              deserves images with emotion, polish, and timeless style.
            </p>
          </FadeIn>

          <FadeIn delay={0.14} className="mt-7">
            <div className="w-full max-w-[420px] rounded-[30px] border border-white/12 bg-white/10 px-5 py-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl md:px-6">
              <Image
                src={images.logoLight}
                alt="AINBOW CREATIVE STUDIO logo"
                width={900}
                height={582}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.18} className="mt-7">
            <p className="font-[family-name:var(--font-raleway)] text-lg font-light uppercase tracking-[0.18em] text-white/90 md:text-3xl">
              {siteConfig.tagline}
            </p>
          </FadeIn>

          <FadeIn delay={0.22} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/book-now"
              className="inline-flex items-center justify-center rounded-full bg-[#d7b56d] px-7 py-4 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.28em] text-[#101117] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(215,181,109,0.28)]"
            >
              Book Arul Kumar
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/8 px-7 py-4 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.28em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/12"
            >
              See Recent Work
            </Link>
          </FadeIn>

          <FadeIn delay={0.28} className="mt-8 grid gap-4 sm:grid-cols-3">
            <HeroStat value="5+" label="Years of experience" />
            <HeroStat value="All" label="Shoot categories" />
            <HeroStat value="TN" label="Available across Tamil Nadu" />
          </FadeIn>
        </div>

        <FadeIn delay={0.1} direction="left" className="relative mx-auto w-full max-w-[620px] lg:max-w-none">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          >
            <motion.div
              className="absolute -left-4 top-[10%] hidden rounded-[26px] border border-white/12 bg-[#11131a]/70 px-5 py-4 shadow-[0_24px_60px_rgba(0,0,0,0.34)] backdrop-blur-md md:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <p className="font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.34em] text-white/56">
                Signature style
              </p>
              <p className="mt-2 font-[family-name:var(--font-antonio)] text-2xl uppercase tracking-[0.16em] text-white">
                Candid x Editorial
              </p>
            </motion.div>

            <div className="grid grid-cols-[1.04fr_0.96fr] gap-4 md:gap-5">
              <motion.div
                className="rounded-[30px] border border-white/10 bg-white/6 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.36)] backdrop-blur-sm"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Image
                  src={images.heroBg}
                  alt="Wedding couple portrait by Arul Kumar"
                  width={820}
                  height={1180}
                  priority
                  className="h-auto w-full rounded-[22px] object-cover"
                />
              </motion.div>
              <div className="flex flex-col gap-4 md:gap-5">
                <motion.div
                  className="rounded-[28px] border border-white/10 bg-white/6 p-3 shadow-[0_26px_70px_rgba(0,0,0,0.28)] backdrop-blur-sm"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.2 }}
                >
                  <Image
                    src={images.introBride}
                    alt="Traditional bridal portrait photography"
                    width={620}
                    height={820}
                    className="h-auto w-full rounded-[20px] object-cover"
                  />
                </motion.div>
                <motion.div
                  className="rounded-[28px] border border-white/10 bg-white/6 p-3 shadow-[0_26px_70px_rgba(0,0,0,0.28)] backdrop-blur-sm"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 8.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                >
                  <Image
                    src={images.galleryHands}
                    alt="Wedding detail photography"
                    width={620}
                    height={520}
                    className="h-auto w-full rounded-[20px] object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}

export function IntroductionSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f2ea] py-14 text-[#16181f] md:py-18 lg:py-20">
      <div className="relative mx-auto grid max-w-[1600px] gap-10 px-4 md:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-16">
        <FadeIn direction="right" className="relative">
          <div className="relative overflow-hidden rounded-[34px] border border-[#17181f]/8 bg-white p-3 shadow-[0_24px_60px_rgba(26,26,36,0.08)]">
            <Image
              src={images.introBride}
              alt="Traditional Indian bridal portrait photography"
              width={900}
              height={1200}
              className="h-auto w-full rounded-[26px] object-cover"
            />
          </div>
        </FadeIn>

        <div className="flex flex-col justify-center">
          <FadeIn>
            <span className="inline-flex w-fit rounded-full border border-[#17181f]/12 px-4 py-2 font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.32em] text-[#6a6458]">
              About Arul Kumar
            </span>
            <h2 className="mt-5 font-[family-name:var(--font-antonio)] text-[clamp(2.6rem,6vw,5rem)] uppercase leading-[0.96] tracking-[0.06em]">
              Every shoot deserves a calm eye and a strong finish.
            </h2>
          </FadeIn>

          <FadeIn delay={0.08} className="mt-5 max-w-2xl">
            <p className="font-[family-name:var(--font-manrope)] text-base leading-8 text-[#4c4b53] md:text-lg">
              Arul Kumar works across weddings, family functions, receptions,
              baby shoots, portraits, fashion, and branded sessions. The goal is
              simple: make clients feel comfortable, guide them well, and deliver
              images that feel elegant for years.
            </p>
          </FadeIn>

          <FadeIn delay={0.14} className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[24px] border border-[#17181f]/10 bg-white px-6 py-5 shadow-[0_18px_40px_rgba(20,20,26,0.06)]">
              <p className="font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.32em] text-[#8b846f]">
                Email
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-3 block font-[family-name:var(--font-antonio)] text-2xl uppercase tracking-[0.06em] text-[#16181f] transition-colors hover:text-[#ab8452]"
              >
                {siteConfig.email}
              </a>
            </div>
            <div className="rounded-[24px] border border-[#17181f]/10 bg-white px-6 py-5 shadow-[0_18px_40px_rgba(20,20,26,0.06)]">
              <p className="font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.32em] text-[#8b846f]">
                Phone
              </p>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="mt-3 block font-[family-name:var(--font-antonio)] text-2xl uppercase tracking-[0.06em] text-[#16181f] transition-colors hover:text-[#ab8452]"
              >
                {siteConfig.phone}
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function ServicesPreviewSection() {
  return (
    <section className="relative overflow-hidden bg-[#12141b] py-14 text-white md:py-18 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,181,109,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(77,95,127,0.22),transparent_36%)]" />
      <div className="relative mx-auto grid max-w-[1600px] gap-10 px-4 md:px-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:px-16">
        <div className="flex flex-col justify-center">
          <FadeIn>
            <span className="inline-flex w-fit rounded-full border border-white/14 px-4 py-2 font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.32em] text-white/65">
              Services
            </span>
            <h2 className="mt-5 font-[family-name:var(--font-antonio)] text-[clamp(2.6rem,6vw,5rem)] uppercase leading-[0.96] tracking-[0.06em]">
              Photography for functions, events, portraits, and more.
            </h2>
            <p className="mt-5 max-w-2xl font-[family-name:var(--font-manrope)] text-base leading-8 text-white/72 md:text-lg">
              From intimate family moments to large celebrations, every session
              is planned to feel smooth and every final frame is edited with care.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-8 grid gap-4">
            {serviceHighlights.slice(0, 3).map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-[22px] border border-white/10 bg-white/6 px-5 py-4 backdrop-blur-sm"
              >
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d7b56d] font-[family-name:var(--font-manrope)] text-xs font-bold text-[#16181f]">
                  {index + 1}
                </span>
                <p className="font-[family-name:var(--font-manrope)] text-sm leading-7 text-white/76 md:text-base">
                  {item}
                </p>
              </div>
            ))}
          </FadeIn>

          <FadeIn delay={0.16} className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center rounded-full bg-white px-7 py-4 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.28em] text-[#11131a] transition-all duration-300 hover:-translate-y-1"
            >
              Explore services
            </Link>
          </FadeIn>
        </div>

        <FadeIn direction="left" className="relative">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-white/6 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-sm">
              <Image
                src={images.eventsModel}
                alt="Event photography portrait in traditional attire"
                width={760}
                height={1120}
                className="h-auto w-full rounded-[20px] object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-[28px] border border-white/10 bg-white/6 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-sm">
                <Image
                  src={images.gallery1}
                  alt="Traditional wedding couple portrait"
                  width={760}
                  height={920}
                  className="h-auto w-full rounded-[20px] object-cover"
                />
              </div>
              <div className="rounded-[24px] border border-[#d7b56d]/28 bg-[#171a24] px-6 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
                <p className="font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.32em] text-[#d7b56d]">
                  Signature promise
                </p>
                <p className="mt-3 font-[family-name:var(--font-manrope)] text-sm leading-7 text-white/74 md:text-base">
                  Clean planning, easy communication, and galleries that feel
                  elegant instead of over-processed.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function LogoBreakSection() {
  return (
    <section className="relative overflow-hidden bg-[#f1ede6] py-10 md:py-12">
      <FadeIn className="relative mx-auto max-w-[920px] px-6">
        <div className="rounded-[32px] border border-[#16181f]/8 bg-white/78 px-6 py-8 shadow-[0_28px_60px_rgba(30,30,36,0.08)] backdrop-blur-sm md:px-10">
          <Image
            src={images.logoWatermark}
            alt="AINBOW CREATIVE STUDIO watermark"
            width={868}
            height={562}
            className="mx-auto h-auto w-full"
          />
        </div>
      </FadeIn>
    </section>
  );
}

export function GallerySection() {
  const galleryItems = [
    {
      src: images.galleryHands,
      alt: "Wedding mehndi and rings close-up photography",
      width: 1600,
      height: 952,
      className: "md:col-span-2",
    },
    {
      src: images.gallery2,
      alt: "Intimate couple outdoor photography",
      width: 820,
      height: 980,
    },
    {
      src: images.gallery3,
      alt: "Candid family moments photography",
      width: 820,
      height: 920,
    },
    {
      src: images.fabricatedBg,
      alt: "Detailed bridal jewelry and portrait photography",
      width: 1600,
      height: 967,
      className: "md:col-span-2",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0d1016] px-4 py-14 text-white md:px-8 md:py-18 lg:px-16 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,181,109,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(70,83,110,0.22),transparent_36%)]" />
      <div className="relative mx-auto max-w-[1600px]">
        <FadeIn className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/14 px-4 py-2 font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.32em] text-white/65">
            Featured frames
          </span>
          <h2 className="mt-5 font-[family-name:var(--font-antonio)] text-[clamp(2.4rem,6vw,4.8rem)] uppercase leading-[0.96] tracking-[0.06em]">
            A curated gallery that feels premium at first glance.
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {galleryItems.map((item, index) => (
            <FadeIn
              key={item.src}
              delay={index * 0.06}
              className={item.className ?? ""}
            >
              <div className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/6 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.26)] backdrop-blur-sm">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="h-auto w-full rounded-[22px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NewbornSection() {
  return (
    <section className="relative min-h-[72svh] overflow-hidden bg-[#201912]">
      <Image
        src={images.newbornFooter}
        alt="Newborn baby photography on terracotta background"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(21,14,10,0.84)_0%,rgba(21,14,10,0.42)_44%,rgba(21,14,10,0.22)_100%)]" />
      <div className="relative z-10 mx-auto flex min-h-[72svh] max-w-[1600px] items-end px-4 py-12 md:px-8 md:py-16 lg:px-16">
        <FadeIn className="max-w-2xl rounded-[30px] border border-white/10 bg-black/22 px-6 py-7 text-white backdrop-blur-md md:px-8">
          <p className="font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.32em] text-white/62">
            Newborn sessions
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-antonio)] text-[clamp(2.2rem,5vw,4.2rem)] uppercase leading-[0.96] tracking-[0.06em]">
            Gentle images with a timeless finish.
          </h2>
          <p className="mt-4 font-[family-name:var(--font-manrope)] text-base leading-8 text-white/78 md:text-lg">
            Soft styling, careful posing, and a comfortable pace for baby and family.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
