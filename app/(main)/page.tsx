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
      <div className=" mx-auto px-4 py-8 sm:px-6 lg:px-[80px] lg:py-12">
        {/* Top Picks Section */}
        <section className="mb-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            {/* Top Picks Title with Starburst */}
            <div className="flex-shrink-0 w-[120px] sm:w-[150px] lg:w-[200px]">
              <div className="relative">
               <svg className="w-full h-auto hidden md:block" xmlns="http://www.w3.org/2000/svg" width="242" height="194" fill="none" viewBox="0 0 242 194"><g clipPath="url(#a)"><path fill="red" fillRule="evenodd" d="M185.379 94.587c.911.128 1.823.245 2.737.349 2.003.226 2.42.983 1.956 2.845-.814 3.251-1.461 6.548-2.107 9.841l-.009.046c-.044.227-.109.454-.175.687-.207.729-.429 1.511-.074 2.487.902-.636 1.791-1.257 2.668-1.871 1.955-1.368 3.856-2.698 5.736-4.056 2.401-1.732 3.598-2.602 4.56-2.393.969.21 1.7 1.511 3.182 4.124a525.332 525.332 0 0 0 3.573 6.169c.624 1.067 1.267 2.166 1.935 3.314.148-.416.278-.768.393-1.079.206-.557.363-.983.488-1.417.246-.866.493-1.731.741-2.596.862-3.009 1.723-6.018 2.506-9.048.358-1.396.999-1.934 2.454-1.803 3.502.314 7.017.536 10.528.759l.031.002c.156.01.313.027.473.044.687.074 1.409.152 2.159-.288a11.837 11.837 0 0 1-.247-.382 4.21 4.21 0 0 0-.432-.606l-1.389-1.524a657.596 657.596 0 0 0-6.501-7.068c-.941-1-1.016-1.665.392-2.249 1.22-.51 2.41-1.092 3.563-1.74.81-.451 1.656-.84 2.522-1.24 1.465-.674 2.989-1.376 4.499-2.45a1052.76 1052.76 0 0 1-3.43-1.331 329.866 329.866 0 0 0-6.458-2.466c-2.354-.857-3.521-1.274-3.9-2.068-.372-.777.011-1.917.775-4.186.752-2.227 1.501-4.453 2.329-6.913l.922-2.739c-1.411.68-2.777 1.333-4.109 1.968-3.41 1.628-6.593 3.147-9.735 4.75-1.455.744-2.42.79-3.221-.749-.232-.45-.529-.868-.826-1.285-.13-.183-.26-.366-.385-.551a5602.751 5602.751 0 0 0-4.271-6.363L197.545 59c-.643.395-.735.852-.824 1.288a6.3 6.3 0 0 1-.041.192 449.972 449.972 0 0 1-.759 3.244c-.603 2.554-1.206 5.108-1.716 7.68-.304 1.547-1.092 1.9-2.467 1.699a98.287 98.287 0 0 0-4.153-.526c-2.581-.277-5.161-.543-8.034-.839l-2.829-.291c.847 1.14 1.65 2.233 2.426 3.29 1.79 2.44 3.442 4.69 5.177 6.874 1.256 1.584 1.337 2.576-.443 3.867-2.172 1.571-4.248 3.276-6.322 4.979-.849.697-1.699 1.395-2.554 2.083.409.573.851.605 1.258.634.101.008.199.015.293.03 1.02.159 2.039.325 3.058.49.973.159 1.946.317 2.92.47-20.698 15.204-24.939 33.998-23.862 43.344a1 1 0 1 0 1.987-.229c-1.014-8.799 3.108-27.676 24.719-42.692Z" clipRule="evenodd"></path><path fill="red" fillRule="evenodd" d="M159.777 146.384a.996.996 0 0 0 .879-1.108c-1.249-10.843 5.3-36.99 42.767-52.356l-.759-1.85c-38.209 15.67-45.357 42.612-43.995 54.435a.99.99 0 0 0 .372.669 1.002 1.002 0 0 0 .736.21Z" clipRule="evenodd"></path><path fill="red" fillRule="evenodd" d="M202.663 100.07c-38.208 15.67-45.356 42.613-43.994 54.436l1.986-.229c-1.249-10.843 5.3-36.99 42.767-52.356l-.759-1.851Z" clipRule="evenodd"></path><path fill="#000" d="M221.199 193.652c-5.94 0-11.88-1.65-17.16-4.18l1.98-13.42c4.73 2.31 9.13 3.85 13.09 3.85 3.08 0 4.73-1.21 4.73-3.08 0-1.65-1.1-2.86-4.51-3.85l-2.09-.77c-7.48-2.75-12.32-8.14-12.32-16.17 0-9.57 7.37-16.61 19.36-16.61 5.06 0 10.67 1.32 15.73 3.3l-2.09 13.42c-4.51-2.09-9.46-3.52-12.65-3.52-2.64 0-3.74 1.32-3.74 2.75 0 1.32.88 2.53 3.63 3.52l2.42.88c9.24 3.3 13.86 8.47 13.86 16.61 0 10.34-7.92 17.27-20.24 17.27Zm-20.573-1.654h-21.67l-13.2-22v22h-18.92v-77.33l18.92-2.09v48.84l12.98-20.35h20.9l-16.72 24.42 17.71 26.51Zm-75.21 1.654c-16.39 0-28.6-11.66-28.6-27.06 0-15.51 12.43-27.17 28.49-27.17 4.84 0 9.35.99 13.42 2.64l-2.53 15.73c-3.52-1.65-6.6-2.53-9.57-2.53-7.04 0-11.77 4.95-11.77 11.22 0 6.16 4.62 11.22 11.99 11.22 3.08 0 6.49-.88 10.12-2.75l2.2 15.73c-4.29 1.76-8.69 2.97-13.75 2.97Zm-46.35-58.742c-6.16 0-11.11-4.84-11.11-10.67s4.95-10.67 11.11-10.67c6.16 0 11.11 4.84 11.11 10.67s-4.95 10.67-11.11 10.67ZM69.497 192v-49.94l18.92-1.98V192h-18.92Zm-38.263-77c17.49 0 30.14 11.66 30.14 27.72 0 16.17-12.65 27.94-30.14 27.94h-6.38V192H5.383v-77h25.85Zm-1.98 39.16c7.26 0 12.54-4.73 12.54-11.44 0-6.6-5.28-11.22-12.54-11.22h-4.4v22.66h4.4ZM151.996 24.64c13.64 0 24.64 11.77 24.64 26.95 0 15.07-11.11 26.84-24.64 26.84-5.28 0-9.79-1.87-13.31-5.06v27.281h-18.92v-73.7l16.83-1.76v6.82c3.63-4.73 8.91-7.37 15.4-7.37v-.001Zm-3.85 38.06c6.16 0 10.89-4.84 10.89-11.11 0-6.38-4.73-11.22-10.89-11.22-6.27 0-11 4.84-11 11.22 0 6.27 4.73 11.11 11 11.11ZM83.088 78.652c-16.06 0-28.49-11.77-28.49-27.06s12.43-27.17 28.49-27.17c16.17 0 28.6 11.88 28.6 27.17 0 15.29-12.43 27.06-28.6 27.06Zm0-15.95c6.27 0 11-4.84 11-11.11 0-6.38-4.73-11.22-11-11.22-6.16 0-11 4.84-11 11.22 0 6.27 4.84 11.11 11 11.11ZM57.742 18.15h-19.14V77h-19.47V18.15H.102L2.742 0h52.36l2.64 18.15Z"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h242v194H0z"></path></clipPath></defs></svg>
                {/* Red Starburst SVG */}
                <svg className="md:hidden block" width="178" height="46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M154.22 3.753c1.023.106 1.877.192 2.732.284.349.037.697.08 1.044.132.346.05.544-.038.62-.427.183-.92.413-1.83.623-2.745.028-.124.031-.258.217-.372.498.742.999 1.485 1.498 2.23.103.153.221.299.304.462.202.386.445.375.81.188 1.099-.56 2.217-1.08 3.481-1.688l-.817 2.425c-.388 1.153-.386 1.145.785 1.572.795.29 1.582.606 2.486.954-.604.43-1.217.622-1.765.928-.29.161-.589.31-.896.437-.354.147-.335.314-.098.565.669.713 1.325 1.438 1.983 2.16.06.064.101.144.171.248-.232.136-.454.075-.662.06-.885-.055-1.771-.111-2.654-.19-.366-.033-.527.102-.617.453-.254.98-.54 1.952-.817 2.926-.049.17-.117.335-.221.628-.504-.867-.952-1.62-1.385-2.384-.743-1.31-.736-1.308-1.947-.435-.684.495-1.38.974-2.113 1.49-.117-.324.017-.562.063-.798.163-.831.327-1.664.532-2.485.117-.468.012-.658-.492-.715-.972-.11-1.938-.284-2.906-.435-.121-.02-.262.013-.39-.167.74-.595 1.462-1.218 2.232-1.775.447-.324.427-.573.111-.972-.625-.787-1.207-1.607-1.911-2.554h-.001Z" fill="#FF2020"></path><path d="M150.181 20.683a.25.25 0 0 1-.497.057l.497-.057Zm-.497.057c-.342-2.972 1.454-9.745 11.06-13.685l.19.463c-9.42 3.863-11.067 10.438-10.753 13.165l-.497.057Z" fill="red"></path><path d="M150.181 22.69a.25.25 0 0 1-.497.057l.497-.057Zm-.497.058c-.342-2.972 1.454-9.746 11.06-13.685l.19.462c-9.42 3.864-11.067 10.438-10.753 13.165l-.497.058Z" fill="red"></path><path d="M149.932 24.985c-.328-2.85 1.394-9.524 10.907-13.425" stroke="red" stroke-width=".5"></path><path d="M23.496 12.46H15.84V36H8.052V12.46H.44L1.496 5.2H22.44l1.056 7.26Zm10.139 24.2c-6.424 0-11.396-4.708-11.396-10.824s4.972-10.868 11.396-10.868c6.468 0 11.44 4.752 11.44 10.868 0 6.116-4.972 10.824-11.44 10.824Zm0-6.38c2.508 0 4.4-1.936 4.4-4.444 0-2.552-1.892-4.488-4.4-4.488-2.464 0-4.4 1.936-4.4 4.488 0 2.508 1.936 4.444 4.4 4.444Zm27.563-15.224c5.455 0 9.855 4.708 9.855 10.78 0 6.028-4.444 10.736-9.855 10.736-2.112 0-3.916-.748-5.325-2.024V45.46h-7.567V15.98l6.732-.704v2.728c1.452-1.892 3.564-2.948 6.16-2.948Zm-1.54 15.224c2.463 0 4.355-1.936 4.355-4.444 0-2.552-1.892-4.488-4.356-4.488-2.507 0-4.4 1.936-4.4 4.488 0 2.508 1.893 4.444 4.4 4.444ZM93.286 5.2c6.996 0 12.056 4.664 12.056 11.088 0 6.468-5.06 11.176-12.056 11.176h-2.553V36h-7.787V5.2h10.34Zm-.793 15.664c2.904 0 5.016-1.892 5.016-4.576 0-2.64-2.112-4.488-5.016-4.488h-1.76v9.064h1.76Zm19.927-7.7c-2.464 0-4.444-1.936-4.444-4.268s1.98-4.268 4.444-4.268 4.444 1.936 4.444 4.268-1.98 4.268-4.444 4.268ZM108.593 36V16.024l7.568-.792V36h-7.568Zm22.367.66c-6.556 0-11.44-4.664-11.44-10.824 0-6.204 4.972-10.868 11.396-10.868 1.936 0 3.74.396 5.368 1.056l-1.012 6.292c-1.408-.66-2.64-1.012-3.828-1.012-2.816 0-4.708 1.98-4.708 4.488 0 2.464 1.848 4.488 4.796 4.488 1.232 0 2.596-.352 4.048-1.1l.88 6.292c-1.716.704-3.476 1.188-5.5 1.188Zm30.084-.66h-8.668l-5.28-8.8V36h-7.568V5.068l7.568-.836v19.536l5.192-8.14h8.36l-6.688 9.768L161.044 36Zm8.229.66c-2.376 0-4.752-.66-6.864-1.672l.792-5.368c1.892.924 3.652 1.54 5.236 1.54 1.232 0 1.892-.484 1.892-1.232 0-.66-.44-1.144-1.804-1.54l-.836-.308c-2.992-1.1-4.928-3.256-4.928-6.468 0-3.828 2.948-6.644 7.744-6.644 2.024 0 4.268.528 6.292 1.32l-.836 5.368c-1.804-.836-3.784-1.408-5.06-1.408-1.056 0-1.496.528-1.496 1.1 0 .528.352 1.012 1.452 1.408l.968.352c3.696 1.32 5.544 3.388 5.544 6.644 0 4.136-3.168 6.908-8.096 6.908Z" fill="#000"></path></svg>
              </div>
            </div>

            {/* Top Picks Articles */}
            <div className="flex flex-1 flex-wrap gap-3 sm:gap-4 lg:gap-6 lg:flex-nowrap">
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
                  <h3 className="line-clamp-2 text-sm font-semibold leading-[26px] text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)] sm:text-base">
                    {post.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="mb-16 grid gap-4 lg:grid-cols-2 lg:h-[600px]">
          {/* Div A: Left Column (Main Hero - 1 Card) */}
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

          {/* Div B: Right Column (Split Rows) */}
          <div className="flex flex-col gap-4 h-auto lg:h-full">
            {/* Row 1: Full Width Card */}
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

            {/* Row 2: Two Cards (50% / 50%) */}
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
        </section>


        <div className="w-full mb-16">
          <div className="flex min-h-[200px] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--border-color)] bg-[var(--surface)] p-8 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Advertisement</span>
            <div className="mt-2 text-lg font-medium text-[var(--foreground)]">
              Show advertisement here
            </div>
          </div>
        </div>
  

<div className=" w-full mb-4">
 <svg className="w-full" width="718" height="158" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M431.122 71.519c3.38-6.63 9.101-10.01 18.331-10.01v19.5c-10.79 0-17.03 4.68-17.03 16.25v25.74h-22.361v-59.02l21.06-2.21v9.75ZM373.917 108.7c5.98 0 13.26-2.34 21.45-8.84l5.98 15.599c-7.15 5.46-17.29 9.49-27.69 9.49-19.37 0-33.93-13.91-33.93-31.98 0-17.94 13.91-32.11 32.76-32.11 16.25 0 29.51 10.79 31.07 29.77l-41.47 13.26c2.73 2.99 6.63 4.811 11.83 4.811Zm-1.17-31.72c-7.67 0-13.13 5.59-14.17 13.52l24.57-8.06c-2.21-3.38-5.98-5.46-10.4-5.46Zm-61.845-45.37 22.23-2.47v93.861h-20.02v-6.63c-4.29 5.2-10.4 8.32-18.07 8.32-15.99 0-29.12-13.91-29.12-31.72 0-17.94 13.26-31.85 29.12-31.85 6.37 0 11.7 2.21 15.86 6.11V31.61Zm-11.18 74.49c7.28 0 13-5.72 13-13.13 0-7.54-5.72-13.26-13-13.26-7.41 0-13 5.72-13 13.26 0 7.41 5.59 13.13 13 13.13Zm-61.4-44.983c14.56 0 21.97 9.88 21.97 24.7v37.18h-22.36v-34.32c0-5.33-3.38-8.71-8.32-8.71-5.07 0-8.58 3.64-8.58 9.1v33.93h-22.36v-59.02l21.84-2.21v6.63c4.29-4.68 10.53-7.28 17.81-7.28Zm-72.071 2.863 22.36-2.34v61.361h-21.84v-5.33c-4.29 4.55-10.27 7.02-17.55 7.02-14.43 0-21.58-9.88-21.58-24.7V63.98l22.36-2.34v35.49c0 5.33 3.12 8.71 7.93 8.71 4.94 0 8.32-3.64 8.32-9.1V63.98ZM88.072 124.95c-18.98 0-33.67-13.91-33.67-31.98s14.69-32.11 33.67-32.11c19.11 0 33.8 14.04 33.8 32.11s-14.69 31.98-33.8 31.98Zm0-18.85c7.41 0 13-5.72 13-13.13 0-7.54-5.59-13.26-13-13.26-7.28 0-13 5.72-13 13.26 0 7.41 5.72 13.13 13 13.13ZM23.01 52.8v15.86h25.48v20.8H23.01v33.541H0v-91h51.74l2.99 20.8H23.01Z" fill="#000"></path><g filter="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M462.545 26.943c2 8.4.167 78.5-1 112.5.799 1.198 12.334.834 18.002.502 7.6-1.2 39.5-.5 54.5 0 21.2 2.4 41.167 1 48.5 0 2.8 2 16.5 2.5 23 2.5-1.667-.166-3.9-.5.5-.5 5.5 0 23-1.5 38.5-3 12.4-1.2 45.833-.5 61 0v-4.5c0-1.6-1.667-44-2.5-65-.4-12.8 1.5-43 2.5-56.5-7.601 1.462-15.374.873-22.517.33-5.074-.384-9.83-.745-13.983-.33-8 .8-28-.333-37-1-5.6-.8-14.667-1.333-18.5-1.5-7.517-1.503-18.989-.464-25.71.145-2.22.2-3.921.355-4.79.355-1.993 0-3.5-.486-4.797-.906-.981-.316-1.842-.595-2.703-.595-.458 0-1.333-.052-2.484-.12-3.881-.232-10.888-.65-15.516.12-6 1-71.502 2.999-75.002 2.999-.923 0-2.925-.14-5.344-.308-6.753-.47-16.76-1.165-15.656.308 1.2 1.6 1.167 10.333 1 14.5Z" fill="#DD614B"></path><path d="m534.103 139.448-.019-.002-.02-.001c-7.503-.25-19.233-.55-30.038-.638-10.759-.087-20.664.035-24.532.64-2.828.165-7.104.337-10.771.32-1.841-.008-3.517-.065-4.775-.191-.631-.064-1.141-.144-1.507-.238a2.424 2.424 0 0 1-.388-.13c.583-17.006 1.327-42.89 1.68-65.608.177-11.414.255-22.031.164-30.322-.046-4.145-.134-7.713-.273-10.51-.136-2.724-.322-4.756-.577-5.873.083-2.094.131-5.296.01-8.186-.061-1.46-.165-2.851-.331-3.984a12.151 12.151 0 0 0-.306-1.508 3.91 3.91 0 0 0-.352-.887 3.6 3.6 0 0 1 .583-.129c.844-.128 2.166-.165 3.768-.141 3.192.048 7.367.338 10.747.573l.139.01c2.346.163 4.313.3 5.24.3 1.761 0 19.024-.5 36.581-1.125 8.783-.313 17.644-.656 24.686-.984 7.02-.328 12.279-.641 13.817-.897 4.56-.759 11.504-.347 15.404-.114h.001l.064.004c1.111.065 1.981.117 2.449.117.767 0 1.549.248 2.55.57l.153-.475-.154.475c1.301.421 2.873.93 4.951.93.892 0 2.606-.155 4.789-.352l.046-.005-.045-.497.045.498c6.747-.612 18.137-1.639 25.567-.153l.038.007.038.002c3.832.167 12.878.7 18.451 1.495l.017.003.017.001c8.986.666 29.034 1.804 37.087 1 4.1-.41 8.809-.055 13.895.33h.01c6.932.528 14.53 1.106 21.999-.219-1.011 13.789-2.848 43.276-2.454 55.906v.004c.834 21.012 2.5 63.394 2.5 64.981v3.983c-15.386-.498-48.248-1.171-60.548.019-15.512 1.501-32.982 2.998-38.452 2.998-1.101 0-1.805.02-2.213.056-.18.016-.372.04-.508.096a.553.553 0 0 0-.32.326c-3.031-.05-6.805-.191-10.306-.477-2.286-.187-4.445-.435-6.201-.759a19.836 19.836 0 0 1-2.277-.538c-.637-.199-1.098-.407-1.384-.611l-.162-.116-.197.027c-7.298.995-27.223 2.393-48.376-.001Zm-72.209-127.04-.001.001h.001Z" stroke="#626262"></path></g><g filter="url(#b)"><path d="m686.748 63.814-3.038 5.978h-14.112v24.5c0 6.664 2.45 9.506 7.056 9.506 3.822 0 6.958-1.96 8.33-3.92l.588.294c-1.47 4.018-6.37 11.074-15.582 11.074-6.272 0-12.544-4.312-12.544-8.526 0-12.25.392-24.402.392-32.928h-7.35v-1.078l18.13-15.386h.784v10.486h17.346Z" fill="#fff"></path></g><g filter="url(#c)"><path d="M647.959 95.764c0 10.682-9.996 15.386-20.09 15.386-6.86 0-12.838-1.568-17.15-3.528V92.726h.784c2.45 5.978 8.624 17.052 15.386 17.052 4.802 0 9.506-2.842 9.506-9.8 0-4.018-2.94-5.782-7.154-6.958-2.744-.784-7.056-1.96-9.604-2.842-4.998-1.862-8.428-6.762-8.428-13.034 0-8.82 9.016-14.308 17.738-14.308 6.174 0 11.466 1.372 15.19 2.842l1.176 14.112-.784.196c-3.332-7.056-9.506-15.778-15.386-15.778-4.41 0-7.938 3.234-7.938 7.84 0 4.704 2.94 6.37 7.056 7.546 2.744.784 7.154 1.862 9.016 2.45 6.37 1.96 10.682 6.86 10.682 13.72Z" fill="#fff"></path></g><g filter="url(#d)"><path d="M609.017 69.504c0 3.92-2.744 6.37-4.998 6.37-5.782 0-5.488-3.822-7.252-3.822-2.842 0-5.88 2.646-7.252 6.37v27.832c.882 2.45 5.684 2.94 8.33 3.332v.98h-25.97v-.98c3.038-.294 5.586-1.862 5.586-3.92V74.894c0-.98-.098-1.47-.98-2.058-1.176-.686-3.038-1.764-4.606-2.45v-.588l16.954-7.056h.588l-.196 13.72h.196c1.372-3.136 5.096-13.622 13.524-13.622 3.43 0 6.076 2.842 6.076 6.664Z" fill="#fff"></path></g><g filter="url(#e)"><path d="M561.501 49.505c0 3.822-3.234 7.056-7.056 7.056-3.724 0-7.056-3.332-7.056-7.056 0-4.018 3.136-6.958 7.056-6.958s7.056 2.94 7.056 6.958Zm5.684 61.054h-24.99v-.98c3.038-.294 6.664-1.47 6.664-3.92V74.397c0-.98-.098-1.862-.98-2.45-1.176-.784-3.038-1.666-4.9-2.254v-.588l17.346-6.37h.588v43.218c0 2.45 3.822 3.43 6.272 3.626v.98Z" fill="#fff"></path></g><g filter="url(#f)"><path d="m544.827 57.444-.98.49c-5.292-6.272-11.172-12.446-15.68-14.7-1.764-.882-7.546-1.862-15.19-1.862-2.744 0-6.076.196-7.448.294-.392 1.568-.686 2.744-.882 7.546-.294 9.114-.196 23.226-.196 24.5.882 0 6.958 0 10.682-.784 9.408-1.96 11.368-8.428 12.348-14.896h1.176v34.3h-1.176c-1.078-4.116-4.018-10.878-6.762-13.328-2.45-2.156-5.096-3.234-8.918-3.528-3.92-.294-3.234-.196-7.35-.196 0 8.428 0 16.856.098 21.168.098 4.214.294 8.33 1.47 10.094 1.176 1.764 4.214 2.842 9.506 3.038v.98h-36.064v-.98c3.234-.49 6.664-1.666 8.428-3.724 1.274-1.568 1.666-6.37 1.764-10.584.098-3.626.196-12.348.196-20.286v-19.11c0-4.704-.098-10.388-1.666-12.054-1.96-2.058-4.312-2.352-7.84-2.842V40h57.82l6.664 17.444Z" fill="#fff"></path></g><defs><filter id="a" x="449.461" y="0" width="268.086" height="157.445" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="3"></feOffset><feGaussianBlur stdDeviation="6"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0.403532 0 0 0 0 0.386803 0 0 0 0 0.386803 0 0 0 0.7 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2718_5116"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_2718_5116" result="shape"></feBlend></filter><filter id="b" x="650.488" y="53.328" width="36.262" height="59.922" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2718_5116"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_2718_5116" result="shape"></feBlend></filter><filter id="c" x="610.719" y="62.836" width="37.238" height="50.313" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2718_5116"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_2718_5116" result="shape"></feBlend></filter><filter id="d" x="571.875" y="62.742" width="37.141" height="49.82" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2718_5116"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_2718_5116" result="shape"></feBlend></filter><filter id="e" x="542.195" y="42.547" width="24.988" height="70.016" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2718_5116"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_2718_5116" result="shape"></feBlend></filter><filter id="f" x="479.461" y="40" width="65.367" height="72.563" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2718_5116"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_2718_5116" result="shape"></feBlend></filter></defs></svg>
</div>

      {/* Just In Section */}
      <section className="mb-16 flex flex-col gap-8 lg:flex-row">
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
                    <div className="relative h-20 w-20 md:w-[150] md:h-[80px] flex-shrink-0 overflow-hidden  bg-[var(--surface)]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="line-clamp-2 text-sm md:text-[18px] font-semibold leading-tight text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
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
              <div className="flex min-h-[300px] w-full flex-col items-center justify-center rounded-3xl border border-dashed border-[var(--border-color)] bg-[var(--surface)] p-8 text-center">
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

        <div className="w-full mb-16 mt-14">
          <div className="flex min-h-[200px] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--border-color)] bg-[var(--surface)] p-8 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Advertisement</span>
            <div className="mt-2 text-lg font-medium text-[var(--foreground)]">
              Show advertisement here
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
