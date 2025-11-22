"use client";

import { useMemo } from "react";

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pageNumbers = useMemo(
    () => Array.from({ length: totalPages }, (_, index) => index + 1),
    [totalPages],
  );

  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  return (
    <div className="flex flex-col gap-3 rounded-[1rem] border border-[var(--border-color)] bg-[var(--surface)] px-4 py-4 text-[0.65rem] uppercase tracking-[0.3em] text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={isFirst}
          className="rounded-[0.75rem] border border-transparent bg-[var(--accent)] px-4 py-2 text-[0.65rem] font-semibold text-white transition disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#fb4fa0]"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={isLast}
          className="rounded-[0.75rem] border border-transparent bg-[var(--accent)] px-4 py-2 text-[0.65rem] font-semibold text-white transition disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#fb4fa0]"
        >
          Next
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {pageNumbers.map((number) => (
          <button
            key={number}
            type="button"
            className={`w-10 rounded-full border px-2 py-1 text-center transition ${
              number === currentPage
                ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                : "border-[var(--border-color)] bg-transparent text-[var(--muted)]"
            }`}
            onClick={() => onPageChange(number)}
            aria-current={number === currentPage ? "page" : undefined}
          >
            {number}
          </button>
        ))}
      </div>

      <span className="text-[0.6rem] tracking-[0.5em] text-[var(--muted)]">
        Page {currentPage} / {totalPages}
      </span>
    </div>
  );
}

export default Pagination;

