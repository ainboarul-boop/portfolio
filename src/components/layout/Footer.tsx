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
    <footer className="bg-[#29292c] text-white">
      <FadeIn>
        <div className="mx-auto max-w-[1600px] border-l border-[#1c1c21] px-6 py-12 md:px-16 md:py-20 lg:px-20">
          <div className="flex items-start justify-between gap-8">
            <AbstractAccent className="-rotate-90" />
            <div className="flex-1 text-center">
              <p className="font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-wide text-[#797c86] md:text-[25px]">
                A more meaningful home for photography
              </p>
              <div className="mt-8 md:mt-12">
                <p className="font-[family-name:var(--font-manrope)] text-3xl font-semibold uppercase md:text-[48px]">
                  Let&apos;s
                </p>
                <p className="font-[family-name:var(--font-manrope)] text-3xl font-semibold uppercase md:text-[48px]">
                  Work Together
                </p>
              </div>
              <Link
                href="/book-now"
                className="mt-8 inline-block rounded-[10px] border border-[#2f2f37] bg-[#1c1c21] px-8 py-3 font-[family-name:var(--font-manrope)] text-base font-medium text-white transition-colors hover:bg-[#2f2f37] md:mt-10"
              >
                Get in Touch
              </Link>
            </div>
            <AbstractAccent className="rotate-90 scale-y-[-1]" />
          </div>
        </div>
      </FadeIn>

      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 border-t border-[#1c1c21] px-6 py-8 md:flex-row md:px-16 lg:px-20">
        <div className="flex flex-wrap items-center justify-center gap-2 font-[family-name:var(--font-manrope)] text-sm text-[#797c86] md:text-[25px]">
          <Link href="/terms" className="transition-colors hover:text-white">
            Terms &amp; Conditions
          </Link>
          <span className="text-[#2f2f37]">|</span>
          <Link href="/privacy" className="transition-colors hover:text-white">
            Privacy Policy
          </Link>
        </div>
        <p className="text-center font-[family-name:var(--font-manrope)] text-sm text-[#797c86] md:text-[25px]">
          © {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export function NameBanner() {
  return (
    <section className="bg-[#f2f2f2] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] text-center">
        <p className="font-[family-name:var(--font-arimo)] text-lg font-bold uppercase text-black md:text-[40px]">
          PROFESSIONAL PHOTOGRAPHY BY
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-antonio)] text-6xl font-semibold uppercase leading-none tracking-[-0.02em] text-black md:text-[120px] lg:text-[174px]">
          ARULKUMAR
        </h2>
      </div>
    </section>
  );
}
