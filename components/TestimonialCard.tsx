"use client";

import type { CSSProperties } from "react";

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  rating?: number;
  accent: { hex: string; rgb: string };
};

type TestimonialCardProps = {
  testimonial: Testimonial;
  isActive: boolean;
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function TestimonialCard({
  testimonial,
  isActive,
}: TestimonialCardProps) {
  const { quote, name, title, company, rating, accent } = testimonial;
  const cardStyle = { "--accent-rgb": accent.rgb } as CSSProperties;

  return (
    <div
      style={cardStyle}
      className="relative flex h-[360px] w-[86vw] max-w-[380px] flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.12] bg-white/[0.06] p-7 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl sm:h-[380px] sm:max-w-[420px] sm:p-8 lg:h-[400px] lg:max-w-[440px] lg:p-9"
    >
      {/* colorful gradient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(120% 100% at 12% -10%, rgba(var(--accent-rgb), ${isActive ? 0.28 : 0.14}), transparent 60%)`,
          opacity: 1,
        }}
      />

      {/* ambient blurred glow, stronger when active */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl transition-opacity duration-500"
        style={{
          background: accent.hex,
          opacity: isActive ? 0.35 : 0.15,
        }}
      />

      {/* subtle gradient border ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset"
        style={{ boxShadow: `inset 0 0 0 1px rgba(var(--accent-rgb), ${isActive ? 0.35 : 0.15})` }}
      />

      {/* tiny accent line */}
      <div
        aria-hidden
        className="relative h-[3px] w-10 rounded-full"
        style={{ background: accent.hex }}
      />

      {/* quote icon */}
      <svg
        aria-hidden
        viewBox="0 0 32 24"
        className="relative mt-4 h-7 w-9 shrink-0"
        style={{ color: accent.hex, opacity: 0.85 }}
        fill="currentColor"
      >
        <path d="M9.5 0C4.3 2.4 0 7.9 0 13.9 0 19.4 3.6 24 9.1 24c4.3 0 7.4-3.3 7.4-7.4 0-3.9-2.8-6.8-6.4-6.8-.7 0-1.3.1-1.6.2C9 6.2 11.9 3 15.9 1.1L9.5 0Zm17 0C21.3 2.4 17 7.9 17 13.9c0 5.5 3.6 10.1 9.1 10.1 4.3 0 7.4-3.3 7.4-7.4 0-3.9-2.8-6.8-6.4-6.8-.7 0-1.3.1-1.6.2C26 6.2 28.9 3 32.9 1.1L26.5 0Z" />
      </svg>

      {/* quote text */}
      <p className="relative mt-4 line-clamp-5 flex-1 font-body text-[0.95rem] leading-relaxed text-text-primary/90 sm:text-base">
        {quote}
      </p>

      {/* footer: avatar + name + rating */}
      <div className="relative mt-6 flex items-center gap-3">
        <div
          aria-hidden
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-heading text-sm font-semibold text-black"
          style={{
            background: `linear-gradient(135deg, ${accent.hex}, rgba(var(--accent-rgb),0.55))`,
          }}
        >
          {initials(name)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-body text-sm font-semibold text-text-primary">
            {name}
          </p>
          <p className="truncate font-body text-xs text-text-secondary">
            {title} · {company}
          </p>
        </div>

        {rating ? (
          <div aria-label={`${rating} out of 5 stars`} className="flex shrink-0 gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                viewBox="0 0 20 20"
                className="h-3 w-3"
                fill={i < rating ? accent.hex : "rgba(255,255,255,0.15)"}
              >
                <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9L10 14.9l-5.2 2.9 1-5.9L1.5 7.7l5.9-.8L10 1.5Z" />
              </svg>
            ))}
          </div>
        ) : null}
      </div>

      {/* soft bottom reflection */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 rounded-b-[1.75rem] bg-gradient-to-t from-white/[0.04] to-transparent"
      />
    </div>
  );
}
