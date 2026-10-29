import { defineQuery } from "next-sanity";

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`);

// A post's effective date. `publishedAt` is set by editors and can be empty;
// null sorts first in GROQ but reads as 1970 in the browser, so fall back to
// when the document was created.
const postDate = /* groq */ `coalesce(publishedAt, _createdAt)`;

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  mainImage,
  "author": author->{name, image, slug, bio, title, email, social, seo},
  "category": category->{name, slug, color},
  "publishedAt": ${postDate},
  readTime,
  featured,
  tags,
  seo,
  schema
`;

export const heroQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(${postDate} desc, _updatedAt desc) [0] {
    content,
    ${postFields}
  }
`);

export const moreStoriesQuery = defineQuery(`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(${postDate} desc, _updatedAt desc) [0...$limit] {
    ${postFields}
  }
`);

export const allPostsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(${postDate} desc, _updatedAt desc) {
    ${postFields}
  }
`);

export const postQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug] [0] {
    content[]{
      ...,
      _type == "image" => {
        ...,
        asset->
      }
    },
    ${postFields},
    markdownContent,
    seo
  }
`);

export const categoriesQuery = defineQuery(`
  *[_type == "category"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    description,
    longDescription,
    icon,
    color,
    relatedTopics,
    featuredTags
  }
`);

export const categoryQuery = defineQuery(`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    description,
    longDescription,
    icon,
    color,
    relatedTopics,
    featuredTags,
    seo
  }
`);

export const categoryPostsQuery = defineQuery(`
  *[_type == "post" && category->slug.current == $slug] | order(${postDate} desc) {
    ${postFields}
  }
`);

export const authorsQuery = defineQuery(`
  *[_type == "author"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    image,
    bio,
    title,
    social,
    postsCount
  }
`);

export const authorQuery = defineQuery(`
  *[_type == "author" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    image,
    bio,
    title,
    social,
    postsCount,
    email,
    seo
  }
`);


export const authorPostsQuery = defineQuery(`
  *[_type == "post" && author->slug.current == $slug] | order(${postDate} desc) {
    ${postFields}
  }
`);

export const categoriesWithPostCountQuery = defineQuery(`
  *[_type == "category"] | order(name asc) {
    name,
    "slug": slug.current,
    "count": count(*[_type == "post" && references(^._id)])
  }
`);

export const jobsQuery = defineQuery(`
  *[_type == "job"] | order(publishedAt desc) {
    _id,
    title,
    department,
    location,
    type,
    description,
    requirements
  }
`);
