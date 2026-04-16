"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { usePromoState } from "@/hooks/usePromoState";

/**
 * Welcome modal shown on first visit. Dismissing (any way) transitions the
 * promo to its collapsed banner form at the top of the page, which can then
 * also be dismissed.
 *
 * Rendered at the layout root so it overlays all pages.
 */
export default function PromoModal() {
  const { state, setState } = usePromoState();
  const open = state === "modal";

  // Body scroll lock while the modal is open.
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // ESC to dismiss
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setState("banner");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setState]);

  const dismiss = () => setState("banner");

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="promo-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[90] flex items-end justify-center bg-ink/70 px-4 pb-6 pt-10 backdrop-blur-sm sm:items-center sm:px-6 sm:pb-6"
          onClick={dismiss}
          role="dialog"
          aria-modal="true"
          aria-labelledby="promo-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[660px] overflow-hidden bg-paper shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]"
          >
            {/* Image header */}
            <div className="relative h-[220px] w-full overflow-hidden sm:h-[280px] md:h-[320px]">
              <img
                src="/images/campus-twilight.jpg"
                alt=""
                aria-hidden
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/20 to-ink/45" />
            </div>

            {/* Close button */}
            <button
              onClick={dismiss}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink/30 text-white backdrop-blur-md transition-colors hover:bg-ink/60 md:h-11 md:w-11"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="flex flex-col gap-6 px-8 py-10 md:gap-7 md:px-12 md:py-12">
              <div className="flex items-center gap-3">
                <span className="inline-block h-[9px] w-[9px] rounded-full bg-ink" />
                <span className="font-sans text-[12px] uppercase tracking-wide text-ink">
                  Now Pre-Leasing
                </span>
              </div>
              <h2
                id="promo-modal-title"
                className="font-display leading-[0.98] text-ink"
                style={{
                  fontSize: "clamp(2.25rem, 5.5vw, 4rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Four weeks free.
                <br />
                Move in on us.
              </h2>
              <p className="max-w-[480px] font-sans text-[15px] leading-[1.6] text-ink md:text-[16px]">
                Studio to three-bedroom residences from $2,250/mo. South Tower
                now leasing — up to four weeks free with a 12-month lease.
              </p>
              <div className="mt-1 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  onClick={dismiss}
                  className="pill pill-dark"
                >
                  Schedule a Tour
                </Link>
                <button
                  type="button"
                  onClick={dismiss}
                  className="pill pill-outline-dark"
                >
                  Continue to Site
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
