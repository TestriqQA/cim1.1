import dynamic from 'next/dynamic';
import Hero from '@/components/services/performance-marketing/Hero';
import ServiceOverview from '@/components/services/performance-marketing/ServiceOverview';

// Lazy load below-the-fold components for better performance
const AdPlatforms = dynamic(() => import('@/components/services/performance-marketing/AdPlatforms'), {
    loading: () => <div className="py-20" />,
});
const WhyChooseUs = dynamic(() => import('@/components/services/performance-marketing/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const CampaignTypes = dynamic(() => import('@/components/services/performance-marketing/CampaignTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/performance-marketing/Process'), {
    loading: () => <div className="py-20" />,
});
const CaseStudies = dynamic(() => import('@/components/services/performance-marketing/CaseStudies'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/performance-marketing/CTA'), {
    loading: () => <div className="py-20" />,
});
const FAQ = dynamic(() => import('@/components/services/performance-marketing/FAQ'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateWebPageSchema,
    generateBreadcrumbSchema,
    generateServiceSchema,
    generateItemListSchema,
    generateFAQSchema,
    generateHowToSchema,
    generateNavigationSchema,
} from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Performance Marketing Agency | Global ROI-Driven Advertising Services',
    description: 'Scale your revenue globally with precision performance marketing. strong average ROAS, 138K+ leads generated, reduced CPA, significant revenue driven. Google Partner, Meta Business Partner, LinkedIn Marketing Partner. large-scale annual ad spend managed for 50+ global brands.',
    url: '/services/performance-marketing',
    keywords: [
        'performance marketing agency',
        'PPC advertising',
        'paid social media',
        'Google Ads management',
        'programmatic advertising',
        'B2B lead generation',
        'digital marketing ROI',
        'ROAS optimization',
        'retargeting services',
        'paid media management',
    ],
    image: '/og-images/performance-marketing.webp',
});

export default function PerformanceMarketingPage() {
    const performanceSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Performance Marketing Agency | Global ROI-Driven Advertising Services",
            description: "Scale your revenue globally with precision performance marketing. strong average ROAS, 138K+ leads generated, reduced CPA, significant revenue driven. Google Partner, Meta Business Partner, LinkedIn Marketing Partner. large-scale annual ad spend managed for 50+ global brands.",
            urlPath: "/services/performance-marketing",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/performance-marketing/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/performance-marketing/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/performance-marketing/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Performance Marketing", url: "/services/performance-marketing" },
        ], "https://www.cinuteinfomedia.com/services/performance-marketing/#breadcrumb"),

        generateServiceSchema({
            name: "Performance Marketing Services",
            description: "Stop guessing where your marketing budget goes — start scaling with precision. We lower your Customer Acquisition Cost (CAC) while maximizing Return on Ad Spend (ROAS). strong average ROAS, 138K+ leads generated, reduced CPA, significant revenue driven, large-scale annual ad spend managed for 50+ global brands. Google Partner, Meta Business Partner, LinkedIn Marketing Partner certified.",
            urlPath: "/services/performance-marketing",
            serviceType: "Performance Marketing & ROI-Driven Advertising",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Flexible pricing: performance-based fees, percentage of ad spend, or fixed monthly retainers. Free comprehensive performance audit included with account analysis and growth roadmap.",
            },
        }),

        generateItemListSchema({
            id: "/services/performance-marketing/#coreServicesList",
            name: "Core Performance Marketing Services",
            description: "Full-spectrum performance marketing from Google Ads PPC and paid social to precision retargeting and programmatic advertising.",
            items: [
                { name: "ROI-Focused Google Ads & PPC", description: "Mastery of Search, Display, Shopping, YouTube, and Discovery campaigns for maximum ROAS." },
                { name: "Paid Social Media Marketing", description: "Advanced campaign structuring for Facebook, Instagram, Messenger, and WhatsApp advertising." },
                { name: "Precision Retargeting & Remarketing", description: "Cross-platform retargeting, dynamic product ads, and cart abandonment recovery flows." },
                { name: "Programmatic Advertising & Display", description: "Real-time bidding (RTB), contextual targeting, native advertising, and premium inventory access." },
            ],
        }),

        generateItemListSchema({
            id: "/services/performance-marketing/#platformsList",
            name: "Advertising Platforms Managed",
            description: "Expert management across 8 major advertising platforms: Google, Meta, LinkedIn, Amazon, TikTok, YouTube, Microsoft, and X (Twitter).",
            items: [
                { name: "Google Ads", url: "/services/performance-marketing/google-ads", description: "5B+ daily searches, 4.2% average CTR. Search, Shopping, Display, YouTube, and Discovery campaigns." },
                { name: "Meta Ads (Facebook & Instagram)", url: "/services/performance-marketing/meta-ads", description: "3B+ users, 1.6% average CTR. Advanced audience targeting and creative optimization." },
                { name: "LinkedIn Ads", url: "/services/performance-marketing/linkedin-ads", description: "900M+ professionals, 0.5% average CTR. B2B lead generation and decision-maker targeting." },
                { name: "Amazon Ads", url: "/services/performance-marketing/amazon-ads", description: "300M+ customers, 0.4% average CTR. Sponsored Products, Brands, and Display campaigns." },
                { name: "TikTok Ads", url: "/services/performance-marketing/tiktok-ads", description: "1B+ users, 2.5% average CTR. Short-form video ads and creator partnerships." },
                { name: "YouTube Ads", url: "/services/performance-marketing/youtube-ads", description: "2B+ monthly users, 0.5% average CTR. Pre-roll, mid-roll, and bumper ad formats." },
                { name: "Microsoft Ads", url: "/services/performance-marketing/microsoft-ads", description: "60M+ desktop users with higher purchasing power. Bing Search and Audience Network." },
                { name: "X (Twitter) Ads", url: "/services/performance-marketing/x-ads", description: "#1 platform for discovery with high viral reach and real-time engagement." },
            ],
        }),

        generateFAQSchema([
            { question: "What is the difference between digital marketing and performance marketing?", answer: "Digital marketing is a broad term for all online marketing activities. Performance marketing is a subset where you pay for specific actions like clicks, leads, or sales. It's results-driven and focuses on real-time ROI optimization." },
            { question: "How much do your performance marketing services cost?", answer: "Our pricing is as flexible as our strategies. We offer performance-based models, percentage of ad spend, or fixed monthly retainers depending on your scale and goals." },
            { question: "How do you measure success in performance marketing?", answer: "We track everything - ROAS, CPA (Cost Per Acquisition), LTV (Lifetime Value), and conversion rates. Our real-time dashboards give you full transparency into every dollar spent." },
            { question: "Do you handle creative assets for ads?", answer: "Yes! Our team includes creative strategists and designers who produce high-performing ad copy, video ads, and static designs, including continuous A/B testing." },
            { question: "Can you help with B2B lead generation?", answer: "Absolutely. We specialize in B2B performance marketing, leveraging LinkedIn Ads and high-intent Google Search to fill your pipeline with qualified decision-makers." },
        ]),

        generateHowToSchema({
            name: "Our 6-Step Performance Marketing Methodology",
            description: "A proven 6-step methodology delivering strong average ROAS, 138K+ leads, and reduced CPA for 50+ global brands across large-scale annual ad spend.",
            steps: [
                { name: "Discovery & Deep-Dive Audit", text: "Understanding your business DNA, auditing existing accounts, and identifying low-hanging fruits for immediate wins.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/#step-discovery" },
                { name: "Strategy & Media Planning", text: "Custom roadmap with cross-channel budget allocation, keyword mapping, and audience segmentation.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/#step-strategy" },
                { name: "Creative & Asset Production", text: "Producing high-converting ad copy, landing pages, video ads, and static creative assets.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/#step-creative" },
                { name: "Campaign Launch & Setup", text: "Precise tracking setup (GTM, GA4, Pixels), detailed campaign restructuring, and 'Clean-Room' configuration.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/#step-launch" },
                { name: "Continuous Optimization (The Grind)", text: "Ongoing A/B testing, bid management, negative keyword filtering, and audience refinement for peak performance.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/#step-optimization" },
                { name: "Scale, Report & Iterate", text: "Quarterly Business Reviews (QBR), identifying scaling opportunities, and vertical expansion strategies.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/#step-scale" },
            ],
        }),

        generateNavigationSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Blog", url: "/blog" },
            { name: "About", url: "/about" },
            { name: "Careers", url: "/careers" },
            { name: "Contact", url: "/contact" },
        ])
    );

    return (
        <main data-page-theme="orange" className="bg-white dark:bg-black" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(performanceSchema) }}
            />
            <Hero />
            <ServiceOverview />
            <AdPlatforms />
            <WhyChooseUs />
            <CampaignTypes />
            <Process />
            <CaseStudies />
            <FAQ />
            <CTA />
        </main>
    );
}
