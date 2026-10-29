// ============================================================================
// CONTENT BLOCK TYPES - MODULAR CONTENT SYSTEM
// ============================================================================

export type ContentBlockType =
  | 'text'       // Paragraphs, headings
  | 'list'       // Bullet/numbered lists  
  | 'image'      // Images with captions
  | 'code'       // Code blocks with syntax highlighting
  | 'quote'      // Blockquotes
  | 'callout'    // Info/warning/tip boxes
  | 'table'      // Data tables
  | 'contactButton'; // Contact Us button

export interface BaseContentBlock {
  id: string;
  type: ContentBlockType;
}

export interface TextBlock extends BaseContentBlock {
  type: 'text';
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'paragraph';
  content: string;
}

export interface ListBlock extends BaseContentBlock {
  type: 'list';
  style: 'bullet' | 'numbered';
  items: string[];
}

export interface ImageBlock extends BaseContentBlock {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
}

export interface CodeBlock extends BaseContentBlock {
  type: 'code';
  language: string;
  code: string;
  filename?: string;
}

export interface QuoteBlock extends BaseContentBlock {
  type: 'quote';
  content: string;
  author?: string;
}

export interface CalloutBlock extends BaseContentBlock {
  type: 'callout';
  variant: 'info' | 'warning' | 'tip' | 'note';
  title?: string;
  content: string;
}

export interface TableBlock extends BaseContentBlock {
  type: 'table';
  headers: string[];
  rows: string[][];
}

export interface ContactButtonBlock extends BaseContentBlock {
  type: 'contactButton';
  text: string;
  variant: 'primary' | 'secondary';
}

export type ContentBlock =
  | TextBlock
  | ListBlock
  | ImageBlock
  | CodeBlock
  | QuoteBlock
  | CalloutBlock
  | TableBlock
  | ContactButtonBlock;

// ============================================================================
// AUTHOR & POST TYPES
// ============================================================================

export interface Author {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  email: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    jobTitle?: string;
    knowsAbout?: string[];
  };
  postsCount?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;               // Legacy markdown content (backwards compatible)
  contentBlocks?: ContentBlock[]; // New modular content blocks (optional)
  author: Author;
  category: string;
  /** The category's own slug from the CMS — the only reliable way to link to it. */
  categorySlug: string;
  tags: string[];
  image: string;
  publishedAt: string;
  readTime: number;
  featured?: boolean;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    canonicalUrl?: string;
  };
  schema?: {
    articleType?: string;
    keywords?: string[];
    dateModified?: string;
    wordCount?: number;
  };
}

/** A category reduced to what a link needs: its label and its CMS slug. */
export interface BlogCategoryLink {
  name: string;
  slug: string;
}

// Category Details Interface
export interface CategoryDetails {
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  relatedTopics: string[];
  featuredTags: string[];
}

// Authors
export const authors: Author[] = [];

// Blog Categories
export const categories: string[] = [];


// Category Details Data
export const categoryDetails: CategoryDetails[] = [];

// Helper function to generate URL-safe category slug from name
export function getCategorySlug(categoryName: string): string {
  return categoryName
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/\//g, "-")
    .replace(/\s+/g, "-")
    .replace(/\-\-+/g, "-")
    .replace(/^-|-$/g, "");
}

// Helper function to get category details by name or slug
export function getCategoryDetails(identifier: string): CategoryDetails | undefined {
  const normalizedId = identifier.toLowerCase().replace(/&/g, "").replace(/\//g, "");
  return categoryDetails.find(
    (cat) => cat.name.toLowerCase() === identifier.toLowerCase() ||
      cat.slug === identifier.toLowerCase() ||
      cat.slug === normalizedId
  );
}

// Blog Posts
export const blogPosts: BlogPost[] = [];

export function getAllTags(): string[] {
  return [];
}
