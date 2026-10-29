# Why CIM isn't getting indexed — Deep-Dive (evidence-based)

_Date: 2026-06-04 · Live technical investigation of the GSC indexing problem (Indexed 14 / 183)._

## Verdict (one line)
**It is NOT a technical/code problem.** Every technical indexability signal is correct. The site is
not indexing because of **low domain authority + crawl budget** — Google doesn't yet "trust" the
domain enough to spend crawl resources indexing 150+ pages. The fix is **off-page authority**, not code.

## Evidence — every technical signal checked LIVE (all GREEN)
| Signal | Finding | Verdict |
|---|---|---|
| `robots.txt` | `Allow: /`; only `/private/`,`/api/` blocked; sitemap declared | ✅ no block |
| Sitemap | 155 URLs, returns 200, valid | ✅ |
| HTTP status (sample 9 pages) | all **200** | ✅ |
| `X-Robots-Tag` header | none on any page | ✅ no block |
| `<meta robots>` | `index, follow` on all real pages (author pages intentionally `noindex` = our I-3) | ✅ |
| Canonical | **self-referential** on every page (no wrong/cross canonicals) | ✅ |
| Server-side rendering | content present in raw HTML (470–2135 words; Google needs no JS) | ✅ |
| Internal linking | hub → **24** sub-page links; homepage → **67** internal links (deep pages discoverable, not orphaned) | ✅ |
| Redirects | 4 GSC 404s now 308→200; no chains/loops | ✅ |
| Fabricated claims | removed (code + Sanity) — quality/trust improved | ✅ |
| Structured data (JSON-LD) | every page type has **valid** rich schema (Organization, WebSite, WebPage, Breadcrumb, Service, FAQPage, BlogPosting, SoftwareApplication, ItemList, AboutPage); product pages use SoftwareApplication; **no fake aggregateRating** (C-1 holds). FAQ/HowTo markup valid but Google deprecated those rich-results in 2023 (harmless). | ✅ |

➡️ **There is no hidden noindex, no robots block, no canonical mistake, no JS-only shell, no orphan pages.**
A site this technically clean that still won't index points to **one cause: authority/trust.**

## What the GSC buckets actually mean (the real diagnosis)
- **138 "Discovered – currently not indexed"** → Google found these URLs (from the sitemap) but
  **chose not to even crawl them.** This is Google's textbook signal for **"this domain isn't important
  enough yet — we're rationing crawl budget."** It is an **authority/trust** decision, not a page problem.
- **24 "Crawled – currently not indexed"** → crawled but didn't clear the **quality/uniqueness bar**
  (the thin pages — see `phase4-content-plan.md`).
- **Indexed flat ~14 while not-indexed exploded 30→180 (Apr–May)** → classic pattern of a **young/low-
  authority domain that bulk-published many similar pages faster than its authority can support.**

## Root causes (ranked)
1. **🔴 Low domain authority / few backlinks** — the dominant factor. Google indexes deep pages of sites
   it trusts; trust comes from **external links + citations + brand signals**, which CIM currently lacks.
2. **🔴 Crawl budget** — low-authority + ~155 URLs → Google crawls a small slice, ignores the rest.
3. **🟠 Too many pages for current authority** — 180 pages is a lot for a young domain; thin/near-template
   pages dilute crawl budget away from the strong pages.
4. **🟠 Content depth** on ~12 thin pages (perf-marketing ad pages etc.).
5. **🟢 Site freshness/history** — needs time + consistent signals; indexing is gradual, not instant.

## What will actually fix it (priority order)
1. **🔴 Build domain authority (off-page) — the unlock.** Backlinks (guest posts, listicles, HARO/digital
   PR, CDPL cross-link), Google Business Profile, directory citations (Clutch/GoodFirms/Sortlist),
   real reviews. → see full playbook in `ranking-action-plan.md`. **This is what raises crawl budget.**
2. **🟠 Concentrate crawl budget:** consider consolidating/merging the thinnest near-duplicate pages so
   Google spends its limited crawl on fewer, stronger pages (fewer-but-better indexes better than
   many-but-thin on a low-authority domain).
3. **🟠 Strengthen the ~12 thin pages** (`phase4-content-plan.md`) so crawled pages clear the quality bar.
4. **🟢 Nudge Google in GSC:** re-submit sitemap → URL Inspection → **Request Indexing** for the homepage,
   10 hubs, and top blog posts (don't bulk-request all 155 — prioritize). Use "Validate Fix" on the 404s.
5. **🟢 Keep internal linking strong** (already good) and add links from any pages that DO get indexed/
   ranked to priority deep pages.

## Honest expectation
Indexing on a low-authority domain improves **gradually over weeks–months** as authority signals
accumulate. There is **no code toggle** that fixes this — the code side is already optimal. The lever is
**off-page authority (owner-driven)** + pruning/strengthening thin content.
