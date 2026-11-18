import dynamic from "next/dynamic";
import ServiceGuide from "@/components/services/ServiceGuide";
import Link from "next/link";
import { microsoftAdsIncludes, microsoftAdsFit } from "@/data/serviceGuides";
import ServiceFaq from "@/components/services/ServiceFaq";
import { microsoftAdsFaqs } from "@/data/serviceFaqs";
import Hero from "@/components/services/performance-marketing/microsoft-ads/Hero";
import { getPageMetadata } from '@/lib/metadata';

// Below-the-fold sections load as separate chunks so they hydrate in their
// own tasks instead of one long main-thread block (SEO 4-week plan, P3).
const ServiceOverview = dynamic(() => import("@/components/services/performance-marketing/microsoft-ads/ServiceOverview"), {
    loading: () => <div className="py-10 md:py-16" />,
});

const SolutionTypes = dynamic(() => import("@/components/services/performance-marketing/microsoft-ads/SolutionTypes"), {
    loading: () => <div className="py-10 md:py-16" />,
});

const TechStack = dynamic(() => import("@/components/services/performance-marketing/microsoft-ads/TechStack"), {
    loading: () => <div className="py-10 md:py-16" />,
});

const Process = dynamic(() => import("@/components/services/performance-marketing/microsoft-ads/Process"), {
    loading: () => <div className="py-10 md:py-16" />,
});

const WhyChooseUs = dynamic(() => import("@/components/services/performance-marketing/microsoft-ads/WhyChooseUs"), {
    loading: () => <div className="py-10 md:py-16" />,
});

const CTA = dynamic(() => import("@/components/services/performance-marketing/microsoft-ads/CTA"), {
    loading: () => <div className="py-10 md:py-16" />,
});

export const metadata = getPageMetadata({
    title: "Microsoft Advertising (Bing Ads) Agency | Cinute InfoMedia",
    description: "Microsoft Advertising (Bing Ads) agency: campaign setup, keyword research, optimisation and reporting. Request a proposal.",
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
                        "provider": { "@id": "https://www.cinuteinfomedia.com/#organization" },
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
            <ServiceGuide
                id="whats-included"
                title="What Our Microsoft Advertising (Bing Ads) Management Includes"
                intro="Every account gets the same core work, whether you are new to Bing or want us to take over an existing account."
                items={microsoftAdsIncludes}
                accent="var(--brand-blue-text)"
            />
            <ServiceGuide
                title="Who Microsoft Advertising Works Best For"
                items={microsoftAdsFit}
                accent="var(--brand-blue-text)"
                footer={<>Not sure Bing is right for you? Read our comparison of <Link href="/blog/microsoft-ads-vs-google-ads-for-smbs" className="underline underline-offset-2 hover:text-[var(--brand-blue-text)]">Microsoft Ads vs Google Ads for small businesses</Link>.</>}
            />
            <WhyChooseUs />
            <ServiceFaq
                faqs={microsoftAdsFaqs}
                accent="var(--brand-blue-text)"
                pageUrl="https://www.cinuteinfomedia.com/services/performance-marketing/microsoft-ads"
                subtitle="Common questions about Microsoft Advertising (Bing Ads) management."
            />
            <CTA />
        </main>
    );
}
