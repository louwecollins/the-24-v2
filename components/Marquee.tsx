"use client";

import { motion, useReducedMotion } from "framer-motion";

const WORDS = [
  "390 Residences",
  "Two Pools",
  "Two Gyms",
  "Steam & Sauna",
  "Rooftop Fire",
  "Smart Home",
  "Pet Friendly",
  "EV Charging",
  "Co-Working",
  "24/7 Concierge",
];

export default function Marquee() {
  const reduce = useReducedMotion();
  return (
    <section className="hairline-b overflow-hidden bg-ink py-10 text-white">
      <motion.div
        className="flex whitespace-nowrap"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {[...WORDS, ...WORDS].map((word, i) => (
          <span
            key={i}
            className="mx-8 font-display leading-none"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "-0.02em" }}
          >
            {word}
            <span className="ml-8 text-white/30">•</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
