"use client";

import { AdminSidebar } from "@/components/AdminSidebar";
import { useState } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-[var(--background)] via-[var(--background)] to-[var(--surface)]">
      <div className="flex flex-1 flex-col sm:flex-row">
        {/* Sidebar */}
        <AdminSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col">
          {/* Top Header Bar - Desktop & Mobile */}
          <header className="sticky top-0 z-20 flex items-center justify-between border-b border-[var(--border-color)] bg-[var(--surface)]/80 backdrop-blur-lg px-4 py-4 shadow-sm sm:px-6 sm:py-5">
            {/* Mobile Menu Button & Logo */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                aria-label="Open menu"
                onClick={() => setIsSidebarOpen(true)}
                className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--foreground)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 sm:hidden"
              >
                <span className="h-0.5 w-5 bg-current transition-all" />
                <span className="h-0.5 w-5 bg-current transition-all" />
                <span className="h-0.5 w-5 bg-current transition-all" />
              </button>

              {/* Mobile Logo */}
              <div className="flex items-center gap-2 sm:hidden">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--accent)] to-[#fb4fa0] shadow-lg">
                  <span className="text-sm font-bold text-white">B</span>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">Admin</p>
                  <h1 className="text-base font-bold text-[var(--foreground)]">Blogfly</h1>
                </div>
              </div>
            </div>

            {/* Desktop Header Actions */}
            <div className="hidden items-center gap-3 sm:flex sm:gap-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <svg
                  className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--muted)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] px-4 py-2 pl-10 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none"
                />
              </div>

              {/* Notifications */}
              {/* <button
                aria-label="Notifications"
                className="relative rounded-xl border border-[var(--border-color)] bg-[var(--surface)] p-2.5 text-[var(--muted)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-[var(--accent)] ring-2 ring-[var(--surface)]" />
              </button> */}

              {/* User Profile */}
              <div className="flex items-center gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] px-3 py-2 transition-all duration-200 hover:border-[var(--accent)] hover:shadow-md">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--accent)] to-[#fb4fa0] text-sm font-bold text-white shadow-lg">
                  A
                </div>
                <div className="hidden lg:block">
                  <p className="text-xs font-medium text-[var(--foreground)]">Admin User</p>
                  {/* <p className="text-xs text-[var(--muted)]">admin@blogfly.com</p> */}
                </div>
                {/* <svg className="hidden h-4 w-4 text-[var(--muted)] lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg> */}
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 sm:hidden">
              <button
                aria-label="Notifications"
                className="relative rounded-lg border border-[var(--border-color)] bg-[var(--surface)] p-2 text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)] ring-2 ring-[var(--surface)]" />
              </button>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-x-hidden bg-[var(--surface)] px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
            <div className="mx-auto max-w-7xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}