"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Pagination from "@/components/Pagination";
import ConfirmationModal from "@/components/ConfirmationModal";
import { apiService } from "@/lib/apiService";

const allPosts = [
  {
    id: "P-101",
    title: "Why every founder needs a launch narrative",
    author: "Cara Lee",
    status: "active",
    published: "Feb 05, 2025",
    reads: "34k",
    category: "Product",
  },
  {
    id: "P-102",
    title: "Behind the scenes of remote design sprints",
    author: "Elena Torres",
    status: "inactive",
    published: "Mar 10, 2025",
    reads: "12k",
    category: "Design",
  },
  {
    id: "P-103",
    title: "Scaling community feedback loops",
    author: "Marcus Lee",
    status: "active",
    published: "Jan 28, 2025",
    reads: "8.4k",
    category: "Community",
  },
  {
    id: "P-104",
    title: "How to write release notes people read",
    author: "Lena Howell",
    status: "active",
    published: "Dec 19, 2024",
    reads: "6.1k",
    category: "Product",
  },
  {
    id: "P-105",
    title: "Designing launch-day rituals",
    author: "Noah Green",
    status: "inactive",
    published: "Nov 05, 2024",
    reads: "3.2k",
    category: "Culture",
  },
  {
    id: "P-106",
    title: "How to keep editors in sync with engineers",
    author: "Priya Sharma",
    status: "inactive",
    published: "Apr 01, 2025",
    reads: "1.1k",
    category: "Product",
  },
  {
    id: "P-107",
    title: "Narratives that help people understand AI",
    author: "Elliot Zhang",
    status: "active",
    published: "Feb 20, 2025",
    reads: "20k",
    category: "AI",
  },
  {
    id: "P-108",
    title: "Building obsession-free analytics dashboards",
    author: "Nathan Cole",
    status: "active",
    published: "Jan 11, 2025",
    reads: "9.4k",
    category: "Analytics",
  },
  {
    id: "P-109",
    title: "Running thoughtful office hours for writers",
    author: "Chloe Martinez",
    status: "inactive",
    published: "Mar 22, 2025",
    reads: "2.8k",
    category: "Culture",
  },
  {
    id: "P-110",
    title: "Community rituals to keep readers engaged",
    author: "Anya Ruiz",
    status: "active",
    published: "Feb 14, 2025",
    reads: "7.5k",
    category: "Community",
  },
];

const POSTS_PER_PAGE = 6;

// Simple modal configuration type - each action sets up its own modal
type ModalConfig = {
  title: string;
  message: string;
  confirmText: string;
  variant: "danger" | "primary";
  onConfirm: () => void;
};

export default function PostPage() {
  const [layout, setLayout] = useState<"table" | "card">("table");
  const [page, setPage] = useState(1);
  const [modalConfig, setModalConfig] = useState<ModalConfig | null>(null);

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const visiblePosts = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE;
    return allPosts.slice(start, start + POSTS_PER_PAGE);
  }, [page]);

  const statusClass = (status: string) =>
    status === "active"
      ? "bg-emerald-500/10 text-emerald-400"
      : "bg-red-500/10 text-red-400";

  // Handle Delete - sets up modal with title, message, and API call
  const handleDeleteClick = (post: { id: string; title: string }) => {
    setModalConfig({
      title: "Delete Post",
      message: `Are you sure you want to delete "${post.title}"? This action cannot be undone.`,
      confirmText: "Delete",
      variant: "danger",
      onConfirm: async () => {
        // Direct API call here - no if-else needed!
        // Token automatically added for /admin routes!
        try {
          const response = await apiService.delete(`/admin/posts/${post.id}`);
          console.log("Post deleted successfully:", response);
          // Refresh posts list after deletion (you can add state update here)
          setModalConfig(null); // Close modal
        } catch (error) {
          console.error("Failed to delete post:", error);
          // Handle error (show toast, etc.)
          // Don't close modal on error so user can retry
        }
      },
    });
  };

  // Handle Status Change - sets up modal with title, message, and API call
  const handleStatusChangeClick = (post: { id: string; title: string; status: string }, newStatus: "active" | "inactive") => {
    const statusLabels = {
      active: "Activate",
      inactive: "Deactivate",
    };

    setModalConfig({
      title: "Change Post Status",
      message: `Are you sure you want to change the status of "${post.title}" from "${post.status}" to "${newStatus}"?`,
      confirmText: statusLabels[newStatus],
      variant: "primary",
      onConfirm: async () => {
        // Direct API call here - no if-else needed!
        // Token automatically added for /admin routes!
        try {
          const response = await apiService.patch(`/admin/posts/${post.id}/status`, {
            status: newStatus,
          });
          console.log("Post status updated successfully:", response);
          // Refresh posts list after status change (you can add state update here)
          setModalConfig(null); // Close modal
        } catch (error) {
          console.error("Failed to change post status:", error);
          // Handle error (show toast, etc.)
          // Don't close modal on error so user can retry
        }
      },
    });
  };

  // Close modal handler
  const handleModalClose = () => {
    setModalConfig(null);
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <header className="flex flex-col gap-4 rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--surface)] via-[var(--surface)] to-[var(--card)] p-6 shadow-lg sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 text-emerald-400">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
    <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">Post Management</p>
            <h1 className="mt-1 text-2xl font-bold text-[var(--foreground)] sm:text-3xl">Posts</h1>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          {/* Layout Toggle Buttons */}
          <div className="flex items-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] p-1">
            <button
              className={`flex items-center justify-center rounded-lg p-2 transition-all duration-200 ${
                layout === "table"
                  ? "bg-[var(--accent)] text-white shadow-md"
                  : "text-[var(--muted)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
              }`}
              onClick={() => setLayout("table")}
              aria-label="Table view"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
            <button
              className={`flex items-center justify-center rounded-lg p-2 transition-all duration-200 ${
                layout === "card"
                  ? "bg-[var(--accent)] text-white shadow-md"
                  : "text-[var(--muted)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
              }`}
              onClick={() => setLayout("card")}
              aria-label="Card view"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
          </div>
          
          {/* Add Post Button */}
          <Link
            href="/admin/post/add"
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--accent)] to-[#fb4fa0] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
          >
            <svg className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className="hidden sm:inline">Add Post</span>
            <span className="sm:hidden">Add</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      {layout === "table" ? (
        <div className="overflow-hidden rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--surface)] via-[var(--surface)] to-[var(--card)] shadow-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead className="border-b border-[var(--border-color)] bg-[var(--surface)]/50">
                <tr>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)] sm:px-6">ID</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)] sm:px-6">Title</th>
                  <th className="hidden px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)] sm:table-cell sm:px-6">Author</th>
                  <th className="hidden px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)] md:table-cell md:px-6">Category</th>
                  <th className="hidden px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)] lg:table-cell lg:px-6">Published</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)] sm:px-6">Status</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)] sm:px-6">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-color)]">
                {visiblePosts.map((post) => (
                  <tr
                    key={post.id}
                    className="group transition-colors duration-200 hover:bg-[var(--accent)]/5"
                  >
                    <td className="px-4 py-4 text-sm font-semibold text-[var(--foreground)] sm:px-6">{post.id}</td>
                    <td className="px-4 py-4 text-sm font-medium text-[var(--foreground)] sm:px-6">
                      <div className="max-w-xs truncate" title={post.title}>
                        {post.title}
                      </div>
                    </td>
                    <td className="hidden px-4 py-4 text-sm text-[var(--muted)] sm:table-cell sm:px-6">{post.author}</td>
                    <td className="hidden px-4 py-4 text-sm text-[var(--muted)] md:table-cell md:px-6">{post.category}</td>
                    <td className="hidden px-4 py-4 text-sm text-[var(--muted)] lg:table-cell lg:px-6">{post.published}</td>
                    <td className="px-4 py-4 sm:px-6">
                      <button
                        onClick={() => {
                          // Toggle between active and inactive
                          const newStatus = post.status === "active" ? "inactive" : "active";
                          handleStatusChangeClick({ ...post, status: post.status }, newStatus as "active" | "inactive");
                        }}
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 hover:scale-105 ${statusClass(
                          post.status,
                        )}`}
                        title={`Click to change status. Current: ${post.status}`}
                      >
                        {post.status}
                      </button>
                    </td>
                    <td className="px-4 py-4 sm:px-6">
                      <div className="flex items-center gap-2">
                        <button
                          className="group/edit flex items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--surface)] p-2 text-[#000] transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-400/10"
                          aria-label={`Edit ${post.title}`}
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDeleteClick({ id: post.id, title: post.title })}
                          className="group/delete flex items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--surface)] p-2 text-red-400 transition-all duration-200 hover:border-red-400 hover:bg-red-400/10"
                          aria-label={`Delete ${post.title}`}
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <article
              key={post.id}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--surface)] via-[var(--surface)] to-[var(--card)] p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  post.status === "active"
                    ? "from-emerald-500/10 via-teal-500/10 to-cyan-500/10"
                    : "from-red-500/10 via-orange-500/10 to-yellow-500/10"
                } opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">{post.id}</p>
                    <h3 className="mt-1 line-clamp-2 text-xl font-bold text-[var(--foreground)] sm:text-2xl">{post.title}</h3>
                  </div>
                  <div
                    className={`rounded-xl p-2 ${statusClass(post.status)} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>

                {/* Stats */}
                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 rounded-lg bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-blue-400">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>{post.reads} reads</span>
                    </div>
                    <button
                      onClick={() => {
                        // Toggle between active and inactive
                        const newStatus = post.status === "active" ? "inactive" : "active";
                        handleStatusChangeClick({ ...post, status: post.status }, newStatus as "active" | "inactive");
                      }}
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 hover:scale-105 ${statusClass(post.status)}`}
                      title={`Click to change status. Current: ${post.status}`}
                    >
                      {post.status}
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
                    <div className="flex items-center gap-1">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>{post.author}</span>
                    </div>
                    <span>·</span>
                    <div className="flex items-center gap-1">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      <span>{post.category}</span>
                    </div>
                    <span>·</span>
                    <div className="flex items-center gap-1">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{post.published}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 border-t border-[var(--border-color)] pt-4">
                  <button
                    className="group/edit flex flex-1 items-center justify-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold text-[#000] transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-400/10"
                    aria-label={`Edit ${post.title}`}
                  >
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover/edit:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => handleDeleteClick({ id: post.id, title: post.title })}
                    className="group/delete flex flex-1 items-center justify-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold text-red-400 transition-all duration-200 hover:border-red-400 hover:bg-red-400/10"
                    aria-label={`Delete ${post.title}`}
                  >
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover/delete:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    <span>Delete</span>
                  </button>
                </div>

                {/* Decorative Line */}
                <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-[var(--accent)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center">
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={(nextPage) => setPage(Math.min(totalPages, Math.max(1, nextPage)))} />
      </div>

      {/* Confirmation Modal - Simple approach: each action sets up its own modal config */}
      {modalConfig && (
        <ConfirmationModal
          isOpen={true}
          onClose={handleModalClose}
          onConfirm={modalConfig.onConfirm}
          title={modalConfig.title}
          message={modalConfig.message}
          confirmText={modalConfig.confirmText}
          cancelText="Cancel"
          confirmVariant={modalConfig.variant}
        />
      )}
    </div>
  );
}   