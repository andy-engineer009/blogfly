"use client";

import { useMemo, useState } from "react";
import { PostCard } from "@/components/PostCard";
import Pagination from "@/components/Pagination";

const posts = [
  {
    id: "space-starship",
    label: "Space",
    title: "SpaceX’s upgraded Starship suffers explosion during testing",
    author: "Sean O'Kane",
    timeAgo: "32 minutes ago",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "security-fcc",
    label: "Security",
    title: "Despite Chinese hacks, Trump’s FCC votes to scrap cybersecurity rules",
    author: "Zack Whittaker",
    timeAgo: "2 hours ago",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "lifestyle-minimal",
    label: "Lifestyle",
    title: "How minimalist design helps teams ship faster",
    author: "Priya Sharma",
    timeAgo: "3 hours ago",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "product-ai-tooling",
    label: "Product",
    title: "What founders can learn from the rise of AI-first tooling",
    author: "Marcus Lee",
    timeAgo: "4 hours ago",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "food-storytelling",
    label: "Food",
    title: "Why every chef is now a storyteller on the web",
    author: "Chloe Martinez",
    timeAgo: "5 hours ago",
    image:
      "https://images.unsplash.com/photo-1498575207490-34b60d3b04e4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "analytics-dashboards",
    label: "Analytics",
    title: "Data dashboards that executives can't ignore",
    author: "Nathan Cole",
    timeAgo: "6 hours ago",
    image:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "strategy-narrative",
    label: "Strategy",
    title: "How to build a narrative-driven go-to-market plan",
    author: "Anya Ruiz",
    timeAgo: "7 hours ago",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "tech-customer-service",
    label: "Tech",
    title: "The status of generative AI in customer service this quarter",
    author: "Elliot Zhang",
    timeAgo: "8 hours ago",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "lifestyle-balanced",
    label: "Lifestyle",
    title: "Designing a balanced work-from-anywhere schedule",
    author: "Arielle T.",
    timeAgo: "9 hours ago",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "product-release-notes",
    label: "Product",
    title: "Building loyalty through thoughtful release notes",
    author: "Marcus Lee",
    timeAgo: "10 hours ago",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "culture-open-source",
    label: "Culture",
    title: "Open-source stories that ignite team creativity",
    author: "Vivek Patel",
    timeAgo: "11 hours ago",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "design-mood-boards",
    label: "Design",
    title: "Mood boards for product teams who love color",
    author: "Lena Howell",
    timeAgo: "12 hours ago",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "science-astro",
    label: "Science",
    title: "Inside the next-generation space telescope",
    author: "Mina Steele",
    timeAgo: "13 hours ago",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "careers-remote",
    label: "Careers",
    title: "Remote-first interviews that put people first",
    author: "Harper Ellison",
    timeAgo: "14 hours ago",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "fitness-morning",
    label: "Lifestyle",
    title: "Morning habits that keep founders energized",
    author: "Cam Ruiz",
    timeAgo: "15 hours ago",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "music-vinyl",
    label: "Music",
    title: "Why vinyl sales are growing despite digital streaming",
    author: "Noah Green",
    timeAgo: "16 hours ago",
    image:
      "https://images.unsplash.com/photo-1464375117522-1311d6a5b205?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "travel-urban",
    label: "Travel",
    title: "City breaks you can take for under $150",
    author: "Sophie Lambert",
    timeAgo: "17 hours ago",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "finance-green",
    label: "Finance",
    title: "Sustainable investing for the curious beginner",
    author: "Ivan Torres",
    timeAgo: "18 hours ago",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "gaming-meta",
    label: "Gaming",
    title: "Virtual worlds that actually feel human",
    author: "Jules Mercer",
    timeAgo: "19 hours ago",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "education-hybrid",
    label: "Education",
    title: "Hybrid classrooms that make teachers excited again",
    author: "Rita Sun",
    timeAgo: "20 hours ago",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "wellness-breathwork",
    label: "Wellness",
    title: "Breathwork rituals to calm even the busiest minds",
    author: "Leo Kline",
    timeAgo: "21 hours ago",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "urban-infrastructure",
    label: "Urban",
    title: "How cities are winning back their sidewalks",
    author: "Maya Lorne",
    timeAgo: "22 hours ago",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "coding-rxjs",
    label: "Tech",
    title: "Reactive stacks that feel like magic to debug",
    author: "Dahlia Kim",
    timeAgo: "23 hours ago",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "ai-ethics",
    label: "AI",
    title: "Ethics ahead: building guardrails for creative models",
    author: "Priya Sharma",
    timeAgo: "1 day ago",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "climate-labs",
    label: "Climate",
    title: "Labs that turn ocean plastic into art",
    author: "Noah Green",
    timeAgo: "1 day ago",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "wellness-forest",
    label: "Lifestyle",
    title: "Forest bathing rituals you can start this week",
    author: "Camila Ruiz",
    timeAgo: "1 day ago",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "tech-satellite",
    label: "Space",
    title: "Satellite constellations powering low-latency concerts",
    author: "Oscar Wynn",
    timeAgo: "1 day ago",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "food-heritage",
    label: "Food",
    title: "Heritage dishes chefs are remixing for 2025",
    author: "Anya Ruiz",
    timeAgo: "1 day ago",
    image:
      "https://images.unsplash.com/photo-1498575207490-34b60d3b04e4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "culture-art",
    label: "Culture",
    title: "How artists transform public transit into canvases",
    author: "Theo Castro",
    timeAgo: "2 days ago",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "community-collective",
    label: "Community",
    title: "Collective rituals that anchor neighborhoods",
    author: "Lena Howell",
    timeAgo: "2 days ago",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
  },
];

const POSTS_PER_PAGE = 10;

export default function TopicPages() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const visiblePosts = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE;
    return posts.slice(start, start + POSTS_PER_PAGE);
  }, [page]);

  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-12 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">Topics</p>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Latest Stories
          </h1>
          {/* <p className="max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
            Browse the latest 10 stories from Blogfly each page. Tap through to explore every category
            with an eye on readability and calm pacing.
          </p> */}
        </header>

        <section className="space-y-6">
          {visiblePosts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              label={post.label}
              title={post.title}
              author={post.author}
              timeAgo={post.timeAgo}
              image={post.image}
            />
          ))}
        </section>

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(nextPage) => setPage(Math.min(totalPages, Math.max(1, nextPage)))}
        />
      </div>
    </div>
  );
}

