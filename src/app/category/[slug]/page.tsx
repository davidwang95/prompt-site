import { Metadata } from 'next'
import CategoryContent from '@/components/CategoryContent'

interface PageParams {
  slug: string
}

interface PageProps {
  params: Promise<PageParams>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const capitalizedSlug = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${capitalizedSlug} - Investment AI Prompts`,
    description: `Investment AI Prompts for ${capitalizedSlug}`,
  }
}

export default async function CategoryPage({
  params,
}: PageProps) {
  const { slug } = await params
  return (
    <div className="container mx-auto px-4 py-8">
      <CategoryContent slug={slug} />
    </div>
  );
} 