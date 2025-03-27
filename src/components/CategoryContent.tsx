'use client'

import { useEffect, useState } from 'react'
import { mockPrompts } from '@/data/mockPrompts'
import { AssetClass, Prompt } from '@/types/prompt'
import PromptCard from '@/components/PromptCard'
import PromptCardSkeleton from '@/components/PromptCardSkeleton'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface CategoryContentProps {
  slug: string
}

export default function CategoryContent({ slug }: CategoryContentProps) {
  const [prompts, setPrompts] = useState<Prompt[]>([])
  const [category, setCategory] = useState<AssetClass | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    setIsLoading(true)

    // Convert slug to category name (e.g., "life-other" -> "Life & Other")
    let categoryName = slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    
    // Special case for Life & Other
    if (categoryName === 'Life Other') {
      categoryName = 'Life & Other'
    }

    // Find matching category from AssetClass enum
    const matchingCategory = Object.values(AssetClass).find(
      cat => cat.toLowerCase() === categoryName.toLowerCase()
    )

    if (matchingCategory) {
      setCategory(matchingCategory)
      // Filter prompts by category
      const filteredPrompts = mockPrompts.filter(
        prompt => prompt.assetClass === matchingCategory
      )
      
      // Simulate API delay
      setTimeout(() => {
        setPrompts(filteredPrompts)
        setIsLoading(false)
      }, 1000)
    } else {
      setIsLoading(false)
    }
  }, [slug])

  if (!category && !isLoading) {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Category not found</h1>
            <p className="mt-4 text-lg text-gray-600">
              The category you're looking for doesn't exist.
            </p>
            <Link 
              href="/"
              className="mt-8 inline-flex items-center text-blue-600 hover:text-blue-500"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <div>
              <Link 
                href="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-500"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to home
              </Link>
              <h1 className="mt-4 text-3xl font-bold text-gray-900">
                {isLoading ? (
                  <span className="block h-9 w-48 bg-gray-200 rounded animate-pulse" />
                ) : (
                  category
                )}
              </h1>
              <div className="mt-2 text-lg text-gray-600">
                {isLoading ? (
                  <span className="block h-6 w-32 bg-gray-200 rounded animate-pulse" />
                ) : (
                  `${prompts.length} AI Prompt${prompts.length === 1 ? '' : 's'} for ${category}`
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prompts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <PromptCardSkeleton key={index} />
            ))}
          </div>
        ) : prompts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No prompts available for this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  )
} 