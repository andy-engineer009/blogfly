"use client";

import React from "react";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="space-y-6 rounded-2xl border border-[#e5e5e5] bg-white p-10 shadow-lg shadow-black/5 sm:w-[420px]">
        <h1 className="text-2xl font-bold text-[var(--foreground)]">Login</h1>
        <p className="text-sm text-[var(--muted)]">
          For now you can safely log in with any email — this is just a placeholder.
        </p>
        <form className="space-y-4">
          <label className="block text-[0.7rem] uppercase tracking-[0.3em] text-[var(--muted)]">
            Email
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border border-[#e5e7eb] px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none"
            />
          </label>
          <label className="block text-[0.7rem] uppercase tracking-[0.3em] text-[var(--muted)]">
            Password
            <input
              type="password"
              placeholder="••••••••"
              className="mt-2 w-full rounded-xl border border-[#e5e7eb] px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-xl bg-[var(--accent)] px-4 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#ff5b96]"
          >
            Log me in
          </button>
        </form>
      </div>
    </div>
  );
}
