export default function AdminPage() {
  return (
    <section className="space-y-4 rounded-3xl border border-[var(--border-color)] bg-[var(--card)] p-6">
      <p className="text-xs uppercase tracking-[0.5em] text-[var(--muted)]">
        Admin routes
      </p>
      <h2 className="text-2xl font-semibold text-[var(--foreground)]">
        Secure command center
      </h2>
      <p className="text-sm text-[var(--muted)]">
        The admin layout inherits the same CSS variables as the public site so a
        single accent or mode update affects every client-facing page and the
        private panel.
      </p>
    </section>
  );
}