"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ChevronRight,
  Play,
  BarChart3,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
              {/* Testriq Case Study Card */}
              <div
                className="relative p-4 sm:p-6 rounded-2xl sm:rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <div
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

                <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
                  <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                    {/* Testriq Logo Placeholder */}
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden"
                      style={{
                        backgroundColor: "var(--background)",
                        border: "1px solid var(--border-color)",
                      }}
                    >
                      <Image
                        src="/images/logos/testriq-logo.png"
                        alt="Testriq QA Lab"
                        width={40}
                        height={40}
                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3
                        className="font-bold"
                        style={{ color: "var(--foreground)" }}
                      >
                        Testriq QA Lab
                      </h3>
                      <p
                        className="text-[11px] sm:text-xs"
                        style={{ color: "var(--secondary-text)" }}
                      >
                        QA & Testing Solutions
                      </p>
                    </div>
                  </div>
                  {/* The accessible name spells out which case study this
                                        opens, and keeps the visible label inside it (WCAG 2.5.3). */}
                  <Link
                    href="/portfolio/testriq-organic-growth"
                    aria-label="Case Study: Testriq QA Lab organic growth"
                    className="inline-flex w-fit max-w-fit shrink-0 items-center whitespace-nowrap px-3 py-1.5 sm:py-1 transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]"
                    style={{
                      borderRadius: 999,
                      background:
                        "linear-gradient(90deg, var(--brand-purple), var(--brand-cyan))",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: 12,
                    }}
                  >
                    Case Study
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-0 sm:mb-4">
                  <div
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
                          "linear-gradient(90deg, var(--brand-purple), var(--brand-cyan))",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      Strong
                    </div>
                    <div
                      className="text-[11px] sm:text-xs"
                      style={{ color: "var(--secondary-text)" }}
                    >
                      Lead Generation
                    </div>
                  </div>
                  <div
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
                          "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan))",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      Strong
                    </div>
                    <div
                      className="text-[11px] sm:text-xs"
                      style={{ color: "var(--secondary-text)" }}
                    >
                      Website Traffic
                    </div>
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
