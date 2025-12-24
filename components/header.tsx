"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "@/app/providers/ThemeProvider";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/topics" },
  // { label: "Trending", href: "/trending" },
  { label: "About", href: "/about" },
];

const topics = [
  "Strategy",
  "Storytelling",
  "Product",
  "Food",
  "Analytics",
  "LifeStyle",
];

// Remove unused socialLinks array if it's no longer needed in this simplified header
// or keep it if we plan to re-add social icons later.
// For now, I will remove it to clean up the lint error since the new design doesn't use it in the desktop view 
// and uses a different structure in mobile.

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
    <header className="sticky top-0 z-50 border-b border-[var(--border-color)] bg-[var(--background)]/80 backdrop-blur-md">
      <div className="w-[90%] mx-auto md:min-w-[180px] md:max-w-[1280px] 2xl:max-w-[1536px] mx-auto flex h-16 items-center justify-between px-0">
        {/* Logo Area */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
            className="group flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] transition-colors hover:border-[var(--foreground)] lg:hidden"
          >
            {isOpen ? (
              <svg className="h-5 w-5 text-[var(--foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <div className="flex flex-col items-center justify-center gap-1.5">
                <span className="h-0.5 w-4 bg-[var(--foreground)] transition-transform group-hover:scale-x-110" />
                <span className="h-0.5 w-4 bg-[var(--foreground)] transition-transform group-hover:scale-x-110" />
              </div>
            )}
          </button>

          <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <div className="flex h-8  px-3 items-center justify-center rounded-lg bg-[var(--foreground)] text-[var(--background)]">
              <span className="font-bold">YOUR LOGO</span>
            </div>
            {/* <span className="text-xl font-bold tracking-tight text-[var(--foreground)]">
              Logo
            </span> */}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions Area */}
        <div className="flex items-center gap-3">
           {/* Search Button (Desktop) - Visual placeholder for now */}
           {/* <button className="hidden h-9 w-9 items-center justify-center rounded-full text-[var(--muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)] lg:flex">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button> */}

          {/* Theme Toggle - Visible on ALL screens */}
          <button
            onClick={toggleMode}
            aria-label={themeLabel}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] text-[var(--muted)] transition-colors hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
          >
            {isDarkMode ? (
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Subscribe/CTA Button - Hidden on Mobile, Visible on Sm+ */}
          <button className="hidden rounded-full bg-[var(--foreground)] px-4 py-2 text-sm font-semibold text-[var(--background)] transition-opacity hover:opacity-90 sm:block">
            Subscribe
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-x-0 top-16 z-40 h-[calc(100vh-4rem)] overflow-y-auto bg-[var(--background)] border-t border-[var(--border-color)] lg:hidden">
          <div className="flex flex-col gap-8 p-6">
            <nav className="flex flex-col gap-8">
              {/* Main Links */}
              <div className="flex flex-col gap-4">
                 {/* Added "Menu" Label for clarity */}
                 <span className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Menu</span>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between rounded-xl p-2 text-3xl font-bold tracking-tight text-[var(--foreground)] transition-colors hover:bg-[var(--surface)]"
                  >
                    {link.label}
                     {/* Chevron for visual direction */}
                    <svg className="h-6 w-6 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
              
              <div className="h-px w-full bg-[var(--border-color)]" />
              
              {/* Topics */}
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Explore Topics</span>
                <div className="flex flex-wrap gap-3">
                  {topics.map((topic) => (
                    <Link
                      key={topic}
                      href={`/topics/${topic.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--foreground)]"
                    >
                      {topic}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="h-px w-full bg-[var(--border-color)]" />

              {/* Mobile Actions */}
              <div className="flex flex-col gap-4">
                {/* <button className="w-full rounded-full bg-[var(--foreground)] px-4 py-3 text-center text-base font-semibold text-[var(--background)] transition-opacity hover:opacity-90">
                  Subscribe to Newsletter
                </button> */}
                 {/* Mobile Theme Toggle removed from here as it is now accessible in the top bar even when menu is open? No, wait. When menu is open, the top bar is covered by the overlay's header which doesn't have the toggle. */}
                 {/* Let's add a theme toggle row here for completeness in mobile view */}
                 <button
                    onClick={toggleMode}
                    className="flex w-full items-center justify-between rounded-xl border border-[var(--border-color)] bg-[var(--surface)] px-4 py-3 text-base font-medium text-[var(--foreground)]"
                  >
                    <span>{isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}</span>
                     {isDarkMode ? (
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                    )}
                  </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}