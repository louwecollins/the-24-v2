"use client";

import Link from "next/link";

const EVENTS = [
  { day: "Thu", date: "Apr 18", title: "Sunset Yoga on the Rooftop", time: "6:30 PM" },
  { day: "Sat", date: "Apr 20", title: "Resident Wine Tasting", time: "7:00 PM" },
  { day: "Tue", date: "Apr 23", title: "Co-Working Coffee Hour", time: "9:00 AM" },
  { day: "Fri", date: "Apr 26", title: "Film Night: Double Feature", time: "8:00 PM" },
];

export default function Community() {
  return (
    <section className="hairline-b bg-paper">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
        {/* Copy + events */}
        <div className="flex flex-col gap-10 px-6 py-16 md:px-16 md:py-24">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="inline-block h-[10px] w-[10px] rounded-full bg-ink" />
              <span className="font-sans text-[14px] uppercase tracking-wide text-ink md:text-[16px]">
                Community
              </span>
            </div>
            <h2
              className="max-w-[780px] font-display leading-[1.04] text-ink"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)", letterSpacing: "-0.02em" }}
            >
              An address with a calendar.
            </h2>
            <p className="max-w-[620px] font-sans text-[17px] leading-[1.6] text-ink md:text-[19px]">
              Weekly rooftop yoga. Wine tastings. Co-working coffee hours. Film
              nights. The Twenty Four isn&apos;t a place you come home to — it&apos;s
              where the next thing is always happening.
            </p>
          </div>

          <ul className="flex flex-col">
            {EVENTS.map((e, i) => (
              <li
                key={e.title}
                className={`flex items-center gap-6 py-5 ${
                  i > 0 ? "hairline-t" : ""
                }`}
              >
                <div className="flex w-[78px] flex-col">
                  <span className="font-sans text-[11px] uppercase tracking-wide text-ink/60">
                    {e.day}
                  </span>
                  <span className="font-display text-[22px] leading-tight text-ink md:text-[26px]">
                    {e.date}
                  </span>
                </div>
                <div className="flex flex-1 items-center justify-between gap-4">
                  <span className="font-sans text-[16px] leading-snug text-ink md:text-[18px]">
                    {e.title}
                  </span>
                  <span className="hidden font-sans text-[12px] uppercase tracking-wide text-ink/60 md:inline">
                    {e.time}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <Link href="/community" className="pill pill-outline-dark self-start">
            See Event Calendar
          </Link>
        </div>

        {/* Image */}
        <div className="relative min-h-[380px] w-full overflow-hidden lg:min-h-[720px] lg:border-l lg:border-ink">
          <img
            src="/images/clubhouse2.jpg"
            alt="Residents gathering at the clubhouse"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
