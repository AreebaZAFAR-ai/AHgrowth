"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowLeft,
  Zap,
  Bot,
  Workflow,
  Sparkles,
  BrainCircuit,
  Cable,
  BarChart3,
  Database,
  Mail,
  Users,
  FileText,
  CalendarCheck,
  Check,
} from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";

const automationServices = [
  {
    number: "01",
    icon: Zap,
    title: "AI Lead Qualification",
    description:
      "Turn every incoming enquiry into a structured opportunity. Capture the lead, understand intent, enrich the information, score it, and route it to the right person automatically.",
    workflow: "Capture → Understand → Qualify → Route",
    tags: ["Sales", "CRM", "Lead Gen"],
  },
  {
    number: "02",
    icon: Bot,
    title: "Intelligent Customer Support",
    description:
      "Give customers immediate answers without forcing your team to repeat the same information. AI assistants can use your knowledge and escalate conversations when human judgment is needed.",
    workflow: "Question → Knowledge → AI → Response",
    tags: ["Support", "SaaS", "E-commerce"],
  },
  {
    number: "03",
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Connect the tools your business already depends on and remove unnecessary manual handoffs, notifications, data entry, approvals, and routine operational work.",
    workflow: "Trigger → Logic → Action → Update",
    tags: ["Operations", "Admin", "Growth"],
  },
  {
    number: "04",
    icon: Mail,
    title: "AI Communication",
    description:
      "Make communication workflows faster and more relevant. Classify incoming messages, generate context-aware responses, personalize follow-ups, and keep conversations moving.",
    workflow: "Input → Analyze → Personalize → Deliver",
    tags: ["Marketing", "CX", "Email"],
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Automated Reporting",
    description:
      "Bring data from multiple systems into one reliable reporting flow. Automatically collect metrics, organize information, summarize performance, and deliver reports.",
    workflow: "Sources → Process → Insights → Report",
    tags: ["Analytics", "KPIs", "Management"],
  },
  {
    number: "06",
    icon: BrainCircuit,
    title: "Custom AI Systems",
    description:
      "For complex operations, we design systems around your exact requirements—from internal AI assistants and document processing to custom business workflows and integrations.",
    workflow: "Discover → Design → Build → Optimize",
    tags: ["Custom", "AI", "Scale"],
  },
];

const useCases = [
  {
    icon: Users,
    title: "Lead management",
    text: "Capture enquiries, qualify intent, update your CRM, and notify the right person without relying on manual follow-up.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment workflows",
    text: "Connect enquiries with availability, booking confirmations, reminders, rescheduling, and internal notifications.",
  },
  {
    icon: FileText,
    title: "Document processing",
    text: "Extract information from documents, structure the data, validate it, and send exceptions to a human for review.",
  },
  {
    icon: Mail,
    title: "Customer onboarding",
    text: "Move customers through forms, documents, notifications, tasks, and follow-ups through one connected workflow.",
  },
  {
    icon: Database,
    title: "System synchronization",
    text: "Keep customer and operational information consistent across the platforms your team uses every day.",
  },
  {
    icon: BarChart3,
    title: "Business reporting",
    text: "Turn scattered operational data into automated summaries that help teams understand what is happening.",
  },
];

const integrations = [
  "CRM",
  "Forms",
  "Email",
  "Calendar",
  "Databases",
  "APIs",
  "AI Models",
  "Internal Tools",
];

export default function AIAutomationPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const hero = gsap.timeline();

      hero
        .from(".ai-nav", {
          opacity: 0,
          y: -20,
          duration: 0.5,
          ease: "power3.out",
        })
        .from(
          ".hero-eyebrow",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .from(
          ".hero-title span",
          {
            opacity: 0,
            y: 70,
            rotateX: -35,
            duration: 0.8,
            stagger: 0.08,
            ease: "power4.out",
          },
          "-=0.3"
        )
        .from(
          ".hero-copy",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".hero-actions",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".hero-visual",
          {
            opacity: 0,
            scale: 0.9,
            rotate: 3,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6"
        );

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          },
          opacity: 0,
          y: 45,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      gsap.utils.toArray<HTMLElement>(".service-card").forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
          opacity: 0,
          y: 45,
          duration: 0.7,
          delay: i * 0.05,
          ease: "power3.out",
        });
      });

      gsap.to(".floating-orb", {
        y: -18,
        x: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".floating-orb-two", {
        y: 15,
        x: -12,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".image-glow", {
        scale: 1.08,
        opacity: 0.8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: container }
  );

  return (
    <main
      ref={container}
      className="min-h-screen overflow-hidden bg-[#F6F4E8] text-black"
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-screen px-5 py-7 sm:px-6 md:px-10 md:py-8 lg:px-16 xl:px-24">
        {/* Background decorations */}

        <div className="pointer-events-none absolute left-[5%] top-[15%] h-72 w-72 rounded-full bg-[#C0E1D2]/70 blur-[110px]" />

        <div className="pointer-events-none absolute right-[5%] top-[10%] h-64 w-64 rounded-full bg-[#DC9B9B]/25 blur-[100px]" />

        <div className="pointer-events-none absolute bottom-[-10%] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#E5EEE4]/80 blur-[120px]" />

        {/* =====================================================
            NAVIGATION
        ===================================================== */}

        <div className="ai-nav relative z-30 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm text-black/60 transition-colors hover:text-black"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back
          </Link>

          <Link
            href="/"
            className="font-heading text-lg font-bold tracking-[-0.04em]"
          >
            AH Growth
          </Link>

          <Link
            href="/contact"
            className="hidden rounded-full border border-black/15 bg-white/40 px-5 py-2.5 text-xs backdrop-blur-md transition-all duration-300 hover:border-black/40 hover:bg-[#E5EEE4] sm:block"
          >
            Start a Project
          </Link>
        </div>

        {/* =====================================================
            HERO CONTENT
        ===================================================== */}

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-90px)] max-w-7xl items-center">
          <div className="grid w-full items-center gap-16 py-16 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
            {/* LEFT CONTENT */}

            <div>
              <div className="hero-eyebrow mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#C0E1D2] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em]">
                <Sparkles size={13} />

                AI & Automation
              </div>

              <h1 className="hero-title max-w-5xl text-[3.5rem] font-medium leading-[0.9] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[6.6rem]">
                <span className="inline-block">Build</span>{" "}
                <span className="inline-block">systems</span>{" "}
                <span className="inline-block">that</span>{" "}
                <span className="inline-block text-[#DC9B9B]">move.</span>
              </h1>

              <p className="hero-copy mt-8 max-w-xl text-base leading-7 text-black/65 sm:text-lg md:text-xl md:leading-8">
                We turn repetitive business processes into intelligent,
                connected systems—so information moves faster, teams spend less
                time on manual work, and important actions happen consistently.
              </p>

              <div className="hero-actions mt-9 flex flex-wrap gap-3">
                <a
                  href="#automation"
                  className="group inline-flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#DC9B9B]"
                >
                  Explore Automation

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-black/20 bg-white/40 px-6 py-3.5 text-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-black/50 hover:bg-[#C0E1D2]"
                >
                  Talk to Our Team
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[10px] uppercase tracking-[0.16em] text-black/45">
                <span>AI workflows</span>

                <span className="h-1 w-1 rounded-full bg-[#DC9B9B]" />

                <span>Business automation</span>

                <span className="h-1 w-1 rounded-full bg-[#C0E1D2]" />

                <span>System integration</span>
              </div>
            </div>

            {/* =====================================================
                HERO IMAGE
            ===================================================== */}

            <div className="hero-visual relative mx-auto h-[440px] w-full max-w-[500px] sm:h-[500px]">
              {/* Decorative floating elements */}

              {/* <div className="floating-orb absolute left-[1%] top-[8%] z-10 h-24 w-24 rounded-full bg-[#C0E1D2] shadow-[0_20px_60px_rgba(0,0,0,0.08)]" />

              <div className="floating-orb-two absolute bottom-[8%] right-[1%] z-10 h-20 w-20 rounded-full bg-[#DC9B9B]/80" /> */}

              {/* Soft image glow */}

              <div className="image-glow pointer-events-none absolute inset-[3%] rounded-[3rem] bg-[#C0E1D2]/40 blur-[50px]" />

              {/* IMAGE FRAME */}

              <div className="absolute inset-[6%] overflow-hidden rounded-[2.5rem] border border-black/10 bg-white/50 shadow-[0_30px_90px_rgba(0,0,0,0.12)] backdrop-blur-sm">
                <img
                  src="/assets/aiautomation.jpg"
                  alt="AI and automation system"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Image overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

            
                {/* Bottom right label */}

              
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        id="automation"
        className="border-t border-black/10 px-5 py-24 sm:px-6 md:px-10 md:py-32 lg:px-16 xl:px-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-14 grid gap-8 md:grid-cols-[1fr_0.45fr] md:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#DC9B9B]" />

                <p className="text-[10px] uppercase tracking-[0.25em] text-black/50">
                  Automation capabilities
                </p>
              </div>

              <h2 className="max-w-4xl text-4xl leading-[0.96] tracking-[-0.06em] sm:text-5xl md:text-6xl lg:text-7xl">
                Systems designed around how your business actually works.
              </h2>
            </div>

            <p className="text-sm leading-6 text-black/55">
              We don't automate for the sake of automation. We identify the
              repetitive parts of your operation and turn them into reliable
              systems.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {automationServices.map((service) => (
              <AutomationCard key={service.number} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WORKFLOW
      ===================================================== */}

      <section className="relative overflow-hidden border-t border-black/10 bg-[#E5EEE4] px-5 py-24 sm:px-6 md:px-10 md:py-32 lg:px-16 xl:px-24">
        <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[450px] w-[450px] rounded-full bg-[#C0E1D2]/70 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="reveal max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#DC9B9B]" />

              <p className="text-[10px] uppercase tracking-[0.25em] text-black/50">
                How it works
              </p>
            </div>

            <h2 className="text-4xl leading-[0.96] tracking-[-0.06em] sm:text-5xl md:text-6xl">
              From trigger to outcome.
              <span className="text-black"> Without the busywork.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/60 md:text-lg">
              A strong automation system combines triggers, business rules,
              AI, integrations, and human checkpoints into one clear flow.
            </p>
          </div>

          <div className="reveal mt-16 grid gap-4 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Trigger",
                text: "A form submission, enquiry, email, booking, or event starts the workflow.",
                bg: "bg-[#F6F4E8]",
              },
              {
                number: "02",
                title: "Understand",
                text: "AI reads the incoming information and identifies what matters.",
                bg: "bg-[#C0E1D2]",
              },
              {
                number: "03",
                title: "Decide",
                text: "Rules and AI determine what should happen next.",
                bg: "bg-[#DC9B9B]/70",
              },
              {
                number: "04",
                title: "Act",
                text: "The system updates, sends, creates, schedules, or routes automatically.",
                bg: "bg-black text-white",
              },
            ].map((step) => (
              <div
                key={step.number}
                className={`group rounded-[1.5rem] border border-black/10 p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] ${step.bg}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.2em] opacity-45">
                    {step.number}
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="opacity-40 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                <h3 className="mt-12 text-2xl tracking-[-0.04em]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 opacity-65">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-black/10 bg-[#F6F4E8]/70 p-6 text-center">
            <p className="text-sm font-medium md:text-base">
              The goal isn't to automate everything.
              <span className="text-[#DC9B9B]">
                {" "}
                It's to automate the right things.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          USE CASES
      ===================================================== */}

      <section className="border-t border-black/10 bg-[#F6F4E8] px-5 py-24 sm:px-6 md:px-10 md:py-32 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-14 max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#DC9B9B]" />

              <p className="text-[10px] uppercase tracking-[0.25em] text-black/50">
                Real-world applications
              </p>
            </div>

            <h2 className="text-4xl leading-[0.96] tracking-[-0.06em] sm:text-5xl md:text-6xl">
              Give your team more room to do meaningful work.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="reveal group rounded-[1.5rem] border border-black/10 bg-white/45 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-black/25 hover:bg-[#C0E1D2]/50 hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C0E1D2] transition-all duration-300 group-hover:rotate-3 group-hover:bg-[#DC9B9B]">
                      <Icon size={20} />
                    </div>

                    <span className="text-[10px] tracking-[0.2em] text-black/30">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-9 text-xl tracking-[-0.035em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    {item.text}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-black/40 transition-colors group-hover:text-black">
                    Built around your workflow

                    <ArrowUpRight size={13} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          INTEGRATIONS
      ===================================================== */}

      <section className="border-t border-black/10 px-5 py-24 sm:px-6 md:px-10 md:py-32 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="reveal grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#DC9B9B]" />

                <p className="text-[10px] uppercase tracking-[0.25em] text-black/50">
                  Connected ecosystem
                </p>
              </div>

              <h2 className="text-4xl leading-[0.96] tracking-[-0.06em] sm:text-5xl md:text-6xl">
                Your tools don't need to change.
                <span className="text-black">
                  {" "}
                  They need to connect.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-black/55">
                We work with the systems already inside your business and
                connect them into workflows that move information where it
                needs to go.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {integrations.map((item, index) => (
                <div
                  key={item}
                  className={`group flex min-h-[125px] items-end rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-2 ${
                    index % 4 === 0
                      ? "border-[#C0E1D2] bg-[#C0E1D2]"
                      : index % 4 === 1
                        ? "border-[#DC9B9B]/30 bg-[#DC9B9B]/20"
                        : index % 4 === 2
                          ? "border-black/10 bg-[#E5EEE4]"
                          : "border-black/10 bg-[#F6F4E8]"
                  }`}
                >
                  <div>
                    <span className="mb-3 block text-[9px] tracking-[0.2em] text-black/35">
                      0{index + 1}
                    </span>

                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUTCOMES
      ===================================================== */}

      <section className="border-t border-black/10 bg-[#C0E1D2] px-5 py-24 sm:px-6 md:px-10 md:py-32 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-16 max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#DC9B9B]" />

              <p className="text-[10px] uppercase tracking-[0.25em] text-black/50">
                The business impact
              </p>
            </div>

            <h2 className="text-4xl leading-[0.96] tracking-[-0.06em] sm:text-5xl md:text-6xl">
              Automation should make the business feel lighter.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/60">
              The value isn't another dashboard or another AI tool. It's
              removing friction from the work your team already does.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Outcome
              number="01"
              title="Less repetitive work"
              text="Reduce the amount of time your team spends copying information, sending routine updates, and managing predictable tasks."
            />

            <Outcome
              number="02"
              title="Faster response"
              text="Move information and actions through your business immediately instead of waiting for every manual handoff."
            />

            <Outcome
              number="03"
              title="More consistency"
              text="Turn important processes into repeatable systems rather than relying entirely on memory and manual follow-up."
            />

            <Outcome
              number="04"
              title="Better visibility"
              text="Keep information synchronized so your team can understand what is happening without piecing together multiple systems."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-5 py-24 sm:px-6 md:px-10 md:py-32 lg:px-16 xl:px-24">
        <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#DC9B9B] px-6 py-20 text-center shadow-[0_30px_80px_rgba(0,0,0,0.12)] sm:px-10 md:px-16 md:py-28">
          <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#C0E1D2]/60 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#E5EEE4]/70 blur-[100px]" />

          <div className="relative z-10">
            <div className="mx-auto mb-7 flex h-12 w-12 items-center justify-center rounded-full border border-black/15 bg-black/5">
              <Sparkles size={19} />
            </div>

            <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-black/60">
              Ready to build?
            </p>

            <h2 className="mx-auto max-w-4xl text-4xl leading-[0.98] tracking-[-0.06em] sm:text-5xl md:text-7xl">
              Find the work your team shouldn't have to repeat.
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-6 text-black/65 md:text-base">
              Tell us how your current process works. We'll help identify where
              AI and automation can remove friction and create a system that
              fits your business.
            </p>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F6F4E8] hover:text-black"
            >
              Start a Conversation

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          DO NOT CHANGE FOOTER
      ===================================================== */}

      <Footer />
    </main>
  );
}

/* =========================================================
   AUTOMATION CARD
========================================================= */

function AutomationCard({
  service,
}: {
  service: (typeof automationServices)[number];
}) {
  const Icon = service.icon;

  return (
    <article className="service-card group relative overflow-hidden rounded-[1.75rem] border border-black/10 bg-white/45 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-black/20 hover:bg-[#E5EEE4] hover:shadow-[0_30px_70px_rgba(0,0,0,0.1)] sm:p-8">
      <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#C0E1D2]/80 blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C0E1D2] transition-all duration-300 group-hover:rotate-3 group-hover:bg-[#DC9B9B]">
            <Icon size={21} strokeWidth={1.8} />
          </div>

          <span className="text-[10px] font-medium tracking-[0.2em] text-black/30">
            {service.number}
          </span>
        </div>

        <h3 className="mt-10 max-w-md text-2xl tracking-[-0.04em] sm:text-[1.7rem]">
          {service.title}
        </h3>

        <p className="mt-4 max-w-lg text-sm leading-6 text-black/55">
          {service.description}
        </p>

        <div className="mt-7 rounded-xl border border-black/10 bg-[#F6F4E8] px-4 py-3">
          <p className="mb-2 text-[9px] uppercase tracking-[0.18em] text-black/35">
            Typical workflow
          </p>

          <p className="text-xs font-semibold">{service.workflow}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-black/10 bg-white/40 px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] text-black/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5">
          <span className="text-[10px] uppercase tracking-[0.18em] text-black/40">
            Intelligent system
          </span>

          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-[#DC9B9B] group-hover:bg-[#DC9B9B]/30">
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   OUTCOME
========================================================= */

function Outcome({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-[1.5rem] border border-black/10 bg-[#F6F4E8]/70 p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-[#DC9B9B]/35 hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between">
        <span className="text-[10px] tracking-[0.2em] text-black/35">
          {number}
        </span>

        <Check
          size={17}
          className="text-black/30 transition-colors group-hover:text-black"
        />
      </div>

      <h3 className="mt-9 text-2xl tracking-[-0.035em]">{title}</h3>

      <p className="mt-4 max-w-lg text-sm leading-6 text-black/55">{text}</p>
    </div>
  );
}

/* =========================================================
   FOOTER — KEEP AS IS
========================================================= */

function Footer() {
  return (
    <footer className="w-full bg-black px-5 pb-5 pt-12 text-[#F7F2EB] sm:px-6 md:px-10 md:pt-16 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.3fr_0.7fr_0.7fr_0.7fr]">
          <div>
            <Link
              href="/"
              className="font-heading text-3xl font-bold tracking-[-0.05em]"
            >
              AH Growth
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/45">
              We build digital experiences, intelligent systems, and growth
              solutions for ambitious businesses.
            </p>
          </div>

          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-white/35">
              Services
            </p>

            <div className="space-y-3">
              {[
                "Web Development",
                "App Development",
                "UI/UX Design",
                "E-Commerce",
                "AI & Automation",
              ].map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="block text-sm text-white/60 transition-colors hover:text-white"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-white/35">
              Company
            </p>

            <div className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Work", href: "/work" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-white/35">
              Resources
            </p>

            <div className="space-y-3">
              {[
                { name: "Our Process", href: "/process" },
                { name: "FAQs", href: "/#faq" },
                { name: "Case Studies", href: "/work" },
                { name: "Get Started", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 rounded-3xl bg-[#F7F2EB] p-6 text-[#303841] sm:p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#303841]/50">
              Have a project in mind?
            </p>

            <h3 className="mt-2 text-2xl tracking-[-0.035em] sm:text-3xl">
              Let&apos;s build something great.
            </h3>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#303841] px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:scale-105"
          >
            Get Started

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-5 py-7 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} AH Growth. All rights reserved.</p>

          <div className="flex flex-wrap gap-5">
            <Link href="#" className="transition-colors hover:text-white">
              Instagram
            </Link>

            <Link href="#" className="transition-colors hover:text-white">
              LinkedIn
            </Link>

            <Link href="#" className="transition-colors hover:text-white">
              Facebook
            </Link>

            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}