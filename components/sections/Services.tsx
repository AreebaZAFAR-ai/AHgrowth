"use client";

import { useRef } from "react";
import MediaPanel from "@/components/MediaPanel";
import { gsap, useGSAP } from "@/lib/gsap";

type ServiceRow = {
  title: string;
  description: string;
  detail: string;
  href: string;
  accent?: boolean;
  mediaType: "video" | "image";
  mediaSrc?: string;
  mediaAlt: string;
  gradient: string;
  icon: string;
};

const SERVICES: ServiceRow[] = [
  {
    title: "Google Maps Business",
    description:
      "Turn local searches into real customers with a stronger Google Business presence, better visibility, and a location strategy built for discovery.",
    detail: "Grow local visibility",
    href: "/ServicesPages/googleMap",
    mediaType: "image",
    mediaSrc: "/assets/GM.jpg",
    mediaAlt: "Google Maps Business growth",
    gradient: "from-accent-lime/20 via-white to-white",
    icon: "/assets/location_icon.jpg",
  },
  {
    title: "Performance Marketing",
    description:
      "Build campaigns around measurable growth, using smarter targeting, creative testing, and conversion data to turn ad spend into meaningful results.",
    detail: "Scale what works",
    href: "/ServicesPages/performance",
    mediaType: "image",
    mediaSrc: "/assets/PM.jpg",
    mediaAlt: "Performance marketing dashboard",
    gradient: "from-accent-violet/15 via-white to-white",
    icon: "/assets/PM_icon.jpg",
  },
  {
    title: "Web & App Development",
    description:
      "Design and build fast, scalable digital products that feel premium, work seamlessly, and give your business the technology to grow.",
    detail: "Build your product",
    href: "/ServicesPages/web-development",
    mediaType: "image",
    mediaSrc: "/assets/web.jpg",
    mediaAlt: "Web and app development showcase",
    gradient: "from-accent-violet/20 via-accent-lime/10 to-white",
    icon: "/assets/web_icon.jpg",
  },
  {
    title: "AI & Automation",
    description:
      "Replace repetitive workflows with intelligent systems, AI agents, and automation that save time, reduce friction, and scale with your team.",
    detail: "Automate your workflow",
    href: "/ServicesPages/ai-search",
    mediaType: "image",
    mediaSrc: "/assets/ai.jpg",
    mediaAlt: "AI and automation system",
    gradient: "from-accent-lime/15 via-white to-white",
    icon: "/assets/ai_icon.jpg",
  },
  {
    title: "Digital Marketing",
    description:
      "Create a connected digital growth system across search, social, content, and campaigns that keeps your brand visible and moving forward.",
    detail: "Build your growth system",
    href: "/ServicesPages/digitalMarketing",
    mediaType: "image",
    mediaSrc: "/assets/DM.jpg",
    mediaAlt: "Digital marketing strategy",
    gradient: "from-accent-violet/15 via-white to-white",
    icon: "/assets/DM_icon.jpg",
  },
  {
    title: "Branding",
    description:
      "Build a distinctive identity with clear positioning, memorable visuals, and a consistent brand experience across every digital touchpoint.",
    detail: "Shape your brand",
    href: "/ServicesPages/branding",
    mediaType: "image",
    mediaSrc: "/assets/branding.jpg",
    mediaAlt: "Brand identity system",
    gradient: "from-accent-lime/20 via-accent-violet/10 to-white",
    icon: "/assets/brand_icon.jpg",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);

  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mediaRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      /* =========================================================
         HEADER ENTRANCE
      ========================================================= */

      if (headingRef.current && subheadingRef.current) {
        gsap.set(headingRef.current, {
          opacity: 0,
          y: 45,
          scale: 0.94,
          filter: "blur(10px)",
        });

        gsap.set(subheadingRef.current, {
          opacity: 0,
          y: 25,
          filter: "blur(7px)",
        });

        const headingTl = gsap.timeline({
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 88%",
            once: true,
          },
        });

        headingTl
          .to(headingRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "expo.out",
          })
          .to(
            subheadingRef.current,
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.8,
              ease: "power4.out",
            },
            "-=0.55",
          );
      }

      /* =========================================================
         SERVICE ROWS
      ========================================================= */

      rowRefs.current.forEach((row, index) => {
        if (!row) return;

        const title = row.querySelector("[data-service-title]");
        const description = row.querySelector(
          "[data-service-description]",
        );
        const link = row.querySelector("[data-service-link]");
        const media = row.querySelector("[data-service-media]");
        const glow = row.querySelector("[data-service-glow]");

        const textElements = [title, description, link];

        /* ROW ENTRANCE */

        gsap.set(row, {
          opacity: 0,
          scale: 0.96,
          filter: "blur(7px)",
        });

        /* TEXT ENTRANCE */

        gsap.set(textElements, {
          opacity: 0,
          y: index % 2 === 0 ? 30 : -30,
          scale: 0.97,
          filter: "blur(4px)",
        });

        /* MEDIA ENTRANCE */

        gsap.set(media, {
          opacity: 0,
          scale: 0.92,
          rotate: index % 2 === 0 ? -2 : 2,
          y: 25,
          filter: "blur(5px)",
        });

        /* GLOW ENTRANCE */

        gsap.set(glow, {
          opacity: 0,
          scale: 0.75,
        });

        /* ROW ANIMATION */

        gsap.to(row, {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power4.out",
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            once: true,
          },
        });

        /* TEXT ANIMATION */

        gsap.to(textElements, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.75,
          ease: "power4.out",
          stagger: 0.06,
          delay: 0.08,
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            once: true,
          },
        });

        /* MEDIA ANIMATION */

        gsap.to(media, {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "expo.out",
          delay: 0.05,
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            once: true,
          },
        });

        /* GLOW ANIMATION */

        gsap.to(glow, {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.15,
          scrollTrigger: {
            trigger: row,
            start: "top 88%",
            once: true,
          },
        });
      });

      /* =========================================================
         MEDIA PARALLAX
      ========================================================= */

      mediaRefs.current.forEach((el) => {
        if (!el) return;

        gsap.to(el, {
          yPercent: 2.5,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.7,
          },
        });
      });
    },
    {
      scope: sectionRef,
    },
  );

  /* =========================================================
     3D CARD TILT
  ========================================================= */

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>,
    index: number,
  ) => {
    const media = mediaRefs.current[index];

    if (!media) return;

    const rect = media.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    const rotateY = x * 16;
    const rotateX = -y * 16;

    gsap.to(media, {
      rotateY,
      rotateX,
      rotateZ: x * 1.5,
      x: x * 8,
      y: y * 8,
      scale: 1.035,
      transformPerspective: 1200,
      boxShadow: `
        ${-x * 25}px
        ${-y * 25 + 30}px
        70px
        -22px
        rgba(0, 0, 0, 0.42)
      `,
      duration: 0.4,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  /* =========================================================
     RESET CARD
  ========================================================= */

  const handleMouseLeave = (index: number) => {
    const media = mediaRefs.current[index];

    if (!media) return;

    gsap.to(media, {
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      x: 0,
      y: 0,
      scale: 1,
      boxShadow: "0 18px 55px -25px rgba(0, 0, 0, 0.32)",
      duration: 0.8,
      ease: "expo.out",
      overwrite: "auto",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[rgb(255,255,187)]
        px-8
        py-4
        sm:px-12
        sm:py-5
        md:px-20
        md:py-7
        lg:px-28
        lg:py-9
        xl:px-36
        2xl:px-44
      "
    >
      {/* =======================================================
          BLACK OUTER AMBIENT GLOW
      ======================================================= */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          bottom-1/4
          right-0
          h-[400px]
          w-[200px]
          rounded-full
          bg-[#D8D2FF]/5
          blur-[120px]
        "
      />

      {/* =======================================================
          INNER CREAM PANEL
      ======================================================= */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[24px]
          
          bg-[rgb(255,255,187)]
          sm:rounded-[30px]
          md:rounded-[34px]
          lg:rounded-[40px]
        "
      >
        {/* =====================================================
            INNER AMBIENT BACKGROUND
        ===================================================== */}

        <div
          aria-hidden
          className="
            pointer-events-none
            absolute
            -right-40
            top-10
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#DFFF4F]/8
            blur-[110px]
          "
        />

        <div
          aria-hidden
          className="
            pointer-events-none
            absolute
            -left-40
            bottom-10
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#D8D2FF]/8
            blur-[110px]
          "
        />

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[1400px]
            px-5
            py-12
            sm:px-8
            sm:py-14
            md:px-10
            lg:px-12
            lg:py-16
            xl:px-16
          "
        >
          {/* =================================================
              HEADER
          ================================================= */}

          <div
            className="
              mx-auto
              flex
              max-w-3xl
              flex-col
              items-center
              text-center
            "
          >
            <h2
              ref={headingRef}
              className="
                group/heading
                cursor-default
                font-heading
                text-4xl
                font-semibold
                leading-none
                tracking-[-0.05em]
                text-black
                transition-all
                duration-500
                ease-out
                hover:tracking-[-0.035em]
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              <span
                className="
                  inline-block
                  transition-transform
                  duration-500
                  ease-out
                  group-hover/heading:scale-[1.025]
                "
              >
                Services
              </span>
            </h2>

            <p
              ref={subheadingRef}
              className="
                group/subheading
                mt-3
                max-w-xl
                cursor-default
                font-heading
                text-lg
                font-medium
                leading-tight
                tracking-[-0.025em]
                text-black/50
                transition-all
                duration-500
                ease-out
                hover:text-black/75
                sm:mt-4
                sm:text-xl
                md:text-2xl
              "
            >
              <span
                className="
                  inline-block
                  transition-transform
                  duration-500
                  ease-out
                  group-hover/subheading:translate-y-[-2px]
                "
              >
                Elevating Growth in Unexpected Ways
              </span>
            </p>
          </div>

          {/* =================================================
              SERVICES
          ================================================= */}

          <div className="mt-8 sm:mt-10 lg:mt-12">
            {SERVICES.map((service, i) => {
              const textFirst = i % 2 === 0;

              return (
                <div
                  key={service.title}
                  ref={(el) => {
                    rowRefs.current[i] = el;
                  }}
                  className={`
                    group
                    relative
                    grid
                    grid-cols-1
                    items-center
                    gap-8
                    py-9
                    sm:gap-10
                    sm:py-11
                    md:grid-cols-2
                    md:gap-16
                    lg:gap-20
                    lg:py-14
                    xl:gap-24
                    ${
                      i !== SERVICES.length - 1
                        ? "pb-11 sm:pb-14 lg:pb-16"
                        : ""
                    }
                  `}
                >
                  {/* =========================================
                      TEXT
                  ========================================= */}

                  <div
                    className={`
                      relative
                      min-w-0
                      ${textFirst ? "md:order-1" : "md:order-2"}
                    `}
                  >
                    <div className="max-w-lg">
                      {/* TITLE */}

                      <div
                        data-service-title
                        className="
                          flex
                          items-center
                          gap-3
                          font-heading
                          text-2xl
                          font-semibold
                          leading-[1.02]
                          tracking-[-0.04em]
                          text-black
                          transition-all
                          duration-500
                          ease-out
                          group-hover:translate-x-2
                          group-hover:[text-shadow:0_8px_25px_rgba(0,0,0,0.12)]
                          sm:text-3xl
                          md:text-[34px]
                          lg:text-[40px]
                          xl:text-[44px]
                        "
                      >
                        {/* CIRCULAR ICON */}

                        <span
                          className="
                            relative
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            overflow-hidden
                            rounded-full
                            bg-black/[0.05]
                            p-2.5
                            shadow-[0_8px_20px_-12px_rgba(0,0,0,0.35)]
                            transition-all
                            duration-500
                            ease-out
                            group-hover:scale-110
                            group-hover:rotate-[-6deg]
                            group-hover:-translate-y-1
                            group-hover:bg-[#030303]
                            group-hover:shadow-[0_12px_25px_-10px_rgba(0,0,0,0.3)]
                            sm:h-11
                            sm:w-11
                            sm:p-2.5
                          "
                        >
                          <img
                            src={service.icon}
                            alt=""
                            aria-hidden="true"
                            className="
                              block
                              h-full
                              w-full
                              rounded-full
                              object-contain
                              transition-transform
                              duration-500
                              ease-out
                              group-hover:scale-105
                            "
                          />
                        </span>

                        {/* TITLE TEXT */}

                        <span
                          className="
                            inline-block
                            origin-left
                            transition-all
                            duration-500
                            ease-out
                            group-hover:scale-[1.025]
                            group-hover:font-bold
                          "
                        >
                          {service.title}
                        </span>
                      </div>

                      {/* DESCRIPTION */}

                      <p
                        data-service-description
                        className="
                          mt-4
                          max-w-md
                          text-justify
                          font-body
                          text-[14px]
                          font-medium
                          leading-[1.6]
                          text-black/50
                          transition-all
                          duration-500
                          ease-out
                          group-hover:translate-x-2
                          group-hover:text-black/75
                          group-hover:[text-shadow:0_4px_18px_rgba(0,0,0,0.08)]
                          sm:text-[15px]
                        "
                      >
                        {service.description}
                      </p>

                      {/* LINK */}

                      <a
                        data-service-link
                        href={service.href}
                        className="
                          group/link
                          mt-5
                          inline-flex
                          items-center
                          gap-2
                          font-body
                          text-[11px]
                          font-semibold
                          uppercase
                          tracking-[0.08em]
                          text-black
                          transition-all
                          duration-500
                          ease-out
                          group-hover:translate-x-2
                          sm:text-xs
                        "
                      >
                        <span
                          className="
                            border-b
                            border-black/25
                            pb-1
                            transition-all
                            duration-300
                            group-hover/link:border-black
                            group-hover/link:shadow-[0_3px_10px_rgba(0,0,0,0.12)]
                          "
                        >
                          {service.detail}
                        </span>

                        <span
                          className="
                            transition-transform
                            duration-300
                            group-hover/link:translate-x-1
                            group-hover/link:-translate-y-1
                          "
                        >
                          ↗
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* =========================================
                      MEDIA
                  ========================================= */}

                  <div
                    className={`
                      relative
                      min-w-0
                      h-[230px]
                      [perspective:1200px]
                      [transform-style:preserve-3d]
                      sm:h-[275px]
                      md:h-[300px]
                      lg:h-[340px]
                      xl:h-[370px]
                      ${textFirst ? "md:order-2" : "md:order-1"}
                    `}
                    onMouseMove={(event) =>
                      handleMouseMove(event, i)
                    }
                    onMouseLeave={() => handleMouseLeave(i)}
                  >
                    {/* GLOW */}

                    <div
                      data-service-glow
                      aria-hidden
                      className="
                        pointer-events-none
                        absolute
                        -inset-4
                        rounded-[28px]
                        bg-[#DFFF4F]/8
                        blur-3xl
                        transition-all
                        duration-700
                        group-hover:scale-110
                        group-hover:bg-[#DFFF4F]/14
                      "
                    />

                    {/* MEDIA CARD */}

                    <div
                      ref={(el) => {
                        mediaRefs.current[i] = el;
                      }}
                      data-service-media
                      className="
                        relative
                        h-full
                        w-full
                        overflow-hidden
                        rounded-[18px]
                        border
                        border-black/[0.07]
                        bg-white
                        shadow-[0_18px_55px_-25px_rgba(0,0,0,0.32)]
                        will-change-transform
                        transform-gpu
                        [transform-style:preserve-3d]
                        [transform-origin:center]
                        transition-[box-shadow,border-color]
                        duration-700
                        group-hover:border-black/[0.14]
                        group-hover:shadow-[0_35px_80px_-25px_rgba(0,0,0,0.38)]
                        sm:rounded-[20px]
                      "
                    >
                      {/* MEDIA */}

                      <MediaPanel
                        type={service.mediaType}
                        src={service.mediaSrc}
                        alt={service.mediaAlt}
                        gradient={service.gradient}
                        className="
                          h-full
                          w-full
                          will-change-transform
                          transform-gpu
                          [transform:translateZ(18px)]
                          transition-transform
                          duration-1000
                          ease-out
                          group-hover:scale-[1.055]
                          group-hover:[transform:translateZ(28px)]
                        "
                      />

                      {/* 3D LIGHT SWEEP */}

                      <div
                        aria-hidden
                        className="
                          pointer-events-none
                          absolute
                          inset-[-30%]
                          z-20
                          translate-x-[-120%]
                          rotate-12
                          bg-gradient-to-r
                          from-transparent
                          via-white/20
                          to-transparent
                          opacity-0
                          transition-all
                          duration-1000
                          ease-out
                          group-hover:translate-x-[120%]
                          group-hover:opacity-100
                        "
                      />

                      {/* LIGHT OVERLAY */}

                      <div
                        aria-hidden
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          z-10
                          bg-gradient-to-tr
                          from-black/8
                          via-transparent
                          to-white/15
                          opacity-0
                          transition-opacity
                          duration-500
                          group-hover:opacity-100
                        "
                      />

                      {/* EDGE LIGHT */}

                      <div
                        aria-hidden
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          rounded-[inherit]
                          ring-1
                          ring-inset
                          ring-white/0
                          transition-all
                          duration-500
                          group-hover:ring-white/30
                        "
                      />

                      {/* LIVE INDICATOR */}

                      <div
                        className="
                          absolute
                          right-3
                          top-3
                          z-30
                          flex
                          translate-y-[-4px]
                          items-center
                          gap-1.5
                          rounded-full
                          border
                          border-white/20
                          bg-black/50
                          px-2
                          py-1
                          opacity-0
                          backdrop-blur-md
                          transition-all
                          duration-500
                          group-hover:translate-y-0
                          group-hover:opacity-100
                        "
                      >
                        <span className="relative flex h-1.5 w-1.5">
                          <span
                            className="
                              absolute
                              inline-flex
                              h-full
                              w-full
                              animate-ping
                              rounded-full
                              bg-[#DFFF4F]
                              opacity-70
                            "
                          />

                          <span
                            className="
                              relative
                              inline-flex
                              h-1.5
                              w-1.5
                              rounded-full
                              bg-[#DFFF4F]
                            "
                          />
                        </span>

                        <span
                          className="
                            text-[7px]
                            font-semibold
                            uppercase
                            tracking-[0.14em]
                            text-white
                          "
                        >
                          Live
                        </span>
                      </div>

                      {/* BOTTOM SHADOW */}

                      <div
                        aria-hidden
                        className="
                          pointer-events-none
                          absolute
                          inset-x-0
                          bottom-0
                          z-10
                          h-1/3
                          bg-gradient-to-t
                          from-black/20
                          to-transparent
                          opacity-0
                          transition-opacity
                          duration-500
                          group-hover:opacity-100
                        "
                      />

                      {/* CARD INNER BORDER */}

                      <div
                        aria-hidden
                        className="
                          pointer-events-none
                          absolute
                          inset-[1px]
                          z-30
                          rounded-[inherit]
                          border
                          border-white/0
                          transition-all
                          duration-700
                          group-hover:border-white/20
                        "
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}