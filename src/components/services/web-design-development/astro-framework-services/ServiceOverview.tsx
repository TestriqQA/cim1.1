import type { CSSProperties } from "react";
import {
    ArrowRightLeft,
    BookOpen,
    FileText,
    LayoutGrid,
    Megaphone,
    ShoppingBag,
    Blocks,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const services = [
        {
            icon: Megaphone,
            title: "Marketing & Landing Pages",
            description: "High-converting Astro development for marketing landing pages that load instantly and rank higher. Perfect for product launches and lead generation.",
            gradient: "from-violet-600 to-purple-400",
            accent: "var(--color-violet-600, #7c3aed)",
        },
        {
            icon: FileText,
            title: "Content-Driven Websites",
            description: <>Best Astro agency for high-performance <Link href="/services/web-design-development/headless-traditional-cms" className="text-[var(--accent-orange-text)] hover:underline underline underline-offset-2">blogs, portfolios, and publishing platforms</Link> optimized for SEO and reader experience. Built-in MDX support.</>,
            gradient: "from-orange-500 to-amber-400",
            accent: "var(--color-orange-500, #f97316)",
        },
        {
            icon: ShoppingBag,
            title: "E-commerce Storefronts",
            description: <>Fast Astro framework for <Link href="/services/web-design-development/ecommerce-development-company" className="text-[var(--accent-orange-text)] hover:underline underline underline-offset-2">ecommerce websites</Link> with product catalogs and storefronts that convert. Integrate with Shopify or headless CMSs.</>,
            gradient: "from-pink-500 to-rose-400",
            accent: "var(--color-pink-500, #ec4899)",
        },
        {
            icon: BookOpen,
            title: "Documentation Sites",
            description: "Astro framework for SaaS documentation sites, developer portals, and knowledge bases with excellent search, versioning, and navigation.",
            gradient: "from-blue-500 to-cyan-400",
            accent: "var(--color-blue-500, #3b82f6)",
        },
        {
            icon: Blocks,
            title: "Multi-Framework Projects",
            description: "Astro integration with React and Vue components in a single project using Astro islands architecture. Build hybrid applications seamlessly.",
            gradient: "from-emerald-500 to-teal-400",
            accent: "var(--color-emerald-500, #10b981)",
        },
        {
            icon: ArrowRightLeft,
            title: "Migration to Astro",
            description: <>Astro migration services from <Link href="/services/web-design-development/nextjs-development-services" className="text-[var(--accent-orange-text)] hover:underline underline underline-offset-2">Next.js</Link> or Gatsby to reduce bundle sizes by 90% and improve <Link href="/blog/web-performance-optimization-speed" className="text-[var(--accent-orange-text)] hover:underline underline underline-offset-2">Core Web Vitals</Link> instantly.</>,
            gradient: "from-indigo-500 to-violet-400",
            accent: "var(--color-indigo-500, #6366f1)",
        },
    ];

    return (
        <section
            className="py-16 md:py-20 relative overflow-hidden transition-colors duration-300"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-10 md:mb-12">
                    <div className="inline-block mb-4">
                        <span
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold leading-none"
                            style={{
                                background: "linear-gradient(135deg, rgba(255, 93, 1, 0.1), rgba(255, 133, 52, 0.1))",
                                color: "var(--accent-orange-text)",
                            }}
                        >
                            <LayoutGrid aria-hidden="true" className="flex-shrink-0" style={{ width: "1.15em", height: "1.15em" }} />
                            Our Service
                        </span>
                    </div>
                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        What We{" "}
                        <span style={{ color: "var(--accent-orange-text)" }}>
                            Build with Astro
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        From simple landing pages to complex multi-framework applications, we leverage Astro component-based architecture and modern hydration strategies in web development for exceptional performance.
                    </p>
                </div>

                {/* Cards side by side share one size (phones: each fits its content).
                    Hover: the border turns the card's own icon colour and the card
                    lifts 4px (colour change only for reduced-motion users). */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 md:auto-rows-fr gap-8">
                    {services.map((service, idx) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={idx}
                                className="p-6 md:p-8 rounded-3xl border border-[var(--border-color)] bg-card transition duration-200 ease-out hover:border-[var(--card-accent)] hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:hover:translate-y-0"
                                style={{ "--card-accent": service.accent } as CSSProperties}
                            >
                                <div className="mb-6">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.gradient}`}>
                                        <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {service.title}
                                </h3>
                                <p className="leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
