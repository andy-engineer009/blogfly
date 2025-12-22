"use client";

import { PostCard } from "@/components/PostCard";
import Link from "next/link";
import Image from "next/image";
import { getBlogPostById, getCategorySlug } from "@/lib/blogData";
import { WelcomeModal } from "@/components/WelcomeModal";

// Hero stories with IDs
const heroStories = [
  getBlogPostById("cricket-india-world-cup"),
  getBlogPostById("health-yoga-meditation"),
].filter(Boolean) as Array<NonNullable<ReturnType<typeof getBlogPostById>>>;

// Related stories with IDs
const relatedStories = [
  getBlogPostById("tech-ai-ml"),
  getBlogPostById("fitness-weight-loss"),
  getBlogPostById("news-education-policy"),
  getBlogPostById("health-mental-health"),
].filter(Boolean) as Array<NonNullable<ReturnType<typeof getBlogPostById>>>;

const latestStories = [
  {
    id: "cricket-india-win",
    label: "क्रिकेट",
    title: "आईपीएल 2024: मुंबई इंडियंस ने चेन्नई सुपर किंग्स को हराया",
    author: "विकास गुप्ता",
    timeAgo: "32 मिनट पहले",
    image:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tech-ai-update",
    label: "टेक",
    title: "ChatGPT का नया अपडेट: अब हिंदी में भी बेहतर काम करता है",
    author: "नीलम पांडे",
    timeAgo: "2 घंटे पहले",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "fitness-home-workout",
    label: "फिटनेस",
    title: "घर पर मजबूत मांसपेशियां बनाने के लिए सर्वोत्तम व्यायाम",
    author: "अर्जुन मल्होत्रा",
    timeAgo: "3 घंटे पहले",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "news-education",
    label: "समाचार",
    title: "केंद्र सरकार ने नई स्वास्थ्य योजना की घोषणा की",
    author: "अनिता दास",
    timeAgo: "4 घंटे पहले",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "health-nutrition",
    label: "स्वास्थ्य",
    title: "स्वस्थ आहार: प्रोटीन से भरपूर भारतीय खाद्य पदार्थ",
    author: "डॉ. रीता जैन",
    timeAgo: "5 घंटे पहले",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cricket-world-cup",
    label: "क्रिकेट",
    title: "टी20 विश्व कप 2024: भारत की टीम का पूरा शेड्यूल जारी",
    author: "मोहित शर्मा",
    timeAgo: "8 घंटे पहले",
    image:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Home() {
  // Safety check: ensure we have at least 2 hero stories
  if (heroStories.length < 2) {
    return (
      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <div className="mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <p>Loading...</p>
        </div>
      </main>
    );
  }

  const hero1 = heroStories[0];
  const hero2 = heroStories[1];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <WelcomeModal />
      <div className=" mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* Hero Section */}
        <section className="mb-16 grid gap-4 lg:grid-cols-2 lg:h-[600px]">
          {/* Div A: Left Column (Main Hero - 1 Card) */}
          <Link 
            href={`/${getCategorySlug(hero1.label)}/${hero1.id}`}
            className="group relative w-full h-[500px] lg:h-full overflow-hidden rounded-3xl cursor-pointer"
          >
            <Image
              src={hero1.image}
              alt={hero1.title}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                {hero1.category}
              </span>
              <h1 className="mb-4 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                {hero1.title}
              </h1>
              <div className="flex items-center gap-4 text-sm font-medium text-white/90">
                <span>{hero1.author}</span>
                <span className="text-white/40">•</span>
                <span>{hero1.date}</span>
              </div>
            </div>
          </Link>

          {/* Div B: Right Column (Split Rows) */}
          <div className="flex flex-col gap-4 h-auto lg:h-full">
            {/* Row 1: Full Width Card */}
            <Link 
              href={`/${getCategorySlug(hero2.label)}/${hero2.id}`}
              className="group relative w-full h-[300px] lg:h-[60%] overflow-hidden rounded-3xl cursor-pointer"
            >
              <Image
                src={hero2.image}
                alt={hero2.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                  {hero2.category}
                </span>
                <h2 className="mb-2 text-xl font-bold leading-tight text-white lg:text-3xl">
                  {hero2.title}
                </h2>
                <div className="flex items-center gap-3 text-xs font-medium text-white/90">
                  <span>{hero2.author}</span>
                  <span>•</span>
                  <span>{hero2.date}</span>
                </div>
              </div>
            </Link>

            {/* Row 2: Two Cards (50% / 50%) */}
            <div className="grid grid-cols-2 gap-4 h-[200px] lg:h-[40%]">
              {relatedStories.slice(0, 2).map((story) => (
                <Link
                  key={story.id}
                  href={`/${getCategorySlug(story.label)}/${story.id}`}
                  className="group relative h-full overflow-hidden rounded-3xl cursor-pointer"
                >
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                    <span className="mb-2 inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                      {story.label}
                    </span>
                    <h3 className="line-clamp-2 text-sm font-bold leading-snug text-white lg:text-base">
                      {story.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Stories Section */}
        <section className="flex flex-col gap-12 lg:flex-row">
          <div className="w-full space-y-8 lg:w-2/3">
            <div className="flex items-end justify-between border-b border-[var(--border-color)] pb-4">
            <h2 className="flex items-center gap-[0.5rem] text-[32px] md:text-[50px] font-[800] text-left">
            Latest Stories
              <svg
                className="hidden lg:block relative -bottom-[1rem]"
                xmlns="http://www.w3.org/2000/svg"
                width="92"
                height="85"
                fill="none"
                viewBox="0 0 92 85"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="#FF2020"
                    d="M61.105 31.066C53.491 18.79 38.063 11.74 23.788 14.864a37.87 37.87 0 0 0-10.964 4.25c-3.368 1.953-6.287 4.641-8.721 7.67-1.138 1.417.897 2.946 2.134 1.731 9.025-8.866 22.95-12.422 34.824-7.857 6.028 2.317 11.27 6.364 14.888 11.728 3.708 5.494 5.593 12.018 6.418 18.553.723 5.725.643 11.483.32 17.234-.47-1.063-.938-2.128-1.406-3.19-2.094-4.753-4.27-9.627-7.085-13.993-.488-.756-1.827-.27-1.67.637.89 5.115 2.572 10.159 4.245 15.066.838 2.457 1.676 4.914 2.516 7.372.859 2.516 1.618 5.097 2.645 7.547.808 1.93 3.831 2.848 5.174.827 2.583-3.885 5.071-7.779 6.987-12.046a61.855 61.855 0 0 0 2.36-6.103c.41-1.257.802-2.525 1.088-3.817.308-1.386.791-2.912.142-4.256-.79-1.631-3.09-2.883-4.745-1.434-.814.714-1.304 1.362-1.586 2.419-.149.559-.271 1.125-.419 1.686-.262.992-.524 1.988-.79 2.98a41.013 41.013 0 0 1-.808 2.667 63.872 63.872 0 0 1-1.095 3.02c.474-12.644-.306-25.49-7.129-36.49h-.006Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 31.844 25.823-.002l65.246 52.905-25.823 31.846z" />
                  </clipPath>
                </defs>
              </svg>
              <svg className="lg:hidden" width="34" height="32" viewBox="0 0 34 32" fill="none">
                <g clipPath="url(#clip0_2220_2099)">
                  <path
                    d="M22.6365 11.5099C19.8157 6.96254 14.1006 4.35106 8.81235 5.50795C7.37864 5.82158 6.02252 6.34494 4.75062 7.08237C3.50315 7.80596 2.42165 8.80176 1.51986 9.92392C1.0984 10.4487 1.85211 11.015 2.31042 10.5649C5.65371 7.28045 10.8121 5.96323 15.2111 7.65432C17.4441 8.51285 19.3861 10.0121 20.7265 11.9991C22.0998 14.0343 22.7984 16.451 23.1038 18.8721C23.3717 20.9926 23.342 23.1258 23.2223 25.2562C23.0484 24.8624 22.875 24.4679 22.7017 24.0746C21.9258 22.3139 21.1195 20.5081 20.077 18.891C19.8962 18.6108 19.4001 18.7907 19.4586 19.1267C19.7877 21.0216 20.4111 22.8901 21.031 24.7079C21.3414 25.6181 21.6518 26.5284 21.9628 27.4391C22.2811 28.371 22.5624 29.3271 22.9428 30.2349C23.2422 30.9497 24.362 31.2898 24.8594 30.5412C25.8164 29.1019 26.7382 27.6596 27.4476 26.0787C27.7788 25.341 28.0706 24.5857 28.3217 23.8178C28.4741 23.352 28.6193 22.8826 28.7253 22.4038C28.8391 21.8905 29.0183 21.3252 28.7776 20.8272C28.485 20.223 27.6328 19.7593 27.0199 20.2961C26.7184 20.5603 26.5368 20.8005 26.4325 21.192C26.3773 21.3991 26.332 21.609 26.2774 21.8165C26.1802 22.1842 26.0831 22.553 25.9848 22.9209C25.8917 23.2685 25.8186 23.5089 25.6853 23.9085C25.5598 24.2849 25.4238 24.6579 25.2796 25.0272C25.4551 20.3434 25.1663 15.5849 22.6387 11.5097L22.6365 11.5099Z"
                    fill="#FF2020"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2220_2099">
                    <rect width="15.1885" height="31.1179" fill="white" transform="translate(0 11.7979) rotate(-50.9629)" />
                  </clipPath>
                </defs>
              </svg>
            </h2>
              <Link href="/topics" className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)]">
                सभी देखें →
              </Link>
            </div>
            
            <div className="flex flex-col gap-4">
              {latestStories.map((story) => (
                <PostCard
                  key={story.id}
                  id={story.id}
                  label={story.label}
                  title={story.title}
                  author={story.author}
                  timeAgo={story.timeAgo}
                  image={story.image}
                />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 pl-0 lg:pl-12">
            <div className="sticky top-24 space-y-12">
              
              {/* Ad Unit */}
              <div className="flex min-h-[300px] w-full flex-col items-center justify-center rounded-3xl border border-dashed border-[var(--border-color)] bg-[var(--card-bg)] p-8 text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Advertisement (google adsense)</span>
                <div className="mt-4 text-lg font-medium text-[var(--foreground)]">
                  Place your advertisement here
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="rounded-3xl bg-neutral-900 p-8 text-white dark:bg-white dark:text-black hidden">
                <h3 className="text-xl font-bold">Subscribe to our newsletter</h3>
                <p className="mt-2 text-sm text-neutral-400 dark:text-neutral-600">
                  Get the latest posts directly in your inbox.
                </p>
                <div className="mt-6 flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full rounded-full bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 dark:bg-black/5 dark:text-black dark:placeholder:text-black/40"
                  />
                  <button className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/90 dark:bg-black dark:text-white">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
