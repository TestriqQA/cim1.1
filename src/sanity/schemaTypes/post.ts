import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'markdownContent',
            title: 'Legacy Markdown Content',
            type: 'text',
            description: 'Original markdown content buffer. Use "Content" for the active editor.',
            rows: 10,
            hidden: ({ document }) => !document?.markdownContent,
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: { type: 'category' },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                { name: 'alt', type: 'string', title: 'Alternative Text' },
                { name: 'caption', type: 'string', title: 'Caption' }
            ]
        }),
        defineField({
            name: 'seo',
            title: 'SEO Metadata',
            type: 'object',
            fields: [
                { name: 'metaTitle', title: 'Meta Title', type: 'string', description: 'Overwrites the default title for SEO' },
                { name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3, description: 'Overwrites the default excerpt for SEO' },
                { name: 'canonicalUrl', title: 'Canonical URL', type: 'url' },
            ]
        }),
        defineField({
            name: 'schema',
            title: 'Schema / Structured Data',
            type: 'object',
            description: 'Optional overrides for JSON-LD structured data. Leave empty to auto-generate from post data.',
            fields: [
                {
                    name: 'articleType',
                    title: 'Article Type',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Blog Posting', value: 'BlogPosting' },
                            { title: 'Article', value: 'Article' },
                            { title: 'Tech Article', value: 'TechArticle' },
                            { title: 'News Article', value: 'NewsArticle' },
                        ],
                    },
                    initialValue: 'BlogPosting',
                    description: 'Defaults to BlogPosting if not set',
                },
                {
                    name: 'keywords',
                    title: 'Schema Keywords',
                    type: 'array',
                    of: [{ type: 'string' }],
                    description: 'Override keywords for schema markup. Falls back to post tags if empty.',
                },
                {
                    name: 'dateModified',
                    title: 'Date Modified',
                    type: 'datetime',
                    description: 'Last significant content update. Falls back to publishedAt if empty.',
                },
                {
                    name: 'wordCount',
                    title: 'Word Count',
                    type: 'number',
                    description: 'Approximate word count. Auto-estimated from content if empty.',
                },
            ],
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            description: 'Shown as the post date and used to order posts, newest first.',
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'readTime',
            title: 'Read Time (minutes)',
            type: 'number',
        }),
        defineField({
            name: 'featured',
            title: 'Featured Post',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                { type: 'block' },
                {
                    type: 'image',
                    fields: [
                        { name: 'alt', type: 'string', title: 'Alternative Text' },
                        { name: 'caption', type: 'string', title: 'Caption' }
                    ]
                },
                { type: 'codeBlock' },
                { type: 'callout' },
                { type: 'quoteBlock' },
                { type: 'tableBlock' },
                { type: 'contactButton' },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author && `by ${author}` }
        },
    },
})
