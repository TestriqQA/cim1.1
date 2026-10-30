import type { Metadata } from "next";
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateWebPageSchema,
    generateServiceSchema,
    generateBreadcrumbSchema,
} from "@/lib/schema";
import Hero from "@/components/services/web-design-development/laravel-php/Hero";
import ServiceOverview from "@/components/services/web-design-development/laravel-php/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/laravel-php/SolutionTypes";
import TechStack from "@/components/services/web-design-development/laravel-php/TechStack";
import Process from "@/components/services/web-design-development/laravel-php/Process";
import WhyChooseUs from "@/components/services/web-design-development/laravel-php/WhyChooseUs";
import CTA from "@/components/services/web-design-development/laravel-php/CTA";

export const metadata: Metadata = {
    title: "Laravel & PHP Development Services | Cinute InfoMedia",
    description: "Expert Laravel and PHP development services for scalable, secure, and high-performance web applications. Custom solutions tailored to your business needs.",
    openGraph: {
        title: "Laravel & PHP Development Services | Cinute InfoMedia",
        description: "Expert Laravel and PHP development services for scalable, secure, and high-performance web applications. Custom solutions tailored to your business needs.",
        url: "https://www.cinuteinfomedia.com/services/web-design-development/laravel-php",
        type: "website",
        images: [
            {
                url: "/og-images/laravel-php.webp",
                width: 1200,
                height: 630,
                alt: "Laravel & PHP Development Services | Cinute InfoMedia by Cinute InfoMedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Laravel & PHP Development Services | Cinute InfoMedia",
        description: "Expert Laravel and PHP development services for scalable, secure, and high-performance web applications. Custom solutions tailored to your business needs.",
        images: ["/og-images/laravel-php.webp"],
    },
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/web-design-development/laravel-php",
    },
};


// This page previously emitted no structured data, unlike the rest of the
// service tree. Same @graph shape the other service pages use: Organization and
// WebSite anchor the entity, WebPage describes this URL, Service describes what
// is sold here, BreadcrumbList gives the path back to the hub. (T5)
const jsonLd = generateGraphSchema(
    generateOrganizationSchema(),
    generateWebSiteSchema(),
    generateWebPageSchema({
        name: "Laravel & PHP Development Services | Cinute InfoMedia",
        description: "Expert Laravel and PHP development services for scalable, secure, and high-performance web applications. Custom solutions tailored to your business needs.",
        urlPath: "/services/web-design-development/laravel-php",
        mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/laravel-php/#service",
        breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/laravel-php/#breadcrumb",
    }),
    generateServiceSchema({
        name: "Laravel & PHP Development",
        description: "Expert Laravel and PHP development services for scalable, secure, and high-performance web applications. Custom solutions tailored to your business needs.",
        urlPath: "/services/web-design-development/laravel-php",
        serviceType: "Backend Development",
        areaServed: ["India", "United States", "United Kingdom", "United Arab Emirates"],
    }),
    generateBreadcrumbSchema(
        [
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "Laravel & PHP Development", url: "/services/web-design-development/laravel-php" },
        ],
        "https://www.cinuteinfomedia.com/services/web-design-development/laravel-php/#breadcrumb"
    )
);

export default function LaravelPhpPage() {
    return (
        <main className="min-h-screen" style={{ "--page-selection-bg": "#FF2D20" } as React.CSSProperties}>
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
            <CTA />
        </main>
    );
}
