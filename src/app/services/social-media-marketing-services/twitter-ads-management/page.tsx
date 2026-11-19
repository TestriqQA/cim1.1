import dynamic from "next/dynamic";
import ServiceGuide from "@/components/services/ServiceGuide";
import Link from "next/link";
import { xAdsCost, xAdsMeasure } from "@/data/serviceGuides";
import React from "react";
import Hero from "@/components/services/social-media-marketing-services/twitter-ads-management/Hero";
import { Metadata } from 'next';
import { generateBreadcrumbSchema } from "@/lib/schema";

// Below-the-fold sections load as separate chunks so they hydrate in their
// own tasks instead of one long main-thread block (SEO 4-week plan, P3).
const ServiceOverview = dynamic(() => import("@/components/services/social-media-marketing-services/twitter-ads-management/ServiceOverview"), {
    loading: () => <div className="py-10 md:py-16" />,
});

const SolutionTypes = dynamic(() => import("@/components/services/social-media-marketing-services/twitter-ads-management/SolutionTypes"), {
    loading: () => <div className="py-10 md:py-16" />,
});

const TechStack = dynamic(() => import("@/components/services/social-media-marketing-services/twitter-ads-management/TechStack"), {
    loading: () => <div className="py-10 md:py-16" />,
});

const Process = dynamic(() => import("@/components/services/social-media-marketing-services/twitter-ads-management/Process"), {
    loading: () => <div className="py-10 md:py-16" />,
});

const WhyChooseUs = dynamic(() => import("@/components/services/social-media-marketing-services/twitter-ads-management/WhyChooseUs"), {
    loading: () => <div className="py-10 md:py-16" />,
});

const FAQ = dynamic(() => import("@/components/services/social-media-marketing-services/twitter-ads-management/FAQ"), {
    loading: () => <div className="py-10 md:py-16" />,
});

const CTA = dynamic(() => import("@/components/services/social-media-marketing-services/twitter-ads-management/CTA"), {
    loading: () => <div className="py-10 md:py-16" />,
});

export const metadata: Metadata = {
    title: 'X (Twitter) Ads Agency | Cinute InfoMedia',
    description: 'X (Twitter) ads agency: campaign strategy, creative, targeting and reporting. Talk to Cinute InfoMedia.',
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/twitter-ads-management",
    },
    openGraph: {
        title: 'X (Twitter) Ads Agency | Cinute InfoMedia',
        description: 'X (Twitter) ads agency: campaign strategy, creative, targeting and reporting. Talk to Cinute InfoMedia.',
        url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/twitter-ads-management",
        type: "website",
        images: [
            {
                url: "/og-images/twitter-ads-management.webp",
                width: 1200,
                height: 630,
                alt: "X (Twitter) Ads Management Services by Cinute InfoMedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: 'X (Twitter) Ads Agency | Cinute InfoMedia',
        description: 'X (Twitter) ads agency: campaign strategy, creative, targeting and reporting. Talk to Cinute InfoMedia.',
        images: ["/og-images/twitter-ads-management.webp"],
    },

};

// T5 follow-up: this page emitted no BreadcrumbList, unlike the rest of the
// service tree. Added as a standalone block so the schema already on the page
// is left exactly as it was.
const breadcrumbLd = {
    "@context": "https://schema.org",
    ...generateBreadcrumbSchema(
        [
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Social Media", url: "/services/social-media-marketing-services" },
            { name: "X (Twitter) Marketing", url: "/services/social-media-marketing-services/twitter-ads-management" },
        ],
        "https://www.cinuteinfomedia.com/services/social-media-marketing-services/twitter-ads-management/#breadcrumb"
    ),
};

export default function XMarketingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "serviceType": "X (Twitter) Marketing Services",
                "provider": { "@id": "https://www.cinuteinfomedia.com/#organization" },
                "description": "Full-service X (Twitter) marketing including ads management, real-time engagement, and trend hijacking for global brands.",
                "areaServed": "Global",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Twitter Marketing Packages",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Twitter Ads Management"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "X Profile Optimization"
                            }
                        }
                    ]
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How much do professional X marketing services cost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Twitter marketing cost for small business typically starts at $1,500 - $3,000 per month for basic management. For enterprise-level Twitter ads management and full-service X marketing services, costs can range from $5,000 to $15,000+ depending on the complexity, ad spend, and global reach required. At our Twitter marketing agency, we provide custom quotes based on your specific KPIs and growth goals."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the benefits of hiring a Twitter advertising agency?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Hiring a specialized Twitter advertising agency ensures your brand stays relevant in the real-time \"town square.\" Benefits include expert Twitter ads management, access to advanced X Campaign Manager analytics, protected brand safety, and a 24/7 team for trend hijacking. Professional agencies help you avoid common pitfalls and maximize your Twitter conversion tracking setup for actual ROI."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I choose the best X marketing service for my business?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Choose an agency with a proven track record (EEAT), deep industry knowledge, and a focus on data. The best X marketing agency for tech startups or financial services should demonstrate technical expertise in X analytics and performance metrics. Always look for case studies showing a measurable CTR lift and clear communication on X algorithm visibility optimization."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is included in a full-service X ads management package?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A comprehensive package includes X channel audit and strategy, creative design for promoted tweets, X video ads marketing strategy, daily bid management, A/B testing, and monthly X ads reporting and ROI analytics. It also covers X profile optimization and management of Twitter audience targeting segments to ensure maximum efficiency."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does it take to see ROI from X marketing?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "While real-time engagement provides instant visibility, significant ROI from Twitter marketing services usually takes 3 to 6 months. This allows for audience building, X algorithm seasoning, and refinement of Twitter conversion tracking. However, X trend hijacking can deliver viral wins much faster when executed by a experienced Twitter marketing company."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <main style={{ "--page-selection-bg": "#1D9BF0" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero />
            <ServiceOverview />
            <SolutionTypes />
            <TechStack />
            <Process />
            <WhyChooseUs />
            <ServiceGuide
                id="x-ads-cost"
                title="What Affects the Cost of X (Twitter) Ads"
                intro="X ads are sold in an auction, so there is no fixed price per click or view. These are the factors that move the cost most."
                items={xAdsCost}
                accent="var(--foreground)"
            />
            <ServiceGuide
                title="How We Measure X (Twitter) Ads Results"
                items={xAdsMeasure}
                accent="var(--foreground)"
                columns={3}
                footer={<>Planning a wider social campaign? See our <Link href="/services/social-media-marketing-services" className="underline underline-offset-2">social media marketing services</Link>.</>}
            />
            <FAQ />
            <CTA />
        </main>
    );
}
