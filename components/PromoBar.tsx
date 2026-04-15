"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "the24-promo-dismissed";

export default function PromoBar() {
  // Start hidden during SSR/initial render, show only after we've checked storage.
  // Prevents a flash of the bar when it's already been dismissed.
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const dismissed =
      typeof window !== "undefined" &&
      window.localStorage.getItem(STORAGE_KEY) === "1";
    setVisible(!dismissed);
    setMounted(true);
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  };

  if (!mounted || !visible) return null;

  return (
    <div className="relative flex min-h-[44px] items-center justify-center bg-ink px-12 text-center text-white">
      <p className="font-sans text-[12px] tracking-wide sm:text-[13px] md:text-[14px]">
        MOVE IN SPECIAL UP TO 4 WEEKS FREE
        <span className="mx-3 opacity-40">|</span>
        <Link
          href="/contact"
          className="underline underline-offset-[3px] hover:no-underline"
        >
          CONTACT US
        </Link>
        <span className="ml-2">→</span>
      </p>
      <button
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white md:right-4"
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
