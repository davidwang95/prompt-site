import { Metadata } from 'next'
import CategoryContent from '@/components/CategoryContent'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const capitalizedSlug = params.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${capitalizedSlug} - Investment AI Prompts`,
    description: `Investment AI Prompts for ${capitalizedSlug}`,
  }
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