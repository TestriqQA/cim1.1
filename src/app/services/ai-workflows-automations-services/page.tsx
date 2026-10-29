import dynamic from 'next/dynamic';
import Hero from '@/components/services/ai-workflows-automations-services/Hero';
import ServiceOverview from '@/components/services/ai-workflows-automations-services/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/ai-workflows-automations-services/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const TypesOfAutomations = dynamic(() => import('@/components/services/ai-workflows-automations-services/TypesOfAutomations'), {
    loading: () => <div className="py-20" />,
});
const IndustriesAndUseCases = dynamic(() => import('@/components/services/ai-workflows-automations-services/IndustriesAndUseCases'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/ai-workflows-automations-services/Process'), {
    loading: () => <div className="py-20" />,
});
const Technologies = dynamic(() => import('@/components/services/ai-workflows-automations-services/Technologies'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/ai-workflows-automations-services/CTA'), {
    loading: () => <div className="py-20" />,
});
const FAQ = dynamic(() => import('@/components/services/ai-workflows-automations-services/FAQ'), {
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
    generateFAQSchema,
    generateHowToSchema,
    generateNavigationSchema,
} from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'AI Workflow Automation Services | Agentic AI Agency',
    description: 'Transform fragmented operations into an intelligent engine. Custom AI Automation Agency building sophisticated Agentic Workflow Automations that think, adapt, and execute. significant efficiency gains, faster execution, significant cost savings, fewer errors, 1000+ workflows deployed, significant client savings.',
    url: '/services/ai-workflows-automations-services',
    keywords: [
        'AI Workflow Automation',
        'Business Process Automation',
        'AI Automation Services',
        'Intelligent Automation Solutions',
        'Agentic AI Agency',
        'Custom AI Workflows',
        'AI chatbot development',
    ],
    image: '/og-images/ai_workflow.webp',
});

export default function AIWorkflowsAutomationsPage() {
    const aiSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "AI Workflow Automation Services | Agentic AI Agency",
            description: "Transform fragmented operations into an intelligent engine. Custom AI Automation Agency building sophisticated Agentic Workflow Automations that think, adapt, and execute. significant efficiency gains, faster execution, significant cost savings, fewer errors, 1000+ workflows deployed, significant client savings.",
            urlPath: "/services/ai-workflows-automations-services",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/ai-workflows-automations-services/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/ai-workflows-automations-services/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/ai-workflows-automations-services/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "AI Workflows & Automations Services", url: "/services/ai-workflows-automations-services" },
        ], "https://www.cinuteinfomedia.com/services/ai-workflows-automations-services/#breadcrumb"),

        generateServiceSchema({
            name: "AI Workflow Automation Services",
            description: "Transform your fragmented operations into an intelligent engine. As a Custom AI Automation Agency, we don't just connect tools — we build sophisticated Agentic Workflow Automations that think, adapt, and execute. significant efficiency gains, faster execution, significant cost savings, fewer errors, 50+ industries served, 1000+ workflows deployed, significant client savings.",
            urlPath: "/services/ai-workflows-automations-services",
            serviceType: "AI Workflow Automation & Agentic AI Solutions",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Free AI audit and custom roadmap within 24 hours. Packages range from low-code automation setups to complex enterprise custom AI development. SOC2-compliant, predictive, and scalable.",
            },
        }),

        generateItemListSchema({
            id: "/services/ai-workflows-automations-services/#coreServicesList",
            name: "Core AI Automation Services",
            description: "Full-spectrum AI workflow automation from business process automation and AI chatbots to data reporting, content automation, document OCR, and custom AI solutions.",
            items: [
                { name: "Business Process Automation (BPA)", description: "End-to-end cycle automation from procurement to payroll achieving 70% cycle time reduction." },
                { name: "AI-Powered Chatbots & Assistants", description: "Context-aware AI agents resolving 80% of customer queries autonomously with natural language understanding." },
                { name: "Data & Reporting Automation", description: "Automated BI dashboards aggregating data from 50+ sources for real-time business intelligence." },
                { name: "Content & Marketing Automation", description: "AI-powered content repurposing transforming webinars into blog posts, social media, and email campaigns." },
                { name: "Document Processing & OCR", description: "Topical authority and entity extraction with high accuracy using intelligent document processing." },
                { name: "Custom AI Workflow Solutions", description: "Bespoke custom AI agents designed for unique business operations and complex workflow requirements." },
            ],
        }),

        generateFAQSchema([
            { question: "What are the benefits of AI workflow automation?", answer: "AI workflow automation reduces costs, minimizes human error, and accelerates execution, allowing teams to focus on strategy and high-value work instead of repetitive tasks." },
            { question: "How do I implement AI workflow automation in my business?", answer: "Start by identifying repetitive tasks, assess your current tech stack, and design a Human-in-the-Loop (HITL) system that combines AI efficiency with human oversight." },
            { question: "What is the difference between RPA and AI automation?", answer: "RPA follows strict rules and handles structured, repetitive tasks. AI automation understands context, handles unstructured data, and can make intelligent decisions." },
            { question: "How much does AI workflow automation cost?", answer: "Costs vary by complexity, ranging from low-code automation setups for simple workflows to complex enterprise custom AI development for large-scale operations." },
            { question: "What tools do you use for AI workflow automation?", answer: "We work with industry-leading tools including n8n, LangChain, UiPath (GenAI enhanced), Make.com, along with OpenAI, Anthropic, AWS, GCP, and Azure integrations." },
        ]),

        generateHowToSchema({
            name: "Our 6-Phase AI Automation Process",
            description: "A proven 6-phase methodology for building sophisticated AI workflow automations that deliver significant efficiency gains, significant cost savings, and fewer errors.",
            steps: [
                { name: "Process Analysis", text: "Deep-dive audit, process maps, and API-first strategy to identify automation opportunities. Timeline: 1-2 weeks.", url: "https://www.cinuteinfomedia.com/services/ai-workflows-automations-services/#step-analysis" },
                { name: "Workflow Design", text: "Blueprinting, ML model strategies, and architecture design for the automated workflow. Timeline: 2-3 weeks.", url: "https://www.cinuteinfomedia.com/services/ai-workflows-automations-services/#step-design" },
                { name: "AI Model Integration", text: "OpenAI, Anthropic, and Llama fine-tuning with custom prompting and LLM integration. Timeline: 3-6 weeks.", url: "https://www.cinuteinfomedia.com/services/ai-workflows-automations-services/#step-integration" },
                { name: "Construction", text: "Building automation pipes using n8n, Make.com, and custom Python code for production-grade workflows.", url: "https://www.cinuteinfomedia.com/services/ai-workflows-automations-services/#step-construction" },
                { name: "Testing & Optimization", text: "Stress-testing, real-time monitoring, and hallucination prevention to ensure reliability. Timeline: 1-2 weeks.", url: "https://www.cinuteinfomedia.com/services/ai-workflows-automations-services/#step-testing" },
                { name: "Deployment & Monitoring", text: "Go-live, production setup, team training, and ongoing support with SOC2-compliant monitoring. Timeline: 1 week.", url: "https://www.cinuteinfomedia.com/services/ai-workflows-automations-services/#step-deployment" },
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
        <main data-page-theme="orange" className="bg-white dark:bg-black" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aiSchema) }}
            />
            <Hero />
            <ServiceOverview />
            <WhyChooseUs />
            <TypesOfAutomations />
            <IndustriesAndUseCases />
            <Process />
            <Technologies />
            <FAQ />
            <CTA />
        </main>
    );
}
