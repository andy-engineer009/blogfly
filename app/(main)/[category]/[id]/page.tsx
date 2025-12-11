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
    <div className="min-h-screen bg-[var(--background)] px-4 py-10 text-[var(--foreground)] sm:px-6 lg:px-12">
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
    </div>
  );
}

