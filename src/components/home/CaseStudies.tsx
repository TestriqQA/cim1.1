import React from "react";
import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      company: "Ved Solutions",
      industry: "B2B SaaS",
      title: "Lead-gen overhaul that scaled pipeline",
      description:
        "Comprehensive funnel redesign, targeted content and a paid media program delivered a significant increase in qualified leads and a meaningful reduction in CAC within 3 months.",
      metric: "Growth",
      metricLabel: "Leads",
      gradientStyle: {
        background:
          "linear-gradient(90deg, var(--brand-cyan), var(--brand-blue))",
      },
    },
    {
      company: "Maple",
      industry: "EdTech",
      title: "Automation & chatbot for student engagement",
      description:
        "Implemented an AI chatbot paired with CRM automation to reduce manual support and increase student engagement; saved significant hours per month and improved retention.",
      metric: "Significant",
      metricLabel: "Hours Saved",
      gradientStyle: {
        background:
          "linear-gradient(90deg, var(--brand-purple), var(--brand-cyan))",
      },
    },
    {
      company: "HealthCare Plus",
      industry: "Healthcare",
      title: "SEO & content growth program",
      description:
        "A targeted technical SEO program and topical content strategy tripled organic traffic across multiple service lines within 6 months.",
      metric: "Growth",
      metricLabel: "Traffic",
      gradientStyle: {
        background:
          "linear-gradient(90deg, var(--brand-yellow), var(--brand-orange))",
      },
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-20"
      style={{
        backgroundColor: "var(--card-bg)",
        borderTop: "1px solid var(--border-color)",
      }}
    >
      <div className="mx-auto px-4 sm:px-6 md:px-12 xl:px-20">
        <div className="flex items-end justify-between mb-8 sm:mb-10 md:mb-12">
          <div>
            <div
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 mb-3"
              style={{
                display: "inline-flex",
                gap: 8,
                borderRadius: 999,
                backgroundColor: "var(--background)",
                border: "1px solid var(--border-color)",
              }}
            >
              <Award style={{ color: "var(--brand-yellow)" }} />
              <span
                className="text-sm sm:text-base"
                style={{ fontWeight: 600 }}
              >
                Client Success
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
                fontWeight: 900,
              }}
            >
              Real projects,{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, var(--brand-yellow), var(--brand-orange))",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                measurable outcomes
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {caseStudies.map((cs) => (
            <article
              key={cs.company}
              className="p-5 sm:p-6 hover:shadow-lg hover:-translate-y-1"
              style={{
                backgroundColor: "var(--background)",
                border: "1px solid var(--border-color)",
                borderRadius: 16,
                transition: "all 0.3s",
                transform: "translateY(0)",
                boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  marginBottom: 12,
                }}
              >
                {/* Allowed to shrink: the badge beside it never wraps, so
                    without this the pair can push past the card on a phone. */}
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      color: "var(--secondary-text)",
                      fontSize: 13,
                      marginBottom: 6,
                    }}
                  >
                    {cs.industry}
                  </div>

                  <div style={{ fontWeight: 800 }}>{cs.company}</div>
                </div>

                {/* Metric badge: one line, with the gradient carried by the
                    dot rather than a filled pill. A fully rounded corner only
                    reads as a pill on a single line — stacked, it bulges — and
                    moving the gradient off the background means the label is
                    no longer white text on a bright cyan or yellow fill. */}
                <div
                  className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 whitespace-nowrap"
                  style={{
                    borderRadius: 999,
                    flexShrink: 0,
                    lineHeight: 1.2,
                    backgroundColor:
                      "color-mix(in srgb, var(--foreground) 6%, transparent)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      flexShrink: 0,
                      ...cs.gradientStyle,
                    }}
                  />

                  <span
                    className="text-[12px] sm:text-[13px] font-bold"
                    style={{ color: "var(--foreground)" }}
                  >
                    {cs.metric}
                  </span>

                  <span
                    className="text-[11px] sm:text-[12px] font-medium"
                    style={{ color: "var(--secondary-text)" }}
                  >
                    {cs.metricLabel}
                  </span>
                </div>
              </div>

              <h3 style={{ fontWeight: 800, marginBottom: 8 }}>{cs.title}</h3>

              <p
                className="text-[0.9375rem] sm:text-base"
                style={{
                  color: "var(--secondary-text)",
                  marginBottom: 16,
                }}
              >
                {cs.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
