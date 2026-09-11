"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<ReturnType<typeof gsap.timeline> | null>(null);

  useGSAP(
    () => {
      if (!menuRef.current) return;

      const links = menuRef.current.querySelectorAll("[data-menu-link]");

      gsap.set(menuRef.current, { autoAlpha: 0 });
      gsap.set(links, { autoAlpha: 0, y: 32 });

      tlRef.current = gsap
        .timeline({ paused: true })
        .to(menuRef.current, {
          autoAlpha: 1,
          duration: 0.4,
          ease: "power2.out",
        })
        .fromTo(
          links,
          { autoAlpha: 0, y: 32 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.08,
          },
          "-=0.15"
        );
    },
    { scope: menuRef }
  );

  useEffect(() => {
    if (isOpen) {
      tlRef.current?.play();
    } else {
      tlRef.current?.reverse();
    }
  }, [isOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-black">
        <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
          
          {/* LOGO */}
          <Link
            href="/"
            className="font-heading text-lg font-semibold tracking-tight text-white"
            onClick={() => setIsOpen(false)}
          >
            AH GROWTH<span className="text-accent-lime">.</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* BOOK A CALL */}
          <Link
            href="/contact"
            className="hidden rounded-full bg-accent-lime px-5 py-2.5 font-body text-sm font-medium text-background transition-transform duration-300 hover:scale-105 md:inline-block"
          >
            Book a Call
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-px w-6 bg-white transition-transform duration-300 ${
                isOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />

            <span
              className={`h-px w-6 bg-white transition-transform duration-300 ${
                isOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black md:hidden"
      >
        <nav className="flex flex-col items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-menu-link
              onClick={() => setIsOpen(false)}
              className="font-heading text-4xl font-medium tracking-tight text-white transition-colors hover:text-white/60"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            data-menu-link
            onClick={() => setIsOpen(false)}
            className="mt-4 rounded-full bg-accent-lime px-8 py-3 font-body text-base font-medium text-background"
          >
            Book a Call
          </Link>
        </nav>
      </div>
    </>
  );
}