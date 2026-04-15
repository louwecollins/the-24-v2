"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import PromoBar from "./PromoBar";

/**
 * Unified header — all three rows live together so there is never a gap
 * between the logo bar and the primary nav, even when the promo bar is
 * dismissed or while waiting for hydration.
 *
 *  - Row 1 (black): PromoBar — closable, persists
 *  - Row 2 (white): search | THE 24 | phone + CTA
 *  - Row 3: primary nav — transparent over the hero, solid white on scroll
 *          or on any non-home page.
 *
 * Behavior: Header is fixed at the top. It hides when scrolling DOWN past
 * 120px and returns on scroll UP.
 */

const NAV = [
  { label: "Availability", href: "/availability" },
  { label: "Amenities", href: "/amenities" },
  { label: "Neighborhood", href: "/neighborhood" },
  { label: "24 Campus", href: "/campus" },
  { label: "Gallery", href: "/gallery" },
];

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest > prev && latest > 120) setHidden(true);
    else setHidden(false);
    setScrolled(latest > 60);
  });

  // On homepage at top: nav bar is transparent over dark hero (white text).
  // Otherwise: solid paper with dark text.
  const navOverHero = isHome && !scrolled;

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 w-full"
    >
      <PromoBar />

      {/* Logo bar — always solid white */}
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

      {/* Primary nav — transparent over hero, solid otherwise */}
      <div
        className={`flex h-[56px] items-center justify-between px-6 transition-colors duration-500 ease-luxe md:px-16 ${
          navOverHero
            ? "border-b border-white/25 bg-transparent"
            : "border-b border-ink/10 bg-paper"
        }`}
      >
        <div className="hidden w-[140px] md:block" />

        <ul className="flex items-center gap-1">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`group relative inline-flex items-center px-3 py-2 font-sans text-[12px] uppercase tracking-wide transition-colors md:text-[14px] ${
                  navOverHero
                    ? "text-white/90 hover:text-white"
                    : "text-ink/80 hover:text-ink"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-1 left-3 right-3 h-px scale-x-0 transition-transform duration-500 ease-luxe group-hover:scale-x-100 ${
                    navOverHero ? "bg-white" : "bg-ink"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/login"
          className={`hidden items-center gap-2 font-sans text-[12px] uppercase tracking-wide underline underline-offset-[4px] transition-opacity hover:opacity-75 md:inline-flex md:text-[14px] ${
            navOverHero ? "text-white" : "text-ink"
          }`}
        >
          <UserIcon />
          Resident Login
        </Link>
      </div>
    </motion.header>
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

function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
