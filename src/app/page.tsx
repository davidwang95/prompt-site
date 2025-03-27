import { mockPrompts } from '@/data/mockPrompts'
import { AssetClass } from '@/types/prompt'
import CategoryCard from '@/components/CategoryCard'
import SearchBar from '@/components/SearchBar'
import PopularPrompts from '@/components/PopularPrompts'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  // Group prompts by asset class
  const promptsByCategory = mockPrompts.reduce((acc, prompt) => {
    const category = prompt.assetClass
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(prompt)
    return acc
  }, {} as Record<AssetClass, typeof mockPrompts>)

  // Get unique categories
  const categories = Object.keys(promptsByCategory) as AssetClass[]

  // Get 3 popular prompts for the landing section
  const popularPrompts = mockPrompts.slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  AI Prompts for Smart Money
                </h1>
                <p className="mt-3 text-xl text-gray-500 sm:mt-5 sm:text-2xl max-w-xl mx-auto">
                  Steal my AI prompts and replace your analyst
                </p>
                <div className="mt-8 flex justify-center">
                  <SearchBar />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Popular Prompts Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Popular Prompts</h2>
          <a href="/search" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
            View all prompts
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <PopularPrompts prompts={popularPrompts} />
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
        <div className="grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          {categories.map((assetClass) => (
            <CategoryCard
              key={assetClass}
              assetClass={assetClass}
              promptCount={promptsByCategory[assetClass].length}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to upgrade your analysis?
            </h2>
            <p className="mt-4 text-lg leading-6 text-blue-100">
              Start using AI prompts that actually work for finance
            </p>
            <div className="mt-8">
              <a
                href="/search"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
