"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] w-full flex-col overflow-hidden bg-ink text-white">
      {/* Background video — aerial drone footage, with image poster fallback */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/campus-twilight.jpg"
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/images/hero-drone.mp4" type="video/mp4" />
          {/* Graceful fallback for browsers that don't support the tag */}
          <img
            src="/images/campus-twilight.jpg"
            alt="The 24 at twilight"
            className="h-full w-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-ink/55" />
      </div>

      {/* Bottom content block — wordmark + tagline share the same baseline */}
      <div className="relative z-10 mt-auto flex w-full flex-col items-stretch gap-10 pb-10 md:pb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <h1
          className="shrink-0 whitespace-nowrap pl-6 font-display leading-[0.82] text-white md:pl-10 lg:pl-6"
          style={{
            fontSize: "clamp(4.5rem, 15vw, 18rem)",
            letterSpacing: "-0.05em",
          }}
        >
          THE 24
        </h1>

        <div className="flex flex-col gap-6 px-6 md:gap-8 md:px-10 lg:max-w-[520px] lg:shrink lg:px-0 lg:pr-16 lg:pb-2">
          <p className="font-sans text-[15px] leading-relaxed text-white md:text-[18px] md:leading-[1.55]">
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
    </section>
  );
}
