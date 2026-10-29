"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageSquare, Plus, X } from "lucide-react";

export default function FAQ() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "What makes Cinute InfoMedia different from other web development companies?",
      a: "We combine technical excellence with business strategy. Unlike typical web development agencies that just code to specs, we act as your growth partner - providing strategic guidance, data-driven recommendations, and continuous optimization. Our strong client retention and 300+ successful projects speak to our partnership approach.",
    },
    {
      q: "What web development services do you offer?",
      a: (
        <>
          We offer comprehensive solutions including{" "}
          <Link
            href="/services/web-design-development"
            className="hover:text-[var(--brand-blue)] hover:underline transition-colors"
          >
            custom website development
          </Link>{" "}
          (corporate,{" "}
          <Link
            href="/services/web-design-development/ecommerce-development-company"
            className="hover:text-[var(--brand-blue)] hover:underline transition-colors"
          >
            e-commerce
          </Link>
          ,{" "}
          <Link
            href="/services/web-design-development/saas-development-services"
            className="hover:text-[var(--brand-blue)] hover:underline transition-colors"
          >
            SaaS
          </Link>
          ),{" "}
          <Link
            href="/services/mobile-app-development"
            className="hover:text-[var(--brand-blue)] hover:underline transition-colors"
          >
            mobile app development
          </Link>{" "}
          (
          <Link
            href="/services/mobile-app-development/ios-app-development-company"
            className="hover:text-[var(--brand-blue)] hover:underline transition-colors"
          >
            iOS
          </Link>
          ,{" "}
          <Link
            href="/services/mobile-app-development/android-app-development-company"
            className="hover:text-[var(--brand-blue)] hover:underline transition-colors"
          >
            Android
          </Link>
          ,{" "}
          <Link
            href="/blog/mobile-app-development-trends-2026"
            className="hover:text-[var(--brand-blue)] hover:underline transition-colors"
          >
            cross-platform
          </Link>
          ), web applications with modern frameworks (
          <Link
            href="/blog/future-web-development-nextjs"
            className="hover:text-[var(--brand-blue)] hover:underline transition-colors"
          >
            Next.js
          </Link>
          , React, Laravel),{" "}
          <Link
            href="/services/web-design-development/wordpress-development-services"
            className="hover:text-[var(--brand-blue)] hover:underline transition-colors"
          >
            WordPress development
          </Link>
          , e-commerce development (
          <Link
            href="/services/web-design-development/shopify-development-services"
            className="hover:text-[var(--brand-blue)] hover:underline transition-colors"
          >
            Shopify
          </Link>
          ,{" "}
          <Link
            href="/services/web-design-development/wordpress-development-services"
            className="hover:text-[var(--brand-blue)] hover:underline transition-colors"
          >
            WooCommerce
          </Link>
          ), Progressive Web Apps (PWA), and API development & integrations.
        </>
      ),
    },
    {
      q: "How much does professional website development cost?",
      a: "Website development costs vary based on complexity, features, and scope. Our projects typically range from $5,000 for basic corporate websites to $50,000+ for enterprise e-commerce platforms or custom SaaS applications. We provide transparent, fixed-price quotes after understanding your requirements during the free consultation.",
    },
    {
      q: "Do you provide SEO services with web development?",
      a: (
        <>
          Yes! Every website we build includes foundational{" "}
          <Link
            href="/services/seo-services/technical-seo-services"
            className="hover:text-[var(--brand-blue)] hover:underline transition-colors"
          >
            technical SEO
          </Link>{" "}
          - optimized code structure, mobile responsiveness, fast loading
          speeds, semantic HTML, and proper schema markup. We also offer
          comprehensive{" "}
          <Link
            href="/services/seo-services"
            className="hover:text-[var(--brand-blue)] hover:underline transition-colors"
          >
            SEO services
          </Link>{" "}
          as an ongoing engagement, including keyword strategy, content
          optimization, link building, and performance tracking.
        </>
      ),
    },
    {
      q: "What is your web development process and timeline?",
      a: "Our proven 6-phase Agile methodology: Discovery & Planning (1-2 weeks), Design & Prototyping (2-3 weeks), Development & Coding (4-10 weeks), Testing & QA (1-2 weeks), Deployment & Launch (1 week), and Post-Launch Support (ongoing). Typical corporate website: 8-10 weeks | E-commerce platform: 12-16 weeks | Custom SaaS: 16-24 weeks.",
    },
    {
      q: "Do you work with businesses outside India?",
      a: "Absolutely! While we're based in India, 60% of our clients are in the US, EU, UK, and APAC regions. We have extensive experience with global time zones, international compliance requirements (GDPR, ADA, WCAG), and multi-currency/multi-language implementations.",
    },
    {
      q: "What happens after my website launches?",
      a: "We don't believe in 'launch and abandon.' Every web development project includes 30 days of post-launch support. After that, we offer flexible maintenance packages covering security updates, performance monitoring, content updates, and continuous optimization. Many clients transition to our ongoing digital marketing services for sustained growth.",
    },
    {
      q: "Can you integrate AI and automation into my website?",
      a: (
        <>
          Yes! We&apos;re pioneers in{" "}
          <Link
            href="/services/ai-workflows-automations-services"
            className="hover:text-[var(--brand-blue)] hover:underline transition-colors"
          >
            AI-driven web solutions
          </Link>{" "}
          including{" "}
          <Link
            href="/services/ai-chatbots-services"
            className="hover:text-[var(--brand-blue)] hover:underline transition-colors"
          >
            AI-powered chatbots
          </Link>{" "}
          for customer support,{" "}
          <Link
            href="/blog/ai-workflows-automating-business-processes"
            className="hover:text-[var(--brand-blue)] hover:underline transition-colors"
          >
            workflow automation
          </Link>{" "}
          (CRM, email, reporting), personalized user experiences with machine
          learning, intelligent search and recommendation engines, and
          predictive analytics dashboards.
        </>
      ),
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: "var(--card-bg)" }}>
      <div className="mx-auto max-w-5xl px-6 md:px-12 xl:px-20">
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "7px 14px",
              borderRadius: 999,
              backgroundColor: "var(--background)",
              border: "1px solid var(--border-color)",
              marginBottom: 12,
              lineHeight: 1,
            }}
          >
            <MessageSquare
              className="w-4 h-4"
              style={{ color: "var(--brand-cyan)", flexShrink: 0 }}
            />
            <span style={{ fontWeight: 700 }}>FAQ</span>
          </div>
          <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: 8 }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: "var(--secondary-text)" }}>
            Answers to common questions about services, pricing and timelines
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "var(--background)",
                border: "1px solid var(--border-color)",
                padding: 20,
                borderRadius: 12,
                transition: "all 0.3s",
              }}
              className="hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                aria-expanded={faqOpen === i}
                aria-controls={`faq-answer-${i}`}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "transparent",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                  }}
                >
                  {/* FAQ icon */}
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      minWidth: 36,
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan))",
                      color: "#fff",
                    }}
                  >
                    <MessageSquare size={17} />
                  </div>

                  {/* FAQ question */}
                  <div
                    style={{
                      flex: 1,
                      fontSize: "16px",
                      fontWeight: 650,
                      lineHeight: 1.5,
                      color: "var(--foreground)",
                      letterSpacing: "0.1px",
                    }}
                  >
                    {faq.q}
                  </div>

                  {/* Plus / X icon */}
                  {/* Smooth Plus / X icon */}
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      minWidth: 30,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 8,
                      color: "var(--brand-cyan)",
                      backgroundColor: "var(--card-bg)",
                      position: "relative",
                    }}
                  >
                    <Plus
                      size={18}
                      style={{
                        position: "absolute",
                        transform:
                          faqOpen === i
                            ? "rotate(90deg) scale(0.5)"
                            : "rotate(0deg) scale(1)",
                        opacity: faqOpen === i ? 0 : 1,
                        transition: "transform 0.3s ease, opacity 0.2s ease",
                      }}
                    />
                    <X
                      size={18}
                      style={{
                        position: "absolute",
                        transform:
                          faqOpen === i
                            ? "rotate(0deg) scale(1)"
                            : "rotate(-90deg) scale(0.5)",
                        opacity: faqOpen === i ? 1 : 0,
                        transition: "transform 0.3s ease, opacity 0.2s ease",
                      }}
                    />
                  </div>
                </div>
              </button>

              {/* FAQ answer */}
              {faqOpen === i && (
                <div
                  id={`faq-answer-${i}`}
                  style={{
                    color: "var(--foreground)",
                    marginTop: 16,
                    marginLeft: 52,
                    lineHeight: 1.7,
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
