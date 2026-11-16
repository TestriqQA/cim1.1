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
                alt: "YouTube Marketing Services | Top Agency for ROI & Growth by Cinute InfoMedia",
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
                                "name": "Cinute InfoMedia",
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
                                        "name": "How much do professional YouTube marketing services cost in 2026?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "YouTube marketing cost for small business starts at $1,500/month for basic management. Full-service YouTube ads management typically ranges from $5,000 to $25,000+ per month, depending on ad spend and content frequency. We offer tiered pricing to fit scalable growth."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How long does it take to see ROI from YouTube marketing?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "While YouTube ads management can drive local leads in 2-4 weeks, organic YouTube SEO services typically take 3-6 months to build significant authority. However, once the \"algorithm flywheel\" starts, the ROI is compounding and long-term."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What are the benefits of hiring a YouTube advertising agency?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "YouTube advertising agency provides expertise in creative testing, ad creative testing, and YouTube analytics and reporting that internal teams often lack. We ensure your budget isn't wasted on low-retention audiences, driving a higher ROAS on average."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What is included in a full-service YouTube ads management package?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Our packages include YouTube TrueView ads setup, YouTube bumper ads optimization, custom audience building, YouTube remarketing ads, monthly performance reports, and ongoing creative strategy consultations."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How do I choose the best YouTube marketing service for my business?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Look for an agency with verified case studies, Google Ads certifications, and a deep understanding of the YouTube algorithm. At Cinute InfoMedia, we provide a transparent audit BEFORE you sign, ensuring we are the right fit for your tech stack and goals."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can you help with YouTube shorts marketing strategy for brands?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Absolutely. YouTube shorts are critical for brand awareness in 2026. We help you create bite-sized, high-impact content that converts mobile viewers into long-term subscribers and customers."
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
