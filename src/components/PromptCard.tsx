'use client'

import { Prompt } from '@/types/prompt'
import { Copy, Check, Loader2, Maximize2 } from 'lucide-react'
import { useState, useEffect, useCallback, lazy, Suspense } from 'react'
import { debounce } from 'lodash'

// Lazy load components
const FullScreenPrompt = lazy(() => import('./FullScreenPrompt'))

interface PromptCardProps {
  prompt: Prompt
}

export default function PromptCard({ prompt }: PromptCardProps) {
  const [isCopied, setIsCopied] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)

  // Debounce tooltip to prevent unnecessary renders
  const debouncedTooltip = useCallback(
    debounce((show: boolean) => {
      setShowTooltip(show)
    }, 50),
    []
  )

  useEffect(() => {
    addToRecentlyViewed(prompt)

    // Add click outside handler
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (showTooltip) {
        const target = event.target as HTMLElement
        if (!target.closest('.prompt-card')) {
          setShowTooltip(false)
        }
      }
    }

    // Add event listeners with correct types
    document.addEventListener('click', handleClickOutside as EventListener)
    document.addEventListener('touchstart', handleClickOutside as EventListener)

    // Cleanup
    return () => {
      debouncedTooltip.cancel()
      document.removeEventListener('click', handleClickOutside as EventListener)
      document.removeEventListener('touchstart', handleClickOutside as EventListener)
    }
  }, [prompt.id, debouncedTooltip, showTooltip])

  const addToRecentlyViewed = useCallback((prompt: Prompt) => {
    const recentlyViewed = JSON.parse(localStorage.getItem('recently-viewed') || '[]')
    const updated = [
      { id: prompt.id, title: prompt.title, timestamp: Date.now() },
      ...recentlyViewed.filter((p: any) => p.id !== prompt.id)
    ].slice(0, 10)
    localStorage.setItem('recently-viewed', JSON.stringify(updated))
    sessionStorage.setItem('recently-viewed', JSON.stringify(updated))
  }, [])

  const handleCopyPrompt = async () => {
    try {
      setIsLoading(true)
      await navigator.clipboard.writeText(prompt.prompt)
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 1000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    } finally {
      setIsLoading(false)
    }
  }

  const truncateDescription = useCallback((text: string) => {
    if (text.length <= 100) return text
    return text.slice(0, 97) + '...'
  }, [])

  return (
    <div className="relative h-full">
      <div 
        className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 group h-full flex flex-col prompt-card"
        onMouseEnter={() => debouncedTooltip(true)}
        onMouseLeave={() => debouncedTooltip(false)}
        onTouchStart={() => setShowTooltip(true)}
      >
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{prompt.title}</h2>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600 line-clamp-2">
              {truncateDescription(prompt.description)}
            </p>
          </div>
          <div className="flex items-center">
            <button 
              onClick={() => setIsFullScreen(true)}
              className="text-gray-400 hover:text-gray-500"
              aria-label="View full screen"
            >
              <Maximize2 className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
        
        <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
          {prompt.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-3 sm:pt-4 flex items-center justify-end">
          <button 
            onClick={handleCopyPrompt}
            disabled={isLoading}
            className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 border border-transparent text-xs sm:text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 animate-spin" />
                Copying...
              </>
            ) : isCopied ? (
              <>
                <Check className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                Copy Prompt
              </>
            )}
          </button>
        </div>

        {/* Tooltip with lazy loading */}
        {showTooltip && (
          <div className="absolute left-0 right-0 -bottom-2 transform translate-y-full z-50 mt-2">
            <div className="bg-gray-900 text-white text-sm rounded-lg p-4 shadow-lg max-w-md mx-2">
              <div className="whitespace-pre-wrap max-h-[400px] overflow-y-auto custom-scrollbar">{prompt.prompt}</div>
            </div>
          </div>
        )}

        {/* Full Screen Modal with Suspense */}
        {isFullScreen && (
          <Suspense fallback={
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-white" />
            </div>
          }>
            <FullScreenPrompt
              prompt={prompt}
              isOpen={isFullScreen}
              onClose={() => setIsFullScreen(false)}
            />
          </Suspense>
        )}
      </div>
    </div>
  )
} 