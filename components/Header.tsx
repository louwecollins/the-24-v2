"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import PromoBar from "./PromoBar";

/**
 * Three-bar header matching Figma 38:3.
 *  - Row 1 (black): promo strip — closable, persists via localStorage
 *  - Row 2 (white): search | THE 24 | phone + CTA
 *
 * Behavior:
 *  - Fixed at top (overlays content so hero can be true 100svh)
 *  - Hides on scroll DOWN past 100px, returns on scroll UP
 */
export default function Header() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest > prev && latest > 120) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 w-full"
    >
      <PromoBar />

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
