'use client'

import { AssetClass } from '@/types/prompt'
import Link from 'next/link'
import { 
  LineChart, 
  Coins, 
  Banknote,
  Globe,
  Rocket,
  Users
} from 'lucide-react'

interface CategoryCardProps {
  assetClass: AssetClass
  promptCount: number
}

const categoryIcons = {
  [AssetClass.Equities]: LineChart,
  [AssetClass.Crypto]: Coins,
  [AssetClass.FixedIncome]: Banknote,
  [AssetClass.Macro]: Globe,
  [AssetClass.VentureCapital]: Rocket,
  [AssetClass.LifeAndOther]: Users
}

export default function CategoryCard({ assetClass, promptCount }: CategoryCardProps) {
  const Icon = categoryIcons[assetClass]
  
  return (
    <Link 
      href={`/category/${assetClass.toLowerCase().replace(/[\s&]+/g, '-')}`}
      className="group relative bg-white rounded-lg border border-gray-200 p-4 sm:p-6 hover:border-blue-500 transition-colors duration-200"
    >
      <div className="flex items-center space-x-3 sm:space-x-4">
        <div className="flex-shrink-0">
          <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 group-hover:text-blue-700" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">{assetClass}</h3>
          <p className="text-xs sm:text-sm text-gray-500">{promptCount} Prompts</p>
        </div>
      </div>
    </Link>
  )
} 