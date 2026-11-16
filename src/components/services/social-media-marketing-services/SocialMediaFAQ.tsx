"use client";

import React from 'react';
import Link from "next/link";
import FaqSection from "@/components/ui/FaqSection";

export default function SocialMediaFAQ() {
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
        <FaqSection
            faqs={faqs}
            accent="var(--accent-teal-text)"
            subtitle="Answers to common questions about our social media marketing services, strategy, and results."
            background="var(--card-bg)"
        />
    );
}
