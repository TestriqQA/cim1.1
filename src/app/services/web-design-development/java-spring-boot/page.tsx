import { Metadata } from "next";
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateWebPageSchema,
    generateServiceSchema,
    generateBreadcrumbSchema,
} from "@/lib/schema";
import Hero from "@/components/services/web-design-development/java-spring-boot/Hero";
import ServiceOverview from "@/components/services/web-design-development/java-spring-boot/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/java-spring-boot/SolutionTypes";
import TechStack from "@/components/services/web-design-development/java-spring-boot/TechStack";
import Process from "@/components/services/web-design-development/java-spring-boot/Process";
import WhyChooseUs from "@/components/services/web-design-development/java-spring-boot/WhyChooseUs";
import CTA from "@/components/services/web-design-development/java-spring-boot/CTA";

export const metadata: Metadata = {
    title: "Java & Spring Boot Development | Cinute InfoMedia",
    description:
        "Expert Java and Spring Boot development services. We build scalable, secure enterprise applications, microservices, and high-performance APIs with the Spring ecosystem.",
    openGraph: {
        title: "Java & Spring Boot Development | Cinute InfoMedia",
        description: "Expert Java and Spring Boot development services. We build scalable, secure enterprise applications, microservices, and high-performance APIs with the Spring ecosystem.",
        url: "https://www.cinuteinfomedia.com/services/web-design-development/java-spring-boot",
        type: "website",
        images: [
            {
                url: "/og-images/java-spring-boot.webp",
                width: 1200,
                height: 630,
                alt: "Java & Spring Boot Development | Cinute InfoMedia by Cinute InfoMedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Java & Spring Boot Development | Cinute InfoMedia",
        description: "Expert Java and Spring Boot development services. We build scalable, secure enterprise applications, microservices, and high-performance APIs with the Spring ecosystem.",
        images: ["/og-images/java-spring-boot.webp"],
    },
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/web-design-development/java-spring-boot",
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
        name: "Java & Spring Boot Development | Cinute InfoMedia",
        description: "Expert Java and Spring Boot development services. We build scalable, secure enterprise applications, microservices, and high-performance APIs with the Spring ecosystem.",
        urlPath: "/services/web-design-development/java-spring-boot",
        mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/java-spring-boot/#service",
        breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/java-spring-boot/#breadcrumb",
    }),
    generateServiceSchema({
        name: "Java & Spring Boot Development",
        description: "Expert Java and Spring Boot development services. We build scalable, secure enterprise applications, microservices, and high-performance APIs with the Spring ecosystem.",
        urlPath: "/services/web-design-development/java-spring-boot",
        serviceType: "Backend Development",
        areaServed: ["India", "United States", "United Kingdom", "United Arab Emirates"],
    }),
    generateBreadcrumbSchema(
        [
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "Java & Spring Boot Development", url: "/services/web-design-development/java-spring-boot" },
        ],
        "https://www.cinuteinfomedia.com/services/web-design-development/java-spring-boot/#breadcrumb"
    )
);

export default function JavaSpringBootPage() {
    return (
        <main className="min-h-screen" style={{ "--page-selection-bg": "#6DB33F" } as React.CSSProperties}>
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
