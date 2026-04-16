"use client";

import Link from "next/link";
import { usePromoState } from "@/hooks/usePromoState";

/**
 * Collapsed banner form of the promo announcement. Only renders when the
 * shared state is "banner" (i.e., modal has been dismissed but the user
 * hasn't closed the banner too).
 */
export default function PromoBar() {
  const { state, setState } = usePromoState();

  if (state !== "banner") return null;

  return (
    <div className="relative flex min-h-[44px] items-center justify-center bg-ink px-10 text-center text-white sm:px-12">
      <p className="font-sans text-[11px] tracking-wide sm:text-[13px] md:text-[14px]">
        <span className="hidden sm:inline">MOVE IN SPECIAL UP TO </span>
        4 WEEKS FREE
        <span className="mx-2 opacity-40 sm:mx-3">|</span>
        <Link
          href="/contact"
          className="underline underline-offset-[3px] hover:no-underline"
        >
          CONTACT<span className="hidden sm:inline"> US</span>
        </Link>
        <span className="ml-1 sm:ml-2">→</span>
      </p>
      <button
        onClick={() => setState("gone")}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white md:right-4"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>
  );
}
