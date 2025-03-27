import { Metadata } from 'next'
import CategoryContent from '@/components/CategoryContent'

export const metadata: Metadata = {
  title: 'Category',
  description: 'Investment AI Prompts by Category',
}

interface PageProps {
  params: { slug: string }
}

async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `${params.slug} - Investment AI Prompts`,
    description: `Investment AI Prompts for ${params.slug}`,
  }
}

export { generateMetadata }

export default async function CategoryPage({ params }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <CategoryContent slug={params.slug} />
    </div>
  );
} 