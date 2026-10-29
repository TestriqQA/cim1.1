import Hero from "@/components/our-team/Hero";
import Leaders from "@/components/our-team/Leaders";
import FeaturedMembers from "@/components/our-team/FeaturedMembers";
import Disciplines from "@/components/our-team/Disciplines";
import Philosophy from "@/components/our-team/Philosophy";
import Culture from "@/components/our-team/Culture";
import CTA from "@/components/our-team/CTA";

import { teamMembers } from "@/data/team";
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
const pagePath = "/our-team";

// Every section on this route is a Server Component reading from a static
// module (`data/team.ts`) — there is no request-time data and no client
// JavaScript shipped for the page itself. Declaring the segment static makes
// that a build-time guarantee rather than an inference: the route is rendered
// once into HTML and served from the edge cache, so introducing a dynamic API
// here would fail the build instead of silently opting the page into SSR.
export const dynamic = "force-static";

export const metadata = getPageMetadata({
    title: "Our Team | Meet the People Behind Cinute InfoMedia",
    description:
        "Meet the Cinute InfoMedia team: the founders, engineers, marketers and specialists who scope, build and run every project. Mumbai-based, working globally.",
    url: pagePath,
    keywords: [
        "cinute infomedia team",
        "our team",
        "digital agency team",
        "web development team india",
        "meet the team",
        "leadership team mumbai",
    ],
    image: "/og-images/About.webp",
});

export default function OurTeamPage() {
    const teamListId = `${siteUrl}${pagePath}/#team`;

    // Person entities are derived from the same array the cards render, so a
    // role change in `data/team.ts` updates the page and the structured data
    // together and they cannot drift apart.
    const personNodes = teamMembers.map((member) => ({
        "@type": "Person",
        "@id": `${siteUrl}${pagePath}/#${member.id}`,
        name: member.name,
        jobTitle: member.role,
        description: member.bio,
        image: `${siteUrl}${member.image}`,
        url: `${siteUrl}${pagePath}`,
        worksFor: { "@id": `${siteUrl}/#organization` },
        knowsAbout: member.expertise,
        sameAs: [member.linkedin],
    }));

    const teamList = {
        "@type": "ItemList",
        "@id": teamListId,
        name: "Cinute InfoMedia leadership and specialists",
        description:
            "The people who scope, build, market and support Cinute InfoMedia client engagements.",
        numberOfItems: teamMembers.length,
        itemListElement: teamMembers.map((member, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: { "@id": `${siteUrl}${pagePath}/#${member.id}` },
        })),
    };

    const ourTeamSchema = generateGraphSchema(
        generateOrganizationSchema({
            description:
                "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Our Team | Meet the People Behind Cinute InfoMedia",
            description:
                "Meet the Cinute InfoMedia team: the founders, engineers, marketers and specialists who scope, build and run every project.",
            urlPath: pagePath,
            datePublished: "2026-09-04",
            dateModified: "2026-09-07",
            mainEntityId: teamListId,
            breadcrumbId: `${siteUrl}${pagePath}/#breadcrumb`,
        }),

        generateBreadcrumbSchema(
            [
                { name: "Home", url: "/" },
                { name: "About", url: "/about" },
                { name: "Our Team", url: pagePath },
            ],
            `${siteUrl}${pagePath}/#breadcrumb`
        ),

        teamList,

        ...personNodes,

        generateNavigationSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Blog", url: "/blog" },
            { name: "About", url: "/about" },
            { name: "Our Team", url: pagePath },
            { name: "Careers", url: "/careers" },
            { name: "Contact", url: "/contact" },
        ])
    );

    return (
        <main
            data-page-theme="blue"
            style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem" }}
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(ourTeamSchema) }}
            />
            <Hero />
            <Leaders />
            <FeaturedMembers />
            <Disciplines />
            <Philosophy />
            <Culture />
            <CTA />
        </main>
    );
}
