"use client";

import { useMemo, useState } from "react";
import { PostCard } from "@/components/PostCard";
import Pagination from "@/components/Pagination";
import { allBlogPosts } from "@/lib/blogData";

// Convert blog posts to the format needed for PostCard
const posts = allBlogPosts.map(post => ({
  id: post.id,
  label: post.label,
  title: post.title,
  author: post.author,
  timeAgo: post.timeAgo || post.date || "हाल ही में",
  image: post.image,
}));

const POSTS_PER_PAGE = 10;

export default function TopicPages() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const visiblePosts = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE;
    return posts.slice(start, start + POSTS_PER_PAGE);
  }, [page]);

  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-6 md:py-12 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">विषय</p>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          Blog
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
            Blogfly से नवीनतम 10 कहानियां ब्राउज़ करें। हर श्रेणी का अन्वेषण करने के लिए टैप करें
            पढ़ने की क्षमता और शांत गति पर ध्यान देते हुए।
          </p>
        </header> */}

        <section className="space-y-6">
          {visiblePosts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              label={post.label}
              title={post.title}
              author={post.author}
              timeAgo={post.timeAgo}
              image={post.image}
            />
          ))}
        </section>

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(nextPage) => setPage(Math.min(totalPages, Math.max(1, nextPage)))}
        />
      </div>
    </div>
  );
}

