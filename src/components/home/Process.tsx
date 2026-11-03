import React from "react";
import { TrendingUp } from "lucide-react";

export default function Process() {
  const digitalAuditSteps = [
    {
      step: 1,
      title: "Discovery & Goal Setting",
      description:
        "Define your current digital footprint, target audience, and key performance indicators.",
    },
    {
      step: 2,
      title: "Technical Audit",
      description:
        "In-depth analysis of your website, SEO, and performance infrastructure.",
    },
    {
      step: 3,
      title: "Strategy Blueprint",
      description:
        "A customized plan outlining immediate wins and long-term growth strategies.",
    },
    {
      step: 4,
      title: "Execution & Optimization",
      description:
        "Implementing the plan with continuous monitoring and data-driven adjustments.",
    },
  ];

  return (
    <section
      id="audit-process"
      className="py-12 sm:py-16 md:py-20"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="mx-auto px-4 sm:px-6 md:px-12 xl:px-20">
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
            <TrendingUp
              className="w-4 h-4"
              style={{ color: "var(--brand-cyan)" }}
            />
            <span className="text-sm sm:text-base" style={{ fontWeight: 600 }}>
              Our Proven Method
            </span>
          </div>
          <h2
            className="mb-3 sm:mb-2"
            style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 900 }}
          >
            Your 4-Step Digital Audit &{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan))",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Growth Roadmap
            </span>
          </h2>
          <p
            className="text-[0.9375rem] sm:text-base"
            style={{
              color: "var(--secondary-text)",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Every successful project starts with understanding where you are and
            where you want to go. Our proven 4-step framework has guided 300+
            businesses to digital excellence.
          </p>
        </div>

        <div className="relative flex flex-col items-center">
          {/* Horizontal Line Connector */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 hidden md:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full">
            {digitalAuditSteps.map((item, index) => (
              <div
                key={index}
                className="relative z-10 text-center p-5 sm:p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center font-bold text-white text-lg sm:text-xl"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--brand-purple), var(--brand-blue))",
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    fontWeight: 800,
                    fontSize: "1.25rem",
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--secondary-text)" }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
