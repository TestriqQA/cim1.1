import Hero from "@/components/services/seo-services/link-building/Hero";
import ServiceFaq from "@/components/services/ServiceFaq";
import { linkBuildingFaqs } from "@/data/serviceFaqs";
import ServiceOverview from "@/components/services/seo-services/link-building/ServiceOverview";
import SolutionTypes from "@/components/services/seo-services/link-building/SolutionTypes";
import TechStack from "@/components/services/seo-services/link-building/TechStack";
import Process from "@/components/services/seo-services/link-building/Process";
import WhyChooseUs from "@/components/services/seo-services/link-building/WhyChooseUs";
import CTA from "@/components/services/seo-services/link-building/CTA";
import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: "SEO Backlink Agency & Link Building | Cinute InfoMedia",
    description: "SEO backlink agency building relevant, editorial links through white-hat outreach. Grow domain authority and rankings without risky link schemes.",
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
                        "provider": { "@id": "https://www.cinuteinfomedia.com/#organization" },
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
                            { "@type": "ListItem", "position": 3, "name": "SEO", "item": "https://www.cinuteinfomedia.com/services/seo-services" },
                            { "@type": "ListItem", "position": 4, "name": "Link Building", "item": "https://www.cinuteinfomedia.com/services/seo-services/link-building" }
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
            <ServiceFaq
                faqs={linkBuildingFaqs}
                accent="var(--accent-cyan-text)"
                pageUrl="https://www.cinuteinfomedia.com/services/seo-services/link-building"
                subtitle="Common questions about working with an SEO backlink agency."
            />
            <CTA />
        </main>
    );
}
