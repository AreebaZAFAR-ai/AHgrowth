"use client";

import Link from "next/link";

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  detail: string;
  href: string;
  accent?: boolean;
};

export default function ServiceCard({
  number,
  title,
  description,
  detail,
  href,
  accent,
}: ServiceCardProps) {
  return (
    <div
      className="
        group relative flex min-h-[160px] flex-col overflow-hidden
        rounded-2xl border border-white/10
        bg-gradient-to-b from-[#131313] to-[#0A0A0A]
        p-6 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.85)]
        transition-all duration-500 ease-out will-change-transform
        hover:-translate-y-1 hover:scale-[1.02]
        hover:border-white/20
        hover:from-[#161616] hover:to-[#0D0D0D]
        hover:shadow-[0_28px_65px_-24px_rgba(0,0,0,0.9)]
        sm:min-h-[180px] sm:p-7
      "
    >
      {/* subtle top hairline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex items-center gap-3">
        <span aria-hidden className="h-1 w-1 rounded-full bg-white/40" />
        <span className="font-heading text-sm text-white/50">{number}</span>

        {accent && (
          <span className="rounded-full border border-white/20 px-3 py-1 font-body text-[0.65rem] uppercase tracking-widest text-white/70">
            AI / GEO
          </span>
        )}
      </div>

      <h3 className="relative mt-3 font-heading text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
        {title}
      </h3>

      <p className="relative mt-2 line-clamp-2 font-body text-sm leading-relaxed text-text-secondary sm:text-base">
        {description}
      </p>

      <Link
        href={href}
        className="relative mt-auto inline-flex w-fit items-center gap-2 pt-4 font-body text-sm text-text-primary transition-colors duration-500 group-hover:text-white"
      >
        {detail}

        <span
          aria-hidden
          className="transition-transform duration-500 group-hover:translate-x-1.5"
        >
          →
        </span>
      </Link>
    </div>
  );
}
