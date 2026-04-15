"use client";

import Link from "next/link";
import HeroNav from "./HeroNav";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-ink text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/campus-twilight.jpg"
          alt="The 24 at twilight"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
      </div>

      {/* Nav at top of hero */}
      <div className="relative z-10">
        <HeroNav />
      </div>

      {/* Content block anchored to bottom — grows to fill remaining viewport */}
      <div className="relative z-10 flex flex-1 flex-col justify-end pb-10 md:pb-14">
        {/* Massive wordmark — full-bleed left edge */}
        <h1
          className="pointer-events-none whitespace-nowrap font-display leading-[0.72] text-white"
          style={{
            fontSize: "clamp(6rem, 23vw, 25rem)",
            letterSpacing: "-0.05em",
          }}
        >
          THE 24
        </h1>

        {/* Tagline + CTAs, right-aligned under wordmark */}
        <div className="mt-8 flex justify-end px-6 md:mt-12 md:px-16">
          <div className="flex w-full max-w-[620px] flex-col gap-6 md:gap-8">
            <p className="font-sans text-[16px] leading-relaxed text-white md:text-[20px] md:leading-[1.5]">
              Spacious studio to three-bedroom residences in Chatsworth with
              resort-style amenities, mountain views, smart-home features, and
              room to live the way you want.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/availability" className="pill pill-light">
                View Apartments
              </Link>
              <Link href="/availability" className="pill pill-outline-light">
                Check Availability
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
