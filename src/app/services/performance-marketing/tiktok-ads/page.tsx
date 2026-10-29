import Hero from "@/components/services/performance-marketing/tiktok-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/tiktok-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/tiktok-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/tiktok-ads/TechStack";
import Process from "@/components/services/performance-marketing/tiktok-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/tiktok-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/tiktok-ads/CTA";
import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: "TikTok Ads Agency | TikTok Advertising Services",
    description: "Go viral and reach Gen Z audiences with creative TikTok advertising campaigns. Our agency helps you leverage the power of short-form video.",
    url: "/services/performance-marketing/tiktok-ads",
    image: "/og-images/tiktok_ads.webp",
});

export default function TikTokAdsPage() {
    return (
        <main style={{ "--page-selection-bg": "#ff0050" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "TikTok Ads Management",
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
                            "name": "TikTok Ads Management Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Brand Awareness",
                                        "description": "Maximizing reach with TopView and In-Feed ad formats, optimizing for video views and sound-on engagement."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Community Building",
                                        "description": "Growing followers and driving engagement with Spark Ads through comment optimization and profile visits."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "E-commerce Sales",
                                        "description": "Driving purchases with TikTok Shop integration, catalog ads, dynamic product ads, and live shopping."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Traffic & Clicks",
                                        "description": "Sending users to websites or landing pages with click optimization, UTM tracking, and the Conversion API."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "App Installs",
                                        "description": "Driving quality app downloads and in-app events using value optimization and playable ads."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Retargeting",
                                        "description": "Re-engaging viewers and website visitors via custom audiences, pixel retargeting, and lookalikes."
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
                            { "@type": "ListItem", "position": 4, "name": "TikTok Ads", "item": "https://www.cinuteinfomedia.com/services/performance-marketing/tiktok-ads" }
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
            <CTA />
        </main>
    );
}
