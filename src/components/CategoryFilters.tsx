'use client'

import { useState } from 'react'
import { TaskType, AIPlatform } from '@/types/prompt'
import { Filter, X } from 'lucide-react'
import FilterModal from './FilterModal'

interface CategoryFiltersProps {
  onFiltersChange: (filters: {
    taskTypes: TaskType[]
    aiPlatforms: AIPlatform[]
  }) => void
}

export default function CategoryFilters({ onFiltersChange }: CategoryFiltersProps) {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  const [activeFilters, setActiveFilters] = useState<{
    taskTypes: TaskType[]
    aiPlatforms: AIPlatform[]
  }>({
    taskTypes: [],
    aiPlatforms: [],
  })

  const handleApplyFilters = (filters: { taskTypes: TaskType[]; aiPlatforms: AIPlatform[] }) => {
    setActiveFilters(filters)
    onFiltersChange(filters)
  }

  const removeFilter = (type: 'taskTypes' | 'aiPlatforms', value: TaskType | AIPlatform) => {
    const newFilters = {
      ...activeFilters,
      [type]: activeFilters[type].filter(item => item !== value)
    }
    setActiveFilters(newFilters)
    onFiltersChange(newFilters)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => setIsFilterModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </button>
      </div>

      {/* Active Filters */}
      {(activeFilters.taskTypes.length > 0 || activeFilters.aiPlatforms.length > 0) && (
        <div className="flex flex-wrap gap-2">
          {activeFilters.taskTypes.map((type) => (
            <span
              key={type}
              className="inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              {type}
              <button
                onClick={() => removeFilter('taskTypes', type)}
                className="ml-1.5 text-blue-600 hover:text-blue-800"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
          {activeFilters.aiPlatforms.map((platform) => (
            <span
              key={platform}
              className="inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
            >
              {platform}
              <button
                onClick={() => removeFilter('aiPlatforms', platform)}
                className="ml-1.5 text-green-600 hover:text-green-800"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Filter Modal */}
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApply={handleApplyFilters}
        initialFilters={activeFilters}
      />
    </div>
  )
} 