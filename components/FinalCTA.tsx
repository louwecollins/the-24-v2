"use client";

import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="hairline-b relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <img
          src="/images/cta-bg.jpg"
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/60 to-ink" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-10 px-6 py-32 text-center md:px-16 md:py-48">
        <div className="flex items-center gap-3">
          <span className="inline-block h-[10px] w-[10px] rounded-full bg-white" />
          <span className="font-sans text-[14px] uppercase tracking-wide text-white/80 md:text-[16px]">
            Schedule
          </span>
        </div>
        <h2
          className="max-w-[1100px] font-display leading-[1.02] text-white"
          style={{ fontSize: "clamp(3rem, 9vw, 9rem)", letterSpacing: "-0.03em" }}
        >
          Come see it in person.
        </h2>
        <p className="max-w-[620px] font-sans text-[17px] leading-[1.6] text-white/85 md:text-[19px]">
          Tours run daily. Walk the grounds, meet the team, and see why 390
          people already call this home.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/contact" className="pill pill-light">
            Schedule a Tour
          </Link>
          <Link href="/availability" className="pill pill-outline-light">
            View Availability
          </Link>
        </div>
      </div>
    </section>
  );
}
