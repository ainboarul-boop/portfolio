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
  const textColor = isLight ? "text-[#29292c]" : "text-white";

  if (cta) {
    return (
      <Link
        href={href}
        className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full border px-6 py-3 font-[family-name:var(--font-alan)] text-base font-semibold tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5 md:text-lg ${
          active
            ? isLight
              ? "border-[#29292c]/45 bg-[#29292c] text-white shadow-[0_16px_35px_rgba(41,41,44,0.22)]"
              : "border-[#d7b56d]/70 bg-[#d7b56d] text-[#11131a] shadow-[0_16px_35px_rgba(215,181,109,0.28)]"
            : isLight
              ? "border-[#29292c]/18 bg-white/75 hover:border-[#29292c]/35 hover:bg-white"
              : "border-white/18 bg-white/10 hover:border-[#d7b56d]/55 hover:bg-white/16"
        }`}
      >
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.42),transparent_58%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <ArrowIcon className="relative h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        <span className="relative">{label}</span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-4 py-2.5 font-[family-name:var(--font-alan)] text-sm font-semibold tracking-[0.22em] transition-all duration-300 hover:-translate-y-0.5 md:text-base ${
        active ? textColor : `${textColor} hover:opacity-90`
      }`}
      aria-current={active ? "page" : undefined}
    >
      <span
        className={`absolute inset-0 rounded-full transition-all duration-300 ${
          active
            ? isLight
              ? "bg-[#29292c]/10 ring-1 ring-[#29292c]/12"
              : "bg-white/12 ring-1 ring-white/15"
            : isLight
              ? "bg-[#29292c]/0 group-hover:bg-[#29292c]/5"
              : "bg-white/0 group-hover:bg-white/7"
        }`}
      />
      <span
        className={`absolute bottom-1 left-4 h-[2px] rounded-full transition-all duration-300 ${
          active
            ? isLight
              ? "w-[calc(100%-2rem)] bg-[#d7b56d]"
              : "w-[calc(100%-2rem)] bg-[#d7b56d]"
            : "w-0 bg-transparent group-hover:w-[calc(100%-2rem)] group-hover:bg-current/35"
        }`}
      />
      <span
        className={`relative h-2 w-2 rounded-full transition-all duration-300 ${
          active
            ? "scale-100 bg-[#d7b56d] shadow-[0_0_14px_rgba(215,181,109,0.9)]"
            : "scale-0 bg-[#d7b56d]/0 group-hover:scale-100 group-hover:bg-current/40"
        }`}
      />
      <span className="relative">{label}</span>
      {hasSubmenu && <ChevronDown className="relative mt-0.5 h-2 w-3 opacity-70" />}
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
  const desktopSurface = isLight
    ? "lg:border-[#29292c]/10 lg:bg-white/88 lg:text-[#29292c] lg:shadow-[0_18px_60px_rgba(22,22,28,0.14)]"
    : "lg:border-white/16 lg:bg-[#11131a]/74 lg:text-white lg:shadow-[0_18px_60px_rgba(0,0,0,0.3)]";
  const desktopTopState =
    overlay && !desktopFloating
      ? "lg:border-transparent lg:bg-transparent lg:shadow-none lg:backdrop-blur-0"
      : desktopSurface;
  const logoSrc = isLight || desktopFloating ? images.logo : images.logoLight;
  const brandTone = isLight || desktopFloating ? "text-[#29292c]" : "text-white";

  return (
    <header className="relative z-40 w-full">
      <div
        className={`mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-4 transition-all duration-300 md:px-8 md:py-5 lg:rounded-[28px] lg:border lg:px-8 lg:py-4 lg:backdrop-blur-xl ${
          desktopTopState
        } ${desktopFloating ? "lg:max-w-[1260px]" : "lg:max-w-[1600px]"} ${
          !overlay && !desktopFloating ? "bg-white/95 backdrop-blur-md" : ""
        }`}
      >
        <Link
          href="/"
          className={`group flex min-w-0 items-center gap-3 transition-transform duration-300 hover:translate-x-0.5 ${brandTone}`}
          aria-label={`${siteConfig.name} home`}
        >
          <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-current/12 bg-white/10 backdrop-blur-md">
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
            <span className="truncate font-[family-name:var(--font-antonio)] text-lg uppercase tracking-[0.18em]">
              AINBOW
            </span>
            <span className="truncate font-[family-name:var(--font-manrope)] text-[10px] font-semibold uppercase tracking-[0.38em] opacity-65">
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
            isLight
              ? "border-[#29292c]/20 text-[#29292c] hover:bg-black/5"
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
