import React from "react";
import { Star, Award } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      // NAME CORRECTION ONLY — the quote text is untouched. The client is
      // Testriq QA Lab: their own site's Organization schema uses that
      // name and the string "Technologies" appears nowhere on
      // [www.testriq.com](https://www.testriq.com). This quote was credited to "Testriq
      // Technologies" here while /portfolio credited the same engagement
      // to Testriq QA Lab, so the site contradicted itself.
      company: "Testriq QA Lab",
      industry: "QA & Testing Solutions",
      quote:
        "Cinute InfoMedia transformed our outdated website into a lead-generation powerhouse. The custom web development solution they delivered exceeded our expectations, and the ongoing SEO support has significantly grown our organic traffic.",
      result: "Strong Organic Traffic",
      avatar: "T",
    },
    {
      company: "CloudScale.io",
      industry: "SaaS Startup",
      quote:
        "As a fast-growing SaaS startup, we needed a web development company that understood scalability. Their team delivered a Next.js application that handles high concurrent traffic with strong performance.",
      result: "High Concurrency",
      avatar: "C",
    },
    {
      company: "CDPL Institute",
      industry: "Education Technology",
      quote:
        "The AI chatbot they built has transformed our customer support. We're saving significant hours monthly while providing better, faster service to our students.",
      result: "Significant Hours Saved",
      avatar: "D",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-20"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Same container as the other card grids on this page, so all three
          testimonials have room to sit side by side and the section's left
          edge lines up with Services, Process and Case Studies. */}
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-12 xl:px-20">
        <div className="mb-8 text-center sm:mb-10">
          <div
            className="px-3.5 py-1.5 sm:px-4 sm:py-2 mb-3"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              borderRadius: 999,
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--border-color)",
            }}
          >
            <Star
              className="w-4 h-4"
              style={{ color: "var(--brand-yellow)" }}
            />
            <span
              className="text-sm sm:text-base"
              style={{ fontWeight: 700, color: "var(--foreground)" }}
            >
              What Our Clients Say
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
              fontWeight: 900,
              color: "var(--foreground)",
            }}
          >
            Trusted by{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, var(--brand-purple), var(--brand-orange))",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Industry Leaders
            </span>
          </h2>
        </div>

        {/* All three are on screen at once, so there is nothing to page
            through and no arrows to press. Three across from lg up, one per
            row below that: at 768px three columns are only 198px wide and
            the longest quote drives them 614px tall, which reads as strips. */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.company}
              className="flex h-full flex-col p-5 sm:p-6"
              style={{
                margin: 0,
                borderRadius: 16,
                border: "1px solid var(--border-color)",
                backgroundColor: "var(--card-bg)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              <figcaption className="mb-4 flex items-center gap-3">
                <div
                  className="h-12 w-12 text-lg"
                  style={{
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan))",
                    color: "#fff",
                    fontWeight: 800,
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div className="min-w-0">
                  <div style={{ fontWeight: 800, color: "var(--foreground)" }}>
                    {t.company}
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: "var(--secondary-text)" }}
                  >
                    {t.industry}
                  </div>
                </div>
              </figcaption>

              {/* grow absorbs the difference in quote length, so every card's
                  result badge lands on the same line across the row. */}
              <blockquote
                className="grow text-[0.9375rem] sm:text-base"
                style={{
                  margin: 0,
                  marginBottom: 16,
                  fontStyle: "italic",
                  color: "var(--foreground)",
                }}
              >
                &quot;{t.quote}&quot;
              </blockquote>

              <div
                style={{
                  display: "inline-flex",
                  alignSelf: "flex-start",
                  gap: 8,
                  alignItems: "center",
                  padding: "8px 12px",
                  borderRadius: 999,
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <Award
                  className="w-4 h-4"
                  style={{ color: "var(--brand-blue)" }}
                />
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    color: "var(--foreground)",
                  }}
                >
                  {t.result}
                </span>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
