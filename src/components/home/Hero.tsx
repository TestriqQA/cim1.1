"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ChevronRight,
  BarChart3,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import type { HeroCaseStudy } from "@/data/portfolio";

// A swipe shorter than this is a tap or a scroll, not an intent to change card.
const SWIPE_THRESHOLD_PX = 40;

export default function Hero({
  caseStudies,
}: {
  caseStudies: HeroCaseStudy[];
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSlide, setActiveSlide] = useState(0);
  const pausedRef = useRef(false);
  const touchStartXRef = useRef<number | null>(null);
  // Set by a click on the card and cleared by the next one, so it survives
  // the pointer leaving — unlike the hover pause.
  const heldRef = useRef(false);
  const swipedRef = useRef(false);

  const step = (delta: number) =>
    setActiveSlide(
      (current) => (current + delta + caseStudies.length) % caseStudies.length,
    );

  // Auto-advance every 3s. It stops while the pointer or keyboard focus is on
  // the carousel, stays stopped after a click until the next one, idles while
  // the tab is in the background, and is off entirely for anyone who asked for
  // reduced motion — an animation nobody is watching is wasted work, and one
  // nobody can stop is a WCAG 2.2.2 failure.
  //
  // Nothing moves here: the cards are stacked and only their opacity changes,
  // so advancing is a single state update and the browser's compositor does
  // the rest off the main thread.
  useEffect(() => {
    if (caseStudies.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      if (pausedRef.current || heldRef.current || document.hidden) return;
      setActiveSlide((current) => (current + 1) % caseStudies.length);
    }, 3000);

    return () => window.clearInterval(id);
  }, [caseStudies.length]);

  // Stacking the cards means there is no scroll container to drag, so the
  // left/right swipe people expect on a phone is restored by hand.
  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartXRef.current = event.changedTouches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    const startX = touchStartXRef.current;
    touchStartXRef.current = null;
    if (startX === null || caseStudies.length < 2) return;

    const travelled = event.changedTouches[0].clientX - startX;
    if (Math.abs(travelled) < SWIPE_THRESHOLD_PX) return;

    swipedRef.current = true;
    step(travelled < 0 ? 1 : -1);
  };

  useEffect(() => {
    // Only enable mouse effect on devices that support hover and have a fine pointer (mouse)
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mediaQuery.matches) return;

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame to debounce updates and prevent layout thrashing
      if (animationFrameId) return;

      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        animationFrameId = 0;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background (uses brand colors) */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="hidden md:block absolute w-[800px] h-[800px] rounded-full mix-blend-multiply filter blur-3xl opacity-16 transition-all duration-500 ease-out"
          style={{
            background: `radial-gradient(circle, var(--brand-purple) 0%, transparent 70%)`,
            transform: `translate(${mousePosition.x - 400}px, ${mousePosition.y - 400}px)`,
            willChange: "transform",
          }}
        />
        <div
          className="hidden md:block absolute top-0 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-16 animate-blob"
          style={{ backgroundColor: "var(--brand-cyan)" }}
        />
        <div
          className="hidden md:block absolute top-0 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-16 animate-blob animation-delay-2000"
          style={{ backgroundColor: "var(--brand-yellow)" }}
        />
        <div
          className="hidden md:block absolute bottom-0 left-1/3 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-16 animate-blob animation-delay-4000"
          style={{ backgroundColor: "var(--brand-purple)" }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.02), transparent)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-12 xl:px-20 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left Content */}
          {/* Left Content */}
          <div className="lg:col-span-7 relative z-10">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:py-2 sm:px-4 rounded-full text-white text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-lg animate-fade-in"
              style={{
                background:
                  "linear-gradient(90deg, var(--brand-purple), var(--brand-cyan))",
              }}
            >
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>Digital Presence & Digital Growth</span>
            </div>

            <h1 className="w-full min-w-0 break-words [overflow-wrap:anywhere] text-[1.75rem] leading-[1.15] tracking-tight sm:tracking-normal sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
              Expert Web Development Company
              <br className="hidden sm:inline" />
              <span
                className="block min-w-0 break-words [overflow-wrap:anywhere] bg-clip-text text-transparent"
                style={{
                  background:
                    "linear-gradient(90deg, var(--brand-blue), var(--brand-purple), var(--brand-cyan)) ",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Engineered for Global Growth
              </span>
            </h1>

            <p
              className="text-[0.9375rem] sm:text-lg md:text-xl max-w-2xl mb-6 sm:mb-8 leading-relaxed"
              style={{ color: "var(--secondary-text)" }}
            >
              We are your full-stack partner for online success, specializing in{" "}
              <Link
                href="/services/web-design-development"
                className="hover:text-[var(--brand-cyan)] transition-colors border-b border-transparent hover:border-[var(--brand-cyan)]"
              >
                high-converting websites
              </Link>
              ,{" "}
              <Link
                href="/services/seo-services"
                className="hover:text-[var(--brand-cyan)] transition-colors border-b border-transparent hover:border-[var(--brand-cyan)]"
              >
                strategic SEO
              </Link>
              ,{" "}
              <Link
                href="/services/ai-workflows-automations-services"
                className="hover:text-[var(--brand-cyan)] transition-colors border-b border-transparent hover:border-[var(--brand-cyan)]"
              >
                AI-powered automation
              </Link>
              , and{" "}
              <Link
                href="/services/performance-marketing"
                className="hover:text-[var(--brand-cyan)] transition-colors border-b border-transparent hover:border-[var(--brand-cyan)]"
              >
                performance marketing
              </Link>{" "}
              to ensure your brand stands out and scales globally.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-12">
              <Link
                href="/contact"
                className="group relative w-full sm:w-auto justify-center px-5 py-3 sm:px-6 md:px-8 md:py-4 text-sm md:text-base text-white font-bold rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 sm:hover:scale-105"
                style={{
                  background:
                    "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan))",
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Free Digital Audit
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div
                className="group p-4 rounded-2xl"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="p-2 rounded-lg shrink-0"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan))",
                      color: "#fff",
                    }}
                  >
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-bold mb-1">Data-first growth</h2>
                    <p
                      className="text-sm"
                      style={{ color: "var(--secondary-text)" }}
                    >
                      Continuous testing, analytics & dashboards
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="group p-4 rounded-2xl"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="p-2 rounded-lg shrink-0"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--brand-yellow), var(--brand-orange))",
                      color: "var(--foreground)",
                    }}
                  >
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-bold mb-1">Human-centered design</h2>
                    <p
                      className="text-sm"
                      style={{ color: "var(--secondary-text)" }}
                    >
                      UX backed by research
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Case Studies */}
          {/* Right Side - Case Studies */}
          <aside className="lg:col-span-5 relative z-10 animate-[fadeIn_0.8s_ease-out]">
            <div className="space-y-4 sm:space-y-6">
              {/* Case Studies carousel. Every card is server-rendered and
                  stays in the DOM — the cards are stacked and crossfade rather
                  than mounting — so each client and its link remain crawlable,
                  and no carousel library lands in the bundle above the fold. */}
              <div
                className="relative"
                role="region"
                aria-roledescription="carousel"
                aria-label="Client case studies"
                onMouseEnter={() => {
                  pausedRef.current = true;
                }}
                onMouseLeave={() => {
                  pausedRef.current = false;
                }}
                onFocusCapture={() => {
                  pausedRef.current = true;
                }}
                onBlurCapture={() => {
                  pausedRef.current = false;
                }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onClick={() => {
                  // A swipe ends in a click too; that one changed the slide
                  // already and must not also freeze it.
                  if (swipedRef.current) {
                    swipedRef.current = false;
                    return;
                  }
                  heldRef.current = !heldRef.current;
                }}
              >
                {/* The frame is the container, not the slides: it holds the
                    background, border, padding and glow, so it never takes
                    part in the fade. That is what lets the two sides
                    cross-fade — the incoming content starts before the
                    outgoing has finished, so there is no blank frame in the
                    middle and the card itself never blinks out. */}
                <div
                  className="relative p-4 sm:p-6 rounded-2xl sm:rounded-3xl overflow-hidden group hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      right: -20,
                      top: -20,
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(90deg, var(--brand-purple), var(--brand-cyan))",
                      filter: "blur(30px)",
                      opacity: 0.2,
                    }}
                  />

                  {/* Every slide occupies the same grid cell, so the frame is
                      as tall as the tallest content and nothing reflows. */}
                  <div className="grid">
                    {caseStudies.map((study, index) => {
                      // The cards that are not showing stay in the markup — that
                      // is what keeps all five clients and their links crawlable
                      // — but they are taken out of the tab order and hidden from
                      // assistive tech while invisible. Opacity, never `display:
                      // none`: hidden-by-opacity content is still read, and the
                      // links still count.
                      const isActive = index === activeSlide;

                      return (
                        <div
                          key={study.slug}
                          role={isActive ? "group" : undefined}
                          aria-roledescription={isActive ? "slide" : undefined}
                          aria-label={
                            isActive
                              ? `${index + 1} of ${caseStudies.length}: ${study.client}`
                              : undefined
                          }
                          aria-hidden={!isActive || undefined}
                          inert={!isActive || undefined}
                          className={`col-start-1 row-start-1 motion-reduce:transition-none ${
                            isActive
                              ? // Starts while the old slide is still fading, so
                                // there is never a blank frame between the two.
                                "opacity-100 scale-100 translate-y-0 transition duration-500 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)]"
                              : // Leaves first; the overlap is short enough that
                                // the two never read as doubled text.
                                "opacity-0 scale-[0.985] -translate-y-1 pointer-events-none transition duration-300 ease-[cubic-bezier(0.4,0,1,1)]"
                          }`}
                        >
                          <div className="flex flex-col items-start min-[390px]:flex-row min-[390px]:items-center justify-between gap-3 mb-4 sm:mb-5">
                            <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                              {/* The plate follows the mark it carries: a logo
                              drawn for dark ground keeps its dark ground. */}
                              <div
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl shrink-0 flex items-center justify-center overflow-hidden"
                                style={{
                                  backgroundColor: study.logoPlate,
                                  border: "1px solid var(--border-color)",
                                }}
                              >
                                <Image
                                  src={study.logo}
                                  alt={study.client}
                                  width={40}
                                  height={40}
                                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                                />
                              </div>
                              {/* One line each, so every slide's header is the
                              same height and swiping shifts nothing. */}
                              <div className="min-w-0">
                                <h3
                                  className="font-bold line-clamp-1"
                                  style={{ color: "var(--foreground)" }}
                                >
                                  {study.client}
                                </h3>
                                <p
                                  className="text-[11px] sm:text-xs line-clamp-1"
                                  style={{ color: "var(--secondary-text)" }}
                                >
                                  {study.category}
                                </p>
                              </div>
                            </div>
                            {/* The accessible name spells out which case study this
                                      opens, and keeps the visible label inside it (WCAG 2.5.3).
                                      The right padding is 5px short of the left on purpose: the
                                      chevron only inks 6 of its 24 viewBox units, so it carries
                                      5.25px of its own blank space. Equal padding would leave the
                                      label sitting visibly left of centre. */}
                            <Link
                              href={`/portfolio/${study.slug}`}
                              aria-label={`Case Study: ${study.client}`}
                              className="inline-flex w-fit max-w-fit shrink-0 items-center gap-1 whitespace-nowrap pl-3 pr-[7px] py-1.5 sm:py-1 text-xs font-semibold shadow-sm transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]"
                              style={{
                                borderRadius: 999,
                                // One step darker than var(--brand-blue). The token
                                // itself gives white only 3.88:1, under the 4.5:1 that
                                // this 12px label needs for WCAG AA; this is 4.55:1.
                                // Deliberately not the token, so the CTA keeps its hue.
                                background: "#007eb0",
                                color: "#fff",
                              }}
                            >
                              Case Study
                              <ChevronRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
                            </Link>
                          </div>

                          <div className="grid grid-cols-1 min-[390px]:grid-cols-2 gap-3 sm:gap-4 mb-0 sm:mb-4">
                            {study.metrics.map((metric, metricIndex) => (
                              <div
                                key={metric.label}
                                className="p-3 rounded-xl"
                                style={{
                                  backgroundColor: "var(--background)",
                                  border: "1px solid var(--border-color)",
                                }}
                              >
                                <div
                                  className="text-xl sm:text-2xl font-black"
                                  style={{
                                    background:
                                      metricIndex === 0
                                        ? "linear-gradient(90deg, var(--brand-purple), var(--brand-cyan))"
                                        : "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan))",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                  }}
                                >
                                  {metric.value}
                                </div>
                                {/* Two lines reserved: a one-line and a two-line
                                label must occupy the same box, or the card
                                resizes mid-swipe. */}
                                <div
                                  className="text-xs sm:text-sm line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem]"
                                  style={{ color: "var(--secondary-text)" }}
                                >
                                  {metric.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Quick Stats */}
              <div className="flex items-stretch justify-center gap-2.5 sm:gap-4 text-center">
                <div
                  className="min-w-0 flex-1 p-3 sm:p-4 rounded-xl sm:rounded-2xl"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <div
                    className="text-xl sm:text-2xl font-black"
                    style={{ color: "var(--foreground)" }}
                  >
                    50+
                  </div>
                  <div
                    className="text-[11px] sm:text-xs"
                    style={{ color: "var(--secondary-text)" }}
                  >
                    Projects
                  </div>
                </div>
                <div
                  className="min-w-0 flex-1 p-3 sm:p-4 rounded-xl sm:rounded-2xl"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <div
                    className="text-xl sm:text-2xl font-black"
                    style={{ color: "var(--foreground)" }}
                  >
                    High
                  </div>
                  <div
                    className="text-[11px] sm:text-xs"
                    style={{ color: "var(--secondary-text)" }}
                  >
                    Satisfaction
                  </div>
                </div>
                <div
                  className="min-w-0 flex-1 p-3 sm:p-4 rounded-xl sm:rounded-2xl"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <div
                    className="text-xl sm:text-2xl font-black"
                    style={{ color: "var(--foreground)" }}
                  >
                    24/7
                  </div>
                  <div
                    className="text-[11px] sm:text-xs"
                    style={{ color: "var(--secondary-text)" }}
                  >
                    Support
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
