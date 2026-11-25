import {
    ArrowRightLeft,
    Target,
    Trophy,
    Blocks,
    Server,
    Gauge,
    HeartHandshake,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Blocks,
            title: "Multi-Platform Expertise",
            description:
                <>Deep experience across <Link href="/services/web-design-development/wordpress-development-services" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">WordPress</Link>, <Link key="link-1" href="/services/web-design-development/drupal-cms" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">Drupal</Link>, <Link key="link-2" href="/services/web-design-development/contentful-headless-cms" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">Contentful</Link>, <Link key="link-3" href="/services/web-design-development/strapi-headless-cms" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">Strapi</Link>, and <Link href="/blog/headless-cms-sanity-nextjs-decoupled-frontends-2026" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">Sanity</Link>. We know the strengths of each platform.</>,
        },
        {
            icon: Target,
            title: "Content Strategy Focus",
            description:
                "We design systems for how your team actually works - not just what technology allows. Content-first approach.",
        },
        {
            icon: Server,
            title: "API-First Mindset",
            description:
                "Architect for omnichannel delivery from day one. Your content ready for web, mobile, IoT, and beyond.",
        },
        {
            icon: ArrowRightLeft,
            title: "Migration Specialists",
            description:
                "Safely move millions of content pieces without downtime. Proven migration scripts and validation processes.",
        },
        {
            icon: Gauge,
            title: "Performance Obsessed",
            description:
                "Optimized delivery with edge caching, CDN integration, and smart content preloading strategies.",
        },
        {
            icon: HeartHandshake,
            title: "Long-term Partnership",
            description:
                "Ongoing maintenance, security updates, and feature development. We grow with your content needs.",
        },
    ];

    return (
        <section
            className="py-16 md:py-20 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <Trophy className="w-4 h-4" aria-hidden="true" style={{ color: "#9333ea" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-violet-text)" }}>
                            Why Work With Us
                        </span>
                    </div>

                    

                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Your{" "}
                        <span style={{ color: "var(--accent-violet-text)" }}>
                            CMS
                        </span>{" "}
                        Experts
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We specialize in building content management solutions that
                        empower your team and scale with your business.
                    </p>
                </div>

                {/* Reasons Grid: cards side by side share one size (md:auto-rows-fr);
                    on phones each card fits its own content. Hover: border in the
                    icon colour + 4px lift, nothing else. */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 md:auto-rows-fr gap-8">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;

                        return (
                            <div
                                key={idx}
                                className="p-6 md:p-8 rounded-2xl border border-[var(--border-color)] transition duration-200 ease-out hover:border-[#9333ea] hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:hover:translate-y-0"
                                style={{ backgroundColor: "var(--card-bg)" }}
                            >
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                                    style={{ background: "linear-gradient(135deg, #9333ea, #7e22ce)" }}
                                >
                                    <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2"
                                    style={{ color: "var(--foreground)" }}
                                >
                                    {reason.title}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: "var(--secondary-text)" }}
                                >
                                    {reason.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
