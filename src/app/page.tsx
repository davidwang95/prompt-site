import { AssetClass, Prompt } from '@/types/prompt'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import SearchBar from '@/components/SearchBar'
import CategoryCard from '@/components/CategoryCard'
import FeaturedPrompts from '@/components/FeaturedPrompts'
import { mockPrompts } from '@/data/mockPrompts'

export default function Home() {
  // Count prompts per category
  const promptCounts = Object.values(AssetClass).reduce((acc, assetClass) => {
    acc[assetClass] = mockPrompts.filter((p: Prompt) => p.assetClass === assetClass).length
    return acc
  }, {} as Record<AssetClass, number>)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              AI Prompts for Smart Money
            </h1>
            <p className="mt-2 sm:mt-3 max-w-md mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 md:mt-5 md:max-w-3xl">
              Steal my prompts and replace your analyst
            </p>
          </div>
          
          {/* Search Section */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <div className="w-full max-w-2xl px-4 sm:px-0">
              <SearchBar 
                placeholder="Search prompts..."
                className="w-full shadow-sm"
              />
              <p className="mt-2 text-sm text-gray-500 text-center">
                {Object.values(mockPrompts).length} prompts available
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Prompts Section */}
      <FeaturedPrompts prompts={mockPrompts} />

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Specialized Prompts for Every Asset Class</h2>
          <p className="mt-2 text-base sm:text-lg text-gray-600">Unlock AI-powered insights across your entire investment universe</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {Object.values(AssetClass).map((assetClass) => (
            <CategoryCard
              key={assetClass}
              assetClass={assetClass}
              promptCount={promptCounts[assetClass]}
            />
          ))}
        </div>
        </div>
      </main>
  )
}
