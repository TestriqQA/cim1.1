import Image from "next/image";
import {
    Zap,
    Shield,
    Globe,
    Code2,
    HeadphonesIcon,
    TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Zap,
            title: "Deep Experience",
            description:
                <>Our team brings deep combined expertise in <Link href="/services/web-design-development" className="hover:text-[var(--accent-cyan-text)] transition-colors underline underline-offset-2">web design and development</Link>, ensuring enterprise-grade solutions for every project.</>,
            gradient: "from-[#61dafb] to-[#00d4ff]",
        },
        {
            icon: Shield,
            title: "Vercel & AWS Partners",
            description:
                "As certified Vercel and AWS partners, we specialize in advanced Next.js SEO audit and optimization services that drive results.",
            gradient: "from-[#00d4ff] to-[#61dafb]",
        },
        {
            icon: Globe,
            title: "Top React Agency",
            description:
                "Ranked as a top React development agency for three consecutive years, delivering high-performance applications globally.",
            gradient: "from-[#61dafb] to-[#00d4ff]",
        },
        {
            icon: Code2,
            title: "Expert Maintenance",
            description:
                "Our Next.js maintenance and ongoing support services ensure your app stays updated with the latest security patches and features.",
            gradient: "from-[#00d4ff] to-[#61dafb]",
        },
        {
            icon: TrendingUp,
            title: "Performance Obsessed",
            description:
                "Our implementations consistently achieve near-perfect Lighthouse scores, focusing on Next.js speed optimization and Core Web Vitals.",
            gradient: "from-[#61dafb] to-[#00d4ff]",
        },
        {
            icon: HeadphonesIcon,
            title: "E-E-A-T Driven",
            description:
                <>We follow Google&apos;s <Link href="/blog/mastering-seo-organic-growth" className="hover:text-[var(--accent-cyan-text)] transition-colors underline underline-offset-2">E-E-A-T</Link> guidelines to ensure your platform is authoritative, trustworthy, and expert-led.</>,
            gradient: "from-[#00d4ff] to-[#61dafb]",
        },
    ];

    return (
        <section
            className="py-16 md:py-20 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background Elements */}

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
                        <Zap className="w-4 h-4" style={{ color: "var(--accent-cyan-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-cyan-text)" }}>
                            E-E-A-T Verified
                        </span>
                    </div>

                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Why Choose Our{" "}
                        <span
                            style={{ color: "var(--accent-cyan-text)" }}
                        >
                            React Development
                        </span>{" "}
                        Agency?
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Our Next.js development services leverage the latest JavaScript framework expertise to solve complex needs for disruptive startups and established brands. We maintain a track record of delivering rigorously tested applications globally.
                    </p>
                </div>

                {/* Reasons Grid: cards side by side share one size (md:auto-rows-fr);
                    on phones each card fits its own content. Hover: border in the
                    icon colour + 4px lift, nothing else. */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 md:auto-rows-fr gap-8 mb-10 md:mb-12">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;

                        return (
                            <div
                                key={idx}
                                className="p-6 md:p-8 rounded-2xl border border-[var(--border-color)] transition duration-200 ease-out hover:border-[#61dafb] hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:hover:translate-y-0"
                                style={{ backgroundColor: "var(--card-bg)" }}
                            >
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                                    style={{ background: "linear-gradient(135deg, #61dafb, #00d4ff)" }}
                                >
                                    <Icon className="w-7 h-7 text-black" aria-hidden="true" />
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

                {/* Testimonial: a plain card (1px border, no tint or top bar). */}
                <div
                    className="p-6 sm:p-8 md:p-12 rounded-3xl border border-[var(--border-color)] text-center"
                    style={{ backgroundColor: "var(--card-bg)" }}
                >
                    <div className="max-w-4xl mx-auto">
                        {/* 18px on phones: at 24px the quote ran 14 lines at 320px. */}
                        <p className="text-lg sm:text-2xl md:text-3xl font-medium mb-6 md:mb-8 italic" style={{ color: "var(--foreground)" }}>
                            &quot;Cinute InfoMedia developed our website using Next.js, which dramatically enhanced our SEO and page performance. This technical superiority has directly helped us secure major deals for our QA and testing services.&quot;
                        </p>
                        {/* Phones: logo on top, name and tagline centred below, so the text
                            gets the full width. From 640px: side by side. */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                            {/* The real logo instead of a "T" letter circle. The wordmark is
                                on white, so it sits on a white tile in both themes; the
                                name is written next to it, so the image is decorative. */}
                            <div className="h-12 px-3 rounded-xl bg-white flex items-center flex-shrink-0">
                                <Image
                                    src="/images/logos/testriq-qa-lab-logo.webp"
                                    alt=""
                                    width={88}
                                    height={24}
                                    className="h-6 w-auto"
                                />
                            </div>
                            <div className="text-center sm:text-left">
                                <p className="font-bold" style={{ color: "var(--foreground)" }}>Testriq QA Lab</p>
                                <p className="text-xs sm:text-sm" style={{ color: "var(--secondary-text)" }}>Trusted Software Testing Provider</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
