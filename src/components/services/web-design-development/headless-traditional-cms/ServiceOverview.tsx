import {
    LayoutGrid,
    RefreshCw,
    TrendingUp,
    Users,
    FilePen,
    Server,
    Unplug,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const highlights = [
        {
            icon: FilePen,
            title: "Flexible Content Management",
            description: "Create, organize, and publish content with intuitive interfaces tailored to your team's workflow.",
        },
        {
            icon: Server,
            title: <Link href="/services/web-design-development/nodejs-backend" className="hover:text-[var(--accent-violet-text)] transition-colors">API-First Architecture</Link>,
            description: "Deliver content anywhere via REST or GraphQL APIs for true omnichannel experiences.",
        },
        {
            icon: Unplug,
            title: "Decoupled Freedom",
            description: "Use any frontend framework while keeping content centralized and structured for reuse.",
        },
        {
            icon: Users,
            title: "Real-time Collaboration",
            description: "Multiple editors working simultaneously with live previews and instant publishing.",
        },
        {
            icon: TrendingUp,
            title: "Scalable Infrastructure",
            description: "From small blogs to enterprise multi-site networks, scale without limitations.",
        },
        {
            icon: RefreshCw,
            title: "Future-Proof Content",
            description: "Structure content once, deliver everywhere - web, mobile, IoT, and beyond.",
        },
    ];

    return (
        <section
            className="py-16 md:py-20 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, #9333ea 1px, transparent 0)`,
                        backgroundSize: "48px 48px",
                    }}
                />
            </div>

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
                        <LayoutGrid className="w-4 h-4" aria-hidden="true" style={{ color: "#9333ea" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-violet-text)" }}>
                            Why CMS Matters
                        </span>
                    </div>

                    

                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        The{" "}
                        <span style={{ color: "var(--accent-violet-text)" }}>
                            Content Platform
                        </span>{" "}
                        Your Team Deserves
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Whether headless or traditional, a great CMS empowers your team to create,
                        manage, and deliver content efficiently - without technical bottlenecks.
                    </p>
                </div>

                {/* Highlights Grid: cards side by side share one size (md:auto-rows-fr);
                    on phones each card fits its own content. Hover: border in the
                    icon colour + 4px lift, nothing else. */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 md:auto-rows-fr gap-8">
                    {highlights.map((highlight, idx) => {
                        const Icon = highlight.icon;
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
                                    {highlight.title}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: "var(--secondary-text)" }}
                                >
                                    {highlight.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
