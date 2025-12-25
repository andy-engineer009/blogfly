"use client";

import { useEffect, useState } from "react";

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen the welcome modal before
    // Only check on client side
    if (typeof window !== "undefined") {
      const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");
      
      if (!hasSeenWelcome) {
        // Small delay to ensure smooth animation
        setTimeout(() => {
          setIsOpen(true);
        }, 300);
      }
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Set flag in localStorage so popup won't show again
    if (typeof window !== "undefined") {
      localStorage.setItem("hasSeenWelcome", "true");
    }
  };

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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm transition-opacity duration-300"
      onClick={handleBackdropClick}
      aria-modal="true"
      aria-labelledby="welcome-modal-title"
      role="dialog"
    >
      <div className="relative w-full max-w-[400px] transform overflow-hidden rounded-2xl bg-[var(--surface)] shadow-2xl transition-all duration-300 scale-100">
        {/* Decorative Top Gradient */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[var(--accent)] to-pink-500" />
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-3 top-4 rounded-full p-2 text-[var(--muted)] transition-colors hover:bg-[var(--card)] hover:text-[var(--foreground)] z-10"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="px-8 py-8 text-center">
          {/* Icon with Glow */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)]/10 to-pink-500/10 ring-1 ring-[var(--accent)]/20">
            <span className="text-3xl animate-wave origin-bottom-right">👋</span>
          </div>

          {/* Title */}
          <h2
            id="welcome-modal-title"
            className="mb-3 text-2xl font-bold tracking-tight text-[var(--foreground)]"
          >
            Welcome to Demo
          </h2>

          {/* Content */}
          <div className="mb-8 space-y-2 text-[15px] leading-relaxed text-[var(--muted)]">
            <p>
              This is a demo version with English content.
            </p>
            <p>
              You can publish blogs in <span className="font-semibold text-[var(--foreground)]">Hindi, Tamil, Telugu</span>, or any language you choose.
            </p>
          </div>

          {/* Action Button */}
          <button
            onClick={handleClose}
            className="group w-full rounded-xl bg-[var(--foreground)] px-4 py-3.5 text-sm font-semibold text-[var(--background)] shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2"
          >
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeModal;

