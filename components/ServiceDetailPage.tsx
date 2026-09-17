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
      gsap
        .timeline({
          defaults: {
            ease: "power3.out",
          },
        })
        .from("[data-hero]", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08,
        });

      gsap.utils
        .toArray<HTMLElement>("[data-reveal]")
        .forEach((element) => {
          gsap.fromTo(
            element,
            {
              y: 25,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            }
          );
        });
    },
    {
      scope: pageRef,
    }
  );

  const secondMedia = service.secondaryMedia || service.media;

  return (
    <main
      ref={pageRef}
      className="
        min-h-screen
        overflow-hidden
        bg-black
      "
    >
      {/* ========================================
          HOME PAGE HEADER
      ======================================== */}
      <Navigation />

      {/* ========================================
          SERVICE PAGE
      ======================================== */}
      <div
        className="
          px-3
          py-3
          sm:px-5
          sm:py-5
          lg:px-6
          lg:py-6
        "
      >
        {/* OUTER BLACK CONTAINER */}
        <div
          className="
            mx-auto
            max-w-[1500px]
            overflow-hidden
            rounded-[24px]
            bg-black
            p-1
            sm:rounded-[30px]
            sm:p-1.5
            lg:rounded-[36px]
            lg:p-2
          "
        >
          {/* INNER CONTAINER */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[20px]
              sm:rounded-[27px]
              lg:rounded-[34px]
            "
          >
            {/* BACKGROUND VIDEO */}
            <video
              src="/assets/contact_bg.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="
                pointer-events-none
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            {/* LIGHT OVERLAY */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-white/75
              "
            />

            {/* CONTENT */}
            <div
              className="
                relative
                z-10
                mx-auto
                max-w-6xl
                px-5
                sm:px-8
                lg:px-12
              "
            >
              {/* ========================================
                  HERO
              ======================================== */}
              <section
                id="overview"
                className="
                  py-14
                  sm:py-16
                  lg:py-20
                "
              >
                {/* CATEGORY */}
                <div data-hero>
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      font-body
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-black
                    "
                  >
                    <span>{service.number}</span>

                    <span
                      className="
                        h-px
                        w-6
                        bg-black/30
                      "
                    />

                    <span>{service.category}</span>
                  </div>
                </div>

                {/* TITLE */}
                <h1
                  data-hero
                  className="
                    mt-5
                    max-w-5xl
                    font-heading
                    text-4xl
                    font-semibold
                    leading-[0.95]
                    tracking-[-0.05em]
                    text-black
                    sm:text-5xl
                    lg:text-6xl
                  "
                >
                  {service.title}

                  <br />

                  <span className="text-black/30">
                    {service.highlight}
                  </span>
                </h1>

                {/* DESCRIPTION + BUTTON */}
                <div
                  data-hero
                  className="
                    mt-6
                    flex
                    flex-col
                    gap-5
                    lg:flex-row
                    lg:items-end
                    lg:justify-between
                  "
                >
                  <p
                    className="
                      max-w-2xl
                      font-body
                      text-sm
                      leading-[1.7]
                      text-black/60
                      sm:text-[15px]
                    "
                  >
                    {service.description}
                  </p>

                  <a
                    href="#approach"
                    className="
                      inline-flex
                      w-fit
                      items-center
                      gap-3
                      rounded-full
                      bg-black
                      px-5
                      py-2.5
                      font-body
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.13em]
                      text-white
                      transition
                      hover:bg-black/80
                    "
                  >
                    Explore approach
                    <span>↓</span>
                  </a>
                </div>

                {/* MAIN MEDIA */}
                <figure
                  data-hero
                  className="
                    mt-10
                    overflow-hidden
                    rounded-[20px]
                    bg-white/60
                    sm:mt-12
                    lg:mt-14
                  "
                >
                  <div
                    className="
                      relative
                      h-[240px]
                      overflow-hidden
                      sm:h-[350px]
                      lg:h-[460px]
                    "
                  >
                    {service.mediaType === "video" ? (
                      <video
                        src={service.media}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          hover:scale-[1.02]
                        "
                      />
                    ) : (
                      <img
                        src={service.media}
                        alt={service.title}
                        className="
                          h-full
                          w-full
                          object-contain
                          bg-black/5
                          transition-transform
                          duration-700
                          hover:scale-[1.02]
                        "
                      />
                    )}
                  </div>
                </figure>

                {/* STRATEGY */}
                <div
                  data-reveal
                  className="
                    mt-5
                    grid
                    gap-5
                    lg:grid-cols-2
                  "
                >
                  {/* MEDIA */}
                  <div
                    className="
                      relative
                      min-h-[260px]
                      overflow-hidden
                      rounded-[20px]
                      bg-white/60
                      sm:min-h-[320px]
                      lg:min-h-[380px]
                    "
                  >
                    {service.mediaType === "video" ? (
                      <video
                        src={secondMedia}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-cover
                        "
                      />
                    ) : (
                      <img
                        src={secondMedia}
                        alt={service.title}
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-contain
                          bg-black/5
                        "
                      />
                    )}
                  </div>

                  {/* STRATEGY TEXT */}
                  <div
                    className="
                      flex
                      min-h-[260px]
                      flex-col
                      justify-between
                      rounded-[20px]
                      bg-white/60
                      p-6
                      sm:min-h-[320px]
                      sm:p-8
                      lg:min-h-[380px]
                      lg:p-9
                    "
                  >
                    <div>
                      <span
                        className="
                          font-body
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-black
                        "
                      >
                        Why it works
                      </span>

                      <h2
                        className="
                          mt-4
                          max-w-lg
                          font-heading
                          text-2xl
                          font-semibold
                          leading-[0.98]
                          tracking-[-0.045em]
                          text-black
                          sm:text-3xl
                        "
                      >
                        {service.strategyTitle}
                      </h2>
                    </div>

                    <p
                      className="
                        max-w-md
                        font-body
                        text-sm
                        leading-[1.7]
                        text-black/55
                      "
                    >
                      {service.strategyText}
                    </p>
                  </div>
                </div>
              </section>

              {/* ========================================
                  APPROACH
              ======================================== */}
              <section
                id="approach"
                className="
                  border-t
                  border-black/10
                  py-16
                  sm:py-18
                  lg:py-20
                "
              >
                <div
                  data-reveal
                  className="
                    grid
                    gap-8
                    lg:grid-cols-2
                    lg:gap-14
                  "
                >
                  <div>
                    <span
                      className="
                        font-body
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-black
                      "
                    >
                      The approach
                    </span>

                    <h2
                      className="
                        mt-4
                        max-w-lg
                        font-heading
                        text-2xl
                        font-semibold
                        leading-[0.98]
                        tracking-[-0.045em]
                        text-black
                        sm:text-3xl
                        lg:text-4xl
                      "
                    >
                      {service.strategyTitle}
                    </h2>
                  </div>

                  <div>
                    <p
                      className="
                        font-body
                        text-sm
                        leading-[1.75]
                        text-black/55
                      "
                    >
                      {service.strategyText}
                    </p>

                    <div
                      className="
                        mt-6
                        flex
                        flex-wrap
                        gap-2
                      "
                    >
                      {service.capabilities.map((capability) => (
                        <span
                          key={capability}
                          className="
                            rounded-full
                            border
                            border-black/15
                            bg-white/50
                            px-3
                            py-1.5
                            font-body
                            text-[8px]
                            font-semibold
                            uppercase
                            tracking-[0.08em]
                            text-black
                          "
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* ========================================
                  PROCESS
              ======================================== */}
              <section
                id="process"
                className="
                  border-t
                  border-black/10
                  py-16
                  sm:py-18
                  lg:py-20
                "
              >
                <div data-reveal>
                  <span
                    className="
                      font-body
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-black
                    "
                  >
                    Our process
                  </span>

                  <h2
                    className="
                      mt-4
                      font-heading
                      text-2xl
                      font-semibold
                      leading-[0.98]
                      tracking-[-0.045em]
                      text-black
                      sm:text-3xl
                      lg:text-4xl
                    "
                  >
                    Strategy first.
                    <br />

                    <span className="text-black/30">
                      Execution second.
                    </span>
                  </h2>
                </div>

                <ol
                  className="
                    mt-8
                    grid
                    gap-3
                    md:grid-cols-2
                    lg:grid-cols-3
                  "
                >
                  {service.process.map((step, index) => (
                    <li
                      key={step.number}
                      data-reveal
                      className="
                        rounded-[18px]
                        bg-white/60
                        p-5
                        transition
                        hover:-translate-y-1
                        hover:bg-white/80
                      "
                    >
                      <div
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          bg-black
                          font-heading
                          text-[9px]
                          font-semibold
                          text-white
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <h3
                        className="
                          mt-5
                          font-heading
                          text-base
                          font-semibold
                          tracking-[-0.03em]
                          text-black
                        "
                      >
                        {step.title}
                      </h3>

                      <p
                        className="
                          mt-2.5
                          font-body
                          text-xs
                          leading-[1.65]
                          text-black/50
                          sm:text-sm
                        "
                      >
                        {step.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </section>

              {/* ========================================
                  OUTCOMES
              ======================================== */}
              <section
                id="outcomes"
                className="
                  border-t
                  border-black/10
                  py-16
                  sm:py-18
                  lg:py-20
                "
              >
                <div
                  data-reveal
                  className="
                    grid
                    gap-8
                    lg:grid-cols-2
                    lg:gap-14
                  "
                >
                  <div>
                    <span
                      className="
                        font-body
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-black
                      "
                    >
                      The outcome
                    </span>

                    <h2
                      className="
                        mt-4
                        font-heading
                        text-2xl
                        font-semibold
                        leading-[0.98]
                        tracking-[-0.045em]
                        text-black
                        sm:text-3xl
                        lg:text-4xl
                      "
                    >
                      What changes
                      <br />
                      for you.
                    </h2>
                  </div>

                  <div
                    className="
                      grid
                      gap-3
                      sm:grid-cols-2
                    "
                  >
                    {service.outcomes.map((outcome, index) => (
                      <div
                        key={outcome}
                        data-reveal
                        className="
                          rounded-[16px]
                          bg-white/60
                          p-5
                          transition
                          hover:-translate-y-1
                          hover:bg-white/80
                        "
                      >
                        <span
                          className="
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-full
                            bg-black
                            font-heading
                            text-[8px]
                            font-semibold
                            text-white
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p
                          className="
                            mt-6
                            font-body
                            text-xs
                            leading-[1.6]
                            text-black/60
                            sm:text-sm
                          "
                        >
                          {outcome}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ========================================
                  CONTACT CTA
              ======================================== */}
              <section
                id="contact"
                className="
                  my-5
                  rounded-[22px]
                  bg-white/55
                  px-6
                  py-12
                  sm:px-8
                  sm:py-14
                  lg:px-10
                  lg:py-16
                "
              >
                <div data-reveal>
                  <span
                    className="
                      font-body
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-black
                    "
                  >
                    Next move
                  </span>

                  <h2
                    className="
                      mt-4
                      font-heading
                      text-2xl
                      font-semibold
                      leading-[0.98]
                      tracking-[-0.045em]
                      text-black
                      sm:text-3xl
                      lg:text-5xl
                    "
                  >
                    Tell us what you're
                    <br />

                    <span className="text-black/40">
                      building next.
                    </span>
                  </h2>

                  <p
                    className="
                      mt-4
                      max-w-xl
                      font-body
                      text-sm
                      leading-[1.7]
                      text-black/50
                    "
                  >
                    Tell us what you're building, where you're stuck,
                    or where you want to go next.
                  </p>

                  <Link
                    href="/contact"
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-4
                      rounded-full
                      bg-black
                      px-5
                      py-3
                      font-body
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-white
                      transition
                      hover:bg-black/80
                    "
                  >
                    Start a conversation
                    <span>→</span>
                  </Link>
                </div>
              </section>

              {/* ========================================
                  PREVIOUS / NEXT SERVICE
              ======================================== */}
              {(prevService || nextService) && (
                <nav
                  className="
                    grid
                    border-t
                    border-black/10
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
                      border-b
                      border-black/10
                      px-5
                      py-6
                      transition
                      hover:bg-white/40
                      sm:border-b-0
                      sm:border-r
                      sm:px-7
                      sm:py-8
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
                        text-black/50
                      "
                    >
                      ← Previous
                    </span>

                    <span
                      className="
                        mt-2
                        block
                        font-heading
                        text-base
                        font-semibold
                        tracking-[-0.03em]
                        text-black
                        sm:text-lg
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
                      px-5
                      py-6
                      transition
                      hover:bg-white/40
                      sm:px-7
                      sm:py-8
                      sm:text-right
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
                        text-black/50
                      "
                    >
                      Next →
                    </span>

                    <span
                      className="
                        mt-2
                        block
                        font-heading
                        text-base
                        font-semibold
                        tracking-[-0.03em]
                        text-black
                        sm:text-lg
                      "
                    >
                      {nextService?.title || "All services"}
                    </span>
                  </Link>
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          HOME PAGE FOOTER
      ======================================== */}
      <Footer />
    </main>
  );
}