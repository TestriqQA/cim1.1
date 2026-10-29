"use client";

import React, { useState } from 'react';
import { MessageSquare, ChevronDown } from 'lucide-react';
import Link from "next/link";

export default function FAQ() {
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    const seoGreen = "#22C55E";

    const faqs = [
        {
            q: "What is included in on-page SEO services?",
            a: "Our services include a comprehensive on-page SEO technical audit, keyword mapping, title tag/meta description optimization, image compression, internal linking, Core Web Vitals fixes, and schema markup implementation.",
        },
        {
            q: "How much do professional on-page SEO services cost in 2026?",
            a: "The on-page SEO cost for business websites 2026 typically ranges from $1,500 to $5,000+ per month, depending on site size and competition. We offer tailored quotes based on your specific scalable dev needs.",
        },
        {
            q: "Why is on-page SEO important for website ranking?",
            a: "On-page SEO tells Google exactly what your content is about. Without it, even the best content lacks the relevance signals needed to rank, especially 2026 AI-driven updates.",
        },
        {
            q: "How long does it take to see results from on-page SEO?",
            a: <>While technical fixes can show impact in weeks, <Link href="/blog/mastering-seo-organic-growth" className="hover:underline underline underline-offset-2 text-[var(--brand-blue-text)]">sustainable organic growth</Link> typically takes 3-6 months. Our clients often see a <Link href="/blog/seo-ppc-hybrid-full-stack-funnels-convert-2x-better-2026" className="hover:underline underline underline-offset-2 text-[var(--brand-blue-text)]">measurable CTR lift</Link> within the first 60 days.</>,
        },
        {
            q: "What is the difference between on-page and off-page SEO?",
            a: "On-page SEO (or on-site SEO) refers to optimizations made directly on your website (content, HTML, speed). Off-page SEO refers to external signals like backlinks and social proof.",
        },
    ];

    return (
        <section className="py-24 transition-colors duration-300 border-t" style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}>
            <div className="mx-auto max-w-5xl px-6 md:px-12 xl:px-20">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{
                        backgroundColor: `${seoGreen}10`,
                        borderColor: `${seoGreen}30`
                    }}>
                        <MessageSquare className="w-4 h-4" style={{ color: seoGreen }} />
                        <span className="text-sm font-bold tracking-wider uppercase" style={{ color: "var(--accent-green-text)" }}>FAQ</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Frequently Asked <span style={{ color: "var(--accent-green-text)" }}>Questions</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Answers to common questions about our On-Page SEO services.
                    </p>
                </div>

                <div className="grid gap-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="group rounded-2xl border transition-all duration-300"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: faqOpen === i ? seoGreen : "var(--border-color)",
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
                                                backgroundColor: faqOpen === i ? "#166534" : `${seoGreen}10`,
                                                color: faqOpen === i ? "white" : "var(--accent-green-text)"
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
                                    <div className="mt-4 pl-14 pr-4 border-t pt-4 animate-in fade-in slide-in-from-top-2 duration-300" style={{ borderColor: "var(--border-color)" }}>
                                        <p className="leading-relaxed" style={{ color: "var(--foreground)" }}>
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
