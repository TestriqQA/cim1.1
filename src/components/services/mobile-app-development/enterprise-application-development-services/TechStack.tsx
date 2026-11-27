import Link from "next/link";
import Image from "next/image";
import { Layers, ShieldCheck, Fingerprint, Cloud, Plug, Server, Lock, KeyRound, ShieldAlert, BadgeCheck, HeartPulse, FileLock, UserCheck, FolderTree, MonitorSmartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { isValidElement } from "react";
import type { ReactNode } from "react";
import { techLogo } from "@/components/services/mobile-app-development/techLogos";

const techHeader: TechHeader = {
    title: (
        <>
            Cloud-Native Infrastructure & <span style={{ color: "var(--brand-blue-text)" }}>Security Excellence</span>
        </>
    ),
    intro: "Our technical architecture is built for Interoperability and Scalability. We utilize a Microservices and Containers approach to ensure your application can grow without performance degradation.",
};

// The five former tabs as category cards with big logos (as on iOS). Five cards: the last
// one is wide, so every row is full. Tools with no logo get a related icon instead of a
// letter (all six Security standards, LDAP). Azure AD and Intune both showed the Azure
// cloud logo, which is neither product's logo, so they get icons too. The two links that
// sat on a description (Node.js "API Backend", Java Spring "Enterprise Java") move to the name.
const technologies: TechCategory[] = [
    {
        category: "Security",
        icon: ShieldCheck,
        items: [
            { name: "SSL/TLS", description: "Standard Encryption", icon: Lock },
            { name: "AES-256", description: "Advanced Data Encryption", icon: KeyRound },
            { name: "OWASP Top 10", description: "Security Standards", icon: ShieldAlert },
            { name: "SOC 2 Type II", description: "Compliance Standard", icon: BadgeCheck },
            { name: "HIPAA", description: "Healthcare Compliance", icon: HeartPulse },
            { name: "ISO 27001", description: "Information Security", icon: FileLock },
        ],
    },
    {
        category: "Identity & SSO",
        icon: Fingerprint,
        items: [
            { name: "Azure AD", description: "Microsoft Identity", icon: UserCheck },
            { name: "Okta", description: "Identity Platform", logos: ["/images/techstack_logos/okta-logo.svg"] },
            { name: "Auth0", description: "Authentication", logos: ["/images/techstack_logos/auth0-logo.png"] },
            { name: "SAML", description: "SSO Protocol", logos: ["/images/techstack_logos/saml-logo.svg"] },
            { name: "OAuth 2.0", description: "Authorization", logos: ["/images/techstack_logos/OAuth2-logo.jpg"] },
            { name: "LDAP", description: "Directory Service", icon: FolderTree },
        ],
    },
    {
        category: "Cloud & MDM",
        icon: Cloud,
        items: [
            { name: "AWS", description: "Cloud Platform", logos: ["/images/techstack_logos/aws-logo.png"] },
            { name: "Azure", description: "Microsoft Cloud", logos: ["/images/techstack_logos/azure-logo.svg"] },
            { name: "Google Cloud", description: "GCP", logos: ["/images/techstack_logos/googlecloud-logo.svg"] },
            { name: "VMware", description: "Enterprise MDM", logos: ["/images/techstack_logos/VMware-logo.svg"] },
            { name: "MobileIron", description: "MDM Platform", logos: ["/images/techstack_logos/MobileIron-logo.png"] },
            { name: "Intune", description: "Microsoft MDM", icon: MonitorSmartphone },
        ],
    },
    {
        category: "Integration",
        icon: Plug,
        items: [
            { name: "SAP", description: "ERP Integration", logos: ["/images/ai_automation_logos/sap-logo.webp"] },
            { name: "Salesforce", description: "CRM Integration", logos: ["/images/techstack_logos/Salesforce-logo.png"] },
            { name: "ServiceNow", description: "ITSM Integration", logos: ["/images/techstack_logos/ServiceNow-logo.webp"] },
            { name: "Workday", description: "HR Integration", logos: ["/images/techstack_logos/Workday-logo.png"] },
            { name: "Oracle", description: "Enterprise Suite", logos: ["/images/techstack_logos/Oracle-logo.svg"] },
            { name: "Microsoft 365", description: "Office Suite", logos: ["/images/techstack_logos/Microsoft-365-logo.webp"] },
        ],
    },
    {
        category: "Backend",
        icon: Server,
        layout: "wide",
        items: [
            { name: <Link href="/services/web-design-development/nodejs-backend" className="hover:underline">Node.js</Link>, label: "Node.js", description: "API Backend", logos: ["/images/techstack_logos/nodejs-logo.svg"] },
            { name: ".NET", description: "Microsoft Stack", logos: ["/images/techstack_logos/dotnet-logo.png"] },
            { name: <Link href="/services/web-design-development/java-spring-boot" className="hover:underline">Java Spring</Link>, label: "Java Spring", description: "Enterprise Java", logos: ["/images/techstack_logos/spring-logo.svg"] },
            { name: "PostgreSQL", description: "Database", logos: ["/images/techstack_logos/postgresql-logo.svg"] },
            { name: "MongoDB", description: "NoSQL Database", logos: ["/images/techstack_logos/mongodb-logo.svg"] },
            { name: "Redis", description: "Caching", logos: ["/images/techstack_logos/redis-logo.svg"] },
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
    // a white logo that vanishes on the light tile (Detox), inverted in light mode
    const invertLight = "[[data-theme=light]_&]:[filter:invert(1)_hue-rotate(180deg)]";
    const logoImg = (path: string, size: number, sizeClass: string) => {
        const logo = techLogo(path);
        return (
            <Image
                key={path}
                src={logo.src}
                alt=""
                width={size}
                height={size}
                className={`${sizeClass} object-contain ${logo.invert === "dark" ? invertDark : logo.invert === "light" ? invertLight : ""}`}
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
                            backgroundColor: "color-mix(in srgb, #2563eb 5%, transparent)",
                            borderColor: "color-mix(in srgb, #2563eb 20%, transparent)",
                        }}
                    >
                        <Layers className="w-4 h-4" aria-hidden="true" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--brand-blue-text)" }}>
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
                                className={`@container ${tech.layout === "wide" ? "md:col-span-2 " : ""}p-6 md:p-8 rounded-2xl border border-[var(--border-color)] transition duration-200 ease-out hover:border-[#2563eb] hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:hover:translate-y-0`}
                                style={{ backgroundColor: "var(--card-bg)" }}
                            >
                                <div className={`flex items-center gap-3 ${tech.description ? "mb-2" : "mb-6"}`}>
                                    {/* The button shade, so the white icon passes 3:1 */}
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ background: "linear-gradient(135deg, #2563eb, #1d4ed8)" }}
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
                                                    className={`${tileClass} ${href ? "group-hover:border-[#2563eb] group-focus-visible:border-[#2563eb]" : ""}`}
                                                    aria-hidden="true"
                                                >
                                                    {logos.length === 1 ? (
                                                        logoImg(logos[0], 40, "w-10 h-10")
                                                    ) : logos.length > 1 ? (
                                                        <span className={`flex flex-wrap items-center justify-center gap-1 ${logos.length === 2 ? "w-14" : "w-13"}`}>
                                                            {logos.map((logo) => logoImg(logo, 26, logos.length === 2 ? "w-6.5 h-6.5" : "w-6 h-6"))}
                                                        </span>
                                                    ) : (
                                                        ToolIcon && <ToolIcon className="w-8 h-8" style={{ color: "var(--brand-blue-text)" }} />
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
                                    style={{ background: "linear-gradient(135deg, #2563eb, #1d4ed8)" }}
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
                                        style={{ backgroundColor: "color-mix(in srgb, #2563eb 8%, transparent)" }}
                                    >
                                        <dt className="text-xs" style={{ color: "var(--secondary-text)" }}>{stat.label}</dt>
                                        <dd className="text-2xl font-bold" style={{ color: "var(--brand-blue-text)" }}>{stat.value}</dd>
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
