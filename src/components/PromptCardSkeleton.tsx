export default function PromptCardSkeleton() {
  return (
    <div className="relative h-full">
      <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 h-full flex flex-col">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            {/* Title skeleton */}
            <div className="h-7 w-3/4 bg-gray-200 rounded animate-pulse" />
            {/* Description skeleton */}
            <div className="mt-2 space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
          {/* Action buttons skeleton */}
          <div className="flex items-center space-x-2">
            <div className="h-5 w-5 bg-gray-200 rounded animate-pulse" />
            <div className="h-5 w-5 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>

        {/* Tags skeleton */}
        <div className="mt-4 flex flex-wrap gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-5 w-16 bg-gray-200 rounded-full animate-pulse"
            />
          ))}
        </div>

        {/* Copy button skeleton */}
        <div className="mt-auto pt-4">
          <div className="h-9 w-28 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  )
} 