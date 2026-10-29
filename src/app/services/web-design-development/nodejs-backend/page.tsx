import Hero from "@/components/services/web-design-development/nodejs-backend/Hero";
import ServiceOverview from "@/components/services/web-design-development/nodejs-backend/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/nodejs-backend/SolutionTypes";
import TechStack from "@/components/services/web-design-development/nodejs-backend/TechStack";
import Process from "@/components/services/web-design-development/nodejs-backend/Process";
import WhyChooseUs from "@/components/services/web-design-development/nodejs-backend/WhyChooseUs";
import CTA from "@/components/services/web-design-development/nodejs-backend/CTA";

import { getPageMetadata } from '@/lib/metadata';
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateWebPageSchema,
    generateBreadcrumbSchema,
    generateServiceSchema,
    generateItemListSchema,
    generateHowToSchema,
    generateNavigationSchema,
} from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Node.js & Backend Development | APIs & Microservices',
    description: 'Build scalable, high-performance backend systems and APIs. Node.js, Express, NestJS, and cloud-native architecture for modern businesses.',
    url: '/services/web-design-development/nodejs-backend',
    keywords: [
        'nodejs development',
        'backend development',
        'api development',
        'microservices',
        'express.js',
        'nestjs',
        'graphql api',
        'rest api',
        'database design',
    ],
});

export default function NodejsBackendPage() {
    const nodejsSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Node.js & Backend Development | APIs & Microservices",
            description: "Build scalable, high-performance backend systems and APIs. Node.js, Express, NestJS, and cloud-native architecture for modern businesses.",
            urlPath: "/services/web-design-development/nodejs-backend",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/web-design-development/nodejs-backend/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/nodejs-backend/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/nodejs-backend/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "Node.js & Backend Development", url: "/services/web-design-development/nodejs-backend" },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/nodejs-backend/#breadcrumb"),

        generateServiceSchema({
            name: "Node.js & Backend Development Services",
            description: "High-performance APIs and microservices that power your applications. Node.js, Express, NestJS, and cloud-native architecture for modern businesses. 500+ APIs deployed, high availability, handling 10M+ daily requests.",
            urlPath: "/services/web-design-development/nodejs-backend",
            serviceType: "Backend Development & API Engineering",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Start your backend project with a free consultation. Custom API development, microservices architecture, real-time systems, and cloud-native solutions.",
            },
        }),

        generateItemListSchema({
            id: "/services/web-design-development/nodejs-backend/#itemList",
            name: "Node.js & Backend Development Solutions",
            description: "Comprehensive backend development services from custom APIs to cloud-native microservices and real-time systems.",
            items: [
                { name: "Custom API Development", description: "RESTful and GraphQL APIs designed for high performance, security, and seamless frontend integration." },
                { name: "Microservices Architecture", description: "Scalable, independent services that can be deployed, updated, and scaled individually for maximum flexibility." },
                { name: "Database Design", description: "SQL, NoSQL, and caching strategies optimized for your specific data patterns and performance requirements." },
                { name: "Real-time Systems", description: "WebSockets and pub/sub patterns for live data streaming, notifications, and real-time collaboration features." },
                { name: "Authentication & Security", description: "OAuth 2.0, JWT, and encryption best practices for secure user authentication and data protection." },
                { name: "Cloud Integration", description: "Deployment on AWS, Azure, and GCP with auto-scaling, containerization, and infrastructure-as-code." },
            ],
        }),

        generateHowToSchema({
            name: "Our Backend Development Process",
            description: "A structured 6-step methodology for building scalable backend systems that handle 10M+ daily requests with high availability.",
            steps: [
                { name: "Requirements Analysis", text: "Defining API specifications, data models, integration mapping, and technical requirements for your backend system.", url: "https://www.cinuteinfomedia.com/services/web-design-development/nodejs-backend/#step-requirements" },
                { name: "Architecture Design", text: "System architecture planning, database design, API contract design, and scalability blueprint creation.", url: "https://www.cinuteinfomedia.com/services/web-design-development/nodejs-backend/#step-architecture" },
                { name: "Development", text: "Clean, maintainable code implementation using Node.js, Express, NestJS, and modern development practices.", url: "https://www.cinuteinfomedia.com/services/web-design-development/nodejs-backend/#step-development" },
                { name: "Integration", text: "Connecting third-party APIs, frontend synchronization, webhook setup, and service orchestration.", url: "https://www.cinuteinfomedia.com/services/web-design-development/nodejs-backend/#step-integration" },
                { name: "Testing & QA", text: "Load testing, security audits, API validation, and comprehensive quality assurance across all endpoints.", url: "https://www.cinuteinfomedia.com/services/web-design-development/nodejs-backend/#step-testing" },
                { name: "Deployment", text: "CI/CD pipeline setup, Docker containerization, Kubernetes orchestration, and real-time monitoring configuration.", url: "https://www.cinuteinfomedia.com/services/web-design-development/nodejs-backend/#step-deployment" },
            ],
        }),

        generateNavigationSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Blog", url: "/blog" },
            { name: "About", url: "/about" },
            { name: "Careers", url: "/careers" },
            { name: "Contact", url: "/contact" },
        ])
    );

    return (
        <main style={{ "--page-selection-bg": "#339933" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(nodejsSchema) }}
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
