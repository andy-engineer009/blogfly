"use client";

import { useEffect } from "react";

export type ConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  confirmVariant?: "danger" | "primary";
};

export function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmVariant = "danger",
}: ConfirmationModalProps) {
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
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity duration-300"
      onClick={handleBackdropClick}
      aria-modal="true"
      aria-labelledby="modal-title"
      role="dialog"
    >
      <div className="w-full max-w-md transform overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--surface)] shadow-2xl transition-all duration-300 scale-100">
        {/* Header */}
        <div className="border-b border-[var(--border-color)] bg-[var(--surface)] px-6 py-5 sm:px-8 sm:py-6">
          <h2
            id="modal-title"
            className="text-xl font-bold text-[var(--foreground)] sm:text-2xl"
          >
            {title}
          </h2>
          {message && (
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              {message}
            </p>
          )}
        </div>

        {/* Body */}
        <div className="px-6 py-6 sm:px-8 sm:py-8">
          {!message && (
            <p className="text-base leading-relaxed text-[var(--foreground)]">
              Are you sure you want to proceed with this action?
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-col-reverse gap-3 border-t border-[var(--border-color)] bg-[var(--surface)] px-6 py-5 sm:flex-row sm:justify-end sm:gap-3 sm:px-8 sm:py-6">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 sm:w-auto"
          >
            {cancelText}
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            className={`w-full rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto ${
              confirmVariant === "danger"
                ? "bg-red-500 hover:bg-red-600 focus:ring-red-500 shadow-lg shadow-red-500/20"
                : "bg-[var(--accent)] hover:bg-[#fb4fa0] focus:ring-[var(--accent)] shadow-lg shadow-[var(--accent)]/20"
            }`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;

