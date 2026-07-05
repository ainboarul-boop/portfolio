import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[#eee7dd] bg-white text-[#1d1d1d]">
      <div className="mx-auto max-w-[1360px] px-4 py-14 md:px-8 md:py-16 lg:px-12">
        <FadeIn>
          <div className="grid gap-10 rounded-[28px] border border-[#eee7dd] bg-[#faf8f4] p-8 md:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <p className="font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8a7f70]">
                Ready to create something memorable?
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight text-[#171717]">
                Book Arul Kumar for weddings, portraits, and events.
              </h2>
              <p className="mt-5 max-w-2xl font-[family-name:var(--font-manrope)] text-base leading-8 text-[#5f5f5f] md:text-lg">
                Professional photography with clean presentation, thoughtful
                direction, and an easy client experience from enquiry to delivery.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/book-now"
                className="inline-flex items-center justify-center rounded-full bg-[#1c1c1c] px-7 py-4 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.2em] text-white"
              >
                Get in touch
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center rounded-full border border-[#d9d1c5] bg-white px-7 py-4 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.2em] text-[#1d1d1d]"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </FadeIn>

        <div className="mt-8 flex flex-col gap-4 border-t border-[#eee7dd] pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4 font-[family-name:var(--font-manrope)] text-xs text-[#777] md:text-sm">
            <Link href="/terms" className="transition-colors hover:text-[#1d1d1d]">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-[#1d1d1d]">
              Privacy Policy
            </Link>
          </div>
          <p className="font-[family-name:var(--font-manrope)] text-xs text-[#777] md:text-sm">
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
