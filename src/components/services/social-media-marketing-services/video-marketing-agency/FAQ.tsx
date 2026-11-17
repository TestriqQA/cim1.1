"use client";

import React from 'react';
import Link from "next/link";
import FaqSection from "@/components/ui/FaqSection";

export default function FAQ() {
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
            a: <>Look for an agency with verified case studies, <Link href="/services/performance-marketing/google-ads" className="text-[var(--accent-red-text)] underline underline-offset-2 hover:underline">Google Ads</Link> certifications, and a deep understanding of the YouTube algorithm. At Cinute InfoMedia, we provide a transparent audit BEFORE you sign, ensuring we are the right fit for your tech stack and goals.</>,
        },
        {
            q: "Can you help with YouTube shorts marketing strategy for brands?",
            a: "Absolutely. YouTube shorts are critical for brand awareness in 2026. We help you create bite-sized, high-impact content that converts mobile viewers into long-term subscribers and customers.",
        },
    ];

    return (
        <FaqSection
            faqs={faqs}
            accent="var(--accent-youtube-text)"
            subtitle="Answers to common questions about our YouTube marketing services, strategy, and results."
            background="var(--card-bg)"
        />
    );
}
