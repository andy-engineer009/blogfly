"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Pagination from "@/components/Pagination";
import ConfirmationModal from "@/components/ConfirmationModal";

const allPosts = [
  {
    id: "P-101",
    title: "Why every founder needs a launch narrative",
    author: "Cara Lee",
    status: "published",
    published: "Feb 05, 2025",
    reads: "34k",
    category: "Product",
  },
  {
    id: "P-102",
    title: "Behind the scenes of remote design sprints",
    author: "Elena Torres",
    status: "draft",
    published: "Mar 10, 2025",
    reads: "12k",
    category: "Design",
  },
  {
    id: "P-103",
    title: "Scaling community feedback loops",
    author: "Marcus Lee",
    status: "published",
    published: "Jan 28, 2025",
    reads: "8.4k",
    category: "Community",
  },
  {
    id: "P-104",
    title: "How to write release notes people read",
    author: "Lena Howell",
    status: "published",
    published: "Dec 19, 2024",
    reads: "6.1k",
    category: "Product",
  },
  {
    id: "P-105",
    title: "Designing launch-day rituals",
    author: "Noah Green",
    status: "archived",
    published: "Nov 05, 2024",
    reads: "3.2k",
    category: "Culture",
  },
  {
    id: "P-106",
    title: "How to keep editors in sync with engineers",
    author: "Priya Sharma",
    status: "draft",
    published: "Apr 01, 2025",
    reads: "1.1k",
    category: "Product",
  },
  {
    id: "P-107",
    title: "Narratives that help people understand AI",
    author: "Elliot Zhang",
    status: "published",
    published: "Feb 20, 2025",
    reads: "20k",
    category: "AI",
  },
  {
    id: "P-108",
    title: "Building obsession-free analytics dashboards",
    author: "Nathan Cole",
    status: "published",
    published: "Jan 11, 2025",
    reads: "9.4k",
    category: "Analytics",
  },
  {
    id: "P-109",
    title: "Running thoughtful office hours for writers",
    author: "Chloe Martinez",
    status: "draft",
    published: "Mar 22, 2025",
    reads: "2.8k",
    category: "Culture",
  },
  {
    id: "P-110",
    title: "Community rituals to keep readers engaged",
    author: "Anya Ruiz",
    status: "published",
    published: "Feb 14, 2025",
    reads: "7.5k",
    category: "Community",
  },
];

const POSTS_PER_PAGE = 6;

export default function PostPage() {
  const [layout, setLayout] = useState<"table" | "card">("table");
  const [page, setPage] = useState(1);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<{ id: string; title: string } | null>(null);

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const visiblePosts = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE;
    return allPosts.slice(start, start + POSTS_PER_PAGE);
  }, [page]);

  const statusClass = (status: string) =>
    status === "published"
      ? "bg-emerald-500/10 text-emerald-400"
      : status === "draft"
      ? "bg-yellow-500/10 text-yellow-400"
      : "bg-red-500/10 text-red-400";

  const handleDeleteClick = (post: { id: string; title: string }) => {
    setSelectedPost(post);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedPost) {
      // TODO: Implement actual delete logic here
      console.log("Deleting post:", selectedPost.id);
      // Example: You would call an API or update state here
      // await deletePost(selectedPost.id);
    }
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 rounded-[1.5rem] border border-[var(--border-color)] bg-white/70 px-6 py-6 shadow-[0_15px_30px_rgba(15,23,42,0.08)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Posts</h1>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <button
            className={`flex items-center justify-center rounded-full border p-2.5 transition ${
              layout === "table"
                ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                : "border-[var(--border-color)] bg-white text-[var(--foreground)]"
            }`}
            onClick={() => setLayout("table")}
            aria-label="Table view"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
          <button
            className={`flex items-center justify-center rounded-full border p-2.5 transition ${
              layout === "card"
                ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                : "border-[var(--border-color)] bg-white text-[var(--foreground)]"
            }`}
            onClick={() => setLayout("card")}
            aria-label="Card view"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <Link
            href="/admin/post/add"
            className="rounded-full border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 text-[0.65rem] font-semibold text-white transition hover:bg-[#fb4fa0]"
          >
            Add post
          </Link>
        </div>
      </header>

      {layout === "table" ? (
        <div className="overflow-hidden rounded-[1.25rem] border border-[var(--border-color)] bg-white">
          <table className="min-w-full border-collapse">
            <thead className="border-b border-[var(--border-color)] bg-white text-[0.65rem] uppercase tracking-[0.35em] text-[var(--muted)]">
              <tr>
                <th className="px-6 py-4 text-left">ID</th>
                <th className="px-6 py-4 text-left">Title</th>
                <th className="px-6 py-4 text-left">Author</th>
                <th className="px-6 py-4 text-left">Category</th>
                <th className="px-6 py-4 text-left">Published</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {visiblePosts.map((post) => (
                <tr key={post.id} className="border-b border-[var(--border-color)] last:border-b-0">
                  <td className="px-6 py-4 font-semibold text-[var(--foreground)]">{post.id}</td>
                  <td className="px-6 py-4 text-[var(--foreground)]">{post.title}</td>
                  <td className="px-6 py-4 text-[var(--muted)]">{post.category}</td>
                  <td className="px-6 py-4 text-[var(--muted)]">{post.author}</td>
                  <td className="px-6 py-4 text-[var(--muted)]">{post.published}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.3em] ${statusClass(
                        post.status,
                      )}`}
                    >
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[0.7rem]">
                    <div className="inline-flex gap-2">
                      <button className="flex items-center gap-1 rounded-full border border-white/20 px-3 py-1 text-white/90 transition hover:border-white hover:text-white">
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M4 20h4l11-11-4-4-11 11v4z"
                            stroke="#34d399"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13 7l4 4"
                            stroke="#34d399"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDeleteClick({ id: post.id, title: post.title })}
                        className="flex items-center gap-1 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-red-400 transition hover:border-red-500 hover:bg-red-500/20"
                        aria-label={`Delete ${post.title}`}
                      >
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M18 6 6 18"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 6 18 18"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {visiblePosts.map((post) => (
              <article
              key={post.id}
              className="flex flex-col gap-3 rounded-[1.25rem] border border-[var(--border-color)] bg-white/80 p-5 shadow-[0_15px_30px_rgba(15,23,42,0.15)]"
            >
              <div className="text-[0.65rem] font-semibold text-[var(--muted)]">{post.id}</div>
              <h3 className="text-2xl font-bold text-[var(--foreground)]">{post.title}</h3>
              <p className="text-sm text-[var(--muted)]">
                <span className="font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">Category:</span>{" "}
                {post.category}
              </p>
              <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                <span>{post.reads} reads</span>
                <span>·</span>
                <span className={`rounded-full px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.3em] ${statusClass(post.status)}`}>
                  {post.status}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 text-[0.75rem]">
                <button className="rounded-full border border-[var(--border-color)] px-3 py-1 text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick({ id: post.id, title: post.title })}
                  className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-red-400 transition hover:border-red-500 hover:bg-red-500/20"
                  aria-label={`Delete ${post.title}`}
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      <Pagination currentPage={page} totalPages={totalPages} onPageChange={(nextPage) => setPage(Math.min(totalPages, Math.max(1, nextPage)))} />

      {/* Delete Confirmation Modal */}
      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        title="Delete Post"
        message={
          selectedPost
            ? `Are you sure you want to delete "${selectedPost.title}"? This action cannot be undone.`
            : "Are you sure you want to delete this post?"
        }
        confirmText="Delete"
        cancelText="Cancel"
        confirmVariant="danger"
      />
    </div>
  );
}