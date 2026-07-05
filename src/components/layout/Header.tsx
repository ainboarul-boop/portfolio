import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { navLinks, siteConfig } from "@/lib/site";

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
  hasSubmenu?: boolean;
  variant?: "dark" | "light";
};

function NavItem({
  href,
  label,
  active,
  cta,
  hasSubmenu = false,
  variant = "dark",
}: NavLink) {
  const isLight = variant === "light";
  const textColor = isLight ? "text-[#1f1f1f]" : "text-white";

  if (cta) {
    return (
      <Link
        href={href}
        className={`group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ${
          active
            ? isLight
              ? "border-[#1f1f1f] bg-[#1f1f1f] text-white"
              : "border-[#d7b56d]/70 bg-[#d7b56d] text-[#11131a]"
            : isLight
              ? "border-[#1f1f1f] bg-[#1f1f1f] text-white hover:bg-[#2a2a2a]"
              : "border-white/18 bg-white/10 hover:border-[#d7b56d]/55 hover:bg-white/16 text-white"
        }`}
      >
        <ArrowIcon className="h-4 w-4 shrink-0" />
        <span>{label}</span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full px-3 py-2 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
        active ? textColor : `${textColor} hover:text-[#74633f]`
      }`}
      aria-current={active ? "page" : undefined}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
          active
            ? "bg-[#d7b56d]"
            : "bg-[#d7b56d]/0 group-hover:bg-[#d7b56d]"
        }`}
      />
      <span>{label}</span>
      {hasSubmenu && <ChevronDown className="mt-0.5 h-2 w-3 opacity-70" />}
    </Link>
  );
}

type HeaderProps = {
  activePath: string;
  variant?: "dark" | "light";
  onMenuOpen?: () => void;
  scrolled?: boolean;
  overlay?: boolean;
};

export function Header({
  activePath,
  variant = "dark",
  onMenuOpen,
  scrolled = false,
  overlay = false,
}: HeaderProps) {
  const isLight = variant === "light";
  const desktopFloating = scrolled;
  const transparentLightOverlay = isLight && overlay && !desktopFloating;
  const desktopSurface = isLight
    ? "lg:border-[#ebe5dc] lg:bg-white lg:text-[#1f1f1f] lg:shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
    : "lg:border-white/16 lg:bg-[#11131a]/74 lg:text-white lg:shadow-[0_18px_60px_rgba(0,0,0,0.3)]";
  const desktopTopState =
    overlay && !desktopFloating
      ? "lg:border-transparent lg:bg-transparent lg:shadow-none lg:backdrop-blur-0"
      : desktopSurface;
  const logoSrc = transparentLightOverlay
    ? images.logoLight
    : isLight || desktopFloating
      ? images.logo
      : images.logoLight;
  const brandTone = transparentLightOverlay
    ? "text-white"
    : isLight || desktopFloating
      ? "text-[#1f1f1f]"
      : "text-white";

  return (
    <header className="relative z-40 w-full">
      <div
        className={`mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-4 transition-all duration-300 md:px-8 md:py-5 lg:rounded-[24px] lg:border lg:px-8 lg:py-4 ${
          desktopTopState
        } ${desktopFloating ? "lg:max-w-[1260px]" : "lg:max-w-[1600px]"} ${
          !overlay && !desktopFloating ? "bg-white" : ""
        }`}
      >
        <Link
          href="/"
          className={`group flex min-w-0 items-center gap-3 transition-transform duration-300 hover:translate-x-0.5 ${brandTone}`}
          aria-label={`${siteConfig.name} home`}
        >
          <span
            className={`relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-current/10 ${
              transparentLightOverlay ? "bg-white/10" : "bg-balck"
            }`}
          >
            <Image
              src={logoSrc}
              alt=""
              fill
              sizes="44px"
              className="object-contain p-1.5"
              aria-hidden
            />
          </span>
          <span className="hidden min-w-0 sm:flex sm:flex-col">
            <span className="truncate font-[family-name:var(--font-antonio)] text-lg uppercase tracking-[0.14em]">
              AINBOW
            </span>
            <span className="truncate font-[family-name:var(--font-manrope)] text-[10px] font-semibold uppercase tracking-[0.26em] opacity-60">
              Creative Studio
            </span>
          </span>
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-3 lg:flex xl:gap-4"
          aria-label="Main navigation"
        >
          {navLinks
            .filter((link) => !("cta" in link && link.cta))
            .map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                label={link.label}
                active={activePath === link.href}
                hasSubmenu={"hasSubmenu" in link ? link.hasSubmenu : false}
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
          className={`ml-auto flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-2xl border transition-colors lg:hidden ${
            transparentLightOverlay
              ? "border-white/20 text-white hover:bg-white/10"
              : isLight
              ? "border-black text-[#29292c] hover:bg-black/5"
              : "border-white/20 text-white hover:bg-white/10"
          }`}
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current" />
        </button>
      </div>
    </header>
  );
}

export { NavItem, ChevronDown, ArrowIcon };
