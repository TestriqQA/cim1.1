"use client";

import React, { useState } from 'react';
import { MessageSquare, ChevronDown } from 'lucide-react';
import Link from "next/link";

export default function FAQ() {
    const [faqOpen, setFaqOpen] = useState<number | null>(null);
    const linkedinBlue = "#0A66C2";

    const faqs = [
        {
            q: "How much do LinkedIn marketing services cost in 2026?",
            a: <><Link href="/services/social-media-marketing-services" className="hover:underline underline underline-offset-2 text-[var(--brand-blue-text)]">LinkedIn marketing cost</Link> for small business typically ranges from $1,500 to $5,000+ per month for management, depending on ad spend and complexity. We offer tiered packages to ensure ROI at every level.</>,
        },
        {
            q: "What are the benefits of hiring a LinkedIn advertising agency?",
            a: "An expert B2B LinkedIn marketing agency provides deep targeting expertise, access to beta features, and advanced LinkedIn ads management that reduces CPL by up to 40% compared to in-house efforts.",
        },
        {
            q: "How do I generate B2B leads on LinkedIn?",
            a: <>We utilize a mix of <Link href="/services/performance-marketing" className="hover:underline underline underline-offset-2 text-[var(--brand-blue-text)]">LinkedIn lead generation services</Link>, including Lead Gen Forms, LinkedIn ABM (Account Based Marketing), and high-value lead magnet creation services to capture high-intent data.</>,
        },
        {
            q: "What is included in LinkedIn ads management services?",
            a: "Our service includes strategy, ad creative, LinkedIn sponsored content management, technical setup (Insight Tag), A/B testing, and comprehensive ROI tracking.",
        },
        {
            q: "How long does it take to see results from LinkedIn marketing?",
            a: "While brand awareness is immediate, high-quality B2B lead generation typically sees optimal scaling after 30-60 days of data-driven optimization.",
        },
    ];

    return (
        <section className="py-24" style={{ backgroundColor: "var(--background)" }}>
            <div className="mx-auto max-w-5xl px-6 md:px-12 xl:px-20">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{ backgroundColor: "var(--card-bg)", borderColor: `${linkedinBlue}30` }}>
                        <MessageSquare className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-bold tracking-wider uppercase" style={{ color: "var(--brand-blue-text)" }}>FAQ</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black mb-6" style={{ color: "var(--foreground)" }}>Frequently Asked Questions</h2>
                    <p className="text-lg text-[var(--foreground)] max-w-2xl mx-auto">
                        Answers to common questions about our LinkedIn marketing services, strategy, and results for 2026.
                    </p>
                </div>

                <div className="grid gap-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="group rounded-2xl border transition-all duration-300"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: faqOpen === i ? linkedinBlue : "var(--border-color)",
                                borderRadius: '1.25rem'
                            }}
                        >
                            <button
                                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                                className="w-full text-left px-6 py-6 focus:outline-none"
                            >
                                <div className="flex gap-4 items-center justify-between">
                                    <div className="flex gap-4 items-center">
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                                            style={{
                                                backgroundColor: faqOpen === i ? linkedinBlue : `${linkedinBlue}10`,
                                                color: faqOpen === i ? "white" : "var(--brand-blue-text)"
                                            }}
                                        >
                                            <span className="font-bold">{i + 1}</span>
                                        </div>
                                        <h3 className="font-bold text-lg md:text-xl pr-8" style={{ color: "var(--foreground)" }}>{faq.q}</h3>
                                    </div>
                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${faqOpen === i ? "rotate-180" : ""}`}
                                        style={{ color: "var(--secondary-text)" }}
                                    />
                                </div>

                                {faqOpen === i && (
                                    <div className="mt-4 pl-14 pr-4 border-t pt-4 animate-in fade-in slide-in-from-top-2 duration-300" style={{ borderColor: "color-mix(in srgb, var(--border-color) 50%, transparent)" }}>
                                        <p className="text-[var(--foreground)] leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </div>
                                )}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
