import Hero from "@/components/services/performance-marketing/x-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/x-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/x-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/x-ads/TechStack";
import Process from "@/components/services/performance-marketing/x-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/x-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/x-ads/CTA";
import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: "X Ads Agency | Twitter Advertising Services",
    description: "Join the conversation and amplify your message with X (Twitter) Ads. We help you reach real-time audiences and drive engagement.",
    url: "/services/performance-marketing/x-ads",
    image: "/og-images/x_ads.webp",
});

export default function XAdsPage() {
    return (
        <main className="min-h-screen bg-black" style={{ "--page-selection-bg": "#1D9BF0" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "X Ads Management",
                        "provider": {
                            "@type": "Organization",
                            "name": "Cinute Infomedia",
                            "url": "https://www.cinuteinfomedia.com",
                            "logo": "https://www.cinuteinfomedia.com/logo.png",
                            "description": "Global Web Design, Development & Digital Marketing Agency",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Office #3, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park",
                                "addressLocality": "Mira Road, Mira Bhayandar",
                                "addressRegion": "Maharashtra",
                                "postalCode": "401107",
                                "addressCountry": "IN"
                            },
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+919004988859",
                                "contactType": "Customer Service",
                                "availableLanguage": ["English", "Hindi"]
                            }
                        },
                        "areaServed": ["United States", "India", "United Kingdom", "Australia"],
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "X Ads Management Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Launch & Connect",
                                        "description": "Creating buzz for product launches and major announcements using Trend Takeovers and First View placements."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "App Installs",
                                        "description": "Driving high-intent downloads with App Cards that feature an install button and rating preview."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Cultural Relevance",
                                        "description": "Joining live events and trending topics by targeting keywords tied to TV, sports, and cultural moments."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Precision Targeting",
                                        "description": "Reaching audiences based on conversations, keywords, and follower-lookalike signals."
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
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cinuteinfomedia.com" },
                            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.cinuteinfomedia.com/services" },
                            { "@type": "ListItem", "position": 3, "name": "Performance Marketing", "item": "https://www.cinuteinfomedia.com/services/performance-marketing" },
                            { "@type": "ListItem", "position": 4, "name": "X Ads", "item": "https://www.cinuteinfomedia.com/services/performance-marketing/x-ads" }
                        ]
                    })
                }}
            />
            <Hero />
            <ServiceOverview />
            <SolutionTypes />
            <TechStack />
            <div id="process">
                <Process />
            </div>
            <WhyChooseUs />
            <CTA />
        </main>
    );
}
