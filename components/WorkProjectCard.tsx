"use client";

import Link from "next/link";
import MediaPanel from "@/components/MediaPanel";

type WorkProjectCardProps = {
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  href: string;
  mediaType: "video" | "image";
  mediaSrc?: string;
  mediaAlt: string;
  gradient: string;
};

export default function WorkProjectCard({
  number,
  title,
  category,
  year,
  description,
  href,
  mediaType,
  mediaSrc,
  mediaAlt,
  gradient,
}: WorkProjectCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] sm:aspect-[16/12]">
        <div className="absolute inset-0">
          <MediaPanel
            type={mediaType}
            src={mediaSrc}
            alt={mediaAlt}
            gradient={gradient}
            className="h-full w-full"
          />
        </div>
      </div>

      <div className="mt-6 sm:mt-7">
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-body text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/45">
          <span>{number}</span>
          <span aria-hidden>•</span>
          <span>{category}</span>
          <span aria-hidden>•</span>
          <span>{year}</span>
        </div>

        <h3 className="mt-3 inline-flex items-baseline gap-2 font-heading text-2xl font-semibold tracking-tight text-white transition-colors duration-500 group-hover:text-[rgb(255,249,166)] sm:text-3xl lg:text-[2.25rem]">
          {title}
          <span
            aria-hidden
            className="text-lg font-normal opacity-0 transition-all duration-500 ease-out -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 sm:text-xl"
          >
            ↗
          </span>
        </h3>

        <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-white/50 sm:text-base">
          {description}
        </p>
      </div>
    </Link>
  );
}
