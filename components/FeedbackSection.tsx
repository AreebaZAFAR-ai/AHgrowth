"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const faqs = [
  {
    question: "What services does AH Growth provide?",
    answer: (
      <div className="space-y-3">
        <p>
          We combine technology, design, and growth to help businesses build a
          stronger digital presence and turn more visitors into customers.
        </p>

        <ul className="list-disc space-y-1.5 pl-5">
          <li>Website & Web Application Development</li>
          <li>E-commerce Development & Optimization</li>
          <li>UI/UX Design & Digital Product Design</li>
          <li>Performance Marketing & Paid Advertising</li>
          <li>SEO & Google Business Profile Optimization</li>
          <li>Social Media Management & Content Strategy</li>
          <li>Branding & Visual Identity</li>
          <li>AI Solutions, Automation & Custom Software</li>
        </ul>
      </div>
    ),
  },
  {
    question: "How can AH Growth help my business grow?",
    answer: (
      <p>
        We turn digital presence into real business growth. From strategy and
        user experience to marketing and technology, we identify what is
        holding your business back and build practical solutions that bring in
        the right audience, improve conversions, and create long-term
        momentum.
      </p>
    ),
  },
  {
    question: "Can you build or redesign my website or e-commerce store?",
    answer: (
      <p>
        Yes. We create websites and e-commerce experiences that look sharp,
        feel effortless to use, and are built to perform. Whether you are
        launching something new or upgrading an existing platform, we combine
        thoughtful UI/UX, responsive development, speed, and
        conversion-focused design to turn visitors into customers.
      </p>
    ),
  },
  {
    question: "Do you provide ongoing marketing and support?",
    answer: (
      <p>
        Yes. Our work does not have to stop after launch. We can continue
        managing your SEO, Google Business Profile, paid campaigns, social
        media, website improvements, analytics, and technical support so your
        digital presence keeps moving forward.
      </p>
    ),
  },
];

export default function FeedbackSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const faqContainerRef = useRef<HTMLDivElement | null>(null);

  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useGSAP(
    () => {
      const faqContainer = faqContainerRef.current;

      if (!faqContainer) return;

      gsap.fromTo(
        faqContainer.querySelectorAll(".faq-item"),
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: faqContainer,
            start: "top 88%",
            once: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  const toggleFAQ = (index: number) => {
    const currentAnswer = answerRefs.current[index];
    const currentIcon = iconRefs.current[index];

    if (!currentAnswer || !currentIcon) return;

    const isOpening = openIndex !== index;

    if (openIndex !== null && openIndex !== index) {
      const previousAnswer = answerRefs.current[openIndex];
      const previousIcon = iconRefs.current[openIndex];

      if (previousAnswer) {
        gsap.to(previousAnswer, {
          height: 0,
          opacity: 0,
          duration: 0.35,
          ease: "power2.inOut",
        });
      }

      if (previousIcon) {
        gsap.to(previousIcon, {
          rotation: 0,
          duration: 0.35,
          ease: "power2.inOut",
        });
      }
    }

    if (isOpening) {
      gsap.set(currentAnswer, {
        height: "auto",
        opacity: 1,
      });

      const height = currentAnswer.offsetHeight;

      gsap.fromTo(
        currentAnswer,
        {
          height: 0,
          opacity: 0,
        },
        {
          height,
          opacity: 1,
          duration: 0.45,
          ease: "power2.out",
          onComplete: () => {
            gsap.set(currentAnswer, {
              height: "auto",
            });
          },
        },
      );

      gsap.to(currentIcon, {
        rotation: 45,
        duration: 0.35,
        ease: "power2.out",
      });
    } else {
      gsap.to(currentAnswer, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });

      gsap.to(currentIcon, {
        rotation: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
    }

    setOpenIndex(isOpening ? index : null);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mb-12 text-center sm:mb-14 lg:mb-16">
  <h2 className="text-2xl font-medium tracking-[-0.02em] text-white/90 sm:text-3xl">
    Frequently Asked Questions</h2>
</div>
      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-[#DFFF4F]/[0.025] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* FAQ */}
        <div
          ref={faqContainerRef}
          className="overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.015]"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`faq-item group relative border-b border-white/[0.07] last:border-b-0 transition-colors duration-500 ${
                  isOpen ? "bg-white/[0.02]" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex min-h-[88px] w-full items-center justify-between gap-5 px-5 py-6 text-left transition-all duration-500 sm:min-h-[100px] sm:px-7 sm:py-7 lg:min-h-[110px] lg:px-8 lg:py-8"
                  aria-expanded={isOpen}
                >
                  <div className="flex min-w-0 items-center gap-5 sm:gap-7">
                    {/* Number */}
                    <span
                      className={`shrink-0 text-[10px] font-normal tracking-[0.14em] transition-colors duration-500 sm:text-[11px] ${
                        isOpen ? "text-[#DFFF4F]/80" : "text-white/20"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}
                    <h3
                      className={`text-sm font-normal leading-6 tracking-[-0.005em] transition-colors duration-500 sm:text-[15px] lg:text-base ${
                        isOpen
                          ? "text-white/90"
                          : "text-white/60 group-hover:text-white/80"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* Plus */}
                  <div
                    ref={(el) => {
                      iconRefs.current[index] = el;
                    }}
                    className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 sm:h-9 sm:w-9 ${
                      isOpen
                        ? "border-[#DFFF4F]/70 bg-[#DFFF4F]/90 text-black"
                        : "border-white/10 bg-white/[0.02] text-white/35 group-hover:border-white/25 group-hover:text-white/60"
                    }`}
                  >
                    <span className="absolute h-px w-3 bg-current" />
                    <span className="absolute h-3 w-px bg-current" />
                  </div>
                </button>

                {/* Answer */}
                <div
                  ref={(el) => {
                    answerRefs.current[index] = el;
                  }}
                  className="faq-answer h-0 overflow-hidden opacity-0"
                >
                  <div className="px-5 pb-8 pl-[58px] sm:px-7 sm:pb-9 sm:pl-[88px] lg:px-8 lg:pb-10 lg:pl-[108px]">
                    <div className="max-w-2xl border-l border-[#DFFF4F]/30 pl-4 sm:pl-5">
                      <div className="text-xs font-normal leading-6 text-white/40 sm:text-sm sm:leading-7">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Soft active line */}
                <div
                  className={`pointer-events-none absolute bottom-0 left-0 h-px bg-[#DFFF4F]/50 transition-all duration-700 ${
                    isOpen ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}