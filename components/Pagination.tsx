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

  // Show limited pages with ellipsis for better UX
  const visiblePages = useMemo(() => {
    if (totalPages <= 7) return pageNumbers;
    
    const pages: (number | string)[] = [];
    if (currentPage <= 3) {
      // Show: 1 2 3 4 ... last
      pages.push(1, 2, 3, 4, '...', totalPages);
    } else if (currentPage >= totalPages - 2) {
      // Show: 1 ... last-3 last-2 last-1 last
      pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      // Show: 1 ... current-1 current current+1 ... last
      pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
    }
    return pages;
  }, [currentPage, totalPages, pageNumbers]);

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Page Info - Mobile */}
      <div className="flex items-center justify-center text-sm text-[var(--muted)] sm:hidden">
        <span>Page {currentPage} of {totalPages}</span>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={isFirst}
          className="flex items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-[var(--surface)] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
          aria-label="Previous page"
        >
          <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1 overflow-x-auto sm:gap-2">
          {visiblePages.map((page, index) => {
            if (page === '...') {
              return (
                <span key={`ellipsis-${index}`} className="px-2 text-[var(--muted)]">
                  ...
                </span>
              );
            }
            
            const pageNum = page as number;
            const isActive = pageNum === currentPage;
            
            return (
              <button
                key={pageNum}
                type="button"
                onClick={() => onPageChange(pageNum)}
                className={`min-w-[2.5rem] rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-[var(--accent)] bg-[var(--accent)] text-white shadow-sm"
                    : "border-[var(--border-color)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/10"
                }`}
                aria-current={isActive ? "page" : undefined}
                aria-label={`Go to page ${pageNum}`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={isLast}
          className="flex items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-[var(--surface)] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
          aria-label="Next page"
        >
          <span className="hidden sm:inline">Next</span>
          <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Page Info - Desktop */}
      <div className="hidden items-center justify-center text-sm text-[var(--muted)] sm:flex">
        <span>Page {currentPage} of {totalPages}</span>
      </div>
    </div>
  );
}

export default Pagination;

