"use client";

import Link from "next/link";

type Pin = {
  place: string;
  distance: string;
  detail: string;
};

const PINS: Pin[] = [
  { place: "Metrolink Station", distance: "6 min", detail: "Direct into Downtown LA" },
  { place: "Topanga Canyon", distance: "12 min", detail: "Trailheads & state park" },
  { place: "Westfield Topanga", distance: "10 min", detail: "Shopping + dining" },
  { place: "Warner Center", distance: "15 min", detail: "Offices + Costco" },
  { place: "Calabasas", distance: "20 min", detail: "The Commons + scenic drives" },
  { place: "Santa Monica Beach", distance: "42 min", detail: "Pacific Coast Highway" },
];

export default function Neighborhood() {
  return (
    <section className="hairline-b bg-ink text-white">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]">
        {/* Image */}
        <div className="relative h-[380px] w-full overflow-hidden lg:h-auto lg:min-h-[640px]">
          <img
            src="/images/bamboo-path.jpg"
            alt="Chatsworth neighborhood"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Copy + pins */}
        <div className="flex flex-col gap-10 px-6 py-16 md:px-16 md:py-24 lg:border-l lg:border-white/20">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="inline-block h-[10px] w-[10px] rounded-full bg-white" />
              <span className="font-sans text-[14px] uppercase tracking-wide text-white/80 md:text-[16px]">
                Neighborhood
              </span>
            </div>
            <h2
              className="font-display leading-[1.04] text-white"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)", letterSpacing: "-0.02em" }}
            >
              North of the noise, inside of everything.
            </h2>
            <p className="max-w-[620px] font-sans text-[17px] leading-[1.6] text-white/85 md:text-[19px]">
              Chatsworth sits where the San Fernando Valley meets the San
              Gabriels — close enough to be in LA, far enough to breathe. Trails
              out the back door, freight rail to DTLA out the front.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8">
            {PINS.map((pin, i) => (
              <div
                key={pin.place}
                className={`flex flex-col gap-1 border-white/20 py-5 ${
                  i >= 2 ? "border-t" : ""
                }`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-[22px] leading-tight text-white md:text-[26px]">
                    {pin.place}
                  </span>
                  <span className="font-sans text-[12px] uppercase tracking-wide text-white/60 md:text-[13px]">
                    {pin.distance}
                  </span>
                </div>
                <p className="font-sans text-[13px] text-white/65 md:text-[14px]">
                  {pin.detail}
                </p>
              </div>
            ))}
          </div>

          <Link href="/neighborhood" className="pill pill-outline-light self-start">
            Explore Chatsworth
          </Link>
        </div>
      </div>
    </section>
  );
}
