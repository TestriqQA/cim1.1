"use client";

import React, { useState } from 'react';
import { MessageSquare, ChevronDown } from 'lucide-react';
import Link from "next/link";

export default function FAQ() {
    const [faqOpen, setFaqOpen] = useState<number | null>(null);
    const xColor = "#000000";

    const faqs = [
        {
            q: "How much do professional X marketing services cost?",
            a: <>The Twitter marketing cost for small business typically starts at $1,500 - $3,000 per month for basic management. For enterprise-level Twitter ads management and full-service X marketing services, costs can range from $5,000 to $15,000+ depending on the complexity, ad spend, and global reach required. At our <Link href="/services/social-media-marketing-services" className="hover:underline underline underline-offset-2 text-[var(--brand-blue-text)]">Twitter marketing agency</Link>, we provide custom quotes based on your specific KPIs and growth goals.</>,
        },
        {
            q: "What are the benefits of hiring a Twitter advertising agency?",
            a: <>Hiring a specialized <Link href="/services/performance-marketing" className="hover:underline underline underline-offset-2 text-[var(--brand-blue-text)]">Twitter advertising agency</Link> ensures your brand stays relevant in the real-time "town square." Benefits include expert Twitter ads management, access to advanced X Campaign Manager analytics, protected brand safety, and a 24/7 team for trend hijacking. Professional agencies help you avoid common pitfalls and maximize your Twitter conversion tracking setup for actual ROI.</>,
        },
        {
            q: "How do I choose the best X marketing service for my business?",
            a: <>Choose an agency with a proven track record (EEAT), deep industry knowledge, and a focus on data. The best X marketing agency for tech startups or financial services should demonstrate technical expertise in <Link href="/services/seo-services/technical-seo-services" className="hover:underline underline underline-offset-2 text-[var(--brand-blue-text)]">X analytics</Link> and performance metrics. Always look for case studies showing a measurable CTR lift and clear communication on X algorithm visibility optimization.</>,
        },
        {
            q: "What is included in a full-service X ads management package?",
            a: <>A comprehensive package includes X channel audit and strategy, creative design for promoted tweets, <Link href="/services/social-media-marketing-services/video-marketing-agency" className="hover:underline underline underline-offset-2 text-[var(--brand-blue-text)]">X video ads</Link> marketing strategy, daily bid management, A/B testing, and monthly X ads reporting and ROI analytics. It also covers X profile optimization and management of Twitter audience targeting segments to ensure maximum efficiency.</>,
        },
        {
            q: "How long does it take to see ROI from X marketing?",
            a: "While real-time engagement provides instant visibility, significant ROI from Twitter marketing services usually takes 3 to 6 months. This allows for audience building, X algorithm seasoning, and refinement of Twitter conversion tracking. However, X trend hijacking can deliver viral wins much faster when executed by a experienced Twitter marketing company.",
        },
    ];

    return (
        <section className="py-24" style={{ backgroundColor: "var(--background)" }}>
            <div className="mx-auto max-w-5xl px-6 md:px-12 xl:px-20">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                        <MessageSquare className="w-4 h-4" style={{ color: "var(--foreground)" }} />
                        <span className="text-sm font-bold tracking-wider uppercase" style={{ color: "var(--foreground)" }}>FAQ</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black mb-6" style={{ color: "var(--foreground)" }}>Frequently Asked Questions</h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Get answers to the most common questions about our X and Twitter marketing services.
                    </p>
                </div>

                <div className="grid gap-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="group rounded-2xl border transition-all duration-300"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: faqOpen === i ? "var(--foreground)" : "var(--border-color)",
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
                                                backgroundColor: faqOpen === i ? "var(--foreground)" : "var(--background)",
                                                color: faqOpen === i ? "var(--background)" : "var(--foreground)"
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
