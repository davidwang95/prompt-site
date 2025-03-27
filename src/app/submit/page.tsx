import { AssetClass } from '@/types/prompt'

export default function SubmitPromptPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Submit a Prompt</h1>
        <p className="mt-2 text-gray-600">
          Share your AI prompts with the investment community
        </p>
      </div>

      <form className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="e.g., Stock Market Sentiment Analysis"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Briefly describe what this prompt does and how to use it effectively"
          />
        </div>

        {/* Prompt Text */}
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
            Prompt Text
          </label>
          <textarea
            name="prompt"
            id="prompt"
            rows={5}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm font-mono"
            placeholder="Enter your prompt text here..."
          />
        </div>

        {/* Asset Classes */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Asset Classes
          </label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {Object.values(AssetClass).map((assetClass) => (
              <label key={assetClass} className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="assetClasses"
                  value={assetClass}
                  className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{assetClass}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit Prompt
          </button>
        </div>
      </form>
    </div>
  )
} 