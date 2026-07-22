import { siteConfig } from "@/lib/site";

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.5 7.5h9v9h-9z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M4.5 19.5 3 21l2.1-5.6a9 9 0 1 1 1.7 1.7L4.5 19.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.2 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.9 1-.9 1s-.3.4-.5.4c-.2 0-.4 0-.6-.1-.3-.1-.8-.3-1.2-.7-.4-.4-.7-.7-.8-1-.1-.3 0-.5.1-.7.1-.1.2-.2.3-.3.1-.1.2-.2.2-.3.1-.1 0-.4 0-.6 0-.2-.7-1.5-.9-2-.2-.5-.4-.4-.6-.4-.2 0-.4 0-.6 0-.2 0-.5.1-.7.2-.2.1-.6.3-.6.8 0 .5-.3 1.1 0 1.6.2.4.9 1.6 2 2.5 1.4 1 2.5 1.1 2.9 1.2.4.1.9.1 1.4 0 .5-.1.9-.4 1.1-.6.2-.2.2-.4.2-.6 0-.2-.1-.4-.3-.6Z" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M15.5 3.5h-3.7c-2.2 0-3.5 1.4-3.5 3.5v3.1H6.5v3.8h1.8v6h4.1v-6h3.2l.5-3.8h-3.7v-2.5c0-.9.2-1.5 1.5-1.5h2.2V3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function YouTubeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M21 7.5a3.5 3.5 0 0 0-2.5-2.5C17.1 4.5 12 4.5 12 4.5s-5.1 0-6.5.5A3.5 3.5 0 0 0 3 7.5 36.1 36.1 0 0 0 3 16.5a3.5 3.5 0 0 0 2.5 2.5c1.4.5 6.5.5 6.5.5s5.1 0 6.5-.5a3.5 3.5 0 0 0 2.5-2.5A36.1 36.1 0 0 0 21 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 15.5l5-3.5-5-3.5v7Z" fill="currentColor" />
    </svg>
  );
}

const iconMap: Record<string, JSX.Element> = {
  Instagram: <InstagramIcon className="h-5 w-5" />,
  WhatsApp: <WhatsAppIcon className="h-5 w-5" />,
  Facebook: <FacebookIcon className="h-5 w-5" />,
  YouTube: <YouTubeIcon className="h-5 w-5" />,
};

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={className}>
      <p className="text-sm uppercase tracking-[0.25em] text-gray-400">Follow us</p>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
        {siteConfig.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/15 hover:text-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30"
            aria-label={social.label}
          >
            {iconMap[social.label] ?? <span className="h-5 w-5" />}
          </a>
        ))}
      </div>
    </div>
  );
}
