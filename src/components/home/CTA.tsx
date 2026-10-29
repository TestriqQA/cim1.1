import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20" style={{ backgroundColor: "var(--background)" }}>
      <div className="mx-auto max-w-6xl px-6 md:px-12 xl:px-20">
        <div
          style={{
            padding: 48,
            borderRadius: 16,
            background:
              "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan))",
            color: "#fff",
            textAlign: "center",
            boxShadow: "0 15px 40px rgba(0, 138, 193, 0.3)",
          }}
        >
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 12 }}>
            Transform Your Digital Presence with a Web Development Company That
            Delivers Results
          </h2>
          <p style={{ color: "rgba(255,255,255,0.9)", marginBottom: 20 }}>
            Join the businesses that trust Cinute InfoMedia for web development,
            mobile apps, and digital marketing solutions that drive measurable
            ROI.
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "14px 28px",
                borderRadius: 999,
                background: "#fff",
                color: "#006d97",
                fontWeight: 800,
                transition: "all 0.3s",
                textAlign: "center",
                lineHeight: 1.2,
              }}
              className="hover:bg-gray-100"
            >
              <span>Start Your Free Digital Audit</span>
              <ChevronRight size={18} />
            </Link>

            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 28px",
                borderRadius: 999,
                background: "transparent",
                border: "2px solid rgba(255,255,255,0.3)",
                color: "#fff",
                fontWeight: 700,
                transition: "all 0.3s",
                lineHeight: 1.2,
              }}
              className="group hover:bg-white hover:text-cyan-600"
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
