"use client";

import { useMemo, useState } from "react";
import { PostCard } from "@/components/PostCard";
import Pagination from "@/components/Pagination";
import { allBlogPosts } from "@/lib/blogData";
import Image from "next/image";

// Convert blog posts to the format needed for PostCard
const posts = allBlogPosts.map(post => ({
  id: post.id,
  label: post.label,
  category: post.category,
  title: post.title,
  author: post.author,
  timeAgo: post.timeAgo || post.date || "हाल ही में",
  image: post.image,
}));

// Get unique categories
const categories = Array.from(new Set(posts.map(post => post.category)));

const POSTS_PER_PAGE = 10;

export default function TopicPages() {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter posts by category
  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return posts;
    return posts.filter(post => post.category === selectedCategory);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const visiblePosts = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [page, filteredPosts]);

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Sidebar Advertisement - Sticky */}
        <aside className="hidden lg:col-span-2 lg:block">
          <div className="sticky top-24">
            <div className="flex min-h-[600px] w-full flex-col rounded-2xl border border-dashed border-[var(--border-color)] bg-[var(--surface)] p-6 text-center relative">
              {/* <span className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
                Advertisement
              </span>
              <div className="text-sm font-medium text-[var(--foreground)]">
                Show advertisement here
              </div>
              <div className="mt-4 text-xs text-[var(--muted)]">
                160x600
              </div> */}
              <Image src="/image/dubai-ad.jpeg" alt="xyz" fill className="object-contain w-full" />
            </div>
          </div>
        </aside>

        {/* Main Content - Blog List (Scrollable) */}
        <main className="lg:col-span-8">
          <div className="space-y-8">
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-3 overflow-x-auto pb-2">
              <button
                onClick={() => handleCategoryChange(null)}
                className={`flex-shrink-0 rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                  selectedCategory === null
                    ? "bg-[var(--accent)] text-white shadow-md"
                    : "bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border-color)] hover:border-[var(--accent)]"
                }`}
              >
                सभी
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`flex-shrink-0 rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                    selectedCategory === category
                      ? "bg-[var(--accent)] text-white shadow-md"
                      : "bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border-color)] hover:border-[var(--accent)]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <section className="space-y-6">
              {visiblePosts.length > 0 ? (
                visiblePosts.map((post) => (
                  <PostCard
                    key={post.id}
                    id={post.id}
                    label={post.label}
                    title={post.title}
                    author={post.author}
                    timeAgo={post.timeAgo}
                    image={post.image}
                  />
                ))
              ) : (
                <div className="py-12 text-center">
                  <p className="text-lg text-[var(--muted)]">इस श्रेणी में कोई पोस्ट नहीं मिली</p>
                </div>
              )}
            </section>

            {totalPages > 0 && (
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={(nextPage) => setPage(Math.min(totalPages, Math.max(1, nextPage)))}
              />
            )}
          </div>
        </main>

        {/* Right Sidebar Advertisement - Sticky */}
        <aside className="hidden lg:col-span-2 lg:block">
          <div className="sticky top-24">
            <div className="flex min-h-[600px] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--border-color)] bg-[var(--surface)] p-6 text-center relative">
              {/* <span className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
                Advertisement
              </span>
              <div className="text-sm font-medium text-[var(--foreground)]">
                Show advertisement here
              </div>
              <div className="mt-4 text-xs text-[var(--muted)]">
                160x600
              </div> */}
              <Image src="/image/hydai-car-ads.jpeg" alt="xyz" fill className="object-contain w-full h-full" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

