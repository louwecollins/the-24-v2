"use client";

import Link from "next/link";

/**
 * Three-bar header matching Figma 38:3.
 *  - Row 1 (black): promo strip
 *  - Row 2 (white): search | THE 24 | phone + CTA
 *  - Row 3 (transparent over hero): primary nav + resident login
 *
 * Rows 1 + 2 are solid; Row 3 sits as the top edge of the hero.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Promo bar */}
      <div className="flex h-[44px] items-center justify-center bg-ink px-4 text-center text-white">
        <p className="font-sans text-[13px] tracking-wide sm:text-[14px]">
          MOVE IN SPECIAL UP TO 4 WEEKS FREE
          <span className="mx-3 opacity-40">|</span>
          <Link href="/contact" className="underline underline-offset-[3px] hover:no-underline">
            CONTACT US
          </Link>
          <span className="ml-2">→</span>
        </p>
      </div>

      {/* Logo bar */}
      <div className="flex h-[64px] items-center justify-between border-b border-ink/10 bg-paper px-6 md:px-16">
        <Link
          href="/availability"
          className="flex items-center gap-2 text-ink/90 transition-colors hover:text-ink"
        >
          <SearchIcon />
          <span className="font-sans text-[12px] uppercase tracking-wide md:text-[14px]">
            Search Apartments
          </span>
        </Link>

        <Link
          href="/"
          aria-label="THE 24 home"
          className="font-display text-[28px] leading-none tracking-tightest text-ink md:text-[32px]"
        >
          THE 24
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="tel:+18188734664"
            className="hidden font-sans text-[14px] uppercase tracking-wide text-ink hover:opacity-70 md:block"
          >
            (818) 873-4664
          </a>
          <Link href="/contact" className="pill pill-dark !h-9 !text-[12px]">
            Schedule Tour
          </Link>
        </div>
      </div>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}
