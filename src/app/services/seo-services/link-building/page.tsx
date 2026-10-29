import Hero from "@/components/services/seo-services/link-building/Hero";
import ServiceOverview from "@/components/services/seo-services/link-building/ServiceOverview";
import SolutionTypes from "@/components/services/seo-services/link-building/SolutionTypes";
import TechStack from "@/components/services/seo-services/link-building/TechStack";
import Process from "@/components/services/seo-services/link-building/Process";
import WhyChooseUs from "@/components/services/seo-services/link-building/WhyChooseUs";
import CTA from "@/components/services/seo-services/link-building/CTA";
import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: "Link Building Services | High Quality Backlink Agency",
    description: "Boost your domain authority and search rankings with our ethical white-hat link building services. High-quality backlinks that drive results.",
    url: "/services/seo-services/link-building",
    image: "/og-images/link_building.webp",
});

export default function LinkBuildingPage() {
    return (
        <main style={{ "--page-selection-bg": "#06b6d4" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Link Building Services",
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
                            "name": "Link Building Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Editorial Links",
                                        "description": "Natural backlinks earned when other sites cite your valuable, informative content."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Guest Post Links",
                                        "description": "Contextual links placed within authored articles published on relevant external sites."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Resource Page Links",
                                        "description": "Placements that get your content featured on curated industry resource pages."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Broken Link Building",
                                        "description": "Identifying dead links on other sites and offering your relevant content as a replacement."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "HARO & Press Links",
                                        "description": "Responding to journalist queries to earn high-authority editorial links from news coverage."
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
                            { "@type": "ListItem", "position": 3, "name": "SEO Services", "item": "https://www.cinuteinfomedia.com/services/seo-services" },
                            { "@type": "ListItem", "position": 4, "name": "Link Building Services", "item": "https://www.cinuteinfomedia.com/services/seo-services/link-building" }
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
