import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/forms/ContactForm";
import { Footer, NameBanner } from "@/components/layout/Footer";
import { SiteShell } from "@/components/layout/SiteShell";
import { FadeIn } from "@/components/ui/FadeIn";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Now",
  description:
    "Book Arulkumar for weddings, events, portraits, newborn, maternity shoots, collaborations and photo frames. Contact via phone, email, WhatsApp or our inquiry form.",
  alternates: { canonical: "/book-now" },
};

export default function BookNowPage() {
  return (
    <SiteShell headerVariant="light" headerOverlay>
      <main>
        <section className="relative min-h-[600px] overflow-hidden md:min-h-[1075px]">
          <Image
            src={images.bookHeroOverlay}
            alt=""
            fill
            className="object-cover opacity-40"
            aria-hidden
            sizes="100vw"
          />
          <div className="relative z-10 flex min-h-[600px] flex-col items-center justify-center px-4 pb-16 pt-24 md:min-h-[1075px]">
            <FadeIn className="w-full max-w-[957px]">
              <div className="mx-auto rounded-[60px] bg-black/15 px-6 py-8 md:rounded-[105px] md:px-12">
                <Image
                  src={images.logoLight}
                  alt="AINBOW CREATIVE STUDIO logo"
                  width={900}
                  height={582}
                  className="mx-auto h-auto w-full max-w-[700px] object-contain"
                  priority
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="mt-8 text-center">
              <p className="font-[family-name:var(--font-raleway)] text-2xl font-extralight uppercase text-[#29292c] md:text-[67px]">
                {siteConfig.tagline}
              </p>
            </FadeIn>
          </div>
        </section>

        <NameBanner />

        <section className="bg-white px-4 py-16 md:px-10 md:py-24 lg:px-[38px]">
          <div className="mx-auto max-w-[1524px]">
            <FadeIn>
              <p className="font-[family-name:var(--font-manrope)] text-xl font-semibold uppercase text-[#29292c] md:text-[30px]">
                Contact Me
              </p>
              <h1 className="mt-1 font-[family-name:var(--font-manrope)] text-4xl font-semibold uppercase text-[#29292c] md:text-[65px]">
                Get in Touch with Me
              </h1>
              <p className="mt-6 font-[family-name:var(--font-manrope)] text-lg leading-relaxed text-[#797c86] md:text-[35px]">
                Step into a world of timeless photography with Damien Braun.
                Explore our range of photography services, each crafted to tell
                your unique story through captivating images. Whether it&apos;s
                the magic of portraits, the emotion of events, or the allure of
                commercial photography, we&apos;re here to bring your vision to
                life.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="mt-12 md:mt-16">
              <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-semibold uppercase text-[#29292c] md:text-[65px]">
                Contact Information
              </h2>
              <p className="mt-4 font-[family-name:var(--font-manrope)] text-lg text-[#797c86] md:text-[35px]">
                Feel free to reach out to us through various channels. We are
                available by phone, email, and social media for your convenience.
              </p>

              <div className="mt-10 space-y-8 md:mt-14">
                <div>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="font-[family-name:var(--font-manrope)] text-3xl font-semibold uppercase text-[#29292c] transition-colors hover:text-[#797c86] md:text-[65px]"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
                <div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-[family-name:var(--font-manrope)] text-3xl font-semibold lowercase text-[#29292c] transition-colors hover:text-[#797c86] md:text-[65px]"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-manrope)] text-2xl font-medium lowercase text-[#29292c] md:text-[65px]">
                    Whatsapp messenger
                  </p>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block font-[family-name:var(--font-manrope)] text-3xl font-semibold uppercase text-[#29292c] transition-colors hover:text-[#797c86] md:text-[65px]"
                  >
                    {siteConfig.whatsapp}
                  </a>
                </div>
              </div>
            </FadeIn>

            <ContactForm />
          </div>

          <FadeIn delay={0.15} className="relative mx-auto mt-16 max-w-[1592px] md:mt-24">
            <Image
              src={images.bookWatermark}
              alt="AINBOW CREATIVE STUDIO watermark"
              width={1592}
              height={1030}
              className="mx-auto h-auto w-full opacity-20"
            />
          </FadeIn>
        </section>

        <FadeIn>
          <div className="relative aspect-[2118/2299] w-full overflow-hidden md:aspect-[1600/2446]">
            <Image
              src={images.bookFabricated}
              alt="Bridal portrait photography by Arulkumar"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative aspect-[1673/1115] w-full overflow-hidden">
            <Image
              src={images.bookNewborn}
              alt="Newborn baby photography session"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </FadeIn>

        <Footer />
      </main>
    </SiteShell>
  );
}
