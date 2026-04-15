"use client";

import Link from "next/link";

// Primary nav — lives inside the Hero section (white text over image).
const NAV = [
  { label: "Availability", href: "/availability" },
  { label: "Amenities", href: "/amenities" },
  { label: "Neighborhood", href: "/neighborhood" },
  { label: "24 Campus", href: "/campus" },
  { label: "Gallery", href: "/gallery" },
];

export default function HeroNav() {
  return (
    <nav className="relative z-20 flex h-[56px] items-center justify-between border-b border-white/25 px-6 text-white md:px-16">
      {/* Spacer for centering */}
      <div className="hidden w-[180px] md:block" />

      <ul className="flex items-center gap-1">
        {NAV.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group relative inline-flex items-center px-3 py-2 font-sans text-[12px] uppercase tracking-wide text-white/90 transition-colors hover:text-white md:text-[14px]"
            >
              {item.label}
              <span className="absolute bottom-1 left-3 right-3 h-px scale-x-0 bg-white transition-transform duration-500 ease-luxe group-hover:scale-x-100" />
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/login"
        className="hidden items-center gap-2 font-sans text-[12px] uppercase tracking-wide text-white underline underline-offset-[4px] transition-opacity hover:opacity-75 md:inline-flex md:text-[14px]"
      >
        <UserIcon />
        Resident Login
      </Link>
    </nav>
  );
}

function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
