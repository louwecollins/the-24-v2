"use client";

import Link from "next/link";
import { useState } from "react";

// Split section — Figma 38:60
// Left: copy block on #F2F2F2
// Right: stacked unit-type rows, topmost is featured (black, with image)
type UnitRow = {
  name: string;
  href: string;
  image?: string;
};

const UNITS: UnitRow[] = [
  { name: "1 Bedroom", href: "/availability#one-bedroom", image: "/images/living-room.jpg" },
  { name: "2 Bedrooms", href: "/availability#two-bedroom" },
  { name: "3 Bedrooms", href: "/availability#three-bedroom" },
  { name: "Studio Apartments", href: "/availability#studio" },
  { name: "Studio Lofts", href: "/availability#studio-loft" },
];

export default function WhyTwentyFour() {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const featured = UNITS[featuredIndex];
  const rest = UNITS.filter((_, i) => i !== featuredIndex);

  return (
    <section className="hairline-t hairline-b bg-bone">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: copy */}
        <div className="flex items-center border-ink/100 px-6 py-20 md:px-16 md:py-32 lg:border-r">
          <div className="flex w-full max-w-[640px] flex-col gap-8">
            <div className="flex items-center gap-3">
              <span className="inline-block h-[10px] w-[10px] rounded-full bg-ink" />
              <span className="font-sans text-[14px] uppercase tracking-wide text-ink md:text-[16px]">
                Why 24
              </span>
            </div>
            <h2
              className="font-display leading-[1.04] text-ink"
              style={{ fontSize: "clamp(2.5rem, 6.5vw, 6rem)", letterSpacing: "-0.02em" }}
            >
              The Lifestyle You Want. The Space You Need.
            </h2>
            <div className="flex flex-col gap-5 font-sans text-[16px] leading-[1.6] text-ink md:text-[18px]">
              <p>
                For renters who are tired of cramped apartments, endless
                traffic, and paying more for less, THE 24 offers a smarter
                alternative.
              </p>
              <p>
                Here, you get larger layouts, upscale finishes, premium
                amenities, and a location that keeps you connected to Los
                Angeles while giving you more room to breathe.
              </p>
              <p>
                It is everything people love about LA living — without the
                chaos that usually comes with it.
              </p>
            </div>
            <div className="pt-2">
              <Link href="/about" className="pill pill-outline-dark">
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Right: unit-type column */}
        <div className="flex flex-col">
          {/* Featured cell — black, with image */}
          <Link
            href={featured.href}
            className="group flex min-h-[420px] flex-col gap-8 bg-ink p-10 text-white transition-colors"
          >
            <div className="flex items-center justify-between">
              <h3
                className="font-display text-white"
                style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", letterSpacing: "-0.02em", lineHeight: 1 }}
              >
                {featured.name}
              </h3>
              <span className="font-sans text-[12px] uppercase tracking-wide text-white/70 transition-transform duration-500 ease-luxe group-hover:translate-x-1">
                Explore →
              </span>
            </div>
            <div className="relative h-[320px] w-full overflow-hidden">
              <img
                src={featured.image ?? "/images/living-room.jpg"}
                alt={featured.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-[1.03]"
              />
            </div>
          </Link>

          {/* Non-featured rows */}
          {rest.map((unit) => {
            // Find the original index in UNITS to swap featured
            const originalIndex = UNITS.findIndex((u) => u.name === unit.name);
            return (
              <button
                key={unit.name}
                onClick={() => setFeaturedIndex(originalIndex)}
                className="hairline-t group flex min-h-[110px] flex-1 items-center justify-between px-10 py-10 text-left transition-colors hover:bg-white md:min-h-[130px]"
              >
                <h3
                  className="font-display text-ink"
                  style={{ fontSize: "clamp(2rem, 3.8vw, 3.5rem)", letterSpacing: "-0.02em", lineHeight: 1 }}
                >
                  {unit.name}
                </h3>
                <span className="font-sans text-[12px] uppercase tracking-wide text-ink/60 transition-transform duration-500 ease-luxe group-hover:translate-x-1">
                  View →
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
