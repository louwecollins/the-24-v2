"use client";

// Two-image grid — asymmetric (60/40 split) per Figma 38:47
export default function DualImage() {
  return (
    <section className="bg-paper px-6 py-20 md:px-16 md:pt-24">
      <div className="mx-auto flex max-w-page flex-col gap-4 md:flex-row md:gap-8">
        <div className="relative h-[360px] flex-[1.65] overflow-hidden md:h-[600px]">
          <img
            src="/images/campus-wide.jpg"
            alt="The 24 exterior wide shot"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative h-[360px] flex-1 overflow-hidden md:h-[600px]">
          <img
            src="/images/deck.jpg"
            alt="Rooftop deck with mountain views"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
