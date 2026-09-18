
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

      gsap.to(orbRef.current, {
        y: -25,
        x: 12,
        rotate: 8,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(ringRef.current, {
        rotate: 360,
        duration: 18,
        ease: "none",
        repeat: -1,
      });

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
        px-5
        pt-16
        pb-20
        sm:px-8
        sm:pt-20
        sm:pb-24
        lg:px-12
        lg:pt-24
        lg:pb-32
        xl:px-16
      "
    >
      {/* ================= BACKGROUND VIDEO ================= */}
      <video
        className="
          pointer-events-none
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
        src="/assets/contact_bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* ================= VIDEO OVERLAY ================= */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#f4f1e8]
        "
      />

      {/* ================= EXTRA SOFT OVERLAY ================= */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          
        "
      />

      {/* ================= BACKGROUND DECORATIVE SHAPES ================= */}
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

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* ================= ABOUT LABEL ================= */}
        <span
          ref={labelRef}
          className="
            mb-10
            block
            text-center
            font-heading
            text-[28px]
            font-semibold
            leading-none
            tracking-[-0.02em]
            text-black
            sm:mb-14
            sm:text-[40px]
            lg:mb-16
            lg:text-[48px]
          "
        >
          About Us
        </span>

        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-12
            xl:gap-24
          "
        >
          {/* ================= TEXT ================= */}
          <div>
            <h2
              ref={headlineRef}
              className="
                max-w-4xl
                font-heading
                text-[32px]
                font-semibold
                leading-[1.05]
                tracking-[-0.03em]
                text-black
                sm:text-[42px]
                md:text-[50px]
                lg:text-[44px]
                xl:text-[52px]
              "
            >
              We build digital
              <br />
              systems that help
              <br />
              businesses grow.
            </h2>

            <p
              ref={descriptionRef}
              className="
                mt-6
                max-w-2xl
                font-body
                text-[16px]
                font-normal
                leading-[1.65]
                text-black/70
                sm:mt-8
                sm:text-[18px]
                md:text-[19px]
              "
            >
              AH Growth is a software house and digital growth partner helping
              businesses build, launch, and scale their digital presence. We
              combine software development, design, marketing, SEO, automation,
              and AI to create practical solutions that deliver measurable
              business results.
            </p>
          </div>

          {/* ================= 3D ABSTRACT ART ================= */}
          <div className="flex min-h-[380px] items-center justify-center lg:min-h-[480px]">
            <div
              ref={artRef}
              className="
                relative
                h-[300px]
                w-[300px]
                sm:h-[380px]
                sm:w-[380px]
                lg:h-[440px]
                lg:w-[440px]
              "
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* ================= OUTER RING ================= */}
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

              {/* ================= SECOND RING ================= */}
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

              {/* ================= MAIN 3D ORB ================= */}
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
                {/* Pink highlight */}
                <div
                  className="
                    absolute
                    left-[20%]
                    top-[14%]
                    h-[22%]
                    w-[22%]
                    rounded-full
                    bg-[rgb(235,190,190)]
                    blur-md
                  "
                />

                {/* Dark highlight */}
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

              {/* ================= FLOATING SMALL SPHERE ================= */}
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

              {/* ================= FLOATING SMALL SPHERE ================= */}
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

              {/* ================= ORBIT LINE ================= */}
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

              {/* ================= GLOW ================= */}
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
                  bg-black/5
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
