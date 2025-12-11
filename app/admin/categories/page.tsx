"use client";

import { useMemo, useState } from "react";
import Pagination from "@/components/Pagination";
import Link from "next/link";
import { allBlogPosts } from "@/lib/blogData";

// Get unique categories from blog posts
const uniqueCategories = Array.from(
  new Map(allBlogPosts.map(post => [post.category, {
    id: `C-${post.category}`,
    name: post.category,
    posts: allBlogPosts.filter(p => p.category === post.category).length,
    status: "active" as "active" | "inactive",
    description: getCategoryDescription(post.category),
  }])).values()
);

function getCategoryDescription(category: string): string {
  const descriptions: Record<string, string> = {
    "क्रिकेट": "क्रिकेट मैच, खिलाड़ी और टूर्नामेंट से जुड़ी खबरें।",
    "फिटनेस": "व्यायाम, स्वास्थ्य और फिटनेस टिप्स।",
    "समाचार": "देश और दुनिया की ताज़ा खबरें।",
    "स्वास्थ्य": "स्वास्थ्य, योग और आरोग्य से जुड़ी जानकारी।",
    "टेक": "तकनीक, AI और नवाचार से जुड़ी खबरें।",
  };
  return descriptions[category] || "विविध विषयों पर लेख।";
}

const allCategories = uniqueCategories;

const POSTS_PER_PAGE = 10;

export default function CategoriesPage() {
  const [layout, setLayout] = useState<"table" | "card">("table");
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(allCategories.length / POSTS_PER_PAGE);

  const visibleCategories = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE;
    return allCategories.slice(start, start + POSTS_PER_PAGE);
  }, [page]);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <header className="flex flex-col gap-4 rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--surface)] via-[var(--surface)] to-[var(--card)] p-6 shadow-lg sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/10 text-blue-400">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          </div>
    <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">कैटेगरी प्रबंधन</p>
            <h1 className="mt-1 text-2xl font-bold text-[var(--foreground)] sm:text-3xl">कैटेगरियां</h1>
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
              aria-label="टेबल व्यू"
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
              aria-label="कार्ड व्यू"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
          </div>
          
          {/* Add Category Button */}
          <Link
            href="/admin/categories/add"
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--accent)] to-[#fb4fa0] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
          >
            <svg className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className="hidden sm:inline">नई कैटेगरी जोड़ें</span>
            <span className="sm:hidden">जोड़ें</span>
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
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)] sm:px-6">आईडी</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)] sm:px-6">नाम</th>
                  <th className="hidden px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)] sm:table-cell sm:px-6">पोस्ट</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)] sm:px-6">स्थिति</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)] sm:px-6">कार्रवाई</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-color)]">
                {visibleCategories.map((category) => (
                  <tr
                    key={category.id}
                    className="group transition-colors duration-200 hover:bg-[var(--accent)]/5"
                  >
                    <td className="px-4 py-4 text-sm font-semibold text-[var(--foreground)] sm:px-6">{category.id}</td>
                    <td className="px-4 py-4 text-sm font-medium text-[var(--foreground)] sm:px-6">{category.name}</td>
                    <td className="hidden px-4 py-4 text-sm text-[var(--muted)] sm:table-cell sm:px-6">{category.posts} पोस्ट</td>
                    <td className="px-4 py-4 sm:px-6">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                          category.status === "active"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-red-500/10 text-red-400"
                        }`}
                      >
                        {category.status === "active" ? "सक्रिय" : "निष्क्रिय"}
                      </span>
                    </td>
                    <td className="px-4 py-4 sm:px-6">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/admin/categories/edit/${category.id}`}
                          className="group/edit flex items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--surface)] p-2 text-emerald-400 transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-400/10"
                          aria-label=" कैटेगरी संपादित करें"
                        >
                          <svg className="h-4 w-4" fill="none" stroke="#000" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </Link>
                        <button
                          className="group/delete flex items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--surface)] p-2 text-red-400 transition-all duration-200 hover:border-red-400 hover:bg-red-400/10"
                          aria-label="कैटेगरी हटाएं"
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
          {visibleCategories.map((category) => (
            <article
              key={category.id}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--surface)] via-[var(--surface)] to-[var(--card)] p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  category.status === "active"
                    ? "from-emerald-500/10 via-teal-500/10 to-cyan-500/10"
                    : "from-red-500/10 via-orange-500/10 to-yellow-500/10"
                } opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">{category.id}</p>
                    <h3 className="mt-1 text-xl font-bold text-[var(--foreground)] sm:text-2xl">{category.name}</h3>
                  </div>
                  <div
                    className={`rounded-xl p-2 ${
                      category.status === "active"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-red-500/20 text-red-400"
                    } transition-transform duration-300 group-hover:scale-110`}
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                </div>

                {/* Stats */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex items-center gap-1.5 rounded-lg bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-blue-400">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>{category.posts} पोस्ट</span>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                      category.status === "active"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {category.status === "active" ? "सक्रिय" : "निष्क्रिय"}
                  </span>
                </div>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-[var(--muted)]">{category.description}</p>

                {/* Actions */}
                <div className="flex items-center gap-2 border-t border-[var(--border-color)] pt-4">
                  <Link
                    href={`/admin/categories/edit/${category.id}`}
                    className="group/edit flex flex-1 items-center justify-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold text-[#000] transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-400/10"
                    aria-label="कैटेगरी संपादित करें"
                  >
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover/edit:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <span>संपादित करें</span>
                  </Link>
                  <button
                    className="group/delete flex flex-1 items-center justify-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold text-red-400 transition-all duration-200 hover:border-red-400 hover:bg-red-400/10"
                    aria-label="कैटेगरी हटाएं"
                  >
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover/delete:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    <span>हटाएं</span>
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
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(nextPage) => setPage(Math.min(totalPages, Math.max(1, nextPage)))}
        />
      </div>
    </div>
  );
}