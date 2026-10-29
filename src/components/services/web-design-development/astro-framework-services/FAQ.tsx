"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What are the benefits of using Astro.js for business?",
            answer: "Astro.js delivers exceptional performance with zero JavaScript by default, resulting in 98-100 PageSpeed scores, sub-1-second load times, and superior SEO rankings. Businesses benefit from higher conversion rates, lower hosting costs, better SEO rankings, faster development, and flexibility to mix React, Vue, Svelte components."
        },
        {
            question: "How much does it cost to build a custom Astro.js website?",
            answer: "Astro website costs vary by scope: Simple Marketing Site (5-10 pages) costs $3,000-$8,000 taking 2-3 weeks; Content-Rich Blog/Portfolio (20-50 pages) costs $8,000-$15,000 taking 3-5 weeks; E-commerce Catalog (100+ products) costs $15,000-$30,000 taking 5-8 weeks; Documentation Portal (500+ pages) costs $20,000-$40,000 taking 6-10 weeks; Enterprise Multi-Site Platforms start at $40,000+ taking 10-16 weeks."
        },
        {
            question: "How do I choose the best Astro development agency?",
            answer: "Choose an Astro development agency based on: 1) Proven track record with 5+ live Astro projects and PageSpeed reports, 2) Technical expertise with team certifications and framework proficiency, 3) Performance portfolio with Core Web Vitals data, 4) Industry experience in your domain, 5) Process transparency with clear communication and code reviews, 6) Support SLA with maintenance and ongoing support availability."
        },
        {
            question: "What is the difference between Astro.js and Next.js?",
            answer: <>Astro.js outputs static HTML with zero JavaScript by default, achieving 98-100 PageSpeed scores and &lt;1s load times, ideal for content sites, blogs, and marketing pages. <Link href="/services/web-design-development/nextjs-development-services" className="text-[var(--accent-indigo-text)] hover:underline underline underline-offset-2">Next.js</Link> is JavaScript-heavy with React runtime, achieving 85-95 PageSpeed and 1-3s load times, best for dynamic apps and SaaS. Astro bundles are 10-50 KB vs Next.js 200-500 KB, resulting in lower hosting costs and better SEO.</>
        },
        {
            question: "How long does it take to develop an Astro.js web application?",
            answer: "Development timelines vary by complexity: Small projects (5-10 pages) take 3-4 weeks, Medium projects (20-50 pages) take 6-8 weeks, Large projects (100+ pages) take 12-14 weeks, Enterprise projects (multi-site platforms) take 16-20 weeks. Most Astro projects launch faster than React/Next.js equivalents due to simplified build processes."
        },
        {
            question: "Can Astro handle e-commerce and dynamic content?",
            answer: "Yes! Astro supports e-commerce with product catalogs via headless CMS integration, shopping carts via Shopify Buy SDK or custom islands, checkout integration with Stripe/PayPal, inventory sync via APIs, and search/filtering. Dynamic content is handled through user authentication with islands (React/Vue), forms with validation, real-time data via server endpoints, and personalized content."
        },
        {
            question: "Do you offer ongoing Astro maintenance and support?",
            answer: <>Yes! We offer <Link href="/services/additional-support-services" className="text-[var(--accent-violet-text)] hover:underline underline underline-offset-2">Standard Support</Link> ($500/month) with content updates, 48-hour bug fixes, CMS training, monthly reports, and security updates; Premium Support ($1,200/month) with 24/7 emergency support, 15 hours development time, A/B testing, and quarterly audits; Enterprise Support (custom pricing) with dedicated account manager, 1-hour SLA, unlimited updates, and multi-site management.</>
        }
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(124, 58, 237, 0.05)",
                            borderColor: "rgba(124, 58, 237, 0.2)",
                        }}
                    >
                        <HelpCircle className="w-4 h-4" style={{ color: "var(--accent-violet-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-violet-text)" }}>
                            FAQ
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Frequently Asked <span style={{ color: "var(--accent-violet-text)" }}>Questions</span>
                    </h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;

                        return (
                            <div
                                key={idx}
                                className="rounded-2xl border overflow-hidden transition-all duration-300"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: isOpen ? "#7C3AED" : "var(--border-color)",
                                }}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                                >
                                    <span className="text-lg font-semibold pr-8" style={{ color: "var(--foreground)" }}>
                                        {faq.question}
                                    </span>
                                    <div
                                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                                        style={{
                                            backgroundColor: isOpen ? "#7C3AED" : "transparent",
                                            border: `1px solid ${isOpen ? "#7C3AED" : "var(--border-color)"}`,
                                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                                        }}
                                    >
                                        {isOpen ? (
                                            <Minus className="w-4 h-4 text-white" />
                                        ) : (
                                            <Plus className="w-4 h-4" style={{ color: "var(--foreground)" }} />
                                        )}
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out`}
                                    style={{
                                        maxHeight: isOpen ? "500px" : "0",
                                        opacity: isOpen ? 1 : 0
                                    }}
                                >
                                    <div className="p-6 pt-0 text-base leading-relaxed" style={{ color: "var(--foreground)" }}>
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
