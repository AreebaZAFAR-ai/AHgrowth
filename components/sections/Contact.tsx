"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = pageRef.current?.querySelectorAll("[data-form]");

      if (items) {
        gsap.from(items, {
          opacity: 0,
          y: 40,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
        });
      }

      if (visualRef.current) {
        gsap.from(visualRef.current, {
          opacity: 0,
          y: 60,
          duration: 1.2,
          delay: 0.2,
          ease: "power3.out",
        });

        const visualText =
          visualRef.current.querySelector("[data-visual-text]");

        if (visualText) {
          gsap.from(visualText, {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.6,
            ease: "power3.out",
          });
        }
      }
    },
    {
      scope: pageRef,
    }
  );

  return (
    <main
      ref={pageRef}
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-[-15%] top-[-20%] h-[600px] w-[600px] rounded-full bg-white/[0.025] blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-white/[0.02] blur-[140px]" />

      {/* CONTACT SECTION */}
      <section className="relative z-10 px-6 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto grid max-w-[1500px] gap-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-32">

          {/* LEFT SIDE */}
          <div
            data-form
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-white/30" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                Get in touch
              </span>
            </div>

            <h1
              className="
                max-w-xl
                font-['Space_Grotesk']
                text-[clamp(4rem,8vw,8rem)]
                font-bold
                leading-[0.8]
                tracking-[-0.08em]
                text-white
              "
            >
              CONTACT
              <br />
              <span className="text-white/35">US.</span>
            </h1>

            <p className="mt-10 max-w-md text-base leading-7 text-white/45 sm:text-lg">
              Have a project in mind? Tell us what you&apos;re looking to
              build, improve, or grow. Let&apos;s create something meaningful
              together.
            </p>

            <div className="mt-14 space-y-8">

              {/* EMAIL */}
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/25">
                  Email
                </p>

                <a
                  href="mailto:hello@ahgrowth.com"
                  className="mt-2 inline-block text-sm text-white/70 transition-colors hover:text-white"
                >
                  hello@ahgrowth.com
                </a>
              </div>

              {/* AVAILABILITY */}
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/25">
                  Availability
                </p>

                <p className="mt-2 text-sm text-white/55">
                  Available for new projects
                </p>
              </div>

              {/* SERVICES */}
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/25">
                  Services
                </p>

                <p className="mt-2 max-w-sm text-sm leading-6 text-white/50">
                  Web Development · AI Automation · SEO · Marketing · Social
                  Media · Branding
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div data-form>

            {/* CONTACT FORM */}
            <form
              onSubmit={(event) => event.preventDefault()}
              className="
                relative
                overflow-hidden
                border
                border-white/10
                bg-[#0d0d0d]
                p-6
                shadow-[0_0_100px_rgba(255,255,255,0.025)]
                sm:p-10
                lg:p-14
              "
            >
              {/* FORM GLOW */}
              <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-white/[0.025] blur-[120px]" />

              {/* FORM HEADER */}
              <div className="relative z-10 mb-14 flex items-start justify-between border-b border-white/10 pb-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
                    Project enquiry
                  </p>

                  <p className="mt-2 text-sm text-white/30">
                    Tell us a little about your project.
                  </p>
                </div>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs text-white/35">
                  01
                </span>
              </div>

              {/* FORM FIELDS */}
              <div className="relative z-10 space-y-10">

                {/* NAME + EMAIL */}
                <div className="grid gap-10 sm:grid-cols-2">

                  {/* NAME */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-white/35"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="
                        w-full
                        border-b
                        border-white/15
                        bg-transparent
                        px-0
                        py-4
                        text-base
                        text-white
                        outline-none
                        placeholder:text-white/20
                        transition-all
                        duration-300
                        focus:border-white
                      "
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-white/35"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      className="
                        w-full
                        border-b
                        border-white/15
                        bg-transparent
                        px-0
                        py-4
                        text-base
                        text-white
                        outline-none
                        placeholder:text-white/20
                        transition-all
                        duration-300
                        focus:border-white
                      "
                    />
                  </div>

                </div>

                {/* COMPANY */}
                <div>
                  <label
                    htmlFor="company"
                    className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-white/35"
                  >
                    Company / Brand
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company or brand name"
                    className="
                      w-full
                      border-b
                      border-white/15
                      bg-transparent
                      px-0
                      py-4
                      text-base
                      text-white
                      outline-none
                      placeholder:text-white/20
                      transition-all
                      duration-300
                      focus:border-white
                    "
                  />
                </div>

                {/* SERVICE */}
                <div>
                  <label
                    htmlFor="service"
                    className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-white/35"
                  >
                    What do you need?
                  </label>

                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="
                      w-full
                      border-b
                      border-white/15
                      bg-[#0d0d0d]
                      px-0
                      py-4
                      text-base
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      focus:border-white
                    "
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="web">
                      Web Development
                    </option>

                    <option value="ai">
                      AI &amp; Automation
                    </option>

                    <option value="seo">
                      SEO
                    </option>

                    <option value="marketing">
                      Performance Marketing
                    </option>

                    <option value="social">
                      Social Media
                    </option>

                    <option value="branding">
                      Branding
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-white/35"
                  >
                    Project details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="
                      w-full
                      resize-none
                      border-b
                      border-white/15
                      bg-transparent
                      px-0
                      py-4
                      text-base
                      leading-7
                      text-white
                      outline-none
                      placeholder:text-white/20
                      transition-all
                      duration-300
                      focus:border-white
                    "
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-full
                    border
                    border-white
                    bg-white
                    px-7
                    py-5
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-black
                    transition-all
                    duration-300
                    hover:bg-transparent
                    hover:text-white
                  "
                >
                  <span>
                    Send enquiry
                  </span>

                  <span
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-black
                      text-lg
                      text-white
                      transition-all
                      duration-300
                      group-hover:bg-white
                      group-hover:text-black
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  >
                    ↗
                  </span>
                </button>

              </div>
            </form>

            {/* SMALL ANIMATED BOX */}
            <div
              className="
                group
                relative
                mt-6
                overflow-hidden
                border
                border-white/10
                bg-[#0d0d0d]
                px-6
                py-5
              "
            >
              {/* Moving glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -left-20
                  top-1/2
                  h-32
                  w-32
                  -translate-y-1/2
                  rounded-full
                  bg-white/[0.06]
                  blur-3xl
                  transition-all
                  duration-700
                  group-hover:left-[80%]
                "
              />

              <div className="relative z-10 flex items-center justify-between gap-6">

                <div className="flex items-center gap-4">

                  {/* Animated dot */}
                  <span className="relative flex h-2.5 w-2.5">
                    <span
                      className="
                        absolute
                        inline-flex
                        h-full
                        w-full
                        animate-ping
                        rounded-full
                        bg-white/40
                      "
                    />

                    <span
                      className="
                        relative
                        inline-flex
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-white
                      "
                    />
                  </span>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
                      Let&apos;s build something
                    </p>

                    <p className="mt-1 text-xs text-white/30">
                      We&apos;re currently accepting new projects.
                    </p>
                  </div>

                </div>

                {/* Animated arrow */}
                <span
                  className="
                    text-xl
                    text-white/30
                    transition-all
                    duration-500
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    group-hover:text-white
                  "
                >
                  ↗
                </span>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="bg-[#050505] px-6 pb-24 sm:px-8 sm:pb-32 lg:px-12 lg:pb-40">
        <div
          ref={visualRef}
          className="
            relative
            mx-auto
            h-[500px]
            max-w-[1500px]
            overflow-hidden
            border
            border-white/10
            bg-black
            shadow-[0_0_100px_rgba(255,255,255,0.025)]
            sm:h-[650px]
          "
        >
          {/* VIDEO */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              opacity-60
            "
          >
            <source
              src="/assets/contact-us.mp4"
              type="video/mp4"
            />
          </video>

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/65" />

          {/* GRID */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.035]
              [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
              [background-size:80px_80px]
            "
          />

          {/* TOP LEFT LABEL */}
          <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-8 sm:top-8">
            <span className="h-2 w-2 rounded-full bg-white/70 shadow-[0_0_15px_rgba(255,255,255,0.6)]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/50">
              AH Growth / Studio
            </span>
          </div>

          {/* TOP RIGHT */}
          <div className="absolute right-6 top-6 text-[9px] font-bold uppercase tracking-[0.25em] text-white/35 sm:right-8 sm:top-8">
            02 / 02
          </div>

          {/* VIDEO TEXT */}
          {/* VIDEO */}
<video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="
    absolute
    inset-0
    h-full
    w-full
    object-cover
  "
>
  <source src="/assets/contact.mp4" type="video/mp4" />
</video>

{/* DARK OVERLAY */}
<div className="absolute inset-0 bg-black/40" />
        </div>
      </section>

      {/* FOOTER */}
      <section className="border-t border-white/10 bg-[#050505] px-6 py-16 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">

          {/* BRAND */}
          <div>
            <p
              className="
                font-['Space_Grotesk']
                text-3xl
                font-bold
                tracking-[-0.06em]
              "
            >
              AH GROWTH<span className="text-white/30">.</span>
            </p>

            <p className="mt-3 text-sm text-white/35">
              Growth powered by technology.
            </p>
          </div>

          {/* BACK TO HOME */}
          <Link
            href="/"
            className="
              group
              flex
              items-center
              gap-4
              text-xs
              font-bold
              uppercase
              tracking-[0.18em]
              text-white/40
              transition-colors
              duration-300
              hover:text-white
            "
          >
            <span>
              Back to home
            </span>

            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                text-base
                transition-all
                duration-300
                group-hover:border-white
                group-hover:-translate-y-1
              "
            >
              ↑
            </span>
          </Link>

        </div>
      </section>
    </main>
  );
}