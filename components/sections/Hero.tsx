"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

export default function Hero({ ready }: { ready: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const splitRef = useRef<InstanceType<typeof SplitText> | null>(null);

  // Prepare text animation
  useGSAP(
    () => {
      if (!headlineRef.current) return;

      const split = new SplitText(headlineRef.current, {
        type: "words",
      });

      splitRef.current = split;

      gsap.set(split.words, {
        autoAlpha: 0,
        y: 50,
      });

      gsap.set(subheadRef.current, {
        autoAlpha: 0,
        y: 25,
      });

      return () => split.revert();
    },
    { scope: sectionRef }
  );

  // Play animation after splash screen
  useGSAP(
    () => {
      if (!ready || !splitRef.current) return;

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.to(splitRef.current.words, {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        stagger: 0.08,
      }).to(
        subheadRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.55"
      );
    },
    {
      scope: sectionRef,
      dependencies: [ready],
    }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
    >
      {/* ================= TOP VIDEO ================= */}
      <div className="relative h-[58vh] min-h-[420px] w-full overflow-hidden bg-black md:h-[62vh]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Bottom fade into black section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* ================= BOTTOM BRAND SECTION ================= */}
      <div className="relative flex min-h-[38vh] w-full items-center justify-center overflow-hidden bg-black px-6 py-20 text-center">
        <div className="relative z-10 flex max-w-6xl flex-col items-center">
          <h1
            ref={headlineRef}
            className="font-heading text-[clamp(4rem,12vw,11rem)] font-extrabold leading-[0.85] tracking-[-0.06em] text-white"
          >
            AH Growth
          </h1>

          <p
            ref={subheadRef}
            className="mt-8 max-w-2xl font-body text-sm leading-relaxed tracking-wide text-white/60 sm:text-base md:text-lg"
          >
            We build bold digital experiences, intelligent AI solutions, and
            growth systems that turn ambitious brands into businesses that
            move faster.
          </p>
        </div>

        {/* Subtle decorative glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />
      </div>
    </section>
  );
}