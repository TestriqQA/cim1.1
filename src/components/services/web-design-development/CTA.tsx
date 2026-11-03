import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="py-10 lg:py-16 transition-colors duration-300"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 xl:px-20">
        {/* Main CTA Card */}
        <div
          className="relative rounded-3xl p-6 md:p-16 border text-center overflow-hidden"
          style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--border-color)",
          }}
        >
          {/* Glow Effect */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              opacity: 0.1,
              background:
                "linear-gradient(135deg, var(--brand-blue), var(--brand-cyan), var(--brand-teal))",
              filter: "blur(30px)",
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full mb-5 sm:mb-6 border"
              style={{
                background:
                  "linear-gradient(90deg, color-mix(in srgb, var(--brand-blue) 8%, transparent), color-mix(in srgb, var(--brand-teal) 8%, transparent))",
                borderColor:
                  "color-mix(in srgb, var(--brand-blue) 20%, transparent)",
                color: "var(--brand-blue-text)",
              }}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold">
                Global Excellence
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-6 leading-tight">
              <span
                style={{
                  background:
                    "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan), var(--brand-teal))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Ready to Transform Your Global Digital Presence?
              </span>
            </h2>

            {/* Description */}
            <p
              className="text-base md:text-xl max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed"
              style={{ color: "var(--secondary-text)" }}
            >
              Partner with a professional{" "}
              <span className="font-bold text-[var(--brand-blue-text)]">
                web development agency
              </span>{" "}
              to build a high-performance, SEO-optimized website that delivers{" "}
              <span className="text-[var(--accent-teal-text)] font-bold">
                measurable ROI
              </span>
              . Get your free expert audit today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-3 sm:gap-4 justify-center items-stretch md:items-center">
              <Link
                href="/contact"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-2xl text-sm md:text-base font-bold md:whitespace-nowrap bg-gradient-to-r from-[#008ac1] to-[#00b5ca] text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get Your Free Website Audit
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              </Link>

              <Link
                href="/contact"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-2xl text-sm md:text-base font-bold md:whitespace-nowrap border transition-all duration-300"
                style={{
                  borderColor: "var(--border-color)",
                  color: "var(--foreground)",
                }}
              >
                Global Strategy Call
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              </Link>
            </div>

            {/* Bottom Text */}
            <p
              className="mt-6 sm:mt-8 text-[0.95rem]"
              style={{ color: "var(--secondary-text)" }}
            >
              Building for US, EU, and APAC markets.{" "}
              <Link
                href="/contact"
                className="font-semibold underline"
                style={{ color: "var(--brand-blue-text)" }}
              >
                Book a session
              </Link>{" "}
              with our architects.
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          {[
            {
              number: "Expert",
              label: "Expertise",
            },
            {
              number: "Strong",
              label: "Traffic Growth",
            },
            {
              number: "High",
              label: "Uptime SLA",
            },
          ].map((indicator, idx) => (
            <div key={idx}>
              <div
                className="text-3xl sm:text-4xl font-bold mb-1.5 sm:mb-2"
                style={{
                  background:
                    "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {indicator.number}
              </div>
              <p
                className="text-sm sm:text-base"
                style={{ color: "var(--secondary-text)" }}
              >
                {indicator.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
