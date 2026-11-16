"use client";

import React from 'react';
import Link from "next/link";
import FaqSection from "@/components/ui/FaqSection";

export default function FAQ() {
    const faqs: { question: string; answer: string | React.ReactNode }[] = [
        {
            question: "What is local SEO and how does it work?",
            answer: <><Link href="/services/seo-services" className="underline underline-offset-2 hover:underline text-[var(--accent-amber-text)]">Local SEO</Link> (local search engine optimization) is the process of optimizing your online presence to attract customers searching for businesses 'near me' or in specific geographic areas. Unlike traditional SEO that targets national/global rankings, local SEO focuses on appearing in the Google Map Pack (top 3 local results), Google Business Profile panels, and geo-modified organic results.\n\nHow it works: Google's local algorithm evaluates three core factors:\n\n• Proximity - How close your business is to the searcher\n• Relevance - How well your GBP categories/description match the query\n• Prominence - Your reputation (reviews, citations, <Link href="/services/seo-services/link-building" className="underline underline-offset-2 hover:underline text-[var(--accent-amber-text)]">backlinks</Link>)\n\nOur local SEO services optimize all three signals to rank you prominently for high-intent local searches that drive calls, direction requests, and foot traffic.</>
        },
        {
            question: "How much do local SEO services cost per month in 2026?",
            answer: "Local SEO cost for small business 2026 ranges based on competition and business complexity:\n\n• Single-Location SMB: $800 - $1,500/mo (GBP optimization, 20 citations, review management)\n• Multi-Location (2-5): $1,500 - $3,500/mo (Per-location GBP, 40+ citations, localized landing pages)\n• Franchise/Enterprise (6+): $3,500 - $8,000/mo (Bulk location management, advanced schema, competitive markets)\n\nROI Perspective: Our clients average $12-$18 in revenue for every $1 spent on local SEO, primarily from increased phone calls and in-store visits tracked via Google Analytics 4 and call tracking.\n\nWhat determines cost: Market competition (legal/medical = higher), number of locations/service areas, current online presence (starting from scratch vs. optimization), and industry-specific requirements (schema, compliance)."
        },
        {
            question: "How do I rank my business on Google Maps?",
            answer: "Ranking on Google Maps requires optimizing 3 core elements:\n\n1. Google Business Profile Completeness (30% impact)\n• Choose the MOST specific primary category (not generic 'Restaurant' but 'Italian Restaurant')\n• Fill out 100% of fields: hours, phone, website, services, attributes\n• Upload 20+ photos (businesses with 100+ photos get 520% more calls)\n• Post weekly updates (events, offers, news)\n\n2. NAP Consistency & Citations (25% impact)\n• Ensure your Name, Address, Phone match exactly across 50+ directories\n• Build citations on Yelp, Apple Maps, Bing, industry directories\n• Fix duplicate listings that confuse Google\n\n3. Reviews & Reputation (20% impact)\n• Aim for 40+ Google reviews (median for top 3 rankings)\n• Maintain 4.5+ star average\n• Respond to every review within 24-48 hours\n• Generate consistent review velocity (2-4 new reviews/week ideal)\n\nBonus Factors: On-page SEO with LocalBusiness schema (15% impact), Local backlinks from chambers, news sites (10% impact). Timeline: Most businesses reach top 5 Map Pack within 60-90 days with our local SEO audit and strategy services."
        },
        {
            question: "What is the difference between SEO and local SEO?",
            answer: <>Traditional SEO: Targets national/global rankings with focus on backlink authority + content depth. Goal is to rank for broad keywords targeting anyone searching. Key metrics include organic traffic and domain authority. Top ranking signals are content quality, backlinks, and <Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:underline text-[var(--accent-amber-text)]">technical SEO</Link>.\n\nLocal SEO: Focuses on rankings in specific cities/neighborhoods through Google Business Profile + proximity optimization. Goal is to appear in the Google Map Pack for users within 5-25 mile radius. Key metrics include Map Pack rank, calls, directions, and foot traffic. Top ranking signals are NAP citations, reviews, and GBP optimization.\n\nWhen to use Traditional SEO: SaaS products, ecommerce sites selling nationally, informational blogs\n\nWhen to use Local SEO: Restaurants, medical practices, law firms, contractors, retail stores, real estate agents—any business serving a specific geographic area.\n\nOur approach: We combine both! Our local search engine optimization includes <Link href="/services/seo-services/on-page-seo-services" className="underline underline-offset-2 hover:underline text-[var(--accent-amber-text)]">traditional on-page SEO</Link> + technical optimizations PLUS hyperlocal GBP and citation strategies for maximum visibility.</>
        },
        {
            question: "How long does it take to see results from local SEO?",
            answer: "30 Days:\n• GBP insights show increased impressions (search appearances)\n• Initial citation submissions indexed by Google\n• Review count starts increasing\n\n60 Days:\n• Map Pack rankings improve\n• Phone calls increase\n• Direction requests increase\n• Reviews reach 10-15 new (with our generation system)\n\n90 Days:\n• Top 5 Map Pack rankings for primary keywords (most of our clients)\n• More phone calls from Google Business Profile\n• Significant increase in website traffic from local searches\n• Measurable foot traffic increase (if tracking enabled)\n\n6 Months:\n• Dominant #1-#3 Map Pack positions (stable)\n• Strong review growth\n• Established authority in local market\n• Consistent 10-20 high-quality leads per month\n\nFactors that speed up results: Low current competition, consistent review generation, existing website with good domain authority, active Google Business Profile with post history."
        }
    ];

    return (
        <FaqSection
            faqs={faqs.map((f) => ({ q: f.question, a: f.answer }))}
            accent="var(--accent-amber-text)"
            subtitle="Everything you need to know about our local SEO services."
        />
    );
}
