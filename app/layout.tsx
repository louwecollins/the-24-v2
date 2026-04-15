import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "THE 24 — The Luxury Side of Los Angeles, Chatsworth",
  description:
    "Studio to three-bedroom residences in Chatsworth with resort-style amenities, mountain views, smart-home features, and room to live the way you want.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts — if reachable, loads Instrument Serif + Inter (close Hubot Sans substitute) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
