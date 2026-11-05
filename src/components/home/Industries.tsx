import React from "react";
import Link from "next/link";
import { Briefcase } from "lucide-react";

export default function Industries() {
  const industriesServed = [
    <>
      IT &{" "}
      <Link
        href="/services/web-design-development/saas-development-services"
        className="hover:text-[var(--accent-teal-text)] hover:underline transition-colors"
      >
        SaaS
      </Link>
    </>,
    <>
      <Link
        href="/services/web-design-development/edtech-lms"
        className="hover:text-[var(--accent-teal-text)] hover:underline transition-colors"
      >
        EdTech{" "}
      </Link>
      & E-Learning
    </>,
    <>
      <Link
        href="/services/web-design-development/healthcare-portals"
        className="hover:text-[var(--accent-teal-text)] hover:underline transition-colors"
      >
        Healthcare{" "}
      </Link>
      & Wellness
    </>,
    <>
      <Link
        href="/services/web-design-development/fintech-solutions"
        className="hover:text-[var(--accent-teal-text)] hover:underline transition-colors"
      >
        Financial Services
      </Link>
    </>,
    <>
      <Link
        href="/services/web-design-development/ecommerce-development-company"
        className="hover:text-[var(--accent-teal-text)] hover:underline transition-colors"
      >
        E-Commerce{" "}
      </Link>
      &{" "}
      <Link
        href="/blog/ecommerce-ux-designing-conversion"
        className="hover:text-[var(--accent-teal-text)] hover:underline transition-colors"
      >
        Retail
      </Link>
    </>,
    <>
      <Link
        href="/services/web-design-development/business-corporate"
        className="hover:text-[var(--accent-teal-text)] hover:underline transition-colors"
      >
        B2B
      </Link>{" "}
      <Link
        href="/blog/digital-marketing-strategy-planning-to-execution"
        className="hover:text-[var(--accent-teal-text)] hover:underline transition-colors"
      >
        Professional Services
      </Link>
    </>,
  ];

  return (
    <section
      id="industries"
      className="py-12 sm:py-16 md:py-20"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-12 xl:px-20">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div
            className="px-3.5 py-1.5 sm:px-4 sm:py-2 mb-4"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderRadius: 999,
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--border-color)",
            }}
          >
            <Briefcase
              className="w-4 h-4"
              style={{ color: "var(--brand-teal)" }}
            />
            <span className="text-sm sm:text-base" style={{ fontWeight: 600 }}>
              Industry Focus
            </span>
          </div>
          <h2
            className="mb-3 sm:mb-2"
            style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 900 }}
          >
            Expertise Across{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, var(--brand-teal), var(--brand-cyan))",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Key Sectors
            </span>
          </h2>
          <p
            className="text-[0.9375rem] sm:text-base"
            style={{ color: "var(--secondary-text)" }}
          >
            Our experience spans diverse industries, ensuring tailored
            strategies that deliver results.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4">
          {industriesServed.map((industry, index) => (
            <div
              key={index}
              className="grow text-center px-4 py-2.5 text-sm sm:grow-0 sm:px-6 sm:py-3 sm:text-base rounded-full font-medium transition-all duration-300"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--brand-teal)",
                color: "var(--foreground)",
              }}
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
