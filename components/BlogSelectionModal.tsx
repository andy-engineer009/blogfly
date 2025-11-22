"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";

export type BlogPost = {
  id: string;
  title: string;
  author: string;
  category: string;
  image: string;
  published?: string;
  status?: string;
};

export type BlogSelectionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (blog: BlogPost) => void;
  blogs?: BlogPost[]; // Optional - if not provided, will fetch from API
  title?: string;
  allowMultiple?: boolean;
  selectedIds?: string[];
};

const allBlogs: BlogPost[] = [
    {
      id: "P-101",
      title: "Why every founder needs a launch narrative",
      author: "Cara Lee",
      category: "Product",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      published: "Feb 05, 2025",
      status: "published",
    },
    {
      id: "P-102",
      title: "Behind the scenes of remote design sprints",
      author: "Elena Torres",
      category: "Design",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
      published: "Mar 10, 2025",
      status: "published",
    },
    {
      id: "P-103",
      title: "Scaling community feedback loops",
      author: "Marcus Lee",
      category: "Community",
      image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=600&q=80",
      published: "Jan 28, 2025",
      status: "published",
    },
    {
      id: "P-104",
      title: "How to write release notes people read",
      author: "Lena Howell",
      category: "Product",
      image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80",
      published: "Dec 19, 2024",
      status: "published",
    },
    {
      id: "space-starship",
      title: "Despite Chinese hacks, Trump's FCC votes to scrap cybersecurity rules",
      author: "Sean O'Kane",
      category: "Space",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
      published: "32 minutes ago",
      status: "published",
    },
    {
      id: "security-fcc",
      title: "Salesforce says some of its customers' data was accessed after Gainsight breach",
      author: "Zack Whittaker",
      category: "Security",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      published: "2 hours ago",
      status: "published",
    },
    {
      id: "product-ai-tooling",
      title: "The Reason Why Everyone Love Apple MacBook",
      author: "John Doe",
      category: "Gadgets",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      published: "12 August 2020",
      status: "published",
    },
    {
      id: "tech-vr",
      title: "What Will Virtual Reality Be Like In The Next 50 Years?",
      author: "John Doe",
      category: "Tech",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
      published: "12 August 2020",
      status: "published",
    },
    {
      id: "ai-mayans",
      title: "The Mayans' Lost Guide To Artificial Intelligence",
      author: "John Doe",
      category: "Robot",
      image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=600&q=80",
      published: "12 August 2020",
      status: "published",
    },
  ];
  

const POSTS_PER_PAGE = 10;
const API_BLOGS_PER_PAGE = 10;

// Function to fetch blogs with pagination from API
export const fetchBlogsWithPagination = async (
  page: number = 1,
  perPage: number = API_BLOGS_PER_PAGE,
  searchQuery: string = ""
): Promise<{ blogs: BlogPost[]; total: number; totalPages: number }> => {
  try {
    // TODO: Replace with your actual API endpoint
    const params = new URLSearchParams({
      page: page.toString(),
      perPage: perPage.toString(),
      ...(searchQuery && { search: searchQuery }),
    });

    const response = await fetch(`/api/blogs?${params.toString()}`);

    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const data = await response.json();

    // Expected API response structure:
    // {
    //   blogs: BlogPost[],
    //   total: number,
    //   totalPages: number,
    //   currentPage: number
    // }

    return {
      blogs: data.blogs || [],
      total: data.total || 0,
      totalPages: data.totalPages || 1,
    };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    // Return empty result on error
    return {
      blogs: [],
      total: 0,
      totalPages: 1,
    };
  }
};

export function BlogSelectionModal({
  isOpen,
  onClose,
  onSelect,
  blogs: providedBlogs,
  title = "Select Blog",
  allowMultiple = false,
  selectedIds = [],
}: BlogSelectionModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [apiBlogs, setApiBlogs] = useState<BlogPost[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(false);

  // Determine if we should use API or provided blogs
  const useApi = !providedBlogs || providedBlogs.length === 0;

  // Debounce search query for API calls
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");

  useEffect(() => {
    if (useApi) {
      const timer = setTimeout(() => {
        setDebouncedSearchQuery(searchQuery);
        setPage(1); // Reset to first page when search changes
      }, 500); // 500ms debounce

      return () => clearTimeout(timer);
    }
  }, [searchQuery, useApi]);

  // Fetch blogs from API when modal opens and when page/search changes
  useEffect(() => {
    if (isOpen && useApi) {
      const loadBlogs = async () => {
        // setIsLoadingBlogs(true);
        setApiBlogs(allBlogs);
        setTotalPages(1);

        // try {
        //   const result = await fetchBlogsWithPagination(page, API_BLOGS_PER_PAGE, debouncedSearchQuery);
        //   setApiBlogs(result.blogs);
        //   setTotalPages(result.totalPages);
        // } catch (error) {
        //   console.error("Error loading blogs:", error);
        //   setApiBlogs([]);
        //   setTotalPages(1);
        // } finally {
        //   setIsLoadingBlogs(false);
        // }
      };

      loadBlogs();
    }
  }, [isOpen, page, debouncedSearchQuery, useApi]);

  // Use API blogs or provided blogs
  const blogs = useApi ? apiBlogs : providedBlogs;
  
  // Filter blogs if using provided blogs (client-side search)
  const filteredBlogs = useMemo(() => {
    if (useApi) {
      // API handles search, so return as-is
      return blogs;
    }

    if (!searchQuery.trim()) return blogs;

    const query = searchQuery.toLowerCase();
    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(query) ||
        blog.author.toLowerCase().includes(query) ||
        blog.category.toLowerCase().includes(query),
    );
  }, [blogs, searchQuery, useApi]);

  // Calculate visible blogs and total pages for provided blogs
  const clientTotalPages = useApi 
    ? totalPages 
    : Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);
  
  const visibleBlogs = useMemo(() => {
    if (useApi) {
      // API returns paginated results, so return as-is
      return filteredBlogs;
    }
    
    // Client-side pagination for provided blogs
    const start = (page - 1) * POSTS_PER_PAGE;
    return filteredBlogs.slice(start, start + POSTS_PER_PAGE);
  }, [filteredBlogs, page, useApi]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setSearchQuery("");
      setPage(1);
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

  // Reset page when modal closes
  useEffect(() => {
    if (!isOpen) {
      setPage(1);
      setSearchQuery("");
      setDebouncedSearchQuery("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSelect = (blog: BlogPost) => {
    onSelect(blog);
    if (!allowMultiple) {
      onClose();
    }
  };

  const isSelected = (blogId: string) => selectedIds.includes(blogId);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={handleBackdropClick}
      aria-modal="true"
      aria-labelledby="modal-title"
      role="dialog"
    >
      <div className="flex h-[90vh] w-full max-w-4xl transform flex-col overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] shadow-2xl">
        {/* Header */}
        <div className="border-b border-[var(--border-color)] bg-[var(--surface)] px-6 py-5">
          <div className="flex items-center justify-between">
            <h2 id="modal-title" className="text-xl font-bold text-[var(--foreground)] sm:text-2xl">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-[var(--muted)] transition-colors hover:bg-[var(--border-color)] hover:text-[var(--foreground)]"
              aria-label="Close modal"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Search Bar */}
          <div className="mt-4">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--muted)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search blogs by title, author, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--surface)] px-10 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {isLoadingBlogs && useApi ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-[var(--border-color)] border-t-[var(--accent)]"></div>
              <p className="text-sm text-[var(--muted)]">Loading blogs...</p>
            </div>
          ) : visibleBlogs.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <svg className="mb-4 h-12 w-12 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-base font-medium text-[var(--foreground)]">No blogs found</p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {searchQuery ? "Try adjusting your search query" : "No blogs available"}
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {visibleBlogs.map((blog) => {
                const selected = isSelected(blog.id);
                return (
                  <button
                    key={blog.id}
                    onClick={() => handleSelect(blog)}
                    className={`group relative flex flex-col gap-3 rounded-xl border p-4 text-left transition-all ${
                      selected
                        ? "border-[var(--accent)] bg-[var(--accent)]/10 shadow-lg"
                        : "border-[var(--border-color)] bg-[var(--surface)] hover:border-[var(--accent)] hover:shadow-lg"
                    }`}
                  >
                    {selected && (
                      <div className="absolute right-3 top-3 rounded-full bg-[var(--accent)] p-1.5">
                        <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  <div className="relative h-40 w-full overflow-hidden rounded-lg">
                    <Image
                      src={blog.image || "https://via.placeholder.com/400x300"}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex w-fit rounded-full bg-[var(--accent)]/10 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                      {blog.category}
                    </span>
                    <h3 className="line-clamp-2 text-base font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)]">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-[var(--muted)]">
                      By {blog.author}
                      {blog.published && ` · ${blog.published}`}
                    </p>
                  </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer with Pagination and Done Button for Multiple Selection */}
        {!isLoadingBlogs && (visibleBlogs.length > 0 || clientTotalPages > 0) && (
          <div className="border-t border-[var(--border-color)] bg-[var(--surface)] px-6 py-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Pagination
                currentPage={page}
                totalPages={clientTotalPages}
                onPageChange={(nextPage) => setPage(Math.min(clientTotalPages, Math.max(1, nextPage)))}
              />
              {allowMultiple && (
                <button
                  onClick={onClose}
                  className="rounded-lg bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#fb4fa0]"
                >
                  Done ({selectedIds.length} selected)
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogSelectionModal;

