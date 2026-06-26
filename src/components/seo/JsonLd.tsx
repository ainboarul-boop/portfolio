import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description:
      "Professional photography services — weddings, events, portraits, newborn, maternity, fashion, collaborations and photo frames.",
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: {
      "@type": "State",
      name: "Tamil Nadu",
    },
    founder: {
      "@type": "Person",
      name: siteConfig.photographer,
    },
    serviceType: [
      "Wedding Photography",
      "Event Photography",
      "Portrait Photography",
      "Newborn Photography",
      "Maternity Photography",
      "Fashion Photography",
      "Product Photography",
      "Photo Frames",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
