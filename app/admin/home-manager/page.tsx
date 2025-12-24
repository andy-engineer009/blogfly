"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { PostCard } from "@/components/PostCard";
import BlogSelectionModal, { type BlogPost } from "@/components/BlogSelectionModal";
import { allBlogPosts, getBlogPostById } from "@/lib/blogData";

// Convert blog posts to BlogPost format for modal
const allBlogs: BlogPost[] = allBlogPosts.map(post => ({
  id: post.id,
  title: post.title,
  author: post.author,
  category: post.category,
  image: post.image,
  published: post.date || post.timeAgo || "हाल ही में",
    status: "published",
}));

// Get current homepage blogs (same as homepage)
const getCurrentHomepageBlogs = (): SelectedBlogs => {
  const hero1Post = getBlogPostById("cricket-india-world-cup");
  const hero2Post = getBlogPostById("health-yoga-meditation");
  const related1Post = getBlogPostById("tech-ai-ml");
  const related2Post = getBlogPostById("fitness-weight-loss");
  
  // Top Picks IDs from homepage (first 4 blogs) - fixed array of 4 positions
  const topPicksIds = allBlogPosts.slice(0, 4).map(post => post.id);
  // Ensure we have exactly 4 positions (pad with null if needed)
  const topPicksArray: (string | null)[] = [...topPicksIds];
  while (topPicksArray.length < 4) {
    topPicksArray.push(null);
  }
  
  // Latest stories IDs from homepage
  const latestIds = [
    "cricket-india-win",
    "tech-ai-update",
    "fitness-home-workout",
    "news-education",
    "health-nutrition",
    "cricket-world-cup",
  ];

  // Convert blog posts to BlogPost format
  const convertToBlogPost = (post: ReturnType<typeof getBlogPostById>): BlogPost | null => {
    if (!post) return null;
    return {
      id: post.id,
      title: post.title,
      author: post.author,
      category: post.category,
      image: post.image,
      published: post.date || post.timeAgo || "हाल ही में",
      status: "published",
    };
  };

  // The CapTable section - get from homepage if exists
  const capTableFeaturedPost = getBlogPostById("cricket-india-world-cup"); // Default or from config
  const capTableListIds = allBlogPosts.slice(5, 8).map(post => post.id); // Next 3 posts
  const capTableListArray: (string | null)[] = [...capTableListIds];
  while (capTableListArray.length < 3) {
    capTableListArray.push(null);
  }

  return {
    topPicks: topPicksArray.slice(0, 4) as (string | null)[],
    capTableFeatured: convertToBlogPost(capTableFeaturedPost),
    capTableList: capTableListArray.slice(0, 3) as (string | null)[],
    hero1: convertToBlogPost(hero1Post),
    hero2: convertToBlogPost(hero2Post),
    related1: convertToBlogPost(related1Post),
    related2: convertToBlogPost(related2Post),
    latest: latestIds.filter(id => allBlogs.some(blog => blog.id === id)), // Only include IDs that exist in allBlogs
  };
};

type SelectedBlogs = {
  topPicks: (string | null)[]; // Fixed array of 4 positions for Top Picks
  capTableFeatured: BlogPost | null; // The CapTable featured article
  capTableList: (string | null)[]; // Fixed array of 3 positions for CapTable list
  hero1: BlogPost | null; // Left column main hero
  hero2: BlogPost | null; // Right column top card
  related1: BlogPost | null; // Right column bottom left
  related2: BlogPost | null; // Right column bottom right
  latest: string[]; // Array of blog IDs
};

export default function HomeManagerPage() {
  // Initialize with current homepage blogs
  const currentHomepageBlogs = getCurrentHomepageBlogs();
  
  const [selectedBlogs, setSelectedBlogs] = useState<SelectedBlogs>({
    topPicks: currentHomepageBlogs.topPicks,
    capTableFeatured: currentHomepageBlogs.capTableFeatured,
    capTableList: currentHomepageBlogs.capTableList,
    hero1: currentHomepageBlogs.hero1,
    hero2: currentHomepageBlogs.hero2,
    related1: currentHomepageBlogs.related1,
    related2: currentHomepageBlogs.related2,
    latest: currentHomepageBlogs.latest,
  });

  const [isLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    target: keyof SelectedBlogs | "latest" | "topPicks" | "capTableList";
    title: string;
    topPickIndex?: number; // Position index for top picks (0-3)
    capTableListIndex?: number; // Position index for capTable list (0-2)
  }>({
    isOpen: false,
    target: "hero1",
    title: "Choose Blog",
  });

  const selectedLatestBlogs = useMemo(() => {
    return allBlogs.filter((blog) => selectedBlogs.latest.includes(blog.id));
  }, [selectedBlogs.latest]);

  // Get blog objects for top picks positions
  const getTopPickBlog = (index: number): BlogPost | null => {
    const blogId = selectedBlogs.topPicks[index];
    if (!blogId) return null;
    return allBlogs.find(blog => blog.id === blogId) || null;
  };

  // Get blog objects for capTable list positions
  const getCapTableListBlog = (index: number): BlogPost | null => {
    const blogId = selectedBlogs.capTableList[index];
    if (!blogId) return null;
    return allBlogs.find(blog => blog.id === blogId) || null;
  };

  const handleOpenModal = (target: keyof SelectedBlogs | "latest" | "topPicks" | "capTableList", title: string, topPickIndex?: number, capTableListIndex?: number) => {
    setModalState({ isOpen: true, target, title, topPickIndex, capTableListIndex });
  };


  const handleSelectBlog = (blog: BlogPost) => {
    const target = modalState.target;
    
    if (target === "latest") {
      // Toggle selection for latest stories (multiple selection)
      setSelectedBlogs((prev) => ({
        ...prev,
        [target]: prev[target].includes(blog.id)
          ? prev[target].filter((id) => id !== blog.id)
          : [...prev[target], blog.id],
      }));
    } else if (target === "topPicks") {
      // Position-based selection for top picks
      const positionIndex = modalState.topPickIndex !== undefined 
        ? modalState.topPickIndex 
        : selectedBlogs.topPicks.findIndex(id => id === null); // Find first empty slot
      
      if (positionIndex >= 0 && positionIndex < 4) {
        setSelectedBlogs((prev) => {
          const newTopPicks = [...prev.topPicks];
          newTopPicks[positionIndex] = blog.id;
          return {
            ...prev,
            topPicks: newTopPicks,
          };
        });
        // Close modal after selection
        handleCloseModal();
      }
    } else if (target === "capTableList") {
      // Position-based selection for capTable list
      const positionIndex = modalState.capTableListIndex !== undefined 
        ? modalState.capTableListIndex 
        : selectedBlogs.capTableList.findIndex(id => id === null); // Find first empty slot
      
      if (positionIndex >= 0 && positionIndex < 3) {
        setSelectedBlogs((prev) => {
          const newCapTableList = [...prev.capTableList];
          newCapTableList[positionIndex] = blog.id;
          return {
            ...prev,
            capTableList: newCapTableList,
          };
        });
        // Close modal after selection
        handleCloseModal();
      }
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

  const handleCloseModal = () => {
    setModalState({ isOpen: false, target: "hero1", title: "Choose Blog" });
  };

  const handleSaveConfiguration = async () => {
    try {
      setIsSaving(true);

      // Prepare data for API
      const configData = {
        topPicks: selectedBlogs.topPicks.filter(id => id !== null) as string[], // Filter out nulls for API
        capTableFeatured: selectedBlogs.capTableFeatured?.id || null,
        capTableList: selectedBlogs.capTableList.filter(id => id !== null) as string[],
        hero1: selectedBlogs.hero1?.id || null,
        hero2: selectedBlogs.hero2?.id || null,
        related1: selectedBlogs.related1?.id || null,
        related2: selectedBlogs.related2?.id || null,
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
      alert("Homepage Configuration saved successfully!");
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

  const handleRemoveTopPickBlog = (positionIndex: number) => {
    setSelectedBlogs((prev) => {
      const newTopPicks = [...prev.topPicks];
      newTopPicks[positionIndex] = null;
      return {
        ...prev,
        topPicks: newTopPicks,
      };
    });
  };

  const handleRemoveCapTableListBlog = (positionIndex: number) => {
    setSelectedBlogs((prev) => {
      const newCapTableList = [...prev.capTableList];
      newCapTableList[positionIndex] = null;
      return {
        ...prev,
        capTableList: newCapTableList,
      };
    });
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--background)]">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-[var(--border-color)] border-t-[var(--accent)]"></div>
          <p className="text-sm text-[var(--muted)]">Homepage Configuration is loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-8 text-[var(--foreground)] sm:px-6 lg:px-8">
      <div className="mx-auto w-full">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[var(--foreground)]">Homepage Manager</h1>
            <p className="mt-1 text-sm text-[var(--muted)]">Manage the content that will appear on your homepage</p>
          </div>
        </div>

        {/* Top Picks Section */}
        <section className="mb-16">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-[var(--foreground)]">Top Picks</h2>
              <p className="mt-1 text-sm text-[var(--muted)]">Select up to 4 blogs to display in the Top Picks section</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            {/* Top Picks Articles - Always show 4 fixed boxes */}
            <div className="flex flex-1 flex-wrap gap-3 sm:gap-4 lg:gap-6 lg:flex-nowrap">
              {Array.from({ length: 4 }).map((_, index) => {
                const blog = getTopPickBlog(index);
                return (
                  <div key={`top-pick-${index}`} className="group relative flex w-[calc(50%-0.375rem)] flex-shrink-0 flex-col sm:w-[calc(50%-0.5rem)] lg:w-auto lg:flex-1">
                    {blog ? (
                      <>
                        <div className="relative mb-3 aspect-[4/3] w-full h-[120px] overflow-hidden bg-[var(--surface)]">
                          <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <button
                            onClick={() => handleRemoveTopPickBlog(index)}
                            className="absolute right-2 top-2 rounded-full bg-red-500 p-1.5 text-white opacity-0 shadow-lg transition-opacity hover:bg-red-600 group-hover:opacity-100 z-10"
                            aria-label="Remove Top Pick"
                          >
                            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        <h3 className="line-clamp-2 text-sm font-semibold leading-[26px] text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)] sm:text-base">
                          {blog.title}
                        </h3>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-[var(--border-color)] bg-[var(--surface)] p-6 h-[120px] mb-3">
                        <svg className="mb-2 h-8 w-8 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <button
                          onClick={() => handleOpenModal("topPicks", "Choose Top Pick", index)}
                          className="mt-2 text-xs font-medium text-[var(--accent)] transition hover:underline"
                        >
                          Add Blog
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* The CapTable Section */}
        <section className="mb-16">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-[var(--foreground)]">The CapTable Section</h2>
              <p className="mt-1 text-sm text-[var(--muted)]">Manage the featured article and list items for The CapTable section</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Column: Featured Article */}
            <div className="lg:col-span-8">
              <div className="mb-4">
                <h3 className="mb-2 text-lg font-semibold text-[var(--foreground)]">Featured Article</h3>
                {selectedBlogs.capTableFeatured ? (
                  <div className="group relative rounded-xl border border-[var(--border-color)] bg-[var(--surface)] overflow-hidden">
                    <div className="relative h-[300px] w-full sm:h-[400px]">
                      <Image
                        src={selectedBlogs.capTableFeatured.image}
                        alt={selectedBlogs.capTableFeatured.title}
                        fill
                        className="object-cover"
                      />
                      <button
                        onClick={() => handleRemoveBlog("capTableFeatured")}
                        className="absolute right-2 top-2 rounded-full bg-red-500 p-2 text-white shadow-lg transition hover:bg-red-600 z-10"
                        aria-label="Remove Featured Blog"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="p-6">
                      <h4 className="mb-2 text-xl font-bold text-[var(--foreground)]">{selectedBlogs.capTableFeatured.title}</h4>
                      <p className="text-sm text-[var(--muted)]">{selectedBlogs.capTableFeatured.author}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-[var(--border-color)] bg-[var(--surface)] p-12">
                    <svg className="mb-4 h-12 w-12 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="mb-4 text-lg font-medium text-[var(--foreground)]">No Featured Article selected</p>
                    <button
                      onClick={() => handleOpenModal("capTableFeatured", "Choose Featured Article")}
                      className="rounded-lg bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#fb4fa0]"
                    >
                      Choose Blog
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: List & Newsletter */}
            <div className="lg:col-span-4">
              <div className="mb-6">
                <div className="mb-4 border-b-4 border-green-600 pb-2">
                  <div className="text-xl font-bold text-[var(--foreground)]">The</div>
                  <h3 className="text-3xl font-extrabold text-[var(--foreground)]">CapTable</h3>
                </div>
                <h4 className="mb-4 text-lg font-semibold text-[var(--foreground)]">List Articles (3 items)</h4>
              </div>

              <div className="space-y-6">
                {/* List Items */}
                {Array.from({ length: 3 }).map((_, index) => {
                  const blog = getCapTableListBlog(index);
                  return (
                    <div key={`capTable-list-${index}`} className="group relative">
                      {blog ? (
                        <div className="flex gap-4 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] p-4">
                          <div className="flex-1">
                            <h5 className="mb-2 line-clamp-2 text-sm font-bold leading-snug text-[var(--foreground)]">
                              {blog.title}
                            </h5>
                            <p className="text-xs text-[var(--muted)]">{blog.author}</p>
                          </div>
                          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                            <Image
                              src={blog.image}
                              alt={blog.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <button
                            onClick={() => handleRemoveCapTableListBlog(index)}
                            className="absolute right-2 top-2 rounded-full bg-red-500 p-1 text-white shadow-lg opacity-0 transition hover:bg-red-600 group-hover:opacity-100 z-10"
                            aria-label="Remove Blog"
                          >
                            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-[var(--border-color)] bg-[var(--surface)] p-6">
                          <button
                            onClick={() => handleOpenModal("capTableList", "Choose Blog", undefined, index)}
                            className="text-sm font-medium text-[var(--accent)] transition hover:underline"
                          >
                            Add Blog
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Newsletter Box Placeholder */}
                <div className="mt-8 rounded-xl border border-[var(--border-color)] bg-[var(--card)] p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <h5 className="max-w-[150px] text-lg font-bold leading-tight text-[var(--foreground)]">
                      Sign Up For YourStory Newsletter
                    </h5>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8 text-[var(--foreground)]" strokeWidth="1.5">
                      <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      className="w-full rounded-md border border-[var(--border-color)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-green-600 focus:outline-none"
                      disabled
                    />
                    <button className="rounded-md bg-black px-4 py-2 text-xs font-bold uppercase text-white transition hover:bg-black/80" disabled>
                      Sign Up
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-[var(--muted)]">Newsletter widget (configured on homepage)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section - Same layout as homepage */}
        <section className="mb-16 grid gap-4 lg:grid-cols-2 lg:h-[600px]">
          {/* Div A: Left Column (Main Hero - 1 Card) */}
          <div className="group relative w-full h-[500px] lg:h-full overflow-hidden rounded-3xl">
            {selectedBlogs.hero1 ? (
              <>
                <Image
                  src={selectedBlogs.hero1.image}
                  alt={selectedBlogs.hero1.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    {selectedBlogs.hero1.category}
                  </span>
                  <h1 className="mb-4 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                    {selectedBlogs.hero1.title}
                  </h1>
                  <div className="flex items-center gap-4 text-sm font-medium text-white/90">
                    <span>{selectedBlogs.hero1.author}</span>
                    <span className="text-white/40">•</span>
                    <span>{selectedBlogs.hero1.published}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveBlog("hero1")}
                  className="absolute right-4 top-4 rounded-full bg-red-500 p-2 text-white shadow-lg transition hover:bg-red-600 z-10"
                  aria-label="Remove Hero Blog"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </>
            ) : (
              <div className="flex h-full flex-col items-center justify-center border-2 border-dashed border-[var(--border-color)] bg-[var(--surface)] p-8">
                <svg className="mb-4 h-12 w-12 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="mb-4 text-lg font-medium text-[var(--foreground)]">No Hero Blog selected</p>
                <button
                  onClick={() => handleOpenModal("hero1", "Choose Hero Blog")}
                  className="rounded-lg bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#fb4fa0]"
                >
                  Choose Blog
                </button>
              </div>
            )}
          </div>

          {/* Div B: Right Column (Split Rows) */}
          <div className="flex flex-col gap-4 h-auto lg:h-full">
            {/* Row 1: Full Width Card */}
            <div className="group relative w-full h-[300px] lg:h-[60%] overflow-hidden rounded-3xl">
              {selectedBlogs.hero2 ? (
                <>
                  <Image
                    src={selectedBlogs.hero2.image}
                    alt={selectedBlogs.hero2.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                      {selectedBlogs.hero2.category}
                            </span>
                    <h2 className="mb-2 text-xl font-bold leading-tight text-white lg:text-3xl">
                      {selectedBlogs.hero2.title}
                    </h2>
                    <div className="flex items-center gap-3 text-xs font-medium text-white/90">
                      <span>{selectedBlogs.hero2.author}</span>
                      <span>•</span>
                      <span>{selectedBlogs.hero2.published}</span>
                          </div>
                        </div>
                        <button
                    onClick={() => handleRemoveBlog("hero2")}
                    className="absolute right-2 top-2 rounded-full bg-red-500 p-1.5 text-white shadow-lg transition hover:bg-red-600 z-10"
                    aria-label="Remove Blog"
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </>
                    ) : (
                <div className="flex h-full flex-col items-center justify-center border-2 border-dashed border-[var(--border-color)] bg-[var(--surface)] p-6">
                        <svg className="mb-2 h-8 w-8 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <button
                    onClick={() => handleOpenModal("hero2", "Choose Blog")}
                          className="mt-2 text-sm font-medium text-[var(--accent)] transition hover:underline"
                        >
                          Choose Blog
                        </button>
                      </div>
                    )}
            </div>

            {/* Row 2: Two Cards (50% / 50%) */}
            <div className="grid grid-cols-2 gap-4 h-[200px] lg:h-[40%]">
              {(["related1", "related2"] as const).map((key, index) => {
                const blog = selectedBlogs[key];
                return (
                  <div key={key} className="group relative h-full overflow-hidden rounded-3xl">
                    {blog ? (
                      <>
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                          <span className="mb-2 inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                              {blog.category}
                            </span>
                          <h3 className="line-clamp-2 text-sm font-bold leading-snug text-white lg:text-base">
                              {blog.title}
                            </h3>
                        </div>
                        <button
                          onClick={() => handleRemoveBlog(key)}
                          className="absolute right-2 top-2 rounded-full bg-red-500 p-1.5 text-white shadow-lg transition hover:bg-red-600 z-10"
                          aria-label="Remove Blog"
                        >
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </>
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center border-2 border-dashed border-[var(--border-color)] bg-[var(--surface)] p-4">
                        <svg className="mb-2 h-6 w-6 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <button
                          onClick={() => handleOpenModal(key, `Choose Related Blog ${index + 1}`)}
                          className="mt-1 text-xs font-medium text-[var(--accent)] transition hover:underline"
                        >
                          Choose Blog
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
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
              onClick={() => handleOpenModal("latest", "Choose Latest Stories")}
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
                      className="absolute right-2 top-2 rounded-full bg-red-500 p-1.5 text-white shadow-lg transition hover:bg-red-600 z-10"
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
                  <p className="mb-2 text-lg font-medium text-[var(--foreground)]">No Blog selected</p>
                  <p className="mb-4 text-sm text-[var(--muted)]">To choose blogs for latest stories, click &quot;Add Blog&quot;</p>
                  <button
                    onClick={() => handleOpenModal("latest", "Choose Latest Stories")}
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
          blogs={allBlogs}
          title={modalState.title}
          allowMultiple={modalState.target === "latest"}
          selectedIds={
            modalState.target === "latest"
              ? selectedBlogs.latest
              : modalState.target === "topPicks"
              ? selectedBlogs.topPicks.filter(id => id !== null) as string[]
              : modalState.target === "capTableList"
              ? selectedBlogs.capTableList.filter(id => id !== null) as string[]
              : []
          }
        />
      </div>
    </div>
  );
}

