import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/forms/ContactForm";
import { Footer } from "@/components/layout/Footer";
import { SiteShell } from "@/components/layout/SiteShell";
import { FadeIn } from "@/components/ui/FadeIn";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Now",
  description:
    "Book Arul Kumar for weddings, events, portraits, newborn, maternity, collaborations, and custom photography projects across Tamil Nadu.",
  alternates: { canonical: "/book-now" },
};

const quickNotes = [
  "Available for weddings, receptions, baby shoots, family functions, fashion, products, and events",
  "Fast replies through phone, email, and WhatsApp",
  "Custom coverage plans based on your event or concept",
] as const;

export default function BookNowPage() {
  return (
    <SiteShell headerVariant="light" headerOverlay>
      <main className="bg-[#f6f1e8] text-[#11131a]">
        <section className="relative min-h-[100svh] overflow-hidden">
          <Image
            src={images.bookHeroOverlay}
            alt=""
            fill
            className="object-cover"
            aria-hidden
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(246,241,232,0.9)_0%,rgba(246,241,232,0.72)_46%,rgba(246,241,232,0.22)_100%)]" />
          <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-[1600px] items-center gap-12 px-4 py-24 pt-30 md:px-8 md:py-28 md:pt-34 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:px-16">
            <div className="max-w-3xl">
              <FadeIn>
                <span className="inline-flex w-fit rounded-full border border-[#11131a]/10 bg-white/70 px-4 py-2 font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.32em] text-[#655d50] backdrop-blur-sm">
                  Book a session
                </span>
                <h1 className="mt-6 font-[family-name:var(--font-antonio)] text-[clamp(3rem,8vw,6.4rem)] uppercase leading-[0.92] tracking-[0.06em]">
                  Tell us the moment. Arul Kumar will shape the frame.
                </h1>
                <p className="mt-6 max-w-2xl font-[family-name:var(--font-manrope)] text-base leading-8 text-[#403d45] md:text-lg">
                  From wedding coverage and family events to portraits, maternity,
                  newborn, products, and fashion work, each booking starts with
                  understanding the story and planning the right visual tone.
                </p>
              </FadeIn>

              <FadeIn delay={0.1} className="mt-8 grid gap-4">
                {quickNotes.map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-[#11131a]/10 bg-white/72 px-5 py-4 shadow-[0_16px_35px_rgba(24,24,30,0.06)] backdrop-blur-sm"
                  >
                    <p className="font-[family-name:var(--font-manrope)] text-sm leading-7 text-[#4c4852] md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </FadeIn>
            </div>

            <FadeIn direction="left" className="relative">
              <div className="grid gap-5 md:grid-cols-[1.02fr_0.98fr]">
                <div className="rounded-[32px] border border-[#11131a]/10 bg-white/72 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.12)] backdrop-blur-sm">
                  <Image
                    src={images.bookFabricated}
                    alt="Bridal portrait photography by Arul Kumar"
                    width={2118}
                    height={2299}
                    className="h-auto w-full rounded-[24px] object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <div className="rounded-[28px] border border-[#11131a]/10 bg-white/72 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.12)] backdrop-blur-sm">
                    <Image
                      src={images.bookNewborn}
                      alt="Newborn baby photography session"
                      width={1673}
                      height={1115}
                      className="h-auto w-full rounded-[20px] object-cover"
                    />
                  </div>
                  <div className="rounded-[26px] border border-[#11131a]/10 bg-[#11131a] px-6 py-5 text-white shadow-[0_18px_50px_rgba(0,0,0,0.16)]">
                    <p className="font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.32em] text-[#d7b56d]">
                      Direct contact
                    </p>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                      className="mt-3 block font-[family-name:var(--font-antonio)] text-3xl uppercase tracking-[0.05em] transition-colors hover:text-[#d7b56d]"
                    >
                      {siteConfig.phone}
                    </a>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-3 block font-[family-name:var(--font-manrope)] text-sm text-white/76 transition-colors hover:text-white"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="px-4 py-14 md:px-8 md:py-18 lg:px-16 lg:py-20">
          <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <div>
              <FadeIn>
                <span className="inline-flex rounded-full border border-[#11131a]/10 px-4 py-2 font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.32em] text-[#655d50]">
                  Contact
                </span>
                <h2 className="mt-5 font-[family-name:var(--font-antonio)] text-[clamp(2.4rem,5vw,4.6rem)] uppercase leading-[0.96] tracking-[0.06em]">
                  Share the date, the event, and the mood you want to preserve.
                </h2>
                <p className="mt-5 max-w-xl font-[family-name:var(--font-manrope)] text-base leading-8 text-[#4a4650] md:text-lg">
                  Use the form for weddings, receptions, portraits, newborn shoots,
                  collaborations, and custom projects. The more details you share,
                  the better the planning can be from the start.
                </p>
              </FadeIn>

              <FadeIn delay={0.1} className="mt-8 grid gap-4">
                <div className="rounded-[24px] border border-[#11131a]/10 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(20,20,26,0.06)]">
                  <p className="font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.32em] text-[#8b846f]">
                    Call
                  </p>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="mt-3 block font-[family-name:var(--font-antonio)] text-3xl uppercase tracking-[0.05em] transition-colors hover:text-[#ab8452]"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
                <div className="rounded-[24px] border border-[#11131a]/10 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(20,20,26,0.06)]">
                  <p className="font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.32em] text-[#8b846f]">
                    WhatsApp
                  </p>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block font-[family-name:var(--font-antonio)] text-3xl uppercase tracking-[0.05em] transition-colors hover:text-[#ab8452]"
                  >
                    {siteConfig.whatsapp}
                  </a>
                </div>
                <div className="rounded-[24px] border border-[#11131a]/10 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(20,20,26,0.06)]">
                  <p className="font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.32em] text-[#8b846f]">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-3 block font-[family-name:var(--font-manrope)] text-lg break-all transition-colors hover:text-[#ab8452]"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </FadeIn>
            </div>

            <ContactForm />
          </div>
        </section>

        <Footer />
      </main>
    </SiteShell>
  );
}
