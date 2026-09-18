"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

type ServiceDetail = {
  number: string;
  category: string;
  title: string;
  highlight: string;
  description: string;
  media: string;
  mediaType: "video" | "image";
  secondaryMedia?: string;
  strategyTitle: string;
  strategyText: string;
  capabilities: string[];
  process: ProcessStep[];
  outcomes: string[];
};

type Props = {
  service: ServiceDetail;
  prevService?: {
    slug: string;
    title: string;
  };
  nextService?: {
    slug: string;
    title: string;
  };
};

export default function ServiceDetailPage({
  service,
  prevService,
  nextService,
}: Props) {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      intro
        .from("[data-hero-label]", {
          y: 25,
          opacity: 0,
          filter: "blur(5px)",
          duration: 0.7,
        })
        .from(
          "[data-hero-title]",
          {
            y: 45,
            opacity: 0,
            scale: 0.96,
            filter: "blur(8px)",
            duration: 1,
            ease: "expo.out",
          },
          "-=0.4",
        )
        .from(
          "[data-hero-copy]",
          {
            y: 25,
            opacity: 0,
            filter: "blur(5px)",
            duration: 0.8,
          },
          "-=0.55",
        )
        .from(
          "[data-hero-media]",
          {
            scale: 0.94,
            opacity: 0,
            filter: "blur(6px)",
            duration: 1.1,
            ease: "expo.out",
          },
          "-=0.7",
        );

      gsap.utils
        .toArray<HTMLElement>("[data-reveal]")
        .forEach((element) => {
          gsap.fromTo(
            element,
            {
              y: 35,
              opacity: 0,
              filter: "blur(5px)",
            },
            {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.8,
              ease: "power4.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            },
          );
        });
    },
    {
      scope: pageRef,
    },
  );

  const renderMedia = (className: string) => {
    if (service.mediaType === "video") {
      return (
        <video
          src={service.media}
          autoPlay
          muted
          loop
          playsInline
          className={className}
        />
      );
    }

    return (
      <img
        src={service.media}
        alt={service.title}
        className={className}
      />
    );
  };

  return (
    <main
      ref={pageRef}
      className="
        min-h-screen
        overflow-hidden
        bg-[#f4f1e8]
        text-black
      "
    >
      <Navigation />

      {/* =====================================================
          PAGE FRAME
      ====================================================== */}

      <div
        className="
          relative
          overflow-hidden
          bg-[#f4f1e8]
          px-4
          pb-4
          sm:px-6
          sm:pb-6
          md:px-8
          md:pb-8
          lg:px-12
          lg:pb-12
          xl:px-16
        "
      >
        {/* Ambient lime glow */}

        <div
          aria-hidden
          className="
            pointer-events-none
            absolute
            -right-40
            top-40
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#DFFF4F]/10
            blur-[130px]
          "
        />

        {/* Ambient violet glow */}

        <div
          aria-hidden
          className="
            pointer-events-none
            absolute
            -left-40
            top-[45%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#D8D2FF]/10
            blur-[130px]
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-[1500px]
            overflow-hidden
            rounded-[24px]
            bg-[#f4f1e8]
            sm:rounded-[30px]
            md:rounded-[34px]
            lg:rounded-[40px]
          "
        >
          {/* =====================================================
              HERO
          ====================================================== */}

          <section
            id="overview"
            className="
              relative
              px-5
              pb-12
              pt-12
              sm:px-8
              sm:pb-14
              sm:pt-14
              md:px-10
              lg:px-12
              lg:pb-20
              lg:pt-20
              xl:px-16
            "
          >
            <div
              className="
                grid
                items-center
                gap-10
                lg:grid-cols-[1.05fr_0.95fr]
                lg:gap-16
                xl:gap-20
              "
            >
              {/* HERO COPY */}

              <div>
                <div
                  data-hero-label
                  className="
                    flex
                    items-center
                    gap-3
                    font-body
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-black/45
                  "
                >
                  <span>{service.number}</span>

                  <span className="h-px w-8 bg-black/15" />

                  <span>{service.category}</span>
                </div>

                <h1
                  data-hero-title
                  className="
                    mt-6
                    max-w-4xl
                    font-heading
                    text-[clamp(3rem,6.5vw,6.5rem)]
                    font-semibold
                    leading-[0.9]
                    tracking-[-0.06em]
                    text-black
                  "
                >
                  {service.title}
                </h1>

                <p
                  data-hero-copy
                  className="
                    mt-6
                    max-w-xl
                    font-body
                    text-[14px]
                    font-medium
                    leading-[1.7]
                    tracking-[-0.01em]
                    text-black/50
                    sm:text-[15px]
                  "
                >
                  {service.description}
                </p>

                <a
                  href="#approach"
                  data-hero-copy
                  className="
                    group
                    mt-7
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-black
                    px-5
                    py-3
                    font-body
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-white
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_15px_35px_-15px_rgba(0,0,0,0.45)]
                  "
                >
                  <span>Explore approach</span>

                  <span
                    className="
                      text-sm
                      transition-transform
                      duration-300
                      group-hover:translate-y-1
                    "
                  >
                    ↓
                  </span>
                </a>
              </div>

              {/* HERO MEDIA */}

              <div
                data-hero-media
                className="
                  group
                  relative
                  mt-6
                  aspect-[4/4.6]
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-black/[0.07]
                  bg-white
                  shadow-[0_18px_55px_-25px_rgba(0,0,0,0.32)]
                  sm:mt-8
                  sm:rounded-[24px]
                  lg:mt-12
                  lg:aspect-[4/4.7]
                "
              >
                {renderMedia(
                  `
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-[1.045]
                  `,
                )}

                {/* Soft image overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-tr
                    from-black/15
                    via-transparent
                    to-white/15
                  "
                />

                {/* Lime glow */}

                <div
                  aria-hidden
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-[#DFFF4F]/15
                    blur-[70px]
                    transition-transform
                    duration-1000
                    group-hover:scale-125
                  "
                />

                {/* Image label */}

                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    right-4
                    flex
                    items-end
                    justify-between
                    sm:bottom-6
                    sm:left-6
                    sm:right-6
                  "
                >
                  <span
                    className="
                      rounded-full
                      border
                      border-white/20
                      bg-black/45
                      px-3
                      py-1.5
                      font-body
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-white/85
                      backdrop-blur-md
                    "
                  >
                    {service.category}
                  </span>

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/25
                      bg-black/35
                      text-white
                      backdrop-blur-md
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  >
                    ↗
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              APPROACH
          ====================================================== */}

          <section
            id="approach"
            className="
              border-t
              border-black/[0.08]
              px-5
              py-14
              sm:px-8
              sm:py-16
              md:px-10
              lg:px-12
              lg:py-24
              xl:px-16
            "
          >
            <div
              data-reveal
              className="
                grid
                gap-10
                lg:grid-cols-[0.8fr_1.2fr]
                lg:gap-20
              "
            >
              <div>
                <span
                  className="
                    font-body
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-black/40
                  "
                >
                  The approach
                </span>

                <h2
                  className="
                    mt-5
                    max-w-xl
                    font-heading
                    text-3xl
                    font-semibold
                    leading-[0.95]
                    tracking-[-0.05em]
                    text-black
                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  {service.strategyTitle}
                </h2>
              </div>

              <div>
                <p
                  className="
                    max-w-2xl
                    font-body
                    text-[14px]
                    font-medium
                    leading-[1.8]
                    text-black/50
                    sm:text-[15px]
                  "
                >
                  {service.strategyText}
                </p>

                <div className="mt-8 grid gap-x-6 sm:grid-cols-2">
                  {service.capabilities.map((capability, index) => (
                    <div
                      key={capability}
                      className="
                        group
                        flex
                        items-center
                        gap-4
                        border-b
                        border-black/[0.08]
                        py-4
                      "
                    >
                      <span
                        className="
                          font-body
                          text-[8px]
                          font-semibold
                          tracking-[0.12em]
                          text-black/25
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="
                          font-body
                          text-[13px]
                          font-medium
                          text-black/65
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                          group-hover:text-black
                        "
                      >
                        {capability}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              FEATURE STRIP
          ====================================================== */}

          <section
            className="
              px-5
              pb-14
              sm:px-8
              sm:pb-16
              md:px-10
              lg:px-12
              lg:pb-24
              xl:px-16
            "
          >
            <div
              data-reveal
              className="
                group
                grid
                overflow-hidden
                rounded-[20px]
                border
                border-black/[0.07]
                bg-black
                shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]
                lg:grid-cols-[0.8fr_1.2fr]
                lg:rounded-[24px]
              "
            >
              <div
                className="
                  relative
                  flex
                  min-h-[260px]
                  flex-col
                  justify-between
                  overflow-hidden
                  p-7
                  sm:p-9
                  lg:min-h-[300px]
                  lg:p-12
                "
              >
                <div
                  aria-hidden
                  className="
                    pointer-events-none
                    absolute
                    -left-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-[#DFFF4F]/10
                    blur-[80px]
                  "
                />

                <span
                  className="
                    relative
                    font-body
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-white/40
                  "
                >
                  {service.category}
                </span>

                <h3
                  className="
                    relative
                    max-w-md
                    font-heading
                    text-3xl
                    font-semibold
                    leading-[0.95]
                    tracking-[-0.05em]
                    text-white
                    sm:text-4xl
                  "
                >
                  {service.highlight}
                </h3>
              </div>

              <div
                className="
                  relative
                  min-h-[280px]
                  overflow-hidden
                  bg-white/[0.04]
                "
              >
                {renderMedia(
                  "absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-1000 ease-out group-hover:scale-[1.04]",
                )}

                <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/10" />
              </div>
            </div>
          </section>

          {/* =====================================================
              PROCESS
          ====================================================== */}

          <section
            id="process"
            className="
              border-t
              border-black/[0.08]
              px-5
              py-14
              sm:px-8
              sm:py-16
              md:px-10
              lg:px-12
              lg:py-24
              xl:px-16
            "
          >
            <div
              data-reveal
              className="
                flex
                flex-col
                justify-between
                gap-8
                lg:flex-row
                lg:items-end
              "
            >
              <div>
                <span
                  className="
                    font-body
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-black/40
                  "
                >
                  Our process
                </span>

                <h2
                  className="
                    mt-5
                    font-heading
                    text-4xl
                    font-semibold
                    leading-[0.9]
                    tracking-[-0.055em]
                    text-black
                    sm:text-5xl
                    lg:text-6xl
                  "
                >
                  Strategy first.
                  <br />
                  <span className="text-black/25">
                    Execution second.
                  </span>
                </h2>
              </div>

              <p
                className="
                  max-w-sm
                  font-body
                  text-[13px]
                  font-medium
                  leading-[1.7]
                  text-black/45
                "
              >
                A structured approach designed to turn visibility into
                measurable customer opportunities.
              </p>
            </div>

            <ol
              className="
                mt-10
                grid
                gap-px
                overflow-hidden
                rounded-[20px]
                border
                border-black/[0.08]
                bg-black/[0.08]
                md:grid-cols-2
                lg:grid-cols-5
              "
            >
              {service.process.map((step, index) => (
                <li
                  key={step.number}
                  data-reveal
                  className="
                    group
                    min-h-[240px]
                    bg-[#f4f1e8]
                    p-6
                    transition-all
                    duration-500
                    hover:bg-black
                    hover:text-white
                    sm:p-7
                  "
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        font-heading
                        text-sm
                        font-semibold
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="
                        text-lg
                        opacity-25
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:opacity-100
                      "
                    >
                      ↗
                    </span>
                  </div>

                  <div className="mt-16">
                    <h3
                      className="
                        font-heading
                        text-xl
                        font-semibold
                        tracking-[-0.035em]
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        font-body
                        text-[12px]
                        font-medium
                        leading-[1.7]
                        text-black/50
                        transition-colors
                        duration-300
                        group-hover:text-white/55
                      "
                    >
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* =====================================================
              OUTCOMES
          ====================================================== */}

          <section
            id="outcomes"
            className="
              border-t
              border-black/[0.08]
              px-5
              py-14
              sm:px-8
              sm:py-16
              md:px-10
              lg:px-12
              lg:py-24
              xl:px-16
            "
          >
            <div
              data-reveal
              className="
                grid
                gap-10
                lg:grid-cols-[0.7fr_1.3fr]
                lg:gap-20
              "
            >
              <div>
                <span
                  className="
                    font-body
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-black/40
                  "
                >
                  The outcome
                </span>

                <h2
                  className="
                    mt-5
                    font-heading
                    text-4xl
                    font-semibold
                    leading-[0.9]
                    tracking-[-0.055em]
                    text-black
                    sm:text-5xl
                  "
                >
                  What changes
                  <br />
                  <span className="text-black/25">
                    for you.
                  </span>
                </h2>
              </div>

              <div className="grid border-t border-black/[0.08] sm:grid-cols-2">
                {service.outcomes.map((outcome, index) => (
                  <div
                    key={outcome}
                    data-reveal
                    className="
                      group
                      border-b
                      border-black/[0.08]
                      py-6
                      sm:px-5
                      sm:py-7
                      sm:nth-[odd]:border-r
                    "
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className="
                          font-body
                          text-[8px]
                          font-semibold
                          tracking-[0.12em]
                          text-black/25
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="
                          text-black/20
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                          group-hover:text-black
                        "
                      >
                        ↗
                      </span>
                    </div>

                    <p
                      className="
                        mt-8
                        max-w-xs
                        font-heading
                        text-lg
                        font-semibold
                        leading-[1.1]
                        tracking-[-0.03em]
                        text-black
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =====================================================
              NAVIGATION
          ====================================================== */}

          {(prevService || nextService) && (
            <nav
              className="
                grid
                border-t
                border-black/[0.08]
                sm:grid-cols-2
              "
            >
              <Link
                href={
                  prevService
                    ? `/services/${prevService.slug}`
                    : "/services"
                }
                className="
                  group
                  border-b
                  border-black/[0.08]
                  px-5
                  py-8
                  transition-all
                  duration-500
                  hover:bg-black
                  hover:text-white
                  sm:border-b-0
                  sm:border-r
                  sm:px-8
                  lg:px-14
                  lg:py-10
                "
              >
                <span
                  className="
                    block
                    font-body
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    opacity-40
                  "
                >
                  ← Previous
                </span>

                <span
                  className="
                    mt-3
                    block
                    font-heading
                    text-xl
                    font-semibold
                    tracking-[-0.035em]
                  "
                >
                  {prevService?.title || "All services"}
                </span>
              </Link>

              <Link
                href={
                  nextService
                    ? `/services/${nextService.slug}`
                    : "/services"
                }
                className="
                  group
                  px-5
                  py-8
                  text-left
                  transition-all
                  duration-500
                  hover:bg-black
                  hover:text-white
                  sm:px-8
                  sm:text-right
                  lg:px-14
                  lg:py-10
                "
              >
                <span
                  className="
                    block
                    font-body
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    opacity-40
                  "
                >
                  Next →
                </span>

                <span
                  className="
                    mt-3
                    block
                    font-heading
                    text-xl
                    font-semibold
                    tracking-[-0.035em]
                  "
                >
                  {nextService?.title || "All services"}
                </span>
              </Link>
            </nav>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}