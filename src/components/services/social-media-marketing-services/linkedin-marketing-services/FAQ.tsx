"use client";

import React from 'react';
import Link from "next/link";
import FaqSection from "@/components/ui/FaqSection";

export default function FAQ() {
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
        <FaqSection
            faqs={faqs}
            accent="#0A66C2"
            subtitle="Answers to common questions about our LinkedIn marketing services, strategy, and results for 2026."
        />
    );
}
