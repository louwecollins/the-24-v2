"use client";

import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

/**
 * Shared shell for stubbed inner pages. Shows a hairline-framed hero with the
 * page title, an eyebrow label, and a coming-soon note, then a quick link
 * back home. Keeps the editorial/magazine language of the homepage.
 */
export default function PageShell({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <main className="bg-paper text-ink">
      <Header />

      <section className="hairline-b relative overflow-hidden bg-paper pt-[108px]">
        <div className="flex flex-col gap-10 px-6 pb-24 pt-20 md:px-16 md:pb-32 md:pt-28">
          <div className="flex items-center gap-3">
            <span className="inline-block h-[10px] w-[10px] rounded-full bg-ink" />
            <span className="font-sans text-[14px] uppercase tracking-wide text-ink md:text-[16px]">
              {eyebrow}
            </span>
          </div>
          <h1
            className="max-w-[1400px] font-display leading-[0.98] text-ink"
            style={{ fontSize: "clamp(3.5rem, 12vw, 14rem)", letterSpacing: "-0.04em" }}
          >
            {title}
          </h1>
          <p className="max-w-[720px] font-sans text-[17px] leading-[1.6] text-ink md:text-[20px]">
            {copy}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <Link href="/contact" className="pill pill-dark">
              Schedule a Tour
            </Link>
            <Link href="/" className="pill pill-outline-dark">
              ← Back Home
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-20 md:px-16 md:py-28">
        <p className="mx-auto max-w-[640px] text-center font-sans text-[15px] uppercase tracking-wide text-ink/60">
          This page is still being composed. The homepage is the finished view —
          everything here will follow the same editorial language.
        </p>
      </section>

      <Footer />
    </main>
  );
}
