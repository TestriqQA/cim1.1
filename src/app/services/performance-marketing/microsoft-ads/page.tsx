import Hero from "@/components/services/performance-marketing/microsoft-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/microsoft-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/microsoft-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/microsoft-ads/TechStack";
import Process from "@/components/services/performance-marketing/microsoft-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/microsoft-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/microsoft-ads/CTA";
import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: "Microsoft Ads Agency | Bing Advertising Services",
    description: "Reach high-value audiences on Bing, Yahoo, and AOL with our expert Microsoft Ads management services. Maximize ROI with targeted campaigns.",
    url: "/services/performance-marketing/microsoft-ads",
    image: "/og-images/microsoft_ads.webp",
});

export default function MicrosoftAdsPage() {
    return (
        <main className="min-h-screen bg-background" style={{ "--page-selection-bg": "#0078D4" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Microsoft Ads Management",
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
                            "name": "Microsoft Ads Management Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "B2B Targeting",
                                        "description": "Reaching decision-makers through LinkedIn profile targeting layered onto search campaigns by company, job function, and industry."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Audience Intelligence",
                                        "description": "Connecting with users across the Microsoft Audience Network on Outlook, Edge, and MSN using intent-based signals."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Desktop Dominance",
                                        "description": "Capturing high-converting desktop traffic on the Microsoft Search Network for audiences with strong purchasing intent."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Cross-Channel Optimization",
                                        "description": "Unified reporting and holistic campaign management across search and native to drive efficiency."
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
                            { "@type": "ListItem", "position": 4, "name": "Microsoft Ads", "item": "https://www.cinuteinfomedia.com/services/performance-marketing/microsoft-ads" }
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
