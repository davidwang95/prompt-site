import { mockPrompts } from '@/data/mockPrompts'
import { AssetClass } from '@/types/prompt'
import CategoryCard from '@/components/CategoryCard'

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

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Investment AI Prompts
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A curated collection of AI prompts specifically designed for investment professionals.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Browse by Category</h2>
          <div className="mt-6 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            {categories.map((assetClass) => (
              <CategoryCard
                key={assetClass}
                assetClass={assetClass}
                promptCount={promptsByCategory[assetClass].length}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
