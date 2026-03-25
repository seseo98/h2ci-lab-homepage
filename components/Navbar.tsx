"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/people", label: "People" },
  { href: "/publications", label: "Publications" },
  { href: "/news", label: "News" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const update = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      const el = headerRef.current;
      if (!el) return;
      const isHome = pathname === "/";
      if (!isHome || isScrolled) {
        el.style.background = "rgba(255,255,255,0.95)";
        el.style.backdropFilter = "blur(12px)";
        el.style.boxShadow = "0 1px 3px rgba(0,0,0,0.08)";
        el.style.borderBottom = "1px solid rgba(0,0,0,0.06)";
      } else {
        el.style.background = "transparent";
        el.style.backdropFilter = "none";
        el.style.boxShadow = "none";
        el.style.borderBottom = "none";
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  const isTransparent = !scrolled && pathname === "/";
  // Logo is hidden while hero logo is visible (home page at top)
  const logoVisible = !isTransparent;

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ fontFamily: "'Rajdhani', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo — animates in from hero on scroll */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            style={{ pointerEvents: logoVisible ? "auto" : "none" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget.querySelector("[data-h2ci]") as HTMLElement | null;
              if (el) { el.style.backgroundImage = "linear-gradient(135deg, #F5A01A 0%, #E06020 50%, #C2305A 100%)"; el.style.webkitBackgroundClip = "text"; el.style.webkitTextFillColor = "transparent"; el.style.backgroundClip = "text"; }
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget.querySelector("[data-h2ci]") as HTMLElement | null;
              if (el) { el.style.backgroundImage = "none"; el.style.webkitBackgroundClip = "unset"; el.style.webkitTextFillColor = "unset"; el.style.backgroundClip = "unset"; }
            }}
          >
            <div
              className="relative w-9 h-9 flex-shrink-0"
              style={{
                transition: "opacity 350ms ease, transform 350ms ease",
                opacity: logoVisible ? 1 : 0,
                transform: logoVisible ? "scale(1)" : "scale(0.5)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo_color.svg"
                alt="H2CI Lab Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span
              className="font-bold text-2xl"
              style={{
                transition: "opacity 350ms ease, transform 350ms ease",
                opacity: logoVisible ? 1 : 0,
                transform: logoVisible ? "translateX(0)" : "translateX(-8px)",
              }}
            >
              <span data-h2ci="">H2CI&thinsp;Lab</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link pb-0.5 text-lg font-semibold font-rajdhani ${isActive && !isTransparent ? "active" : ""} ${
                    isTransparent ? "!text-white/80 hover:!text-white" : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${isTransparent ? "text-white hover:bg-white/10" : "text-stone-600 hover:bg-stone-100"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className={`md:hidden pb-4 pt-2 border-t ${isTransparent ? "border-white/20 bg-black/30 backdrop-blur-md" : "border-stone-100 bg-white/95"}`}>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium font-rajdhani transition-colors ${
                      isTransparent
                        ? isActive ? "text-white bg-white/20" : "text-white/80 hover:text-white hover:bg-white/10"
                        : isActive ? "text-orange-600 bg-orange-50" : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
