"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "@/app/providers/ThemeProvider";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Topics", href: "/topics" },
  { label: "Trending", href: "/trending" },
  { label: "About", href: "/about" },
];

const topics = [
  "Strategy",
  "Storytelling",
  "Product",
  "Food",
  "Analytics",
  "Lifestyle",
];

const socialLinks = [
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { mode, toggleMode } = useTheme();
  const isDarkMode = mode === "dark";
  const themeLabel = isDarkMode ? "Switch to light theme" : "Switch to dark theme";

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--border-color)] bg-[var(--header-bg-color)] backdrop-blur-lg shadow-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3 transition-opacity hover:opacity-80">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent)] to-[#fb4fa0] shadow-lg shadow-[var(--accent)]/30 transition-transform duration-200 group-hover:scale-110">
            <span className="text-lg font-bold text-white sm:text-xl">B</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-[var(--header-text-color)] sm:text-2xl">Blogfly</h1>
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">Content Hub</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative rounded-xl px-4 py-2 text-sm font-semibold text-[var(--header-text-color)] transition-all duration-200 hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-[var(--accent)] transition-all duration-200 group-hover:w-3/4" />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--muted)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleMode}
            aria-label={themeLabel}
            className="group flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--foreground)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
          >
            {isDarkMode ? (
              <svg className="h-5 w-5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="h-5 w-5 transition-transform duration-200 group-hover:-rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Open menu"
          onClick={() => setIsOpen(true)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md border border-[var(--border-color)] bg-[var(--surface)] text-[var(--der-bg-color)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 lg:hidden"
        >
          <span className="h-0.5 w-5 bg-current transition-all duration-200" />
          <span className="h-0.5 w-5 bg-current transition-all duration-200" />
          <span className="h-0.5 w-5 bg-current transition-all duration-200" />
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex h-screen w-screen flex-col overflow-y-auto bg-[var(--header-bg-color)] p-6">
          {/* Header with Close Button */}
          <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent)] to-[#fb4fa0] shadow-lg shadow-[var(--accent)]/30">
                <span className="text-xl font-bold text-white">B</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[var(--header-text-color)]">Blogfly</h2>
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">Menu</p>
              </div>
            </div>
            <button
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--header-text-color)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Content - Centered */}
          <div className="mx-auto w-full max-w-md space-y-8 py-8">
            {/* Navigation Links */}
            <nav className="space-y-2">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Navigation</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-3 rounded-xl border border-[var(--border-color)]  px-5 py-4 text-base font-semibold text-[var(--header-text-color)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
                    >
                      <svg className="h-5 w-5 text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Topics */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Popular Topics</h3>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                    <Link
                      key={topic}
                      href={`/topics?category=${topic.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="rounded-lg border border-[var(--border-color)]  px-4 py-2 text-sm font-medium text-[var(--header-text-color)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
                    >
                    {topic}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social & Theme */}
            <div className="space-y-4 border-t border-[var(--border-color)] pt-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Connect & Settings</h3>
              
              {/* Social Icons */}
              <div className="flex items-center justify-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--muted)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Theme Toggle */}
              <button
                onClick={() => {
                  toggleMode();
                }}
                aria-label={themeLabel}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-[var(--border-color)]  px-5 py-4 text-sm font-semibold text-[var(--header-text-color)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
              >
                {isDarkMode ? (
                  <>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>Switch to Light Mode</span>
                  </>
                ) : (
                  <>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    <span>Switch to Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}