// ============================================================================
// TEAM DATA — Cinute InfoMedia leadership & specialists
// ============================================================================
// Single source of truth for /our-team. The cards in
// `components/our-team/Leaders` + `FeaturedMembers` and the `Person` entities in
// the page's JSON-LD @graph all read from this array, so a role or link can
// never drift between what a visitor sees and what a search engine is told.
//
// Portrait sources live in `public/images/team/`. The originals were circular
// cut-outs on transparent canvases, framed inconsistently — some tight
// close-ups, others sitting well back with dead space above the head (and
// Sandeep's disc sat 24px low on an off-square canvas). They have been
// re-cropped on the FACE rather than on the disc, so every subject's hairline
// lands at 14% from the top of the frame and heads read at a consistent size.
// The disc is flattened onto its own sampled background, so the square is
// opaque and the circular mask is applied in CSS instead.
//
// They are also normalised on HEAD SIZE, not just head position: the crop is
// scaled so each skull spans ~45% of the frame width. Sandeep's and Elvita's
// originals were shot further back (heads at 34% vs the group's 45%), which is
// what made them read as small and set back next to the others.
//
// Every portrait is 576px square — exactly 2x the 288px leader avatar, a true
// retina fit. Avatars render at fixed sizes (288px on the leader cards, 112px
// on the featured cards) rather than filling a flexible box: no CLS, because
// next/image gets explicit width/height.
//
// NOTE: the optical detail in five of the six original leader crops tops out
// around 300px, and the head-size normalisation crops into that, so those are
// upscaled. Sandeep's is the softest (a 223px crop). Higher-resolution
// headshots would be picked up automatically — nothing in the components needs
// to change.
//
// The later portraits (Jayesh, Ved, Priya) were pulled from their Sanity blog
// author records and squared with a saliency-weighted crop, so they are framed
// on the face but not to the same hand-tuned 14%/45% rule as the six above.
// `placeholder-avatar.webp` is a neutral stand-in at the same 576px, used where
// no photo has been supplied yet — swapping in a real portrait is a one-line
// change to that person's `image`.

export interface TeamMember {
  /** Stable slug — used for React keys and JSON-LD @id fragments. */
  id: string;
  /**
   * Which section the person renders in.
   * `leader`   — large card: portrait, bio, focus areas and expertise.
   * `featured` — compact card: portrait, name, designation and LinkedIn.
   */
  tier: "leader" | "featured";
  name: string;
  role: string;
  /** Short specialty line shown under the role. */
  focus: string;
  /** Years of professional experience. Omitted where not published. */
  experience?: string;
  bio: string;
  /** Path under /public. */
  image: string;
  expertise: string[];
  linkedin: string;
  /** Responsibilities listed on the large leader cards. Leaders only. */
  highlights?: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "sandeep-maske",
    tier: "leader",
    name: "Sandeep Maske",
    role: "Founder & CEO",
    focus: "Strategy & Leadership",
    experience: "20+ years",
    bio: "Sandeep leads the Cinute group and set the standard Cinute InfoMedia builds to: engineering that holds up in production, and marketing decisions backed by evidence rather than opinion. Two decades of running delivery and quality organisations sit behind every engagement he scopes.",
    image: "/images/team/sandeep-maske.webp",
    expertise: ["Business Strategy", "Quality Engineering", "Team Leadership"],
    linkedin: "https://www.linkedin.com/in/sandeepmaske",
    highlights: [
      "Company direction and long-term strategy",
      "Final review on major client engagements",
      "Delivery and quality standards across the group",
      "Partnerships and group-level growth",
    ],
  },
  {
    id: "goutam-mishra",
    tier: "leader",
    name: "Goutam Mishra",
    role: "VP, Quality & Business Development",
    focus: "Delivery & Client Engagement",
    experience: "20+ years",
    bio: "Goutam has spent more than twenty years across quality engineering, delivery management and business development. He scopes what a project actually needs, keeps delivery honest against the brief, and coaches the team on the process discipline that makes complex builds predictable.",
    image: "/images/team/goutam-mishra.webp",
    expertise: ["Delivery Management", "Software Testing", "Business Development"],
    linkedin: "https://www.linkedin.com/in/goutam-mishra-96194117/",
    highlights: [
      "Scoping and estimation for new engagements",
      "Delivery governance against the agreed brief",
      "Quality process across client projects",
      "Mentoring the team on delivery management",
    ],
  },
  {
    id: "rohan-maske",
    tier: "leader",
    name: "Rohan Maske",
    role: "Co-Founder & VP of Marketing",
    focus: "Growth & Performance Marketing",
    experience: "8+ years",
    bio: "Rohan runs marketing for Cinute InfoMedia, drawing on eight-plus years across business development, performance marketing, analytics and talent acquisition. His job is turning what the data says into the next campaign decision — and recognising when the data is not saying anything yet.",
    image: "/images/team/rohan-maske.webp",
    expertise: ["Performance Marketing", "Data Analysis", "Brand Strategy"],
    linkedin: "https://www.linkedin.com/in/rohan-maske/",
    highlights: [
      "Performance marketing and paid acquisition",
      "Analytics, reporting and campaign decisions",
      "Brand positioning and messaging",
      "Talent acquisition and team growth",
    ],
  },
  {
    id: "elvita-gomes",
    tier: "featured",
    name: "Elvita Gomes",
    role: "Human Resources Specialist",
    focus: "People Operations & Hiring",
    bio: "Elvita looks after people operations — hiring, onboarding, and the day-to-day support that keeps a distributed team working well together. If you apply to Cinute InfoMedia, she is usually the first person you will hear from.",
    image: "/images/team/elvita-gomes.webp",
    expertise: ["Talent Acquisition", "Onboarding", "Employee Experience"],
    linkedin: "https://www.linkedin.com/in/elvita07",
  },
  {
    id: "prakash-mishra",
    tier: "featured",
    name: "Prakash Mishra",
    role: "Co-Founder & Lead S/W Engineer",
    focus: "Web Engineering & Architecture",
    bio: "Prakash leads engineering on client builds: architecture decisions, code review, and the performance and accessibility work that decides whether a site is genuinely fast for real people on real devices. Most of our Next.js and headless-CMS work ships through his review.",
    image: "/images/team/prakash-mishra.webp",
    expertise: ["Next.js & React", "System Architecture", "Web Performance"],
    linkedin: "https://www.linkedin.com/in/prakashmmishra/",
  },
  {
    id: "aakash-yadav",
    tier: "featured",
    name: "Aakash Yadav",
    role: "QA Lead & Business Strategy Manager",
    focus: "Quality Engineering • Business Strategy • Partnerships",
    experience: "8+ years",
    bio: "Aakash brings 8+ years of QA experience to connecting business needs with practical technology solutions. He leads quality initiatives, supports digital growth planning, and develops client and partner relationships across Testriq QA Lab and Cinute Infomedia. His work includes exploring AI and automation, identifying collaboration opportunities, and helping shape solutions that support clients' business goals.",
    image: "/images/team/aakash-yadav.webp",
    expertise: ["Quality Engineering", "Business Strategy", "Partnerships"],
    linkedin: "https://www.linkedin.com/in/aakashyadav9890/",
  },
  {
    id: "jayesh-mistry",
    tier: "featured",
    name: "Jayesh Mistry",
    role: "Lead Web Developer & UI Designer",
    focus: "Interfaces & Responsive Web",
    bio: "Jayesh builds the interfaces people actually touch — responsive layouts and design systems that hold together from a 320px phone to a wide desktop. He is also the most prolific writer on the CIM blog, which is usually where a new pattern gets explained before it ships.",
    image: "/images/team/jayesh-mistry.webp",
    expertise: ["UI Design", "Responsive Web", "Front-end Development"],
    linkedin: "https://www.linkedin.com/in/jayesh-mistry-53300235b",
  },
  {
    id: "sushma-pal",
    tier: "featured",
    name: "Sushma Pal",
    role: "Lead SEO Analyst",
    focus: "Organic Growth & Content",
    bio: "Sushma analyses what search is actually rewarding in a client's category and turns it into a content and optimisation plan. Her work is the bridge between a technical SEO audit and the pages that get written because of it.",
    // No photo on file yet — see the note on Ratnesh above.
    image: "/images/team/placeholder-avatar.webp",
    expertise: ["Technical SEO", "Content Strategy", "Organic Growth"],
    linkedin: "https://www.linkedin.com/in/sushma-pal131/",
  },
  {
    id: "ved-patil",
    tier: "featured",
    name: "Ved Patil",
    role: "Lead SEO Executive",
    focus: "On-page & Technical SEO",
    bio: "Ved plans and executes the on-page, technical and content SEO that grows organic traffic and conversions. Their specialism is keyword strategy and SERP analysis — turning search data into rankings rather than into a report nobody acts on.",
    image: "/images/team/ved-patil.webp",
    expertise: ["Keyword Strategy", "SERP Analysis", "On-page SEO"],
    linkedin: "https://www.linkedin.com/in/ved-patil-07511b2b4/",
  },
  {
    id: "ratnesh-waghare",
    tier: "featured",
    name: "Ratnesh Waghare",
    role: "Lead Frontend Developer",
    focus: "Front-end Development",
    bio: "Ratnesh works on the front end of client projects, turning designs into the accessible, responsive markup and components that ship. A fuller profile and portrait are on the way.",
    // No photo on file yet — the shared neutral avatar stands in until one is
    // supplied, so the card renders at the same size as every other portrait.
    image: "/images/team/placeholder-avatar.webp",
    expertise: ["Front-end Development", "UI Engineering", "Responsive Interfaces"],
    linkedin: "https://www.linkedin.com/in/ratnesh-waghare-63782a293/",
  },
  {
    id: "priya-choudhary",
    tier: "featured",
    name: "Priya Choudhary",
    role: "Lead Mobile App Developer",
    focus: "Native & Cross-platform Apps",
    bio: "Priya builds native and cross-platform apps in Flutter and React Native for startups and SMEs across India, with a focus on clean architecture and budget-smart MVPs. She writes about app development cost, tech stacks and shipping faster.",
    image: "/images/team/priya-choudhary.webp",
    expertise: ["Flutter", "React Native", "Mobile Architecture"],
    linkedin: "https://www.linkedin.com/in/choudharypriya/",
  },
];

/**
 * Practice areas the team is organised around. Each links into the service silo,
 * so this array doubles as the /our-team page's internal-linking layer.
 *
 * Ordered to mirror the primary navigation, and deliberately kept at NINE — the
 * page copy ("nine practice areas") and the services mega-menu both promise
 * nine, so a shorter list here reads as a miscount and leaves service hubs
 * unlinked from this page.
 */
export interface TeamDiscipline {
  title: string;
  description: string;
  href: string;
  skills: string[];
}

export const teamDisciplines: TeamDiscipline[] = [
  {
    title: "Web Engineering",
    description:
      "Custom sites and web applications built on modern JavaScript, with performance and accessibility treated as requirements rather than clean-up.",
    href: "/services/web-design-development",
    skills: ["Next.js", "React", "Node.js", "TypeScript", "Headless CMS"],
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform applications, from first prototype through store release and the release cycles that follow.",
    href: "/services/mobile-app-development",
    skills: ["iOS", "Android", "React Native", "Flutter", "Cross-platform"],
  },
  {
    title: "Social Media Marketing",
    description:
      "Channel strategy, content and community management run against the metrics that actually move pipeline rather than vanity reach.",
    href: "/services/social-media-marketing-services",
    skills: ["Content Strategy", "Community", "Instagram", "LinkedIn", "Video"],
  },
  {
    title: "AI Workflows & Automation",
    description:
      "Automations and AI assistants wired into the tools a business already runs on, scoped to the work they actually remove.",
    href: "/services/ai-workflows-automations-services",
    skills: ["Workflow Automation", "Integrations", "LLM Tooling", "RPA"],
  },
  {
    title: "AI-Powered Chatbots",
    description:
      "Assistants that answer from your own content and hand off cleanly to a human the moment they stop being useful.",
    href: "/services/ai-chatbots-services",
    skills: ["Conversational AI", "RAG", "Support Deflection", "CRM Handoff"],
  },
  {
    title: "Organic Growth & SEO",
    description:
      "Technical foundations, on-page structure and content that earns rankings — audited against real crawl and index data.",
    href: "/services/seo-services",
    skills: ["Technical SEO", "On-page SEO", "Local SEO", "Content", "Link Building"],
  },
  {
    title: "Performance Marketing",
    description:
      "Paid acquisition across search, social and marketplaces, measured end to end so spend decisions are made on outcomes.",
    href: "/services/performance-marketing",
    skills: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Analytics", "CRO"],
  },
  {
    title: "Brand Identity & Design",
    description:
      "Identity systems and interface design that stay coherent from a logo lockup through to a production component library.",
    href: "/services/brand-identity-design",
    skills: ["Brand Identity", "UI/UX Design", "Design Systems", "Creative Direction"],
  },
  {
    title: "Support & Maintenance",
    description:
      "The unglamorous half of the job — updates, monitoring, accessibility fixes and the small changes that keep a live site healthy.",
    href: "/services/additional-support-services",
    skills: ["Monitoring", "Security Updates", "Accessibility", "Retainers"],
  },
];

/** Large-card section. Source order is preserved. */
export const leaders: TeamMember[] = teamMembers.filter((m) => m.tier === "leader");

/** Compact-card section. Source order is preserved. */
export const featuredMembers: TeamMember[] = teamMembers.filter((m) => m.tier === "featured");

export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find((member) => member.id === id);
}
