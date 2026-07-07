export const siteConfig = {
  name: "AINBOW CREATIVE STUDIO",
  photographer: "ARUL KUMAR",
  tagline: "YOU LIVE IT WE CAPTURE IT",
  subtitle: "PROFESSIONAL PHOTOGRAPHY BY",
  url: "https://ainbowcreativestudio.com",
  email: "ainboarul@gmail.com",
  phone: "+91 7904286978",
  whatsapp: "+91 7904286978",
  location: "Tamil Nadu, India",
};

export const navLinks = [
  { href: "/", label: "HOME", hasSubmenu: false },
  { href: "/about", label: "ABOUT ME", hasSubmenu: false },
  { href: "/portfolio", label: "PORTFOLIO", hasSubmenu: false },
  { href: "/services", label: "SERVICES", hasSubmenu: false },
  { href: "/book-now", label: "BOOK NOW", cta: true },
] as const;

export const seoKeywords = [
  "professional photographer Tamil Nadu",
  "wedding photography",
  "event photography",
  "corporate photography",
  "portrait photography",
  "newborn photography",
  "maternity photoshoot",
  "fashion photography",
  "product photography",
  "lifestyle photography",
  "photoshoot collaboration",
  "photo frames",
  "pre-wedding photography",
  "candid photography",
  "AINBOW CREATIVE STUDIO",
  "Arul Kumar photographer",
];

export const defaultMetadata = {
  title: "Arul Kumar | Professional Photographer | AINBOW CREATIVE STUDIO",
  description:
    "Professional photography by Arul Kumar — weddings, events, portraits, newborn, maternity, fashion, product shoots, collaborations & premium photo frames across Tamil Nadu. YOU LIVE IT, WE CAPTURE IT.",
  keywords: seoKeywords.join(", "),
};

export const serviceHighlights = [
  "Coverage for weddings, parties, corporate functions, and more.",
  "Skilled photographers who know how to seize the moment.",
  "A mix of candid and posed shots for a comprehensive story.",
  "Quick turnaround for you to relive the day's highlights.",
];

export const serviceCategories = [
  "Event photography",
  "Wedding photography",
  "Newborn photography",
  "Product photography",
  "Fashion photography",
  "Portrait photography",
  "Lifestyle photography",
];
