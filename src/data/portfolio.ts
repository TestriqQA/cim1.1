// ============================================================================
// PORTFOLIO DATA — Client case studies for Cinute InfoMedia
// ============================================================================
// Single source of truth for /portfolio and /portfolio/[slug]: the bento
// stream, the detail pages, per-project metadata, the sitemap and every JSON-LD
// node all read from `clientProjects`, so nothing can drift between what a
// visitor sees and what a crawler is told.
//
// CLIENT WORK ONLY. Products and tools live in `data/products.ts`.
//
// --- WHAT BELONGS HERE --------------------------------------------------------
// REAL ENGAGEMENTS ONLY, described from what the client actually signed off.
// This file previously carried five illustrative case studies alongside the one
// real engagement; they have been removed. Do not add a project back as a
// layout filler — an unshipped case study on a public portfolio is a claim
// about work that was never done.
//
// --- STACK --------------------------------------------------------------------
// `stack` lists ONLY the technologies the client has told us to display. It is
// not a technical inventory of the engagement and must never be padded out:
// no framework implied by another ("Next.js, therefore React"), nothing read
// off the live site's response headers, nothing added to make the list look
// fuller. If the client did not name it, it does not go in.
//
// This rule exists because an earlier version of the Testriq entry listed
// Vercel and React, neither of which the client had disclosed — Vercel was
// inferred from a `Server:` header on their live site. Publishing a client's
// hosting provider is theirs to decide, not ours to deduce.
//
// --- METRICS ------------------------------------------------------------------
// Outcomes are stated in HEDGED language ("Strong", "Passing") — see the
// case-study cards in `components/home/Hero.tsx`. A concrete figure appears
// ONLY where the client has published or approved that exact number. Do not
// "improve" a hedged value into a percentage: an unverifiable number on a
// public case study is a liability, and the previous version of the Testriq
// entry did exactly that (it asserted all three Core Web Vitals were in the
// good range, which was never measured).
//
// `testimonial` is OPTIONAL and currently unset everywhere. Add a quote only
// when it is attributed to the entity that actually engaged us — the Testriq
// quote carried here previously named "Testriq Technologies", which is not the
// client. Everything downstream (the Testimonial component, the jump link, the
// Quotation JSON-LD node) drops out cleanly when the field is absent.
//
// --- EVIDENCE -----------------------------------------------------------------
// A case study is worth more when it shows the work. `cover` and `media` carry
// that proof: screenshots, UI captures and short screen recordings. Every entry
// declares real pixel dimensions so the gallery reserves the right box and
// nothing shifts on load. Both are optional and every consumer guards them, so
// a project with neither renders as a complete page with no gallery.
//
// `public/images/portfolio/_placeholder/` holds neutral grey frames for
// reviewing the gallery layout during development. They are NOT client work and
// must never ship on a real case study — a grey box captioned "awaiting the
// final capture" reads worse than no gallery at all. Drop real files in
// `public/images/portfolio/<slug>/` and reference those instead.

// ----------------------------------------------------------------------------
// Taxonomy
// ----------------------------------------------------------------------------

export type ServiceCategory = "seo" | "web-dev" | "app-dev" | "marketing";

export interface ServiceCategoryMeta {
  id: ServiceCategory;
  label: string;
  /** Compact label for the filter bar. */
  short: string;
}

// Ordered as the filter bar reads them. No per-category colour: the page uses
// one accent (the site's --brand-blue-text) so the work, not the chrome, is
// what carries the page.
export const serviceCategories: ServiceCategoryMeta[] = [
  { id: "web-dev", label: "Web Development", short: "Web" },
  { id: "app-dev", label: "App & AI Development", short: "Apps & AI" },
  { id: "seo", label: "SEO & Organic Growth", short: "SEO" },
  { id: "marketing", label: "Performance Marketing", short: "Marketing" },
];

export function getCategoryMeta(id: ServiceCategory): ServiceCategoryMeta {
  // The union type guarantees a hit; the fallback only guards a bad cast.
  return serviceCategories.find((c) => c.id === id) ?? serviceCategories[0];
}

// ----------------------------------------------------------------------------
// Evidence
// ----------------------------------------------------------------------------

export interface ProjectMedia {
  type: "image" | "video";
  /** Path under /public, or an absolute URL for externally hosted video. */
  src: string;
  /** Required on images. Describe what the capture SHOWS, not that it is a screenshot. */
  alt: string;
  /** Shown beneath the frame. Use it to say what the viewer is looking at. */
  caption?: string;
  /** Real intrinsic size — reserves the box so nothing shifts on load. */
  width: number;
  height: number;
  /** Poster frame for `type: "video"`. */
  poster?: string;
  /** Neutral stand-in, not client work. Remove once a real asset replaces it. */
  placeholder?: boolean;
}

// ----------------------------------------------------------------------------
// Project shape
// ----------------------------------------------------------------------------

export interface ProjectMetric {
  value: string;
  label: string;
  detail?: string;
  /**
   * Surfaced in the /portfolio hero strip. Flag only outcomes that stand on
   * their own out of context — a concrete figure beats a hedged word there,
   * because the hero has no surrounding narrative to qualify it.
   */
  highlight?: boolean;
}

export interface ProjectActionStep {
  title: string;
  description: string;
}

export interface ProjectTestimonial {
  quote: string;
  attribution: string;
  role: string;
}

export interface ProjectService {
  name: string;
  href: string;
}

export interface ClientProject {
  id: string;
  slug: string;
  client: string;
  industry: string;
  category: ServiceCategory;
  /** Featured projects span two bento columns; the rest span one. */
  featured: boolean;
  title: string;
  summary: string;

  // --- At a glance: the scannable facts above the write-up ---
  /** Year the engagement ran, or the year it shipped. */
  year: string;
  /** Human-readable engagement length, e.g. "4 months". Omit if not published. */
  duration?: string;
  /** Where the work runs — "Web", "iOS", "Android", "Google Ads", etc. */
  platforms: string[];
  /** What the client actually received. */
  deliverables: string[];
  /** Public URL of the shipped work, when there is one to point at. */
  liveUrl?: string;

  // --- Evidence ---
  /** Lead image for the card and the top of the case study. */
  cover?: ProjectMedia;
  /** Screenshots and screen recordings. Empty array renders no gallery. */
  media: ProjectMedia[];

  // STAR — Situation / Task / Action / Result(metrics)
  situation: string[];
  task: string;
  action: ProjectActionStep[];
  /** Ordered strongest-first; cards show the first two. */
  metrics: ProjectMetric[];
  /** Technology / environment badges. */
  stack: string[];
  servicesDelivered: ProjectService[];
  testimonial?: ProjectTestimonial;
  logo?: string;
  /**
   * The background a client's mark is drawn for. Client logos are shown on a
   * fixed plate of this colour in BOTH themes, because recolouring or
   * filtering someone else's logo to suit our palette is not ours to do.
   * Most marks are drawn for light grounds, so "light" is the default; set
   * "dark" for a mark whose lettering is white and would vanish on white.
   */
  logoGround?: "light" | "dark";
  seoTitle?: string;
  seoDescription?: string;
}

// ----------------------------------------------------------------------------
// Projects
// ----------------------------------------------------------------------------

export const clientProjects: ClientProject[] = [
  // ==========================================================================
  // Testriq QA Lab — the only case study currently published.
  //
  // Every field below comes from the client-supplied write-up of the actual
  // engagement. An earlier version of this entry named the client "Testriq
  // Technologies" and asserted outcomes that were never measured (notably
  // "Core Web Vitals: all three field metrics in the good range"). Both were
  // wrong and are corrected here.
  //
  // The results stay in the hedged form the client signed off — "Strong",
  // "Passing" — because no percentages were shared. Do not "improve" them into
  // figures; an unverifiable number on a public case study is a liability.
  //
  // No `testimonial`: the quote previously carried here was attributed to
  // "Testriq Technologies", which the client has confirmed is not this entity.
  // The Testimonial component and the Quotation JSON-LD node both drop out on
  // their own when the field is absent. Restore it only with a quote signed off
  // by Testriq QA Lab itself.
  //
  // No `cover` and empty `media`: the only assets in the repo are the neutral
  // grey _placeholder frames, and grey boxes captioned "awaiting the final
  // capture" read worse on a real client story than no gallery at all. The
  // cover is guarded in PortfolioGrid and ProjectHero, `Work` returns null on
  // empty media, and ProjectFacts drops the "The work" jump link — so the page
  // is complete without them. Add real captures under
  // /images/portfolio/testriq-organic-growth/ and the sections come back.
  // ==========================================================================
  {
    id: "testriq-organic-growth",
    slug: "testriq-organic-growth",
    client: "Testriq QA Lab",
    industry: "QA & Testing Solutions",
    category: "web-dev",
    featured: true,
    title: "A WordPress-to-Next.js rebuild that made organic search a lead channel",
    summary:
      "A six-month engagement that moved Testriq QA Lab off WordPress onto Next.js, redesigned the UI for a consistent experience across devices, and rebuilt the site's architecture and SEO around organic lead generation.",
    year: "2025",
    duration: "6 months",
    platforms: ["Web"],
    // The "Delivered" list in the sticky sidebar. One line per workstream in
    // `action` below, so the summary and the narrative cannot drift apart.
    deliverables: [
      "WordPress to Next.js migration",
      "UI and layout redesign",
      "Responsive design across breakpoints",
      "Silo site architecture",
      "Keyword research & SEO content strategy",
      "On-page & technical SEO",
      "Internal linking & off-page SEO",
      "Competitor analysis & performance monitoring",
    ],
    liveUrl: "https://www.testriq.com",
    media: [],
    situation: [
      "Testriq QA Lab ran on WordPress, and the platform was holding the business back rather than supporting it. Load times were slow, the design felt dated and inconsistent across devices, and the underlying architecture made both accessibility and search performance difficult to fix without a rebuild.",
      "The site described the company's QA and testing services, but it wasn't structured to rank, and it wasn't built to convert the traffic it did get.",
    ],
    task:
      "Move the site off WordPress onto a modern, performant stack, redesign the UI for a consistent experience across devices, and turn organic search into a dependable source of qualified leads.",
    action: [
      {
        title: "Rebuilt the website on Next.js",
        description:
          "Migrated the entire site from WordPress to Next.js, prioritising performance, accessibility and SEO from the architecture up rather than as an afterthought.",
      },
      {
        title: "Redesigned the UI and layout",
        description:
          "Refreshed the visual design and page layouts with full responsiveness, so the experience holds up consistently across mobile, tablet and desktop.",
      },
      {
        title: "Rebuilt the site's silo architecture",
        description:
          "Restructured the site into a clear topical hierarchy, mapping service and content pages so each one owns a defined query set instead of competing internally.",
      },
      {
        title: "Ran keyword research and built an SEO content strategy",
        description:
          "Identified the terms and questions relevant to Testriq's audience and used them to shape a content plan aligned with both search demand and the sales funnel.",
      },
      {
        title: "Executed on-page and technical SEO",
        description:
          "Optimised page-level elements — titles, metadata, content structure — alongside technical fundamentals such as crawlability, indexation and site speed, to remove barriers to ranking.",
      },
      {
        title: "Built internal linking and off-page SEO",
        description:
          "Wired internal links deliberately between related topics to distribute authority and support crawl paths, backed by off-page efforts to build the site's external authority.",
      },
      {
        title: "Ran ongoing competitor analysis and performance monitoring",
        description:
          "Tracked competitor positioning alongside Testriq's own performance using Google Search Console, Google Analytics and SEMrush, adjusting strategy based on real data rather than assumptions.",
      },
    ],
    // Three outcomes, as signed off. Only the first is `highlight`ed: the hub
    // hero strip now draws from four projects and shows one outcome per client,
    // so each project contributes its single strongest result rather than
    // filling the row on its own.
    metrics: [
      {
        value: "Strong",
        label: "Organic traffic growth",
        detail:
          "Improved search visibility and topical authority translated into sustained growth in relevant organic sessions.",
        highlight: true,
      },
      {
        value: "Strong",
        label: "Qualified lead growth",
        detail:
          "Organic search became a stronger contributor to inbound enquiries as visibility and content relevance improved.",
      },
      {
        value: "Passing",
        label: "Site performance & accessibility",
        detail:
          "The Next.js rebuild improved load times and accessibility across devices, replacing the constraints of the previous WordPress setup.",
      },
    ],
    // ONLY what the client named. Nothing here is inferred, verified
    // independently, or filled in for completeness — see the STACK policy at
    // the top of this file. Next.js and the three analytics tools are the four
    // technologies the client's own write-up names, and that is the whole list.
    stack: [
      "Next.js",
      "Google Search Console",
      "Google Analytics",
      "SEMrush",
    ],
    // Every href resolves to a real route under src/app/services/**.
    servicesDelivered: [
      { name: "Web Development", href: "/services/web-design-development" },
      { name: "Next.js Development", href: "/services/web-design-development/nextjs-development-services" },
      { name: "SEO Services", href: "/services/seo-services" },
      { name: "Technical SEO", href: "/services/seo-services/technical-seo-services" },
      { name: "On-Page SEO", href: "/services/seo-services/on-page-seo-services" },
      { name: "SEO Content Writing", href: "/services/seo-services/seo-content-writing-services" },
      { name: "Link Building", href: "/services/seo-services/link-building" },
    ],
    // Extracted from www.testriq.com's own header asset (their schema.org
    // `logo` points at the identical file), then resized to 800x219 WebP.
    // New filename rather than overwriting the old testriq-logo.png: Next keys
    // its optimised image cache on the path, so replacing a file in place keeps
    // serving the previous bytes.
    logo: "/images/logos/testriq-qa-lab-logo.webp",
    seoTitle: "Testriq QA Lab Case Study — WordPress to Next.js & SEO | Cinute InfoMedia",
    seoDescription:
      "How a six-month engagement moved Testriq QA Lab off WordPress onto Next.js, redesigned the UI, and rebuilt site architecture and SEO to grow organic traffic and qualified leads.",
  },

  // ==========================================================================
  // Cinute Digital — WordPress to Next.js, then SEO and paid.
  //
  // Client-supplied engagement facts; the business description is drawn from
  // cinutedigital.com. Deliberately absent, because the client's own site does
  // not support them and we measured none: course prices, student or placement
  // counts, review ratings, and the ISTQB / ISO / NSDC credentials the site
  // advertises. Note also that their site footer credits a different agency —
  // our authorship rests on the engagement, so the page never claims a credit
  // the client has not published.
  // ==========================================================================
  {
    id: "cinute-digital-nextjs-rebuild-seo",
    slug: "cinute-digital-nextjs-rebuild-seo",
    client: "Cinute Digital",
    industry: "EdTech Training Institute",
    category: "web-dev",
    featured: true,
    title: "A WordPress-to-Next.js rebuild and SEO programme for an EdTech institute",
    summary:
      "Cinute Digital's course site moved off WordPress onto Next.js, with performance and accessibility rebuilt in rather than patched on, then an advanced SEO programme and paid campaigns grew organic traffic and course enquiries together.",
    year: "2025",
    platforms: ["Web"],
    deliverables: [
      "WordPress to Next.js migration",
      "Performance optimisation",
      "Accessibility improvements",
      "Course catalogue architecture",
      "Advanced technical SEO",
      "On-page SEO & content optimisation",
      "Paid marketing campaigns",
    ],
    liveUrl: "https://www.cinutedigital.com",
    media: [],
    situation: [
      "Cinute Digital runs instructor-led courses in software testing, data science, artificial intelligence, business intelligence and digital marketing, across a catalogue that keeps growing. The site carrying all of it ran on WordPress, and the platform had become the constraint rather than the support.",
      "For an institute whose enrolments usually begin with someone searching for a course, that is expensive on both sides. Page performance and accessibility were capped by the stack, and the course pages that should have been ranking were competing with each other instead of each owning a query.",
    ],
    task:
      "Move the site off WordPress onto a modern, performant stack, fix performance and accessibility at the architecture level, and turn the course catalogue into a search asset — supported by paid campaigns.",
    action: [
      {
        title: "Rebuilt the site on Next.js",
        description:
          "Migrated the whole site off WordPress onto Next.js, treating performance, accessibility and search as architectural requirements rather than things to patch afterwards.",
      },
      {
        title: "Raised performance across the catalogue",
        description:
          "Static rendering, right-sized images and disciplined client-side JavaScript, so a course page loads quickly on the mid-range mobile devices most enquiries come from.",
      },
      {
        title: "Fixed accessibility at the component level",
        description:
          "Addressed contrast, focus behaviour, semantics and keyboard navigation in the components themselves, so fixes hold as the catalogue grows instead of decaying page by page.",
      },
      {
        title: "Restructured the course catalogue for search",
        description:
          "Mapped courses and categories into a clear hierarchy so each page owns a defined query set, replacing the internal competition between overlapping course pages.",
      },
      {
        title: "Ran an advanced technical SEO programme",
        description:
          "Crawlability, indexation, structured data and site speed addressed together, removing the technical barriers that were holding back pages the content already deserved to rank.",
      },
      {
        title: "Optimised on-page content against real demand",
        description:
          "Titles, metadata and page structure rewritten around the terms prospective learners actually search, aligned to how the admissions conversation runs.",
      },
      {
        title: "Ran paid campaigns alongside organic",
        description:
          "Paid marketing run in parallel with the organic programme, so the two channels supported enrolments together rather than competing for the same budget.",
      },
    ],
    metrics: [
      {
        value: "Strong",
        label: "Organic traffic growth",
        detail:
          "Sustained growth in organic sessions as the rebuilt catalogue began ranking for the course terms it was restructured to target.",
      },
      {
        value: "Strong",
        // Highlighted instead of the traffic metric above: Testriq already
        // contributes "Strong / Organic traffic growth" to the hub strip, and
        // two identical cells side by side read as a rendering fault.
        highlight: true,
        label: "Search visibility growth",
        detail:
          "Broader coverage across course and category queries once internal competition between overlapping pages was resolved.",
      },
      {
        value: "Improved",
        label: "Performance & accessibility",
        detail:
          "The Next.js rebuild lifted load times and accessibility across devices, replacing limits that the previous WordPress setup had imposed on both.",
      },
    ],
    // The three analytics tools are listed on these engagements at the
    // client's explicit instruction. That satisfies the STACK policy above
    // rather than breaking it: the rule is to publish only what we have
    // been told to display, and we were told to display these.
    stack: ["Next.js", "Google Search Console", "Google Analytics", "SEMrush"],
    servicesDelivered: [
      { name: "Web Development", href: "/services/web-design-development" },
      { name: "Next.js Development", href: "/services/web-design-development/nextjs-development-services" },
      { name: "SEO Services", href: "/services/seo-services" },
      { name: "Technical SEO", href: "/services/seo-services/technical-seo-services" },
      { name: "On-Page SEO", href: "/services/seo-services/on-page-seo-services" },
      { name: "Performance Marketing", href: "/services/performance-marketing" },
    ],
    logo: "/images/logos/cinute-digital-logo.webp",
    seoTitle: "Cinute Digital Case Study — WordPress to Next.js & SEO | Cinute InfoMedia",
    seoDescription:
      "How Cinute Digital moved off WordPress onto Next.js, lifted performance and accessibility, and grew organic traffic and course enquiries through advanced SEO and paid marketing.",
  },

  // ==========================================================================
  // Ved Solutions — SEO and paid on the EXISTING site. No rebuild.
  //
  // This is the one engagement here that did not involve a build, and the copy
  // must stay that way: their site is still the same static site it was, and
  // describing a rebuild, migration or redesign would be false. Nothing is
  // published about their hosting or framework for the same reason.
  //
  // Their own site carries unreplaced Lorem Ipsum testimonials and unaudited
  // marketing counters ("20+ Happy Clients", "100% Feedback Percentage"); none
  // of it is repeated here, and no traffic or lead figure is stated, because
  // none was supplied.
  // ==========================================================================
  {
    id: "ved-solutions-seo-lead-growth",
    slug: "ved-solutions-seo-lead-growth",
    client: "Ved Solutions",
    industry: "IT Consulting & Software Development",
    category: "seo",
    featured: false,
    title: "Advanced SEO on an existing site, built for qualified lead growth",
    summary:
      "No rebuild — an advanced SEO programme applied to Ved Solutions' existing UK site, strengthening its content, organic visibility and lead flow, with paid campaigns running alongside.",
    year: "2025",
    platforms: ["Web"],
    deliverables: [
      "SEO audit of the existing site",
      "Content improvement & optimisation",
      "Technical SEO",
      "On-page SEO",
      "Internal linking & off-page SEO",
      "Paid marketing campaigns",
    ],
    liveUrl: "https://vedsolutions.co.uk",
    media: [],
    situation: [
      "Ved Solutions is a UK IT consultancy building web, mobile and enterprise software, with UK-based management and a development team in India. The offer is a considered one, aimed at businesses that want to outsource or extend software delivery.",
      "The site described that offer, but it was not earning search visibility for the work the business actually wanted more of. The brief was explicitly not a rebuild — improve what was already live.",
    ],
    task:
      "Improve the existing site's content and search performance without rebuilding it, and grow qualified enquiries from organic search and paid campaigns together.",
    action: [
      {
        title: "Audited the site as it stood",
        description:
          "Started from what was already published — how pages were indexed, which competed with each other, and where the existing content fell short of the queries it was closest to.",
      },
      {
        title: "Strengthened the service content",
        description:
          "Reworked the service pages so each one answers the question a buyer is actually asking at that point, with the depth search results reward rather than a summary paragraph.",
      },
      {
        title: "Executed technical SEO on the live site",
        description:
          "Crawlability, indexation and page-level technical fundamentals addressed in place, removing barriers to ranking without touching the underlying build.",
      },
      {
        title: "Optimised on-page elements",
        description:
          "Titles, metadata and heading structure rewritten around real search demand, so each page presents itself clearly to both readers and crawlers.",
      },
      {
        title: "Built internal links and off-page authority",
        description:
          "Internal links wired deliberately between related services to distribute authority and support crawl paths, backed by off-page work to build external authority.",
      },
      {
        title: "Ran paid campaigns alongside organic",
        description:
          "Paid marketing run in parallel with the SEO programme, so enquiries grew from both channels while the organic work compounded.",
      },
    ],
    metrics: [
      {
        value: "Strong",
        label: "Qualified lead growth",
        detail:
          "Enquiries grew as the improved service content began reaching buyers earlier in their search, supported by paid campaigns running alongside.",
        highlight: true,
      },
      {
        value: "Strong",
        label: "Organic traffic growth",
        detail:
          "Sustained growth in organic sessions from the existing site, without any rebuild or replatform.",
      },
      {
        value: "Improved",
        label: "Content & search visibility",
        detail:
          "Service pages rewritten to match real search demand, broadening the range of queries the site appears for.",
      },
    ],
    // The three analytics tools are listed on these engagements at the
    // client's explicit instruction. That satisfies the STACK policy above
    // rather than breaking it: the rule is to publish only what we have
    // been told to display, and we were told to display these.
    stack: ["Google Search Console", "Google Analytics", "SEMrush"],
    servicesDelivered: [
      { name: "SEO Services", href: "/services/seo-services" },
      { name: "Technical SEO", href: "/services/seo-services/technical-seo-services" },
      { name: "On-Page SEO", href: "/services/seo-services/on-page-seo-services" },
      { name: "SEO Content Writing", href: "/services/seo-services/seo-content-writing-services" },
      { name: "Link Building", href: "/services/seo-services/link-building" },
      { name: "Performance Marketing", href: "/services/performance-marketing" },
    ],
    logo: "/images/logos/ved-solutions-logo.webp",
    seoTitle: "Ved Solutions SEO Case Study — Organic & Paid Lead Growth | Cinute InfoMedia",
    seoDescription:
      "How advanced SEO on Ved Solutions' existing site improved their content and organic visibility and grew qualified leads for a UK IT consultancy, with paid campaigns alongside.",
  },

  // ==========================================================================
  // Empiric Business Media — hand-written HTML/CSS/JS to static Next.js.
  //
  // "60 to 100" is the one concrete figure on this page and it is the client's
  // own reported page-speed score, stated as such. Everything else stays hedged.
  //
  // Nothing is published about their delegate, attendee or speaker numbers:
  // their own site withholds those pending verification, so repeating any
  // figure here would be fabricating one. No award or superlative either — the
  // client's site makes no such claim about itself.
  // ==========================================================================
  {
    id: "empiric-business-media-nextjs-seo",
    slug: "empiric-business-media-nextjs-seo",
    client: "Empiric Business Media",
    industry: "B2B Events & Business Media",
    category: "web-dev",
    featured: true,
    title: "A static Next.js rebuild that took page speed from 60 to 100",
    summary:
      "Empiric Business Media's site moved off hand-written HTML, CSS and JavaScript onto a static Next.js build — page speed went from 60 to 100, accessibility improved, and the interface was modernised to the client's brief, with advanced SEO turning impressions into leads.",
    year: "2026",
    platforms: ["Web"],
    deliverables: [
      "HTML/CSS/JS to Next.js static rebuild",
      "Modern UI design to client brief",
      "Performance optimisation",
      "Accessibility improvements",
      "Advanced technical SEO",
      "On-page SEO & content structure",
    ],
    liveUrl: "https://www.empiricbusinessmedia.com",
    media: [],
    situation: [
      "Empiric Business Media produces B2B conferences, summits, awards, roundtables and webinars for enterprise decision-makers, across several industry verticals. Its site was hand-written HTML, CSS and JavaScript.",
      "That was workable, but it capped what the site could do. Page speed sat at 60, accessibility needed real work, and the design no longer matched how the business wanted to present itself to the sponsors and delegates it was asking to commit.",
    ],
    task:
      "Rebuild the site as a static Next.js application, modernise the interface to the client's brief, lift performance and accessibility, and run advanced SEO on the new build.",
    action: [
      {
        title: "Rebuilt the site as a static Next.js application",
        description:
          "Replaced the hand-written HTML, CSS and JavaScript with a statically generated Next.js build, so every page ships as pre-rendered markup rather than assembling itself in the browser.",
      },
      {
        title: "Modernised the UI to the client's brief",
        description:
          "Redesigned the interface and page layouts against the client's own requirements, with full responsiveness so the experience holds from a phone to a desktop.",
      },
      {
        title: "Took page speed from 60 to 100",
        description:
          "Static rendering, right-sized assets and a disciplined JavaScript budget moved the client's reported page-speed score from 60 to 100.",
      },
      {
        title: "Improved accessibility across the site",
        description:
          "Contrast, focus states, semantics and keyboard navigation handled in the components, so the improvements carry across every page rather than sitting on a few.",
      },
      {
        title: "Ran advanced SEO on the new build",
        description:
          "Crawlability, indexation, metadata and content structure addressed on the rebuilt site, so the technical foundation and the content worked towards the same queries.",
      },
      {
        title: "Tracked impressions through to leads",
        description:
          "Monitored the path from search impressions to clicks to enquiries, adjusting the content plan against what the data showed rather than what was assumed.",
      },
    ],
    metrics: [
      {
        value: "60 → 100",
        label: "Page speed score",
        detail:
          "The client's reported page-speed score after the static Next.js rebuild, up from 60 on the previous hand-written site.",
        highlight: true,
      },
      {
        value: "Strong",
        label: "Impression growth",
        detail:
          "Search impressions grew as the rebuilt site became easier to crawl, index and surface on Google.",
      },
      {
        value: "Strong",
        label: "Impressions converting to leads",
        detail:
          "A rising share of those impressions turned into clicks and then enquiries, rather than visibility that stopped at the results page.",
      },
    ],
    // The three analytics tools are listed on these engagements at the
    // client's explicit instruction. That satisfies the STACK policy above
    // rather than breaking it: the rule is to publish only what we have
    // been told to display, and we were told to display these.
    stack: ["Next.js", "Google Search Console", "Google Analytics", "SEMrush"],
    servicesDelivered: [
      { name: "Web Development", href: "/services/web-design-development" },
      { name: "Next.js Development", href: "/services/web-design-development/nextjs-development-services" },
      { name: "Brand Identity & Design", href: "/services/brand-identity-design" },
      { name: "SEO Services", href: "/services/seo-services" },
      { name: "Technical SEO", href: "/services/seo-services/technical-seo-services" },
      { name: "On-Page SEO", href: "/services/seo-services/on-page-seo-services" },
    ],
    // EBM's mark sets its lettering in white for a dark ground; on a white
    // plate everything but the orange word disappears. It gets the ground it
    // was drawn for instead of being recoloured.
    logoGround: "dark",
    logo: "/images/logos/empiric-business-media-logo.webp",
    seoTitle: "Empiric Business Media Case Study — Next.js Rebuild & SEO | Cinute InfoMedia",
    seoDescription:
      "How a static Next.js rebuild took Empiric Business Media's page speed from 60 to 100, modernised the UI, improved accessibility, and grew impressions and leads with advanced SEO.",
  },
];

// ----------------------------------------------------------------------------
// Aggregates for the hero counters — DERIVED, never hand-typed
// ----------------------------------------------------------------------------

export const portfolioAggregates = {
  caseStudies: clientProjects.length,
  disciplines: new Set(clientProjects.map((p) => p.category)).size,
  industries: new Set(clientProjects.map((p) => p.industry)).size,
  services: new Set(clientProjects.flatMap((p) => p.servicesDelivered.map((s) => s.href))).size,
  technologies: new Set(clientProjects.flatMap((p) => p.stack)).size,
};

/** Every distinct stack item across the portfolio, in first-seen order. */
export const portfolioStack: string[] = Array.from(
  new Set(clientProjects.flatMap((p) => p.stack))
);

// ----------------------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------------------

/**
 * Outcomes flagged `highlight`, paired with the project they belong to. Drives
 * the hero strip on /portfolio — derived rather than hand-listed, so a metric
 * can never be shown against the wrong client.
 *
 * Quantified values ("3×", "200+") are ordered ahead of hedged ones ("Lower"),
 * because the hero has no surrounding narrative and a figure carries further
 * than a word there. Ties keep source order, so the result is stable.
 */
export function getHighlightMetrics(): { metric: ProjectMetric; project: ClientProject }[] {
  const isQuantified = (value: string) => /\d/.test(value);

  return clientProjects
    .flatMap((project) =>
      project.metrics.filter((m) => m.highlight).map((metric) => ({ metric, project }))
    )
    .sort((a, b) => Number(isQuantified(b.metric.value)) - Number(isQuantified(a.metric.value)));
}

// A client mark sits on the ground it was drawn for, in both themes. Most are
// drawn for light; EBM's lettering is white and needs dark. Recolouring or
// filtering someone else's logo to fit our palette is not ours to do.
export const logoPlate = (ground?: "light" | "dark") =>
  ground === "dark" ? "#111318" : "#ffffff";

export function getProjectBySlug(slug: string): ClientProject | undefined {
  return clientProjects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return clientProjects.map((p) => p.slug);
}

export function getActiveCategories(): ServiceCategoryMeta[] {
  return serviceCategories.filter((c) => clientProjects.some((p) => p.category === c.id));
}

/** Next case study in source order, wrapping; undefined if there is only one. */
export function getNextProject(slug: string): ClientProject | undefined {
  if (clientProjects.length < 2) return undefined;
  const index = clientProjects.findIndex((p) => p.slug === slug);
  if (index === -1) return undefined;
  return clientProjects[(index + 1) % clientProjects.length];
}

/** Projects that carry a signed-off quote, for the testimonial feed. */
export function getProjectsWithTestimonials(): ClientProject[] {
  return clientProjects.filter((p) => Boolean(p.testimonial));
}
