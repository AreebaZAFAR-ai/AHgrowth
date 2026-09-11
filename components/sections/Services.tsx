"use client";

import { useRef } from "react";
import MediaPanel from "@/components/MediaPanel";
import { gsap, useGSAP } from "@/lib/gsap";

type ServiceRow = {
  number: string;
  title: string;
  description: string;
  detail: string;
  href: string;
  accent?: boolean;
  mediaType: "video" | "image";
  mediaSrc?: string;
  mediaAlt: string;
  gradient: string;
};

const SERVICES: ServiceRow[] = [
  {
    number: "01",
    title: "SEO & Local SEO",
    description:
      "Technical fixes, content architecture, and local map-pack visibility built to compound month over month — not a one-time audit.",
    detail: "See how we rank",
    href: "/services#seo",
    mediaType: "video",
    mediaSrc: "/assets/seo.mp4",
    mediaAlt: "SEO growth visualization",
    gradient: "from-accent-lime/25 via-background to-background",
  },
  {
    number: "02",
    title: "Performance Marketing",
    description:
      "Google and Meta media buying engineered around payback period, not vanity CTR — every dollar tied to a revenue number.",
    detail: "Explore paid media",
    href: "/services#performance",
    mediaType: "image",
    mediaSrc: "/assets/marketing.png",
    mediaAlt: "Performance marketing dashboard",
    gradient: "from-accent-violet/25 via-background to-background",
  },
  {
    number: "03",
    title: "AI Search Optimization",
    description:
      "Structuring your brand's presence so it's the answer ChatGPT, Perplexity, and Google's AI Overviews actually cite.",
    detail: "See the AEO/GEO playbook",
    href: "/services#aeo",
    accent: true,
    mediaType: "video",
    mediaSrc: "/assets/AIsearch.mp4",
    mediaAlt: "AI search optimization preview",
    gradient:
      "from-accent-violet/30 via-accent-lime/10 to-background",
  },
  {
    number: "04",
    title: "Social Media Marketing",
    description:
      "Editorial-grade content systems and community management that turn feeds into a genuine demand-gen channel.",
    detail: "See the content system",
    href: "/services#social",
    mediaType: "image",
    mediaSrc: "/assets/social_media.png",
    mediaAlt: "Social media content grid",
    gradient: "from-accent-lime/20 via-background to-background",
  },
  {
    number: "05",
    title: "Web Development",
    description:
      "Fast, conversion-built sites — the kind of engineering that makes every other channel's traffic actually convert.",
    detail: "See our builds",
    href: "/services#web",
    mediaType: "video",
    mediaSrc: "/assets/website.mp4",
    mediaAlt: "Web development showcase",
    gradient:
      "from-accent-violet/20 via-background to-background",
  },
  {
    number: "06",
    title: "Branding",
    description:
      "Identity systems built to travel — positioning, voice, and visual language that hold up across every channel you touch.",
    detail: "See our identity work",
    href: "/services#branding",
    mediaType: "image",
    mediaSrc: "/assets/branding.png",
    mediaAlt: "Brand identity system",
    gradient:
      "from-accent-lime/25 via-accent-violet/10 to-background",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      rowRefs.current.forEach((row) => {
        if (!row) return;

        gsap.from(row.children, {
          autoAlpha: 0,
          y: 56,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: row,
            start: "top 82%",
            once: true,
          },
        });
      });

      parallaxRefs.current.forEach((el) => {
        if (!el) return;

        gsap.to(el, {
          yPercent: 3,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      });
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        border-y
        border-black/10
        bg-[rgb(240,249,166)]
        px-4
        pt-20
        pb-32
        shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(255,255,255,0.35)]
        sm:px-6
        sm:pt-28
        sm:pb-40
        lg:px-8
        lg:pt-32
        lg:pb-48
        xl:px-10
      "
    >
      <div className="relative z-10 mx-auto w-full max-w-none">

        {/* SECTION HEADER */}
        <div
          className="
            mx-auto
            flex
            max-w-5xl
            flex-col
            items-center
            justify-center
            text-center
          "
        >
          {/* SMALL HEADING */}
          <p
            className="
              font-['Space_Grotesk']
              text-sm
              font-bold
              uppercase
              tracking-[0.3em]
              text-black
              sm:text-base
            "
          >
            Services
          </p>

          {/* MAIN HEADING */}
          <h2
            className="
              mt-5
              max-w-4xl
              font-['Space_Grotesk']
              text-4xl
              font-bold
              leading-[0.95]
              tracking-[-0.04em]
              text-black
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Elevating Growth in Unexpected Ways
          </h2>
        </div>

        {/* SERVICES */}
        <div
          className="
            mt-12
            flex
            w-full
            flex-col
            sm:mt-16
            lg:mt-20
          "
        >
          {SERVICES.map((service, i) => {
            const textFirst = i % 2 === 0;

            return (
              <div
                key={service.number}
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
                className={`
                  grid
                  w-full
                  grid-cols-1
                  items-center
                  gap-14
                  py-20
                  md:gap-20
                  md:py-24
                  lg:gap-28
                  lg:py-32
                  xl:gap-36
                  xl:py-36
                  ${
                    textFirst
                      ? "md:grid-cols-[0.8fr_1.3fr]"
                      : "md:grid-cols-[1.3fr_0.8fr]"
                  }
                `}
              >

                {/* SERVICE TEXT */}
                <div
                  className={`
                    min-w-0
                    ${
                      textFirst
                        ? "md:order-1"
                        : "md:order-2"
                    }
                  `}
                >
                  <div className="max-w-md">

                    {/* NUMBER */}
                    <div className="mb-6 flex items-center gap-4">
                      <span
                        className="
                          font-['Space_Grotesk']
                          text-sm
                          font-bold
                          tracking-[0.2em]
                          text-black
                        "
                      >
                        {service.number}
                      </span>

                      <div className="h-px w-10 bg-black/40" />
                    </div>

                    {/* SERVICE TITLE */}
                    <h3
                      className="
                        font-['Space_Grotesk']
                        text-3xl
                        font-bold
                        leading-[1]
                        tracking-[-0.03em]
                        text-black
                        sm:text-4xl
                        lg:text-[2.9rem]
                        lg:leading-[0.98]
                      "
                    >
                      {service.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        mt-6
                        max-w-md
                        text-base
                        font-medium
                        leading-7
                        text-black
                        sm:text-lg
                        sm:leading-8
                      "
                    >
                      {service.description}
                    </p>

                    {/* LINK */}
                    <a
                      href={service.href}
                      className="
                        mt-8
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-bold
                        text-black
                        transition-all
                        duration-300
                        hover:gap-3
                        hover:opacity-60
                      "
                    >
                      {service.detail}

                      <span aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  </div>
                </div>

                {/* MEDIA PANEL */}
                <div
                  className={`
                    min-w-0
                    h-[150px]
                    sm:h-[180px]
                    md:h-[210px]
                    lg:h-[240px]
                    xl:h-[260px]
                    ${
                      textFirst
                        ? "md:order-2"
                        : "md:order-1"
                    }
                  `}
                >
                  <div
                    ref={(el) => {
                      parallaxRefs.current[i] = el;
                    }}
                    className="
                      h-full
                      w-full
                    "
                  >
                    <MediaPanel
                      type={service.mediaType}
                      src={service.mediaSrc}
                      alt={service.mediaAlt}
                      gradient={service.gradient}
                      className="h-full w-full"
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}