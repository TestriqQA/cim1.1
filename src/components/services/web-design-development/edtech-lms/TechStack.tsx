import { Code2, Video, Database, Cloud, Play, BarChart3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const technologies = [
        {
            category: "Frontend Frameworks",
            icon: Code2,
            items: [
                { name: <Link href="/services/web-design-development/nextjs-development-services" className="underline underline-offset-2 hover:underline">React/Next.js</Link>, description: "Fast, interactive apps", logos: ["/images/techstack_logos/react-logo.svg", "/images/techstack_logos/nextjs-logo.svg"] },
                { name: "TypeScript", description: "Type-safe development", logos: ["/images/techstack_logos/typescript-logo.svg"] },
                { name: <Link href="/services/mobile-app-development" className="underline underline-offset-2 hover:underline">React Native</Link>, description: "Mobile learning apps", logos: ["/images/techstack_logos/react-logo.svg"] },
            ],
        },
        {
            category: "Video & Streaming",
            icon: Video,
            items: [
                { name: "Mux", description: "Video infrastructure", logos: ["/images/techstack_logos/mux-logo.png"] },
                { name: "Cloudflare Stream", description: "Video delivery", logos: ["/images/techstack_logos/Cloudflare-logo.webp"] },
                { name: "Twilio", description: "Live video", logos: ["/images/techstack_logos/twilio-icon.webp"] },
            ],
        },
        {
            category: "Content Management",
            icon: Play,
            items: [
                { name: <Link href="/blog/headless-cms-sanity-nextjs-decoupled-frontends-2026" className="underline underline-offset-2 hover:underline">Sanity</Link>, description: "Headless CMS", logos: ["/images/techstack_logos/Sanity-square-logo.png"] },
                { name: <Link href="/services/web-design-development/contentful-headless-cms" className="underline underline-offset-2 hover:underline">Contentful</Link>, description: "Content platform", logos: ["/images/techstack_logos/Contentful-logo.webp"] },
                { name: <Link href="/services/web-design-development/strapi-headless-cms" className="underline underline-offset-2 hover:underline">Strapi</Link>, description: "Open-source CMS", logos: ["/images/techstack_logos/Strapi-logo.png"] },
            ],
        },
        {
            category: "Database & Backend",
            icon: Database,
            items: [
                { name: "PostgreSQL", description: "Relational database", logos: ["/images/techstack_logos/postgresql-logo.svg"] },
                { name: "MongoDB", description: "Document database", logos: ["/images/techstack_logos/mongodb-logo.svg"] },
                { name: "Redis", description: "Caching layer", logos: ["/images/techstack_logos/redis-logo.svg"] },
            ],
        },
        {
            category: "Analytics & Tracking",
            icon: BarChart3,
            items: [
                { name: "Mixpanel", description: "Product analytics", logos: ["/images/techstack_logos/mixpanel-logo.png"] },
                { name: "Segment", description: "Data pipeline", logos: ["/images/techstack_logos/Segment-logo.png"] },
                { name: "Hotjar", description: "User behavior", logos: ["/images/techstack_logos/Hotjar-logo.png"] },
            ],
        },
        {
            category: "Cloud Infrastructure",
            icon: Cloud,
            items: [
                { name: "AWS", description: "Scalable cloud", logos: ["/images/techstack_logos/aws-logo.png"] },
                { name: "Vercel", description: "Edge deployment", logos: ["/images/techstack_logos/vercel-logo.webp"] },
                { name: <Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:underline">Cloudflare</Link>, description: "Global CDN", logos: ["/images/techstack_logos/Cloudflare-logo.webp"] },
            ],
        },
    ];

    return (
        <section
            className="py-16 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "var(--brand-purple-text)" }}>EdTech</span> Tech Stack
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        Modern technologies for scalable, engaging learning experiences.
                    </p>
                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{ background: "linear-gradient(90deg, #a855f7, #ec4899)" }}
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
                                        style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
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
                                                    style={{ backgroundColor: "#a855f7" }}
                                                />
                                                <div className="min-w-0">
                                                    <p className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>
                                                        {item.name}
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
