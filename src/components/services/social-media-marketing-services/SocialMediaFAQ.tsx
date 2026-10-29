"use client";

import React, { useState } from 'react';
import { MessageSquare, ChevronDown } from 'lucide-react';
import Link from "next/link";

export default function SocialMediaFAQ() {
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    const faqs = [
        {
            q: "What are the benefits of hiring a social media marketing agency?",
            a: "Hiring a professional Social Media Marketing Agency gives you access to expert strategists, advanced tools, and industry best practices without the overhead of an in-house team. We ensure consistent branding, targeted reach, and higher ROI by leveraging data-driven strategies and multi-channel social strategy.",
        },
        {
            q: "How much do social media management services cost?",
            a: "Our social media management services are customized to your specific needs and goals. Whether you need affordable social media management for startups or a comprehensive enterprise solution, we offer flexible packages. Contact us for a custom quote tailored to your budget.",
        },
        {
            q: "Which social media platforms are best for my business?",
            a: <>The best platforms depend on your target audience and industry. For B2B, <Link href="/services/social-media-marketing-services/linkedin-marketing-services" className="underline underline-offset-2 hover:text-[var(--accent-teal-text)] hover:underline transition-colors">LinkedIn marketing services</Link> are essential. For visual brands and ecommerce, Instagram and Pinterest are key. We conduct a thorough <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:text-[var(--accent-teal-text)] hover:underline transition-colors">social media audit and analysis</Link> to recommend the most effective mix for you.</>,
        },
        {
            q: "How do I measure the ROI of social media marketing?",
            a: <>We track specific Key Performance Indicators (KPIs) such as conversion rates, lead generation costs, and direct sales. Our <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:text-[var(--accent-teal-text)] hover:underline transition-colors">social media reporting and analytics services</Link> provide transparent insights, showing you exactly how our efforts translate into revenue.</>,
        },
        {
            q: "What is included in social media management services?",
            a: <>Our full-service social media marketing company packages typically include strategy development, content creation, community management, paid advertising, and monthly reporting. We also offer specialized add-ons like <Link href="/services/social-media-marketing-services/instagram-marketing-services" className="underline underline-offset-2 hover:text-[var(--accent-teal-text)] hover:underline transition-colors">influencer marketing management services</Link>.</>,
        },
    ];

    return (
        <section className="py-20" style={{ backgroundColor: "var(--card-bg)" }}>
            <div className="mx-auto max-w-5xl px-6 md:px-12 xl:px-20">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border-color)] mb-6">
                        <MessageSquare className="w-4 h-4 text-[var(--accent-teal-text)]" />
                        <span className="text-sm font-bold tracking-wider uppercase" style={{ color: "var(--foreground)" }}>FAQ</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black mb-6" style={{ color: "var(--foreground)" }}>Frequently Asked Questions</h2>
                    <p className="text-lg text-[var(--foreground)] max-w-2xl mx-auto">
                        Answers to common questions about our social media marketing services, strategy, and results.
                    </p>
                </div>

                <div className="grid gap-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="group rounded-2xl border transition-all duration-300"
                            style={{
                                backgroundColor: "var(--background)",
                                borderColor: faqOpen === i ? "var(--brand-teal)" : "var(--border-color)",
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
                                                backgroundColor: faqOpen === i ? "var(--brand-teal)" : "color-mix(in srgb, var(--brand-teal) 10%, transparent)",
                                                color: faqOpen === i ? "white" : "var(--accent-teal-text)"
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
