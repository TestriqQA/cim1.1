import dynamic from 'next/dynamic';
import Hero from '@/components/services/web-design-development/landing-pages/Hero';
import ServiceOverview from '@/components/services/web-design-development/landing-pages/ServiceOverview';

// Lazy load below-the-fold components
const WhyChooseUs = dynamic(() => import('@/components/services/web-design-development/landing-pages/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const SolutionTypes = dynamic(() => import('@/components/services/web-design-development/landing-pages/SolutionTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/web-design-development/landing-pages/Process'), {
    loading: () => <div className="py-20" />,
});
const TechStack = dynamic(() => import('@/components/services/web-design-development/landing-pages/TechStack'), {
    loading: () => <div className="py-20" />,
});
const UseCases = dynamic(() => import('@/components/services/web-design-development/landing-pages/UseCases'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/web-design-development/landing-pages/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'High-Converting Landing Pages | Web Design Services',
    description: 'Design and develop high-converting landing pages optimized for marketing campaigns, product launches, and lead generation. Boost your conversion rates today.',
    url: '/services/web-design-development/landing-pages',
    keywords: [
        'Landing Page Design',
        'Landing Page Development',
        'Conversion Rate Optimization',
        'Lead Generation Pages',
        'PPC Landing Pages',
    ],
    image: '/og-images/Landing.webp',
});

export default function LandingPagesPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Landing Page Design & Development',
        description: 'High-converting landing page design and development services.',
        urlPath: '/services/web-design-development/landing-pages',
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Web Design & Development', url: '/services/web-design-development' },
        { name: 'Landing Pages', url: '/services/web-design-development/landing-pages' },
    ]);

    return (
        <main className="bg-white dark:bg-black" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem", "--page-selection-bg": "#10b981" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
