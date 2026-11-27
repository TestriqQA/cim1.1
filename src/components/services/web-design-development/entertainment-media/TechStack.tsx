import Link from "next/link";
import Image from "next/image";
import { Layers, PlayCircle, FilePen, BrainCircuit, Banknote, Server, Radio } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { isValidElement } from "react";
import type { ReactNode } from "react";
import { techLogo } from "@/components/services/web-design-development/techLogos";

const techHeader: TechHeader = {
    title: (
        <>
            Powered by <span style={{ color: "var(--accent-violet-text)" }}>Modern Tech</span>
        </>
    ),
    intro: "We leverage modern technologies to build scalable, high-performance entertainment platforms.",
};

// Stack layers like every website-type page (it had tabs for its six tools per
// category). Category icons now match: Video Players had Code, CMS Database, Analytics & AI Layers and
// Monetization a shield. Link names carry a plain label for the logo alt.
const technologies: TechCategory[] = [
    {
        category: "Streaming & CDN",
        icon: Radio,
        description: "High-performance content delivery infrastructure",
        items: [
            { name: "AWS MediaServices", description: "Video transcoding & delivery", logos: ["/images/techstack_logos/aws-logo.png"] },
            { name: "Cloudflare Stream", description: "Global CDN & streaming", logos: ["/images/techstack_logos/Cloudflare-logo.webp"] },
            { name: "Akamai", description: "Enterprise content delivery", logos: ["/images/techstack_logos/Akamai-logo.png"] },
            { name: "Mux", description: "Video API platform", logos: ["/images/techstack_logos/mux-logo.png"] },
            { name: "Vimeo OTT", description: "White-label streaming", logos: ["/images/techstack_logos/Vimeo_Logo.png"] },
            { name: "Wowza", description: "Live streaming engine", logos: ["/images/techstack_logos/wowza-logo.webp"] },
        ],
    },
    {
        category: "Video Players",
        icon: PlayCircle,
        description: "Customizable, feature-rich media players",
        items: [
            { name: "Video.js", description: "Open-source HTML5 player", logos: ["/images/techstack_logos/Videojs-logo.png"] },
            { name: "HLS.js", description: "HTTP Live Streaming", logos: ["/images/techstack_logos/HLSjs-logo.png"] },
            { name: "Shaka Player", description: "Adaptive streaming", logos: ["/images/techstack_logos/Shaka-Player-logo.png"] },
            { name: "JW Player", description: "Enterprise video player", logos: ["/images/techstack_logos/JW-Player-logo.png"] },
            { name: "Bitmovin", description: "Cross-platform player", logos: ["/images/techstack_logos/bitmovin-logo.png"] },
            { name: "THEOplayer", description: "Universal video player", logos: ["/images/techstack_logos/THEOplayer-logo.webp"] },
        ],
    },
    {
        category: "Content Management",
        icon: FilePen,
        description: "Flexible content management solutions",
        items: [
            { name: <Link href="/services/web-design-development/contentful-headless-cms" className="hover:underline">Contentful</Link>, label: "Contentful", description: "Headless CMS", logos: ["/images/techstack_logos/Contentful-logo.webp"] },
            { name: <Link href="/services/web-design-development/strapi-headless-cms" className="hover:underline">Strapi</Link>, label: "Strapi", description: "Open-source headless CMS", logos: ["/images/techstack_logos/Strapi-logo.png"] },
            { name: "Sanity", description: "Real-time content platform", logos: ["/images/techstack_logos/Sanity-square-logo.png"] },
            { name: "Prismic", description: "Slice-based CMS", logos: ["/images/techstack_logos/prismic-logo.webp"] },
            { name: "Directus", description: "Open data platform", logos: ["/images/techstack_logos/Directus-logo.png"] },
            { name: "Ghost", description: "Publishing platform", logos: ["/images/techstack_logos/Ghost-logo.jpg"] },
        ],
    },
    {
        category: "Analytics & AI",
        icon: BrainCircuit,
        description: "User insights and recommendation engines",
        items: [
            { name: "Mixpanel", description: "Product analytics", logos: ["/images/techstack_logos/mixpanel-logo.png"] },
            { name: "Amplitude", description: "Digital analytics", logos: ["/images/techstack_logos/Amplitude-logo.webp"] },
            { name: "Segment", description: "Customer data platform", logos: ["/images/techstack_logos/Segment-logo.png"] },
            { name: "Algolia", description: "Search & discovery", logos: ["/images/techstack_logos/algolia-logo.webp"] },
            { name: "Recombee", description: "AI recommendations", logos: ["/images/techstack_logos/Recombee-logo.png"] },
            { name: <Link href="/services/ai-chatbots-services" className="hover:underline">OpenAI</Link>, label: "OpenAI", description: "Content personalization", logos: ["/images/techstack_logos/OpenAI-logo.png"] },
        ],
    },
    {
        category: "Monetization",
        icon: Banknote,
        description: "Subscription and payment infrastructure",
        items: [
            { name: "Stripe Billing", description: "Subscription management", logos: ["/images/techstack_logos/Stripe-logo.png"] },
            { name: "PayPal", description: "Global payments", logos: ["/images/techstack_logos/paypal-logo.png"] },
            { name: "Chargebee", description: "Revenue operations", logos: ["/images/techstack_logos/chargebee-logo.png"] },
            { name: "RevenueCat", description: "In-app subscriptions", logos: ["/images/techstack_logos/RevenueCat-logo.svg"] },
            { name: "Paddle", description: "SaaS payments", logos: ["/images/techstack_logos/paddle-logo.png"] },
            { name: "Spreedly", description: "Payment orchestration", logos: ["/images/techstack_logos/Spreedly-logo.webp"] },
        ],
    },
    {
        category: "Backend & Real-time",
        icon: Server,
        description: "Scalable infrastructure and real-time features",
        items: [
            { name: <Link href="/services/web-design-development/nodejs-backend" className="hover:underline">Firebase</Link>, label: "Firebase", description: "Real-time database & auth", logos: ["/images/techstack_logos/firebase-logo.svg"] },
            { name: "Supabase", description: "Open-source Firebase", logos: ["/images/techstack_logos/supabase-logo.webp"] },
            { name: "Socket.io", description: "Real-time communication", logos: ["/images/techstack_logos/Socket-io-logo.png"] },
            { name: "Redis", description: "In-memory data store", logos: ["/images/techstack_logos/redis-logo.svg"] },
            { name: "GraphQL", description: "API query language", logos: ["/images/techstack_logos/graphql-logo.svg"] },
            { name: "tRPC", description: "End-to-end type safety", logos: ["/images/techstack_logos/tRPC-logo.png"] },
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
                            backgroundColor: "color-mix(in srgb, #8b5cf6 5%, transparent)",
                            borderColor: "color-mix(in srgb, #8b5cf6 20%, transparent)",
                        }}
                    >
                        <Layers className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-violet-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-violet-text)" }}>
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
                                className="@container p-6 md:p-8 rounded-2xl border border-[var(--border-color)] transition duration-200 ease-out hover:border-[#8b5cf6] hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:hover:translate-y-0"
                                style={{ backgroundColor: "var(--card-bg)" }}
                            >
                                <div className={`flex items-center gap-3 ${tech.description ? "mb-2" : "mb-6"}`}>
                                    {/* The button shade, so the white icon passes 3:1 */}
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}
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
                                                    className={`${tileClass} ${href ? "group-hover:border-[#8b5cf6] group-focus-visible:border-[#8b5cf6]" : ""}`}
                                                    aria-hidden="true"
                                                >
                                                    {logos.length === 1 ? (
                                                        logoImg(logos[0], 40, "w-10 h-10")
                                                    ) : logos.length > 1 ? (
                                                        <span className={`flex flex-wrap items-center justify-center gap-1 ${logos.length === 2 ? "w-14" : "w-13"}`}>
                                                            {logos.map((logo) => logoImg(logo, 26, logos.length === 2 ? "w-6.5 h-6.5" : "w-6 h-6"))}
                                                        </span>
                                                    ) : (
                                                        ToolIcon && <ToolIcon className="w-8 h-8" style={{ color: "var(--accent-violet-text)" }} />
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
                                    style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}
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
                                        style={{ backgroundColor: "color-mix(in srgb, #8b5cf6 8%, transparent)" }}
                                    >
                                        <dt className="text-xs" style={{ color: "var(--secondary-text)" }}>{stat.label}</dt>
                                        <dd className="text-2xl font-bold" style={{ color: "var(--accent-violet-text)" }}>{stat.value}</dd>
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
