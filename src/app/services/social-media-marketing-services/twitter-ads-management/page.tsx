import React from "react";
import Hero from "@/components/services/social-media-marketing-services/twitter-ads-management/Hero";
import ServiceOverview from "@/components/services/social-media-marketing-services/twitter-ads-management/ServiceOverview";
import SolutionTypes from "@/components/services/social-media-marketing-services/twitter-ads-management/SolutionTypes";
import TechStack from "@/components/services/social-media-marketing-services/twitter-ads-management/TechStack";
import Process from "@/components/services/social-media-marketing-services/twitter-ads-management/Process";
import WhyChooseUs from "@/components/services/social-media-marketing-services/twitter-ads-management/WhyChooseUs";
import FAQ from "@/components/services/social-media-marketing-services/twitter-ads-management/FAQ";
import CTA from "@/components/services/social-media-marketing-services/twitter-ads-management/CTA";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'X Marketing Services | Expert Twitter Marketing Agency for Higher CTR',
    description: 'Scaling your X business? Our Twitter marketing company delivers strong ROI via expert Twitter ads management & real-time trend hijacking. Get a free quote!',
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/twitter-ads-management",
    },
    openGraph: {
        title: 'X Marketing Services | Expert Twitter Marketing Agency for Higher CTR',
        description: 'Scaling your X business? Our Twitter marketing company delivers strong ROI via expert Twitter ads management & real-time trend hijacking. Get a free quote!',
        url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/twitter-ads-management",
        type: "website",
        images: [
            {
                url: "/og-images/twitter-ads-management.webp",
                width: 1200,
                height: 630,
                alt: "X Marketing Services | Expert Twitter Marketing Agency for Higher CTR by Cinute Infomedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: 'X Marketing Services | Expert Twitter Marketing Agency for Higher CTR',
        description: 'Scaling your X business? Our Twitter marketing company delivers strong ROI via expert Twitter ads management & real-time trend hijacking. Get a free quote!',
        images: ["/og-images/twitter-ads-management.webp"],
    },

};

export default function XMarketingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Cinute Infomedia",
                "url": "https://www.cinuteinfomedia.com",
                "logo": "https://www.cinuteinfomedia.com/logo.png",
                "sameAs": [
                    "https://twitter.com/cinuteinfomedia",
                    "https://www.linkedin.com/company/cinuteinfomedia"
                ]
            },
            {
                "@type": "Service",
                "serviceType": "X (Twitter) Marketing Services",
                "provider": {
                    "@type": "Organization",
                    "name": "Cinute Infomedia"
                },
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
                            "text": "Professional X marketing services typically range from $1,500 to $15,000+ per month depending on the level of ad spend and complexity of the campaigns."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the benefits of hiring a Twitter advertising agency?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Benefits include expert ad management, access to advanced analytics, brand safety, and 24/7 trend hijacking expertise."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I choose the best X marketing service for my business?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Look for an agency with proven experience, deep industry knowledge, and a focus on ROI-driven metrics like CTR and conversion rates."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is included in a full-service X ads management package?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A full package includes audit, strategy, creative production, bid management, and detailed ROI reporting."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does it take to see ROI from X marketing?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Significant ROI is usually seen within 3 to 6 months of active, data-driven management."
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero />
            <ServiceOverview />
            <SolutionTypes />
            <TechStack />
            <Process />
            <WhyChooseUs />
            <FAQ />
            <CTA />
        </main>
    );
}
