"use client";

import Link from "next/link";

// Editorial amenity cards on a padded 3×2 grid with gaps —
// matches the breathing room of the Welcome / DualImage section above.
type Amenity = {
  label: string;
  image: string;
  description: string;
};

const AMENITIES: Amenity[] = [
  {
    label: "Two Resort Pools",
    image: "/images/pool-day.jpg",
    description: "Sunlit lap pool and shaded leisure pool, open year-round.",
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
      {/* Section header — padded container so it lives inside the same gutter as the grid */}
      <div className="mx-auto max-w-page px-6 py-20 md:px-16 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-block h-[10px] w-[10px] rounded-full bg-ink" />
              <span className="font-sans text-[14px] uppercase tracking-wide text-ink md:text-[16px]">
                Amenities
              </span>
            </div>
            <h2
              className="max-w-[880px] font-display leading-[1.04] text-ink"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              A resort, quietly hidden inside a neighborhood.
            </h2>
          </div>
          <Link
            href="/amenities"
            className="pill pill-outline-dark self-start md:self-end"
          >
            See All Amenities
          </Link>
        </div>

        {/* Grid of cards — gaps between, padded on all sides by the outer container */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16 md:grid-cols-3 md:gap-6">
          {AMENITIES.map((item) => (
            <AmenityCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AmenityCard({ item }: { item: Amenity }) {
  return (
    <div className="group relative overflow-hidden">
      <div className="relative h-[400px] w-full overflow-hidden md:h-[460px]">
        <img
          src={item.image}
          alt={item.label}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-luxe group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-6 p-6 text-white md:p-8">
        <div className="flex flex-col gap-2">
          <h3
            className="font-display leading-none text-white"
            style={{
              fontSize: "clamp(1.5rem, 2.1vw, 2rem)",
              letterSpacing: "-0.01em",
            }}
          >
            {item.label}
          </h3>
          <p className="max-w-[380px] font-sans text-[13px] leading-snug text-white/85 md:text-[14px]">
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
