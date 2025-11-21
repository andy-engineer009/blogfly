 "use client";

import Image from "next/image";
import { useCallback, useMemo, type KeyboardEvent } from "react";
import { useRouter } from "next/navigation";

type PostCardProps = {
  id: string;
  label: string;
  title: string;
  author: string;
  timeAgo: string;
  image: string;
};

export function PostCard({ id, label, title, author, timeAgo, image }: PostCardProps) {
  const router = useRouter();

  const categorySlug = useMemo(() => {
    const slug = label
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    return slug || "posts";
  }, [label]);

  const handleNavigation = useCallback(() => {
    router.push(`/${categorySlug}/${id}`);
  }, [categorySlug, id, router]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleNavigation();
      }
    },
    [handleNavigation],
  );

  return (
    // border-[#e5e7eb] bg-white/80 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition hover:shadow-[0_30px_60px_rgba(15,23,42,0.15)]
    <article
      role="link"
      tabIndex={0}
      onClick={handleNavigation}
      onKeyDown={handleKeyDown}
      className="flex flex-col gap-4 rounded-[4px] bg-white/80 sm:flex-row sm:items-center sm:gap-6 cursor-pointer ring-offset-2 transition focus-visible:ring-2 focus-visible:ring-[#0f172a] focus-visible:ring-offset-2"
    >
      <div className="h-[97px] w-[173px] flex-shrink-0 overflow-hidden rounded-[4px]">
        <Image
          src={image}
          alt={title}
          width={173}
          height={97}
          sizes="(min-width: 640px) 12rem, 100vw"
          className="h-full w-full object-cover"
          priority={false}
        />
      </div>

      <div className="flex flex-1 flex-col  gap-3">
        <span className="inline-flex w-fit  py-1 text-[12px] font-semibold tracking-[0.1em] uppercase text-[#0a8935]">
          {label}
        </span>

        <h3 className="text-[18px] font-[600] leading-snug text-[var(--foreground)] sm:text-[20px]">
          {title}
        </h3>

        <p className="text-xs uppercase tracking-[0.1em] text-[var(--muted)]">
         By {author} · {timeAgo}
        </p>
      </div>
    </article>
  );
}

