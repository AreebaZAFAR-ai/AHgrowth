"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const artRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.from(labelRef.current, {
        autoAlpha: 0,
        y: 12,
        duration: 0.6,
      })
        .from(
          headlineRef.current,
          {
            autoAlpha: 0,
            y: 28,
            duration: 0.9,
          },
          "-=0.35"
        )
        .from(
          descriptionRef.current,
          {
            autoAlpha: 0,
            y: 16,
            duration: 0.8,
          },
          "-=0.55"
        )
        .from(
          artRef.current,
          {
            autoAlpha: 0,
            scale: 0.7,
            rotate: -12,
            duration: 1.2,
          },
          "-=0.7"
        );

      // Floating 3D orb
      gsap.to(orbRef.current, {
        y: -25,
        x: 12,
        rotate: 8,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Rotating ring
      gsap.to(ringRef.current, {
        rotate: 360,
        duration: 18,
        ease: "none",
        repeat: -1,
      });

      // Subtle 3D movement
      gsap.to(artRef.current, {
        rotateY: 8,
        rotateX: -5,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[rgb(190,255,252)]
        px-5
        py-24
        sm:px-8
        sm:py-28
        lg:px-10
        lg:py-36
        xl:px-12
      "
    >
      {/* Background decorative shapes */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-72
          w-72
          rounded-full
          bg-black/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-96
          w-96
          rounded-full
          bg-black/5
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-[1500px]">
        <div
          className="
            grid
            items-center
            gap-20
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-12
            xl:gap-24
          "
        >
          {/* TEXT */}
          <div>
            <span
              ref={labelRef}
              className="
                block
                font-heading
                text-sm
                font-semibold
                uppercase
                tracking-[0.35em]
                text-black
              "
            >
              About
            </span>

            <h2
              ref={headlineRef}
              className="
                mt-6
                max-w-4xl
                font-['Space_Grotesk']
                text-5xl
                font-bold
                leading-[0.95]
                tracking-[-0.04em]
                text-black
                sm:text-6xl
                md:text-7xl
                lg:text-[4.6rem]
                xl:text-[5.5rem]
              "
            >
              AH Growth builds the growth systems ambitious
              brands run on.
            </h2>

            <p
              ref={descriptionRef}
              className="
                mt-10
                max-w-xl
                font-heading
                text-lg
                font-medium
                leading-relaxed
                text-black/70
                sm:text-xl
                md:text-2xl
              "
            >
              A performance-first digital agency — SEO, paid
              media, content, and AI search optimization
              engineered together, not run as separate
              channels. The result is visibility that turns
              into revenue, not vanity metrics.
            </p>

            {/* Small detail */}
            <div className="mt-12 flex items-center gap-4">
              <div className="h-px w-16 bg-black/40" />

              <span
                className="
                  font-heading
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-black/50
                "
              >
                Built for growth
              </span>
            </div>
          </div>

          {/* 3D ABSTRACT ART */}
          <div className="flex min-h-[420px] items-center justify-center lg:min-h-[520px]">
            <div
              ref={artRef}
              className="
                relative
                h-[320px]
                w-[320px]
                sm:h-[400px]
                sm:w-[400px]
                lg:h-[460px]
                lg:w-[460px]
              "
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Outer ring */}
              <div
                ref={ringRef}
                className="
                  absolute
                  inset-[8%]
                  rounded-full
                  border
                  border-black/30
                "
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="
                    absolute
                    -left-2
                    top-1/2
                    h-4
                    w-4
                    -translate-y-1/2
                    rounded-full
                    bg-black
                  "
                />

                <div
                  className="
                    absolute
                    -right-2
                    top-1/2
                    h-4
                    w-4
                    -translate-y-1/2
                    rounded-full
                    bg-black
                  "
                />
              </div>

              {/* Second ring */}
              <div
                className="
                  absolute
                  inset-[18%]
                  rotate-45
                  rounded-full
                  border
                  border-black/20
                "
              />

              {/* Main 3D orb */}
              <div
                ref={orbRef}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[52%]
                  w-[52%]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                "
                style={{
                  background:
                    "radial-gradient(circle at 30% 25%, #ffffff 0%, #d8d8d8 12%, #777777 35%, #222222 68%, #000000 100%)",
                  boxShadow:
                    "inset -35px -35px 60px rgba(0,0,0,0.7), inset 20px 20px 35px rgba(255,255,255,0.7), 25px 35px 70px rgba(0,0,0,0.3)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Orb highlight */}
                <div
                  className="
                    absolute
                    left-[20%]
                    top-[14%]
                    h-[22%]
                    w-[22%]
                    rounded-full
                    bg-white/80
                    blur-md
                  "
                />

                {/* Orb shadow */}
                <div
                  className="
                    absolute
                    bottom-[12%]
                    right-[12%]
                    h-[30%]
                    w-[30%]
                    rounded-full
                    bg-black/60
                    blur-xl
                  "
                />
              </div>

              {/* Floating small sphere */}
              <div
                className="
                  absolute
                  right-[10%]
                  top-[12%]
                  h-12
                  w-12
                  rounded-full
                  bg-black
                  sm:h-16
                  sm:w-16
                "
                style={{
                  boxShadow:
                    "inset 8px 8px 12px rgba(255,255,255,0.15), 10px 15px 25px rgba(0,0,0,0.2)",
                }}
              />

              {/* Floating small sphere */}
              <div
                className="
                  absolute
                  bottom-[15%]
                  left-[8%]
                  h-8
                  w-8
                  rounded-full
                  bg-black/70
                  sm:h-12
                  sm:w-12
                "
              />

              {/* Orbit line */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[70%]
                  w-[115%]
                  -translate-x-1/2
                  -translate-y-1/2
                  -rotate-[22deg]
                  rounded-[50%]
                  border
                  border-black/15
                "
                style={{
                  transformStyle: "preserve-3d",
                }}
              />

              {/* Glow */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  -z-10
                  h-[60%]
                  w-[60%]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-white/30
                  blur-3xl
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}