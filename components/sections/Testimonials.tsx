
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import TestimonialCard, {
  type Testimonial,
} from "@/components/TestimonialCard";
import { gsap, useGSAP } from "@/lib/gsap";

// Accent palette shared with the Services cards
const ACCENTS = {
  lavender: { hex: "#A78BFA", rgb: "167, 139, 250" },
  lime: { hex: "#C6FF3D", rgb: "198, 255, 61" },
  cyan: { hex: "#22D3EE", rgb: "34, 211, 238" },
  coral: { hex: "#FF6B6B", rgb: "255, 107, 107" },
  orange: { hex: "#FFA35C", rgb: "255, 163, 92" },
  blue: { hex: "#3B82F6", rgb: "59, 130, 246" },
  pink: { hex: "#FF2BD6", rgb: "255, 43, 214" },
};

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

type Slot = {
  x: number;
  rotate: number;
  scale: number;
  opacity: number;
};

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
      const width = window.innerWidth;

      if (width < 640) {
        setBp("mobile");
      } else if (width < 1024) {
        setBp("tablet");
      } else {
        setBp("desktop");
      }
    };

    compute();

    window.addEventListener("resize", compute);

    return () => {
      window.removeEventListener("resize", compute);
    };
  }, []);

  return bp;
}

function getCircularOffset(
  index: number,
  active: number,
  total: number
): number {
  let diff = index - active;

  const half = total / 2;

  if (diff > half) {
    diff -= total;
  }

  if (diff < -half) {
    diff += total;
  }

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

  const dragRef = useRef<{
    startX: number;
    dragging: boolean;
  }>({
    startX: 0,
    dragging: false,
  });

  const goTo = useCallback(
    (index: number) => {
      setActive(((index % total) + total) % total);
    },
    [total]
  );

  const next = useCallback(() => {
    setActive((current) => (current + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setActive((current) => (current - 1 + total) % total);
  }, [total]);

  // Autoplay
  useEffect(() => {
    const id = setInterval(() => {
      if (!hoverRef.current) {
        setActive((current) => (current + 1) % total);
      }
    }, 5200);

    return () => {
      clearInterval(id);
    };
  }, [total]);

  // Position cards
  useEffect(() => {
    const maxOffset = breakpoint === "desktop" ? 2 : 1;
    const geo = GEOMETRY[breakpoint];

    TESTIMONIALS.forEach((_, index) => {
      const element = cardRefs.current[index];

      if (!element) {
        return;
      }

      const offset = getCircularOffset(index, active, total);
      const direction = Math.sign(offset);

      const absoluteOffset = Math.min(
        Math.abs(offset),
        geo.length - 1
      );

      const slot = geo[absoluteOffset];

      const withinRange = Math.abs(offset) <= maxOffset;

      gsap.to(element, {
        xPercent: -50 + direction * slot.x,
        yPercent: -50,
        rotate: direction * slot.rotate,
        scale: slot.scale,
        opacity: withinRange ? slot.opacity : 0,
        zIndex: 50 - Math.abs(offset) * 10,
        pointerEvents: withinRange ? "auto" : "none",
        duration: 0.75,
        ease: "power3.out",
        overwrite: "auto",
      });
    });
  }, [active, breakpoint, total]);

  // Active accent glow
  useEffect(() => {
    const activeId = TESTIMONIALS[active].id;

    Object.entries(glowLayerRefs.current).forEach(
      ([id, element]) => {
        if (!element) {
          return;
        }

        gsap.to(element, {
          opacity: id === activeId ? 1 : 0,
          duration: 0.7,
          ease: "power2.out",
        });
      }
    );
  }, [active]);

  // Entrance animation
  useGSAP(
    () => {
      if (!stageRef.current) {
        return;
      }

      gsap.from(stageRef.current, {
        autoAlpha: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: stageRef.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    {
      scope: sectionRef,
    }
  );

  // Drag support
  const onPointerDown = (event: React.PointerEvent) => {
    dragRef.current = {
      startX: event.clientX,
      dragging: true,
    };
  };

  const onPointerUp = (event: React.PointerEvent) => {
    if (!dragRef.current.dragging) {
      return;
    }

    const distance =
      event.clientX - dragRef.current.startX;

    dragRef.current.dragging = false;

    if (Math.abs(distance) > 50) {
      if (distance < 0) {
        next();
      } else {
        prev();
      }
    }
  };

  // Keyboard support
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      next();
    }

    if (event.key === "ArrowLeft") {
      prev();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#050505]
        px-5
        py-12
        sm:px-8
        sm:py-14
        lg:px-10
        lg:py-16
        xl:px-12
      "
    >
      {/* Ambient radial lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 12% 15%, rgba(91,76,255,0.14), transparent 60%), radial-gradient(45% 40% at 90% 80%, rgba(198,255,61,0.08), transparent 60%)",
        }}
      />

      {/* Active testimonial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.id}
            ref={(element) => {
              glowLayerRefs.current[testimonial.id] = element;
            }}
            className="absolute inset-0"
            style={{
              opacity:
                testimonial.id === TESTIMONIALS[active].id
                  ? 1
                  : 0,
              background: `radial-gradient(
                45% 45% at 50% 42%,
                rgba(${testimonial.accent.rgb}, 0.18),
                transparent 70%
              )`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1500px]">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              font-heading
              text-[1.7rem]
              font-bold
              leading-none
              tracking-[-0.03em]
              text-accent-white
              sm:text-[1.9rem]
            "
          >
            Testimonials
          </span>

          <h2 className="mt-1 font-heading text-xs font-normal tracking-tight text-text-primary sm:text-sm md:text-base">
            What Growth Sounds Like
          </h2>
        </div>

        {/* Carousel */}
        <div
          ref={stageRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          tabIndex={0}
          onMouseEnter={() => {
            hoverRef.current = true;
          }}
          onMouseLeave={() => {
            hoverRef.current = false;
          }}
          onFocus={() => {
            hoverRef.current = true;
          }}
          onBlur={() => {
            hoverRef.current = false;
          }}
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          className="
            relative
            mx-auto
            mt-7
            h-[320px]
            w-full
            max-w-[850px]
            touch-pan-y
            select-none
            overflow-hidden
            outline-none
            sm:mt-8
            sm:h-[330px]
            lg:mt-9
            lg:h-[340px]
          "
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              onClick={() => {
                if (index !== active) {
                  goTo(index);
                }
              }}
              className={`absolute left-1/2 top-1/2 ${
                index !== active ? "cursor-pointer" : ""
              }`}
            >
              <TestimonialCard
                testimonial={testimonial}
                isActive={index === active}
              />
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="relative mt-3 flex items-center justify-center gap-4 sm:mt-4">
          {/* Previous */}
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prev}
            className="
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              text-xs
              text-text-primary
              transition-all
              duration-300
              hover:border-white/40
              hover:bg-white/5
            "
          >
            <span aria-hidden>←</span>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {TESTIMONIALS.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                aria-label={`Go to testimonial ${
                  index + 1
                } of ${total}`}
                aria-current={index === active}
                onClick={() => goTo(index)}
                className="h-1 rounded-full transition-all duration-500"
                style={{
                  width:
                    index === active
                      ? "1.25rem"
                      : "0.35rem",

                  background:
                    index === active
                      ? testimonial.accent.hex
                      : "rgba(255,255,255,0.18)",
                }}
              />
            ))}
          </div>

          {/* Next */}
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              text-xs
              text-text-primary
              transition-all
              duration-300
              hover:border-white/40
              hover:bg-white/5
            "
          >
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

