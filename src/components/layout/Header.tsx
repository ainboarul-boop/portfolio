import Link from "next/link";
import { siteConfig } from "@/lib/site";

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      aria-hidden
    >
      <path
        d="M1 1L7 7L13 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
    >
      <path
        d="M3 15L15 3M15 3H5M15 3V13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type NavLink = {
  href: string;
  label: string;
  active?: boolean;
  cta?: boolean;
  variant?: "dark" | "light";
};

function NavItem({ href, label, active, cta, variant = "dark" }: NavLink) {
  const textColor =
    variant === "light" ? "text-[#29292c]/65" : "text-white";
  const chevronColor =
    variant === "light" ? "text-[#29292c]/65" : "text-white";

  if (cta) {
    return (
      <Link
        href={href}
        className={`group relative inline-flex items-center gap-3 rounded-[14px] border-2 px-6 py-2 font-[family-name:var(--font-alan)] text-lg tracking-wide transition-colors md:text-[30px] ${
          active
            ? variant === "light"
              ? "border-[#29292c]/65 bg-[rgba(85,81,81,0.2)]"
              : "border-white bg-white/10"
            : variant === "light"
              ? "border-[#29292c]/65 hover:bg-black/5"
              : "border-white hover:bg-white/10"
        } ${textColor}`}
      >
        <ArrowIcon className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center gap-2 font-[family-name:var(--font-alan)] text-lg tracking-wide transition-opacity hover:opacity-80 md:text-[30px] ${textColor}`}
    >
      {active && (
        <span
          className={`absolute -inset-x-4 -inset-y-2 -z-10 rounded-full ${
            variant === "light" ? "bg-[rgba(85,81,81,0.2)]" : "bg-white/20"
          }`}
        />
      )}
      {label}
      <ChevronDown className={`mt-1 h-2 w-3 ${chevronColor}`} />
    </Link>
  );
}

type HeaderProps = {
  activePath: string;
  variant?: "dark" | "light";
  onMenuOpen?: () => void;
};

export function Header({ activePath, variant = "dark", onMenuOpen }: HeaderProps) {
  const isLight = variant === "light";

  return (
    <header className="relative z-40 w-full">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-4 md:px-8 md:py-6 lg:px-12">
        <Link
          href="/"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-black"
        >
          {siteConfig.name}
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-10"
          aria-label="Main navigation"
        >
          {[
            { href: "/", label: "HOME" },
            { href: "/about", label: "ABOUT ME" },
            { href: "/portfolio", label: "PORTFOLIO" },
            { href: "/services", label: "SERVICES" },
          ].map((link) => (
            <NavItem
              key={link.href}
              {...link}
              active={activePath === link.href}
              variant={variant}
            />
          ))}
        </nav>

        <div className="hidden lg:block">
          <NavItem
            href="/book-now"
            label="BOOK NOW"
            active={activePath === "/book-now"}
            cta
            variant={variant}
          />
        </div>

        <button
          type="button"
          onClick={onMenuOpen}
          className={`ml-auto flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg border lg:hidden ${
            isLight
              ? "border-[#29292c]/20 text-[#29292c]"
              : "border-white/30 text-white"
          }`}
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
        </button>
      </div>
    </header>
  );
}

export { NavItem, ChevronDown, ArrowIcon };
