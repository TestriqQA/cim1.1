"use client";

import React from 'react';
import Link from "next/link";
import FaqSection from "@/components/ui/FaqSection";

export default function FAQ() {
    const faqs = [
        {
            q: "What is the difference between digital marketing and performance marketing?",
            a: <span>While <Link href="/blog/category/digital-marketing" className="underline underline-offset-2 hover:text-[var(--accent-orange-text)]">digital marketing</Link> encompasses all online efforts, performance marketing is specifically focused on paid channels where you pay only for results - clicks, leads, or sales. It is highly measurable and ROI-centric.</span>,
        },
        {
            q: "How much do your performance marketing services cost?",
            a: "We offer flexible pricing models including percentage of ad spend, fixed retainers, or hybrid performance-based fees aimed at ensuring ROI. We tailor our pricing to match your specific goals and budget.",
        },
        {
            q: "How do you measure success in performance marketing?",
            a: "We look beyond clicks. Our primary KPIs are Return on Ad Spend (ROAS), Customer Acquisition Cost (CAC), and Conversion Rate. We focus on metrics that directly impact your bottom line.",
        },
        {
            q: "Do you handle creative assets for ads?",
            a: "Yes! Our in-house creative team designs high-converting banners, writes persuasive ad copy, and edits video ads tailored to each platform. Creative is a crucial driver of performance.",
        },
        {
            q: "Can you help with B2B lead generation?",
            a: <span>Absolutely. We specialize in B2B performance marketing, leveraging <Link href="/services/performance-marketing/linkedin-ads" className="underline underline-offset-2 hover:text-[var(--accent-orange-text)]">LinkedIn Ads</Link> and high-intent <Link href="/services/performance-marketing/google-ads" className="underline underline-offset-2 hover:text-[var(--accent-orange-text)]">Google Search</Link> to fill your pipeline with qualified decision-makers.</span>,
        },
    ];

    return (
        <FaqSection
            faqs={faqs}
            accent="var(--accent-orange-text)"
            subtitle="Answers to common questions about our performance marketing services, pricing, and approach."
            background="var(--card-bg)"
            compact
        />
    );
}
