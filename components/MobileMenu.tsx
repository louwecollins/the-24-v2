"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const NAV = [
  { label: "Availability", href: "/availability" },
  { label: "Amenities", href: "/amenities" },
  { label: "Neighborhood", href: "/neighborhood" },
  { label: "24 Campus", href: "/campus" },
  { label: "Gallery", href: "/gallery" },
];

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // Lock body scroll while the menu is open; unlock on close/unmount.
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[70] flex flex-col bg-ink text-white"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          {/* Header row inside menu */}
          <div className="flex h-[64px] shrink-0 items-center justify-between border-b border-white/15 px-6">
            <Link
              href="/"
              onClick={onClose}
              className="font-display text-[28px] leading-none tracking-tightest text-white"
            >
              THE 24
            </Link>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
            >
              <svg
                width="18"
                height="18"
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
          </div>

          {/* Primary nav — oversized editorial list */}
          <motion.nav
            className="flex flex-1 flex-col justify-center gap-2 px-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
            }}
          >
            {NAV.map((item) => (
              <motion.div
                key={item.href}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block border-b border-white/10 py-4 font-display text-[clamp(2.25rem,10vw,3rem)] leading-[0.95] tracking-tight text-white transition-opacity hover:opacity-70"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Footer row — utility links + CTA */}
          <div className="flex shrink-0 flex-col gap-4 border-t border-white/15 px-6 py-6">
            <div className="flex flex-col gap-2">
              <Link
                href="/login"
                onClick={onClose}
                className="font-sans text-[13px] uppercase tracking-wide text-white/80 underline underline-offset-[4px] hover:text-white"
              >
                Resident Login
              </Link>
              <a
                href="tel:+18188734664"
                className="font-sans text-[13px] uppercase tracking-wide text-white/80 hover:text-white"
              >
                (818) 873-4664
              </a>
            </div>
            <Link
              href="/contact"
              onClick={onClose}
              className="pill pill-light self-start"
            >
              Schedule Tour
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
