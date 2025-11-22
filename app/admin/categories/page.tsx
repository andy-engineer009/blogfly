"use client";

import { useMemo, useState } from "react";
import Pagination from "@/components/Pagination";
import Link from "next/link";
const allCategories = [
  {
    id: "C-001",
    name: "Announcements",
    posts: 34,
    status: "active",
    description: "Platform updates, launches, and news.",
  },
  {
    id: "C-002",
    name: "Product",
    posts: 58,
    status: "active",
    description: "Roadmap releases and case studies.",
  },
  {
    id: "C-003",
    name: "Strategy",
    posts: 19,
    status: "inactive",
    description: "Go-to-market and planning insights.",
  },
  {
    id: "C-004",
    name: "Culture",
    posts: 12,
    status: "active",
    description: "Team rituals and studio stories.",
  },
  {
    id: "C-005",
    name: "Wellness",
    posts: 24,
    status: "active",
    description: "Mindfulness, health, and balance.",
  },
  {
    id: "C-006",
    name: "Finance",
    posts: 11,
    status: "inactive",
    description: "Revenue, pricing, and sustainability.",
  },
  {
    id: "C-007",
    name: "Analytics",
    posts: 26,
    status: "active",
    description: "Data dashboards and decision frameworks.",
  },
  {
    id: "C-008",
    name: "Customer",
    posts: 17,
    status: "active",
    description: "CX, support, and retention notes.",
  },
  {
    id: "C-009",
    name: "Design",
    posts: 21,
    status: "active",
    description: "Visual language and product feel.",
  },
  {
    id: "C-010",
    name: "Tech",
    posts: 42,
    status: "active",
    description: "Engineering updates and infrastructure.",
  },
  {
    id: "C-011",
    name: "Security",
    posts: 8,
    status: "inactive",
    description: "Hardening and trust stories.",
  },
  {
    id: "C-012",
    name: "Careers",
    posts: 13,
    status: "active",
    description: "Hiring, culture, and talent.",
  },
  {
    id: "C-013",
    name: "Community",
    posts: 9,
    status: "active",
    description: "Events, podcasts, and collabs.",
  },
  {
    id: "C-014",
    name: "Lifestyle",
    posts: 15,
    status: "active",
    description: "Work-from-anywhere guides.",
  },
  {
    id: "C-015",
    name: "Education",
    posts: 10,
    status: "inactive",
    description: "Learning resources and tips.",
  },
  {
    id: "C-016",
    name: "Sustainability",
    posts: 5,
    status: "inactive",
    description: "Climate & impact thinking.",
  },
  {
    id: "C-017",
    name: "AI",
    posts: 36,
    status: "active",
    description: "Generative tools and experimentation.",
  },
  {
    id: "C-018",
    name: "Travel",
    posts: 18,
    status: "active",
    description: "Remote work and local rituals.",
  },
  {
    id: "C-019",
    name: "Food",
    posts: 22,
    status: "active",
    description: "Chef interviews and tasting notes.",
  },
  {
    id: "C-020",
    name: "Lifestyle",
    posts: 14,
    status: "inactive",
    description: "Daily routines and wellbeing.",
  },
];

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
    <div className="space-y-8">
      <header className="flex flex-col gap-4 rounded-[1.5rem] border border-[var(--border-color)] bg-white/70 px-6 py-6 shadow-[0_15px_30px_rgba(15,23,42,0.08)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          {/* <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">Content control</p> */}
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Categories</h1>
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
            href="/admin/categories/add"
            className="rounded-full border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-white transition hover:bg-[#fb4fa0]"
          >
            Add category
          </Link>
        </div>
      </header>

      {layout === "table" ? (
        <div className="overflow-hidden rounded-[1.25rem] border border-[var(--border-color)] bg-white">
          <table className="min-w-full border-collapse">
            <thead className="border-b border-[var(--border-color)] bg-white text-[0.65rem] uppercase tracking-[0.35em] text-[var(--muted)]">
              <tr>
                <th className="px-6 py-4 text-left">ID</th>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Posts</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {visibleCategories.map((category) => (
                <tr key={category.id} className="border-b border-[var(--border-color)] last:border-b-0">
                  <td className="px-6 py-4 font-semibold text-[var(--foreground)]">{category.id}</td>
                  <td className="px-6 py-4 text-[var(--foreground)]">{category.name}</td>
                  <td className="px-6 py-4 text-[var(--muted)]">{category.posts} posts</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.3em] ${
                        category.status === "active"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {category.status}
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
                      <button className="flex items-center gap-1 rounded-full border border-white/20 px-3 py-1 text-white/90 transition hover:border-white hover:text-white">
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M18 6 6 18"
                            stroke="#ef4444"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 6 18 18"
                            stroke="#ef4444"
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
          {visibleCategories.map((category) => (
            <article
              key={category.id}
              className="flex flex-col gap-3 rounded-[1.25rem] border border-[var(--border-color)] bg-white/80 p-5 shadow-[0_15px_30px_rgba(15,23,42,0.15)]"
            >
              <div className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-[var(--muted)]">
                {category.id}
              </div>
              <h3 className="text-2xl font-bold text-[var(--foreground)]">{category.name}</h3>
              <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                <span>{category.posts} posts</span>
                <span>·</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.3em] ${
                    category.status === "active"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {category.status}
                </span>
              </div>
              <p className="text-sm text-[var(--muted)]">{category.description}</p>
              <div className="flex flex-wrap gap-2 text-[0.75rem]">
                <button className="rounded-full border border-[var(--border-color)] px-3 py-1 text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
                  Edit
                </button>
                <button className="rounded-full border border-[var(--border-color)] px-3 py-1 text-[var(--foreground)] transition hover:border-red-500 hover:text-red-500">
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(nextPage) => setPage(Math.min(totalPages, Math.max(1, nextPage)))}
      />
    </div>
  );
}