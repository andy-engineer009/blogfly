"use client";

import { useState, useMemo, useEffect } from "react";
import { PostCard } from "@/components/PostCard";
import BlogSelectionModal, { type BlogPost } from "@/components/BlogSelectionModal";

// Mock data - in real app, this would come from API
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

type SelectedBlogs = {
  hero: BlogPost | null;
  related1: BlogPost | null;
  related2: BlogPost | null;
  related3: BlogPost | null;
  related4: BlogPost | null;
  latest: string[]; // Array of blog IDs
};

export default function HomeManagerPage() {
  const [selectedBlogs, setSelectedBlogs] = useState<SelectedBlogs>({
    hero: null,
    related1: null,
    related2: null,
    related3: null,
    related4: null,
    latest: [],
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  // Fetch current homepage configuration on load
  useEffect(() => {
    const fetchHomepageConfig = async () => {
      try {
        setIsLoading(true);
        // TODO: Replace with your actual API endpoint
        const response = await fetch("/api/homepage-config");
        
        if (!response.ok) {
          throw new Error("Failed to fetch homepage configuration");
        }

        const data = await response.json();
        
        // Find blog objects from IDs
        const findBlogById = (id: string | null) => {
          if (!id) return null;
          return allBlogs.find((blog) => blog.id === id) || null;
        };
        // Utility function to find blog objects for all IDs in a given array (like data.latest)
        const findBlogsByIds = (ids: (string | number | null | undefined)[]) => {
          // Ensure all IDs are strings for comparison with blog.id
          return ids
            ?.filter((id): id is string | number => id !== null && id !== undefined)
            .map((id) => allBlogs.find((blog) => blog.id == id) || null)
            .filter((blog): blog is BlogPost => blog !== null);
        };

        // Map API response to state
        setSelectedBlogs({
          hero: findBlogById(data.hero),
          related1: findBlogById(data.related1),
          related2: findBlogById(data.related2),
          related3: findBlogById(data.related3),
          related4: findBlogById(data.related4),
          latest: findBlogsByIds(data.latest)?.map((blog) => blog.id) || [],
        });
      } catch (error) {
        console.error("Error fetching homepage configuration:", error);
        // Keep default empty state if API fails
      } finally {
        setIsLoading(false);
      }
    };

    fetchHomepageConfig();
  }, []);

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    target: keyof SelectedBlogs | "latest";
    title: string;
  }>({
    isOpen: false,
    target: "hero",
    title: "Select Blog",
  });

  const selectedLatestBlogs = useMemo(() => {
    return allBlogs.filter((blog) => selectedBlogs.latest.includes(blog.id));
  }, [selectedBlogs.latest]);

  const handleOpenModal = (target: keyof SelectedBlogs | "latest", title: string) => {
    setModalState({ isOpen: true, target, title });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, target: "hero", title: "Select Blog" });
  };

  const handleSelectBlog = (blog: BlogPost) => {
    const target = modalState.target;
    
    if (target === "latest") {
      // Toggle selection for latest stories (multiple selection)
      setSelectedBlogs((prev) => ({
        ...prev,
        latest: prev.latest.includes(blog.id)
          ? prev.latest.filter((id) => id !== blog.id)
          : [...prev.latest, blog.id],
      }));
    } else {
      // Single selection for hero and related stories
      setSelectedBlogs((prev) => ({
        ...prev,
        [target]: blog,
      }));
      // Close modal immediately after selection for single select
      handleCloseModal();
    }
  };

  const handleRemoveBlog = (target: keyof Omit<SelectedBlogs, "latest">) => {
    setSelectedBlogs((prev) => ({
      ...prev,
      [target]: null,
    }));
  };

  const handleSaveConfiguration = async () => {
    try {
      setIsSaving(true);

      // Prepare data for API
      const configData = {
        hero: selectedBlogs.hero?.id || null,
        related1: selectedBlogs.related1?.id || null,
        related2: selectedBlogs.related2?.id || null,
        related3: selectedBlogs.related3?.id || null,
        related4: selectedBlogs.related4?.id || null,
        latest: selectedBlogs.latest,
      };

      // TODO: Replace with your actual API endpoint
      const response = await fetch("/api/homepage-config", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(configData),
      });

      if (!response.ok) {
        throw new Error("Failed to save homepage configuration");
      }

      // Show success message
      alert("Homepage configuration saved successfully!");
    } catch (error) {
      console.error("Error saving homepage configuration:", error);
      alert("Failed to save homepage configuration. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleRemoveLatestBlog = (blogId: string) => {
    setSelectedBlogs((prev) => ({
      ...prev,
      latest: prev.latest.filter((id) => id !== blogId),
    }));
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--background)]">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-[var(--border-color)] border-t-[var(--accent)]"></div>
          <p className="text-sm text-[var(--muted)]">Loading homepage configuration...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-8 text-[var(--foreground)] sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[var(--foreground)]">Home Manager</h1>
            <p className="mt-1 text-sm text-[var(--muted)]">Manage what appears on your homepage</p>
          </div>
        </div>

        {/* Hero Section */}
        <section className="mb-10 flex flex-col gap-4 lg:gap-6 lg:flex-row lg:items-stretch">
          <article className="relative w-full overflow-hidden rounded-[1.5rem] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.1)] lg:w-2/4">
            {selectedBlogs.hero ? (
              <>
                <div
                  className="relative min-h-[500px] overflow-hidden bg-cover bg-center lg:min-h-[600px]"
                  style={{ backgroundImage: `url(${selectedBlogs.hero.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                      {selectedBlogs.hero.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <h1 className="mb-4 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                      {selectedBlogs.hero.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-white/90">
                      <span>{selectedBlogs.hero.author}</span>
                      <span className="text-white/50">·</span>
                      <span>{selectedBlogs.hero.published}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveBlog("hero")}
                  className="absolute right-4 top-4 rounded-full bg-red-500 p-2 text-white shadow-lg transition hover:bg-red-600"
                  aria-label="Remove hero blog"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </>
            ) : (
              <div className="flex min-h-[500px] flex-col items-center justify-center border-2 border-dashed border-[var(--border-color)] bg-[var(--surface)] p-8 lg:min-h-[600px]">
                <svg className="mb-4 h-12 w-12 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="mb-4 text-lg font-medium text-[var(--foreground)]">No Hero Blog Selected</p>
                <button
                  onClick={() => handleOpenModal("hero", "Select Hero Blog")}
                  className="rounded-lg bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#fb4fa0]"
                >
                  Choose Blog
                </button>
              </div>
            )}
          </article>

          {/* Related Stories - 4 Cards in 2x2 Grid */}
          <aside className="w-full lg:w-1/2">
            <div className="grid md:grid-cols-2 gap-4">
              {/* First Row: related1 and related2 */}
              {(["related1", "related2"] as const).map((key, index) => {
                const blog = selectedBlogs[key];

                return (
                  <article
                    key={key}
                    className="group relative overflow-hidden rounded-[1.5rem] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.1)]"
                  >
                    {blog ? (
                      <>
                        <div
                          className="relative min-h-[280px] overflow-hidden bg-cover bg-center sm:min-h-[300px]"
                          style={{ backgroundImage: `url(${blog.image})` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                          <div className="absolute top-4 left-4">
                            <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-white">
                              {blog.category}
                            </span>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                            <h3 className="mb-3 text-lg font-bold leading-tight text-white sm:text-xl">
                              {blog.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 text-xs text-white/90">
                              <span>{blog.author}</span>
                              <span className="text-white/50">·</span>
                              <span>{blog.published}</span>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => handleRemoveBlog(key)}
                          className="absolute right-2 top-2 rounded-full bg-red-500 p-1.5 text-white shadow-lg transition hover:bg-red-600"
                          aria-label={`Remove ${key} blog`}
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </>
                    ) : (
                      <div className="flex min-h-[280px] flex-col items-center justify-center border-2 border-dashed border-[var(--border-color)] bg-[var(--surface)] p-6 sm:min-h-[300px]">
                        <svg className="mb-2 h-8 w-8 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <button
                          onClick={() => handleOpenModal(key, `Select Related Blog ${index + 1}`)}
                          className="mt-2 text-sm font-medium text-[var(--accent)] transition hover:underline"
                        >
                          Choose Blog
                        </button>
                      </div>
                    )}
                  </article>
                );
              })}

              {/* Second Row: related3 and related4 */}
              {(["related3", "related4"] as const).map((key, index) => {
                const blog = selectedBlogs[key];

                return (
                  <article
                    key={key}
                    className="group relative overflow-hidden rounded-[1.5rem] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.1)]"
                  >
                    {blog ? (
                      <>
                        <div
                          className="relative min-h-[280px] overflow-hidden bg-cover bg-center sm:min-h-[300px]"
                          style={{ backgroundImage: `url(${blog.image})` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                          <div className="absolute top-4 left-4">
                            <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-white">
                              {blog.category}
                            </span>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                            <h3 className="mb-3 text-lg font-bold leading-tight text-white sm:text-xl">
                              {blog.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 text-xs text-white/90">
                              <span>{blog.author}</span>
                              <span className="text-white/50">·</span>
                              <span>{blog.published}</span>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => handleRemoveBlog(key)}
                          className="absolute right-2 top-2 rounded-full bg-red-500 p-1.5 text-white shadow-lg transition hover:bg-red-600"
                          aria-label={`Remove ${key} blog`}
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </>
                    ) : (
                      <div className="flex min-h-[280px] flex-col items-center justify-center border-2 border-dashed border-[var(--border-color)] bg-[var(--surface)] p-6 sm:min-h-[300px]">
                        <svg className="mb-2 h-8 w-8 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <button
                          onClick={() => handleOpenModal(key, `Select Related Blog ${index + 3}`)}
                          className="mt-2 text-sm font-medium text-[var(--accent)] transition hover:underline"
                        >
                          Choose Blog
                        </button>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </aside>
        </section>

        {/* Latest Stories Section */}
        <section className="mt-10">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-6">
              <h2 className="flex items-center gap-[0.5rem] text-[32px] md:text-[80px] font-[800] text-left">
                Latest Stories
              </h2>
            </div>
            <button
              onClick={() => handleOpenModal("latest", "Select Latest Stories")}
              className="rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#fb4fa0]"
            >
              Add Blog
            </button>
          </div>

          <div className="mt-5 md:mt-12 flex flex-col gap-6 lg:flex-row">
            <div className="w-full lg:w-[70%] space-y-6">
              {selectedLatestBlogs.length > 0 ? (
                selectedLatestBlogs.map((blog) => (
                  <div key={blog.id} className="relative">
                    <PostCard
                      id={blog.id}
                      label={blog.category}
                      title={blog.title}
                      author={blog.author}
                      timeAgo={blog.published || ""}
                      image={blog.image}
                    />
                    <button
                      onClick={() => handleRemoveLatestBlog(blog.id)}
                      className="absolute right-2 top-2 rounded-full bg-red-500 p-1.5 text-white shadow-lg transition hover:bg-red-600"
                      aria-label={`Remove ${blog.title}`}
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-[var(--border-color)] bg-[var(--surface)] py-16">
                  <svg className="mb-4 h-12 w-12 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <p className="mb-2 text-lg font-medium text-[var(--foreground)]">No blogs selected</p>
                  <p className="mb-4 text-sm text-[var(--muted)]">Click "Add Blog" to select blogs for latest stories</p>
                  <button
                    onClick={() => handleOpenModal("latest", "Select Latest Stories")}
                    className="rounded-lg bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#fb4fa0]"
                  >
                    Add Blog
                  </button>
                </div>
              )}
            </div>

            <div className="hidden w-full lg:flex lg:w-[30%]">
              <div className="mx-auto flex w-full max-w-xs flex-col items-center gap-4 rounded-[1.5rem] border border-[#e5e7eb] bg-white p-6 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <span className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">Sponsored</span>
                <p className="text-lg font-semibold text-[var(--foreground)]">Ads</p>
              </div>
            </div>
          </div>
        </section>

        {/* Save Button */}
        <div className="sticky bottom-4 mt-8 flex justify-end">
          <button
            onClick={handleSaveConfiguration}
            disabled={isSaving || isLoading}
            className="rounded-lg bg-[var(--accent)] px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-[#fb4fa0] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSaving ? "Saving..." : "Save Configuration"}
          </button>
        </div>

        {/* Blog Selection Modal */}
        <BlogSelectionModal
          isOpen={modalState.isOpen}
          onClose={handleCloseModal}
          onSelect={handleSelectBlog}
          // blogs prop not provided - will fetch from API automatically
          title={modalState.title}
          allowMultiple={modalState.target === "latest"}
          selectedIds={modalState.target === "latest" ? selectedBlogs.latest : []}
        />
      </div>
    </div>
  );
}

