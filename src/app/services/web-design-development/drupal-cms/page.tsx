import { Metadata } from "next";
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateWebPageSchema,
    generateServiceSchema,
    generateBreadcrumbSchema,
} from "@/lib/schema";
import Hero from "@/components/services/web-design-development/drupal-cms/Hero";
import ServiceOverview from "@/components/services/web-design-development/drupal-cms/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/drupal-cms/SolutionTypes";
import TechStack from "@/components/services/web-design-development/drupal-cms/TechStack";
import Process from "@/components/services/web-design-development/drupal-cms/Process";
import WhyChooseUs from "@/components/services/web-design-development/drupal-cms/WhyChooseUs";
import CTA from "@/components/services/web-design-development/drupal-cms/CTA";

export const metadata: Metadata = {
    title: "Drupal CMS Development Services | Cinute InfoMedia",
    description:
        "Expert Drupal CMS development services. We build secure, scalable, and accessible enterprise websites for government, education, healthcare, and large organizations.",
    openGraph: {
        title: "Drupal CMS Development Services | Cinute InfoMedia",
        description: "Expert Drupal CMS development services. We build secure, scalable, and accessible enterprise websites for government, education, healthcare, and large organizations.",
        url: "https://www.cinuteinfomedia.com/services/web-design-development/drupal-cms",
        type: "website",
        images: [
            {
                url: "/og-images/drupal-cms.webp",
                width: 1200,
                height: 630,
                alt: "Drupal CMS Development Services | Cinute InfoMedia by Cinute InfoMedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Drupal CMS Development Services | Cinute InfoMedia",
        description: "Expert Drupal CMS development services. We build secure, scalable, and accessible enterprise websites for government, education, healthcare, and large organizations.",
        images: ["/og-images/drupal-cms.webp"],
    },
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/web-design-development/drupal-cms",
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
        name: "Drupal CMS Development Services | Cinute InfoMedia",
        description: "Expert Drupal CMS development services. We build secure, scalable, and accessible enterprise websites for government, education, healthcare, and large organizations.",
        urlPath: "/services/web-design-development/drupal-cms",
        mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/drupal-cms/#service",
        breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/drupal-cms/#breadcrumb",
    }),
    generateServiceSchema({
        name: "Drupal CMS Development",
        description: "Expert Drupal CMS development services. We build secure, scalable, and accessible enterprise websites for government, education, healthcare, and large organizations.",
        urlPath: "/services/web-design-development/drupal-cms",
        serviceType: "CMS Development",
        areaServed: ["India", "United States", "United Kingdom", "United Arab Emirates"],
    }),
    generateBreadcrumbSchema(
        [
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "Drupal CMS Development", url: "/services/web-design-development/drupal-cms" },
        ],
        "https://www.cinuteinfomedia.com/services/web-design-development/drupal-cms/#breadcrumb"
    )
);

export default function DrupalCMSPage() {
    return (
        <main className="min-h-screen" style={{ "--page-selection-bg": "#0678BE" } as React.CSSProperties}>
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
