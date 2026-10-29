import type { Metadata } from "next";
import Hero from "@/components/services/social-media-marketing-services/pinterest-marketing/Hero";
import ServiceOverview from "@/components/services/social-media-marketing-services/pinterest-marketing/ServiceOverview";
import SolutionTypes from "@/components/services/social-media-marketing-services/pinterest-marketing/SolutionTypes";
import TechStack from "@/components/services/social-media-marketing-services/pinterest-marketing/TechStack";
import Process from "@/components/services/social-media-marketing-services/pinterest-marketing/Process";
import WhyChooseUs from "@/components/services/social-media-marketing-services/pinterest-marketing/WhyChooseUs";
import CTA from "@/components/services/social-media-marketing-services/pinterest-marketing/CTA";

export const metadata: Metadata = {
    title: "Pinterest Marketing Agency | Visual Discovery & Shopping Ads",
    description:
        "Drive traffic and sales with Pinterest marketing. Shoppable pins, promoted content, and visual discovery strategies for e-commerce and lifestyle brands.",
    keywords: [
        "Pinterest marketing",
        "Pinterest ads agency",
        "Pinterest advertising",
        "shoppable pins",
        "Pinterest SEO",
        "visual discovery marketing",
        "Pinterest for business",
        "Pinterest shopping ads",
        "idea pins",
        "Pinterest strategy",
    ],
    openGraph: {
        title: "Pinterest Marketing Agency | Visual Discovery & Shopping Ads",
        description: "Drive traffic and sales with Pinterest marketing. Shoppable pins, promoted content, and visual discovery strategies for e-commerce and lifestyle brands.",
        url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/pinterest-marketing",
        type: "website",
        images: [
            {
                url: "/og-images/pinterest-marketing.webp",
                width: 1200,
                height: 630,
                alt: "Pinterest Marketing Agency | Visual Discovery & Shopping Ads by Cinute Infomedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Pinterest Marketing Agency | Visual Discovery & Shopping Ads",
        description: "Drive traffic and sales with Pinterest marketing. Shoppable pins, promoted content, and visual discovery strategies for e-commerce and lifestyle brands.",
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
                            { "@type": "ListItem", "position": 3, "name": "Social Media Marketing", "item": "https://www.cinuteinfomedia.com/services/social-media-marketing-services" },
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
