
import dynamic from 'next/dynamic';
import Hero from '@/components/services/web-design-development/fintech-solutions/Hero';
import ServiceOverview from '@/components/services/web-design-development/fintech-solutions/ServiceOverview';
import TechStack from '@/components/services/web-design-development/fintech-solutions/TechStack';
import CTA from '@/components/services/web-design-development/fintech-solutions/CTA';

const WhyChooseUs = dynamic(() => import('@/components/services/web-design-development/fintech-solutions/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});

const Process = dynamic(() => import('@/components/services/web-design-development/fintech-solutions/Process'), {
    loading: () => <div className="py-20" />,
});

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
    title: 'FinTech Solutions & Banking Software Development',
    description: 'Build secure, scalable financial technology platforms. Key services: Digital Banking, Payment Gateways, Investment Platforms, and Blockchain Solutions.',
    url: '/services/web-design-development/fintech-solutions',
    keywords: [
        'FinTech Development',
        'Banking Software',
        'Payment Gateway Integration',
        'Financial Technology',
        'Blockchain Solutions',
        'Secure Banking Apps',
    ],
    image: '/og-images/fintech.jpeg',
});

export default function FinTechSolutionsPage() {
    const fintechSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "FinTech Solutions & Banking Software Development",
            description: "Build secure, scalable financial technology platforms. Key services: Digital Banking, Payment Gateways, Investment Platforms, and Blockchain Solutions.",
            urlPath: "/services/web-design-development/fintech-solutions",
            datePublished: "2025-01-01",
            dateModified: "2026-03-17",
            aboutId: "https://www.cinuteinfomedia.com/services/web-design-development/fintech-solutions/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/fintech-solutions/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/fintech-solutions/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "FinTech Solutions", url: "/services/web-design-development/fintech-solutions" },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/fintech-solutions/#breadcrumb"),

        generateServiceSchema({
            name: "FinTech Solutions & Banking Software Development",
            description: "Build secure, scalable, and compliant financial technology platforms. From neobanks to blockchain solutions, we engineer the future of digital finance with bank-grade security and 256-bit encryption.",
            urlPath: "/services/web-design-development/fintech-solutions",
            serviceType: "FinTech & Banking Software Development",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Start your FinTech project or book a demo. PCI-DSS Level 1-aligned financial technology development with SOC 2-aligned security.",
            },
        }),

        generateItemListSchema({
            id: "/services/web-design-development/fintech-solutions/#itemList",
            name: "FinTech Solutions We Build",
            description: "Comprehensive financial technology solutions from mobile banking to blockchain and cross-border payments.",
            items: [
                { name: "Mobile Banking Apps", description: "Native iOS and Android banking applications with biometric security, seamless UX, and real-time transaction processing." },
                { name: "Payment Processing", description: "Secure payment gateways supporting global currencies, cryptocurrency payments, and PCI-DSS Level 1 compliance." },
                { name: "Wealth Management", description: "Robo-advisory platforms, portfolio tracking dashboards, and trading interfaces for investment management." },
                { name: "Fraud Detection", description: "AI-driven risk assessment systems, real-time transaction monitoring, and anomaly detection engines." },
                { name: "Core Banking", description: "Modern ledger systems, API-first banking infrastructure, and high-concurrency financial engines." },
                { name: "Cross-Border Payments", description: "Low-latency international transfer networks with multi-currency support and regulatory compliance." },
            ],
        }),

        generateHowToSchema({
            name: "Our Secured FinTech Development Process",
            description: "A security-first 6-step methodology for building financial platforms that have processed high transaction volume with high availability and <100ms transaction speed.",
            steps: [
                { name: "Security & Compliance Analysis", text: "Mapping regulatory requirements including GDPR, PCI-DSS, and KYC/AML. Includes compliance roadmap, security audit, user personas, and risk assessment.", url: "https://www.cinuteinfomedia.com/services/web-design-development/fintech-solutions/#step-compliance" },
                { name: "Architecture & UX Design", text: "Designing high-concurrency systems and secure user journeys with system architecture, API specifications, UX/UI prototypes, and data flow diagrams.", url: "https://www.cinuteinfomedia.com/services/web-design-development/fintech-solutions/#step-architecture" },
                { name: "Secure Development", text: "Building redundant, low-latency financial engines with core banking logic, auth integration, API development, and performance tuning.", url: "https://www.cinuteinfomedia.com/services/web-design-development/fintech-solutions/#step-development" },
                { name: "Penetration Testing & QA", text: "Rigorous security audits, penetration testing, smart contract audits, load testing, and UAT cycles.", url: "https://www.cinuteinfomedia.com/services/web-design-development/fintech-solutions/#step-testing" },
                { name: "Secure Launch", text: "Controlled environment deployment, production setup, staff training, and global availability rollout.", url: "https://www.cinuteinfomedia.com/services/web-design-development/fintech-solutions/#step-launch" },
                { name: "Monitoring & Scaling", text: "24/7 real-time threat detection with SIEM monitoring, log analysis, capacity planning, patch management, and auto-scaling infrastructure.", url: "https://www.cinuteinfomedia.com/services/web-design-development/fintech-solutions/#step-monitoring" },
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
        <main className="bg-white dark:bg-black" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem", "--page-selection-bg": "#0ea5e9" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(fintechSchema) }}
            />
            <Hero />
            <ServiceOverview />
            <WhyChooseUs />
            <Process />
            <TechStack />
            <CTA />
        </main>
    );
}
