import type { Metadata } from "next";
import Hero from "@/components/services/web-design-development/wordpress-development-services/Hero";
import ServiceOverview from "@/components/services/web-design-development/wordpress-development-services/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/wordpress-development-services/SolutionTypes";
import TechStack from "@/components/services/web-design-development/wordpress-development-services/TechStack";
import Process from "@/components/services/web-design-development/wordpress-development-services/Process";
import WhyChooseUs from "@/components/services/web-design-development/wordpress-development-services/WhyChooseUs";
import FAQ from "@/components/services/web-design-development/wordpress-development-services/FAQ";
import CTA from "@/components/services/web-design-development/wordpress-development-services/CTA";

export const metadata: Metadata = {
    title: "WordPress Development Services | Custom & Enterprise WP Agency",
    description: "Scale your business with expert WordPress development services. Custom themes, WooCommerce & 2026-ready SEO optimization. Get a reliable, high-ROI site today!",
    openGraph: {
        title: "WordPress Development Services | Custom & Enterprise WP Agency",
        description: "Scale your business with expert WordPress development services. Custom themes, WooCommerce & 2026-ready SEO optimization. Get a reliable, high-ROI site today!",
        url: "https://www.cinuteinfomedia.com/services/web-design-development/wordpress-development-services",
        type: "website",
        images: [
            {
                url: "/og-images/wordpress-development-services.webp",
                width: 1200,
                height: 630,
                alt: "WordPress Development Services | Custom & Enterprise WP Agency by Cinute Infomedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "WordPress Development Services | Custom & Enterprise WP Agency",
        description: "Scale your business with expert WordPress development services. Custom themes, WooCommerce & 2026-ready SEO optimization. Get a reliable, high-ROI site today!",
        images: ["/og-images/wordpress-development-services.webp"],
    },
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/web-design-development/wordpress-development-services",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "WordPress Development Services",
    "provider": {
        "@type": "Organization",
        "name": "Cinute Infomedia",
        "url": "https://www.cinuteinfomedia.com"
    },
    "areaServed": "Global",
    "description": "Professional WordPress development services including custom themes, WooCommerce, plugin development, and speed optimization for 2026.",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "WordPress Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Custom WordPress Website Design and Development"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "WooCommerce Development and Customization"
                }
            }
        ]
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.cinuteinfomedia.com/services/web-design-development/wordpress-development-services"
    }
};

export default function WordPressDevelopmentPage() {
    return (
        <main className="min-h-screen" style={{ "--page-selection-bg": "#0073AA" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
