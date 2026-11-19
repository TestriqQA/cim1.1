import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Hero from "@/components/services/social-media-marketing-services/pinterest-marketing/Hero";

// Below-the-fold sections load as separate chunks so they hydrate in their
// own tasks instead of one long main-thread block (SEO 4-week plan, P3).
const ServiceOverview = dynamic(() => import("@/components/services/social-media-marketing-services/pinterest-marketing/ServiceOverview"), {
    loading: () => <div className="py-10 md:py-16" />,
});

const SolutionTypes = dynamic(() => import("@/components/services/social-media-marketing-services/pinterest-marketing/SolutionTypes"), {
    loading: () => <div className="py-10 md:py-16" />,
});

const TechStack = dynamic(() => import("@/components/services/social-media-marketing-services/pinterest-marketing/TechStack"), {
    loading: () => <div className="py-10 md:py-16" />,
});

const Process = dynamic(() => import("@/components/services/social-media-marketing-services/pinterest-marketing/Process"), {
    loading: () => <div className="py-10 md:py-16" />,
});

const WhyChooseUs = dynamic(() => import("@/components/services/social-media-marketing-services/pinterest-marketing/WhyChooseUs"), {
    loading: () => <div className="py-10 md:py-16" />,
});

const CTA = dynamic(() => import("@/components/services/social-media-marketing-services/pinterest-marketing/CTA"), {
    loading: () => <div className="py-10 md:py-16" />,
});

export const metadata: Metadata = {
    title: "Pinterest Marketing Services | Cinute InfoMedia",
    description:
        "Pinterest marketing services for brands: profile setup, content, ads and reporting. Get in touch with Cinute InfoMedia.",
    openGraph: {
        title: "Pinterest Marketing Services | Cinute InfoMedia",
        description: "Pinterest marketing services for brands: profile setup, content, ads and reporting. Get in touch with Cinute InfoMedia.",
        url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/pinterest-marketing",
        type: "website",
        images: [
            {
                url: "/og-images/pinterest-marketing.webp",
                width: 1200,
                height: 630,
                alt: "Pinterest Marketing Services by Cinute InfoMedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Pinterest Marketing Services | Cinute InfoMedia",
        description: "Pinterest marketing services for brands: profile setup, content, ads and reporting. Get in touch with Cinute InfoMedia.",
        images: ["/og-images/pinterest-marketing.webp"],
    },
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/pinterest-marketing",
    },
};

export default function PinterestMarketingPage() {
    return (
        <main style={{ "--page-selection-bg": "#E60023" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Pinterest Marketing",
                        "provider": { "@id": "https://www.cinuteinfomedia.com/#organization" },
                        "areaServed": ["United States", "India", "United Kingdom", "Australia"],
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Pinterest Marketing Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "E-commerce & Retail Pinterest Marketing",
                                        "description": "Showcasing products with shoppable pins to drive sales from inspiration to checkout."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Home & Decor Pinterest Marketing",
                                        "description": "Reaching users designing their spaces through room visualization and style boards."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Food & Recipes Pinterest Marketing",
                                        "description": "Inspiring home cooks with recipe pins that encourage saves and ingredient purchases."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Fashion & Beauty Pinterest Marketing",
                                        "description": "Presenting seasonal trends and beauty looks through shoppable outfit and product pins."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Weddings & Events Pinterest Marketing",
                                        "description": "Connecting with engaged couples through venue, decor, and vendor inspiration content."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Education & DIY Pinterest Marketing",
                                        "description": "Tutorial and how-to pins that position your brand as a trusted resource."
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
                            { "@type": "ListItem", "position": 3, "name": "Social Media", "item": "https://www.cinuteinfomedia.com/services/social-media-marketing-services" },
                            { "@type": "ListItem", "position": 4, "name": "Pinterest Marketing", "item": "https://www.cinuteinfomedia.com/services/social-media-marketing-services/pinterest-marketing" }
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
