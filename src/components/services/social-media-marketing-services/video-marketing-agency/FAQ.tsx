"use client";

import React, { useState } from 'react';
import { MessageSquare, ChevronDown } from 'lucide-react';
import Link from "next/link";

export default function FAQ() {
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    const faqs = [
        {
            q: "How much do professional YouTube marketing services cost in 2026?",
            a: <><Link href="/services/social-media-marketing-services" className="text-[var(--accent-red-text)] underline underline-offset-2 hover:underline">YouTube marketing cost</Link> for small business starts at $1,500/month for basic management. Full-service YouTube ads management typically ranges from $5,000 to $25,000+ per month, depending on ad spend and content frequency. We offer tiered pricing to fit scalable growth.</>,
        },
        {
            q: "How long does it take to see ROI from YouTube marketing?",
            a: <>While YouTube ads management can drive local leads in 2-4 weeks, organic <Link href="/services/seo-services" className="text-[var(--accent-red-text)] underline underline-offset-2 hover:underline">YouTube SEO services</Link> typically take 3-6 months to build significant authority. However, once the "algorithm flywheel" starts, the ROI is compounding and long-term.</>,
        },
        {
            q: "What are the benefits of hiring a YouTube advertising agency?",
            a: <><Link href="/services/performance-marketing/youtube-ads" className="text-[var(--accent-red-text)] underline underline-offset-2 hover:underline">YouTube advertising agency</Link> provides expertise in creative testing, ad creative testing, and YouTube analytics and reporting that internal teams often lack. We ensure your budget isn't wasted on low-retention audiences, driving a higher ROAS on average.</>,
        },
        {
            q: "What is included in a full-service YouTube ads management package?",
            a: "Our packages include YouTube TrueView ads setup, YouTube bumper ads optimization, custom audience building, YouTube remarketing ads, monthly performance reports, and ongoing creative strategy consultations.",
        },
        {
            q: "How do I choose the best YouTube marketing service for my business?",
            a: <>Look for an agency with verified case studies, <Link href="/services/performance-marketing/google-ads" className="text-[var(--accent-red-text)] underline underline-offset-2 hover:underline">Google Ads</Link> certifications, and a deep understanding of the YouTube algorithm. At Cinute Infomedia, we provide a transparent audit BEFORE you sign, ensuring we are the right fit for your tech stack and goals.</>,
        },
        {
            q: "Can you help with YouTube shorts marketing strategy for brands?",
            a: "Absolutely. YouTube shorts are critical for brand awareness in 2026. We help you create bite-sized, high-impact content that converts mobile viewers into long-term subscribers and customers.",
        },
    ];

    return (
        <section className="py-20" style={{ backgroundColor: "var(--card-bg)" }}>
            <div className="mx-auto max-w-5xl px-6 md:px-12 xl:px-20">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border-color)] mb-6">
                        <MessageSquare className="w-4 h-4 text-[var(--accent-red-text)]" />
                        <span className="text-sm font-bold tracking-wider uppercase" style={{ color: "var(--accent-red-text)" }}>FAQ</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black mb-6" style={{ color: "var(--foreground)" }}>Frequently Asked Questions</h2>
                    <p className="text-lg text-[var(--foreground)] max-w-2xl mx-auto">
                        Answers to common questions about our YouTube marketing services, strategy, and results.
                    </p>
                </div>

                <div className="grid gap-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="group rounded-2xl border transition-all duration-300"
                            style={{
                                backgroundColor: "var(--background)",
                                borderColor: faqOpen === i ? "#FF0000" : "var(--border-color)",
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
                                                backgroundColor: faqOpen === i ? "#c5221f" : "rgba(255, 0, 0, 0.1)",
                                                color: faqOpen === i ? "white" : "var(--accent-red-text)"
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
                                    <div className="mt-4 pl-14 pr-4 border-t pt-4 animate-in fade-in slide-in-from-top-2 duration-300" style={{ borderColor: "rgba(255, 0, 0, 0.2)" }}>
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
