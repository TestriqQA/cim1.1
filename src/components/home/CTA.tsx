import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="py-12 sm:py-16 md:py-20"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-12 xl:px-20">
        {/* Darkened from the navbar's "Let's Talk" ramp (#008ac1 -> #00b5ca),
            which read too bright at panel size. The end stop is set by
            contrast, not taste: white body copy needs 4.5:1, so the stop has
            to sit at or below 0.1833 relative luminance. #00808f gives 4.68:1
            and #0091a2 only 3.77:1. The glow is dropped to match, or it lifts
            the panel back up. */}
        <div
          className="p-6 sm:p-10 md:p-12 bg-gradient-to-r from-[#006e9a] to-[#00808f]"
          style={{
            borderRadius: 16,
            color: "#fff",
            textAlign: "center",
            boxShadow: "0 15px 40px rgba(0, 110, 154, 0.3)",
          }}
        >
          <h2
            className="mb-3"
            style={{
              fontSize: "clamp(1.375rem, 5vw, 1.75rem)",
              fontWeight: 900,
            }}
          >
            Transform Your Digital Presence with a Web Development Company That
            Delivers Results
          </h2>
          <p
            className="mb-5 text-[0.9375rem] sm:text-base"
            // Full white, not 90%: the 10% transparency let the panel
            // bleed through and dropped this 16px copy to 4.10:1 at the
            // gradient end, under the 4.5:1 it needs. Opaque it is 4.68:1.
            style={{ color: "#fff" }}
          >
            Join the businesses that trust Cinute InfoMedia for web development,
            mobile apps, and digital marketing solutions that drive measurable
            ROI.
          </p>

          <div className="flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                borderRadius: 999,
                background: "#fff",
                color: "#006d97",
                fontWeight: 800,
                transition: "all 0.3s",
                textAlign: "center",
                lineHeight: 1.2,
              }}
              className="w-full px-4 py-3.5 sm:w-auto sm:px-7 hover:bg-gray-100"
            >
              <span className="text-[15px] sm:text-base">
                Start Your Free Digital Audit
              </span>
              <ChevronRight size={18} />
            </Link>

            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 999,
                background: "transparent",
                border: "2px solid rgba(255,255,255,0.3)",
                color: "#fff",
                fontWeight: 700,
                transition: "all 0.3s",
                lineHeight: 1.2,
              }}
              className="group w-full px-4 py-3.5 sm:w-auto sm:px-7 hover:bg-white hover:text-cyan-600"
            >
              <span className="inline-block transition-transform duration-300 hover:scale-[1.1] active:scale-[1.1]">
                Request Proposal
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
