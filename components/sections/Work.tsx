"use client";

import { useRef } from "react";
import Link from "next/link";
import WorkProjectCard from "@/components/WorkProjectCard";
import { gsap, useGSAP } from "@/lib/gsap";

type Project = {
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

// Real client engagements from the AH Growth brief — same companies referenced
// in the Testimonials section, so Work and Testimonials stay consistent.
const PROJECTS: Project[] = [
  {
    number: "01",
    title: "Vantra SaaS",
    category: "AI Search Optimization",
    year: "2025",
    description:
      "Restructured Vantra's content and entity graph so answer engines cite them first — now the top-ranked source in ChatGPT and Perplexity for their category.",
    href: "/work",
    mediaType: "video",
    mediaSrc: "/assets/AIsearch.mp4",
    mediaAlt: "Vantra SaaS AI search optimization case study",
    gradient: "from-accent-violet/30 via-accent-lime/10 to-background",
  },
  {
    number: "02",
    title: "Northpeak Realty",
    category: "Performance Marketing",
    year: "2024",
    description:
      "Rebuilt the Meta media engine around payback period, not vanity CTR — landing a 4.8x return on ad spend.",
    href: "/work",
    mediaType: "image",
    mediaSrc: "/assets/marketing.png",
    mediaAlt: "Northpeak Realty performance marketing case study",
    gradient: "from-accent-violet/25 via-background to-background",
  },
  {
    number: "03",
    title: "Lumen Skincare",
    category: "SEO & Organic Growth",
    year: "2025",
    description:
      "Fixed the technical foundation and content architecture behind Lumen's organic channel — 312% traffic growth in six months.",
    href: "/work",
    mediaType: "video",
    mediaSrc: "/assets/seo.mp4",
    mediaAlt: "Lumen Skincare SEO growth case study",
    gradient: "from-accent-lime/25 via-background to-background",
  },
  {
    number: "04",
    title: "Forge Fitness Studios",
    category: "Local SEO & Web",
    year: "2024",
    description:
      "Sharpened local search presence and rebuilt the booking funnel — local leads up 260%, calendar now the bottleneck.",
    href: "/work",
    mediaType: "video",
    mediaSrc: "/assets/website.mp4",
    mediaAlt: "Forge Fitness Studios local growth case study",
    gradient: "from-accent-violet/20 via-background to-background",
  },
];

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(headerRef.current, {
        autoAlpha: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          once: true,
        },
      });

      if (gridRef.current) {
        gsap.from(gridRef.current.children, {
          autoAlpha: 0,
          y: 48,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }

      gsap.from(ctaRef.current, {
        autoAlpha: 0,
        y: 24,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 92%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-5 py-28 sm:px-8 sm:py-36 lg:px-10 xl:px-12"
    >
      <div className="relative mx-auto max-w-[1500px]">
        {/* SECTION HEADER */}
        <div
          ref={headerRef}
          className="flex flex-col gap-8 border-b border-white/10 pb-12 sm:pb-14 md:flex-row md:items-end md:justify-between lg:pb-16"
        >
          <div className="max-w-2xl">
            <span className="font-body text-xs font-bold uppercase tracking-[0.35em] text-[rgb(255,249,166)]">
              Selected Work
            </span>
            <h2 className="mt-5 font-heading text-4xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Work that moves brands.
            </h2>
          </div>

          <p className="max-w-sm font-body text-base leading-relaxed text-white/50 sm:text-lg md:pb-2">
            Selected engagements where strategy, design, and AI-search craft
            turned into revenue — not just better-looking metrics.
          </p>
        </div>

        {/* CLEAN 2-COLUMN EDITORIAL GRID */}
        <div
          ref={gridRef}
          className="mt-20 grid grid-cols-1 gap-x-10 gap-y-20 sm:mt-24 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-24 lg:gap-x-16 lg:gap-y-28"
        >
          {PROJECTS.map((project) => (
            <WorkProjectCard key={project.number} {...project} />
          ))}
        </div>

        {/* VIEW ALL WORK CTA */}
        <div ref={ctaRef} className="mt-24 flex justify-center sm:mt-28 lg:mt-32">
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3.5 font-body text-sm font-bold uppercase tracking-[0.15em] text-white transition-all duration-500 hover:border-[rgb(255,249,166)] hover:bg-[rgb(255,249,166)] hover:text-black sm:px-8 sm:py-4"
          >
            View all work
            <span
              aria-hidden
              className="transition-transform duration-500 group-hover:translate-x-1.5"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
