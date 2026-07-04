import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { SiteShell } from "@/components/layout/SiteShell";
import { FadeIn } from "@/components/ui/FadeIn";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Meet Arul Kumar, a professional photographer and visual storyteller based in Tamil Nadu, capturing weddings, functions, portraits, newborn sessions, collaborations, and premium frames.",
  alternates: { canonical: "/about" },
};

const strengths = [
  "Weddings and receptions with emotional storytelling",
  "Family functions and events with clean candid coverage",
  "Portrait, maternity, newborn, and fashion sessions",
  "Polished color, elegant delivery, and easy client communication",
];

export default function AboutPage() {
  return (
    <SiteShell headerOverlay>
      <main className="bg-[#11131a] text-white">
        <section className="relative flex min-h-[100svh] items-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,181,109,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(76,90,118,0.22),transparent_36%)]" />
          <div className="relative mx-auto grid w-full max-w-[1600px] gap-12 px-4 py-24 pt-30 md:px-8 md:py-28 md:pt-34 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-16">
            <div className="flex flex-col justify-center">
              <FadeIn>
                <span className="inline-flex w-fit rounded-full border border-white/14 px-4 py-2 font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.32em] text-white/68">
                  About the photographer
                </span>
                <p className="mt-6 font-[family-name:var(--font-arimo)] text-sm font-bold uppercase tracking-[0.34em] text-white/56 md:text-base">
                  {siteConfig.subtitle}
                </p>
                <h1 className="mt-4 font-[family-name:var(--font-antonio)] text-[clamp(3.2rem,9vw,7rem)] uppercase leading-[0.92] tracking-[0.06em]">
                  {siteConfig.photographer}
                </h1>
                <p className="mt-6 max-w-2xl font-[family-name:var(--font-manrope)] text-base leading-8 text-white/76 md:text-lg">
                  Arul Kumar creates photographs that feel elegant, emotional,
                  and honest. From wedding rituals and birthday functions to
                  maternity portraits and product shoots, every session is
                  handled with patience, direction, and respect for the story.
                </p>
              </FadeIn>

              <FadeIn delay={0.1} className="mt-8 grid gap-4 md:grid-cols-2">
                {strengths.map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-white/10 bg-white/6 px-5 py-5 backdrop-blur-sm"
                  >
                    <p className="font-[family-name:var(--font-manrope)] text-sm leading-7 text-white/76 md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </FadeIn>

              <FadeIn delay={0.16} className="mt-8">
                <Link
                  href="/book-now"
                  className="inline-flex items-center rounded-full bg-[#d7b56d] px-7 py-4 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.28em] text-[#11131a] transition-all duration-300 hover:-translate-y-1"
                >
                  Book a session
                </Link>
              </FadeIn>
            </div>

            <FadeIn direction="left" className="relative">
              <div className="grid gap-5 md:grid-cols-[1.02fr_0.98fr]">
                <div className="rounded-[34px] border border-white/10 bg-white/6 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.34)] backdrop-blur-sm">
                  <Image
                    src={images.aboutHero}
                    alt="Arul Kumar professional photography portrait"
                    width={1279}
                    height={784}
                    className="h-auto w-full rounded-[26px] object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <div className="rounded-[30px] border border-white/10 bg-white/6 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-sm">
                    <Image
                      src={images.aboutPortrait}
                      alt="Traditional bridal portrait by Arul Kumar"
                      width={1418}
                      height={945}
                      className="h-auto w-full rounded-[22px] object-cover"
                    />
                  </div>
                  <div className="rounded-[26px] border border-[#d7b56d]/28 bg-[#171a24] px-6 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
                    <p className="font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.32em] text-[#d7b56d]">
                      Philosophy
                    </p>
                    <blockquote className="mt-3 font-[family-name:var(--font-manrope)] text-lg leading-8 text-white/78 md:text-xl">
                      &ldquo;A great photograph should be felt before it is admired.&rdquo;
                    </blockquote>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="bg-[#f5efe5] px-4 py-16 text-[#11131a] md:px-8 md:py-20 lg:px-16">
          <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <FadeIn>
              <h2 className="font-[family-name:var(--font-antonio)] text-[clamp(2.4rem,5vw,4.6rem)] uppercase leading-[0.96] tracking-[0.06em]">
                A photographer for every kind of celebration.
              </h2>
              <p className="mt-5 max-w-2xl font-[family-name:var(--font-manrope)] text-base leading-8 text-[#54515b] md:text-lg">
                Whether the day is grand, intimate, traditional, modern, or deeply
                personal, the approach stays thoughtful. Arul Kumar builds trust
                quickly, keeps the shoot organized, and delivers galleries that
                feel refined without losing natural emotion.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[28px] border border-[#11131a]/8 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(20,20,26,0.06)]">
                <p className="font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.32em] text-[#8b846f]">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-3 block font-[family-name:var(--font-antonio)] text-2xl uppercase tracking-[0.06em] transition-colors hover:text-[#ab8452]"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="rounded-[28px] border border-[#11131a]/8 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(20,20,26,0.06)]">
                <p className="font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.32em] text-[#8b846f]">
                  Phone
                </p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="mt-3 block font-[family-name:var(--font-antonio)] text-2xl uppercase tracking-[0.06em] transition-colors hover:text-[#ab8452]"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        <Footer />
      </main>
    </SiteShell>
  );
}
