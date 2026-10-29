"use client";

import React, { useState } from 'react';
import { MessageSquare, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function FAQ() {
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    const faqs = [
        {
            q: "How do I choose the right web design and development partner?",
            a: <>Selecting the right <Link href="/services/web-design-development" className="underline underline-offset-2 hover:text-[var(--brand-purple)] hover:underline transition-colors">web development company</Link> requires evaluating several critical factors: Portfolio & Case Studies (review their previous work in your industry), Technical Expertise (ensure they master modern technologies like <Link href="/services/web-design-development/nextjs-development-services" className="underline underline-offset-2 hover:text-[var(--brand-purple)] hover:underline transition-colors">React</Link>, <Link href="/services/web-design-development/nextjs-development-services" className="underline underline-offset-2 hover:text-[var(--brand-purple)] hover:underline transition-colors">Next.js</Link>, <Link href="/services/web-design-development/nodejs-backend" className="underline underline-offset-2 hover:text-[var(--brand-purple)] hover:underline transition-colors">Node.js</Link>), Process (a professional web design agency should have a clear development process), and Post-Launch Support (maintenance, security updates). We recommend scheduling consultations with 3-5 agencies to compare technical approaches.</>,
        },
        {
            q: "What should I look for in a web design and development agency?",
            a: <>Key evaluation criteria include Technical Capabilities (modern framework expertise, full-stack skills, <Link href="/services/web-design-development/nodejs-backend" className="underline underline-offset-2 hover:text-[var(--brand-purple)] hover:underline transition-colors">cloud deployment</Link>), Design Excellence (UI/UX portfolio, <Link href="/blog/ui-ux-design-principles-best-practices" className="underline underline-offset-2 hover:text-[var(--brand-purple)] hover:underline transition-colors">accessibility compliance</Link>), Business Understanding (industry experience, ROI-focused approach), and Project Management (Agile methodology, budget transparency).</>,
        },
        {
            q: "How to evaluate a professional web design agency?",
            a: <>Our 10-point evaluation framework includes: requesting case studies with documented results, technical assessment of their tech stack, checking client references, reviewing code quality, assessing communication clarity, verifying certifications (<Link href="/services/performance-marketing" className="underline underline-offset-2 hover:text-[var(--brand-purple)] hover:underline transition-colors">Google Partner</Link>, AWS), testing their own website for speed and SEO, and evaluating cultural fit. Beware of red flags like no portfolio, unwilling to sign NDAs, or unrealistic promises.</>,
        },
        {
            q: "What questions should I ask before hiring a web design agency?",
            a: <>Essential questions cover Technical aspects (recommended stack, security, <Link href="/services/mobile-app-development" className="underline underline-offset-2 hover:text-[var(--brand-purple)] hover:underline transition-colors">mobile responsiveness</Link>, Core Web Vitals), Process (timeline, revisions, communication), Business (references, pricing, ownership), and SEO & Marketing (SEO approach, analytics readiness, scalability).</>,
        },
        {
            q: "How to choose a web design company for long-term growth?",
            a: <>Think beyond the initial launch. Evaluate <Link href="/services/web-design-development/saas-development-services" className="underline underline-offset-2 hover:text-[var(--brand-purple)] hover:underline transition-colors">scalability factors</Link> (architecture, modularity, framework support) and partnership indicators (retention programs, regular updates, proactive performance suggests). Our <Link href="/contact" className="underline underline-offset-2 hover:text-[var(--brand-purple)] hover:underline transition-colors">long-term model</Link> includes quarterly performance reviews, monthly analytics reports, and flexible retainer options for continuous improvement.</>,
        },
    ];

    return (
        <section className="py-20" style={{ backgroundColor: "var(--card-bg)" }}>
            <div className="mx-auto max-w-5xl px-6 md:px-12 xl:px-20">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border-color)] mb-6" style={{ color: "var(--brand-purple-text)" }}>
                        <MessageSquare className="w-4 h-4 text-[var(--brand-purple)]" />
                        <span className="text-sm font-bold tracking-wider uppercase">FAQ</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black mb-6" style={{ color: "var(--foreground)" }}>Frequently Asked Questions</h2>
                    <p className="text-lg text-[var(--foreground)] max-w-2xl mx-auto">
                        Answers to common questions about our web design and development services, timelines, and technical approach.
                    </p>
                </div>

                <div className="grid gap-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="group rounded-2xl border transition-all duration-300"
                            style={{
                                backgroundColor: "var(--background)",
                                borderColor: faqOpen === i ? "var(--brand-purple)" : "var(--border-color)",
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
                                                backgroundColor: faqOpen === i ? "var(--brand-purple-btn)" : "color-mix(in srgb, var(--brand-purple) 10%, transparent)",
                                                color: faqOpen === i ? "white" : "var(--brand-purple-text)"
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
