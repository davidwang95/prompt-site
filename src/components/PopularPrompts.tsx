'use client'

import { Prompt } from '@/types/prompt'
import Link from 'next/link'
import { Copy } from 'lucide-react'

interface PopularPromptsProps {
  prompts: Prompt[]
}

export default function PopularPrompts({ prompts }: PopularPromptsProps) {
  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {prompts.map((prompt) => (
        <div
          key={prompt.id}
          className="relative bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-500 transition-colors duration-200 flex flex-col min-h-[250px]"
        >
          <div className="flex-grow">
            <h3 className="text-lg font-medium text-gray-900 mb-2">{prompt.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{prompt.description}</p>
            <div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {prompt.assetClass}
              </span>
            </div>
          </div>
          <button
            onClick={() => handleCopy(prompt.prompt)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 mt-4"
          >
            <Copy className="h-4 w-4" />
            Copy Prompt
          </button>
          <Link
            href={`/prompt/${prompt.id}`}
            className="absolute inset-0"
            aria-label={`View details for ${prompt.title}`}
          />
        </div>
      ))}
    </div>
  )
} 