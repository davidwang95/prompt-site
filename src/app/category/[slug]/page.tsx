import { Metadata } from 'next'
import CategoryContent from '@/components/CategoryContent'

export const metadata: Metadata = {
  title: 'Category',
  description: 'Investment AI Prompts by Category',
}

export default function CategoryPage({
  params,
}: {
  params: { slug: string }
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <CategoryContent slug={params.slug} />
    </div>
  );
} 