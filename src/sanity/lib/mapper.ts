import { BlogPost, Author, ContentBlock, getCategorySlug } from '@/data/blog';
import { Job } from '@/types/careers';
import { urlFor } from './image';

// Sanity's CDN resizes and negotiates the format, so the originals (often
// multi-megabyte PNGs) never reach the browser. `fit: max` only ever scales
// down, so aspect ratios are untouched, and `auto: format` keeps serving the
// original format to clients that don't advertise webp/avif — social crawlers
// reading these same URLs from the OG tags still get something they can read.
const postImageUrl = (source: any) =>
    urlFor(source).width(1200).fit('max').auto('format').quality(75).url();

const avatarUrl = (source: any) =>
    urlFor(source).width(400).fit('max').auto('format').quality(75).url();

/**
 * Serializes Sanity Portable Text block children with marks into HTML
 * Handles links, bold, italic, and other inline formatting
 */
function serializePortableTextBlock(block: any): string {
    if (!block.children || !Array.isArray(block.children)) return '';

    return block.children.map((child: any) => {
        let text = child.text || '';

        // Apply marks (links, bold, italic, etc.)
        if (child.marks && Array.isArray(child.marks) && child.marks.length > 0) {
            // Process marks in reverse to handle nested formatting correctly
            const marks = [...child.marks].reverse();

            marks.forEach((mark: string) => {
                // Find mark definition for links
                const markDef = block.markDefs?.find((def: any) => def._key === mark);

                if (markDef?._type === 'link') {
                    // Handle links with proper styling
                    const href = markDef.href || '#';
                    text = `<a href="${href}" class="text-[var(--brand-purple)] hover:underline transition-colors">${text}</a>`;
                } else if (mark === 'strong') {
                    text = `<strong style='color: var(--foreground)'>${text}</strong>`;
                } else if (mark === 'em') {
                    text = `<em>${text}</em>`;
                } else if (mark === 'code') {
                    text = `<code>${text}</code>`;
                } else if (mark === 'underline') {
                    text = `<u>${text}</u>`;
                } else if (mark === 'strike-through') {
                    text = `<s>${text}</s>`;
                }
            });
        }

        return text;
    }).join('');
}

export function mapSanityPostToBlogPost(sanityPost: any): BlogPost {
    return {
        id: sanityPost._id,
        title: sanityPost.title,
        slug: sanityPost.slug,
        excerpt: sanityPost.excerpt || '',
        content: sanityPost.markdownContent || '', // Fallback to markdown if blocks fail
        contentBlocks: mapSanityBlocksToContentBlocks(sanityPost.content),
        author: mapSanityAuthorToAuthor(sanityPost.author),
        category: sanityPost.category?.name || 'Uncategorized',
        // Editors set category slugs by hand, so they can't be derived from the
        // name ("AI & Automation" is ai-automation, but "Enterprise AI &
        // Automation" is enterprise-ai-and-automation). Always use the stored one.
        categorySlug: sanityPost.category?.slug?.current || getCategorySlug(sanityPost.category?.name || ''),
        tags: sanityPost.tags || [],
        image: sanityPost.mainImage ? postImageUrl(sanityPost.mainImage) : '',
        publishedAt: sanityPost.publishedAt,
        readTime: sanityPost.readTime || 5,
        featured: sanityPost.featured || false,
        seo: sanityPost.seo,
        schema: sanityPost.schema,
    };
}

/**
 * Reduces a post to the fields its list views actually render (cards, search
 * suggestions, sidebars): everything else still gets serialized into the RSC
 * payload sent to the browser. postFields attaches each post's seo and schema
 * objects plus the author's full record — bio, email, social links, their own
 * seo — and the blog index ships 62 posts twice over, once for the grid and
 * once for the navbar search. Cards only ever show an author's name and photo.
 *
 * Server-side consumers (metadata, JSON-LD) must keep using the untrimmed post.
 */
export function toListPost(post: BlogPost): BlogPost {
    return {
        ...post,
        content: '',
        contentBlocks: [],
        seo: undefined,
        schema: undefined,
        author: {
            id: post.author.id,
            name: post.author.name,
            image: post.author.image,
            title: '',
            bio: '',
            email: '',
        },
    };
}

export function mapSanityAuthorToAuthor(sanityAuthor: any): Author {
    if (!sanityAuthor) {
        return {
            id: 'unknown',
            name: 'Unknown Author',
            title: '',
            bio: '',
            image: '',
            email: '',
        }
    }
    return {
        id: sanityAuthor._id || sanityAuthor.slug, // Use slug or ID
        name: sanityAuthor.name,
        title: sanityAuthor.title || '',
        bio: sanityAuthor.bio || '',
        image: sanityAuthor.image ? avatarUrl(sanityAuthor.image) : '',
        email: sanityAuthor.email || '',
        social: sanityAuthor.social,
        seo: sanityAuthor.seo,
        postsCount: sanityAuthor.postsCount,
    };
}

export function mapSanityBlocksToContentBlocks(sanityBlocks: any[]): ContentBlock[] {
    if (!sanityBlocks || !Array.isArray(sanityBlocks)) return [];

    const contentBlocks: ContentBlock[] = [];
    let currentListBlock: any = null;

    for (const block of sanityBlocks) {
        // Handle List Items
        if (block._type === 'block' && block.listItem) {
            const listStyle = block.listItem === 'number' ? 'numbered' : 'bullet';
            // Serialize like any other block, so bold/italic/code/links an editor
            // applied inside a bullet survive instead of being flattened to text.
            const content = serializePortableTextBlock(block);

            if (currentListBlock && currentListBlock.style === listStyle) {
                // Continue existing list
                currentListBlock.items.push(content);
            } else {
                // Start new list. Push previous list if it exists.
                if (currentListBlock) {
                    contentBlocks.push(currentListBlock);
                }
                currentListBlock = {
                    id: block._key,
                    type: 'list',
                    style: listStyle,
                    items: [content]
                };
            }
        } else {
            // If we encounter a non-list block, close any open list
            if (currentListBlock) {
                contentBlocks.push(currentListBlock);
                currentListBlock = null;
            }

            // --- Handle other blocks ---

            if (block._type === 'block') {
                // Headings
                if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(block.style)) {
                    contentBlocks.push({
                        id: block._key,
                        type: 'text',
                        variant: block.style,
                        content: serializePortableTextBlock(block)
                    });
                    continue;
                }

                // Paragraphs (default)
                contentBlocks.push({
                    id: block._key,
                    type: 'text',
                    variant: 'paragraph',
                    content: serializePortableTextBlock(block)
                });
                continue;
            }

            if (block._type === 'image') {
                contentBlocks.push({
                    id: block._key,
                    type: 'image',
                    src: block.asset ? postImageUrl(block.asset) : '',
                    alt: block.alt || '',
                    caption: block.caption
                });
                continue;
            }

            if (block._type === 'codeBlock') {
                contentBlocks.push({
                    id: block._key,
                    type: 'code',
                    language: block.language,
                    code: block.code,
                    filename: block.filename
                });
                continue;
            }

            if (block._type === 'quoteBlock') {
                contentBlocks.push({
                    id: block._key,
                    type: 'quote',
                    content: block.content,
                    author: block.author
                });
                continue;
            }

            if (block._type === 'callout') {
                contentBlocks.push({
                    id: block._key,
                    type: 'callout',
                    variant: block.variant,
                    title: block.title,
                    content: block.content
                });
                continue;
            }

            if (block._type === 'tableBlock') {
                // Adapter for @sanity/table
                // The plugin returns: { rows: [{ cells: ["val1", "val2"], _type: "tableRow", _key: "..." }] }
                // We assume the first row is the header
                const rawRows = block.rows || [];
                const headers = rawRows.length > 0 ? rawRows[0].cells : [];
                const rows = rawRows.length > 1 ? rawRows.slice(1).map((r: any) => r.cells) : [];

                contentBlocks.push({
                    id: block._key,
                    type: 'table',
                    headers: headers,
                    rows: rows
                });
                continue;
            }

            if (block._type === 'contactButton') {
                contentBlocks.push({
                    id: block._key,
                    type: 'contactButton',
                    text: block.text || 'Contact Us',
                    variant: block.variant || 'primary'
                });
                continue;
            }
        }
    }

    // Push any remaining list block at the end
    if (currentListBlock) {
        contentBlocks.push(currentListBlock);
    }


    return contentBlocks.filter(Boolean) as ContentBlock[];
}

export function mapSanityJobToJob(sanityJob: any): Job {
    return {
        id: sanityJob._id,
        title: sanityJob.title,
        department: sanityJob.department,
        location: sanityJob.location,
        type: sanityJob.type,
        description: sanityJob.description,
        requirements: sanityJob.requirements || [],
    };
}
