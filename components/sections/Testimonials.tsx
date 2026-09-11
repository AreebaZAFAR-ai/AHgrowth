"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import TestimonialCard, { type Testimonial } from "@/components/TestimonialCard";
import { gsap, useGSAP } from "@/lib/gsap";

// Accent palette shared with the Services cards for cross-section consistency,
// plus two new tasteful additions (coral, soft orange).
const ACCENTS = {
  lavender: { hex: "#A78BFA", rgb: "167, 139, 250" },
  lime: { hex: "#C6FF3D", rgb: "198, 255, 61" },
  cyan: { hex: "#22D3EE", rgb: "34, 211, 238" },
  coral: { hex: "#FF6B6B", rgb: "255, 107, 107" },
  orange: { hex: "#FFA35C", rgb: "255, 163, 92" },
  blue: { hex: "#3B82F6", rgb: "59, 130, 246" },
  pink: { hex: "#FF2BD6", rgb: "255, 43, 214" },
};

// Real placeholder testimonial from the brand brief, plus additional
// placeholder quotes in the same voice — this whole site is fake/demo
// content per Brief.md, so these are written to match, not invented facts.
const TESTIMONIALS: Testimonial[] = [
  {
    id: "sarah-kim",
    quote:
      "AH Growth didn't just improve our numbers — they rebuilt how we think about growth entirely.",
    name: "Sarah Kim",
    title: "Founder",
    company: "Lumen Skincare",
    rating: 5,
    accent: ACCENTS.lavender,
  },
  {
    id: "marcus-chen",
    quote:
      "Our Meta ROAS went from an afterthought to our best-performing channel. They treat media spend like an engineering problem, not a guessing game.",
    name: "Marcus Chen",
    title: "Marketing Director",
    company: "Northpeak Realty",
    rating: 5,
    accent: ACCENTS.lime,
  },
  {
    id: "priya-anand",
    quote:
      "We're now the answer ChatGPT gives for our category. That's not luck — that's a team that understood AI search before anyone else did.",
    name: "Priya Anand",
    title: "Head of Growth",
    company: "Vantra SaaS",
    rating: 5,
    accent: ACCENTS.cyan,
  },
  {
    id: "jonah-price",
    quote:
      "Local leads are up 260% and our booking calendar is finally the bottleneck, not our marketing.",
    name: "Jonah Price",
    title: "Owner",
    company: "Forge Fitness Studios",
    rating: 5,
    accent: ACCENTS.coral,
  },
  {
    id: "elena-ruiz",
    quote:
      "They rebuilt our brand and our local rankings in the same breath. It finally feels like one strategy instead of five vendors.",
    name: "Elena Ruiz",
    title: "Co-Founder",
    company: "Coastal & Co.",
    rating: 5,
    accent: ACCENTS.orange,
  },
  {
    id: "devon-brooks",
    quote:
      "We went from page three to the map pack in six weeks. The phone hasn't stopped since.",
    name: "Devon Brooks",
    title: "VP Marketing",
    company: "Bright Path Dental",
    rating: 5,
    accent: ACCENTS.blue,
  },
  {
    id: "maya-thompson",
    quote:
      "The new site converts nearly 3x what we had before, and paid media finally has something worth sending traffic to.",
    name: "Maya Thompson",
    title: "Founder",
    company: "Aria Home Goods",
    rating: 5,
    accent: ACCENTS.pink,
  },
];

type Breakpoint = "mobile" | "tablet" | "desktop";

type Slot = { x: number; rotate: number; scale: number; opacity: number };

// Geometry per breakpoint, indexed by |offset| from the active card (0..3).
const GEOMETRY: Record<Breakpoint, Slot[]> = {
  desktop: [
    { x: 0, rotate: 0, scale: 1, opacity: 1 },
    { x: 62, rotate: 9, scale: 0.86, opacity: 0.55 },
    { x: 112, rotate: 15, scale: 0.72, opacity: 0.22 },
    { x: 150, rotate: 18, scale: 0.62, opacity: 0 },
  ],
  tablet: [
    { x: 0, rotate: 0, scale: 1, opacity: 1 },
    { x: 78, rotate: 8, scale: 0.82, opacity: 0.45 },
    { x: 140, rotate: 12, scale: 0.65, opacity: 0 },
    { x: 170, rotate: 14, scale: 0.55, opacity: 0 },
  ],
  mobile: [
    { x: 0, rotate: 0, scale: 1, opacity: 1 },
    { x: 58, rotate: 6, scale: 0.82, opacity: 0.4 },
    { x: 100, rotate: 8, scale: 0.68, opacity: 0 },
    { x: 130, rotate: 10, scale: 0.6, opacity: 0 },
  ],
};

function useBreakpoint(): Breakpoint {
  const [bp, setBp] = useState<Breakpoint>("desktop");

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setBp(w < 640 ? "mobile" : w < 1024 ? "tablet" : "desktop");
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return bp;
}

function getCircularOffset(index: number, active: number, total: number) {
  let diff = index - active;
  const half = total / 2;
  if (diff > half) diff -= total;
  if (diff < -half) diff += total;
  return diff;
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const glowLayerRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const [active, setActive] = useState(0);
  const breakpoint = useBreakpoint();
  const total = TESTIMONIALS.length;

  const hoverRef = useRef(false);
  const dragRef = useRef<{ startX: number; dragging: boolean }>({
    startX: 0,
    dragging: false,
  });

  const goTo = useCallback(
    (i: number) => {
      setActive(((i % total) + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Autoplay — subtle, pauses on hover/focus.
  useEffect(() => {
    const id = setInterval(() => {
      if (!hoverRef.current) {
        setActive((a) => (a + 1) % total);
      }
    }, 5200);
    return () => clearInterval(id);
  }, [total]);

  // Position every card whenever the active index or breakpoint changes.
  useEffect(() => {
    const maxOffset = breakpoint === "desktop" ? 2 : 1;
    const geo = GEOMETRY[breakpoint];

    TESTIMONIALS.forEach((_, i) => {
      const el = cardRefs.current[i];
      if (!el) return;

      const offset = getCircularOffset(i, active, total);
      const dir = Math.sign(offset);
      const abs = Math.min(Math.abs(offset), geo.length - 1);
      const slot = geo[abs];
      const withinRange = Math.abs(offset) <= maxOffset;

      gsap.to(el, {
        xPercent: -50 + dir * slot.x,
        yPercent: -50,
        rotate: dir * slot.rotate,
        scale: slot.scale,
        opacity: withinRange ? slot.opacity : 0,
        zIndex: 50 - Math.abs(offset) * 10,
        pointerEvents: withinRange ? "auto" : "none",
        duration: 0.85,
        ease: "power3.out",
        overwrite: "auto",
      });
    });
  }, [active, breakpoint, total]);

  // Crossfade the ambient glow layers to match the active card's accent.
  useEffect(() => {
    const activeId = TESTIMONIALS[active].id;
    Object.entries(glowLayerRefs.current).forEach(([id, el]) => {
      if (!el) return;
      gsap.to(el, {
        opacity: id === activeId ? 1 : 0,
        duration: 0.8,
        ease: "power2.out",
      });
    });
  }, [active]);

  // Entrance animation for the whole section.
  useGSAP(
    () => {
      if (!stageRef.current) return;
      gsap.from(stageRef.current, {
        autoAlpha: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: stageRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  const onPointerDown = (e: React.PointerEvent) => {
    dragRef.current = { startX: e.clientX, dragging: true };
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragRef.current.dragging) return;
    const dx = e.clientX - dragRef.current.startX;
    dragRef.current.dragging = false;
    if (Math.abs(dx) > 50) {
      if (dx < 0) next();
      else prev();
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050505] px-5 py-28 sm:px-8 sm:py-36 lg:px-10 xl:px-12"
    >
      {/* ambient radial lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 12% 15%, rgba(91,76,255,0.14), transparent 60%), radial-gradient(45% 40% at 90% 80%, rgba(198,255,61,0.08), transparent 60%)",
        }}
      />
      {/* glow layers that crossfade to follow the active card's accent */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.id}
            ref={(el) => {
              glowLayerRefs.current[testimonial.id] = el;
            }}
            className="absolute inset-0"
            style={{
              opacity: testimonial.id === TESTIMONIALS[active].id ? 1 : 0,
              background: `radial-gradient(45% 45% at 50% 42%, rgba(${testimonial.accent.rgb}, 0.22), transparent 70%)`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1500px]">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-body text-xs uppercase tracking-[0.35em] text-accent-lime">
            Testimonials
          </span>
          <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl md:text-6xl">
            What Growth Sounds Like
          </h2>
        </div>

        <div
          ref={stageRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          tabIndex={0}
          onMouseEnter={() => (hoverRef.current = true)}
          onMouseLeave={() => (hoverRef.current = false)}
          onFocus={() => (hoverRef.current = true)}
          onBlur={() => (hoverRef.current = false)}
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          className="relative mt-16 h-[420px] w-full touch-pan-y select-none overflow-hidden outline-none sm:h-[440px] lg:mt-20 lg:h-[460px]"
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <div
              key={testimonial.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              onClick={() => i !== active && goTo(i)}
              className={`absolute left-1/2 top-1/2 ${i !== active ? "cursor-pointer" : ""}`}
            >
              <TestimonialCard testimonial={testimonial} isActive={i === active} />
            </div>
          ))}
        </div>

        {/* controls */}
        <div className="relative mt-10 flex items-center justify-center gap-6 lg:mt-14">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prev}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-text-primary transition-all duration-300 hover:border-white/40 hover:bg-white/5"
          >
            <span aria-hidden>←</span>
          </button>

          <div className="flex items-center gap-2.5">
            {TESTIMONIALS.map((testimonial, i) => (
              <button
                key={testimonial.id}
                type="button"
                aria-label={`Go to testimonial ${i + 1} of ${total}`}
                aria-current={i === active}
                onClick={() => goTo(i)}
                className="h-2 rounded-full transition-all duration-500"
                style={{
                  width: i === active ? "1.75rem" : "0.5rem",
                  background:
                    i === active ? testimonial.accent.hex : "rgba(255,255,255,0.18)",
                }}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-text-primary transition-all duration-300 hover:border-white/40 hover:bg-white/5"
          >
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
