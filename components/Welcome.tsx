"use client";

import Link from "next/link";

// Centered intro headline — Figma 38:51
export default function Welcome() {
  return (
    <section className="bg-paper px-6 pb-24 pt-12 md:px-16 md:pb-32 md:pt-20">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-8 text-center">
        <h2
          className="font-display leading-[1.04] text-ink"
          style={{ fontSize: "clamp(2.5rem, 6.5vw, 6rem)", letterSpacing: "-0.02em" }}
        >
          Welcome to the Luxury Side of Los Angeles, Chatsworth
        </h2>
        <p className="max-w-[820px] font-sans text-[17px] leading-[1.6] text-ink md:text-[20px]">
          THE 24 was built for people who want more from where they live — more
          space, more comfort, more convenience, and a lifestyle that feels
          elevated every single day.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/availability" className="pill pill-dark">
            View Apartments
          </Link>
          <Link href="/contact" className="pill pill-outline-dark">
            Schedule a Tour
          </Link>
        </div>
      </div>
    </section>
  );
}
