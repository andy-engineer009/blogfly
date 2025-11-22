"use client";

export default function Footer() {
  const links = [
    { label: "About", href: "/about" },
    { label: "Topics", href: "/topics" },
    { label: "Trending", href: "/trending" },
    { label: "Contact", href: "/about#contact" },
  ];

  return (
    <footer className="bg-gradient-to-t from-[#0b1325] to-[#11141c] px-6 py-12 text-white sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.5em] text-orange-300">Stay in the loop</p>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Subscribe to our dispatch for fearless storytelling.
          </h2>
          <div className="flex flex-wrap gap-3 text-[0.75rem] text-white/80">
            <span className="rounded-full border border-white/40 px-4 py-1">Weekly Beats</span>
            <span className="rounded-full border border-white/40 px-4 py-1">Newsletter</span>
            <span className="rounded-full border border-white/40 px-4 py-1">Community</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-y border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">Blogfly</p>
            <p className="text-xs uppercase tracking-[0.45em] text-white/60">Content house</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.4em] text-white/70">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 text-[0.65rem] uppercase tracking-[0.35em] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Blogfly Collective</p>
          <p>
            Crafted with care in the digital studio · <span className="text-white">Privacy</span> ·{" "}
            <span className="text-white">Terms</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
