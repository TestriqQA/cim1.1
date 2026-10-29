"use client";

import React, { useState } from 'react';
import { MessageSquare, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function FAQ() {
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    const faqs = [
        {
            q: "What is organic growth SEO?",
            a: <span>Organic growth SEO (Search Engine Optimization) is the strategic process of improving a website's visibility in unpaid search engine results (SERPs). Unlike paid ads, it focuses on long-term, sustainable traffic by <Link href="/services/seo-services/seo-content-writing-services" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">optimizing content</Link>, technical architecture, and authority signals to match search intent and Google's E-E-A-T guidelines.</span>,
        },
        {
            q: "How long does it take to see results from organic SEO?",
            a: <span>Typically, meaningful results from Organic SEO services are seen within 4 to 6 months. However, <Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">technical fixes</Link> can show impact in weeks, while competitive keywords may take 6-12 months. We focus on "quick wins" to show early momentum while building toward long-term organic search visibility.</span>,
        },
        {
            q: "Why is organic growth important for SEO?",
            a: "Organic growth is crucial because it provides sustainable, cost-effective traffic. It builds brand authority and trust, which paid ads cannot buy. Users trust organic results more, leading to higher click-through rates (CTR) and better conversion rates for organic SEO for lead generation.",
        },
        {
            q: "How do you measure organic SEO growth?",
            a: "We measure growth using Data-driven organic growth SEO metrics: Organic Traffic (Total non-paid visits), Keyword Rankings (Positions for primary and secondary terms), Conversions (leads, sales, or sign-ups attributed to organic search), and CTR (Percentage of impressions that result in clicks).",
        },
        {
            q: "What are the best strategies for organic SEO growth in 2026?",
            a: <span>The best strategies for How to grow organic traffic in 2026 include: Prioritizing User Experience (UX) for SEO, Creating <Link href="/services/seo-services/seo-content-writing-services" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">high-E-E-A-T content</Link> that answers direct questions (optimizing for AI Overviews), Building Topical Authority through clusters, and Focusing on Organic SEO for <Link href="/services/mobile-app-development" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">mobile</Link> and voice search.</span>,
        },
    ];

    return (
        <section className="py-16 md:py-24 transition-colors duration-300" style={{ backgroundColor: "var(--card-bg)" }}>
            <div className="mx-auto max-w-5xl px-6 md:px-12 xl:px-20">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-seo) 10%, transparent)",
                        borderColor: "var(--brand-seo)"
                    }}>
                        <MessageSquare className="w-4 h-4" style={{ color: "var(--brand-seo)" }} />
                        <span className="text-sm font-bold tracking-wider uppercase" style={{ color: "var(--accent-green-text)" }}>FAQ</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>Frequently Asked Questions</h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Answers to common questions about our Organic Growth & SEO services.
                    </p>
                </div>

                <div className="grid gap-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="group rounded-2xl border transition-all duration-300"
                            style={{
                                backgroundColor: "var(--background)",
                                borderColor: faqOpen === i ? "var(--brand-seo)" : "var(--border-color)",
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
                                                backgroundColor: faqOpen === i ? "#166534" : "color-mix(in srgb, var(--brand-seo) 10%, transparent)",
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
                                    <div className="mt-4 pl-14 pr-4 border-t pt-4 animate-in fade-in slide-in-from-top-2 duration-300" style={{ borderColor: "color-mix(in srgb, var(--border-color) 50%, transparent)" }}>
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
