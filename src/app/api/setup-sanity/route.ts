import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';
import { blogPosts, authors, categories, categoryDetails } from '@/data/blog';
import fs from 'fs';
import path from 'path';

// NOTE: To run this, you must have a SANITY_API_TOKEN in your .env.local with write permissions.

function generateKey() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

async function uploadImage(imagePath: string, clientWithToken: any) {
    if (!imagePath) return null;

    try {
        if (imagePath.startsWith('http')) return null;

        const publicDir = path.join(process.cwd(), 'public');
        const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
        const fullPath = path.join(publicDir, cleanPath);

        if (fs.existsSync(fullPath)) {
            const buffer = fs.readFileSync(fullPath);
            const basename = path.basename(fullPath);

            const asset = await clientWithToken.assets.upload('image', buffer, {
                filename: basename
            });

            return {
                _type: 'image',
                asset: {
                    _type: 'reference',
                    _ref: asset._id
                }
            };
        }
        return null;
    } catch (error) {
        console.error(`Failed to upload image ${imagePath}:`, error);
        return null;
    }
}

// Convert simple markdown string to Portable Text blocks
function convertMarkdownToBlocks(markdown: string) {
    if (!markdown) return [];

    const lines = markdown.split('\n');
    const blocks = [];

    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;

        if (trimmed.startsWith('# ')) {
            blocks.push({
                _type: 'block',
                _key: generateKey(),
                style: 'h1',
                children: [{ _type: 'span', _key: generateKey(), text: trimmed.substring(2) }]
            });
        } else if (trimmed.startsWith('## ')) {
            blocks.push({
                _type: 'block',
                _key: generateKey(),
                style: 'h2',
                children: [{ _type: 'span', _key: generateKey(), text: trimmed.substring(3) }]
            });
        } else if (trimmed.startsWith('### ')) {
            blocks.push({
                _type: 'block',
                _key: generateKey(),
                style: 'h3',
                children: [{ _type: 'span', _key: generateKey(), text: trimmed.substring(4) }]
            });
        } else if (trimmed.startsWith('- ')) {
            blocks.push({
                _type: 'block',
                _key: generateKey(),
                style: 'normal',
                listItem: 'bullet',
                children: [{ _type: 'span', _key: generateKey(), text: trimmed.substring(2) }]
            });
        } else {
            blocks.push({
                _type: 'block',
                _key: generateKey(),
                style: 'normal',
                children: [{ _type: 'span', _key: generateKey(), text: trimmed }]
            });
        }
    }
    return blocks;
}

export async function GET(request: Request) {
    // SECURITY: this is a one-time, DESTRUCTIVE seed migration — `createOrReplace`
    // overwrites live Sanity content (categories/authors/posts) with local seed data.
    // It must NOT be publicly triggerable (a random GET/crawler/prefetch would wipe
    // live blog edits). Gate behind a secret; the endpoint is DISABLED unless the
    // server has SANITY_SETUP_SECRET set AND the caller passes the matching ?secret=.
    const setupSecret = process.env.SANITY_SETUP_SECRET;
    const provided = new URL(request.url).searchParams.get('secret');
    if (!setupSecret || provided !== setupSecret) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const token = process.env.SANITY_API_TOKEN;
    if (!token) {
        return NextResponse.json({ error: 'Missing SANITY_API_TOKEN' }, { status: 401 });
    }

    const clientWithToken = client.withConfig({ token });

    try {
        const transaction = clientWithToken.transaction();

        // 1. Migrate Categories
        const categoryIdMap = new Map();
        for (const cat of categoryDetails) {
            const _id = `category-${cat.slug}`;
            categoryIdMap.set(cat.name, _id);

            transaction.createOrReplace({
                _type: 'category',
                _id: _id,
                name: cat.name,
                slug: { _type: 'slug', current: cat.slug },
                description: cat.description,
                longDescription: cat.longDescription,
                icon: cat.icon,
                color: cat.color,
                relatedTopics: cat.relatedTopics,
                featuredTags: cat.featuredTags,
            });
        }

        // 2. Migrate Authors
        const authorIdMap = new Map();
        for (const aut of authors) {
            const _id = `author-${aut.id}`;
            authorIdMap.set(aut.id, _id);

            const imageAsset = await uploadImage(aut.image, clientWithToken);

            transaction.createOrReplace({
                _type: 'author',
                _id: _id,
                name: aut.name,
                slug: { _type: 'slug', current: aut.name.toLowerCase().replace(/\s+/g, '-') },
                title: aut.title,
                bio: aut.bio,
                email: aut.email,
                social: aut.social,
                image: imageAsset,
                postsCount: aut.postsCount || 0,
            });
        }

        // 3. Migrate Posts
        for (const post of blogPosts) {
            const _id = `post-${post.id}`;
            const mainImageAsset = await uploadImage(post.image, clientWithToken);

            let mainContent: any[] = [];

            if (post.contentBlocks && post.contentBlocks.length > 0) {
                const contentPromise = post.contentBlocks.map(async (block) => {
                    if (block.type === 'text') {
                        let style = 'normal';
                        if (block.variant === 'h1') style = 'h1';
                        if (block.variant === 'h2') style = 'h2';
                        if (block.variant === 'h3') style = 'h3';
                        if (block.variant === 'paragraph') style = 'normal';

                        return {
                            _type: 'block',
                            _key: generateKey(),
                            style: style,
                            children: [{ _type: 'span', _key: generateKey(), text: block.content }]
                        }
                    }
                    if (block.type === 'image') {
                        // @ts-ignore
                        const blockImageAsset = await uploadImage(block.src, clientWithToken);
                        if (blockImageAsset) {
                            return {
                                ...blockImageAsset,
                                _key: generateKey(),
                                alt: block.alt,
                                // @ts-ignore
                                caption: block.caption
                            };
                        }
                        return null;
                    }
                    if (block.type === 'code') return { _type: 'codeBlock', _key: generateKey(), ...block };
                    if (block.type === 'quote') return { _type: 'quoteBlock', _key: generateKey(), ...block };
                    if (block.type === 'callout') return { _type: 'callout', _key: generateKey(), ...block };

                    if (block.type === 'table') {
                        return {
                            _type: 'tableBlock',
                            _key: generateKey(),
                            headers: block.headers,
                            rows: block.rows.map(row => ({
                                _key: generateKey(),
                                cells: row
                            }))
                        };
                    }
                    if (block.type === 'list') {
                        // Lists in Portable Text return multiple blocks
                        return block.items.map(item => ({
                            _type: 'block',
                            _key: generateKey(),
                            style: 'normal',
                            listItem: block.style === 'numbered' ? 'number' : 'bullet',
                            children: [{ _type: 'span', _key: generateKey(), text: item }]
                        }));
                    }
                    return null;
                });

                const results = await Promise.all(contentPromise);
                mainContent = results.flat().filter(Boolean);
            } else {
                mainContent = convertMarkdownToBlocks(post.content);
            }

            transaction.createOrReplace({
                _type: 'post',
                _id: _id,
                title: post.title,
                slug: { _type: 'slug', current: post.slug },
                author: { _type: 'reference', _ref: authorIdMap.get(post.author.id) },
                category: { _type: 'reference', _ref: categoryIdMap.get(post.category) },
                excerpt: post.excerpt,
                tags: post.tags,
                publishedAt: post.publishedAt,
                readTime: post.readTime,
                featured: post.featured,
                mainImage: mainImageAsset ? {
                    ...mainImageAsset,
                    alt: post.title, // Default alt to title
                    caption: `Featured image for ${post.title}` // Default caption
                } : undefined,
                seo: {
                    metaTitle: post.title,
                    metaDescription: post.excerpt,
                    canonicalUrl: `https://www.cinuteinfomedia.com/blog/${post.slug}`
                },
                content: mainContent,
                markdownContent: post.content,
            });
        }

        await transaction.commit();
        return NextResponse.json({ success: true, message: 'Migration (v3 - Fixed Keys) completed successfully!' });

    } catch (error: any) {
        console.error('Migration failed:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
