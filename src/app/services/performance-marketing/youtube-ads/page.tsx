import Hero from "@/components/services/performance-marketing/youtube-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/youtube-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/youtube-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/youtube-ads/TechStack";
import Process from "@/components/services/performance-marketing/youtube-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/youtube-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/youtube-ads/CTA";
import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: "YouTube Ads Agency | YouTube Advertising Services",
    description: "Engage your audience with compelling video ads on YouTube. Our YouTube Ads agency manages TrueView, Bumper, and Discovery ads for impact.",
    url: "/services/performance-marketing/youtube-ads",
    image: "/og-images/youtube_ads.webp",
});

export default function YouTubeAdsPage() {
    return (
        <main style={{ "--page-selection-bg": "#FF0000" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "YouTube Ads Management",
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
                            "name": "YouTube Ads Management Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Brand Awareness",
                                        "description": "Maximizing reach and ad recall with high-impact video formats."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Lead Generation",
                                        "description": "Capturing leads directly from video ads using custom lead forms."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "E-commerce Sales",
                                        "description": "Driving purchases with shoppable video ads and product feeds."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "App Installs",
                                        "description": "Scaling app downloads across YouTube, Shorts, and Google Play."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Website Traffic",
                                        "description": "Driving qualified traffic to landing pages through video campaigns."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Product Launch",
                                        "description": "Creating buzz for new products with high-visibility Masthead ads."
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
                            { "@type": "ListItem", "position": 4, "name": "YouTube Ads", "item": "https://www.cinuteinfomedia.com/services/performance-marketing/youtube-ads" }
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
