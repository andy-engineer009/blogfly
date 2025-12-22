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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity duration-300"
      onClick={handleBackdropClick}
      aria-modal="true"
      aria-labelledby="welcome-modal-title"
      role="dialog"
    >
      <div className="w-full max-w-md transform overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--surface)] shadow-2xl transition-all duration-300 scale-100">
        {/* Header with Close Button */}
        <div className="relative border-b border-[var(--border-color)] bg-[var(--surface)] px-6 py-5">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 rounded-lg p-2 text-[var(--muted)] transition-colors hover:bg-[var(--border-color)] hover:text-[var(--foreground)]"
            aria-label="Close modal"
          >
            <svg 
              className="h-5 w-5 sm:h-6 sm:w-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-8 sm:px-8 sm:py-10">
          <div className="text-center">
            <div className="mb-4 text-4xl sm:text-5xl">👋</div>
            <h2
              id="welcome-modal-title"
              className="mb-4 text-2xl font-bold text-[var(--foreground)] sm:text-3xl"
            >
              Hey! Welcome to the demo
            </h2>
            <div className="space-y-3 text-left text-base text-[var(--muted)] sm:text-lg">
              <p>
                This is a demo version, so sample content is in English.
              </p>
              <p>
                Want another language? No stress 😌
              </p>
              <p>
                You can publish blogs in any language — Hindi, Tamil, Telugu, or anything else.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[var(--border-color)] bg-[var(--surface)] px-6 py-5 sm:px-8 sm:py-6">
          <button
            onClick={handleClose}
            className="w-full rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#fb4fa0] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 sm:text-base"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeModal;

