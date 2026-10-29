import dynamic from 'next/dynamic';
import Hero from '@/components/services/web-design-development/healthcare-portals/Hero';
import ServiceOverview from '@/components/services/web-design-development/healthcare-portals/ServiceOverview';
import TechStack from '@/components/services/web-design-development/healthcare-portals/TechStack';
import UseCases from '@/components/services/web-design-development/healthcare-portals/UseCases';
import CTA from '@/components/services/web-design-development/healthcare-portals/CTA';

// Lazy load below-the-fold interactive components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/web-design-development/healthcare-portals/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const SolutionTypes = dynamic(() => import('@/components/services/web-design-development/healthcare-portals/SolutionTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/web-design-development/healthcare-portals/Process'), {
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
    title: 'Healthcare Portal Development | HIPAA-Compliant Patient Portals',
    description: 'Build secure, HIPAA-compliant patient portals, telehealth platforms, and healthcare management systems that improve patient outcomes and streamline provider workflows.',
    url: '/services/web-design-development/healthcare-portals',
    keywords: [
        'Healthcare Portal Development',
        'HIPAA Compliant Website',
        'Patient Portal Development',
        'Telehealth Platform',
        'Healthcare Web Development',
    ],
    image: '/og-images/healthcare.jpeg',
});

export default function HealthcarePortalsPage() {
    const healthcareSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Healthcare Portal Development | HIPAA-Compliant Patient Portals",
            description: "Build secure, HIPAA-compliant patient portals, telehealth platforms, and healthcare management systems that improve patient outcomes and streamline provider workflows.",
            urlPath: "/services/web-design-development/healthcare-portals",
            datePublished: "2025-01-01",
            dateModified: "2026-03-17",
            aboutId: "https://www.cinuteinfomedia.com/services/web-design-development/healthcare-portals/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/healthcare-portals/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/healthcare-portals/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "Healthcare Portal Development", url: "/services/web-design-development/healthcare-portals" },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/healthcare-portals/#breadcrumb"),

        generateServiceSchema({
            name: "Healthcare Portal Development Services",
            description: "We build secure, scalable healthcare solutions that connect patients with providers, streamline clinical workflows, and ensure regulatory compliance. HIPAA-compliant patient portals, telehealth platforms, and healthcare management systems.",
            urlPath: "/services/web-design-development/healthcare-portals",
            serviceType: "Healthcare Portal Development",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Schedule a consultation for HIPAA-compliant healthcare portal development. Custom solutions for hospitals, clinics, pharmacies, and behavioral health providers.",
            },
        }),

        generateItemListSchema({
            id: "/services/web-design-development/healthcare-portals/#itemList",
            name: "Healthcare Solutions We Build",
            description: "Comprehensive healthcare technology solutions from patient portals to health analytics platforms.",
            items: [
                { name: "Patient Portals", description: "Self-service portals for appointments, health records access, secure messaging, and bill pay integration." },
                { name: "Telehealth Platforms", description: "Secure video consultations, remote patient monitoring, e-prescriptions, and virtual waiting rooms." },
                { name: "Practice Management Systems", description: "Comprehensive systems for scheduling, billing and claims processing, clinical documentation, and staff management." },
                { name: "Pharmacy Systems", description: "Digital platforms for medication management, prescription processing, inventory management, drug interaction checks, and patient education." },
                { name: "Mental Health Platforms", description: "Specialized behavioral health solutions including therapy scheduling, progress tracking, crisis resources, and group sessions." },
                { name: "Health Analytics", description: "Data-driven insights for population health, outcome analytics, quality metrics, and predictive modeling." },
            ],
        }),

        generateHowToSchema({
            name: "Our Healthcare Development Process",
            description: "A compliance-first 6-step methodology for building secure healthcare platforms that serve 1M+ patients with 100% HIPAA compliance.",
            steps: [
                { name: "Requirements & Compliance", text: "Analysis of clinical workflows, compliance assessment for HIPAA/GDPR, and comprehensive security planning.", url: "https://www.cinuteinfomedia.com/services/web-design-development/healthcare-portals/#step-requirements" },
                { name: "UX Design & Prototyping", text: "Empathy-driven UX research, wireframes, and usability testing focused on patient and provider needs.", url: "https://www.cinuteinfomedia.com/services/web-design-development/healthcare-portals/#step-design" },
                { name: "Secure Development", text: "Building with end-to-end encryption, secure API development, and EHR/HL7 FHIR integration.", url: "https://www.cinuteinfomedia.com/services/web-design-development/healthcare-portals/#step-development" },
                { name: "Testing & Validation", text: "Rigorous security audits, penetration testing, HIPAA validation, and compliance verification.", url: "https://www.cinuteinfomedia.com/services/web-design-development/healthcare-portals/#step-testing" },
                { name: "Deployment & Training", text: "Staged deployment to production, staff training sessions, and comprehensive go-live support.", url: "https://www.cinuteinfomedia.com/services/web-design-development/healthcare-portals/#step-deployment" },
                { name: "Monitoring & Optimization", text: "24/7 system monitoring, security updates, performance tuning, and continuous compliance management.", url: "https://www.cinuteinfomedia.com/services/web-design-development/healthcare-portals/#step-monitoring" },
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
        <main className="bg-white dark:bg-black" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem", "--page-selection-bg": "#3b82f6" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(healthcareSchema) }}
            />
            <Hero />
            <ServiceOverview />
            <WhyChooseUs />
            <SolutionTypes />
            <Process />
            <TechStack />
            <UseCases />
            <CTA />
        </main>
    );
}
