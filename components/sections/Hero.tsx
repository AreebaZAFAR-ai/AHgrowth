"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

export default function Hero({ ready }: { ready: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);

  const media1Ref = useRef<HTMLImageElement>(null);
  const media2Ref = useRef<HTMLImageElement>(null);
  const media3Ref = useRef<HTMLImageElement>(null);

  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);

  const splitRef = useRef<InstanceType<typeof SplitText> | null>(null);

  // =========================================================
  // TEXT PREPARATION
  // =========================================================
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
    {
      scope: sectionRef,
    }
  );

  // =========================================================
  // CINEMATIC MEDIA SLIDER
  // =========================================================
  useGSAP(
    () => {
      const media = [
        media1Ref.current,
        media2Ref.current,
        media3Ref.current,
      ].filter(Boolean) as HTMLImageElement[];

      if (media.length !== 3) return;

      // Initial state
      gsap.set(media, {
        autoAlpha: 0,
        scale: 1.12,
        x: -20,
      });

      // Show first media
      gsap.set(media[0], {
        autoAlpha: 1,
      });

      const tl = gsap.timeline({
        repeat: -1,
      });

      media.forEach((item, index) => {
        const next = media[(index + 1) % media.length];

        // -----------------------------------------------------
        // Initial reveal
        // -----------------------------------------------------
        tl.to(item, {
          scale: 1.04,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
        });

        // -----------------------------------------------------
        // Cinematic movement
        // -----------------------------------------------------
        tl.to(item, {
          scale: 1.1,
          x: 20,
          duration: 5,
          ease: "sine.inOut",
        });

        // -----------------------------------------------------
        // Smooth fade out
        // -----------------------------------------------------
        tl.to(
          item,
          {
            autoAlpha: 0,
            duration: 0.8,
            ease: "power2.inOut",
          },
          "-=0.8"
        );

        // -----------------------------------------------------
        // Prepare next media
        // -----------------------------------------------------
        tl.set(next, {
          autoAlpha: 1,
          scale: 1.12,
          x: -20,
        });

        // -----------------------------------------------------
        // Smooth next-media reveal
        // -----------------------------------------------------
        tl.to(
          next,
          {
            autoAlpha: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.25"
        );
      });

      return () => {
        tl.kill();
      };
    },
    {
      scope: sectionRef,
    }
  );

  // =========================================================
  // TEXT ANIMATION AFTER SPLASH
  // =========================================================
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
      {/* =====================================================
          TOP MEDIA
          ===================================================== */}
      <div className="relative h-[58vh] min-h-[420px] w-full overflow-hidden bg-black md:h-[62vh]">
        {/* IMAGE 1 */}
        <img
          ref={media1Ref}
          src="/assets/webdev1.webp"
          alt="Web development"
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
        />

        {/* IMAGE 2 */}
        <img
          ref={media2Ref}
          src="/assets/webdev2.webp"
          alt="Digital development"
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
        />

        {/* IMAGE 3 */}
        <img
          ref={media3Ref}
          src="/assets/webdevep.webp"
          alt="Digital experience"
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
        />

        {/* Dark cinematic overlay */}
        <div className="pointer-events-none absolute inset-0 bg-black/20" />

        {/* Subtle moving light */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.08),transparent_45%)] opacity-70" />

        {/* Bottom fade into black */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* =====================================================
          BOTTOM BRAND SECTION
          ===================================================== */}
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