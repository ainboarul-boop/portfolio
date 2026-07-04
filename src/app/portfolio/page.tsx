import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { SiteShell } from "@/components/layout/SiteShell";
import { FadeIn } from "@/components/ui/FadeIn";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Arul Kumar's photography portfolio with weddings, functions, portraits, newborn sessions, fashion work, and event storytelling across Tamil Nadu.",
  alternates: { canonical: "/portfolio" },
};

const portfolioItems = [
  {
    src: images.portfolioBanner1,
    alt: "Newborn and toddler photography portfolio",
    width: 1609,
    height: 858,
    className: "md:col-span-2",
  },
  {
    src: images.portfolioBanner2,
    alt: "Wedding and event photography showcase",
    width: 1609,
    height: 858,
  },
  {
    src: images.portfolioFeature,
    alt: "Featured wedding photography close-up",
    width: 1600,
    height: 952,
  },
  ...images.portfolioGallery.map((src, index) => ({
    src,
    alt: `Professional photography portfolio image ${index + 1}`,
    width: 900,
    height: 1200,
  })),
  {
    src: images.portfolioGalleryHero,
    alt: "Bridal jewelry detail photography",
    width: 1600,
    height: 967,
    className: "md:col-span-2",
  },
] as const;

export default function PortfolioPage() {
  return (
    <SiteShell headerOverlay>
      <main className="bg-[#0f1118] text-white">
        <section className="relative flex min-h-[100svh] items-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,181,109,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(76,90,118,0.22),transparent_36%)]" />
          <div className="relative mx-auto grid w-full max-w-[1600px] gap-12 px-4 py-24 pt-30 md:px-8 md:py-28 md:pt-34 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-16">
            <div className="flex flex-col justify-center">
              <FadeIn>
                <span className="inline-flex w-fit rounded-full border border-white/14 px-4 py-2 font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.32em] text-white/68">
                  Portfolio
                </span>
                <h1 className="mt-6 font-[family-name:var(--font-antonio)] text-[clamp(3rem,8vw,6.8rem)] uppercase leading-[0.92] tracking-[0.06em]">
                  Frames that feel cinematic, elegant, and alive.
                </h1>
                <p className="mt-6 max-w-2xl font-[family-name:var(--font-manrope)] text-base leading-8 text-white/74 md:text-lg">
                  This collection brings together weddings, stage moments,
                  newborn sessions, portraits, and function photography curated
                  in a way that feels like a premium visual journal instead of a
                  long image dump.
                </p>
              </FadeIn>

              <FadeIn delay={0.1} className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/book-now"
                  className="inline-flex items-center justify-center rounded-full bg-[#d7b56d] px-7 py-4 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.28em] text-[#11131a] transition-all duration-300 hover:-translate-y-1"
                >
                  Work with Arul Kumar
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/8 px-7 py-4 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.28em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/12"
                >
                  View services
                </Link>
              </FadeIn>
            </div>

            <FadeIn direction="left" className="relative">
              <div className="grid gap-5 md:grid-cols-[1.06fr_0.94fr]">
                <div className="rounded-[34px] border border-white/10 bg-white/6 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.34)] backdrop-blur-sm">
                  <Image
                    src={images.portfolioHero}
                    alt="Featured portfolio photography by Arul Kumar"
                    width={1280}
                    height={716}
                    className="h-auto w-full rounded-[26px] object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <div className="rounded-[28px] border border-white/10 bg-white/6 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-sm">
                    <Image
                      src={images.portfolioFeature}
                      alt="Featured wedding photography close-up"
                      width={1600}
                      height={952}
                      className="h-auto w-full rounded-[20px] object-cover"
                    />
                  </div>
                  <div className="rounded-[26px] border border-[#d7b56d]/28 bg-[#171a24] px-6 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
                    <p className="font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.32em] text-[#d7b56d]">
                      Curated presentation
                    </p>
                    <p className="mt-3 font-[family-name:var(--font-manrope)] text-sm leading-7 text-white/74 md:text-base">
                      The gallery is arranged to feel polished and premium so
                      clients can quickly feel the range, depth, and finish of the work.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="px-4 py-14 md:px-8 md:py-18 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {portfolioItems.map((item, index) => (
                <FadeIn
                  key={`${item.src}-${index}`}
                  delay={(index % 3) * 0.05}
                  className={item.className ?? ""}
                >
                  <div className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/6 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.26)] backdrop-blur-sm">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      className="h-auto w-full rounded-[22px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      loading={index < 5 ? "eager" : "lazy"}
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </SiteShell>
  );
}
