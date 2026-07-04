import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0d1016] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,181,109,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(76,90,118,0.22),transparent_34%)]" />
      <div className="relative mx-auto max-w-[1600px] px-4 py-14 md:px-8 md:py-18 lg:px-16 lg:py-20">
        <FadeIn>
          <div className="grid gap-10 rounded-[34px] border border-white/10 bg-white/6 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-sm md:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <p className="font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.34em] text-white/58">
                Ready to create something memorable?
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-antonio)] text-[clamp(2.4rem,6vw,5rem)] uppercase leading-[0.94] tracking-[0.06em]">
                Book Arul Kumar for weddings, events, portraits, and every story in between.
              </h2>
              <p className="mt-5 max-w-2xl font-[family-name:var(--font-manrope)] text-base leading-8 text-white/70 md:text-lg">
                Professional photography with thoughtful direction, polished image
                delivery, and a client experience that feels easy from first message to final gallery.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/book-now"
                className="inline-flex items-center justify-center rounded-full bg-[#d7b56d] px-7 py-4 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.28em] text-[#11131a] transition-all duration-300 hover:-translate-y-1"
              >
                Get in touch
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/8 px-7 py-4 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.28em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/12"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </FadeIn>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4 font-[family-name:var(--font-manrope)] text-xs text-white/54 md:text-sm">
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
          </div>
          <p className="font-[family-name:var(--font-manrope)] text-xs text-white/54 md:text-sm">
            Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function NameBanner() {
  return (
    <section className="relative overflow-hidden bg-[#f5efe5] px-4 py-12 md:px-8 md:py-16 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,181,109,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(76,90,118,0.14),transparent_36%)]" />
      <div className="relative mx-auto max-w-[1600px] text-center">
        <p className="font-[family-name:var(--font-arimo)] text-sm font-bold uppercase tracking-[0.32em] text-[#746d62] md:text-base">
          Professional Photography By
        </p>
        <h2 className="mt-4 font-[family-name:var(--font-antonio)] text-[clamp(3rem,10vw,8.5rem)] uppercase leading-none tracking-[0.06em] text-[#11131a]">
          ARUL KUMAR
        </h2>
      </div>
    </section>
  );
}
