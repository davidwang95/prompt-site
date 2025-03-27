'use client'

import { Prompt } from '@/types/prompt'
import PromptCard from '@/components/PromptCard'

interface PopularPromptsProps {
  prompts: Prompt[]
}

export default function PopularPrompts({ prompts }: PopularPromptsProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {prompts.map((prompt) => (
        <PromptCard key={prompt.id} prompt={prompt} />
      ))}
    </div>
  )
} 