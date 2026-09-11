"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const SERVICE_OPTIONS = [
  "Website Design & Development",
  "Branding",
  "UI/UX Design",
  "E-commerce",
  "Web Application",
  "Digital Marketing",
  "Other",
];

const BUDGET_OPTIONS = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000+",
  "Not sure yet",
];

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  "w-full rounded-md border bg-white px-4 py-3 font-heading text-base text-black outline-none transition-colors duration-300 placeholder:text-black/35 focus:border-black";

const labelClass = "mb-2 block font-heading text-sm font-medium text-black";

function fieldBorder(hasError: boolean) {
  return hasError ? "border-red-500" : "border-black/20";
}

export default function ContactUsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useGSAP(
    () => {
      const items = pageRef.current?.querySelectorAll("[data-reveal]");
      if (!items || !items.length) return;

      gsap.from(items, {
        autoAlpha: 0,
        y: 24,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
      });
    },
    { scope: pageRef }
  );

  const handleChange =
    (field: keyof FormState) =>
    (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const validate = (values: FormState): FormErrors => {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = "Full name is required.";
    if (!values.email.trim()) {
      next.email = "Email address is required.";
    } else if (!EMAIL_PATTERN.test(values.email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!values.service) next.service = "Please select a service.";
    if (!values.message.trim()) next.message = "Tell us a bit about your project.";
    return next;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // No backend/API exists in this project yet — this simply confirms
    // the inquiry client-side. Wire this up to a real endpoint or email
    // service before going live.
    setSubmitted(true);
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-32 sm:px-10 sm:pb-28 sm:pt-40 lg:px-16 lg:pb-32">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1fr] lg:gap-24">
          {/* LEFT — INTRO */}
          <div data-reveal>
            <p className="font-heading text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
              AH GROWTH
            </p>

            <p className="mt-6 max-w-sm font-heading text-base font-normal leading-relaxed text-black/70 sm:text-lg">
              Let&rsquo;s build something impactful together. Tell us about
              your project, and our team will get back to you.
            </p>
          </div>

          {/* RIGHT — FORM */}
          <div data-reveal>
            {submitted ? (
              <div className="flex min-h-[360px] flex-col items-start justify-center rounded-md border border-black/10 px-6 py-10 sm:px-8">
                <p className="font-heading text-2xl font-bold tracking-tight text-black sm:text-3xl">
                  Thank you! Your inquiry has been received.
                </p>
                <p className="mt-3 font-heading text-base text-black/60">
                  We&rsquo;ll be in touch soon.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(INITIAL_FORM);
                    setErrors({});
                    setSubmitted(false);
                  }}
                  className="mt-8 font-heading text-sm font-medium text-black/50 underline-offset-4 transition-colors duration-300 hover:text-black hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="cf-name" className={labelClass}>
                      Full Name *
                    </label>
                    <input
                      id="cf-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange("name")}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "cf-name-error" : undefined}
                      className={`${inputClass} ${fieldBorder(!!errors.name)}`}
                    />
                    {errors.name && (
                      <p id="cf-name-error" className="mt-1.5 text-xs text-red-600">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="cf-email" className={labelClass}>
                      Email Address *
                    </label>
                    <input
                      id="cf-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange("email")}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "cf-email-error" : undefined}
                      className={`${inputClass} ${fieldBorder(!!errors.email)}`}
                    />
                    {errors.email && (
                      <p id="cf-email-error" className="mt-1.5 text-xs text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="cf-company" className={labelClass}>
                      Company Name
                    </label>
                    <input
                      id="cf-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Company name"
                      value={form.company}
                      onChange={handleChange("company")}
                      className={`${inputClass} border-black/20`}
                    />
                  </div>

                  <div>
                    <label htmlFor="cf-phone" className={labelClass}>
                      Phone Number
                    </label>
                    <input
                      id="cf-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={handleChange("phone")}
                      className={`${inputClass} border-black/20`}
                    />
                  </div>

                  <div>
                    <label htmlFor="cf-service" className={labelClass}>
                      Project / Service *
                    </label>
                    <select
                      id="cf-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange("service")}
                      aria-invalid={!!errors.service}
                      aria-describedby={errors.service ? "cf-service-error" : undefined}
                      className={`${inputClass} ${fieldBorder(!!errors.service)}`}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p id="cf-service-error" className="mt-1.5 text-xs text-red-600">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="cf-budget" className={labelClass}>
                      Budget Range
                    </label>
                    <select
                      id="cf-budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange("budget")}
                      className={`${inputClass} border-black/20`}
                    >
                      <option value="" disabled>
                        Select a budget range
                      </option>
                      {BUDGET_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="cf-message" className={labelClass}>
                    Message *
                  </label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={6}
                    placeholder="Tell us about your project, goals, timeline, and any other details..."
                    value={form.message}
                    onChange={handleChange("message")}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "cf-message-error" : undefined}
                    className={`${inputClass} resize-none ${fieldBorder(!!errors.message)}`}
                  />
                  {errors.message && (
                    <p id="cf-message-error" className="mt-1.5 text-xs text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="group mt-2 inline-flex w-full items-center justify-center gap-3 rounded-md bg-black px-8 py-4 font-heading text-sm font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/85 sm:w-auto"
                >
                  Send Inquiry
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
