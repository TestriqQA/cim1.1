import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }
            ]
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'text',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'social',
            title: 'Social Media',
            type: 'object',
            fields: [
                defineField({ name: 'twitter', title: 'Twitter URL', type: 'url' }),
                defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
                defineField({ name: 'github', title: 'GitHub URL', type: 'url' }),
            ],
        }),
        defineField({
            name: 'seo',
            title: 'SEO & Schema',
            type: 'object',
            description: 'Optional SEO overrides for author profile page. Leave empty for auto-generated defaults.',
            fields: [
                { name: 'metaTitle', title: 'Meta Title', type: 'string', description: 'Custom page title (e.g., "John Doe — Senior Developer & Tech Writer | CIM")' },
                { name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3, description: 'Custom description. Falls back to bio if empty.' },
                { name: 'jobTitle', title: 'Job Title (Schema)', type: 'string', description: 'Schema-specific job title. Falls back to "title" field if empty.' },
                {
                    name: 'knowsAbout',
                    title: 'Areas of Expertise',
                    type: 'array',
                    of: [{ type: 'string' }],
                    description: 'Topics this author is expert in (used in Person schema for E-E-A-T)',
                },
            ],
        }),
    ],
})
