"use client";

import { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Contact form submitted");
  };

  return (
    <main className="min-h-screen bg-cream text-black">
      {/* CONTACT BACKGROUND VIDEO */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Video */}
        <video
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
        >
          <source src="/assets/contact_bg.mp4" type="video/mp4" />
        </video>

        {/* Soft Overlay */}
        <div
          aria-hidden
          className="
            absolute
            inset-0
            bg-cream/80
          "
        />

        {/* Subtle Glow */}
        <div
          aria-hidden
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[450px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-[#DFFF4F]/[0.08]
            blur-[150px]
          "
        />

        {/* CONTENT */}
        <div
          className="
            relative
            z-10
            mx-auto
            max-w-3xl
            px-5
            py-20
            sm:px-8
            sm:py-24
            md:py-28
          "
        >
          {/* MAIN HEADING */}
          <div className="mb-14 text-center sm:mb-16 md:mb-20">
            <h1
              className="
                font-heading
                text-4xl
                font-medium
                tracking-[-0.04em]
                text-black
                sm:text-5xl
                md:text-6xl
              "
            >
              Contact Us
            </h1>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="
              mx-auto
              max-w-2xl
              rounded-2xl
              border
              border-black/[0.08]
              bg-cream/90
              p-6
              backdrop-blur-md
              sm:p-8
              md:p-10
            "
          >
            {/* NAME */}
            <div>
              <label
                htmlFor="name"
                className="
                  mb-2
                  block
                  font-body
                  text-xs
                  font-medium
                  text-black
                "
              >
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="
                  w-full
                  border-0
                  border-b
                  border-black/15
                  bg-transparent
                  px-0
                  py-3
                  font-body
                  text-sm
                  font-normal
                  text-black
                  outline-none
                  transition-colors
                  duration-300
                  placeholder:text-black/30
                  focus:border-[#DFFF4F]
                  sm:text-base
                "
              />
            </div>

            {/* EMAIL */}
            <div className="mt-8">
              <label
                htmlFor="email"
                className="
                  mb-2
                  block
                  font-body
                  text-xs
                  font-medium
                  text-black
                "
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="
                  w-full
                  border-0
                  border-b
                  border-black/15
                  bg-transparent
                  px-0
                  py-3
                  font-body
                  text-sm
                  font-normal
                  text-black
                  outline-none
                  transition-colors
                  duration-300
                  placeholder:text-black/30
                  focus:border-[#DFFF4F]
                  sm:text-base
                "
              />
            </div>

            {/* COMPANY */}
            <div className="mt-8">
              <label
                htmlFor="company"
                className="
                  mb-2
                  block
                  font-body
                  text-xs
                  font-medium
                  text-black
                "
              >
                Company
              </label>

              <input
                id="company"
                name="company"
                type="text"
                placeholder="Company name"
                className="
                  w-full
                  border-0
                  border-b
                  border-black/15
                  bg-transparent
                  px-0
                  py-3
                  font-body
                  text-sm
                  font-normal
                  text-black
                  outline-none
                  transition-colors
                  duration-300
                  placeholder:text-black/30
                  focus:border-[#DFFF4F]
                  sm:text-base
                "
              />
            </div>

            {/* SERVICE */}
            <div className="mt-8">
              <label
                htmlFor="service"
                className="
                  mb-2
                  block
                  font-body
                  text-xs
                  font-medium
                  text-black
                "
              >
                Service
              </label>

              <select
                id="service"
                name="service"
                defaultValue=""
                className="
                  w-full
                  border-0
                  border-b
                  border-black/15
                  bg-transparent
                  px-0
                  py-3
                  font-body
                  text-sm
                  font-normal
                  text-black
                  outline-none
                  transition-colors
                  duration-300
                  focus:border-[#DFFF4F]
                  sm:text-base
                "
              >
                <option value="" disabled className="bg-cream text-black">
                  Select a service
                </option>

                <option value="gmb" className="bg-cream text-black">
                  Google Business Profile Optimization
                </option>

                <option value="performance" className="bg-cream text-black">
                  Performance Marketing
                </option>

                <option value="web" className="bg-cream text-black">
                  Web Development
                </option>

                <option value="app" className="bg-cream text-black">
                  App Development
                </option>

                <option value="uiux" className="bg-cream text-black">
                  UI/UX Design
                </option>

                <option value="ecommerce" className="bg-cream text-black">
                  E-Commerce
                </option>

                <option value="seo" className="bg-cream text-black">
                  SEO
                </option>

                <option value="social" className="bg-cream text-black">
                  Social Media Management
                </option>

                <option value="branding" className="bg-cream text-black">
                  Branding
                </option>

                <option value="ai" className="bg-cream text-black">
                  AI & Automation
                </option>

                <option value="custom" className="bg-cream text-black">
                  Custom Software Solutions
                </option>
              </select>
            </div>

            {/* BUDGET */}
            <div className="mt-8">
              <label
                htmlFor="budget"
                className="
                  mb-2
                  block
                  font-body
                  text-xs
                  font-medium
                  text-black
                "
              >
                Budget
              </label>

              <select
                id="budget"
                name="budget"
                defaultValue=""
                className="
                  w-full
                  border-0
                  border-b
                  border-black/15
                  bg-transparent
                  px-0
                  py-3
                  font-body
                  text-sm
                  font-normal
                  text-black
                  outline-none
                  transition-colors
                  duration-300
                  focus:border-[#DFFF4F]
                  sm:text-base
                "
              >
                <option value="" disabled className="bg-cream text-black">
                  Select your budget
                </option>

                <option value="under-1k" className="bg-cream text-black">
                  Under $1,000
                </option>

                <option value="1k-3k" className="bg-cream text-black">
                  $1,000 - $3,000
                </option>

                <option value="3k-5k" className="bg-cream text-black">
                  $3,000 - $5,000
                </option>

                <option value="5k-10k" className="bg-cream text-black">
                  $5,000 - $10,000
                </option>

                <option value="10k-plus" className="bg-cream text-black">
                  $10,000+
                </option>

                <option value="not-sure" className="bg-cream text-black">
                  Not sure yet
                </option>
              </select>
            </div>

            {/* MESSAGE */}
            <div className="mt-8">
              <label
                htmlFor="message"
                className="
                  mb-2
                  block
                  font-body
                  text-xs
                  font-medium
                  text-black
                "
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your project..."
                className="
                  w-full
                  resize-none
                  border-0
                  border-b
                  border-black/15
                  bg-transparent
                  px-0
                  py-3
                  font-body
                  text-sm
                  font-normal
                  leading-7
                  text-black
                  outline-none
                  transition-colors
                  duration-300
                  placeholder:text-black/30
                  focus:border-[#DFFF4F]
                  sm:text-base
                "
              />
            </div>

            {/* BUTTON */}
            <div className="mt-10">
              <button
                type="submit"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-black
                  px-7
                  py-4
                  font-body
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_12px_35px_-15px_rgba(223,255,79,0.4)]
                  active:translate-y-0
                  sm:text-base
                "
              >
                Send Inquiry

                <span
                  className="
                    text-base
                    text-black
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                >
                  ↗
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}