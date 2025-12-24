"use client";

import { PostCard } from "@/components/PostCard";
import Link from "next/link";
import Image from "next/image";
import { getBlogPostById, getCategorySlug, allBlogPosts } from "@/lib/blogData";
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

// Top Picks - 5 blog posts
const topPicks = allBlogPosts.slice(0, 4);

const latestStories = [
  {
    id: "cricket-india-win",
    label: "Cricket",
    title: "IPL 2024: Mumbai Indians Beat Chennai Super Kings",
    author: "Vikash Gupta",
    timeAgo: "32 minutes ago",
    image:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tech-ai-update",
    label: "Tech",
    title: "ChatGPT New Update: Now Works Better in Hindi",
    author: "Neelam Pandey",
    timeAgo: "2 hours ago",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "fitness-home-workout",
    label: "Fitness",
    title: "Best Exercises to Build Strong Muscles at Home",
    author: "Arjun Malhotra",
    timeAgo: "3 hours ago",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "news-education",
    label: "News",
    title: "Central Government Announces New Health Scheme",
    author: "Anita Das",
    timeAgo: "4 hours ago",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "health-nutrition",
    label: "Health",
    title: "Healthy Diet: Protein Rich Indian Foods",
    author: "Dr. Rita Jain",
    timeAgo: "5 hours ago",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cricket-world-cup",
    label: "Cricket",
    title: "T20 World Cup 2024: India Team Full Schedule Released",
    author: "Mohit Sharma",
    timeAgo: "8 hours ago",
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
      <div className=" mx-auto py-8 lg:py-12">
        {/* Top Picks Section */}
        <section className="mb-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            {/* Top Picks Title with Starburst */}
            <div className="flex-shrink-0 w-[120px] sm:w-[150px] lg:w-[240px]">
              <div className="relative">
               <svg className="w-full h-auto hidden md:block" xmlns="http://www.w3.org/2000/svg" width="242" height="194" fill="none" viewBox="0 0 242 194"><g clipPath="url(#a)"><path fill="red" fillRule="evenodd" d="M185.379 94.587c.911.128 1.823.245 2.737.349 2.003.226 2.42.983 1.956 2.845-.814 3.251-1.461 6.548-2.107 9.841l-.009.046c-.044.227-.109.454-.175.687-.207.729-.429 1.511-.074 2.487.902-.636 1.791-1.257 2.668-1.871 1.955-1.368 3.856-2.698 5.736-4.056 2.401-1.732 3.598-2.602 4.56-2.393.969.21 1.7 1.511 3.182 4.124a525.332 525.332 0 0 0 3.573 6.169c.624 1.067 1.267 2.166 1.935 3.314.148-.416.278-.768.393-1.079.206-.557.363-.983.488-1.417.246-.866.493-1.731.741-2.596.862-3.009 1.723-6.018 2.506-9.048.358-1.396.999-1.934 2.454-1.803 3.502.314 7.017.536 10.528.759l.031.002c.156.01.313.027.473.044.687.074 1.409.152 2.159-.288a11.837 11.837 0 0 1-.247-.382 4.21 4.21 0 0 0-.432-.606l-1.389-1.524a657.596 657.596 0 0 0-6.501-7.068c-.941-1-1.016-1.665.392-2.249 1.22-.51 2.41-1.092 3.563-1.74.81-.451 1.656-.84 2.522-1.24 1.465-.674 2.989-1.376 4.499-2.45a1052.76 1052.76 0 0 1-3.43-1.331 329.866 329.866 0 0 0-6.458-2.466c-2.354-.857-3.521-1.274-3.9-2.068-.372-.777.011-1.917.775-4.186.752-2.227 1.501-4.453 2.329-6.913l.922-2.739c-1.411.68-2.777 1.333-4.109 1.968-3.41 1.628-6.593 3.147-9.735 4.75-1.455.744-2.42.79-3.221-.749-.232-.45-.529-.868-.826-1.285-.13-.183-.26-.366-.385-.551a5602.751 5602.751 0 0 0-4.271-6.363L197.545 59c-.643.395-.735.852-.824 1.288a6.3 6.3 0 0 1-.041.192 449.972 449.972 0 0 1-.759 3.244c-.603 2.554-1.206 5.108-1.716 7.68-.304 1.547-1.092 1.9-2.467 1.699a98.287 98.287 0 0 0-4.153-.526c-2.581-.277-5.161-.543-8.034-.839l-2.829-.291c.847 1.14 1.65 2.233 2.426 3.29 1.79 2.44 3.442 4.69 5.177 6.874 1.256 1.584 1.337 2.576-.443 3.867-2.172 1.571-4.248 3.276-6.322 4.979-.849.697-1.699 1.395-2.554 2.083.409.573.851.605 1.258.634.101.008.199.015.293.03 1.02.159 2.039.325 3.058.49.973.159 1.946.317 2.92.47-20.698 15.204-24.939 33.998-23.862 43.344a1 1 0 1 0 1.987-.229c-1.014-8.799 3.108-27.676 24.719-42.692Z" clipRule="evenodd"></path><path fill="red" fillRule="evenodd" d="M159.777 146.384a.996.996 0 0 0 .879-1.108c-1.249-10.843 5.3-36.99 42.767-52.356l-.759-1.85c-38.209 15.67-45.357 42.612-43.995 54.435a.99.99 0 0 0 .372.669 1.002 1.002 0 0 0 .736.21Z" clipRule="evenodd"></path><path fill="red" fillRule="evenodd" d="M202.663 100.07c-38.208 15.67-45.356 42.613-43.994 54.436l1.986-.229c-1.249-10.843 5.3-36.99 42.767-52.356l-.759-1.851Z" clipRule="evenodd"></path><path fill="#000" d="M221.199 193.652c-5.94 0-11.88-1.65-17.16-4.18l1.98-13.42c4.73 2.31 9.13 3.85 13.09 3.85 3.08 0 4.73-1.21 4.73-3.08 0-1.65-1.1-2.86-4.51-3.85l-2.09-.77c-7.48-2.75-12.32-8.14-12.32-16.17 0-9.57 7.37-16.61 19.36-16.61 5.06 0 10.67 1.32 15.73 3.3l-2.09 13.42c-4.51-2.09-9.46-3.52-12.65-3.52-2.64 0-3.74 1.32-3.74 2.75 0 1.32.88 2.53 3.63 3.52l2.42.88c9.24 3.3 13.86 8.47 13.86 16.61 0 10.34-7.92 17.27-20.24 17.27Zm-20.573-1.654h-21.67l-13.2-22v22h-18.92v-77.33l18.92-2.09v48.84l12.98-20.35h20.9l-16.72 24.42 17.71 26.51Zm-75.21 1.654c-16.39 0-28.6-11.66-28.6-27.06 0-15.51 12.43-27.17 28.49-27.17 4.84 0 9.35.99 13.42 2.64l-2.53 15.73c-3.52-1.65-6.6-2.53-9.57-2.53-7.04 0-11.77 4.95-11.77 11.22 0 6.16 4.62 11.22 11.99 11.22 3.08 0 6.49-.88 10.12-2.75l2.2 15.73c-4.29 1.76-8.69 2.97-13.75 2.97Zm-46.35-58.742c-6.16 0-11.11-4.84-11.11-10.67s4.95-10.67 11.11-10.67c6.16 0 11.11 4.84 11.11 10.67s-4.95 10.67-11.11 10.67ZM69.497 192v-49.94l18.92-1.98V192h-18.92Zm-38.263-77c17.49 0 30.14 11.66 30.14 27.72 0 16.17-12.65 27.94-30.14 27.94h-6.38V192H5.383v-77h25.85Zm-1.98 39.16c7.26 0 12.54-4.73 12.54-11.44 0-6.6-5.28-11.22-12.54-11.22h-4.4v22.66h4.4ZM151.996 24.64c13.64 0 24.64 11.77 24.64 26.95 0 15.07-11.11 26.84-24.64 26.84-5.28 0-9.79-1.87-13.31-5.06v27.281h-18.92v-73.7l16.83-1.76v6.82c3.63-4.73 8.91-7.37 15.4-7.37v-.001Zm-3.85 38.06c6.16 0 10.89-4.84 10.89-11.11 0-6.38-4.73-11.22-10.89-11.22-6.27 0-11 4.84-11 11.22 0 6.27 4.73 11.11 11 11.11ZM83.088 78.652c-16.06 0-28.49-11.77-28.49-27.06s12.43-27.17 28.49-27.17c16.17 0 28.6 11.88 28.6 27.17 0 15.29-12.43 27.06-28.6 27.06Zm0-15.95c6.27 0 11-4.84 11-11.11 0-6.38-4.73-11.22-11-11.22-6.16 0-11 4.84-11 11.22 0 6.27 4.84 11.11 11 11.11ZM57.742 18.15h-19.14V77h-19.47V18.15H.102L2.742 0h52.36l2.64 18.15Z"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h242v194H0z"></path></clipPath></defs></svg>
                {/* Red Starburst SVG */}
                <svg className="md:hidden block" width="178" height="46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M154.22 3.753c1.023.106 1.877.192 2.732.284.349.037.697.08 1.044.132.346.05.544-.038.62-.427.183-.92.413-1.83.623-2.745.028-.124.031-.258.217-.372.498.742.999 1.485 1.498 2.23.103.153.221.299.304.462.202.386.445.375.81.188 1.099-.56 2.217-1.08 3.481-1.688l-.817 2.425c-.388 1.153-.386 1.145.785 1.572.795.29 1.582.606 2.486.954-.604.43-1.217.622-1.765.928-.29.161-.589.31-.896.437-.354.147-.335.314-.098.565.669.713 1.325 1.438 1.983 2.16.06.064.101.144.171.248-.232.136-.454.075-.662.06-.885-.055-1.771-.111-2.654-.19-.366-.033-.527.102-.617.453-.254.98-.54 1.952-.817 2.926-.049.17-.117.335-.221.628-.504-.867-.952-1.62-1.385-2.384-.743-1.31-.736-1.308-1.947-.435-.684.495-1.38.974-2.113 1.49-.117-.324.017-.562.063-.798.163-.831.327-1.664.532-2.485.117-.468.012-.658-.492-.715-.972-.11-1.938-.284-2.906-.435-.121-.02-.262.013-.39-.167.74-.595 1.462-1.218 2.232-1.775.447-.324.427-.573.111-.972-.625-.787-1.207-1.607-1.911-2.554h-.001Z" fill="#FF2020"></path><path d="M150.181 20.683a.25.25 0 0 1-.497.057l.497-.057Zm-.497.057c-.342-2.972 1.454-9.745 11.06-13.685l.19.463c-9.42 3.863-11.067 10.438-10.753 13.165l-.497.057Z" fill="red"></path><path d="M150.181 22.69a.25.25 0 0 1-.497.057l.497-.057Zm-.497.058c-.342-2.972 1.454-9.746 11.06-13.685l.19.462c-9.42 3.864-11.067 10.438-10.753 13.165l-.497.058Z" fill="red"></path><path d="M149.932 24.985c-.328-2.85 1.394-9.524 10.907-13.425" stroke="red" stroke-width=".5"></path><path d="M23.496 12.46H15.84V36H8.052V12.46H.44L1.496 5.2H22.44l1.056 7.26Zm10.139 24.2c-6.424 0-11.396-4.708-11.396-10.824s4.972-10.868 11.396-10.868c6.468 0 11.44 4.752 11.44 10.868 0 6.116-4.972 10.824-11.44 10.824Zm0-6.38c2.508 0 4.4-1.936 4.4-4.444 0-2.552-1.892-4.488-4.4-4.488-2.464 0-4.4 1.936-4.4 4.488 0 2.508 1.936 4.444 4.4 4.444Zm27.563-15.224c5.455 0 9.855 4.708 9.855 10.78 0 6.028-4.444 10.736-9.855 10.736-2.112 0-3.916-.748-5.325-2.024V45.46h-7.567V15.98l6.732-.704v2.728c1.452-1.892 3.564-2.948 6.16-2.948Zm-1.54 15.224c2.463 0 4.355-1.936 4.355-4.444 0-2.552-1.892-4.488-4.356-4.488-2.507 0-4.4 1.936-4.4 4.488 0 2.508 1.893 4.444 4.4 4.444ZM93.286 5.2c6.996 0 12.056 4.664 12.056 11.088 0 6.468-5.06 11.176-12.056 11.176h-2.553V36h-7.787V5.2h10.34Zm-.793 15.664c2.904 0 5.016-1.892 5.016-4.576 0-2.64-2.112-4.488-5.016-4.488h-1.76v9.064h1.76Zm19.927-7.7c-2.464 0-4.444-1.936-4.444-4.268s1.98-4.268 4.444-4.268 4.444 1.936 4.444 4.268-1.98 4.268-4.444 4.268ZM108.593 36V16.024l7.568-.792V36h-7.568Zm22.367.66c-6.556 0-11.44-4.664-11.44-10.824 0-6.204 4.972-10.868 11.396-10.868 1.936 0 3.74.396 5.368 1.056l-1.012 6.292c-1.408-.66-2.64-1.012-3.828-1.012-2.816 0-4.708 1.98-4.708 4.488 0 2.464 1.848 4.488 4.796 4.488 1.232 0 2.596-.352 4.048-1.1l.88 6.292c-1.716.704-3.476 1.188-5.5 1.188Zm30.084-.66h-8.668l-5.28-8.8V36h-7.568V5.068l7.568-.836v19.536l5.192-8.14h8.36l-6.688 9.768L161.044 36Zm8.229.66c-2.376 0-4.752-.66-6.864-1.672l.792-5.368c1.892.924 3.652 1.54 5.236 1.54 1.232 0 1.892-.484 1.892-1.232 0-.66-.44-1.144-1.804-1.54l-.836-.308c-2.992-1.1-4.928-3.256-4.928-6.468 0-3.828 2.948-6.644 7.744-6.644 2.024 0 4.268.528 6.292 1.32l-.836 5.368c-1.804-.836-3.784-1.408-5.06-1.408-1.056 0-1.496.528-1.496 1.1 0 .528.352 1.012 1.452 1.408l.968.352c3.696 1.32 5.544 3.388 5.544 6.644 0 4.136-3.168 6.908-8.096 6.908Z" fill="#000"></path></svg>
              </div>
            </div>

            {/* Top Picks Articles */}
            <div className="lg:ms-4 flex flex-1 flex-wrap gap-3 sm:gap-4 lg:gap-10 lg:flex-nowrap">
              {topPicks.map((post) => (
                <Link
                  key={post.id}
                  href={`/${getCategorySlug(post.label)}/${post.id}`}
                  className="group flex w-[calc(50%-0.375rem)] flex-shrink-0 flex-col sm:w-[calc(50%-0.5rem)] lg:w-auto lg:flex-1"
                >
                  <div className="relative mb-3 aspect-[4/3] w-full h-[120px] overflow-hidden bg-[var(--surface)]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="line-clamp-3 text-[18px] font-semibold leading-[26px] text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)] sm:text-base">
                    {post.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

           {/* The CapTable Section */}
           <section className="mb-16 pt-0">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Column: Featured Interview */}
            <div className="lg:col-span-8">
              <div className="relative h-[300px] w-full overflow-hidden bg-gray-100 sm:h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80"
                  alt="Saurabh Jain"
                  fill
                  className="object-cover object-top"
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 -rotate-2 rounded bg-black px-4 py-2 text-white shadow-lg">
                  <div className="text-lg font-bold leading-none">Saurabh</div>
                  <div className="text-lg font-bold leading-none mb-1">Jain</div>
                  <div className="text-[10px] font-medium leading-tight opacity-90">
                    Co-founder & CEO,<br />Stable Money
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 text-3xl font-bold text-red-600 drop-shadow-md">YS</div>
              </div>

              <div className="mt-8">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 bg-black dark:bg-white"></span>
                  <span className="text-sm font-bold uppercase tracking-wider text-[var(--foreground)]">Interview</span>
                </div>
                <h2 className="mb-4 text-3xl font-bold leading-tight text-[var(--foreground)] sm:text-4xl lg:text-[42px]">
                  Stable Money aims to triple fixed deposit assets to Rs 12,000 crore by 2026
                </h2>
                <p className="mb-4 text-lg leading-relaxed text-[var(--muted)]">
                  Saurabh Jain, the founder of fixed-income investment platform Stable Money, says FD, which was once considered a boring product, is now finding new life among young Indians seeking better returns with low risks—in a new avatar.
                </p>
                <div className="font-bold text-[var(--foreground)]">Sayan Sen</div>
              </div>
            </div>

            <div className="w-full block md:hidden mb-4 md:mb-16">
          <div className="flex min-h-[100px] md:min-h-[200px] overflow-hidden w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--border-color)] bg-[var(--surface)] p-8 text-center relative">
      
            <Image src="/image/dubai-1.jpg" alt="Advertisement" fill className="object-contain w-full h-full" />
          </div>
        </div>

            {/* Right Column: List & Newsletter */}
            <div className="lg:col-span-4">
              <div className="mb-8 pb-2">
              <h2 className="block text-[66px] leading-[59px] font-[800] text-[#000] mb-[0] border-b-[10px] border-[#5EC25F]">The <br/> CapTable</h2>
              </div>

              <div className="space-y-8">
                {/* List Items */}
                {[
                  {
                    title: "VCs are racing to fund India's first reusable rocket. Who's winning the game?",
                    author: "Parvathi Benu",
                    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=200&q=80"
                  },
                  {
                    title: "India's air cargo boom leaves most carriers grounded",
                    author: "Anuj Suvarna",
                    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=200&q=80"
                  },
                  {
                    title: "When the side bet becomes the main game: How Thyrocare went from...",
                    author: "Shivani Verma",
                    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=200&q=80"
                  }
                ].map((item, i) => (
                  <Link key={i} href="#" className="group flex gap-4">
                    <div className="flex-1">
                      <h3 className="mb-2 text-[18px] font-bold leading-snug text-[var(--foreground)] group-hover:text-green-600 group-hover:underline">
                        {item.title}
                      </h3>
                      <p className="text-xs font-medium text-[var(--muted)]">{item.author}</p>
                    </div>
                    <div className="relative h-[93px] w-[93px] flex-shrink-0 overflow-hidden bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                ))}

                {/* Newsletter Box */}
                <div className="mt-8 rounded-xl border border-[var(--border-color)] bg-[var(--card)] p-6 shadow-sm">
                  <div className="mb-6 flex items-start justify-between">
                    <h3 className=" text-lg font-bold leading-tight text-[var(--foreground)]">
                      Sign Up For YourStory Newsletter
                    </h3>
                    <div className="relative h-12 w-12">
                       {/* Simple SVG Illustration placeholder */}
                       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[var(--foreground)]" strokeWidth="1.5">
                         <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                       </svg>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      className="w-full rounded-md border border-[var(--border-color)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-green-600 focus:outline-none"
                    />
                    <button className="rounded-md bg-black px-4 py-2 text-xs font-bold uppercase text-white transition hover:bg-black/80 dark:bg-white dark:text-black">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Hero Section */}
        {/* <section className="mb-8 md:mb-16 grid gap-4 lg:grid-cols-2 lg:h-[600px]">
          <Link 
            href={`/${getCategorySlug(hero1.label)}/${hero1.id}`}
            className="group relative w-full h-[500px] lg:h-full overflow-hidden  cursor-pointer"
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

          <div className="w-full block md:hidden mb-4 md:mb-16">
          <div className="flex min-h-[100px] md:min-h-[200px] overflow-hidden w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--border-color)] bg-[var(--surface)] p-8 text-center relative">
      
            <Image src="/image/dubai-1.jpg" alt="Advertisement" fill className="object-contain w-full h-full" />
          </div>
        </div>

          <div className="flex flex-col gap-4 h-auto lg:h-full">
            <Link 
              href={`/${getCategorySlug(hero2.label)}/${hero2.id}`}
              className="group relative w-full h-[300px] lg:h-[60%] overflow-hidden  cursor-pointer"
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

            <div className="grid grid-cols-2 gap-4 h-[200px] lg:h-[40%]">
              {relatedStories.slice(0, 2).map((story) => (
                <Link
                  key={story.id}
                  href={`/${getCategorySlug(story.label)}/${story.id}`}
                  className="group relative h-full overflow-hidden  cursor-pointer"
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
        </section> */}


        <div className="w-full hidden md:block mb-4 md:mb-16">
          <div className="flex min-h-[100px] md:min-h-[200px] overflow-hidden w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--border-color)] bg-[var(--surface)] p-8 text-center relative">
            {/* <span className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Advertisement</span>
            <div className="mt-2 text-lg font-medium text-[var(--foreground)]">
              Show advertisement here
            </div> */}
            <Image src="/image/dubai-1.jpg" alt="Advertisement" fill className="object-contain w-full h-full" />
          </div>
        </div>
  

<div className="w-full mb-4">
 <svg className="w-full hidden md:block" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M431.122 71.519c3.38-6.63 9.101-10.01 18.331-10.01v19.5c-10.79 0-17.03 4.68-17.03 16.25v25.74h-22.361v-59.02l21.06-2.21v9.75ZM373.917 108.7c5.98 0 13.26-2.34 21.45-8.84l5.98 15.599c-7.15 5.46-17.29 9.49-27.69 9.49-19.37 0-33.93-13.91-33.93-31.98 0-17.94 13.91-32.11 32.76-32.11 16.25 0 29.51 10.79 31.07 29.77l-41.47 13.26c2.73 2.99 6.63 4.811 11.83 4.811Zm-1.17-31.72c-7.67 0-13.13 5.59-14.17 13.52l24.57-8.06c-2.21-3.38-5.98-5.46-10.4-5.46Zm-61.845-45.37 22.23-2.47v93.861h-20.02v-6.63c-4.29 5.2-10.4 8.32-18.07 8.32-15.99 0-29.12-13.91-29.12-31.72 0-17.94 13.26-31.85 29.12-31.85 6.37 0 11.7 2.21 15.86 6.11V31.61Zm-11.18 74.49c7.28 0 13-5.72 13-13.13 0-7.54-5.72-13.26-13-13.26-7.41 0-13 5.72-13 13.26 0 7.41 5.59 13.13 13 13.13Zm-61.4-44.983c14.56 0 21.97 9.88 21.97 24.7v37.18h-22.36v-34.32c0-5.33-3.38-8.71-8.32-8.71-5.07 0-8.58 3.64-8.58 9.1v33.93h-22.36v-59.02l21.84-2.21v6.63c4.29-4.68 10.53-7.28 17.81-7.28Zm-72.071 2.863 22.36-2.34v61.361h-21.84v-5.33c-4.29 4.55-10.27 7.02-17.55 7.02-14.43 0-21.58-9.88-21.58-24.7V63.98l22.36-2.34v35.49c0 5.33 3.12 8.71 7.93 8.71 4.94 0 8.32-3.64 8.32-9.1V63.98ZM88.072 124.95c-18.98 0-33.67-13.91-33.67-31.98s14.69-32.11 33.67-32.11c19.11 0 33.8 14.04 33.8 32.11s-14.69 31.98-33.8 31.98Zm0-18.85c7.41 0 13-5.72 13-13.13 0-7.54-5.59-13.26-13-13.26-7.28 0-13 5.72-13 13.26 0 7.41 5.72 13.13 13 13.13ZM23.01 52.8v15.86h25.48v20.8H23.01v33.541H0v-91h51.74l2.99 20.8H23.01Z" fill="#000"></path><g filter="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M462.545 26.943c2 8.4.167 78.5-1 112.5.799 1.198 12.334.834 18.002.502 7.6-1.2 39.5-.5 54.5 0 21.2 2.4 41.167 1 48.5 0 2.8 2 16.5 2.5 23 2.5-1.667-.166-3.9-.5.5-.5 5.5 0 23-1.5 38.5-3 12.4-1.2 45.833-.5 61 0v-4.5c0-1.6-1.667-44-2.5-65-.4-12.8 1.5-43 2.5-56.5-7.601 1.462-15.374.873-22.517.33-5.074-.384-9.83-.745-13.983-.33-8 .8-28-.333-37-1-5.6-.8-14.667-1.333-18.5-1.5-7.517-1.503-18.989-.464-25.71.145-2.22.2-3.921.355-4.79.355-1.993 0-3.5-.486-4.797-.906-.981-.316-1.842-.595-2.703-.595-.458 0-1.333-.052-2.484-.12-3.881-.232-10.888-.65-15.516.12-6 1-71.502 2.999-75.002 2.999-.923 0-2.925-.14-5.344-.308-6.753-.47-16.76-1.165-15.656.308 1.2 1.6 1.167 10.333 1 14.5Z" fill="#DD614B"></path><path d="m534.103 139.448-.019-.002-.02-.001c-7.503-.25-19.233-.55-30.038-.638-10.759-.087-20.664.035-24.532.64-2.828.165-7.104.337-10.771.32-1.841-.008-3.517-.065-4.775-.191-.631-.064-1.141-.144-1.507-.238a2.424 2.424 0 0 1-.388-.13c.583-17.006 1.327-42.89 1.68-65.608.177-11.414.255-22.031.164-30.322-.046-4.145-.134-7.713-.273-10.51-.136-2.724-.322-4.756-.577-5.873.083-2.094.131-5.296.01-8.186-.061-1.46-.165-2.851-.331-3.984a12.151 12.151 0 0 0-.306-1.508 3.91 3.91 0 0 0-.352-.887 3.6 3.6 0 0 1 .583-.129c.844-.128 2.166-.165 3.768-.141 3.192.048 7.367.338 10.747.573l.139.01c2.346.163 4.313.3 5.24.3 1.761 0 19.024-.5 36.581-1.125 8.783-.313 17.644-.656 24.686-.984 7.02-.328 12.279-.641 13.817-.897 4.56-.759 11.504-.347 15.404-.114h.001l.064.004c1.111.065 1.981.117 2.449.117.767 0 1.549.248 2.55.57l.153-.475-.154.475c1.301.421 2.873.93 4.951.93.892 0 2.606-.155 4.789-.352l.046-.005-.045-.497.045.498c6.747-.612 18.137-1.639 25.567-.153l.038.007.038.002c3.832.167 12.878.7 18.451 1.495l.017.003.017.001c8.986.666 29.034 1.804 37.087 1 4.1-.41 8.809-.055 13.895.33h.01c6.932.528 14.53 1.106 21.999-.219-1.011 13.789-2.848 43.276-2.454 55.906v.004c.834 21.012 2.5 63.394 2.5 64.981v3.983c-15.386-.498-48.248-1.171-60.548.019-15.512 1.501-32.982 2.998-38.452 2.998-1.101 0-1.805.02-2.213.056-.18.016-.372.04-.508.096a.553.553 0 0 0-.32.326c-3.031-.05-6.805-.191-10.306-.477-2.286-.187-4.445-.435-6.201-.759a19.836 19.836 0 0 1-2.277-.538c-.637-.199-1.098-.407-1.384-.611l-.162-.116-.197.027c-7.298.995-27.223 2.393-48.376-.001Zm-72.209-127.04-.001.001h.001Z" stroke="#626262"></path></g><g filter="url(#b)"><path d="m686.748 63.814-3.038 5.978h-14.112v24.5c0 6.664 2.45 9.506 7.056 9.506 3.822 0 6.958-1.96 8.33-3.92l.588.294c-1.47 4.018-6.37 11.074-15.582 11.074-6.272 0-12.544-4.312-12.544-8.526 0-12.25.392-24.402.392-32.928h-7.35v-1.078l18.13-15.386h.784v10.486h17.346Z" fill="#fff"></path></g><g filter="url(#c)"><path d="M647.959 95.764c0 10.682-9.996 15.386-20.09 15.386-6.86 0-12.838-1.568-17.15-3.528V92.726h.784c2.45 5.978 8.624 17.052 15.386 17.052 4.802 0 9.506-2.842 9.506-9.8 0-4.018-2.94-5.782-7.154-6.958-2.744-.784-7.056-1.96-9.604-2.842-4.998-1.862-8.428-6.762-8.428-13.034 0-8.82 9.016-14.308 17.738-14.308 6.174 0 11.466 1.372 15.19 2.842l1.176 14.112-.784.196c-3.332-7.056-9.506-15.778-15.386-15.778-4.41 0-7.938 3.234-7.938 7.84 0 4.704 2.94 6.37 7.056 7.546 2.744.784 7.154 1.862 9.016 2.45 6.37 1.96 10.682 6.86 10.682 13.72Z" fill="#fff"></path></g><g filter="url(#d)"><path d="M609.017 69.504c0 3.92-2.744 6.37-4.998 6.37-5.782 0-5.488-3.822-7.252-3.822-2.842 0-5.88 2.646-7.252 6.37v27.832c.882 2.45 5.684 2.94 8.33 3.332v.98h-25.97v-.98c3.038-.294 5.586-1.862 5.586-3.92V74.894c0-.98-.098-1.47-.98-2.058-1.176-.686-3.038-1.764-4.606-2.45v-.588l16.954-7.056h.588l-.196 13.72h.196c1.372-3.136 5.096-13.622 13.524-13.622 3.43 0 6.076 2.842 6.076 6.664Z" fill="#fff"></path></g><g filter="url(#e)"><path d="M561.501 49.505c0 3.822-3.234 7.056-7.056 7.056-3.724 0-7.056-3.332-7.056-7.056 0-4.018 3.136-6.958 7.056-6.958s7.056 2.94 7.056 6.958Zm5.684 61.054h-24.99v-.98c3.038-.294 6.664-1.47 6.664-3.92V74.397c0-.98-.098-1.862-.98-2.45-1.176-.784-3.038-1.666-4.9-2.254v-.588l17.346-6.37h.588v43.218c0 2.45 3.822 3.43 6.272 3.626v.98Z" fill="#fff"></path></g><g filter="url(#f)"><path d="m544.827 57.444-.98.49c-5.292-6.272-11.172-12.446-15.68-14.7-1.764-.882-7.546-1.862-15.19-1.862-2.744 0-6.076.196-7.448.294-.392 1.568-.686 2.744-.882 7.546-.294 9.114-.196 23.226-.196 24.5.882 0 6.958 0 10.682-.784 9.408-1.96 11.368-8.428 12.348-14.896h1.176v34.3h-1.176c-1.078-4.116-4.018-10.878-6.762-13.328-2.45-2.156-5.096-3.234-8.918-3.528-3.92-.294-3.234-.196-7.35-.196 0 8.428 0 16.856.098 21.168.098 4.214.294 8.33 1.47 10.094 1.176 1.764 4.214 2.842 9.506 3.038v.98h-36.064v-.98c3.234-.49 6.664-1.666 8.428-3.724 1.274-1.568 1.666-6.37 1.764-10.584.098-3.626.196-12.348.196-20.286v-19.11c0-4.704-.098-10.388-1.666-12.054-1.96-2.058-4.312-2.352-7.84-2.842V40h57.82l6.664 17.444Z" fill="#fff"></path></g><defs><filter id="a" x="449.461" y="0" width="268.086" height="157.445" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="3"></feOffset><feGaussianBlur stdDeviation="6"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0.403532 0 0 0 0 0.386803 0 0 0 0 0.386803 0 0 0 0.7 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2718_5116"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_2718_5116" result="shape"></feBlend></filter><filter id="b" x="650.488" y="53.328" width="36.262" height="59.922" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2718_5116"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_2718_5116" result="shape"></feBlend></filter><filter id="c" x="610.719" y="62.836" width="37.238" height="50.313" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2718_5116"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_2718_5116" result="shape"></feBlend></filter><filter id="d" x="571.875" y="62.742" width="37.141" height="49.82" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2718_5116"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_2718_5116" result="shape"></feBlend></filter><filter id="e" x="542.195" y="42.547" width="24.988" height="70.016" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2718_5116"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_2718_5116" result="shape"></feBlend></filter><filter id="f" x="479.461" y="40" width="65.367" height="72.563" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2718_5116"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_2718_5116" result="shape"></feBlend></filter></defs></svg>

 <svg className="block md:hidden" width="350" height="65" viewBox="0 0 706 136" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2435_13025)"><path d="M431.122 62.5186C434.502 55.8886 440.223 52.5086 449.453 52.5086V72.0086C438.663 72.0086 432.423 76.6886 432.423 88.2586V113.999H410.062V54.9786L431.122 52.7686V62.5186ZM373.917 99.7006C379.897 99.7006 387.177 97.3606 395.367 90.8606L401.347 106.46C394.197 111.92 384.057 115.95 373.657 115.95C354.287 115.95 339.727 102.04 339.727 83.9696C339.727 66.0296 353.637 51.8596 372.487 51.8596C388.737 51.8596 401.997 62.6496 403.557 81.6296L362.087 94.8896C364.817 97.8796 368.717 99.7006 373.917 99.7006ZM372.747 67.9806C365.077 67.9806 359.617 73.5706 358.577 81.5006L383.147 73.4406C380.937 70.0606 377.167 67.9806 372.747 67.9806ZM310.902 22.6106L333.132 20.1406V114.002H313.112V107.372C308.822 112.572 302.712 115.692 295.042 115.692C279.052 115.692 265.922 101.782 265.922 83.9716C265.922 66.0316 279.182 52.1216 295.042 52.1216C301.412 52.1216 306.742 54.3316 310.902 58.2316V22.6106ZM299.722 97.1006C307.002 97.1006 312.722 91.3806 312.722 83.9706C312.722 76.4306 307.002 70.7106 299.722 70.7106C292.312 70.7106 286.722 76.4306 286.722 83.9706C286.722 91.3806 292.312 97.1006 299.722 97.1006ZM238.322 52.1176C252.882 52.1176 260.292 61.9976 260.292 76.8176V113.998H237.932V79.6776C237.932 74.3476 234.552 70.9676 229.612 70.9676C224.542 70.9676 221.032 74.6076 221.032 80.0676V113.998H198.672V54.9776L220.512 52.7676V59.3976C224.802 54.7176 231.042 52.1176 238.322 52.1176ZM166.251 54.9806L188.611 52.6406V114.002H166.771V108.672C162.481 113.222 156.501 115.692 149.221 115.692C134.791 115.692 127.641 105.812 127.641 90.9916V54.9806L150.001 52.6406V88.1306C150.001 93.4606 153.121 96.8406 157.931 96.8406C162.871 96.8406 166.251 93.2006 166.251 87.7406V54.9806ZM88.072 115.95C69.092 115.95 54.402 102.04 54.402 83.9696C54.402 65.8996 69.092 51.8596 88.072 51.8596C107.182 51.8596 121.872 65.8996 121.872 83.9696C121.872 102.04 107.182 115.95 88.072 115.95ZM88.072 97.0996C95.482 97.0996 101.072 91.3796 101.072 83.9696C101.072 76.4296 95.482 70.7096 88.072 70.7096C80.792 70.7096 75.072 76.4296 75.072 83.9696C75.072 91.3796 80.792 97.0996 88.072 97.0996ZM23.01 43.8006V59.6606H48.49V80.4606H23.01V114.001H0V23.0006H51.74L54.73 43.8006H23.01Z" fill="black"></path><g filter="url(#filter0_d_2435_13025)"><path fill-rule="evenodd" clip-rule="evenodd" d="M462.545 17.9426C464.545 26.3426 462.712 96.4426 461.545 130.443C462.344 131.641 473.879 131.277 479.547 130.945C487.147 129.745 519.047 130.445 534.047 130.945C555.247 133.345 575.214 131.945 582.547 130.945C585.347 132.945 599.047 133.445 605.547 133.445C603.88 133.279 601.647 132.945 606.047 132.945C611.547 132.945 629.047 131.445 644.547 129.945C656.947 128.745 690.38 129.445 705.547 129.945V125.445C705.547 123.845 703.88 81.4446 703.047 60.4446C702.647 47.6446 704.547 17.4446 705.547 3.94457C697.946 5.40657 690.173 4.81757 683.03 4.27457C677.956 3.89057 673.2 3.52957 669.047 3.94457C661.047 4.74457 641.047 3.61157 632.047 2.94457C626.447 2.14457 617.38 1.61157 613.547 1.44457C606.03 -0.0584339 594.558 0.980566 587.837 1.58957C585.617 1.79057 583.916 1.94457 583.047 1.94457C581.054 1.94457 579.547 1.45857 578.25 1.03857C577.269 0.722566 576.408 0.443566 575.547 0.443566C575.089 0.443566 574.214 0.391566 573.063 0.323566C569.182 0.0915661 562.175 -0.326434 557.547 0.443566C551.547 1.44357 486.045 3.44257 482.545 3.44257C481.622 3.44257 479.62 3.30257 477.201 3.13457C470.448 2.66457 460.441 1.96957 461.545 3.44257C462.745 5.04257 462.712 13.7756 462.545 17.9426Z" fill="#DD614B"></path></g><g filter="url(#filter1_d_2435_13025)"><path d="M686.748 54.8141L683.71 60.7921H669.598V85.2921C669.598 91.9561 672.048 94.7981 676.654 94.7981C680.476 94.7981 683.612 92.8381 684.984 90.8781L685.572 91.1721C684.102 95.1901 679.202 102.246 669.99 102.246C663.718 102.246 657.446 97.9341 657.446 93.7201C657.446 81.4701 657.838 69.3181 657.838 60.7921H650.488V59.7141L668.618 44.3281H669.402V54.8141H686.748Z" fill="white"></path></g><g filter="url(#filter2_d_2435_13025)"><path d="M647.959 86.7639C647.959 97.4459 637.963 102.15 627.869 102.15C621.009 102.15 615.031 100.582 610.719 98.6219V83.7259H611.503C613.953 89.7039 620.127 100.778 626.889 100.778C631.691 100.778 636.395 97.9359 636.395 90.9779C636.395 86.9599 633.455 85.1959 629.241 84.0199C626.497 83.2359 622.185 82.0599 619.637 81.1779C614.639 79.3159 611.209 74.4159 611.209 68.1439C611.209 59.3239 620.225 53.8359 628.947 53.8359C635.121 53.8359 640.413 55.2079 644.137 56.6779L645.313 70.7899L644.529 70.9859C641.197 63.9299 635.023 55.2079 629.143 55.2079C624.733 55.2079 621.205 58.4419 621.205 63.0479C621.205 67.7519 624.145 69.4179 628.261 70.5939C631.005 71.3779 635.415 72.4559 637.277 73.0439C643.647 75.0039 647.959 79.9039 647.959 86.7639Z" fill="white"></path></g><g filter="url(#filter3_d_2435_13025)"><path d="M609.017 60.5042C609.017 64.4242 606.273 66.8742 604.019 66.8742C598.237 66.8742 598.531 63.0522 596.767 63.0522C593.925 63.0522 590.887 65.6982 589.515 69.4222V97.2542C590.397 99.7042 595.199 100.194 597.845 100.586V101.566H571.875V100.586C574.913 100.292 577.461 98.7242 577.461 96.6662V65.8942C577.461 64.9142 577.363 64.4242 576.481 63.8362C575.305 63.1502 573.443 62.0722 571.875 61.3862V60.7982L588.829 53.7422H589.417L589.221 67.4622H589.417C590.789 64.3262 594.513 53.8402 602.941 53.8402C606.371 53.8402 609.017 56.6822 609.017 60.5042Z" fill="white"></path></g><g filter="url(#filter4_d_2435_13025)"><path d="M561.501 40.5049C561.501 44.3269 558.267 47.5609 554.445 47.5609C550.721 47.5609 547.389 44.2289 547.389 40.5049C547.389 36.4869 550.525 33.5469 554.445 33.5469C558.365 33.5469 561.501 36.4869 561.501 40.5049ZM567.185 101.559H542.195V100.579C545.233 100.285 548.859 99.1089 548.859 96.6589V65.3969C548.859 64.4169 548.761 63.5349 547.879 62.9469C546.703 62.1629 544.841 61.2809 542.979 60.6929V60.1049L560.325 53.7349H560.913V96.9529C560.913 99.4029 564.735 100.383 567.185 100.579V101.559Z" fill="white"></path></g><g filter="url(#filter5_d_2435_13025)"><path d="M544.827 48.444L543.847 48.934C538.555 42.662 532.675 36.488 528.167 34.234C526.403 33.352 520.621 32.372 512.977 32.372C510.233 32.372 506.901 32.568 505.529 32.666C505.137 34.234 504.843 35.41 504.647 40.212C504.353 49.326 504.451 63.438 504.451 64.712C505.333 64.712 511.409 64.712 515.133 63.928C524.541 61.968 526.501 55.5 527.481 49.032H528.657V83.332H527.481C526.403 79.216 523.463 72.454 520.719 70.004C518.269 67.848 515.623 66.77 511.801 66.476C507.881 66.182 508.567 66.28 504.451 66.28C504.451 74.708 504.451 83.136 504.549 87.448C504.647 91.662 504.843 95.778 506.019 97.542C507.195 99.306 510.233 100.384 515.525 100.58V101.56H479.461V100.58C482.695 100.09 486.125 98.914 487.889 96.856C489.163 95.288 489.555 90.486 489.653 86.272C489.751 82.646 489.849 73.924 489.849 65.986V46.876C489.849 42.172 489.751 36.488 488.183 34.822C486.223 32.764 483.871 32.47 480.343 31.98V31H538.163L544.827 48.444Z" fill="white"></path></g></g><defs><filter id="filter0_d_2435_13025" x="461.461" y="0" width="244.086" height="135.445" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2435_13025"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2435_13025" result="shape"></feBlend></filter><filter id="filter1_d_2435_13025" x="650.488" y="44.3281" width="36.2617" height="59.9219" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2435_13025"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2435_13025" result="shape"></feBlend></filter><filter id="filter2_d_2435_13025" x="610.719" y="53.8359" width="37.2383" height="50.3125" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2435_13025"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2435_13025" result="shape"></feBlend></filter><filter id="filter3_d_2435_13025" x="571.875" y="53.7422" width="37.1406" height="49.8203" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2435_13025"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2435_13025" result="shape"></feBlend></filter><filter id="filter4_d_2435_13025" x="542.195" y="33.5469" width="24.9883" height="70.0156" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2435_13025"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2435_13025" result="shape"></feBlend></filter><filter id="filter5_d_2435_13025" x="479.461" y="31" width="65.3672" height="72.5625" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2435_13025"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2435_13025" result="shape"></feBlend></filter><clipPath id="clip0_2435_13025"><rect width="706" height="136" fill="white"></rect></clipPath></defs></svg>
</div>

      {/* Just In Section */}
      <section className="mb-3 md:mb-16 flex flex-col gap-8 lg:flex-row">
          {/* Main Content Area - Left Side */}
          <div className="w-full lg:w-2/4">
            {allBlogPosts[4] && (
              <Link
                href={`/${getCategorySlug(allBlogPosts[4].label)}/${allBlogPosts[4].id}`}
                className="group block overflow-hidden  bg-white shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="relative h-[300px] w-full overflow-hidden sm:h-[400px]">
                  <Image
                    src={allBlogPosts[4].image}
                    alt={allBlogPosts[4].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                    ■ {allBlogPosts[4].category}
                  </span>
                  <h2 className="mb-3 text-xl font-bold leading-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)] sm:text-2xl">
                    {allBlogPosts[4].title}
                  </h2>
                  <p className="text-sm text-[var(--muted)]">{allBlogPosts[4].author}</p>
                </div>
              </Link>
            )}
          </div>

          {/* Just In Sidebar - Right Side */}
          <div className="w-full lg:w-1/2">
            <div className="sticky top-24">
              {/* <h2 className="mb-6 text-2xl font-bold text-[var(--foreground)]">Just In</h2> */}
              <div className="space-y-6">
                {allBlogPosts.slice(4, 9).map((post) => (
                  <Link
                    key={post.id}
                    href={`/${getCategorySlug(post.label)}/${post.id}`}
                    className="group flex gap-4 transition-opacity hover:opacity-80"
                  >
                    <div className="relative h-[93px] w-[93px] md:w-[150] md:h-[80px] flex-shrink-0 overflow-hidden  bg-[var(--surface)]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="line-clamp-2 text-[18px] md:text-[18px] font-semibold leading-tight text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-[var(--muted)]">{post.author}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      
        <div className="block md:hidden w-full mb-4 md:mb-16">
          <div className="flex min-h-[100px] md:min-h-[200px] overflow-hidden w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--border-color)] bg-[var(--surface)] p-8 text-center relative">
            {/* <span className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Advertisement</span>
            <div className="mt-2 text-lg font-medium text-[var(--foreground)]">
              Show advertisement here
            </div> */}
            <Image src="/image/dubai-1.jpg" alt="Advertisement" fill className="object-contain w-full h-full" />
          </div>
        </div>

     
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
                View All 
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
              <div className="flex min-h-[300px] w-full flex-col items-center justify-center rounded-3xl border border-dashed border-[var(--border-color)] bg-[var(--surface)] p-8 text-center relative">
                {/* <span className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Advertisement (google adsense)</span>
                <div className="mt-4 text-lg font-medium text-[var(--foreground)]">
                </div> */}
                 <Image src="/image/dubai.jpg" alt="xyz" fill className="object-contain w-full h-full" />
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

        <div className="hidden md:block w-full mb-16 mt-14">
          <div className="flex min-h-[200px] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--border-color)] bg-[var(--surface)] p-8 text-center relative">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Advertisement</span>
            {/* <div className="mt-2 text-lg font-medium text-[var(--foreground)]">
              Show advertisement here
            </div> */}
            <Image src="/image/dubai-6.jpg" alt="Advertisement" fill className="object-contain w-full h-full" />
          </div>
        </div>
      </div>
    </main>
  );
}
