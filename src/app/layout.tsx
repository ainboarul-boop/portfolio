import type { Metadata } from "next";
import { Manrope, Antonio, Arimo, Raleway, Alumni_Sans } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";
import { defaultMetadata, siteConfig } from "@/lib/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  display: "swap",
});

const alanSans = Alumni_Sans({
  variable: "--font-alan",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultMetadata.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: defaultMetadata.description,
  keywords: defaultMetadata.keywords,
  authors: [{ name: siteConfig.photographer }],
  creator: siteConfig.name,
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: defaultMetadata.title,
    description: defaultMetadata.description,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultMetadata.title,
    description: defaultMetadata.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${antonio.variable} ${arimo.variable} ${raleway.variable} ${alanSans.variable} min-h-screen bg-white font-[family-name:var(--font-manrope)] text-[#29292c] antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
