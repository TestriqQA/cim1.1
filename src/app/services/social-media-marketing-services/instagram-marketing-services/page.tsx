import type { Metadata } from "next";
import Hero from "@/components/services/social-media-marketing-services/instagram-marketing-services/Hero";
import ServiceOverview from "@/components/services/social-media-marketing-services/instagram-marketing-services/ServiceOverview";
import SolutionTypes from "@/components/services/social-media-marketing-services/instagram-marketing-services/SolutionTypes";
import TechStack from "@/components/services/social-media-marketing-services/instagram-marketing-services/TechStack";
import Process from "@/components/services/social-media-marketing-services/instagram-marketing-services/Process";
import WhyChooseUs from "@/components/services/social-media-marketing-services/instagram-marketing-services/WhyChooseUs";
import FAQ from "@/components/services/social-media-marketing-services/instagram-marketing-services/FAQ";
import CTA from "@/components/services/social-media-marketing-services/instagram-marketing-services/CTA";

export const metadata: Metadata = {
    title: "Instagram Marketing Agency | Instagram Growth & Ads 2026",
    description:
        "Supercharge your brand with the top Instagram Marketing Company. Expert Reels, Influencer Marketing, and Instagram Advertising Services. Get a higher CTR!",
    keywords: [
        "Instagram Marketing Services",
        "Instagram Marketing Agency",
        "Instagram Advertising Services",
        "Instagram Marketing Company",
        "Instagram Management Services",
    ],
    openGraph: {
        title: "Instagram Marketing Agency | Instagram Growth & Ads 2026",
        description: "Supercharge your brand with the top Instagram Marketing Company. Expert Reels, Influencer Marketing, and Instagram Advertising Services. Get a higher CTR!",
        url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/instagram-marketing-services",
        type: "website",
        images: [
            {
                url: "/og-images/instagram-marketing-services.webp",
                width: 1200,
                height: 630,
                alt: "Instagram Marketing Agency | Instagram Growth & Ads 2026 by Cinute Infomedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Instagram Marketing Agency | Instagram Growth & Ads 2026",
        description: "Supercharge your brand with the top Instagram Marketing Company. Expert Reels, Influencer Marketing, and Instagram Advertising Services. Get a higher CTR!",
        images: ["/og-images/instagram-marketing-services.webp"],
    },
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/instagram-marketing-services",
    },
};

export default function InstagramMarketingPage() {
    return (
        <main style={{ "--page-selection-bg": "#E1306C" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Instagram Marketing Services",
                        "provider": {
                            "@type": "Organization",
                            "name": "Cinute Infomedia",
                            "url": "https://www.cinuteinfomedia.com"
                        },
                        "areaServed": "Global",
                        "description": "Expert Instagram Marketing Services including Reels production, ad management, and organic growth strategies for global brands.",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://www.cinuteinfomedia.com/services/social-media-marketing-services/instagram-marketing-services"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Instagram Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Instagram Reels Production"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Instagram Advertising Management"
                                    }
                                }
                            ]
                        }
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What are Instagram marketing services?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Instagram marketing services encompass a wide range of activities designed to grow a brand's presence on the platform. This includes Instagram management, content creation, Instagram advertising, influencer outreach, and community engagement to drive brand awareness and sales."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How much do Instagram marketing services cost?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The cost varies based on the scope of work, such as the number of Reels, ad spend management, or full-service management. Contact us for a custom quote tailored to your business needs."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What should an Instagram marketing strategy include?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A robust strategy includes visual brand guidelines, a content calendar covering Reels, Stories, and Posts, a targeted hashtag strategy, Instagram ad campaign management, and a plan for community engagement and influencer partnerships."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Why should businesses use Instagram marketing services?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "With the platform's shift toward social commerce and Reels, professional management ensures you stay ahead of algorithm changes, maintain high-quality aesthetics, and achieve stronger click-through performance than in-house management often yields."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How do I choose the best Instagram marketing agency?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Look for an agency with a proven track record and demonstrated experience, industry-specific expertise, transparency in reporting, and a focus on return on investment rather than just follower counts."
                                }
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
