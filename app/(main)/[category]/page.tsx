export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-xl font-semibold text-[var(--foreground)]">Category Page: {resolvedParams.category}</h1>
    </div>
  );
}

