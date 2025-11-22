export default function CategoryPage({ params }: { params: { category: string } }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-xl font-semibold text-[var(--foreground)]">Category Page: {params.category}</h1>
    </div>
  );
}

