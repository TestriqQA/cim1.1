import dynamic from 'next/dynamic';
import Hero from '@/components/services/mobile-app-development/Hero';
import ServiceOverview from '@/components/services/mobile-app-development/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/mobile-app-development/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const AppTypes = dynamic(() => import('@/components/services/mobile-app-development/AppTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/mobile-app-development/Process'), {
    loading: () => <div className="py-20" />,
});
const Technologies = dynamic(() => import('@/components/services/mobile-app-development/Technologies'), {
    loading: () => <div className="py-20" />,
});
const SecurityAndSEO = dynamic(() => import('@/components/services/mobile-app-development/SecurityAndSEO'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/mobile-app-development/CTA'), {
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
    title: 'Top Mobile App Development Company | Custom Apps 2026',
    description: 'Expert mobile app development company delivering custom iOS, Android & cross-platform apps. 300+ successful projects. Get free consultation today!',
    url: '/services/mobile-app-development',
    keywords: [
        'Mobile App Development Company',
        'Android App Development Services',
        'iOS App Development',
        'Cross Platform Mobile Apps',
        'Custom Mobile App Solutions',
        'Mobile App Development Services',
        'Native App Development',
        'Cross-Platform App Development',
        'Flutter Development',
        'React Native Development',
    ],
    image: '/og-images/mobile_app_development.webp',
});

export default function MobileAppDevelopmentPage() {
    const mobileSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Top Mobile App Development Company | Custom Apps 2026",
            description: "Expert mobile app development company delivering custom iOS, Android & cross-platform apps. 300+ successful projects. Get free consultation today!",
            urlPath: "/services/mobile-app-development",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/mobile-app-development/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/mobile-app-development/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/mobile-app-development/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Mobile App Development", url: "/services/mobile-app-development" },
        ], "https://www.cinuteinfomedia.com/services/mobile-app-development/#breadcrumb"),

        generateServiceSchema({
            name: "Mobile App Development Services",
            description: "Transform your vision into high-performance mobile apps that drive business growth. As an expert mobile app development company with deep expertise, we craft custom iOS, Android, and cross-platform solutions globally. apps delivered globally, applications used at scale, strong client retention, a rigorous QA process.",
            urlPath: "/services/mobile-app-development",
            serviceType: "Mobile App Development",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Free 30-minute strategy session valued at $1,500. Includes business goals analysis, technical feasibility review, cost and timeline estimate, and MVP roadmap.",
            },
        }),

        generateItemListSchema({
            id: "/services/mobile-app-development/#coreServicesList",
            name: "Core Mobile App Development Capabilities",
            description: "End-to-end mobile development capabilities from native apps to enterprise security and performance optimization.",
            items: [
                { name: "Native App Development", description: "iOS (Swift 6) and Android (Kotlin) development with AR/VR capabilities and platform-specific optimizations." },
                { name: "Cross-Platform Solutions", description: "Unified performance using Flutter and React Native with 90%+ code reusability across platforms." },
                { name: "Performance Optimization", description: "Sub-2-second launch times, 60 FPS fluidity, and under 50MB app size for optimal user experience." },
                { name: "User-Centric Design", description: "WCAG 2.2 AA compliant, research-driven UI/UX design focused on engagement and conversions." },
                { name: "Scalable Backend", description: "Supporting 10,000+ concurrent users with Node.js, Python, and .NET backend architecture." },
                { name: "Enterprise Security", description: "AES-256 encryption, OAuth 2.0 authentication, and multi-compliance (GDPR, HIPAA, SOC 2, PCI-DSS, ISO 27001)." },
            ],
        }),

        generateItemListSchema({
            id: "/services/mobile-app-development/#platformsList",
            name: "Mobile App Development Platforms",
            description: "Platform-specific mobile app development services for iOS, Android, cross-platform, hybrid, enterprise, and HarmonyOS.",
            items: [
                { name: "iOS App Development", description: "Swift, SwiftUI, App Store Optimization, and iCloud integration for premium Apple ecosystem experiences.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/ios-app-development-company" },
                { name: "Android App Development", description: "Kotlin, Jetpack Compose, Firebase, and Material Design for powerful Android applications.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/android-app-development-company" },
                { name: "Cross-Platform App Development", description: "React Native and Flutter development with 90%+ code reusability across iOS and Android.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/cross-platform-app-development-company" },
                { name: "Hybrid App Development", description: "Ionic and Cordova for quick-to-market web-based mobile applications.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/hybrid-app-development-services" },
                { name: "Enterprise Application Development", description: "Legacy integration, high security, and scalability for enterprise mobile solutions.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/enterprise-application-development-services" },
                { name: "HarmonyOS App Development", description: "Huawei HarmonyOS SDK, distributed architecture, and IoT-focused mobile applications.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/harmony-OS-app-development-services" },
            ],
        }),

        generateHowToSchema({
            name: "Our 6-Phase Agile Development Process",
            description: "A proven 6-phase agile methodology for building mobile apps that has delivered 300+ successful projects with a rigorous QA process and faster time-to-market.",
            steps: [
                { name: "Discovery & Strategy", text: "Stakeholder interviews, MoSCoW feature prioritization, competitive analysis, and technical roadmap creation. Timeline: Week 1-2.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/#step-discovery" },
                { name: "UI/UX Design", text: "Figma wireframes, interactive prototyping, usability testing, and design system creation. Timeline: Week 3-5.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/#step-design" },
                { name: "Development & Coding", text: "2-week agile sprints, 80%+ unit test coverage, CI/CD pipelines, and modular architecture implementation. Timeline: Week 6-16.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/#step-development" },
                { name: "Testing & QA", text: "Integration testing, UI automation with Appium, performance stress tests, and security validation. Timeline: Week 17-19.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/#step-testing" },
                { name: "Deployment & Launch", text: "App Store and Google Play submission, App Store Optimization (ASO), and beta testing via TestFlight. Timeline: Week 20-21.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/#step-deployment" },
                { name: "Maintenance & Support", text: "24/7 monitoring, 24-72 hour SLA for bug fixes, OS updates, performance optimization, and feature enhancements. Ongoing.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/#step-maintenance" },
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
        <main data-page-theme="purple" className="bg-white dark:bg-black" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileSchema) }}
            />
            <Hero />
            <ServiceOverview />
            <WhyChooseUs />
            <AppTypes />
            <Process />
            <Technologies />
            <SecurityAndSEO />
            <CTA />
        </main>
    );
}
