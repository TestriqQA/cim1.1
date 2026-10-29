import { Code2, Database, Shield, Cloud, RefreshCw, Puzzle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const technologies = [
        {
            category: "Frontend Frameworks",
            icon: Code2,
            items: [
                { name: "React/Next.js", description: "SSR & static generation for SEO", logos: ["/images/techstack_logos/react-logo.svg", "/images/techstack_logos/nextjs-logo.svg"] },
                { name: "Vue.js/Nuxt", description: "Progressive dashboard framework", logos: ["/images/techstack_logos/vuejs-logo.svg", "/images/techstack_logos/nuxt-logo.png"] },
                { name: "Tailwind CSS", description: "Rapid UI development", logos: ["/images/techstack_logos/tailwindcss-logo.svg"] },
            ],
        },
        {
            category: "Backend & APIs",
            icon: Database,
            items: [
                { name: "Node.js (Express/NestJS)", description: "Event-driven architecture", logos: ["/images/techstack_logos/nodejs-logo.svg"] },
                { name: "Python (FastAPI/Django)", description: "Data-intensive apps", logos: ["/images/techstack_logos/python-logo.svg", "/images/techstack_logos/fastapi-logo.webp"] },
                { name: "PostgreSQL", description: "JSONB support & reliability", logos: ["/images/techstack_logos/postgresql-logo.svg"] },
            ],
        },
        {
            category: "Authentication & Security",
            icon: Shield,
            items: [
                { name: "Auth0/Clerk", description: "Identity management with SSO", logos: ["/images/techstack_logos/auth0-logo.png", "/images/techstack_logos/clerk-logo.png"] },
                { name: "OAuth 2.0 / SAML", description: "Federated authentication", logos: [] },
                { name: "JWT Tokens", description: "Stateless session management", logos: [] },
            ],
        },
        {
            category: "Cloud Infrastructure",
            icon: Cloud,
            items: [
                { name: "AWS/GCP/Azure", description: "Managed cloud services", logos: ["/images/techstack_logos/aws-logo.png", "/images/techstack_logos/googlecloud-logo.svg", "/images/techstack_logos/azure-logo.svg"] },
                { name: "Vercel/Netlify", description: "Edge deployment", logos: ["/images/techstack_logos/vercel-logo.webp", "/images/techstack_logos/netlify-logo.svg"] },
                { name: "Cloudflare", description: "CDN & DDoS protection", logos: ["/images/techstack_logos/Cloudflare-logo.webp"] },
            ],
        },
        {
            category: "DevOps & CI/CD",
            icon: RefreshCw,
            items: [
                { name: "GitHub Actions", description: "Automated workflows", logos: ["/images/techstack_logos/Github-actions-logo.png"] },
                { name: "Terraform", description: "Infrastructure-as-code", logos: ["/images/techstack_logos/terraform-logo.webp"] },
                { name: "Datadog/Sentry", description: "Monitoring & error tracking", logos: ["/images/techstack_logos/datadog-logo.webp", "/images/techstack_logos/sentry-logo.svg"] },
            ],
        },
        {
            category: "Integrations",
            icon: Puzzle,
            items: [
                { name: "Stripe/Paddle", description: "Subscription management", logos: ["/images/techstack_logos/Stripe-logo.png", "/images/techstack_logos/paddle-logo.png"] },
                { name: "SendGrid/Twilio", description: "Transactional emails & SMS", logos: ["/images/techstack_logos/SendGrid-logo.png", "/images/techstack_logos/twilio-icon.webp"] },
                { name: "Segment/Mixpanel", description: <><Link href="/blog/category/digital-marketing" className="hover:underline text-inherit">User behavior tracking</Link></>, logos: ["/images/techstack_logos/Segment-logo.png", "/images/techstack_logos/mixpanel-logo.png"] },
            ],
        },
    ];

    const getLink = (name: string) => {
        if (name === "React/Next.js") return "/services/web-design-development/nextjs-development-services";
        if (name === "Node.js (Express/NestJS)") return "/services/web-design-development/nodejs-backend";
        if (name === "Python (FastAPI/Django)") return "/services/web-design-development/python-django";
        if (name === "Stripe/Paddle") return "/services/web-design-development/ecommerce-development-company";
        return null;
    };

    return (
        <section
            className="py-16 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "#008ac1" }}>Modern</span> Technology Stack
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        We use proven, scalable technologies that accelerate development and ensure long-term maintainability.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #008ac1, #bc3feb)",
                        }}
                    />
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.map((tech, idx) => {
                        const Icon = tech.icon;
                        return (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{
                                            background: "linear-gradient(135deg, #008ac1, #bc3feb)",
                                        }}
                                    >
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>
                                        {tech.category}
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {tech.items.map((item, iidx) => (
                                        <div key={iidx} className="flex items-center justify-between gap-4">
                                            <div className="flex items-start gap-3 flex-1 min-w-0">
                                                <div
                                                    className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                                                    style={{ backgroundColor: "#008ac1" }}
                                                />
                                                <div className="min-w-0">
                                                    <p className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>
                                                        {getLink(item.name) ? (
                                                            <Link href={getLink(item.name)!} className="hover:underline">
                                                                {item.name}
                                                            </Link>
                                                        ) : (
                                                            item.name
                                                        )}
                                                    </p>
                                                    <p className="text-xs" style={{ color: "var(--secondary-text)" }}>
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                            {item.logos.length > 0 && (
                                                <div className="flex items-center gap-2 flex-shrink-0">
                                                    {item.logos.map((logo, lidx) => (
                                                        <div
                                                            key={lidx}
                                                            className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                                                            style={{
                                                                backgroundColor: "var(--background)",
                                                                border: "1px solid var(--border-color)",
                                                            }}
                                                        >
                                                            <Image
                                                                src={logo}
                                                                alt={`${item.name} logo`}
                                                                width={32}
                                                                height={32}
                                                                className="object-contain"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
