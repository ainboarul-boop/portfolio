import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for ${siteConfig.name} photography services.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <SiteShell headerVariant="light">
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h1 className="font-[family-name:var(--font-manrope)] text-3xl font-semibold uppercase md:text-5xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-4 text-[#797c86]">Last updated: June 2026</p>

        <div className="prose prose-neutral mt-10 max-w-none space-y-6 font-[family-name:var(--font-manrope)] text-[#29292c]">
          <section>
            <h2 className="text-xl font-semibold">1. Services</h2>
            <p className="mt-2 leading-relaxed text-[#797c86]">
              {siteConfig.name} provides professional photography and
              videography services including but not limited to weddings,
              events, portraits, newborn, maternity, fashion, product, lifestyle
              photography, collaborations, and photo frame services.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">2. Bookings &amp; Deposits</h2>
            <p className="mt-2 leading-relaxed text-[#797c86]">
              A booking is confirmed only upon receipt of the agreed deposit.
              Dates are held exclusively once confirmation and deposit are
              received. Deposits are non-refundable except where required by
              applicable law.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">3. Delivery</h2>
            <p className="mt-2 leading-relaxed text-[#797c86]">
              Edited images and deliverables will be provided within the
              timeframe agreed upon at booking. Delivery timelines may vary
              based on project scope and post-production requirements.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">4. Usage Rights</h2>
            <p className="mt-2 leading-relaxed text-[#797c86]">
              Clients receive personal usage rights to delivered images unless
              otherwise agreed in writing. {siteConfig.name} retains copyright
              and may use selected images for portfolio, marketing, and social
              media unless the client requests otherwise in writing.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">5. Contact</h2>
            <p className="mt-2 leading-relaxed text-[#797c86]">
              For questions regarding these terms, contact us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="underline">
                {siteConfig.email}
              </a>{" "}
              or{" "}
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="underline">
                {siteConfig.phone}
              </a>
              .
            </p>
          </section>
        </div>

        <Link
          href="/"
          className="mt-12 inline-block font-medium text-[#797c86] underline transition-colors hover:text-[#29292c]"
        >
          ← Back to Home
        </Link>
      </main>
    </SiteShell>
  );
}
