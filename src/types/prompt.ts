export enum AssetClass {
  Equities = 'Equities',
  Crypto = 'Crypto',
  FixedIncome = 'Fixed Income',
  Macro = 'Macro',
  VentureCapital = 'Venture Capital',
  LifeAndOther = 'Life & Other'
}

export enum TaskType {
  Analysis = 'Analysis',
  Research = 'Research',
  Writing = 'Writing',
  DataProcessing = 'Data Processing',
  DecisionMaking = 'Decision Making',
  RiskAssessment = 'Risk Assessment',
  PortfolioManagement = 'Portfolio Management',
  MarketResearch = 'Market Research',
  DueDiligence = 'Due Diligence',
  ReportGeneration = 'Report Generation',
  CareerPlanning = 'Career Planning',
  PersonalFinance = 'Personal Finance'
}

export enum AIPlatform {
  ChatGPT = 'ChatGPT',
  Claude = 'Claude',
  Gemini = 'Gemini',
  Perplexity = 'Perplexity',
  Anthropic = 'Anthropic'
}

export interface Prompt {
  id: string;
  title: string;
  description: string;
  prompt: string;
  assetClass: AssetClass;
  taskType: TaskType;
  aiPlatform: AIPlatform;
  tags: string[];
  featured: boolean;
}

export interface PromptCollection {
  id: string;
  name: string;
  description: string;
  prompts: string[]; // Array of prompt IDs
  createdAt: string;
  updatedAt: string;
} 