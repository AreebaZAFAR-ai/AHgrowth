"use client";

import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import StatsRing from "@/components/canvas/StatsRing";
import { gsap, useGSAP } from "@/lib/gsap";

type Stat = {
  value: number;
  decimals: number;
  suffix: string;
  label: string;
};

const STATS: Stat[] = [
  { value: 3.2, decimals: 1, suffix: "x", label: "Average ROAS" },
  { value: 180, decimals: 0, suffix: "+", label: "Brands Scaled" },
  { value: 92, decimals: 0, suffix: "%", label: "Client Retention" },
  { value: 40, decimals: 0, suffix: "+", label: "Countries Reached" },
];

export default function StatsBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        defaults: { ease: "power2.out" },
      });

      STATS.forEach((stat, i) => {
        const el = numberRefs.current[i];
        if (!el) return;

        const proxy = { value: 0 };
        tl.to(
          proxy,
          {
            value: stat.value,
            duration: 1.6,
            onUpdate: () => {
              el.textContent = `${proxy.value.toFixed(stat.decimals)}${stat.suffix}`;
            },
          },
          i * 0.15
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-70">
        <div className="h-[240px] w-full max-w-3xl">
          <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]}>
            <StatsRing />
          </Canvas>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-12 px-6 sm:grid-cols-[1.4fr_1fr_1.6fr_1fr] sm:gap-y-0 sm:px-8">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className="flex flex-col gap-2 sm:border-l sm:border-white/10 sm:pl-6 sm:first:border-l-0 sm:first:pl-0"
          >
            <span
              ref={(el) => {
                numberRefs.current[i] = el;
              }}
              className="font-heading text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl"
            >
              0{stat.suffix}
            </span>
            <span className="font-body text-xs uppercase tracking-widest text-text-secondary">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
