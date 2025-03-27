import { AssetClass, Prompt, TaskType, AIPlatform } from '@/types/prompt';

export const mockPrompts: Prompt[] = [
  {
    id: '1',
    title: 'Summarizing Today\'s Key Moves in Equities',
    description: 'Daily equity market wrap and analysis',
    prompt: '...',
    assetClass: AssetClass.Equities,
    taskType: TaskType.Analysis,
    aiPlatform: AIPlatform.ChatGPT,
    tags: [AssetClass.Equities],
    featured: true
  },
  {
    id: '201',
    title: 'Summarizing Today\'s Key Moves in Fixed Income',
    description: 'Daily bond market wrap and analysis',
    prompt: '...',
    assetClass: AssetClass.FixedIncome,
    taskType: TaskType.Analysis,
    aiPlatform: AIPlatform.Claude,
    tags: [AssetClass.FixedIncome],
    featured: true
  },
  {
    id: '301',
    title: 'Summarizing Today\'s Key Moves in Crypto',
    description: 'Daily crypto market wrap and analysis',
    prompt: '...',
    assetClass: AssetClass.Crypto,
    taskType: TaskType.Analysis,
    aiPlatform: AIPlatform.Claude,
    tags: [AssetClass.Crypto],
    featured: true
  },
  {
    id: '401',
    title: 'Positioning Ahead of the Upcoming Fed Announcement',
    description: 'Fed interest rate strategy and portfolio positioning',
    prompt: '...',
    assetClass: AssetClass.Macro,
    taskType: TaskType.Analysis,
    aiPlatform: AIPlatform.Claude,
    tags: [AssetClass.Macro],
    featured: true
  }
]; 