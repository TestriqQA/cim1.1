"use client";

import React from 'react';
import Link from "next/link";
import FaqSection from "@/components/ui/FaqSection";

export default function FAQ() {
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
        <FaqSection
            faqs={faqs}
            accent="var(--accent-green-text)"
            subtitle="Answers to common questions about our On-Page SEO services."
        />
    );
}
