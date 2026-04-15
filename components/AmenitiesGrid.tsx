"use client";

import Link from "next/link";

// Editorial magazine grid — continues the hairline-border aesthetic
type Amenity = {
  label: string;
  image: string;
  description: string;
  span?: "wide" | "tall" | "default";
};

const AMENITIES: Amenity[] = [
  {
    label: "Two Resort Pools",
    image: "/images/pool-day.jpg",
    description: "Sunlit lap pool and shaded leisure pool, open year-round.",
    span: "wide",
  },
  {
    label: "Two Fitness Centers",
    image: "/images/gym.jpg",
    description: "Strength, cardio, and functional training across two floors.",
  },
  {
    label: "Steam & Sauna",
    image: "/images/amenity-lounge.jpg",
    description: "Full spa suite with cold plunge, eucalyptus steam, dry sauna.",
  },
  {
    label: "Rooftop Fire Pits",
    image: "/images/outdoor-lounge.jpg",
    description: "Unobstructed San Gabriel views with lounge seating.",
    span: "tall",
  },
  {
    label: "Private Screening",
    image: "/images/theater.jpg",
    description: "Reservable 16-seat theater for films and watch parties.",
  },
  {
    label: "Clubhouse",
    image: "/images/clubhouse.jpg",
    description: "Co-working, events, kitchen, and resident lounge.",
  },
];

export default function AmenitiesGrid() {
  return (
    <section className="hairline-b bg-paper">
      {/* Section header */}
      <div className="hairline-b flex flex-col gap-6 px-6 py-16 md:flex-row md:items-end md:justify-between md:px-16 md:py-20">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-block h-[10px] w-[10px] rounded-full bg-ink" />
            <span className="font-sans text-[14px] uppercase tracking-wide text-ink md:text-[16px]">
              Amenities
            </span>
          </div>
          <h2
            className="max-w-[880px] font-display leading-[1.04] text-ink"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 5rem)", letterSpacing: "-0.02em" }}
          >
            A resort, quietly hidden inside a neighborhood.
          </h2>
        </div>
        <Link href="/amenities" className="pill pill-outline-dark self-start md:self-end">
          See All Amenities
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2">
        {AMENITIES.map((item, i) => (
          <AmenityCard key={item.label} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

function AmenityCard({ item, index }: { item: Amenity; index: number }) {
  // First item spans 2 cols on md+, last-col items keep their row
  const colSpan = index === 0 ? "md:col-span-2" : "";
  return (
    <div className={`group relative hairline-r hairline-b overflow-hidden ${colSpan}`}>
      <div className="relative h-[340px] w-full overflow-hidden md:h-[420px]">
        <img
          src={item.image}
          alt={item.label}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-luxe group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-6 p-6 text-white md:p-8">
        <div className="flex flex-col gap-2">
          <h3
            className="font-display leading-none text-white"
            style={{ fontSize: "clamp(1.5rem, 2.2vw, 2.25rem)", letterSpacing: "-0.01em" }}
          >
            {item.label}
          </h3>
          <p className="max-w-[380px] font-sans text-[13px] leading-snug text-white/85 md:text-[15px]">
            {item.description}
          </p>
        </div>
        <span className="font-sans text-[11px] uppercase tracking-wide text-white/70 transition-transform duration-500 ease-luxe group-hover:-translate-y-1">
          ↗
        </span>
      </div>
    </div>
  );
}
