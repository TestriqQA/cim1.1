import type { CSSProperties } from "react";
import Link from "next/link";
import { Trophy, Gauge, TrendingUp, ShieldCheck, Smartphone, Network, BarChart3 } from "lucide-react";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Gauge,
            title: "Lightning-Fast Performance",
            description: "Sub-2-second load times are non-negotiable. Our mobile-responsive ecommerce website design ensures your store passes Core Web Vitals with flying colors. We optimize every script and image, delivering speed that boosts SEO rankings and keeps customers engaged.",
            color: "from-[#008ac1] to-[#00b5ca]",
            iconColor: "#008ac1",
        },
        {
            icon: TrendingUp,
            title: "Proven CRO Expertise",
            description: <>Stop leaving money on the table. Our <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:underline text-[var(--accent-amber-text)]">Ecommerce conversion rate optimization</Link> (CRO) specialists analyze user behavior to craft friction-free paths to purchase. We’ve helped fintech and retail clients achieve 40%+ lifts in checkout completion through data-driven design.</>,
            color: "from-[#fab900] to-[#ee6500]",
            iconColor: "#fab900",
        },
        {
            icon: ShieldCheck,
            title: "PCI-DSS Compliance & Security",
            description: "Security is our top priority. We implement bank-grade encryption and specific Ecommerce security and performance tuning. Your customers' data is protected by rigorous compliance standards, building the Trustworthiness essential for modern transactions.",
            color: "from-[#00efd6] to-[#00b5ca]",
            iconColor: "#00efd6",
        },
        {
            icon: Smartphone,
            title: "Mobile-First Commerce",
            description: "With 73% of sales happening on mobile, we adopt a mobile-first approach. We build thumb-friendly interfaces and User experience (UX) design for online stores that function flawlessly on any device, ensuring you never miss a sale on the go.",
            color: "from-[#bc3feb] to-[#fab900]",
            iconColor: "#bc3feb",
        },
        {
            icon: Network,
            title: "Scalable Architecture",
            description: "Prepare for your next big launch. Our Ecommerce Scalability solutions are built to handle Black Friday traffic spikes without a glitch. We use cloud-native architectures that grow with your business, from startup to enterprise.",
            color: "from-[#008ac1] to-[#bc3feb]",
            iconColor: "#008ac1",
        },
        {
            icon: BarChart3,
            title: "Revenue Analytics",
            description: <>Make informed decisions with custom <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:underline text-[var(--accent-orange-text)]">Ecommerce analytics</Link> and reporting services. We integrate advanced dashboards that track CLTV, AOV, and Product Information Management (PIM) metrics, giving you full visibility into your store’s financial health.</>,
            color: "from-[#ee6500] to-[#fab900]",
            iconColor: "#ee6500",
        },
    ];

    // Google's "good" thresholds for the three Core Web Vitals (LCP, INP, CLS)
    const vitals = [
        { label: "Loading", abbr: "LCP", name: "Largest Contentful Paint", value: "< 2.5s" },
        { label: "Responsiveness", abbr: "INP", name: "Interaction to Next Paint", value: "< 200ms" },
        { label: "Visual stability", abbr: "CLS", name: "Cumulative Layout Shift", value: "< 0.1" },
    ];

    return (
        <section
            className="py-16 md:py-20 transition-colors duration-300"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(0, 181, 202, 0.05)",
                            borderColor: "rgba(0, 181, 202, 0.2)",
                        }}
                    >
                        <Trophy className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-cyan-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-cyan-text)" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Why <span style={{ color: "var(--accent-cyan-text)" }}>High-Growth Brands</span> Choose Us
                    </h2>

                    <p className="text-lg sm:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Experience High Availability & Sustained Growth with Proven Experts
                    </p>
                </div>

                {/* Bento grid (website-type pages): a lead card two rows tall, small
                    tiles and wide tiles. lg: [1 2 3] / [1 4 4] / [5 5 6]; md: 1 and 6
                    full width; phones: one column. Hover as everywhere: the border turns
                    the tile's own colour and the card lifts 4px; no shadow. */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
                        const isLead = idx === 0;
                        const isWide = idx === 3 || idx === 4;
                        const placement = isLead
                            ? "md:col-span-2 lg:col-span-1 lg:row-span-2"
                            : isWide
                                ? "lg:col-span-2"
                                : idx === reasons.length - 1
                                    ? "md:col-span-2 lg:col-span-1"
                                    : "";
                        return (
                            <div
                                key={idx}
                                className={`flex flex-col p-6 md:p-8 rounded-2xl border border-[var(--border-color)] transition duration-200 ease-out hover:border-[var(--card-accent)] hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:hover:translate-y-0 ${placement}`}
                                style={{
                                    backgroundColor: isLead
                                        ? `color-mix(in srgb, ${reason.iconColor} 6%, var(--card-bg))`
                                        : "var(--card-bg)",
                                    "--card-accent": reason.iconColor,
                                } as CSSProperties}
                            >
                                <div className={`${isLead ? "w-20 h-20" : "w-16 h-16"} rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${reason.color}`}>
                                    <Icon className={`${isLead ? "w-10 h-10" : "w-8 h-8"} text-white`} aria-hidden="true" />
                                </div>

                                {/* Lead card, from 1024px (where it is two rows tall and had a
                                    190–256px empty band): Google's "good" Core Web Vitals limits,
                                    the standard the card's text promises to pass. INP replaced FID
                                    in March 2024. Below 1024px the card fits its text, so no panel.
                                    Rows are 12px in the 223px-wide card at 1024–1279 so
                                    "Responsiveness (INP)" stays on one line; 14px from 1280. */}
                                {isLead && (
                                    <div
                                        className="hidden lg:block mb-6 rounded-2xl border border-[var(--border-color)] px-4 py-3"
                                        style={{ backgroundColor: "var(--card-bg)" }}
                                    >
                                        <p className="text-sm font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                                            Core Web Vitals we build to
                                        </p>
                                        <dl className="divide-y divide-[var(--border-color)]">
                                            {vitals.map((vital) => (
                                                <div key={vital.abbr} className="flex items-baseline justify-between gap-3 py-2">
                                                    <dt className="text-xs xl:text-sm" style={{ color: "var(--secondary-text)" }}>
                                                        {vital.label} (<abbr title={vital.name} className="no-underline">{vital.abbr}</abbr>)
                                                    </dt>
                                                    <dd className="text-xs xl:text-sm font-bold whitespace-nowrap" style={{ color: "var(--accent-cyan-text)" }}>
                                                        {vital.value}
                                                    </dd>
                                                </div>
                                            ))}
                                        </dl>
                                    </div>
                                )}

                                {/* Text sits at the foot of every tile, so a tile taller than its
                                    content keeps the extra space between icon and title */}
                                <div className="mt-auto">
                                    <h3 className={`${isLead ? "text-2xl md:text-3xl" : "text-xl"} font-bold mb-3`} style={{ color: "var(--foreground)" }}>
                                        {reason.title}
                                    </h3>
                                    <p className={isLead || isWide ? "text-base" : "text-sm"} style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
