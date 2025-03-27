'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import SearchBar from '@/components/SearchBar'
import PromptCard from '@/components/PromptCard'
import { mockPrompts } from '@/data/mockPrompts'
import { AssetClass, Prompt } from '@/types/prompt'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

function SearchPageContent() {
  const searchParams = useSearchParams()
  const [searchResults, setSearchResults] = useState<Prompt[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = (query: string, selectedAssetClass: AssetClass | 'all') => {
    setIsLoading(true)
    
    // Filter prompts based on search query and asset class
    const filteredPrompts = mockPrompts.filter(prompt => {
      const matchesQuery = query === '' || 
        prompt.title.toLowerCase().includes(query.toLowerCase()) ||
        prompt.description.toLowerCase().includes(query.toLowerCase()) ||
        prompt.prompt.toLowerCase().includes(query.toLowerCase())
      
      const matchesAssetClass = selectedAssetClass === 'all' || prompt.assetClass === selectedAssetClass
      
      return matchesQuery && matchesAssetClass
    })

    // Simulate API delay
    setTimeout(() => {
      setSearchResults(filteredPrompts)
      setIsLoading(false)
    }, 500)
  }

  // Initial search on page load if query params exist
  useEffect(() => {
    const query = searchParams.get('q') || ''
    const assetClass = (searchParams.get('category') || 'all') as AssetClass | 'all'
    handleSearch(query, assetClass)
  }, [searchParams])

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-500"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to home
        </Link>

        {/* Search Section */}
        <div className="mt-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Results Section */}
        <div className="mt-12">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="h-48 bg-gray-100 rounded-lg animate-pulse" />
              ))}
            </div>
          ) : searchResults.length > 0 ? (
            <>
              <h2 className="text-lg text-gray-600 mb-6">
                Found {searchResults.length} result{searchResults.length === 1 ? '' : 's'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((prompt) => (
                  <PromptCard key={prompt.id} prompt={prompt} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">
                No prompts found. Try adjusting your search terms.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-500"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to home
          </Link>
          <div className="mt-8">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <ArrowLeft className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500"
                placeholder="Loading..."
                disabled
              />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="h-48 bg-gray-100 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    }>
      <SearchPageContent />
    </Suspense>
  )
} 