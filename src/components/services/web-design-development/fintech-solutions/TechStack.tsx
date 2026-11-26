import Link from "next/link";
import Image from "next/image";
import { Layers, Server, Link2, Database, Plug, Cloud, MonitorSmartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { isValidElement } from "react";
import type { ReactNode } from "react";
import { techLogo } from "@/components/services/web-design-development/techLogos";

const techHeader: TechHeader = {
    title: (
        <>
            <span style={{ color: "var(--accent-sky-text)" }}>FinTech</span> Intelligence Stack
        </>
    ),
    intro: "Secure, low-latency technologies built for the future of finance.",
};

// In five categories the tool was in the small line and its role in the bold name
// ("Fast & Interactive" / "React, Next.js"); the two are swapped so the bold name is the
// tool, as in every other tech stack. Link names carry a plain label for the logo alt.
const technologies: TechCategory[] = [
    {
        category: "Core Banking & Backend",
        icon: Server,
        items: [
            { name: <Link href="/services/web-design-development/nodejs-backend" className="hover:underline">Node.js/Go</Link>, label: "Node.js/Go", description: "High-concurrency systems", logos: ["/images/techstack_logos/nodejs-logo.svg", "/images/techstack_logos/go-logo-new.png"] },
            { name: "Java/Spring", description: "Enterprise services", logos: ["/images/techstack_logos/java-logo.svg", "/images/techstack_logos/spring-logo.svg"] },
            { name: <Link href="/services/web-design-development/python-django" className="hover:underline">Python</Link>, label: "Python", description: "Data analysis & AI", logos: ["/images/techstack_logos/python-logo.svg"] },
        ],
    },
    {
        category: "Frontend & Terminals",
        icon: MonitorSmartphone,
        items: [
            { name: "React", url: "/services/web-design-development/nextjs-development-services", logos: ["/images/techstack_logos/react-logo.svg"] },
            { name: "Next.js", url: "/services/web-design-development/nextjs-development-services", description: "Fast & Interactive", logos: ["/images/techstack_logos/nextjs-logo.svg"] },
            { name: "TypeScript", description: "Type Safety", logos: ["/images/techstack_logos/typescript-logo.svg"] },
            { name: "Electron (Trading)", description: "Desktop Apps", logos: ["/images/techstack_logos/electron-logo.png"] },
        ],
    },
    {
        category: "Blockchain & Web3",
        icon: Link2,
        items: [
            { name: "Solidity, Rust", description: "Smart Contracts", logos: ["/images/techstack_logos/solidity-logo.png", "/images/techstack_logos/rust-logo.png"] },
            { name: "Ethers.js, Wagmi", description: "Web3 Integration", logos: ["/images/techstack_logos/Ethersjs-logo.webp", "/images/techstack_logos/wagmi.svg"] },
            { name: "Chainlink", description: "Oracles", logos: ["/images/techstack_logos/chainlink-link-logo.png"] },
        ],
    },
    {
        category: "Data & Security",
        icon: Database,
        items: [
            { name: "TimescaleDB", description: "Time-Series", logos: ["/images/techstack_logos/timescaledb-logo.webp"] },
            { name: "Snowflake", description: "Warehousing", logos: ["/images/techstack_logos/snowflake-logo.png"] },
            { name: "OAuth 2.0, JWT", description: "Security", logos: ["/images/techstack_logos/auth0-logo.png", "/images/techstack_logos/jwt-logo.webp"] },
        ],
    },
    {
        category: "FinTech APIs",
        icon: Plug,
        items: [
            { name: "Plaid, Yapily", description: "Banking", logos: ["/images/techstack_logos/plaid-logo-new.png", "/images/techstack_logos/yapily-logo.svg"] },
            { name: "Stripe, Adyen", description: "Payments", logos: ["/images/techstack_logos/Stripe-logo.png", "/images/techstack_logos/Adyen-Logo.png"] },
            { name: "Polygon.io", description: "Market Data", logos: ["/images/techstack_logos/Polygon-logo.webp"] },
        ],
    },
    {
        category: "Cloud & Compliance",
        icon: Cloud,
        items: [
            { name: "AWS FinServ", description: "Compliant Cloud", logos: ["/images/techstack_logos/aws-logo.png"] },
            { name: "Docker, K8s", description: "Containers", logos: ["/images/techstack_logos/docker-logo.svg", "/images/techstack_logos/K8s-logo.png"] },
            { name: "Cloudflare", description: "Edge Security", logos: ["/images/techstack_logos/Cloudflare-logo.webp"] },
        ],
    },
];

const techStats: TechStats = null;

type TechHeader = { title: ReactNode; intro: ReactNode };
type Tool = {
    name: ReactNode;
    label?: string;
    url?: string;
    description?: ReactNode;
    logos?: string[];
    icon?: LucideIcon;
    // no longer used: dark logos are inverted in dark mode instead (techLogos.ts)
    lightTile?: boolean;
};
type TechCategory = {
    category: string;
    description?: string;
    icon: LucideIcon;
    layout?: "wide" | "small" | "last";
    items: Tool[];
};
type TechStats = { title: string; icon: LucideIcon; items: { value: string; label: string }[] } | null;

export default function TechStack() {
    // Category cards with big logos (user, 26 Nov 2026: "Category cards, big logos"): each
    // tool is a big logo tile with its name under it; its short description shows on hover
    // (title) and is read out by screen readers. A tool whose name linked to its page
    // links from the whole tool.
    const nameOf = (item: Tool) => (typeof item.name === "string" ? item.name : item.label ?? "");
    const hrefOf = (item: Tool) =>
        item.url ?? (isValidElement<{ href?: string }>(item.name) ? item.name.props.href : undefined);
    const textOf = (node: ReactNode): string =>
        typeof node === "string" || typeof node === "number"
            ? String(node)
            : Array.isArray(node)
              ? node.map(textOf).join("")
              : isValidElement<{ children?: ReactNode }>(node)
                ? textOf(node.props.children)
                : "";
    // "AWS/GCP/Azure" and "OpenStreetMap" have no space to wrap at in a narrow column, so
    // allow a break after each "/" and inside long joined words of 12+ letters (used only
    // when it doesn't fit; short ones like "NestJS" and "FastAPI" stay whole)
    const breakable = (name: string) =>
        name
            .split(/(?<=\/)|(?<=(?:^|[\s(])(?=[A-Za-z]{12,})[A-Za-z]*[a-z])(?=[A-Z])/)
            .flatMap((part, i, all) => (i < all.length - 1 ? [part, <wbr key={i} />] : [part]));

    // Tool columns follow the card's own width (container query) and the tool count, so
    // rows come out even: 3 tools = one row of 3, 4 = 2×2 (one row of 4 on wide cards),
    // 6 = 3×2, 2 = one row of 2. On narrow cards 3 tools are 2 + 1 centred.
    const toolGrid = (count: number) =>
        count === 4
            ? "grid-cols-2 @[24rem]:grid-cols-4"
            : count === 2
              ? "grid-cols-2"
              : "grid-cols-2 @[17.5rem]:grid-cols-3";

    // Tiles in the page colour, no white (user: "remove the white background from logos").
    // Logos come from techLogos.ts: copies with their baked-in white background removed,
    // and dark ones (Django, Sentry...) inverted in dark mode so they still show.
    const tileClass =
        "w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-[var(--background)] border border-[var(--border-color)] transition-colors duration-200 ease-out motion-reduce:transition-none";
    const invertDark = "[[data-theme=dark]_&]:[filter:invert(1)_hue-rotate(180deg)]";
    const logoImg = (path: string, size: number, sizeClass: string) => {
        const logo = techLogo(path);
        return (
            <Image
                key={path}
                src={logo.src}
                alt=""
                width={size}
                height={size}
                className={`${sizeClass} object-contain ${logo.invert === "dark" ? invertDark : ""}`}
            />
        );
    };

    return (
        <section
            className="py-16 md:py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "color-mix(in srgb, #0ea5e9 5%, transparent)",
                            borderColor: "color-mix(in srgb, #0ea5e9 20%, transparent)",
                        }}
                    >
                        <Layers className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-sky-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-sky-text)" }}>
                            Our Tech Stack
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        {techHeader.title}
                    </h2>

                    <p className="text-lg sm:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        {techHeader.intro}
                    </p>
                </div>

                {/* Category cards (website-type pages): 3 across from 1024px, 2 from 768px,
                    1 on phones. No auto-rows-fr: rows size to their own content. */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.map((tech) => {
                        const Icon = tech.icon;
                        return (
                            <div
                                key={tech.category}
                                className="@container p-6 md:p-8 rounded-2xl border border-[var(--border-color)] transition duration-200 ease-out hover:border-[#0ea5e9] hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:hover:translate-y-0"
                                style={{ backgroundColor: "var(--card-bg)" }}
                            >
                                <div className={`flex items-center gap-3 ${tech.description ? "mb-2" : "mb-6"}`}>
                                    {/* The button shade, so the white icon passes 3:1 */}
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ background: "linear-gradient(135deg, #006d97, #00557a)" }}
                                    >
                                        <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>
                                        {tech.category}
                                    </h3>
                                </div>
                                {tech.description && (
                                    <p className="text-sm mb-6" style={{ color: "var(--secondary-text)" }}>
                                        {tech.description}
                                    </p>
                                )}

                                {/* Tools: a big logo tile (a related icon when there is no product
                                    logo; a tool with several products shows them together in one
                                    tile) with the name under it */}
                                <ul className={`grid gap-x-3 gap-y-5 ${toolGrid(tech.items.length)}`}>
                                    {tech.items.map((item, iidx) => {
                                        const ToolIcon = item.icon;
                                        const logos = item.logos ?? [];
                                        const name = nameOf(item);
                                        const href = hrefOf(item);
                                        const about = item.description ? textOf(item.description) : "";
                                        const body = (
                                            <>
                                                <span
                                                    className={`${tileClass} ${href ? "group-hover:border-[#0ea5e9] group-focus-visible:border-[#0ea5e9]" : ""}`}
                                                    aria-hidden="true"
                                                >
                                                    {logos.length === 1 ? (
                                                        logoImg(logos[0], 40, "w-10 h-10")
                                                    ) : logos.length > 1 ? (
                                                        <span className={`flex flex-wrap items-center justify-center gap-1 ${logos.length === 2 ? "w-14" : "w-13"}`}>
                                                            {logos.map((logo) => logoImg(logo, 26, logos.length === 2 ? "w-6.5 h-6.5" : "w-6 h-6"))}
                                                        </span>
                                                    ) : (
                                                        ToolIcon && <ToolIcon className="w-8 h-8" style={{ color: "var(--accent-sky-text)" }} />
                                                    )}
                                                </span>
                                                <span
                                                    className={`text-xs @[20rem]:text-sm font-semibold leading-snug break-words ${href ? "group-hover:underline" : ""}`}
                                                    style={{ color: "var(--foreground)" }}
                                                >
                                                    {breakable(name)}
                                                    {about && <span className="sr-only">: {about}</span>}
                                                </span>
                                            </>
                                        );
                                        const toolClass = "flex flex-col items-center gap-2 text-center min-w-0";
                                        return (
                                            <li
                                                key={iidx}
                                                title={about || undefined}
                                                className="min-w-0 last:odd:col-span-2 @[17.5rem]:last:odd:col-span-1"
                                            >
                                                {href ? (
                                                    <Link
                                                        href={href}
                                                        className={`${toolClass} group rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4`}
                                                    >
                                                        {body}
                                                    </Link>
                                                ) : (
                                                    <div className={toolClass}>{body}</div>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}

                    {/* The section's own quality targets, as one more card in the grid */}
                    {techStats && (
                        <div
                            className="p-6 md:p-8 rounded-2xl border border-[var(--border-color)]"
                            style={{ backgroundColor: "var(--card-bg)" }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{ background: "linear-gradient(135deg, #006d97, #00557a)" }}
                                >
                                    <techStats.icon className="w-6 h-6 text-white" aria-hidden="true" />
                                </div>
                                <h3 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>
                                    {techStats.title}
                                </h3>
                            </div>
                            <dl className="grid grid-cols-2 gap-4">
                                {techStats.items.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="flex flex-col-reverse items-center text-center gap-1 p-4 rounded-xl"
                                        style={{ backgroundColor: "color-mix(in srgb, #0ea5e9 8%, transparent)" }}
                                    >
                                        <dt className="text-xs" style={{ color: "var(--secondary-text)" }}>{stat.label}</dt>
                                        <dd className="text-2xl font-bold" style={{ color: "var(--accent-sky-text)" }}>{stat.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
