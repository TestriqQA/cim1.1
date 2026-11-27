import Link from "next/link";
import Image from "next/image";
import { Layers, Code2, Database, Wrench, Cloud, Boxes, Palette, Route, Component, Activity, CalendarClock, Syringe, SlidersHorizontal, Network, Workflow, Gauge } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { isValidElement } from "react";
import type { ReactNode } from "react";
import { techLogo } from "@/components/services/mobile-app-development/techLogos";

const techHeader: TechHeader = {
    title: (
        <>
            Android Development <span style={{ color: "var(--accent-green-text)" }}>Technology Stack</span>
        </>
    ),
    intro: "We leverage Google's latest frameworks and industry-standard tools to build exceptional Android applications.",
};

// The five former tabs as category cards with big logos (as iOS). Five cards: the last one is
// wide, so every row is full. A tool with no logo, or a wrong or reused one, gets a related
// icon instead of a letter: Android SDK and WorkManager (both showed the Android Studio logo),
// Material Design 3 (its file is the MUI logo, a React library), Navigation (a generic
// compass), ViewModel (an "MVVM" text badge), LiveData, Hilt (a wide "Dagger Hilt" banner),
// Room (a generic database drawing), DataStore, Retrofit, Coroutines (showed the Kotlin logo),
// Profiler (a generic stopwatch). The links on Java, Google Cloud, AWS Amplify and Node.js
// were on their descriptions; they move to the tool.
const technologies: TechCategory[] = [
    {
        category: "Core Technologies",
        icon: Code2,
        items: [
            { name: "Kotlin", description: "Primary Language", logos: ["/images/techstack_logos/kotlin-logo.svg"] },
            { name: <Link href="/services/web-design-development/java-spring-boot" className="hover:underline">Java</Link>, label: "Java", description: "Legacy Support", logos: ["/images/techstack_logos/java-logo.svg"] },
            { name: "Android Studio", description: "IDE & Tools", logos: ["/images/techstack_logos/Android-Studio-logo.png"] },
            { name: "Gradle", description: "Build System", logos: ["/images/techstack_logos/Gradle-logo.png"] },
            { name: "Android SDK", description: "Platform SDK", icon: Boxes },
            { name: "Material Design 3", description: "UI System", icon: Palette },
        ],
    },
    {
        category: "Jetpack Libraries",
        icon: Layers,
        items: [
            { name: "Jetpack Compose", description: "Modern UI", logos: ["/images/techstack_logos/jetpack-compose-logo.png"] },
            { name: "Navigation", description: "App Navigation", icon: Route },
            { name: "ViewModel", description: "MVVM Pattern", icon: Component },
            { name: "LiveData", description: "Observable Data", icon: Activity },
            { name: "WorkManager", description: "Background Tasks", icon: CalendarClock },
            { name: "Hilt", description: "Dependency Injection", icon: Syringe },
        ],
    },
    {
        category: "Data & Storage",
        icon: Database,
        items: [
            { name: "Room", description: "Local Database", icon: Database },
            { name: "DataStore", description: "Preferences", icon: SlidersHorizontal },
            { name: "Realm", description: "Mobile Database", logos: ["/images/techstack_logos/Realm-logo.png"] },
            { name: "SQLite", description: "SQL Database", logos: ["/images/techstack_logos/sqlite-logo.svg"] },
            { name: "Retrofit", description: "HTTP Client", icon: Network },
            { name: "Coroutines", description: "Async Operations", icon: Workflow },
        ],
    },
    {
        category: "Dev Tools",
        icon: Wrench,
        items: [
            { name: "Play Console", description: "Distribution", logos: ["/images/techstack_logos/Play-Console-logo.png"] },
            { name: "JUnit", description: "Unit Testing", logos: ["/images/techstack_logos/JUnit-logo.png"] },
            { name: "Espresso", description: "UI Testing", logos: ["/images/techstack_logos/Espresso-logo.png"] },
            { name: "Profiler", description: "Performance", icon: Gauge },
            { name: "Fastlane", description: "Automation", logos: ["/images/techstack_logos/Fastlane-logo.png"] },
            { name: "LeakCanary", description: "Memory Leaks", logos: ["/images/techstack_logos/LeakCanary-logo.png"] },
        ],
    },
    {
        category: "Cloud & Backend",
        icon: Cloud,
        layout: "wide",
        items: [
            { name: "Firebase", description: "Backend Services", logos: ["/images/techstack_logos/firebase-logo.svg"] },
            { name: <Link href="/services/web-design-development/saas-development-services" className="hover:underline">Google Cloud</Link>, label: "Google Cloud", description: "Cloud Platform", logos: ["/images/techstack_logos/googlecloud-logo.svg"] },
            { name: <Link href="/services/web-design-development/saas-development-services" className="hover:underline">AWS Amplify</Link>, label: "AWS Amplify", description: "Cloud Platform", logos: ["/images/techstack_logos/aws-logo.png"] },
            { name: <Link href="/services/web-design-development/nodejs-backend" className="hover:underline">Node.js</Link>, label: "Node.js", description: "API Backend", logos: ["/images/techstack_logos/nodejs-logo.svg"] },
            { name: "GraphQL", description: "API Layer", logos: ["/images/techstack_logos/graphql-logo.svg"] },
            { name: "REST APIs", description: "Web Services", logos: ["/images/techstack_logos/REST-API-logo.png"] },
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
                            backgroundColor: "color-mix(in srgb, #3DDC84 5%, transparent)",
                            borderColor: "color-mix(in srgb, #3DDC84 20%, transparent)",
                        }}
                    >
                        <Layers className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-green-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-green-text)" }}>
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
                                className={`@container ${tech.layout === "wide" ? "md:col-span-2 " : ""}p-6 md:p-8 rounded-2xl border border-[var(--border-color)] transition duration-200 ease-out hover:border-[#3DDC84] hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:hover:translate-y-0`}
                                style={{ backgroundColor: "var(--card-bg)" }}
                            >
                                <div className={`flex items-center gap-3 ${tech.description ? "mb-2" : "mb-6"}`}>
                                    {/* The button shade, so the white icon passes 3:1 */}
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ background: "linear-gradient(135deg, #047857, #065f46)" }}
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
                                                    className={`${tileClass} ${href ? "group-hover:border-[#3DDC84] group-focus-visible:border-[#3DDC84]" : ""}`}
                                                    aria-hidden="true"
                                                >
                                                    {logos.length === 1 ? (
                                                        logoImg(logos[0], 40, "w-10 h-10")
                                                    ) : logos.length > 1 ? (
                                                        <span className={`flex flex-wrap items-center justify-center gap-1 ${logos.length === 2 ? "w-14" : "w-13"}`}>
                                                            {logos.map((logo) => logoImg(logo, 26, logos.length === 2 ? "w-6.5 h-6.5" : "w-6 h-6"))}
                                                        </span>
                                                    ) : (
                                                        ToolIcon && <ToolIcon className="w-8 h-8" style={{ color: "var(--accent-green-text)" }} />
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
                                    style={{ background: "linear-gradient(135deg, #047857, #065f46)" }}
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
                                        style={{ backgroundColor: "color-mix(in srgb, #3DDC84 8%, transparent)" }}
                                    >
                                        <dt className="text-xs" style={{ color: "var(--secondary-text)" }}>{stat.label}</dt>
                                        <dd className="text-2xl font-bold" style={{ color: "var(--accent-green-text)" }}>{stat.value}</dd>
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
