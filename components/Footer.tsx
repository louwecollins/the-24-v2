"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-paper text-ink">
      {/* Huge wordmark block */}
      <div className="hairline-b overflow-hidden px-6 pt-20 md:px-16 md:pt-24">
        <h2
          className="pointer-events-none select-none whitespace-nowrap font-display leading-[0.82] text-ink"
          style={{ fontSize: "clamp(6rem, 22vw, 24rem)", letterSpacing: "-0.05em" }}
        >
          THE 24
        </h2>
      </div>

      {/* Link grid */}
      <div className="grid grid-cols-1 gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-16 md:py-20">
        <div className="flex flex-col gap-4">
          <p className="font-display text-[24px] leading-tight text-ink md:text-[28px]">
            21245 Devonshire St<br />Chatsworth, CA 91311
          </p>
          <a href="tel:+18188734664" className="font-sans text-[14px] uppercase tracking-wide text-ink hover:opacity-70">
            (818) 873-4664
          </a>
          <a href="mailto:hello@the24.com" className="font-sans text-[14px] text-ink underline underline-offset-4 hover:no-underline">
            hello@the24.com
          </a>
        </div>

        <FooterCol title="Explore" links={[
          { label: "Availability", href: "/availability" },
          { label: "Amenities", href: "/amenities" },
          { label: "Neighborhood", href: "/neighborhood" },
          { label: "Gallery", href: "/gallery" },
        ]} />

        <FooterCol title="Community" links={[
          { label: "24 Campus", href: "/campus" },
          { label: "Events", href: "/community" },
          { label: "Resident Login", href: "/login" },
          { label: "FAQ", href: "/faq" },
        ]} />

        <FooterCol title="Company" links={[
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
          { label: "Careers", href: "/careers" },
          { label: "Press", href: "/press" },
        ]} />
      </div>

      {/* Bottom bar */}
      <div className="hairline-t flex flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-16">
        <p className="font-sans text-[12px] uppercase tracking-wide text-ink/60">
          © {new Date().getFullYear()} The Twenty Four. Uncommon Developers.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="font-sans text-[12px] uppercase tracking-wide text-ink/60 hover:text-ink">
            Privacy
          </Link>
          <Link href="/terms" className="font-sans text-[12px] uppercase tracking-wide text-ink/60 hover:text-ink">
            Terms
          </Link>
          <Link href="/accessibility" className="font-sans text-[12px] uppercase tracking-wide text-ink/60 hover:text-ink">
            Accessibility
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-sans text-[12px] uppercase tracking-wide text-ink/50">{title}</p>
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className="font-sans text-[15px] text-ink hover:opacity-70 md:text-[16px]"
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}
