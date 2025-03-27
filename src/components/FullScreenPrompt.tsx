'use client'

import { Prompt } from '@/types/prompt'
import { X, Copy, Check } from 'lucide-react'
import { useState } from 'react'

interface FullScreenPromptProps {
  prompt: Prompt
  isOpen: boolean
  onClose: () => void
}

export default function FullScreenPrompt({ prompt, isOpen, onClose }: FullScreenPromptProps) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose} />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold text-gray-900">{prompt.title}</h2>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isCopied ? (
                  <>
                    <Check className="h-4 w-4 mr-1.5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-1.5" />
                    Copy
                  </>
                )}
              </button>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[80vh] overflow-y-auto custom-scrollbar">
            <div className="prose prose-blue max-w-none">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900">Description</h3>
                <p className="mt-1 text-gray-600">{prompt.description}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900">Tags</h3>
                <div className="mt-1 flex flex-wrap gap-2">
                  {prompt.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Prompt</h3>
                <pre className="mt-2 whitespace-pre-wrap text-sm bg-gray-50 p-4 rounded-lg border">
                  {prompt.prompt}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 