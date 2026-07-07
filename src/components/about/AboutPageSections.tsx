"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Events Covered" },
  { value: 25000, suffix: "+", label: "Photos Delivered" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

const processSteps = [
  {
    title: "Consultation",
    description: "We begin with your story, your people, and the feeling you want to remember.",
  },
  {
    title: "Planning",
    description: "Timelines, locations, light, and priorities are shaped into a calm plan.",
  },
  {
    title: "Capturing Moments",
    description: "Real emotions are documented gently, with direction only where it adds value.",
  },
  {
    title: "Professional Editing",
    description: "Every chosen frame is refined with a clean, timeless editorial finish.",
  },
  {
    title: "Delivering Memories",
    description: "Your gallery arrives polished, cohesive, and ready to relive for years.",
  },
];

const approachCards = [
  {
    title: "Natural Moments",
    description:
      "Authentic emotions always matter more than forced poses. The goal is to keep people comfortable and present.",
  },
  {
    title: "Attention to Detail",
    description:
      "Small gestures, family reactions, styling choices, and quiet in-between moments are treated as part of the story.",
  },
  {
    title: "Timeless Editing",
    description:
      "Color, contrast, and skin tones are kept elegant and balanced so the photographs still feel beautiful years later.",
  },
];

const faqs = [
  {
    question: "How early should I book?",
    answer:
      "For weddings and larger events, booking a few months in advance is ideal. Popular dates can fill quickly, so earlier is always safer.",
  },
  {
    question: "Do you travel?",
    answer:
      `Yes. ${siteConfig.photographer} is available across ${siteConfig.location} and can travel for destination celebrations as well.`,
  },
  {
    question: "How many edited photos do I receive?",
    answer:
      "It depends on the event length and coverage, but every gallery is curated carefully to deliver strong, meaningful photographs instead of unnecessary volume.",
  },
  {
    question: "How long is the delivery time?",
    answer:
      "Delivery timelines vary by project size, but the process always prioritizes consistent quality, careful editing, and a polished final gallery.",
  },
  {
    question: "Can I customize my package?",
    answer:
      "Yes. Coverage, shoot duration, event type, and add-ons can all be shaped around what matters most to you.",
  },
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-[#f3efe8] px-4 py-2 font-[family-name:var(--font-manrope)] text-xs font-semibold uppercase tracking-[0.22em] text-[#746b5d]">
      {children}
    </span>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      className="mt-10 inline-flex flex-col items-center gap-3 text-white/78"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    >
      <span className="font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.28em]">
        Scroll
      </span>
      <span className="flex h-12 w-7 items-start justify-center rounded-full border border-white/35 p-1">
        <span className="h-2.5 w-2.5 rounded-full bg-white" />
      </span>
    </motion.div>
  );
}

function AnimatedStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const totalFrames = 40;
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = frame / totalFrames;
      setCount(Math.round(value * progress));

      if (frame >= totalFrames) {
        window.clearInterval(timer);
        setCount(value);
      }
    }, 28);

    return () => window.clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-[22px] border border-[#e8e1d6] bg-white px-6 py-7 text-center shadow-[0_12px_30px_rgba(30,24,18,0.05)]"
    >
      <p className="font-[family-name:var(--font-cormorant)] text-5xl font-semibold leading-none text-[#171717] md:text-6xl">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="mt-3 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.18em] text-[#6c665d]">
        {label}
      </p>
    </motion.div>
  );
}

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-[22px] border border-[#e8e1d6] bg-white">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[#1b1b1b]">
          {question}
        </span>
        <span className="text-2xl text-[#7c6d55]">{open ? "−" : "+"}</span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 font-[family-name:var(--font-manrope)] text-base leading-8 text-[#616161]">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

export function AboutPageSections() {
  const [openFaq, setOpenFaq] = useState(0);
  const behindTheScenes = [
    images.aboutGallery[0],
    images.aboutGallery[2],
    images.aboutGallery[4],
    images.aboutGallery[6],
    images.aboutGallery[7],
    images.aboutGallery[8],
    images.aboutGallery[9],
  ];

  return (
    <main className="bg-white text-[#1c1c1c]">
      <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#15110d]">
        <Image
          src={images.aboutGallery[10]}
          alt="Portrait of photographer Arul Kumar"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,12,10,0.28)_0%,rgba(14,12,10,0.44)_40%,rgba(14,12,10,0.68)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1240px] flex-col items-center justify-center px-6 pb-12 pt-28 text-center text-white md:px-10">
          <FadeIn className="max-w-4xl">
            <p className="font-[family-name:var(--font-manrope)] text-xs font-semibold uppercase tracking-[0.34em] text-white/76">
              About the photographer
            </p>
            <h1 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(4rem,10vw,7rem)] font-semibold leading-[0.92]">
              Every Moment Has a Story.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl font-[family-name:var(--font-manrope)] text-base leading-8 text-white/84 md:text-lg">
              I believe every celebration deserves to be remembered through timeless
              photographs that capture genuine emotions.
            </p>
          </FadeIn>

          <ScrollIndicator />
        </div>
      </section>

      <section className="px-4 py-18 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1360px] gap-12 lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <FadeIn>
            <div className="overflow-hidden rounded-[28px] bg-[#f6f2eb]">
              <Image
                src={images.aboutGallery[11]}
                alt="Photographer portrait"
                width={1418}
                height={945}
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <SectionLabel>My story</SectionLabel>
            <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,6vw,5rem)] font-semibold leading-[0.95] text-[#171717]">
              A journey built on emotion, trust, and storytelling.
            </h2>
            <div className="mt-6 space-y-5 font-[family-name:var(--font-manrope)] text-base leading-8 text-[#616161] md:text-lg">
              <p>
                Photography began as a curiosity for human emotion, the quiet look
                between two people, the joy in a family gathering, the details that
                become meaningful only after the day has passed.
              </p>
              <p>
                Over time, that curiosity became a profession. Weddings, portraits,
                and celebrations revealed the same truth again and again: people do
                not just want pictures, they want to feel their memories preserved.
              </p>
              <p>
                Today, every session is approached with patience, calm direction,
                and a commitment to creating images that remain elegant long after
                trends fade.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#faf8f4] px-4 py-18 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1360px]">
          <FadeIn className="text-center">
            <SectionLabel>Experience</SectionLabel>
            <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,5vw,4.5rem)] font-semibold text-[#171717]">
              Confidence built through years behind the lens.
            </h2>
          </FadeIn>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <AnimatedStat key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-4 py-18 md:px-8 md:py-24 lg:px-12">
        <div className="absolute inset-0">
          <Image
            src={images.aboutGallery[3]}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            aria-hidden
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,16,13,0.9)_0%,rgba(18,16,13,0.66)_45%,rgba(18,16,13,0.74)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1240px] text-white">
          <FadeIn className="max-w-4xl">
            <SectionLabel>Photography philosophy</SectionLabel>
            <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,6vw,5rem)] font-semibold leading-[0.96] text-white">
              Photography is about preserving feelings, not simply taking pictures.
            </h2>
            <p className="mt-6 max-w-3xl font-[family-name:var(--font-manrope)] text-base leading-8 text-white/82 md:text-lg">
              Every wedding, celebration, and event carries its own rhythm. The role
              of the photographer is to notice what is fleeting, protect what is
              meaningful, and shape it into a visual story that still feels alive
              years later.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-18 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1360px]">
          <FadeIn className="text-center">
            <SectionLabel>How I work</SectionLabel>
            <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,5vw,4.5rem)] font-semibold text-[#171717]">
              A calm process from first conversation to final gallery.
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.06}>
                <div className="relative h-full rounded-[24px] border border-[#e8e1d6] bg-white px-6 py-7">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3efe8] font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#6d5c45]">
                      {index + 1}
                    </span>
                    <div className="h-px flex-1 bg-[#e8e1d6]" />
                  </div>
                  <h3 className="mt-6 font-[family-name:var(--font-manrope)] text-lg font-semibold text-[#1b1b1b]">
                    {step.title}
                  </h3>
                  <p className="mt-3 font-[family-name:var(--font-manrope)] text-sm leading-7 text-[#666] md:text-base">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f4] px-4 py-18 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1360px]">
          <FadeIn className="text-center">
            <SectionLabel>Behind the scenes</SectionLabel>
            <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,5vw,4.5rem)] font-semibold text-[#171717]">
              The craft behind the final frames.
            </h2>
          </FadeIn>

          <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {behindTheScenes.map((src, index) => (
              <FadeIn key={`${src}-${index}`} delay={index * 0.05} className="mb-4 break-inside-avoid">
                <div className="group overflow-hidden rounded-[22px] bg-white">
                  <Image
                    src={src}
                    alt={`Behind the scenes ${index + 1}`}
                    width={900}
                    height={1200}
                    className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-18 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1360px]">
          <FadeIn className="text-center">
            <SectionLabel>My approach</SectionLabel>
            <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,5vw,4.5rem)] font-semibold text-[#171717]">
              Refined enough to feel premium, gentle enough to feel natural.
            </h2>
          </FadeIn>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {approachCards.map((card, index) => (
              <FadeIn key={card.title} delay={index * 0.06}>
                <div className="h-full rounded-[24px] border border-[#e8e1d6] bg-white px-7 py-8 shadow-[0_12px_30px_rgba(30,24,18,0.04)]">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#171717]">
                    {card.title}
                  </h3>
                  <p className="mt-4 font-[family-name:var(--font-manrope)] text-base leading-8 text-[#616161]">
                    {card.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f4] px-4 py-18 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1120px] gap-8 rounded-[28px] border border-[#e8e1d6] bg-white p-8 md:p-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-center">
          <FadeIn>
            <div className="overflow-hidden rounded-[24px] bg-[#f3efe8]">
              <Image
                src={images.aboutGallery[1]}
                alt="Happy client portrait"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="font-[family-name:var(--font-cormorant)] text-7xl leading-none text-[#cdb490]">&ldquo;</p>
            <blockquote className="mt-2 font-[family-name:var(--font-cormorant)] text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-tight text-[#171717]">
              We felt understood from the first conversation, and the final images
              brought every emotion of the day back to life.
            </blockquote>
            <p className="mt-5 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.2em] text-[#7c7368]">
              Wedding Client
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-18 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[960px]">
          <FadeIn className="text-center">
            <SectionLabel>Frequently asked questions</SectionLabel>
            <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,5vw,4.5rem)] font-semibold text-[#171717]">
              Everything you may want to know before booking.
            </h2>
          </FadeIn>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => (
              <FadeIn key={faq.question} delay={index * 0.04}>
                <FaqItem
                  question={faq.question}
                  answer={faq.answer}
                  open={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-4 py-18 md:px-8 md:py-24 lg:px-12">
        <div className="absolute inset-0">
          <Image
            src={images.aboutGallery[5]}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            aria-hidden
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,13,10,0.6)_0%,rgba(15,13,10,0.74)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1120px] py-10 text-center text-white">
          <FadeIn>
            <SectionLabel>Final call</SectionLabel>
            <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,6vw,5rem)] font-semibold leading-[0.95] text-white">
              Let&apos;s Tell Your Story Together.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-[family-name:var(--font-manrope)] text-base leading-8 text-white/82 md:text-lg">
              If you are looking for a photographer who values emotion, elegance,
              and a seamless client experience, let&apos;s begin the conversation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/book-now"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.2em] text-[#191919]"
              >
                Book a Session
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.2em] text-white"
              >
                View Portfolio
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
