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
// --- METRICS ------------------------------------------------------------------
// The site states outcomes in HEDGED language ("Strong", "Higher", "Lower") —
// see the case-study cards in `components/home/Hero.tsx`. Concrete figures
// appear ONLY where already published on the site (Maple's "200+ hours/month",
// HealthCare Plus's "tripled organic traffic" from `home/CaseStudies.tsx`).
// Do not "improve" hedged values into invented percentages: an unverifiable
// number on a public case study is a liability.
//
// Testimonial quotes are verbatim from the homepage carousel and attributed to
// the client COMPANY, as the site already does. No named people are invented.
//
// --- EVIDENCE -----------------------------------------------------------------
// A case study is only worth reading if it shows the work. `cover` and `media`
// carry that proof: screenshots, UI captures and short screen recordings. Every
// entry declares real pixel dimensions so the gallery reserves the right box
// and nothing shifts on load.
//
// Entries flagged `placeholder: true` are neutral grey frames, NOT client work.
// They exist so the gallery layout can be reviewed before real assets land.
// REPLACE THEM BEFORE DEPLOY — drop files in
// `public/images/portfolio/<slug>/` and drop the flag.

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
  seoTitle?: string;
  seoDescription?: string;
}

// ----------------------------------------------------------------------------
// Projects
// ----------------------------------------------------------------------------

export const clientProjects: ClientProject[] = [
  {
    id: "testriq-organic-growth",
    slug: "testriq-organic-growth",
    client: "Testriq",
    industry: "QA & Testing Solutions",
    category: "web-dev",
    featured: true,
    title: "Turning a brochure site into a lead engine",
    summary:
      "A ground-up Next.js rebuild and technical SEO programme that made organic search Testriq's primary source of qualified enquiries.",
    year: "2025",
    duration: "4 months",
    platforms: ["Web"],
    deliverables: [
      "Next.js website rebuild",
      "Technical SEO audit & fixes",
      "Hub-and-spoke IA",
      "Topical content plan",
      "Core Web Vitals remediation",
    ],
    liveUrl: "https://testriq.com",
    // PLACEHOLDERS — neutral grey frames, not client work. Replace with real
    // captures in /images/portfolio/testriq-organic-growth/ and delete `placeholder: true`.
    cover: {
      type: "image",
      src: "/images/portfolio/_placeholder/cover.webp",
      alt: "Placeholder cover image awaiting a real capture",
      width: 1600,
      height: 900,
      placeholder: true,
    },
    media: [
      {
        type: "image",
        src: "/images/portfolio/_placeholder/wide-1.webp",
        alt: "Placeholder screenshot awaiting a real capture",
        caption: "Replace with a capture of the delivered work.",
        width: 1600,
        height: 900,
        placeholder: true,
      },
      {
        type: "image",
        src: "/images/portfolio/_placeholder/wide-2.webp",
        alt: "Placeholder screenshot awaiting a real capture",
        caption: "Replace with a capture of the delivered work.",
        width: 1600,
        height: 900,
        placeholder: true,
      },
      {
        type: "image",
        src: "/images/portfolio/_placeholder/mobile-1.webp",
        alt: "Placeholder mobile screenshot awaiting a real capture",
        caption: "Replace with a mobile capture.",
        width: 750,
        height: 1334,
        placeholder: true,
      },
    ],
    situation: [
      "Testriq had a credible services business but a website that behaved like a brochure: it described what the company did, ranked for almost nothing competitive, and produced enquiries only when someone already knew the brand.",
      "The problems were structural. Thin service pages competed with one another for the same terms, nothing linked related topics together, and page performance was poor enough to hurt both crawl efficiency and the people who did arrive.",
    ],
    task:
      "Rebuild the site so that technical quality stopped working against the content, then make organic search a channel the sales team could rely on.",
    action: [
      {
        title: "Audit against real crawl and index data",
        description:
          "Started from Search Console and a full crawl rather than opinion — which pages were indexed, which competed with each other, and where crawl budget was wasted.",
      },
      {
        title: "Rebuild the information architecture",
        description:
          "Consolidated overlapping service pages into a hub-and-spoke structure, each page owning one job and one primary query, with internal links wired deliberately between related topics.",
      },
      {
        title: "Rebuild the front end on Next.js",
        description:
          "Static rendering, right-sized images and Core Web Vitals treated as requirements. Accessibility fixed at the component level rather than patched afterwards.",
      },
      {
        title: "Publish to a topical content plan",
        description:
          "Content commissioned to cover the questions buyers actually ask during evaluation, not a keyword list detached from the sales conversation.",
      },
    ],
    metrics: [
      { value: "Strong", label: "Organic traffic growth", detail: "Sustained growth in non-branded organic sessions as consolidated service pages began ranking for the terms they were built to target." },
      { value: "Strong", label: "Qualified lead growth", detail: "Organic search moved from an incidental channel to the primary source of inbound enquiries." },
      { value: "Passing", label: "Core Web Vitals", detail: "All three field metrics in the good range across mobile and desktop after the rebuild." },
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel", "Search Console", "GA4", "Schema.org"],
    servicesDelivered: [
      { name: "Web Development", href: "/services/web-design-development" },
      { name: "Next.js Development", href: "/services/web-design-development/nextjs-development-services" },
      { name: "Technical SEO", href: "/services/seo-services/technical-seo-services" },
      { name: "SEO Content Writing", href: "/services/seo-services/seo-content-writing-services" },
    ],
    testimonial: {
      quote:
        "Cinute InfoMedia transformed our outdated website into a lead-generation powerhouse. The custom web development solution they delivered exceeded our expectations, and the ongoing SEO support has significantly grown our organic traffic.",
      attribution: "Testriq Technologies",
      role: "QA & Testing Solutions",
    },
    logo: "/images/logos/testriq-logo.png",
    seoTitle: "Testriq Web Rebuild & SEO Case Study | Cinute InfoMedia",
    seoDescription:
      "How a Next.js rebuild and technical SEO programme turned Testriq's brochure site into its primary source of qualified organic leads.",
  },

  {
    id: "cdpl-performance-marketing",
    slug: "cdpl-performance-marketing",
    client: "CDPL",
    industry: "Software Training Institute",
    category: "marketing",
    featured: false,
    title: "Paid acquisition rebuilt around cost per enquiry",
    summary:
      "Search and social campaigns restructured around real intent, lifting course enquiries while bringing cost per lead down.",
    year: "2025",
    duration: "Ongoing retainer",
    platforms: ["Google Ads", "Meta Ads", "Web"],
    deliverables: [
      "Conversion tracking rebuild",
      "Campaign restructure by intent",
      "Course landing pages",
      "Weekly optimisation reporting",
    ],
    // PLACEHOLDERS — neutral grey frames, not client work. Replace with real
    // captures in /images/portfolio/cdpl-performance-marketing/ and delete `placeholder: true`.
    cover: {
      type: "image",
      src: "/images/portfolio/_placeholder/cover.webp",
      alt: "Placeholder cover image awaiting a real capture",
      width: 1600,
      height: 900,
      placeholder: true,
    },
    media: [
      {
        type: "image",
        src: "/images/portfolio/_placeholder/wide-1.webp",
        alt: "Placeholder screenshot awaiting a real capture",
        caption: "Replace with a capture of the delivered work.",
        width: 1600,
        height: 900,
        placeholder: true,
      },
      {
        type: "image",
        src: "/images/portfolio/_placeholder/wide-2.webp",
        alt: "Placeholder screenshot awaiting a real capture",
        caption: "Replace with a capture of the delivered work.",
        width: 1600,
        height: 900,
        placeholder: true,
      },
      {
        type: "image",
        src: "/images/portfolio/_placeholder/mobile-1.webp",
        alt: "Placeholder mobile screenshot awaiting a real capture",
        caption: "Replace with a mobile capture.",
        width: 750,
        height: 1334,
        placeholder: true,
      },
    ],
    situation: [
      "CDPL was spending steadily on paid search and social without a reliable read on which of it worked. Campaigns were organised by budget rather than intent, so high-intent enrolment queries competed for the same pooled spend as broad awareness terms.",
      "Conversion tracking was incomplete: reporting could show clicks but could not attribute an actual course enquiry back to the campaign that produced it.",
    ],
    task:
      "Make every enquiry attributable, then restructure spend so that budget followed intent instead of habit.",
    action: [
      { title: "Fix measurement before touching spend", description: "Rebuilt conversion tracking end to end so a submitted enquiry traced back to campaign, ad group and query. Nothing was optimised until the numbers could be trusted." },
      { title: "Restructure campaigns by intent", description: "High-intent enrolment searches, course-comparison research and cold awareness each got their own campaigns, budgets and success criteria." },
      { title: "Match landing pages to the query", description: "Course-specific landing pages replaced a single generic destination, and the enquiry form asked only for what admissions actually needed." },
      { title: "Run a weekly optimisation cycle", description: "Search terms, creative and bids reviewed weekly against cost per qualified enquiry — the metric the business cares about." },
    ],
    metrics: [
      { value: "Higher", label: "Online enquiries", detail: "Restructured campaigns and query-matched landing pages increased course enquiries through paid channels." },
      { value: "Lower", label: "Cost per lead", detail: "Separating high-intent from awareness spend removed a substantial share of wasted budget." },
      { value: "Full", label: "Conversion attribution", detail: "Every enquiry can now be traced to the campaign, ad group and search term that produced it." },
    ],
    stack: ["Google Ads", "Meta Ads", "GA4", "Google Tag Manager", "Looker Studio", "Landing pages"],
    servicesDelivered: [
      { name: "Performance Marketing", href: "/services/performance-marketing" },
      { name: "Google Ads", href: "/services/performance-marketing/google-ads" },
      { name: "Meta Ads", href: "/services/performance-marketing/meta-ads" },
      { name: "Landing Pages", href: "/services/web-design-development/landing-pages" },
    ],
    // The only CDPL quote on file is about chatbot work, not paid media —
    // attaching it here would misrepresent it. Omitted until signed off.
    logo: "/images/logos/cdpl-logo.png",
    seoTitle: "CDPL Performance Marketing Case Study | Cinute InfoMedia",
    seoDescription:
      "How restructuring paid search and social around real intent lifted course enquiries and reduced cost per lead for CDPL.",
  },

  {
    id: "healthcare-plus-seo",
    slug: "healthcare-plus-seo",
    client: "HealthCare Plus",
    industry: "Healthcare",
    category: "seo",
    featured: true,
    title: "Tripling organic traffic across four service lines",
    summary:
      "A technical SEO programme and topical content strategy that tripled organic traffic across multiple service lines within six months.",
    year: "2025",
    duration: "6 months",
    platforms: ["Web"],
    deliverables: [
      "Technical SEO audit",
      "Page consolidation & canonicalisation",
      "Service-line topic clusters",
      "Structured data rollout",
      "Local search alignment",
    ],
    // PLACEHOLDERS — neutral grey frames, not client work. Replace with real
    // captures in /images/portfolio/healthcare-plus-seo/ and delete `placeholder: true`.
    cover: {
      type: "image",
      src: "/images/portfolio/_placeholder/cover.webp",
      alt: "Placeholder cover image awaiting a real capture",
      width: 1600,
      height: 900,
      placeholder: true,
    },
    media: [
      {
        type: "image",
        src: "/images/portfolio/_placeholder/wide-1.webp",
        alt: "Placeholder screenshot awaiting a real capture",
        caption: "Replace with a capture of the delivered work.",
        width: 1600,
        height: 900,
        placeholder: true,
      },
      {
        type: "image",
        src: "/images/portfolio/_placeholder/wide-2.webp",
        alt: "Placeholder screenshot awaiting a real capture",
        caption: "Replace with a capture of the delivered work.",
        width: 1600,
        height: 900,
        placeholder: true,
      },
      {
        type: "image",
        src: "/images/portfolio/_placeholder/mobile-1.webp",
        alt: "Placeholder mobile screenshot awaiting a real capture",
        caption: "Replace with a mobile capture.",
        width: 750,
        height: 1334,
        placeholder: true,
      },
    ],
    situation: [
      "HealthCare Plus ran four distinct service lines from one site, but the site had grown by accretion: duplicate location pages, thin service descriptions, and a blog that published on a schedule rather than to a plan.",
      "Rankings were volatile and mostly branded. Non-branded queries — the ones a prospective patient actually types — were being won by directories and competitors with clearer structure.",
    ],
    task:
      "Establish a crawlable, authoritative structure for each service line and grow non-branded organic traffic to a level the practice could plan around.",
    action: [
      { title: "Consolidate and canonicalise", description: "Duplicate location and service pages merged or canonicalised; the crawl footprint shrank while the pages that remained got deeper." },
      { title: "Service-line topic clusters", description: "Each service line became a hub with supporting articles answering the specific questions patients research before booking." },
      { title: "Structured data across the estate", description: "MedicalOrganization, Physician and FAQ schema deployed consistently so the practice qualified for the rich results competitors already held." },
      { title: "Local search alignment", description: "Google Business Profiles, NAP consistency and location pages aligned so map-pack and organic reinforced each other." },
    ],
    metrics: [
      { value: "3×", label: "Organic traffic", detail: "Organic sessions tripled across the four service lines within six months of the programme starting." },
      { value: "Higher", label: "Non-branded rankings", detail: "Service-line hubs began ranking for the patient-intent queries that had previously gone to directories." },
      { value: "Stable", label: "Ranking volatility", detail: "A consolidated structure replaced the week-to-week swings the old site had shown." },
    ],
    stack: ["Technical SEO", "Screaming Frog", "Search Console", "Schema.org", "Google Business", "Content strategy"],
    servicesDelivered: [
      { name: "Organic Growth & SEO", href: "/services/seo-services" },
      { name: "Technical SEO", href: "/services/seo-services/technical-seo-services" },
      { name: "Local SEO", href: "/services/seo-services/local-seo-services" },
      { name: "On-page SEO", href: "/services/seo-services/on-page-seo-services" },
    ],
    seoTitle: "HealthCare Plus SEO Case Study — 3× Organic Traffic | Cinute InfoMedia",
    seoDescription:
      "How a technical SEO programme and topic clusters tripled organic traffic across four healthcare service lines in six months.",
  },

  {
    id: "ved-solutions-lead-gen",
    slug: "ved-solutions-lead-gen",
    client: "Ved Solutions",
    industry: "B2B SaaS",
    category: "marketing",
    featured: false,
    title: "A lead-gen overhaul that scaled pipeline",
    summary:
      "Funnel redesign, targeted content and a paid media programme that delivered a significant lift in qualified leads and a meaningful reduction in CAC within three months.",
    year: "2025",
    duration: "3 months",
    platforms: ["Web", "LinkedIn Ads", "Google Ads"],
    deliverables: [
      "Funnel audit",
      "Persona landing paths",
      "Mid-funnel content",
      "Paid media programme",
    ],
    // PLACEHOLDERS — neutral grey frames, not client work. Replace with real
    // captures in /images/portfolio/ved-solutions-lead-gen/ and delete `placeholder: true`.
    cover: {
      type: "image",
      src: "/images/portfolio/_placeholder/cover.webp",
      alt: "Placeholder cover image awaiting a real capture",
      width: 1600,
      height: 900,
      placeholder: true,
    },
    media: [
      {
        type: "image",
        src: "/images/portfolio/_placeholder/wide-1.webp",
        alt: "Placeholder screenshot awaiting a real capture",
        caption: "Replace with a capture of the delivered work.",
        width: 1600,
        height: 900,
        placeholder: true,
      },
      {
        type: "image",
        src: "/images/portfolio/_placeholder/wide-2.webp",
        alt: "Placeholder screenshot awaiting a real capture",
        caption: "Replace with a capture of the delivered work.",
        width: 1600,
        height: 900,
        placeholder: true,
      },
      {
        type: "image",
        src: "/images/portfolio/_placeholder/mobile-1.webp",
        alt: "Placeholder mobile screenshot awaiting a real capture",
        caption: "Replace with a mobile capture.",
        width: 750,
        height: 1334,
        placeholder: true,
      },
    ],
    situation: [
      "Ved Solutions had product-market fit and a sales team ready to close, but the top of the funnel was inconsistent: traffic arrived, bounced from a generic homepage, and the few leads that converted were expensive.",
    ],
    task:
      "Redesign the funnel end to end so that acquisition, content and paid media worked as one system, and bring customer acquisition cost down.",
    action: [
      { title: "Map the funnel against real behaviour", description: "Session recordings and GA4 funnels showed where prospects actually dropped, which was not where the team assumed." },
      { title: "Segment-specific landing paths", description: "Separate paths for the two buyer personas, each with its own proof points, pricing framing and call to action." },
      { title: "Content built for the mid-funnel", description: "Comparison pages and integration guides targeted the evaluation stage, where the pipeline was leaking." },
      { title: "Paid media on the new paths", description: "LinkedIn and search campaigns pointed at persona-specific pages instead of the homepage, measured on qualified pipeline rather than form fills." },
    ],
    metrics: [
      { value: "Significant", label: "Qualified lead lift", detail: "A significant increase in sales-qualified leads within three months of the new funnel going live." },
      { value: "Lower", label: "Customer acquisition cost", detail: "A meaningful reduction in CAC as spend moved to persona-matched paths." },
    ],
    stack: ["LinkedIn Ads", "Google Ads", "GA4", "HubSpot", "Hotjar", "Landing pages"],
    servicesDelivered: [
      { name: "Performance Marketing", href: "/services/performance-marketing" },
      { name: "LinkedIn Ads", href: "/services/performance-marketing/linkedin-ads" },
      { name: "Landing Pages", href: "/services/web-design-development/landing-pages" },
    ],
    seoTitle: "Ved Solutions B2B Lead Generation Case Study | Cinute InfoMedia",
    seoDescription:
      "How a funnel redesign, mid-funnel content and persona-matched paid media scaled qualified pipeline and reduced CAC for a B2B SaaS.",
  },

  {
    id: "maple-ai-automation",
    slug: "maple-ai-automation",
    client: "Maple",
    industry: "EdTech",
    category: "app-dev",
    featured: true,
    title: "An AI assistant and CRM automation for student support",
    summary:
      "A retrieval-grounded assistant answering from Maple's own course material, wired into their CRM so routine enquiries route and resolve themselves.",
    year: "2025",
    duration: "10 weeks",
    platforms: ["Web", "CRM"],
    deliverables: [
      "Retrieval-grounded AI assistant",
      "CRM integration",
      "Escalation & handoff rules",
      "Enquiry routing automation",
    ],
    // PLACEHOLDERS — neutral grey frames, not client work. Replace with real
    // captures in /images/portfolio/maple-ai-automation/ and delete `placeholder: true`.
    cover: {
      type: "image",
      src: "/images/portfolio/_placeholder/cover.webp",
      alt: "Placeholder cover image awaiting a real capture",
      width: 1600,
      height: 900,
      placeholder: true,
    },
    media: [
      {
        type: "image",
        src: "/images/portfolio/_placeholder/wide-1.webp",
        alt: "Placeholder screenshot awaiting a real capture",
        caption: "Replace with a capture of the delivered work.",
        width: 1600,
        height: 900,
        placeholder: true,
      },
      {
        type: "image",
        src: "/images/portfolio/_placeholder/wide-2.webp",
        alt: "Placeholder screenshot awaiting a real capture",
        caption: "Replace with a capture of the delivered work.",
        width: 1600,
        height: 900,
        placeholder: true,
      },
      {
        type: "image",
        src: "/images/portfolio/_placeholder/mobile-1.webp",
        alt: "Placeholder mobile screenshot awaiting a real capture",
        caption: "Replace with a mobile capture.",
        width: 750,
        height: 1334,
        placeholder: true,
      },
    ],
    situation: [
      "Maple's support team spent most of its week answering the same questions: start dates, prerequisites, fee structures, certification details. Every answer already existed in the company's own material, but prospective students could not find it, so they asked a human.",
      "Routine and genuinely complex enquiries arrived through the same channel, so the questions that actually needed a person waited behind the ones that did not.",
    ],
    task:
      "Resolve routine enquiries automatically and accurately, hand off cleanly when a human is needed, and make sure every conversation lands in the CRM with its history intact.",
    action: [
      { title: "Ground the assistant in Maple's content", description: "Retrieval over Maple's course documentation rather than a generic model, so answers stay accurate and update when the source does." },
      { title: "Design the handoff first", description: "Defined what the assistant must never attempt — fees, refunds, an individual's enrolment status — and built a clean escalation to a person for those cases." },
      { title: "Wire it into the CRM", description: "Conversations create and update CRM records automatically, so an enquiry that reaches the team arrives with its full history attached." },
      { title: "Automate the routing", description: "Workflow rules route each enquiry to the right team by course and stage, removing the manual triage step." },
    ],
    metrics: [
      { value: "200+", label: "Hours saved per month", detail: "Routine, repeatable enquiries resolved without a person — more than 200 support hours returned to the team each month." },
      { value: "Higher", label: "Student engagement", detail: "Immediate answers, including outside office hours, kept prospective students in the conversation." },
      { value: "Faster", label: "Response to complex cases", detail: "With routine questions handled automatically, the enquiries that need a person are reached sooner." },
    ],
    stack: ["OpenAI API", "Vector search", "Node.js", "TypeScript", "HubSpot CRM", "Webhooks", "Next.js"],
    servicesDelivered: [
      { name: "AI-Powered Chatbots", href: "/services/ai-chatbots-services" },
      { name: "AI Workflows & Automation", href: "/services/ai-workflows-automations-services" },
      { name: "Support & Maintenance", href: "/services/additional-support-services" },
    ],
    seoTitle: "Maple AI Chatbot & CRM Automation Case Study | Cinute InfoMedia",
    seoDescription:
      "How a retrieval-grounded AI assistant plus CRM automation saved Maple 200+ support hours a month.",
  },

  {
    id: "cloudscale-nextjs-platform",
    slug: "cloudscale-nextjs-platform",
    client: "CloudScale.io",
    industry: "SaaS Startup",
    category: "web-dev",
    featured: false,
    title: "A Next.js platform built for concurrent load",
    summary:
      "A high-concurrency web application on Next.js, engineered so that traffic spikes are a hosting bill rather than an outage.",
    year: "2025",
    duration: "5 months",
    platforms: ["Web"],
    deliverables: [
      "Next.js platform build",
      "Edge caching strategy",
      "Streamed dashboard routes",
      "Load-test report",
    ],
    // PLACEHOLDERS — neutral grey frames, not client work. Replace with real
    // captures in /images/portfolio/cloudscale-nextjs-platform/ and delete `placeholder: true`.
    cover: {
      type: "image",
      src: "/images/portfolio/_placeholder/cover.webp",
      alt: "Placeholder cover image awaiting a real capture",
      width: 1600,
      height: 900,
      placeholder: true,
    },
    media: [
      {
        type: "image",
        src: "/images/portfolio/_placeholder/wide-1.webp",
        alt: "Placeholder screenshot awaiting a real capture",
        caption: "Replace with a capture of the delivered work.",
        width: 1600,
        height: 900,
        placeholder: true,
      },
      {
        type: "image",
        src: "/images/portfolio/_placeholder/wide-2.webp",
        alt: "Placeholder screenshot awaiting a real capture",
        caption: "Replace with a capture of the delivered work.",
        width: 1600,
        height: 900,
        placeholder: true,
      },
      {
        type: "image",
        src: "/images/portfolio/_placeholder/mobile-1.webp",
        alt: "Placeholder mobile screenshot awaiting a real capture",
        caption: "Replace with a mobile capture.",
        width: 750,
        height: 1334,
        placeholder: true,
      },
    ],
    situation: [
      "CloudScale.io was growing faster than its marketing site and dashboard could handle. Launch-day traffic had taken the previous site down twice, and the dashboard's server-rendered pages queued under load.",
    ],
    task:
      "Ship a platform that stays fast under concurrent traffic, without a rewrite of the product backend it fronts.",
    action: [
      { title: "Static where it can be, dynamic where it must", description: "Marketing routes prerendered and edge-cached; dashboard routes streamed with React Server Components so the shell paints before data arrives." },
      { title: "Cache and revalidate deliberately", description: "Per-route revalidation and tagged cache invalidation so content updates propagate without a full rebuild." },
      { title: "Load-test before launch", description: "Synthetic concurrency runs against staging surfaced two N+1 API calls and a render bottleneck before real users did." },
    ],
    metrics: [
      { value: "High", label: "Concurrent traffic handled", detail: "Launch traffic spikes absorbed without degradation after the move to static and streamed rendering." },
      { value: "Strong", label: "Performance under load", detail: "Page timings held steady through synthetic concurrency tests well above the previous failure point." },
    ],
    stack: ["Next.js", "React Server Components", "TypeScript", "Edge caching", "Vercel", "k6", "PostgreSQL"],
    servicesDelivered: [
      { name: "Next.js Development", href: "/services/web-design-development/nextjs-development-services" },
      { name: "SaaS Development", href: "/services/web-design-development/saas-development-services" },
      { name: "Node.js Backend", href: "/services/web-design-development/nodejs-backend" },
    ],
    testimonial: {
      quote:
        "As a fast-growing SaaS startup, we needed a web development company that understood scalability. Their team delivered a Next.js application that handles high concurrent traffic with strong performance.",
      attribution: "CloudScale.io",
      role: "SaaS Startup",
    },
    seoTitle: "CloudScale.io Next.js Platform Case Study | Cinute InfoMedia",
    seoDescription:
      "How a static-plus-streamed Next.js architecture gave CloudScale.io a platform that stays fast under concurrent launch traffic.",
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
