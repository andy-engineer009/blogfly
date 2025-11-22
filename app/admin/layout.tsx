"use client";

import { AdminSidebar } from "@/components/AdminSidebar";
import { useState } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)]">
      <div className="flex flex-1 flex-col sm:flex-row">
        <AdminSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <main className="flex-1 bg-[var(--surface)] px-4 py-8 sm:px-10">
          <div className="mb-6 flex items-center justify-between gap-4 sm:hidden">
          <button
          aria-label="Open menu"
          onClick={() => setIsSidebarOpen(true)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md border border-[var(--border-color)] bg-[var(--surface)] text-[var(--foreground)] transition hover:bg-[var(--accent)] lg:hidden"
        >
          <span className="h-0.5 w-5 bg-current" />
          <span className="h-0.5 w-5 bg-current" />
          <span className="h-0.5 w-5 bg-current" />
        </button>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
              Admin
            </p>
          </div>

          {children}
        </main>
      </div>
    </div>
  );
}