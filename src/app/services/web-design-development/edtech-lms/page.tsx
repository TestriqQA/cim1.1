import dynamic from 'next/dynamic';
import Hero from '@/components/services/web-design-development/edtech-lms/Hero';
import ServiceOverview from '@/components/services/web-design-development/edtech-lms/ServiceOverview';
import TechStack from '@/components/services/web-design-development/edtech-lms/TechStack';
import UseCases from '@/components/services/web-design-development/edtech-lms/UseCases';
import CTA from '@/components/services/web-design-development/edtech-lms/CTA';

const WhyChooseUs = dynamic(() => import('@/components/services/web-design-development/edtech-lms/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const SolutionTypes = dynamic(() => import('@/components/services/web-design-development/edtech-lms/SolutionTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/web-design-development/edtech-lms/Process'), {
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
    title: 'EdTech & LMS Development | Custom Learning Management Systems',
    description: 'Build powerful online course platforms, learning management systems, and educational apps. We create engaging EdTech solutions with video streaming, quizzes, certifications, and analytics.',
    url: '/services/web-design-development/edtech-lms',
    keywords: [
        'LMS Development',
        'EdTech Platform Development',
        'Online Course Platform',
        'Learning Management System',
        'E-Learning Development',
        'Educational App Development',
    ],
    image: '/og-images/edtech.jpeg',
});

export default function EdTechLMSPage() {
    const edtechSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "EdTech & LMS Development | Custom Learning Management Systems",
            description: "Build powerful online course platforms, learning management systems, and educational apps. We create engaging EdTech solutions with video streaming, quizzes, certifications, and analytics.",
            urlPath: "/services/web-design-development/edtech-lms",
            datePublished: "2025-01-01",
            dateModified: "2026-03-17",
            aboutId: "https://www.cinuteinfomedia.com/services/web-design-development/edtech-lms/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/edtech-lms/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/edtech-lms/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "EdTech & LMS Development", url: "/services/web-design-development/edtech-lms" },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/edtech-lms/#breadcrumb"),

        generateServiceSchema({
            name: "EdTech & LMS Development Services",
            description: "Build powerful learning management systems, online course platforms, and interactive educational experiences that engage students and drive measurable learning outcomes. Transform learning with digital education.",
            urlPath: "/services/web-design-development/edtech-lms",
            serviceType: "EdTech & LMS Development",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Start your EdTech project with a free consultation. Custom LMS development with video streaming, quizzes, certifications, and analytics.",
            },
        }),

        generateItemListSchema({
            id: "/services/web-design-development/edtech-lms/#itemList",
            name: "EdTech Solutions We Build",
            description: "Comprehensive EdTech and LMS solutions from online course platforms to enterprise training systems.",
            items: [
                { name: "Online Course Platforms", description: "Platforms like Udemy and Skillshare with video lessons, quizzes, progress tracking, and certificates of completion." },
                { name: "Corporate LMS", description: "Employee training, onboarding, compliance tracking, and skill development platforms for organizations." },
                { name: "Academic LMS", description: "School and university platforms with grading systems, attendance tracking, and parent portals." },
                { name: "Live Learning Platforms", description: "Real-time virtual classrooms with interactive whiteboards, video conferencing, and live collaboration." },
                { name: "Training Marketplaces", description: "Multi-instructor platforms with monetization features, revenue sharing, and instructor dashboards." },
                { name: "MOOC Platforms", description: "Massive open online course platforms with global access, peer learning, and scalable architecture." },
            ],
        }),

        generateHowToSchema({
            name: "Our EdTech Development Process",
            description: "A proven 6-step methodology for building powerful EdTech platforms that have served 100K+ students with a 98% completion rate.",
            steps: [
                { name: "Learning Needs Analysis", text: "Identify target audience, define learning objectives, and develop a comprehensive content strategy.", url: "https://www.cinuteinfomedia.com/services/web-design-development/edtech-lms/#step-analysis" },
                { name: "UX Design & Prototyping", text: "Design for content readability and engagement with interactive mockups and learner-focused interfaces.", url: "https://www.cinuteinfomedia.com/services/web-design-development/edtech-lms/#step-design" },
                { name: "Platform Development", text: "Build course builders, video streaming engines, quiz systems, and certification modules with modern frameworks.", url: "https://www.cinuteinfomedia.com/services/web-design-development/edtech-lms/#step-development" },
                { name: "Testing & Quality Assurance", text: "Comprehensive video testing, quiz validation, cross-device QA, and performance benchmarks.", url: "https://www.cinuteinfomedia.com/services/web-design-development/edtech-lms/#step-qa" },
                { name: "Launch & Content Migration", text: "Platform setup, content upload, instructor training, and seamless go-live execution.", url: "https://www.cinuteinfomedia.com/services/web-design-development/edtech-lms/#step-launch" },
                { name: "Analytics & Optimization", text: "Track engagement metrics, generate performance insights, and plan feature roadmap for continuous improvement.", url: "https://www.cinuteinfomedia.com/services/web-design-development/edtech-lms/#step-analytics" },
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
        <main className="bg-white dark:bg-black" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem", "--page-selection-bg": "#a855f7" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(edtechSchema) }}
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
