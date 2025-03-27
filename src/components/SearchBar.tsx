'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, Filter, X } from 'lucide-react'
import { AssetClass } from '@/types/prompt'
import { useSearchParams, useRouter } from 'next/navigation'

interface SearchBarProps {
  onSearch?: (query: string, selectedAssetClass: AssetClass | 'all') => void
  placeholder?: string
  className?: string
}

export default function SearchBar({ onSearch, placeholder = 'Search prompts...', className = '' }: SearchBarProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '')
  const [selectedAssetClass, setSelectedAssetClass] = useState<AssetClass | 'all'>(
    (searchParams.get('category') as AssetClass | 'all') || 'all'
  )
  const [isFocused, setIsFocused] = useState(false)

  // Store recent searches in localStorage
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('recentSearches')
      return saved ? JSON.parse(saved) : []
    }
    return []
  })

  // Add keyboard shortcut listener
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault()
        searchInputRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [])

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Add to recent searches
      const newRecentSearches = [
        searchQuery,
        ...recentSearches.filter(s => s !== searchQuery)
      ].slice(0, 5)
      setRecentSearches(newRecentSearches)
      localStorage.setItem('recentSearches', JSON.stringify(newRecentSearches))
    }

    if (onSearch) {
      onSearch(searchQuery, selectedAssetClass)
    } else {
      // If no onSearch prop is provided, navigate to search page with query params
      const params = new URLSearchParams()
      if (searchQuery) params.set('q', searchQuery)
      if (selectedAssetClass !== 'all') params.set('category', selectedAssetClass)
      router.push(`/search?${params.toString()}`)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const clearSearch = () => {
    setSearchQuery('')
  }

  return (
    <div className={`relative ${className}`}>
      <div className="flex flex-col sm:flex-row gap-2">
        {/* Main Search Bar */}
        <div className="flex-1 relative">
          <div className={`flex rounded-lg border ${isFocused ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-300'} bg-white overflow-hidden transition-all duration-200`}>
            <div className="flex items-center pl-4">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              ref={searchInputRef}
              type="text"
              placeholder={selectedAssetClass === 'all' 
                ? 'Search prompts...' 
                : `Search in ${selectedAssetClass}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="flex-1 px-4 py-3 focus:outline-none text-gray-600 placeholder-gray-400"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="px-3 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Recent Searches Dropdown */}
          {isFocused && recentSearches.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
              <div className="py-2">
                <div className="px-4 py-1 text-xs text-gray-500 uppercase">Recent Searches</div>
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSearchQuery(search)
                      handleSearch()
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    <Search className="h-4 w-4 mr-2 text-gray-400" />
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Category Filter */}
        <div className="relative">
          <div className="flex items-center">
            <Filter className="absolute left-3 h-4 w-4 text-gray-400 pointer-events-none" />
            <select
              value={selectedAssetClass}
              onChange={(e) => {
                const newAssetClass = e.target.value as AssetClass | 'all'
                setSelectedAssetClass(newAssetClass)
                if (onSearch) {
                  onSearch(searchQuery, newAssetClass)
                }
              }}
              className="pl-9 pr-8 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-600 appearance-none cursor-pointer min-w-[160px]"
            >
              <option value="all">All Categories</option>
              {Object.values(AssetClass).map((assetClass) => (
                <option key={assetClass} value={assetClass}>
                  {assetClass}
                </option>
              ))}
            </select>
            <div className="absolute right-3 pointer-events-none">
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Button */}
      <button
        onClick={handleSearch}
        className="sm:hidden w-full mt-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center"
      >
        <Search className="h-5 w-5 mr-2" />
        Search
      </button>
    </div>
  )
} 