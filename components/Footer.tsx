
"use client";

import Link from "next/link";

const services = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "E-Commerce",
  "AI & Automation",
  "SEO & GMB",
  "Performance Marketing",
  "Social Media",
  "Branding",
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const resources = [
  { name: "Our Process", href: "/process" },
  { name: "FAQs", href: "/#faq" },
  { name: "Case Studies", href: "/work" },
  { name: "Get Started", href: "/contact" },
];

const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Facebook", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a07] px-5 pb-5 pt-10 text-white sm:px-6 md:px-10 md:pt-12 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-7xl">

     

        {/* Main Footer */}
        <div className="grid gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-heading text-xl font-bold tracking-[-0.04em] text-white"
            >
              AH Growth
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-6 text-white/70">
              We build digital experiences, software, and growth systems that
              help ambitious businesses move forward.
            </p>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-sm text-white/70 transition-colors duration-300 hover:text-white"
                >
                  {social.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.15em] text-white/50">
              Services
            </h3>

            <ul className="space-y-1.5">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-white/75">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.15em] text-white/50">
              Company
            </h3>

            <ul className="space-y-1.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors duration-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.15em] text-white/50">
              Resources
            </h3>

            <ul className="space-y-1.5">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors duration-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-10 border-t border-white/10 pt-7">
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-8">

            <div>
              <p className="mb-1 text-[10px] uppercase tracking-[0.15em] text-white/40">
                Email
              </p>

              <a
                href="mailto:ahgrowth@ahgrowth.com "
                className="text-sm text-white/75 transition-colors hover:text-white"
              >
                ahgrowth@ahgrowth.com 
              </a>
            </div>

            {/* <div>
              <p className="mb-1 text-[10px] uppercase tracking-[0.15em] text-white/40">
                Phone
              </p>

              <a
                href="tel:+0000000000"
                className="text-sm text-white/75 transition-colors hover:text-white"
              >
                +00 000 000 0000
              </a>
            </div> */}

            <div>
              <p className="mb-1 text-[10px] uppercase tracking-[0.15em] text-white/40">
                Availability
              </p>

              <p className="text-sm text-white/75">
                Available for new projects
              </p>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-[11px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} AH Growth. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

