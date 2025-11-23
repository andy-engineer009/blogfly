import { PostCard } from "@/components/PostCard";

const heroStory = {
  category: "Gadgets",
  title: "The Reason Why Everyone Love Apple MacBook",
  author: "John Doe",
  date: "12 August 2020",
  image:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
};

const relatedStories = [
  {
    label: "Tech",
    title: "What Will Virtual Reality Be Like In The Next 50 Years?",
    author: "John Doe",
    date: "12 August 2020",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Robot",
    title: "The Mayans’ Lost Guide To Artificial Intelligence",
    author: "John Doe",
    date: "12 August 2020",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Laptop",
    title: "How Product Development Can Increase Your Profit!",
    author: "John Doe",
    date: "12 August 2020",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Laptop",
    title: "How Product Development Can Increase Your Profit!",
    author: "John Doe",
    date: "12 August 2020",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80",
  },
];

const latestStories = [
  {
    id: "space-starship",
    label: "Space",
    title: "Despite Chinese hacks, Trump’s FCC votes to scrap cybersecurity rules for phone and internet companies",
    author: "Sean O'Kane",
    timeAgo: "32 minutes ago",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "security-fcc",
    label: "Security",
    title: "Salesforce says some of its customers’ data was accessed after Gainsight breach",
    author: "Zack Whittaker",
    timeAgo: "2 hours ago",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "lifestyle-minimal",
    label: "Lifestyle",
    title: "Despite Chinese hacks, Trump’s FCC votes to scrap cybersecurity rules for phone and internet companies",
    author: "Priya Sharma",
    timeAgo: "3 hours ago",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "product-ai-tooling",
    label: "Product",
    title: "Salesforce says some of its customers’ data was accessed after Gainsight breach",
    author: "Marcus Lee",
    timeAgo: "4 hours ago",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "food-storytelling",
    label: "Food",
    title: "Why every chef is now a storyteller on the web",
    author: "Chloe Martinez",
    timeAgo: "5 hours ago",
    image:
      "https://images.unsplash.com/photo-1498575207490-34b60d3b04e4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "analytics-dashboards",
    label: "Analytics",
    title: "Salesforce says some of its customers’ data was accessed after Gainsight breachignore",
    author: "Nathan Cole",
    timeAgo: "6 hours ago",
    image:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "strategy-narrative",
    label: "Strategy",
    title: "How to build a narrative-driven go-to-market plan",
    author: "Anya Ruiz",
    timeAgo: "7 hours ago",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tech-customer-service",
    label: "Tech",
    title: "The status of generative AI in customer service this quarter",
    author: "Elliot Zhang",
    timeAgo: "8 hours ago",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "lifestyle-balanced",
    label: "Lifestyle",
    title: "Designing a balanced work-from-anywhere schedule",
    author: "Arielle T.",
    timeAgo: "9 hours ago",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "product-release-notes",
    label: "Product",
    title: "Building loyalty through thoughtful release notes",
    author: "Marcus Lee",
    timeAgo: "10 hours ago",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-4 sm:py-16 text-[var(--foreground)] sm:px-6 lg:px-16">
      <div className="mx-auto w-full">
        {/* 1 column on mobile, 50/50 split from lg upwards using flex */}
        <section className="flex flex-col gap-4 lg:gap-6 lg:flex-row lg:items-stretch">
          <article className="w-full overflow-hidden rounded-[1.5rem] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.1)] lg:w-2/3">
            <div
              className="relative min-h-[500px] overflow-hidden bg-cover bg-center lg:min-h-[600px]"
              style={{ backgroundImage: `url(${heroStory.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute top-6 left-6">
                <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                  {heroStory.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h1 className="mb-4 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                  {heroStory.title}
                </h1>
                <div className="flex flex-wrap items-center gap-3 text-sm text-white/90">
                  <span>{heroStory.author}</span>
                  <span className="text-white/50">·</span>
                  <span>{heroStory.date}</span>
                </div>
              </div>
            </div>
          </article>

          <aside className="w-full space-y-4 lg:w-1/3">
            {relatedStories.slice(0, 2).map((story, index) => (
              <article
                key={`${story.title}-${index}`}
                className="group relative overflow-hidden rounded-[1.5rem] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.1)] transition-transform hover:scale-[1.02]"
              >
                <div
                  className="relative min-h-[280px] overflow-hidden bg-cover bg-center sm:min-h-[300px]"
                  style={{ backgroundImage: `url(${story.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-white">
                      {story.label}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                    <h3 className="mb-3 text-lg font-bold leading-tight text-white sm:text-xl">
                      {story.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-white/90">
                      <span>{story.author}</span>
                      <span className="text-white/50">·</span>
                      <span>{story.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </aside>
          <aside className="w-full space-y-4 lg:w-1/3">
            {relatedStories.slice(0, 2).map((story, index) => (
              <article
                key={`${story.title}-${index}`}
                className="group relative overflow-hidden rounded-[1.5rem] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.1)] transition-transform hover:scale-[1.02]"
              >
                <div
                  className="relative min-h-[280px] overflow-hidden bg-cover bg-center sm:min-h-[300px]"
                  style={{ backgroundImage: `url(${story.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-white">
                      {story.label}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                    <h3 className="mb-3 text-lg font-bold leading-tight text-white sm:text-xl">
                      {story.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-white/90">
                      <span>{story.author}</span>
                      <span className="text-white/50">·</span>
                      <span>{story.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </aside>
        </section>

        <section className="mt-10">
          <div className="flex flex-wrap gap-6">
            <h2 className="flex items-center gap-[0.5rem] text-[32px] md:text-[80px] font-[800] text-left">
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
          </div>

          <div className="mt-5 md:mt-12 flex flex-col gap-6 lg:flex-row">
            <div className="w-full lg:w-[70%] space-y-6">
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

            <div className="hidden w-full lg:flex lg:w-[30%]">
              <div className="mx-auto flex w-full max-w-xs flex-col items-center  gap-4 rounded-[1.5rem] border border-[#e5e7eb] bg-white p-6 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <span className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
                  Sponsored
                </span>
                <p className="text-lg font-semibold text-[var(--foreground)]">
                  Ads
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

