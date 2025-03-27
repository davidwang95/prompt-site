'use client'

import { useRef, Suspense } from 'react'
import { Search } from 'lucide-react'
import { AssetClass } from '@/types/prompt'
import { useSearchParams, useRouter } from 'next/navigation'

interface SearchBarProps {
  onSearch?: (query: string, selectedAssetClass: AssetClass | 'all') => void
  placeholder?: string
  className?: string
}

function SearchBarContent({ onSearch, placeholder = 'Search prompts...', className = '' }: SearchBarProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchInputRef = useRef<HTMLInputElement>(null)

  const handleSearch = (query: string) => {
    if (onSearch) {
      onSearch(query, 'all')
    } else {
      // If no onSearch prop is provided, navigate to search page with query params
      const params = new URLSearchParams()
      if (query) params.set('q', query)
      router.push(`/search?${params.toString()}`)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch((e.target as HTMLInputElement).value)
    }
  }

  return (
    <div className="relative w-full max-w-lg">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        ref={searchInputRef}
        type="text"
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder={placeholder}
        defaultValue={searchParams.get('q') || ''}
        onKeyPress={handleKeyPress}
      />
    </div>
  )
}

export default function SearchBar(props: SearchBarProps) {
  return (
    <Suspense fallback={
      <div className="relative w-full max-w-lg">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder={props.placeholder || 'Search prompts...'}
          disabled
        />
      </div>
    }>
      <SearchBarContent {...props} />
    </Suspense>
  )
} 