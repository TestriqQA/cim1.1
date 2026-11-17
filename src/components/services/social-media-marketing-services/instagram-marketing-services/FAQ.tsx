"use client";

import React from 'react';
import Link from "next/link";
import FaqSection from "@/components/ui/FaqSection";

export default function FAQ() {
    const faqs = [
        {
            q: "What are Instagram marketing services?",
            a: <>Instagram marketing services encompass a wide range of activities designed to grow a brand's presence on the platform. This includes <Link href="/services/social-media-marketing-services" className="underline underline-offset-2 text-[var(--accent-pink-text)]">Instagram Management Services</Link>, content creation, <Link href="/services/performance-marketing" className="underline underline-offset-2 text-[var(--accent-pink-text)]">Instagram Advertising Services</Link>, influencer outreach, and community engagement to drive brand awareness and sales.</>,
        },
        {
            q: "How much do Instagram marketing services cost?",
            a: "The cost varies based on the scope of work (e.g., number of Reels, ad spend management, or full-service management). Most agencies offer tiers ranging from $1,500 to $10,000+ per month. Contact us for a custom quote tailored to your business needs.",
        },
        {
            q: "What should an Instagram marketing strategy include?",
            a: <>A robust strategy includes <Link href="/services/web-design-development/branding-services" className="underline underline-offset-2 text-[var(--accent-pink-text)]">visual brand guidelines</Link>, a content calendar (Reels, Stories, Posts), a targeted hashtag strategy, <Link href="/services/performance-marketing" className="underline underline-offset-2 text-[var(--accent-pink-text)]">Instagram ad campaign management</Link>, and a plan for community engagement and influencer partnerships.</>,
        },
        {
            q: "Why should businesses use Instagram marketing services?",
            a: <>With the platform's shift toward <Link href="/services/web-design-development/ecommerce-development-company" className="underline underline-offset-2 text-[var(--accent-pink-text)]">Social Commerce</Link> and Reels, professional management ensures you stay ahead of algorithm changes, maintain high-quality aesthetics, and achieve a higher CTR than in-house management often yields.</>,
        },
        {
            q: "How do I choose the best Instagram marketing agency?",
            a: <>Look for an agency with a proven track record (<Link href="/services/seo-services/seo-content-writing-services" className="underline underline-offset-2 text-[var(--accent-pink-text)]">EEAT</Link>), industry-specific experience, transparency in reporting, and a focus on ROI rather than just follower counts.</>,
        },
    ];

    return (
        <FaqSection
            faqs={faqs}
            accent="var(--accent-instagram-text)"
            subtitle="Answers to common questions about our Instagram marketing services, strategy, and results."
            background="var(--card-bg)"
        />
    );
}
