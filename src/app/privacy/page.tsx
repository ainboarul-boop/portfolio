import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name} — how we collect and protect your personal information.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <SiteShell headerVariant="light">
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h1 className="font-[family-name:var(--font-manrope)] text-3xl font-semibold uppercase md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-[#797c86]">Last updated: June 2026</p>

        <div className="mt-10 space-y-6 font-[family-name:var(--font-manrope)] text-[#29292c]">
          <section>
            <h2 className="text-xl font-semibold">Information We Collect</h2>
            <p className="mt-2 leading-relaxed text-[#797c86]">
              When you contact us through our website form, email, phone, or
              WhatsApp, we may collect your name, email address, phone number,
              event details, and any message you provide.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">How We Use Your Information</h2>
            <p className="mt-2 leading-relaxed text-[#797c86]">
              We use your information solely to respond to inquiries, provide
              quotes, deliver photography services, and communicate about your
              booking. We do not sell or share your personal data with third
              parties for marketing purposes.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Data Security</h2>
            <p className="mt-2 leading-relaxed text-[#797c86]">
              We take reasonable measures to protect your personal information.
              Contact form submissions are transmitted securely and stored only
              as long as necessary to fulfil our services.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Cookies &amp; Analytics</h2>
            <p className="mt-2 leading-relaxed text-[#797c86]">
              This website may use essential cookies and analytics tools to
              improve user experience and site performance. You can disable
              cookies through your browser settings.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Your Rights</h2>
            <p className="mt-2 leading-relaxed text-[#797c86]">
              You may request access to, correction of, or deletion of your
              personal data by contacting{" "}
              <a href={`mailto:${siteConfig.email}`} className="underline">
                {siteConfig.email}
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
