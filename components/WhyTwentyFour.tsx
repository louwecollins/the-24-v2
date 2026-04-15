"use client";

import Link from "next/link";
import { useState } from "react";

// Right side of the "Why 24" split — accordion of unit types.
// Uses the grid-template-rows 0fr→1fr trick for a buttery smooth, pure-CSS
// height transition. Content is always mounted (no AnimatePresence flicker),
// just clipped by the grid row when closed.

type UnitRow = {
  name: string;
  href: string;
  image: string;
  detail: string;
};

const UNITS: UnitRow[] = [
  {
    name: "1 Bedroom",
    href: "/availability#one-bedroom",
    image: "/images/living-room.jpg",
    detail: "660 sqft · Private terrace · From $2,650/mo.",
  },
  {
    name: "2 Bedrooms",
    href: "/availability#two-bedroom",
    image: "/images/bedroom2.jpg",
    detail: "980 sqft · Two full baths · From $3,450/mo.",
  },
  {
    name: "3 Bedrooms",
    href: "/availability#three-bedroom",
    image: "/images/deck.jpg",
    detail: "1,420 sqft · Dual primary suites · From $4,200/mo.",
  },
  {
    name: "Studio Apartments",
    href: "/availability#studio",
    image: "/images/bedroom.jpg",
    detail: "520 sqft · Efficient and elevated · From $2,250/mo.",
  },
  {
    name: "Studio Lofts",
    href: "/availability#studio-loft",
    image: "/images/walkin-closet.jpg",
    detail: "720 sqft · Double-height ceilings · From $2,900/mo.",
  },
];

export default function WhyTwentyFour() {
  // First item open by default — matches the Figma featured-unit intent.
  const [openIndex, setOpenIndex] = useState<number>(0);

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
              style={{
                fontSize: "clamp(2.5rem, 6.5vw, 6rem)",
                letterSpacing: "-0.02em",
              }}
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

        {/* Right: accordion — fixed row order, one open at a time */}
        <div className="flex flex-col">
          {UNITS.map((unit, i) => (
            <AccordionRow
              key={unit.name}
              unit={unit}
              isOpen={openIndex === i}
              onClick={() =>
                setOpenIndex((current) => (current === i ? -1 : i))
              }
              isFirst={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AccordionRow({
  unit,
  isOpen,
  onClick,
  isFirst,
}: {
  unit: UnitRow;
  isOpen: boolean;
  onClick: () => void;
  isFirst: boolean;
}) {
  return (
    <div
      className={`relative ${!isFirst ? "hairline-t" : ""} transition-colors duration-[600ms] ease-luxe ${
        isOpen ? "bg-ink" : "bg-bone"
      }`}
    >
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        className="group flex w-full items-center justify-between gap-6 px-6 py-8 text-left md:px-10 md:py-10"
      >
        <h3
          className="font-display leading-none transition-colors duration-[600ms] ease-luxe"
          style={{
            fontSize: "clamp(1.75rem, 3.4vw, 3.25rem)",
            letterSpacing: "-0.02em",
            color: isOpen ? "#ffffff" : "#030003",
          }}
        >
          {unit.name}
        </h3>
        <span
          aria-hidden
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-[600ms] ease-luxe ${
            isOpen
              ? "rotate-45 border-white/50 text-white"
              : "rotate-0 border-ink/30 text-ink group-hover:border-ink/70"
          }`}
        >
          <PlusIcon />
        </span>
      </button>

      {/* Accordion panel — grid-rows 0fr→1fr for smooth CSS height transition */}
      <div
        className="grid overflow-hidden transition-[grid-template-rows] duration-[600ms] ease-luxe"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-6 px-6 pb-10 md:px-10 md:pb-12">
            <div className="relative h-[280px] w-full overflow-hidden md:h-[360px]">
              <img
                src={unit.image}
                alt={unit.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="font-sans text-[14px] leading-relaxed text-white/80 md:text-[15px]">
                {unit.detail}
              </p>
              <Link
                href={unit.href}
                className="inline-flex shrink-0 items-center gap-2 font-sans text-[12px] uppercase tracking-wide text-white underline underline-offset-[4px] transition-opacity hover:opacity-75 md:text-[13px]"
              >
                Explore {unit.name}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}
