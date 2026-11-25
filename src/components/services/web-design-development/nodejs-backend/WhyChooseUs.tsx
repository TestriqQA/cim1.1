import {
    Award,
    Zap,
    Shield,
    Users,
    HeadphonesIcon,
    TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Award,
            title: "Senior Engineers Only",
            description:
                "Your project is handled by experienced backend engineers building production systems.",
        },
        {
            icon: Zap,
            title: <Link href="/services/seo-services/technical-seo-services" className="hover:text-[#339933] transition-colors">Performance First</Link>,
            description:
                "Every API we build is optimized for speed. We obsess over response times and throughput.",
        },
        {
            icon: Shield,
            title: "Security Focused",
            description:
                "Security isn't an afterthought. We implement best practices from day one.",
        },
        {
            icon: Users,
            title: "Collaborative Process",
            description:
                "We work alongside your team with clear communication and transparent progress.",
        },
        {
            icon: HeadphonesIcon,
            title: "Ongoing Support",
            description:
                "We don't disappear after launch. Ongoing maintenance and support as you scale.",
        },
        {
            icon: TrendingUp,
            title: "Built to Scale",
            description:
                "Architecture that grows with your business - from MVP to millions of users.",
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
                        <Zap className="w-4 h-4" aria-hidden="true" style={{ color: "#339933" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-green-text)" }}>
                            Why Work With Us
                        </span>
                    </div>

                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Your{" "}
                        <span style={{ color: "var(--accent-green-text)" }}>
                            Backend
                        </span>{" "}
                        Partners
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We build backends that power successful products,
                        not just check boxes.
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
                                className="p-6 md:p-8 rounded-2xl border border-[var(--border-color)] transition duration-200 ease-out hover:border-[#339933] hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:hover:translate-y-0"
                                style={{ backgroundColor: "var(--card-bg)" }}
                            >
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                                    style={{ background: "linear-gradient(135deg, #339933, #215732)" }}
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
