import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name} and Arul Kumar photography services.`,
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "Information We Collect",
    body:
      "When you contact us through the website form, phone, email, or WhatsApp, we may collect your name, email address, phone number, event details, and any message you provide.",
  },
  {
    title: "How We Use Your Information",
    body:
      "We use your information only to respond to inquiries, share quotes, plan bookings, and deliver photography services. We do not sell or share your personal data for third-party marketing.",
  },
  {
    title: "Data Security",
    body:
      "Reasonable steps are taken to protect submitted information. Contact details are stored only as long as needed to communicate about bookings or provide services.",
  },
  {
    title: "Cookies and Analytics",
    body:
      "The site may use essential cookies or analytics tools to improve performance and user experience. You can disable cookies through your browser settings if preferred.",
  },
] as const;

export default function PrivacyPage() {
  return (
    <SiteShell headerVariant="light">
      <main className="min-h-screen bg-[#f5efe5] px-4 py-16 text-[#11131a] md:px-8 md:py-20 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <span className="inline-flex rounded-full border border-[#11131a]/10 bg-white/70 px-4 py-2 font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.32em] text-[#6b6559]">
              Privacy
            </span>
            <h1 className="mt-6 font-[family-name:var(--font-antonio)] text-[clamp(2.8rem,6vw,5rem)] uppercase leading-[0.94] tracking-[0.06em]">
              Privacy policy for Arul Kumar photography services.
            </h1>
            <p className="mt-4 font-[family-name:var(--font-manrope)] text-sm uppercase tracking-[0.2em] text-[#7b7468]">
              Last updated: June 29, 2026
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-5">
            {sections.map((section, index) => (
              <FadeIn key={section.title} delay={index * 0.05}>
                <section className="rounded-[28px] border border-[#11131a]/10 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(20,20,26,0.06)]">
                  <h2 className="font-[family-name:var(--font-antonio)] text-2xl uppercase tracking-[0.05em]">
                    {section.title}
                  </h2>
                  <p className="mt-4 font-[family-name:var(--font-manrope)] text-base leading-8 text-[#57535d]">
                    {section.body}
                  </p>
                </section>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2} className="mt-8 rounded-[28px] border border-[#11131a]/10 bg-[#11131a] px-6 py-6 text-white shadow-[0_18px_40px_rgba(20,20,26,0.12)]">
            <h2 className="font-[family-name:var(--font-antonio)] text-2xl uppercase tracking-[0.05em]">
              Your Rights
            </h2>
            <p className="mt-4 font-[family-name:var(--font-manrope)] text-base leading-8 text-white/74">
              You may request access to, correction of, or deletion of your
              personal data by contacting{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-[#d7b56d] underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </FadeIn>

          <Link
            href="/"
            className="mt-10 inline-flex items-center rounded-full border border-[#11131a]/12 px-6 py-3 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.24em] text-[#11131a] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
          >
            Back to home
          </Link>
        </div>
      </main>
    </SiteShell>
  );
}
