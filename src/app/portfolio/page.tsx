import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import CTA from "@/components/services/CTA";
import { clientProjects } from "@/data/portfolio";
import { getPageMetadata } from "@/lib/metadata";
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateWebPageSchema,
    generateBreadcrumbSchema,
    generateNavigationSchema,
} from "@/lib/schema";

const siteUrl = "https://www.cinuteinfomedia.com";
const pagePath = "/portfolio";

export const metadata = getPageMetadata({
    title: "Portfolio – Web Development, SEO & Digital Marketing Case Studies | Cinute InfoMedia",
    // Describes what is ACTUALLY on the page. The previous copy advertised four
    // service areas — app and AI builds, performance marketing — that no longer
    // have a case study behind them.
    description:
        "Client case studies from Cinute InfoMedia, written up as situation, task, action and measured result — including the Testriq QA Lab rebuild from WordPress to Next.js and the SEO programme behind it.",
    url: pagePath,
    keywords: [
        "portfolio",
        "case studies",
        "web development case study",
        "SEO case study",
        "Next.js migration case study",
        "WordPress to Next.js",
        "digital agency portfolio",
    ],
    image: "/og-images/Services.webp",
});

// No request-time data anywhere on this route — make static a build guarantee.
export const dynamic = "force-static";

export default function PortfolioPage() {
    const listId = `${siteUrl}${pagePath}/#case-studies`;

    const projectList = {
        "@type": "ItemList",
        "@id": listId,
        name: "Cinute InfoMedia client case studies",
        // Machine-readable, so it must match `numberOfItems` and the rendered
        // list. A description naming four service areas beside numberOfItems: 1
        // is a contradiction inside a single JSON-LD node.
        description:
            "Client engagements written up in full, covering web development and organic search.",
        numberOfItems: clientProjects.length,
        itemListElement: clientProjects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: `${project.client} — ${project.title}`,
            url: `${siteUrl}${pagePath}/${project.slug}`,
            item: { "@id": `${siteUrl}${pagePath}/${project.slug}/#webpage` },
        })),
    };

    const schema = generateGraphSchema(
        generateOrganizationSchema({
            description:
                "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),
        generateWebSiteSchema(),
        generateWebPageSchema({
            name: "Portfolio – Web Development, SEO & Digital Marketing Case Studies",
            description:
                "Client case studies from Cinute InfoMedia, each written up as situation, task, action and measured result.",
            urlPath: pagePath,
            mainEntityId: listId,
            breadcrumbId: `${siteUrl}${pagePath}/#breadcrumb`,
        }),
        generateBreadcrumbSchema(
            [
                { name: "Home", url: "/" },
                { name: "Portfolio", url: pagePath },
            ],
            `${siteUrl}${pagePath}/#breadcrumb`
        ),
        projectList,
        generateNavigationSchema([
            { name: "Home", url: "/" },
            { name: "Our Team", url: "/our-team" },
            { name: "Services", url: "/services" },
            { name: "Portfolio", url: pagePath },
            { name: "Products", url: "/products/chimegenius-ai-pro" },
            { name: "Blog", url: "/blog" },
            { name: "About", url: "/about" },
            { name: "Careers", url: "/careers" },
            { name: "Contact", url: "/contact" },
        ])
    );

    return (
        <main data-page-theme="blue">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <PortfolioHero />
            <PortfolioGrid projects={clientProjects} />
            <CTA />
        </main>
    );
}
