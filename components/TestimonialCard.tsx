"use client";

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  rating: number;
  accent: {
    hex: string;
    rgb: string;
  };
};

type TestimonialCardProps = {
  testimonial: Testimonial;
  isActive?: boolean;
};

export default function TestimonialCard({
  testimonial,
  isActive = false,
}: TestimonialCardProps) {
  const rating = Math.max(0, Math.min(5, testimonial.rating));

  return (
    <article
      className={`
        group relative
        w-[min(86vw,560px)]
        overflow-hidden
        rounded-[2rem]
        border border-white/10
        bg-[#111111]
        shadow-2xl
        transition-all duration-500
        sm:w-[min(78vw,600px)]
        lg:w-[600px]
        ${isActive ? "border-white/20" : ""}
      `}
      style={{
        boxShadow: isActive
          ? `0 30px 100px rgba(${testimonial.accent.rgb}, 0.14)`
          : "0 25px 80px rgba(0,0,0,0.45)",
      }}
    >
      {/* Accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-30"
        style={{
          background: testimonial.accent.hex,
        }}
      />

      {/* Top accent line */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-0 h-[2px]"
        style={{
          background: `linear-gradient(
            90deg,
            transparent,
            ${testimonial.accent.hex},
            transparent
          )`,
        }}
      />

      <div className="relative p-7 sm:p-9 lg:p-10">
        {/* Quote mark */}
        <div
          aria-hidden
          className="mb-5 font-heading text-5xl font-bold leading-none"
          style={{
            color: testimonial.accent.hex,
          }}
        >
          “
        </div>

        {/* Quote */}
        <blockquote className="max-w-[520px] font-heading text-lg font-medium leading-[1.4] tracking-[-0.02em] text-white sm:text-1xl lg:text-[16px]">
          {testimonial.quote}
        </blockquote>

        {/* Bottom information */}
        <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-heading text-base font-semibold text-white sm:text-lg">
              {testimonial.name}
            </p>

            <p className="mt-1 font-body text-sm text-white/50">
              {testimonial.title}
              <span className="mx-2 text-white/20">•</span>
              {testimonial.company}
            </p>
          </div>

          {/* Rating */}
          <div
            className="flex items-center gap-1"
            aria-label={`${rating} out of 5 stars`}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className="text-lg leading-none"
                style={{
                  color:
                    index < rating
                      ? testimonial.accent.hex
                      : "rgba(255,255,255,0.15)",
                }}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}