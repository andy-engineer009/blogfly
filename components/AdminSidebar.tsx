 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/admin/dashboard" },
  { label: "Categories", href: "/admin/categories" },
  { label: "Posts", href: "/admin/post" },
];

type AdminSidebarProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

export function AdminSidebar({ isOpen = true, onClose }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-black/40 transition-opacity sm:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={onClose}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col gap-8 border-r border-[var(--border-color)] bg-[#0f172a] px-6 py-10 text-[var(--muted)] transition-transform sm:static sm:block ${
          isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
        }`}
      > 
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[0.75rem] font-medium uppercase tracking-[0.3em] text-white/70 sm:tracking-[0.3em]">
              Admin
            </p>
            <h1 className="text-3xl font-semibold text-white">Blogfly</h1>
          </div>

          <button
            type="button"
            className="sm:hidden rounded-full border border-white/30 p-1 text-white/70 transition hover:bg-white/10"
            onClick={onClose}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-3 text-base font-semibold text-white">
          {navItems.map((item) => {
            const isActive = pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-[1rem] border px-4 py-3 transition ${
                  isActive
                    ? "border-white bg-white/10"
                    : "border-transparent hover:border-white/60 hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto w-full">
          <button
            type="button"
            className="w-full rounded-[1rem] border border-white/40 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}

export default AdminSidebar;

