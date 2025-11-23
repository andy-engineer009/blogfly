const heroImages: Record<string, string> = {
  space: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
  security: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&w=1600&q=80",
  lifestyle: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1600&q=80",
  product: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80",
  food: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1600&q=80",
};

const articleParagraphs = [
  "Stories stay with us when language is simple and vivid. We focus on clarity first, choosing words that even busy readers can scan in seconds while still enjoying a moment of calm.",
  "Designing for every age means respecting breathing room: wide margins, generous line spacing, and just enough contrast so the copy glows without shouting. The layout below keeps sections short so folks can skim, pause, and pick back up without strain.",
  "Imagery anchors each section. A bright hero photo sets the tone, while repeated accent colors guide the eyes toward the most important takeaways. Combine that with friendly microcopy and you have a page that feels like a conversation rather than a lecture.",
];

export default function PostPage({ params }: { params: { category?: string; id?: string } }) {
  const category = params.category ?? "stories";
  const rawId = params.id ?? "post";
  const title = rawId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const heroImage = heroImages[category.toLowerCase()] ?? heroImages.product;
  const readingTime = `${Math.max(5, title.length % 12)} min read`;

  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-10 text-[var(--foreground)] sm:px-6 lg:px-12">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4">
          <div className="text-xs uppercase tracking-[0.1em] text-[#0a8935]">{category}</div>
          <h1 className="text-[22px] font-[700] sm:leading-[50px] leading-[34px]  text-[var(--foreground)] sm:text-[34px]">
            {/* {title} */}
            Despite Chinese hacks, Trump’s FCC votes to scrap cybersecurity rules
          </h1>
          {/* <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.1em] text-[var(--muted)]">
            <span>Publish Feb 19, 2025</span>
            <span>·</span>
            <span>{readingTime}</span>
          </div> */}
        </div>

        <img
          src={heroImage}
          alt={title}
          className="h-[400px] w-full rounded-[10px] object-cover object-center sm:h-[400px]"
        />

        <article className="space-y-4 text-base leading-relaxed text-[var(--foreground)] sm:text-lg">
          {articleParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </div>
    </div>
  );
}

