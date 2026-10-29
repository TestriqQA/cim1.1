import dynamic from 'next/dynamic';
import Hero from '@/components/services/social-media-marketing-services/Hero';
import ServiceOverview from '@/components/services/social-media-marketing-services/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/social-media-marketing-services/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const TypesOfServices = dynamic(() => import('@/components/services/social-media-marketing-services/TypesOfServices'), {
    loading: () => <div className="py-20" />,
});
const Platforms = dynamic(() => import('@/components/services/social-media-marketing-services/Platforms'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/social-media-marketing-services/Process'), {
    loading: () => <div className="py-20" />,
});
const Analytics = dynamic(() => import('@/components/services/social-media-marketing-services/Analytics'), {
    loading: () => <div className="py-20" />,
});
const SocialMediaFAQ = dynamic(() => import('@/components/services/social-media-marketing-services/SocialMediaFAQ'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/social-media-marketing-services/CTA'), {
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
    title: 'Social Media Marketing Services | Top-Rated SMM Agency for Measurable ROI',
    description: "Explode your brand's growth with our expert Social Media Marketing Services. Global SMM Agency specializing in Strategy, Paid Ads & Content. 300+ campaigns, 5M+ reach, strong ROI growth. Get a Free Audit!",
    url: '/services/social-media-marketing-services',
    keywords: [
        'Social Media Marketing Services',
        'Social Media Management Company',
        'Instagram Marketing Agency',
        'Facebook Ad Management',
        'LinkedIn B2B Marketing',
        'Paid Social Media Advertising',
        'Social Media Content Strategy',
    ],
    image: '/og-images/social_marketing.webp',
});

export default function SocialMediaMarketingPage() {
    const smmSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Social Media Marketing Services | Top-Rated SMM Agency for Measurable ROI",
            description: "Explode your brand's growth with our expert Social Media Marketing Services. Global SMM Agency specializing in Strategy, Paid Ads & Content. 300+ campaigns, 5M+ reach, strong ROI growth. Get a Free Audit!",
            urlPath: "/services/social-media-marketing-services",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Social Media Marketing Services", url: "/services/social-media-marketing-services" },
        ], "https://www.cinuteinfomedia.com/services/social-media-marketing-services/#breadcrumb"),

        generateServiceSchema({
            name: "Social Media Marketing Services",
            description: "Social Media Marketing Services that convert. In today's hyper-competitive digital landscape, we don't just post content — we engineer comprehensive social media marketing ecosystems designed to dominate your niche. 300+ campaigns launched, 5M+ audience reach, strong average ROI growth. Trusted by 500+ growing businesses.",
            urlPath: "/services/social-media-marketing-services",
            serviceType: "Social Media Marketing",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Free social media audit available. Flexible packages for startups and enterprise. Includes strategy, content creation, paid ads, community management, and monthly reporting.",
            },
        }),

        generateItemListSchema({
            id: "/services/social-media-marketing-services/#coreServicesList",
            name: "Core Social Media Marketing Services",
            description: "Full-spectrum social media marketing from organic growth and paid advertising to influencer marketing, content creation, and analytics.",
            items: [
                { name: "Organic Social Media Marketing", description: "Building genuine, lasting connections through high-quality, non-promoted content focused on brand loyalty and organic growth." },
                { name: "Paid Social Media Advertising", description: "Targeted, high-impact campaigns via Meta Ads and LinkedIn Sponsored Content to drive immediate leads and sales while lowering CPA." },
                { name: "Influencer Marketing", description: "Leveraging trusted voices for authentic brand promotion with full lifecycle management — vetting, negotiation, and compliance." },
                { name: "Social Media Content Creation", description: "Producing high-fidelity assets including graphics, videos, and copy with strategic scheduling via custom content calendars." },
                { name: "Full Social Media Management", description: "Profile optimization, daily posting, and brand monitoring — acting as an extension of your team." },
                { name: "Community Management & Engagement", description: "Proactive interaction, social listening, and turning followers into brand advocates through meaningful engagement." },
                { name: "Analytics & Reporting", description: "Continuous KPI monitoring with transparent reports distilled into clear, visual dashboards for data-driven decisions." },
            ],
        }),

        generateItemListSchema({
            id: "/services/social-media-marketing-services/#platformsList",
            name: "Social Media Platform Expertise",
            description: "Platform-specific social media marketing services for Facebook, Instagram, LinkedIn, YouTube, Twitter/X, and Pinterest.",
            items: [
                { name: "Facebook Marketing", url: "/services/social-media-marketing-services/facebook-marketing-services", description: "Lead generation and community building through targeted Meta Ads, Groups, and Marketplace." },
                { name: "Instagram Marketing", url: "/services/social-media-marketing-services/instagram-marketing-services", description: "Visual storytelling through Reels, Stories, Shopping, and influencer collaborations." },
                { name: "LinkedIn Marketing", url: "/services/social-media-marketing-services/linkedin-marketing-services", description: "B2B networking, thought leadership, and decision-maker outreach for professional audience engagement." },
                { name: "YouTube Video Marketing", url: "/services/social-media-marketing-services/video-marketing-agency", description: "High-value video content production and search-optimized YouTube Ads for maximum visibility." },
                { name: "Twitter (X) Ads Management", url: "/services/social-media-marketing-services/twitter-ads-management", description: "Real-time engagement, trend-jacking, and targeted advertising on Twitter/X." },
                { name: "Pinterest Marketing", url: "/services/social-media-marketing-services/pinterest-marketing", description: "Visual discovery and early-stage buyer journey capture through optimized Pins and boards." },
            ],
        }),

        generateFAQSchema([
            { question: "What are the benefits of hiring a social media marketing agency?", answer: "Hiring a professional Social Media Marketing Agency gives you access to expert strategists, advanced tools, and industry best practices without the overhead of an in-house team. We ensure consistent branding, targeted reach, and higher ROI by leveraging data-driven strategies and multi-channel social strategy." },
            { question: "How much do social media management services cost?", answer: "Our social media management services are customized to your specific needs and goals. Whether you need affordable social media management for startups or a comprehensive enterprise solution, we offer flexible packages. Contact us for a custom quote tailored to your budget." },
            { question: "Which social media platforms are best for my business?", answer: "The best platforms depend on your target audience and industry. For B2B, LinkedIn marketing services are essential. For visual brands and ecommerce, Instagram and Pinterest are key. We conduct a thorough social media audit and analysis to recommend the most effective mix for you." },
            { question: "How do I measure the ROI of social media marketing?", answer: "We track specific Key Performance Indicators (KPIs) such as conversion rates, lead generation costs, and direct sales. Our social media reporting and analytics services provide transparent insights, showing you exactly how our efforts translate into revenue." },
            { question: "What is included in social media management services?", answer: "Our full-service social media marketing company packages typically include strategy development, content creation, community management, paid advertising, and monthly reporting. We also offer specialized add-ons like influencer marketing management services." },
        ]),

        generateHowToSchema({
            name: "Our 6-Step Social Media Marketing Process",
            description: "A proven 6-step data-driven methodology for building social media marketing ecosystems that have delivered 300+ campaigns with strong average ROI growth.",
            steps: [
                { name: "Strategy & Research", text: "Deep dive into brand, audience persona research, competitor analysis, and trend mapping.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/#step-strategy" },
                { name: "Content Planning", text: "Developing a comprehensive calendar mapping themes, formats, and messaging for each platform.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/#step-planning" },
                { name: "Creative Design", text: "Producing on-brand visual assets and compelling copy tailored for each social media platform.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/#step-design" },
                { name: "Publishing & Promotion", text: "Executing the content calendar and launching targeted paid ad campaigns across platforms.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/#step-publishing" },
                { name: "Engagement & Monitoring", text: "Managing comments, messages, and tracking real-time performance and brand reputation.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/#step-engagement" },
                { name: "Optimization & Reporting", text: "Analyzing data and providing monthly reports with clear insights and strategic recommendations for continuous improvement.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/#step-optimization" },
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
        <main data-page-theme="teal" className="bg-white dark:bg-black" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(smmSchema) }}
            />
            <Hero />
            <ServiceOverview />
            <WhyChooseUs />
            <TypesOfServices />
            <Platforms />
            <Process />
            <Analytics />
            <SocialMediaFAQ />
            <CTA />
        </main>
    );
}
