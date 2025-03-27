import CategoryContent from '@/components/CategoryContent'

interface CategoryPageProps {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <CategoryContent slug={params.slug} />
    </div>
  );
} 