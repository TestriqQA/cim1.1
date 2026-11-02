import React from "react";
import Link from "next/link";
import { Layers, Briefcase, Heart } from "lucide-react";

export default function CoreValues() {
  const coreValues = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Full-Stack Strategy & Execution",
      description: (
        <>
          From{" "}
          <Link
            href="/services/web-design-development"
            className="hover:text-[var(--brand-blue)] hover:underline transition-colors"
          >
            custom website development
          </Link>{" "}
          to{" "}
          <Link
            href="/services/ai-workflows-automations-services"
            className="hover:text-[var(--brand-blue)] hover:underline transition-colors"
          >
            AI-powered marketing automation
          </Link>
          , we provide end-to-end web development services that eliminate the
          need for multiple vendors. Our integrated approach ensures your web
          design, mobile apps, SEO, and performance marketing work in perfect
          harmony.
        </>
      ),
      bullets: [
        "Single point of accountability",
        "Unified brand experience",
        "Faster deployment",
        "Reduced vendor overhead",
      ],
      color: "var(--brand-blue)",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Measurable ROI & Transparent Reporting",
      description: (
        <>
          Every web development project is built around clearly defined KPIs and
          real-time analytics dashboards. We focus on what truly matters:{" "}
          <Link
            href="/services/performance-marketing"
            className="hover:text-[var(--brand-yellow)] hover:underline transition-colors"
          >
            conversion rates
          </Link>
          ,{" "}
          <Link
            href="/services/seo-services/technical-seo-services"
            className="hover:text-[var(--brand-yellow)] hover:underline transition-colors"
          >
            page performance
          </Link>
          , organic visibility, and revenue growth—not vanity metrics.
        </>
      ),
      bullets: [
        "Sub-2s Core Web Vitals",
        "sustained organic growth",
        "faster time-to-market",
        "Rigorous QA process",
      ],
      color: "var(--brand-yellow)",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Partner-Centric Approach & Long-Term Success",
      description: (
        <>
          We&apos;re not a transactional{" "}
          <Link
            href="/services/web-design-development"
            className="hover:text-[var(--brand-purple)] hover:underline transition-colors"
          >
            web development company
          </Link>{" "}
          - we&apos;re your growth co-pilot. With strong client retention, our
          clients stay because we treat their business goals as our own.
        </>
      ),
      bullets: [
        "Dedicated account teams",
        "Proactive optimization",
        "Ongoing training",
        "24/7 priority support",
      ],
      color: "var(--brand-purple)",
    },
  ];

  return (
    <section
      id="core-values"
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
            <Heart
              className="w-4 h-4"
              style={{ color: "var(--brand-purple)" }}
            />
            <span className="text-sm sm:text-base" style={{ fontWeight: 600 }}>
              Our Philosophy
            </span>
          </div>
          <h2
            className="mb-3 sm:mb-2"
            style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 900 }}
          >
            Why CIM is Your Growth Partner for{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, var(--brand-yellow), var(--brand-orange))",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Web Development & Digital Marketing
            </span>
          </h2>
          <p
            className="text-[0.9375rem] sm:text-base"
            style={{
              color: "var(--secondary-text)",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Our approach is built on transparency, measurable results, and deep
            partnership. As a{" "}
            <Link
              href="/services/web-design-development"
              className="hover:text-[var(--brand-cyan)] hover:underline transition-colors"
            >
              leading web development company
            </Link>{" "}
            and{" "}
            <Link
              href="/services/performance-marketing"
              className="hover:text-[var(--brand-cyan)] hover:underline transition-colors"
            >
              digital marketing agency
            </Link>
            , we don&apos;t just build websites - we architect scalable digital
            ecosystems that drive business growth for startups, SMEs, and
            enterprises worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              <div
                className="p-3 sm:p-4 mb-3 sm:mb-4"
                style={{
                  display: "inline-flex",
                  borderRadius: 12,
                  color: "#fff",
                  background: value.color,
                }}
              >
                {value.icon}
              </div>
              <h3
                className="mb-2"
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(1.25rem, 4vw, 1.5rem)",
                  lineHeight: 1.25,
                }}
              >
                {value.title}
              </h3>
              <p
                className="text-[0.9375rem] sm:text-base"
                style={{ color: "var(--secondary-text)" }}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
