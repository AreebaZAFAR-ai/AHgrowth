"use client";

import MediaPanel from "@/components/MediaPanel";

type WorkProjectCardProps = {
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  href: string;
  external?: boolean;
  mediaSrc?: string;
  mediaAlt: string;
  gradient: string;
  stat: {
    value: string;
    label: string;
  };
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
};

export default function WorkProjectCard({
  number,
  title,
  category,
  year,
  description,
  href,
  external,
  mediaSrc,
  mediaAlt,
  gradient,
  stat,
  onHoverStart,
  onHoverEnd,
}: WorkProjectCardProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="
        group
        block
        overflow-hidden
        rounded-[24px]
        bg-black
        p-3
        transition-transform
        duration-500
        ease-out
        hover:-translate-y-1
        sm:rounded-[28px]
        sm:p-4
      "
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onFocus={onHoverStart}
      onBlur={onHoverEnd}
      onClick={onHoverStart}
    >
      {/* ================= IMAGE ================= */}

      <div
        className="
          relative
          aspect-[4/3]
          w-full
          overflow-hidden
          rounded-[18px]
          bg-black/[0.03]
          transition-transform
          duration-500
          ease-out
          group-hover:scale-[1.01]
          sm:aspect-[16/11]
          sm:rounded-[20px]
        "
      >
        <div className="absolute inset-0">
          <MediaPanel
            src={mediaSrc}
            alt={mediaAlt}
            gradient={gradient}
            className="
              h-full
              w-full
              object-contain
              object-center
              p-2
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.025]
              sm:p-3
              md:p-4
            "
          />
        </div>

        {/* ================= STAT ================= */}

        <div
          className="
            absolute
            bottom-3
            left-3
            flex
            max-w-[85%]
            items-baseline
            gap-2
            rounded-xl
            bg-white/75
            px-3
            py-2
            backdrop-blur-md
            transition-transform
            duration-500
            group-hover:-translate-y-1
            sm:bottom-4
            sm:left-4
            sm:px-3.5
            sm:py-2
          "
        >
          <span
            className="
              font-heading
              text-lg
              font-bold
              text-black
              sm:text-xl
            "
          >
            {stat.value}
          </span>

          <span
            className="
              font-body
              text-[0.65rem]
              uppercase
              tracking-wide
              text-black/50
              sm:text-[0.7rem]
            "
          >
            {stat.label}
          </span>
        </div>
      </div>

      {/* ================= PROJECT INFO ================= */}

      <div className="px-1 pb-2 pt-4 sm:px-1.5 sm:pt-5">
        {/* Meta */}

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-x-2
            gap-y-1
            font-body
            text-[0.62rem]
            font-medium
            uppercase
            tracking-[0.16em]
            text-white/45
          "
        >
          <span>{number}</span>

          <span aria-hidden>•</span>

          <span>{category}</span>

          <span aria-hidden>•</span>

          <span>{year}</span>
        </div>

        {/* Title */}

        <h3
          className="
            mt-2
            font-heading
            !text-[25px]
            !font-bold
            leading-tight
            tracking-tight
            text-white
            sm:!text-[28px]
          "
        >
          {title}

          <span
            aria-hidden
            className="
              ml-1
              inline-block
              text-lg
              font-normal
              text-white
              opacity-0
              -translate-x-1
              transition-all
              duration-500
              ease-out
              group-hover:translate-x-0
              group-hover:opacity-100
            "
          >
            ↗
          </span>
        </h3>

        {/* Description */}

        <p
          className="
            mt-2
            max-w-lg
            font-body
            !text-[14px]
            !font-normal
            leading-[1.5]
            text-white/50
            sm:!text-[15px]
          "
        >
          {description}
        </p>
      </div>
    </a>
  );
}