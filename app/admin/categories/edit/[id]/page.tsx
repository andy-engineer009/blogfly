export default function EditCategoryPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Edit Category: {params.id}</h1>
    </div>
  );
}