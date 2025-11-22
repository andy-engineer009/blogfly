const stats = [
  { label: "Total categories", value: "16" },
  { label: "Total posts", value: "248" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <header className="rounded-[2rem] border border-[var(--border-color)] bg-[var(--card)] px-8 py-10 shadow-[0_30px_60px_rgba(15,23,42,0.08)] sm:px-10">
        <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">Welcome back</p>
        <h1 className="mt-2 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
          Dashboard
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
          Monitor the platform health at a glance. The cards below surface the key counts and let you
          quickly scope what needs attention.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-[1.5rem] border border-transparent bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1f2937] p-6 text-white shadow-[0_20px_40px_rgba(15,23,42,0.3)] transition hover:translate-y-1 hover:shadow-[0_25px_45px_rgba(15,23,42,0.35)]"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">{stat.label}</p>
            <p className="mt-3 text-4xl font-black leading-none">{stat.value}</p>
            <p className="mt-2 text-sm text-white/70">Updated just now</p>
          </article>
        ))}
      </section>
    </div>
  );
}