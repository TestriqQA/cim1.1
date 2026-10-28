import { Metadata } from "next";
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateWebPageSchema,
    generateServiceSchema,
    generateBreadcrumbSchema,
} from "@/lib/schema";
import Hero from "@/components/services/web-design-development/python-django/Hero";
import ServiceOverview from "@/components/services/web-design-development/python-django/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/python-django/SolutionTypes";
import TechStack from "@/components/services/web-design-development/python-django/TechStack";
import Process from "@/components/services/web-design-development/python-django/Process";
import WhyChooseUs from "@/components/services/web-design-development/python-django/WhyChooseUs";
import CTA from "@/components/services/web-design-development/python-django/CTA";

export const metadata: Metadata = {
    title: "Python & Django Development | Cinute InfoMedia",
    description:
        "Expert Python and Django web development services. We build scalable, secure web applications, REST APIs, and enterprise solutions with Python's powerful ecosystem.",
    openGraph: {
        title: "Python & Django Development | Cinute InfoMedia",
        description: "Expert Python and Django web development services. We build scalable, secure web applications, REST APIs, and enterprise solutions with Python's powerful ecosystem.",
        url: "https://www.cinuteinfomedia.com/services/web-design-development/python-django",
        type: "website",
        images: [
            {
                url: "/og-images/python-django.webp",
                width: 1200,
                height: 630,
                alt: "Python & Django Development | Cinute InfoMedia by Cinute InfoMedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Python & Django Development | Cinute InfoMedia",
        description: "Expert Python and Django web development services. We build scalable, secure web applications, REST APIs, and enterprise solutions with Python's powerful ecosystem.",
        images: ["/og-images/python-django.webp"],
    },
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/web-design-development/python-django",
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
        name: "Python & Django Development | Cinute InfoMedia",
        description: "Expert Python and Django web development services. We build scalable, secure web applications, REST APIs, and enterprise solutions with Python's powerful ecosystem.",
        urlPath: "/services/web-design-development/python-django",
        mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/python-django/#service",
        breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/python-django/#breadcrumb",
    }),
    generateServiceSchema({
        name: "Python & Django Development",
        description: "Expert Python and Django web development services. We build scalable, secure web applications, REST APIs, and enterprise solutions with Python's powerful ecosystem.",
        urlPath: "/services/web-design-development/python-django",
        serviceType: "Backend Development",
        areaServed: ["India", "United States", "United Kingdom", "United Arab Emirates"],
    }),
    generateBreadcrumbSchema(
        [
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "Python & Django Development", url: "/services/web-design-development/python-django" },
        ],
        "https://www.cinuteinfomedia.com/services/web-design-development/python-django/#breadcrumb"
    )
);

export default function PythonDjangoPage() {
    return (
        <main className="min-h-screen" style={{ "--page-selection-bg": "#306998" } as React.CSSProperties}>
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
