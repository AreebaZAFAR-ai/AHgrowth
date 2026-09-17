"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const NAV_LINKS = [
  { label: "Home", id: "home", href: "/" },
  { label: "Services", id: "services", href: "/service" },
  { label: "Work", id: "work", href: "/work" },
  { label: "About", id: "about", href: "/about" },
  { label: "Contact", id: "contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const isHomePage = pathname === "/";

  useGSAP(
    () => {
      if (!menuRef.current) return;

      const links =
        menuRef.current.querySelectorAll("[data-menu-link]");

      gsap.set(menuRef.current, {
        autoAlpha: 0,
        pointerEvents: "none",
      });

      gsap.set(links, {
        autoAlpha: 0,
        y: 30,
      });

      tlRef.current = gsap
        .timeline({
          paused: true,
        })
        .to(menuRef.current, {
          autoAlpha: 1,
          pointerEvents: "auto",
          duration: 0.35,
          ease: "power2.out",
        })
        .to(
          links,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.07,
          },
          "-=0.1"
        );
    },
    {
      scope: menuRef,
    }
  );

  useEffect(() => {
    if (isOpen) {
      tlRef.current?.play();
      document.body.style.overflow = "hidden";
    } else {
      tlRef.current?.reverse();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleNavigation = (
    href: string,
    sectionId?: string
  ) => {
    setIsOpen(false);

    /*
     * HOME PAGE
     * Smooth scroll to the section.
     */
    if (isHomePage && sectionId) {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        return;
      }
    }

    /*
     * OTHER PAGES
     * Navigate to the correct route.
     */
    router.push(href);
  };

  const handleLogoClick = () => {
    setIsOpen(false);

    if (isHomePage) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    router.push("/");
  };

  const handleBookCall = () => {
    setIsOpen(false);

    if (isHomePage) {
      const element = document.getElementById("contact");

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        return;
      }
    }

    router.push("/contact");
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        className="
          fixed
          inset-x-0
          top-0
          z-[100]
          bg-black
        "
      >
        <div
          className="
            mx-auto
            flex
            h-20
            max-w-7xl
            items-center
            justify-between
            px-6
            sm:px-8
          "
        >
          {/* LOGO */}
          <button
            type="button"
            onClick={handleLogoClick}
            className="
              font-heading
              text-xl
              font-bold
              tracking-tight
              text-white
              transition-opacity
              duration-300
              hover:opacity-80
            "
          >
            AH GROWTH
            
          </button>

          {/* DESKTOP NAV */}
          <nav
            className="
              absolute
              left-1/2
              hidden
              -translate-x-1/2
              items-center
              gap-9
              md:flex
            "
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() =>
                  handleNavigation(link.href, link.id)
                }
                className="
                  font-body
                  text-base
                  font-medium
                  tracking-wide
                  text-white/80
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:text-white
                "
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* BOOK A CALL */}
          <button
            type="button"
            onClick={handleBookCall}
            className="
              hidden
              rounded-full
              bg-white
              px-6
              py-3
              font-body
              text-base
              font-semibold
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-lg
              md:inline-block
            "
          >
            Book a Call
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label={
              isOpen ? "Close menu" : "Open menu"
            }
            className="
              relative
              z-[110]
              flex
              h-10
              w-10
              flex-col
              items-center
              justify-center
              gap-1.5
              md:hidden
            "
          >
            <span
              className={`
                h-px
                w-6
                bg-white
                transition-transform
                duration-300
                ${
                  isOpen
                    ? "translate-y-[3.5px] rotate-45"
                    : ""
                }
              `}
            />

            <span
              className={`
                h-px
                w-6
                bg-white
                transition-transform
                duration-300
                ${
                  isOpen
                    ? "-translate-y-[3.5px] -rotate-45"
                    : ""
                }
              `}
            />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        ref={menuRef}
        className="
          fixed
          inset-0
          z-[90]
          flex
          flex-col
          items-center
          justify-center
          bg-black
          md:hidden
        "
      >
        <nav
          className="
            flex
            flex-col
            items-center
            gap-8
          "
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              data-menu-link
              onClick={() =>
                handleNavigation(link.href, link.id)
              }
              className="
                font-heading
                text-4xl
                font-semibold
                tracking-tight
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:text-white/60
              "
            >
              {link.label}
            </button>
          ))}

          {/* MOBILE BOOK A CALL */}
          <button
            type="button"
            data-menu-link
            onClick={handleBookCall}
            className="
              mt-4
              rounded-full
              bg-accent-lime
              px-8
              py-3
              font-body
              text-base
              font-semibold
              text-background
              transition-transform
              duration-300
              hover:scale-105
            "
          >
            Book a Call
          </button>
        </nav>
      </div>
    </>
  );
}