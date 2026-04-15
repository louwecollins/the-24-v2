"use client";

import Link from "next/link";
import HeroNav from "./HeroNav";

export default function Hero() {
  return (
    <section className="relative h-[800px] w-full overflow-hidden bg-ink text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/campus-twilight.jpg"
          alt="The 24 at twilight"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
      </div>

      {/* Nav sits at top of hero */}
      <div className="relative z-10">
        <HeroNav />
      </div>

      {/* Massive display wordmark */}
      <h1
        className="pointer-events-none absolute bottom-[240px] left-0 z-10 whitespace-nowrap font-display leading-[0.72] text-white"
        style={{ fontSize: "clamp(9rem, 23vw, 25rem)", letterSpacing: "-0.05em" }}
      >
        THE 24
      </h1>

      {/* Tagline + CTAs, right side */}
      <div className="absolute bottom-[80px] right-6 z-10 flex max-w-[560px] flex-col items-start gap-8 md:right-16">
        <p className="font-sans text-[17px] leading-relaxed text-white md:text-[20px] md:leading-[1.5]">
          Spacious studio to three-bedroom residences in Chatsworth with
          resort-style amenities, mountain views, smart-home features, and room
          to live the way you want.
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
    </section>
  );
}
