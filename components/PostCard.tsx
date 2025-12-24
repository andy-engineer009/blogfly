 "use client";

import Image from "next/image";
import { useCallback, useMemo, type KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/app/providers/ThemeProvider";

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
  const { mode } = useTheme();

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
    <article
      role="link"
      tabIndex={0}
      onClick={handleNavigation}
      onKeyDown={handleKeyDown}
      className="flex  gap-4 rounded-[4px] border-b border-[var(--border-color)] pb-4  flex-row sm:border-b-0 sm:gap-6 sm:pb-0 cursor-pointer"
    >
      <div className="h-[80px] w-[120px] flex-shrink-0 overflow-hidden rounded-[4px] md:h-[97px] md:w-[173px] md:block">
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

      <div className="flex flex-1 flex-col ">
        <span
          className={`inline-flex w-fit md:py-1 text-[10px] md:text-[12px] font-semibold tracking-[0.1em] uppercase ${
            mode === "light" ? "text-[#0a8935]" : "text-[#4ade80]"
          }`}
        >
          {label}
        </span>

        <h3 className="text-[18px] md:text-[16px] leading-[22px] md:leading-[26px] font-[600] sm:leading-snug text-[var(--foreground)] sm:text-[18px]">
          {title}
        </h3>

        <p className="text-[10px] md:text-xs uppercase tracking-[0.1em] text-[var(--muted)] mt-2">
          By {author} · {timeAgo}
        </p>
      </div>
    </article>
  );
}

