'use client'

import { useState } from 'react'
import { Filter, SortAsc, SortDesc } from 'lucide-react'
import { AssetClass } from '@/types/prompt'

interface FilterBarProps {
  selectedCategory: AssetClass | 'all'
  onCategoryChange: (category: AssetClass | 'all') => void
  sortBy: 'newest' | 'popular'
  onSortChange: (sort: 'newest' | 'popular') => void
}

export default function FilterBar({
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
}: FilterBarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: AssetClass.Equities, label: 'Equities' },
    { id: AssetClass.FixedIncome, label: 'Fixed Income' },
    { id: AssetClass.Crypto, label: 'Crypto' },
  ]

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      {/* Category Filter */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Filter className="h-4 w-4 mr-2" />
          {categories.find(cat => cat.id === selectedCategory)?.label || 'All Categories'}
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute z-10 mt-1 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    onCategoryChange(category.id as AssetClass | 'all')
                    setIsOpen(false)
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    selectedCategory === category.id
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  role="menuitem"
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sort Options */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onSortChange('newest')}
          className={`inline-flex items-center px-3 py-2 border rounded-md text-sm ${
            sortBy === 'newest'
              ? 'border-blue-500 text-blue-600 bg-blue-50'
              : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
          }`}
        >
          <SortDesc className="h-4 w-4 mr-1" />
          Newest
        </button>
        <button
          onClick={() => onSortChange('popular')}
          className={`inline-flex items-center px-3 py-2 border rounded-md text-sm ${
            sortBy === 'popular'
              ? 'border-blue-500 text-blue-600 bg-blue-50'
              : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
          }`}
        >
          <SortAsc className="h-4 w-4 mr-1" />
          Most Popular
        </button>
      </div>
    </div>
  )
} 