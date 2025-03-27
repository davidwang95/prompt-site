export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
              <div className="mt-4 h-8 w-64 bg-gray-200 rounded animate-pulse" />
              <div className="mt-2 h-6 w-48 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Prompts Grid Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-3 w-full">
                  <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                  <div className="flex flex-wrap gap-2">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="h-5 w-16 bg-gray-200 rounded-full animate-pulse" />
                    ))}
                  </div>
                  <div className="h-9 w-32 bg-gray-200 rounded animate-pulse mt-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 