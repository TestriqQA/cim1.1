import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, ArrowRight, Calendar, Clock } from "lucide-react";
import { BlogPost } from "@/data/blog";

interface BlogInsightsProps {
  posts: BlogPost[];
}

export default function BlogInsights({ posts }: BlogInsightsProps) {
  const latestPosts = posts || [];

  return (
    <section
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--border-color)",
      }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "linear-gradient(135deg, var(--brand-purple), var(--brand-cyan))",
        }}
      />

      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "linear-gradient(135deg, var(--brand-cyan), var(--brand-blue))",
        }}
      />

      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-12 xl:px-20 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10 md:mb-12">
          <div>
            <div
              className="items-center px-3.5 py-1.5 sm:px-4 sm:py-2 mb-4"
              style={{
                display: "inline-flex",
                gap: 8,
                borderRadius: 999,
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--border-color)",
              }}
            >
              <BookOpen
                style={{
                  color: "var(--brand-purple)",
                  width: 20,
                  height: 20,
                }}
              />

              <span style={{ fontWeight: 600, fontSize: 14 }}>
                Latest from Blog
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 900,
                lineHeight: 1.2,
              }}
            >
              Insights, strategies &{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, var(--brand-purple), var(--brand-cyan))",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                industry trends
              </span>
            </h2>

            <p
              className="text-[0.9375rem] sm:text-base"
              style={{
                color: "var(--secondary-text)",
                marginTop: 12,
                maxWidth: 500,
              }}
            >
              Stay ahead with expert perspectives on digital marketing, web
              development, and business growth.
            </p>
          </div>

          {/* Top View All Button: desktop only */}
          <Link
            href="/blog"
            className="hidden lg:inline-flex group items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:gap-3"
            style={{
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--border-color)",
              color: "var(--foreground)",
            }}
          >
            View all articles
            <ArrowRight
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              style={{ color: "var(--brand-purple)" }}
            />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {latestPosts.map((post, index) => {
            const formattedDate = new Date(post.publishedAt).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "short",
                day: "numeric",
              },
            );

            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className={`group`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <article
                  className="h-full rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  {/* Image Container */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    {/* Meta Info. Wraps rather than squeezing: a long category
                        beside the date and read time can exceed one line on a
                        narrow card. */}
                    <div
                      className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-xs"
                      style={{ color: "var(--secondary-text)" }}
                    >
                      {/* Category. The gradient moved off the artwork and onto
                          this dot: these illustrations carry their own heading
                          across the top of the image, which is exactly where
                          the old overlay pill sat. */}
                      <div className="flex items-center gap-1.5">
                        <span
                          aria-hidden="true"
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{
                            background:
                              "linear-gradient(135deg, var(--brand-purple), var(--brand-cyan))",
                          }}
                        />
                        <span
                          className="font-semibold"
                          style={{ color: "var(--foreground)" }}
                        >
                          {post.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{formattedDate}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-lg font-bold mb-3 line-clamp-2 transition-colors duration-300 group-hover:text-[var(--brand-purple)]"
                      style={{ lineHeight: 1.4 }}
                    >
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p
                      className="text-sm mb-5 line-clamp-2"
                      style={{
                        color: "var(--secondary-text)",
                        lineHeight: 1.6,
                      }}
                    >
                      {post.excerpt}
                    </p>

                    {/* Author & Read More */}
                    <div
                      className="flex items-center justify-between pt-4 border-t"
                      style={{ borderColor: "var(--border-color)" }}
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-[var(--border-color)] ring-offset-2 ring-offset-[var(--card-bg)] transition-all group-hover:ring-[var(--brand-purple)]">
                          <Image
                            src={post.author.image}
                            alt={post.author.name}
                            fill
                            sizes="36px"
                            className="object-cover"
                          />
                        </div>

                        <div className="min-w-0">
                          <p className="text-sm font-medium">
                            {post.author.name}
                          </p>

                          <p
                            className="text-xs"
                            style={{ color: "var(--secondary-text)" }}
                          >
                            {post.author.title}
                          </p>
                        </div>
                      </div>

                      <div
                        className="flex shrink-0 items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2"
                        style={{ color: "var(--brand-purple-text)" }}
                      >
                        Read
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* Bottom View All Button: mobile and tablet only */}
        <div className="mt-8 sm:mt-10 text-center lg:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all"
            style={{
              background:
                "linear-gradient(135deg, var(--brand-purple), var(--brand-cyan))",
              color: "#fff",
            }}
          >
            View all articles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
