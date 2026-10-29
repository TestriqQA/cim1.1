import React from "react";
import Hero from "@/components/services/social-media-marketing-services/video-marketing-agency/Hero";
import ServiceOverview from "@/components/services/social-media-marketing-services/video-marketing-agency/ServiceOverview";
import SolutionTypes from "@/components/services/social-media-marketing-services/video-marketing-agency/SolutionTypes";
import TechStack from "@/components/services/social-media-marketing-services/video-marketing-agency/TechStack";
import Process from "@/components/services/social-media-marketing-services/video-marketing-agency/Process";
import WhyChooseUs from "@/components/services/social-media-marketing-services/video-marketing-agency/WhyChooseUs";
import FAQ from "@/components/services/social-media-marketing-services/video-marketing-agency/FAQ";
import CTA from "@/components/services/social-media-marketing-services/video-marketing-agency/CTA";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'YouTube Marketing Services | Top Agency for ROI & Growth',
    description: 'Scale with the expert YouTube marketing agency. From YouTube ads management to video SEO services, we drive measurable CTR lifts & high-intent leads. Book free audit!',
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/video-marketing-agency",
    },
    openGraph: {
        title: 'YouTube Marketing Services | Top Agency for ROI & Growth',
        description: 'Scale with the expert YouTube marketing agency. From YouTube ads management to video SEO services, we drive measurable CTR lifts & high-intent leads. Book free audit!',
        url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/video-marketing-agency",
        type: "website",
        images: [
            {
                url: "/og-images/video-marketing-agency.webp",
                width: 1200,
                height: 630,
                alt: "YouTube Marketing Services | Top Agency for ROI & Growth by Cinute Infomedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: 'YouTube Marketing Services | Top Agency for ROI & Growth',
        description: 'Scale with the expert YouTube marketing agency. From YouTube ads management to video SEO services, we drive measurable CTR lifts & high-intent leads. Book free audit!',
        images: ["/og-images/video-marketing-agency.webp"],
    },

};

export default function YouTubeMarketingPage() {
    return (
        <main className="min-h-screen" style={{ "--page-selection-bg": "#FF0000" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Organization",
                                "@id": "https://www.cinuteinfomedia.com/#organization",
                                "name": "Cinute Infomedia",
                                "url": "https://www.cinuteinfomedia.com",
                                "logo": "https://www.cinuteinfomedia.com/images/logo.png"
                            },
                            {
                                "@type": "Service",
                                "name": "YouTube Marketing Services",
                                "provider": { "@id": "https://www.cinuteinfomedia.com/#organization" },
                                "serviceType": "Digital Marketing",
                                "description": "Premium YouTube Marketing Agency offering YouTube Ads Management, Video SEO, and Channel Growth services worldwide.",
                                "areaServed": ["US", "EU", "IN", "APAC"],
                                "hasOfferCatalog": {
                                    "@type": "OfferCatalog",
                                    "name": "YouTube Marketing Services",
                                    "itemListElement": [
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "YouTube Ads Management"
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "YouTube SEO Services"
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "YouTube Channel Management"
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
                                        "name": "How much do professional YouTube marketing services cost?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "YouTube marketing cost for small businesses starts at $1,500/month, while full-service enterprise management ranges from $5,000 to $25,000+ depending on ad spend and content scale."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What are the benefits of hiring a YouTube advertising agency?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Hiring an agency ensures expertise in algorithm optimization, creative A/B testing, and ROI tracking, typically resulting in a higher ROAS compared to in-house management."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How long does it take to see ROI from YouTube marketing?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Ads can show results in 2-4 weeks, while organic YouTube SEO typically builds sustainable authority and compounding ROI over 3-6 months."
                                        }
                                    }
                                ]
                            }
                        ]
                    })
                }}
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
