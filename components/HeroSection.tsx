"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 50);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden -mt-16">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-brand-gradient opacity-[0.92]" />

      {/* Decorative circles */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full border border-white/10 opacity-30" />
      <div className="absolute top-[5%] right-[5%] w-[400px] h-[400px] rounded-full border border-white/10 opacity-20" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full border border-white/10 opacity-20" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Two-column layout: logo left, text right */}
        <div className="flex flex-col sm:flex-row items-center gap-16 sm:gap-24">

          {/* ── Left: logo — animates into navbar on scroll ── */}
          <div
            className="flex-shrink-0"
            style={{
              transition: "opacity 350ms ease, transform 350ms ease",
              opacity: scrolled ? 0 : 1,
              transform: scrolled
                ? "scale(0.2) translateY(-120px)"
                : "scale(1) translateY(0px)",
              transformOrigin: "top left",
              pointerEvents: scrolled ? "none" : "auto",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo_white.svg"
              alt="H2CI Lab"
              style={{ height: "320px", width: "auto" }}
            />
          </div>

          {/* ── Right: text content ── */}
          <div className="flex flex-col justify-center">
            {/* Lab name in Rajdhani */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              Health &amp; Human-Computer
              <br />
              Interaction Lab
            </h1>

            {/* Faculty */}
            <p className="text-base sm:text-lg text-white/80 mb-6">
              Led by Dr. Eunkyung Jo
            </p>

            {/* Location badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-white/90 text-sm font-medium">POSTECH · Pohang, South Korea</span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
              We focus on improving the design and real-world use of collaborative health technology by understanding stakeholder needs, developing novel systems, and evaluating these systems in real-world settings.
            </p>
          </div>
        </div>
      </div>

      {/* Straight bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />
    </section>
  );
}
