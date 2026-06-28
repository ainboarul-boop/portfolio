import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/lib/site";

function AbstractAccent({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none hidden h-[120px] w-[120px] shrink-0 opacity-40 md:block lg:h-[187px] lg:w-[187px] ${className}`}
      aria-hidden
    >
      <div className="h-full w-full rounded-full border border-[#2f2f37]/40 bg-[radial-gradient(circle_at_30%_30%,#2f2f37,transparent_70%)]" />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-gradient-to-b from-[#6366f1]/20 to-transparent blur-3xl" />
      </div>
      <FadeIn>
        <div className="relative mx-auto max-w-[1600px] border-l border-white/10 px-6 py-16 md:px-16 md:py-24 lg:px-20">
          <div className="flex items-start justify-between gap-8">
            <AbstractAccent className="-rotate-90" />
            <div className="flex-1 text-center">
              <p className="font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-wider text-gray-400 md:text-lg">
                Ready to Capture Your Perfect Moments?
              </p>
              <div className="mt-8 md:mt-12">
                <p className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text font-[family-name:var(--font-antonio)] text-4xl font-bold uppercase text-transparent md:text-6xl">
                  Let&apos;s
                </p>
                <p className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text font-[family-name:var(--font-antonio)] text-4xl font-bold uppercase text-transparent md:text-6xl">
                  Work Together
                </p>
              </div>
              <Link
                href="/book-now"
                className="mt-10 inline-block rounded-xl border-2 border-white/30 bg-gradient-to-r from-white/20 to-white/10 px-10 py-4 font-[family-name:var(--font-manrope)] text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:border-white/50 hover:from-white/30 hover:to-white/20 hover:shadow-xl md:mt-12 md:text-lg"
              >
                Get in Touch
              </Link>
            </div>
            <AbstractAccent className="rotate-90 scale-y-[-1]" />
          </div>
        </div>
      </FadeIn>

      <div className="relative mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 border-t border-white/10 px-6 py-8 md:flex-row md:px-16 lg:px-20">
        <div className="flex flex-wrap items-center justify-center gap-3 font-[family-name:var(--font-manrope)] text-xs text-gray-400 md:text-sm">
          <Link href="/terms" className="transition-colors hover:text-white">
            Terms &amp; Conditions
          </Link>
          <span className="text-gray-600">|</span>
          <Link href="/privacy" className="transition-colors hover:text-white">
            Privacy Policy
          </Link>
        </div>
        <p className="text-center font-[family-name:var(--font-manrope)] text-xs text-gray-400 md:text-sm">
          © {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export function NameBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f5f5f8] via-white to-[#e0e0f0] px-4 py-16 md:py-32">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-gradient-to-r from-[#6366f1] to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-gradient-to-l from-[#6366f1] to-transparent blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-[1600px] text-center">
        <p className="font-[family-name:var(--font-arimo)] text-sm font-bold uppercase tracking-widest text-gray-600 md:text-lg">
          Professional Photography By
        </p>
        <h2 className="mt-4 bg-gradient-to-r from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] bg-clip-text font-[family-name:var(--font-antonio)] text-6xl font-bold uppercase leading-none tracking-tighter text-transparent md:text-[120px] lg:text-[170px]">
          ARULKUMAR
        </h2>
      </div>
    </section>
  );
}
