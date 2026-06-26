import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { SiteShell } from "@/components/layout/SiteShell";
import { FadeIn } from "@/components/ui/FadeIn";
import { images } from "@/lib/images";
import { serviceCategories } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional photography services by Arulkumar — wedding, event, newborn, product, fashion, portrait, lifestyle photography, photoshoot collaborations and premium photo frames in Tamil Nadu.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <SiteShell headerOverlay>
      <main>
        <section className="relative min-h-[600px] overflow-hidden md:min-h-[800px]">
          <Image
            src={images.servicesBg}
            alt="Professional photography services portrait"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="relative z-10 mx-auto max-w-[1600px] px-4 pb-16 pt-28 md:px-10 md:pt-36 lg:px-[174px]">
            <FadeIn>
              <h1 className="font-[family-name:var(--font-antonio)] text-4xl font-semibold uppercase tracking-tight text-black md:text-[110px]">
                MY PHOTOGRAPHY SERVICES
              </h1>
            </FadeIn>
            <FadeIn delay={0.1} className="mt-8 max-w-4xl">
              <h2 className="font-[family-name:var(--font-manrope)] text-2xl font-semibold uppercase text-black md:text-[48px]">
                Diverse Photography Offerings
              </h2>
              <p className="mt-4 font-[family-name:var(--font-manrope)] text-base leading-relaxed text-black md:text-[25px]">
                Unlock the full spectrum of professional photography services
                tailored to your vision. From timeless portraits to captivating
                event coverage, I bring a unique blend of creativity and
                technical expertise to each project.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="bg-[#29292c] px-4 py-16 text-white md:px-10 md:py-24">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <ul className="space-y-6 md:space-y-8">
              {serviceCategories.map((service, i) => (
                <li
                  key={service}
                  className="font-[family-name:var(--font-manrope)] text-2xl font-semibold capitalize md:text-[55px]"
                >
                  {service}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.2} className="relative mx-auto mt-16 max-w-[868px] md:mt-24">
            <Image
              src={images.servicesWatermark}
              alt="AINBOW CREATIVE STUDIO watermark"
              width={868}
              height={562}
              className="mx-auto h-auto w-full opacity-20"
            />
          </FadeIn>
        </section>

        <FadeIn>
          <div className="relative aspect-[1723/2586] w-full overflow-hidden md:aspect-[16/12]">
            <Image
              src={images.servicesGreen}
              alt="Fashion and lifestyle photography in studio setting"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </FadeIn>

        <section className="bg-white px-4 py-16 text-center md:px-10 md:py-24">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-semibold uppercase text-black md:text-[48px]">
              Visual Poetry in Pixels
            </h2>
            <p className="mx-auto mt-6 max-w-4xl font-[family-name:var(--font-manrope)] text-base leading-relaxed text-[#797c86] md:text-[22px]">
              Step into a visual journey that encapsulates the essence of my
              lens. Each photograph in this portfolio is a narrative, a frozen
              moment in time, and a testament to the artistry and passion poured
              into every frame. Explore the diverse tapestry of stories
              I&apos;ve had the privilege to capture and witness the world
              through my lens.
            </p>
          </FadeIn>
        </section>

        <FadeIn>
          <div className="relative aspect-[1604/2406] w-full overflow-hidden md:aspect-[16/12]">
            <Image
              src={images.servicesGold}
              alt="Traditional bridal portrait photography"
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
