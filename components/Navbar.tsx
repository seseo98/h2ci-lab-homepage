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
      const isScrolled = window.scrollY > 10;
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

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={isTransparent ? "/logo_white.svg" : "/logo_color.svg"}
                alt="H2CI Lab Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className={`font-bold text-xl transition-colors duration-300 ${isTransparent ? "text-white" : "text-stone-900"}`}>
              H2CI Lab
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
                  className={`nav-link pb-0.5 text-sm ${isActive && !isTransparent ? "active" : ""} ${
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
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
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
