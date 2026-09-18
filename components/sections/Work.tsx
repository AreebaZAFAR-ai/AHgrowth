"use client";

import { useRef, useState } from "react";
import WorkProjectCard from "@/components/WorkProjectCard";
import { gsap, useGSAP } from "@/lib/gsap";

type Project = {
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  liveUrl: string;
  mediaSrc: string;
  mediaAlt: string;
  gradient: string;
  accentColor: string;
  stat: {
    value: string;
    label: string;
  };
};

const PROJECTS: Project[] = [
  {
    number: "01",
    title: "FitLat",
    category: "Fitness & Web Experience",
    year: "2025",
    description:
      "A premium fitness platform built around coaching, performance, and community, combining immersive storytelling with conversion-focused membership experiences.",
    liveUrl: "https://fitlat.vercel.app/",
    mediaSrc: "/assets/fitlat.jpg",
    mediaAlt: "FitLat fitness and strength conditioning website",
    gradient:
      "from-accent-violet/20 via-accent-lime/5 to-background",
    accentColor: "#E8DDF0",
    stat: {
      value: "200+",
      label: "Client transformations coached",
    },
  },

  {
    number: "02",
    title: "Modisch",
    category: "Architecture & Digital Experience",
    year: "2026",
    description:
      "An immersive architecture platform combining editorial storytelling, project visualization, and structured portfolio exploration to present 47 projects across 29 practice areas and 4 sectors.",
    liveUrl: "https://modisch-orcin.vercel.app/",
    mediaSrc: "/assets/modish.jpg",
    mediaAlt: "Modisch architecture and design website",
    gradient:
      "from-accent-violet/15 via-background to-background",
    accentColor: "#E8E8D2",
    stat: {
      value: "47",
      label: "Published Projects",
    },
  },

  {
    number: "03",
    title: "SolarLink",
    category: "Solar Energy & Web",
    year: "2025",
    description:
      "A conversion-focused solar platform combining premium design, interactive savings tools, real installation data, and clear energy solutions to turn complex solar decisions into confident customer actions.",
    liveUrl: "https://solarlink.com.pk/",
    mediaSrc: "/assets/soloar6.png",
    mediaAlt: "SolarLink solar energy website",
    gradient:
      "from-accent-lime/15 via-background to-background",
    accentColor: "#DCEBE7",
    stat: {
      value: "70-100%",
      label: "Estimated Bill Savings",
    },
  },

  {
    number: "04",
    title: "Cake Spot",
    category: "E-commerce & Web Experience",
    year: "2026",
    description:
      "A conversion-focused cake e-commerce experience built around custom ordering, occasion-based discovery, bestseller merchandising, and seamless delivery options across Lahore.",
    liveUrl: "https://cakespot-redesign.vercel.app/",
    mediaSrc: "/assets/cake1.png",
    mediaAlt: "Cake Spot cake e-commerce website",
    gradient:
      "from-accent-violet/15 via-background to-background",
    accentColor: "#F6DDDD",
    stat: {
      value: "6",
      label: "Celebration Categories",
    },
  },
];

const DEFAULT_BG = "#F7F5EF";

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const [activeColor, setActiveColor] =
    useState<string>(DEFAULT_BG);

  useGSAP(
    () => {
      /* ================= HEADER ENTRANCE ================= */

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
            "-=0.55"
          );
      }

      /* ================= PROJECT GRID ENTRANCE ================= */

      if (gridRef.current) {
        gsap.set(gridRef.current.children, {
          opacity: 0,
          y: 48,
          scale: 0.97,
          filter: "blur(6px)",
        });

        gsap.to(gridRef.current.children, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 88%",
            once: true,
          },
        });
      }
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      id="work"
      ref={sectionRef}
      className="
        relative
        scroll-mt-20
        overflow-hidden
        bg-black
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
      {/* ================= OUTER AMBIENT GLOW ================= */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          left-0
          top-1/4
          h-[400px]
          w-[200px]
          rounded-full
          bg-[#DFFF4F]/[0.025]
          blur-[140px]
        "
      />

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
          bg-[#D8D2FF]/[0.025]
          blur-[140px]
        "
      />

      {/* ================= INNER PANEL ================= */}

      <div
        style={{
          backgroundColor: activeColor,
        }}
        className="
          relative
          overflow-hidden
          rounded-[24px]
          transition-colors
          duration-1000
          ease-[cubic-bezier(0.22,1,0.36,1)]
          sm:rounded-[30px]
          md:rounded-[34px]
          lg:rounded-[40px]
        "
      >
        {/* ================= INNER AMBIENT BACKGROUND ================= */}

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
            bg-[#DFFF4F]/[0.035]
            blur-[130px]
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
            bg-[#D8D2FF]/[0.035]
            blur-[130px]
          "
        />

        {/* ================= CONTENT ================= */}

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
          {/* ================= HEADER ================= */}

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
            <h3
              ref={headingRef}
              className="
                font-heading
                text-4xl
                font-semibold
                leading-none
                tracking-[-0.05em]
                text-black
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Work
            </h3>

            <p
              ref={subheadingRef}
              className="
                mt-3
                max-w-xl
                font-heading
                text-lg
                font-medium
                leading-tight
                tracking-[-0.025em]
                text-black/50
                sm:mt-4
                sm:text-xl
                md:text-2xl
              "
            >
              Work that moves brands.
            </p>
          </div>

          {/* ================= PROJECTS ================= */}

          <div
            ref={gridRef}
            className="
              mt-8
              grid
              grid-cols-1
              gap-7
              sm:mt-10
              sm:grid-cols-2
              sm:gap-9
              md:gap-10
              lg:mt-12
              lg:gap-14
              xl:gap-16
            "
          >
            {PROJECTS.map((project) => (
              <WorkProjectCard
                key={project.liveUrl}
                number={project.number}
                title={project.title}
                category={project.category}
                year={project.year}
                description={project.description}
                mediaSrc={project.mediaSrc}
                mediaAlt={project.mediaAlt}
                gradient={project.gradient}
                stat={project.stat}
                href={project.liveUrl}
                external
                onHoverStart={() =>
                  setActiveColor(project.accentColor)
                }
                onHoverEnd={() =>
                  setActiveColor(DEFAULT_BG)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}