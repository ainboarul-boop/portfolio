import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for ${siteConfig.name} and Arul Kumar photography services.`,
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "Services",
    body:
      `${siteConfig.name} provides professional photography and videography services for weddings, events, portraits, newborn, maternity, fashion, products, lifestyle shoots, collaborations, and photo frames.`,
  },
  {
    title: "Bookings and Deposits",
    body:
      "A booking is confirmed only after the agreed advance payment is received. Dates are reserved once confirmation is complete. Deposits are non-refundable except where required by applicable law or agreed otherwise in writing.",
  },
  {
    title: "Delivery",
    body:
      "Edited photos and deliverables are shared within the timeline discussed during booking. Final delivery may vary depending on event size, edit volume, and project requirements.",
  },
  {
    title: "Usage Rights",
    body:
      `${siteConfig.name} retains copyright to the images unless otherwise agreed in writing. Clients receive personal usage rights for delivered images and may request privacy restrictions before or during the project.`,
  },
] as const;

export default function TermsPage() {
  return (
    <SiteShell headerVariant="light">
      <main className="min-h-screen bg-[#11131a] px-4 py-16 text-white md:px-8 md:py-20 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <span className="inline-flex rounded-full border border-white/14 bg-white/6 px-4 py-2 font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.32em] text-white/64">
              Terms
            </span>
            <h1 className="mt-6 font-[family-name:var(--font-antonio)] text-[clamp(2.8rem,6vw,5rem)] uppercase leading-[0.94] tracking-[0.06em]">
              Terms and conditions for Arul Kumar bookings.
            </h1>
            <p className="mt-4 font-[family-name:var(--font-manrope)] text-sm uppercase tracking-[0.2em] text-white/48">
              Last updated: June 29, 2026
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-5">
            {sections.map((section, index) => (
              <FadeIn key={section.title} delay={index * 0.05}>
                <section className="rounded-[28px] border border-white/10 bg-white/6 px-6 py-6 shadow-[0_18px_40px_rgba(0,0,0,0.14)] backdrop-blur-sm">
                  <h2 className="font-[family-name:var(--font-antonio)] text-2xl uppercase tracking-[0.05em]">
                    {section.title}
                  </h2>
                  <p className="mt-4 font-[family-name:var(--font-manrope)] text-base leading-8 text-white/72">
                    {section.body}
                  </p>
                </section>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2} className="mt-8 rounded-[28px] border border-[#d7b56d]/22 bg-[#171a24] px-6 py-6 shadow-[0_18px_40px_rgba(0,0,0,0.16)]">
            <h2 className="font-[family-name:var(--font-antonio)] text-2xl uppercase tracking-[0.05em] text-[#d7b56d]">
              Contact
            </h2>
            <p className="mt-4 font-[family-name:var(--font-manrope)] text-base leading-8 text-white/74">
              For questions about bookings or terms, contact{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-[#d7b56d] underline">
                {siteConfig.email}
              </a>{" "}
              or{" "}
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="text-[#d7b56d] underline"
              >
                {siteConfig.phone}
              </a>
              .
            </p>
          </FadeIn>

          <Link
            href="/"
            className="mt-10 inline-flex items-center rounded-full border border-white/14 px-6 py-3 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.24em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/8"
          >
            Back to home
          </Link>
        </div>
      </main>
    </SiteShell>
  );
}
