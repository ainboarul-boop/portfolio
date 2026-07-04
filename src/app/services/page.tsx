import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { SiteShell } from "@/components/layout/SiteShell";
import { FadeIn } from "@/components/ui/FadeIn";
import { images } from "@/lib/images";
import { serviceCategories, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional photography services by Arul Kumar for weddings, events, newborn, portrait, fashion, product, lifestyle, and family functions across Tamil Nadu.",
  alternates: { canonical: "/services" },
};

const promises = [
  "Pre-event planning and clear communication",
  "Balanced candid moments and guided portraits",
  "Professional retouching with natural color",
  "Coverage for intimate functions and grand events",
] as const;

export default function ServicesPage() {
  return (
    <SiteShell headerOverlay>
      <main className="bg-[#f5efe5] text-[#11131a]">
        <section className="relative flex min-h-[100svh] items-center overflow-hidden">
          <Image
            src={images.servicesBg}
            alt="Professional photography services portrait"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,239,229,0.92)_0%,rgba(245,239,229,0.72)_42%,rgba(245,239,229,0.18)_100%)]" />
          <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 py-24 pt-30 md:px-8 md:py-28 md:pt-34 lg:px-16">
            <div className="max-w-3xl">
              <FadeIn>
                <span className="inline-flex w-fit rounded-full border border-[#11131a]/10 bg-white/65 px-4 py-2 font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.32em] text-[#615a4b] backdrop-blur-sm">
                  Services
                </span>
                <h1 className="mt-6 font-[family-name:var(--font-antonio)] text-[clamp(3rem,8vw,6.6rem)] uppercase leading-[0.92] tracking-[0.06em]">
                  Photography for every milestone and every meaningful detail.
                </h1>
                <p className="mt-6 max-w-2xl font-[family-name:var(--font-manrope)] text-base leading-8 text-[#3e3b43] md:text-lg">
                  Arul Kumar covers weddings, receptions, family functions,
                  corporate events, portraits, baby shoots, maternity, fashion,
                  products, and lifestyle stories with a polished visual finish.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 md:px-8 md:py-18 lg:px-16 lg:py-20">
          <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
            <div>
              <FadeIn>
                <h2 className="font-[family-name:var(--font-antonio)] text-[clamp(2.4rem,5vw,4.6rem)] uppercase leading-[0.96] tracking-[0.06em]">
                  What Arul Kumar can shoot.
                </h2>
              </FadeIn>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {serviceCategories.map((service, index) => (
                  <FadeIn key={service} delay={(index % 2) * 0.05}>
                    <div className="rounded-[24px] border border-[#11131a]/10 bg-white px-5 py-5 shadow-[0_18px_40px_rgba(20,20,26,0.06)]">
                      <p className="font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.32em] text-[#8b846f]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-3 font-[family-name:var(--font-antonio)] text-2xl uppercase tracking-[0.05em]">
                        {service}
                      </h3>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            <FadeIn direction="left" className="grid gap-5">
              <div className="rounded-[30px] border border-[#11131a]/8 bg-[#11131a] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
                <Image
                  src={images.servicesGreen}
                  alt="Fashion and lifestyle photography in studio setting"
                  width={1723}
                  height={2586}
                  className="h-auto w-full rounded-[22px] object-cover"
                />
              </div>
              <div className="rounded-[28px] border border-[#11131a]/8 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(20,20,26,0.06)]">
                <p className="font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.32em] text-[#8b846f]">
                  Why clients book
                </p>
                <div className="mt-4 grid gap-4">
                  {promises.map((item) => (
                    <div key={item} className="rounded-[18px] bg-[#f5efe5] px-4 py-4">
                      <p className="font-[family-name:var(--font-manrope)] text-sm leading-7 text-[#4b4851] md:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="bg-[#11131a] px-4 py-14 text-white md:px-8 md:py-18 lg:px-16 lg:py-20">
          <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
            <FadeIn direction="right">
              <div className="rounded-[30px] border border-white/10 bg-white/6 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.26)] backdrop-blur-sm">
                <Image
                  src={images.servicesGold}
                  alt="Traditional bridal portrait photography"
                  width={1604}
                  height={2406}
                  className="h-auto w-full rounded-[22px] object-cover"
                />
              </div>
            </FadeIn>

            <div className="flex flex-col justify-center">
              <FadeIn>
                <h2 className="font-[family-name:var(--font-antonio)] text-[clamp(2.4rem,5vw,4.6rem)] uppercase leading-[0.96] tracking-[0.06em]">
                  Built for weddings, functions, portraits, and commercial needs.
                </h2>
                <p className="mt-6 max-w-2xl font-[family-name:var(--font-manrope)] text-base leading-8 text-white/74 md:text-lg">
                  The approach changes with the story, but the standard stays
                  high. That means clear planning, premium image selection, and
                  a result that feels thoughtful enough for albums, socials, and
                  long-term keepsakes.
                </p>
              </FadeIn>

              <FadeIn delay={0.1} className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/book-now"
                  className="inline-flex items-center justify-center rounded-full bg-[#d7b56d] px-7 py-4 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.28em] text-[#11131a] transition-all duration-300 hover:-translate-y-1"
                >
                  Start your booking
                </Link>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/8 px-7 py-4 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.28em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/12"
                >
                  Call now
                </a>
              </FadeIn>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </SiteShell>
  );
}
