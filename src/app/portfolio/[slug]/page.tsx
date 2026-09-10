import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/portfolio";
import ProjectHero from "@/components/portfolio/detail/ProjectHero";
import Challenge from "@/components/portfolio/detail/Challenge";
import Approach from "@/components/portfolio/detail/Approach";
import Results from "@/components/portfolio/detail/Results";
import Testimonial from "@/components/portfolio/detail/Testimonial";
import NextProject from "@/components/portfolio/detail/NextProject";
import AtAGlance from "@/components/portfolio/detail/AtAGlance";
import Gallery from "@/components/portfolio/detail/Gallery";
import CTA from "@/components/services/CTA";
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateWebPageSchema,
    generateBreadcrumbSchema,
    generateNavigationSchema,
} from "@/lib/schema";

const siteUrl = "https://www.cinuteinfomedia.com";

// SSG — every case study is pre-rendered at build time from `data/portfolio.ts`.
export async function generateStaticParams() {
    return getAllProjectSlugs().map((slug) => ({ slug }));
}

// Per-project metadata. Titles, descriptions and the canonical are derived from
// the same project record the page renders, so they cannot drift from the
// visible copy. A project may override the derived defaults with `seoTitle` /
// `seoDescription`.
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return { title: "Project Not Found" };
    }

    const url = `${siteUrl}/portfolio/${project.slug}`;

    const metaTitle =
        project.seoTitle ?? `${project.client} Case Study — ${project.title} | Cinute InfoMedia`;
    const socialTitle = project.seoTitle ?? `${project.client} Case Study — ${project.title}`;
    const metaDescription = project.seoDescription ?? project.summary;

    return {
        title: metaTitle,
        description: metaDescription,
        keywords: [
            project.client,
            `${project.client} case study`,
            project.category,
            project.industry,
            ...project.servicesDelivered.slice(0, 4).map((service) => service.name),
            "Cinute InfoMedia",
            "case study",
            "client results",
        ],
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: socialTitle,
            description: metaDescription,
            url,
            type: "article",
            images: [
                {
                    url: "/og-images/Services.webp",
                    width: 1200,
                    height: 630,
                    alt: `${project.client} case study by Cinute InfoMedia`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: socialTitle,
            description: metaDescription,
            images: ["/og-images/Services.webp"],
        },
    };
}

export default async function PortfolioProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const pageUrl = `${siteUrl}/portfolio/${project.slug}`;
    const caseStudyId = `${pageUrl}/#case-study`;

    // The testimonial block is optional in the data, so its Review node is
    // optional in the graph too — a project without a signed-off quote emits no
    // Review rather than an empty one. The quote is attributed to the client
    // COMPANY, matching how the site attributes it on screen; the data holds no
    // named person and none is invented here.
    // Modelled as a Quotation cited BY the case study, not as a Review.
    //
    // A `Review` node would need `reviewRating` — schema.org expects it and
    // Search Console reports it missing — and this data holds no rating.
    // Inventing one would contradict the no-fabrication policy documented in
    // data/portfolio.ts. A Review whose `itemReviewed` is our own Organization
    // is also a self-serving review, which Google will not display in any case.
    // `Quotation` carries the same information honestly, requires no rating,
    // and attributes to the client COMPANY (there is no named person).
    const testimonialNodes: Record<string, unknown>[] = project.testimonial
        ? [
              {
                  "@type": "Quotation",
                  "@id": `${pageUrl}/#testimonial`,
                  text: project.testimonial.quote,
                  spokenByCharacter: {
                      "@type": "Organization",
                      name: project.testimonial.attribution,
                  },
                  about: { "@id": caseStudyId },
                  inLanguage: "en-US",
              },
          ]
        : [];

    const projectSchema = generateGraphSchema(
        generateOrganizationSchema({
            description:
                "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        // No datePublished / dateModified: `data/portfolio.ts` carries no dates,
        // and asserting one we do not hold would be a fabricated signal.
        generateWebPageSchema({
            name: project.seoTitle ?? `${project.client} Case Study — ${project.title}`,
            description: project.seoDescription ?? project.summary,
            urlPath: `/portfolio/${project.slug}`,
            mainEntityId: caseStudyId,
            breadcrumbId: `${pageUrl}/#breadcrumb`,
        }),

        generateBreadcrumbSchema(
            [
                { name: "Home", url: "/" },
                { name: "Portfolio", url: "/portfolio" },
                { name: project.title, url: `/portfolio/${project.slug}` },
            ],
            `${pageUrl}/#breadcrumb`
        ),

        // The case study itself. Every field reads from the project record, so
        // the structured data and the rendered page state the same thing.
        {
            "@type": "CreativeWork",
            "@id": caseStudyId,
            name: project.title,
            headline: `${project.client} — ${project.title}`,
            description: project.seoDescription ?? project.summary,
            abstract: project.summary,
            url: pageUrl,
            genre: "Case study",
            inLanguage: "en-US",
            keywords: [
                project.category,
                project.industry,
                ...project.servicesDelivered.map((service) => service.name),
            ].join(", "),
            about: {
                "@type": "Organization",
                name: project.client,
                description: project.industry,
            },
            creator: { "@id": `${siteUrl}/#organization` },
            publisher: { "@id": `${siteUrl}/#organization` },
            mainEntityOfPage: { "@id": `${pageUrl}/#webpage` },
            // Links the Quotation node above back to this case study. Omitted
            // entirely when the project has no signed-off quote, so the graph
            // never references a node that was not emitted.
            ...(project.testimonial && {
                citation: { "@id": `${pageUrl}/#testimonial` },
            }),
            ...(project.logo && { image: `${siteUrl}${project.logo}` }),
            hasPart: project.action.map((step, index) => ({
                "@type": "CreativeWork",
                position: index + 1,
                name: step.title,
                description: step.description,
            })),
        },

        ...testimonialNodes,

        // Must match the hub's array and the live Navbar exactly — both pages
        // publish this under the same `#navigation` @id, so a crawler seeing
        // two different child lists for one node is a real inconsistency.
        // Products points at the canonical product URL because bare /products
        // is 308-redirected in next.config.mjs.
        generateNavigationSchema([
            { name: "Home", url: "/" },
            { name: "Our Team", url: "/our-team" },
            { name: "Services", url: "/services" },
            { name: "Portfolio", url: "/portfolio" },
            { name: "Products", url: "/products/chimegenius-ai-pro" },
            { name: "Blog", url: "/blog" },
            { name: "About", url: "/about" },
            { name: "Careers", url: "/careers" },
            { name: "Contact", url: "/contact" },
        ])
    );

    return (
        // No `data-page-theme` here: globals.css gives
        // `[data-page-theme="blue"] ::selection` higher specificity than the
        // base `::selection { background: var(--page-selection-bg) }`, so
        // setting both would make the per-project accent inert. Products'
        // detail route sets only the custom property for the same reason.
        <main data-page-theme="blue">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(projectSchema),
                }}
            />
            <ProjectHero project={project} />
            <AtAGlance project={project} />
            <Challenge project={project} />
            <Approach project={project} />
            {/* Renders null when the project carries no media. */}
            <Gallery project={project} />
            <Results project={project} />
            {/* Renders null internally when the project has no testimonial. */}
            <Testimonial project={project} />
            {/* Cyclic forward link so a case study is never a dead end. */}
            <NextProject project={project} />
            <CTA />
        </main>
    );
}
