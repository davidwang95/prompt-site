'use client'

import { Prompt } from '@/types/prompt'
import PromptCard from './PromptCard'
import PromptCardSkeleton from './PromptCardSkeleton'
import { useState, useEffect } from 'react'

interface FeaturedPromptsProps {
  prompts: Prompt[]
}

export default function FeaturedPrompts({ prompts }: FeaturedPromptsProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [featuredPrompts, setFeaturedPrompts] = useState<Prompt[]>([])

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setFeaturedPrompts(prompts.filter(p => p.featured).slice(0, 3))
      setIsLoading(false)
    }, 1000)
  }, [prompts])

  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Most-Used Investment Prompts</h2>
          <p className="mt-2 text-base sm:text-lg text-gray-600">Battle-tested by top analysts and portfolio managers</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {isLoading ? (
            [...Array(3)].map((_, index) => (
              <PromptCardSkeleton key={index} />
            ))
          ) : (
            featuredPrompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))
          )}
        </div>
      </div>
    </section>
  )
} 