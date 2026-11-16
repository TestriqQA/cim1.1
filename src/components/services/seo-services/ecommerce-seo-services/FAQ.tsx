"use client";

import React from 'react';
import Link from "next/link";
import FaqSection from "@/components/ui/FaqSection";

export default function FAQ() {
    const faqs = [
        {
            question: "What is ecommerce SEO and why is it important?",
            answer: <>Ecommerce SEO is the process of optimizing online stores to rank higher in search engines for product-related searches, driving organic traffic that converts into sales. Unlike traditional SEO, ecommerce SEO strategy focuses on product page optimization, schema markup for ecommerce products, faceted navigation SEO, and technical challenges unique to large product catalogs.<br /><br />It&apos;s critical because 44% of shoppers begin their buying journey with Google search, and organic search drives 37% of all <Link href="/services/seo-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-sky-text)" }}>ecommerce traffic</Link> with the highest conversion rates (2.4% vs. 1.8% for paid). Strategic ecommerce SEO optimization delivers sustainable, long-term revenue growth without ongoing ad spend.</>
        },
        {
            question: "How much do ecommerce SEO services cost in 2026?",
            answer: <>Ecommerce SEO cost for business 2026 varies by store size and complexity:<br /><br />• Small Online Stores (100-500 products): $1,500-$3,000/month<br />• Mid-Size Ecommerce (500-5,000 products): $3,000-$7,000/month<br />• Enterprise Brands (5,000+ products): $7,000-$15,000/month<br />• Custom/Headless: $10,000-$25,000/month<br /><br />Pricing includes <Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-sky-text)" }}>technical SEO for ecommerce websites</Link>, on-page optimization, content creation, <Link href="/services/seo-services/link-building" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-sky-text)" }}>link building</Link>, and monthly reporting. Most clients see a strong ROI within 6-9 months. One-time ecommerce SEO audit and strategy services range from $2,500-$8,000.</>
        },
        {
            question: "How do I optimize my ecommerce product pages for SEO?",
            answer: <>Optimizing ecommerce product page SEO requires:<br /><br />• Unique Product Descriptions (300+ words with natural keyword integration, benefits-focused)<br />• Optimized Title Tags (Primary keyword + brand + modifier, under 60 chars)<br />• Compelling Meta Descriptions (150-155 chars with CTR hooks and pricing/benefits)<br />• Schema Markup (Product, Offer, Review, AggregateRating structured data)<br />• High-Quality Images (Alt text with descriptive keywords, compressed for speed)<br />• User-Generated Content (Customer reviews, Q&A sections)<br />• Internal Linking (Link to related products, categories, buying guides)<br />• Technical Optimization (Fast load speed, mobile-responsive, clean URL structure)<br /><br />Focus on user intent for ecommerce search - answer questions buyers have during purchase decisions.</>
        },
        {
            question: "What is the best ecommerce platform for SEO in 2026?",
            answer: <>The best platform depends on your needs:<br /><br />• Shopify: Best for small businesses/DTC brands - easy optimization, strong app ecosystem for ecommerce SEO services for Shopify stores<br />• WooCommerce: Best for content-heavy stores - WordPress flexibility enables advanced ecommerce content marketing and SEO strategy<br />• Magento/Adobe Commerce: Best for enterprise - handles 100,000+ SKUs with advanced ecommerce SEO services for Magento websites<br />• BigCommerce: Best for mid-market - built-in SEO features, scalable SaaS infrastructure<br /><br />All platforms can rank well with proper ecommerce website optimization. Technical expertise matters more than platform choice.</>
        },
        {
            question: "How long does it take to see results from ecommerce SEO?",
            answer: <>Ecommerce SEO timeline:<br /><br />• 30-60 days: Technical fixes implemented, indexation improves, low-competition keywords begin ranking<br />• 60-90 days: Category pages rank for mid-competition keywords, organic traffic increases<br />• 90-120 days: Product pages gain traction, featured snippets appear, traffic continues to grow<br />• 6 months: Significant rankings for competitive keywords, significant traffic increase, measurable revenue growth<br />• 12 months: Market dominance, sustained traffic increase, sustainable revenue from organic search<br /><br />Results vary based on competition, starting authority, and implementation speed. Ecommerce SEO for international markets may take longer due to geo-targeting complexity.</>
        },
        {
            question: "What are ecommerce SEO ranking factors for 2026?",
            answer: <>Top ecommerce SEO ranking factors post-December 2025 core update:<br /><br />• Core Web Vitals (LCP &lt;2.5s, FID &lt;100ms, CLS &lt;0.1)<br />• Helpful Product Content (Unique descriptions answering buyer questions)<br />• E-E-A-T Signals (Author expertise, brand trust, verified reviews)<br />• <Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-sky-text)" }}>Schema Markup</Link> (Rich snippets with pricing, availability, ratings)<br />• <Link href="/services/mobile-app-development" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-sky-text)" }}>Mobile-First Experience</Link> (Responsive design, touch-friendly, fast mobile load)<br />• User Engagement (Low bounce rate, time on page, add-to-cart rate)<br />• Link Authority (Quality backlinks from industry sites)<br />• Semantic Search Optimization (Natural language, topic coverage)<br />• <Link href="/blog/mastering-seo-organic-growth" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-sky-text)" }}>Internal Linking</Link> (Strategic flow of authority to money pages)<br />• Technical Health (No errors, proper canonicals, clean indexing)</>
        },
        {
            question: "Do you offer ecommerce SEO for international markets?",
            answer: "Yes, our ecommerce SEO for international markets services include:\n\n• Hreflang Implementation (Proper language/region targeting)\n• Multi-Language Content (Native translation, cultural localization)\n• Geo-Targeting Setup (ccTLDs, subfolders, or subdomains)\n• International Link Building (Region-specific authority)\n• Currency/Shipping Optimization (Local payment methods, shipping calculators)\n\nWe serve clients across US, EU, UK, India, APAC, and Latin America with localized ecommerce SEO strategy."
        }
    ];

    return (
        <FaqSection
            faqs={faqs.map((f) => ({ q: f.question, a: f.answer }))}
            accent="var(--accent-sky-text)"
            subtitle="Everything you need to know about our ecommerce SEO services."
        />
    );
}
