"use client";

import React from 'react';
import Link from "next/link";
import FaqSection from "@/components/ui/FaqSection";

export default function FAQ() {
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
        <FaqSection
            faqs={faqs}
            accent="var(--accent-green-text)"
            subtitle="Answers to common questions about our Organic Growth & SEO services."
            background="var(--card-bg)"
        />
    );
}
