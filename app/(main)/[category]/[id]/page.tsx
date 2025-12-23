import Image from "next/image";
import { getBlogPostById } from "@/lib/blogData";
import { notFound } from "next/navigation";
import { BackButton } from "@/components/BackButton";

export default async function PostPage({ params }: { params: Promise<{ category?: string; id?: string }> }) {
  const resolvedParams = await params;
  const postId = resolvedParams.id;
  
  if (!postId) {
    notFound();
  }

  const blogPost = getBlogPostById(postId);

  if (!blogPost) {
    notFound();
  }

  const readingTime = `${Math.max(5, blogPost.content.join(" ").length / 200)} मिनट पढ़ने का समय`;

  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-10 text-[var(--foreground)] sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Sidebar Advertisement - Sticky */}
        <aside className="hidden lg:col-span-2 lg:block">
          <div className="sticky top-24">
            <div className="flex min-h-[600px] w-full flex-col rounded-2xl border border-dashed border-[var(--border-color)] bg-[var(--surface)] p-6 text-center relative">
              {/* <span className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
                Advertisement
              </span>
              <div className="text-sm font-medium text-[var(--foreground)]">
                Show advertisement here
              </div>
              <div className="mt-4 text-xs text-[var(--muted)]">
                160x600
              </div> */}
            <Image src="/image/dubai-2.jpg" alt="xyz" fill className="object-contain w-full" />

            </div> 
          </div>
        </aside>

        {/* Main Content - Blog Post (Scrollable) */}
        <main className="lg:col-span-8">
          <div className="mx-auto max-w-4xl space-y-8">
            <BackButton />
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-[0.1em] text-[#0a8935]">{blogPost.category}</div>
              <h1 className="text-[22px] font-[700] sm:leading-[50px] leading-[34px] text-[var(--foreground)] sm:text-[34px]">
                {blogPost.title}
              </h1>
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.1em] text-[var(--muted)]">
                <span>लेखक: {blogPost.author}</span>
                {blogPost.date && (
                  <>
                    <span>·</span>
                    <span>{blogPost.date}</span>
                  </>
                )}
                {blogPost.timeAgo && (
                  <>
                    <span>·</span>
                    <span>{blogPost.timeAgo}</span>
                  </>
                )}
                <span>·</span>
                <span>{readingTime}</span>
              </div>
            </div>

            <div className="relative h-[400px] w-full overflow-hidden rounded-[10px]">
              <Image
                src={blogPost.image}
                alt={blogPost.title}
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            <article className="space-y-6 text-base leading-relaxed text-[var(--foreground)] sm:text-lg">
              {blogPost.content.map((paragraph, index) => (
                <p key={index} className="text-justify">
                  {paragraph}
                </p>
              ))}
            </article>
          </div>
        </main>

        {/* Right Sidebar Advertisement - Sticky */}
        <aside className="hidden lg:col-span-2 lg:block">
          <div className="sticky top-24">
            <div className="flex min-h-[600px] w-full flex-col rounded-2xl border border-dashed border-[var(--border-color)] bg-[var(--surface)] p-6 text-center relative">
              {/* <span className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
                Advertisement
              </span>
              <div className="text-sm font-medium text-[var(--foreground)]">
                Show advertisement here
              </div>
              <div className="mt-4 text-xs text-[var(--muted)]">
                160x600
              </div> */}
            <Image src="/image/dubai-3.jpg" alt="xyz" fill className="object-contain w-full" />

            </div>
          </div>
        </aside>

        <div className="block md:hidden w-full mb-0 mt-0">
          <div className="flex min-h-[100px] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--border-color)] bg-[var(--surface)] p-8 text-center relative">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Advertisement</span>
            {/* <div className="mt-2 text-lg font-medium text-[var(--foreground)]">
              Show advertisement here
            </div> */}
            <Image src="/image/dubai-6.jpg" alt="Advertisement" fill className="object-contain w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

