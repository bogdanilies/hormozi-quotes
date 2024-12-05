export type QuoteCategory = 'business' | 'success' | 'mindset' | 'growth' | 'wealth' | 'marketing';

export interface Quote {
  text: string;
  categories: QuoteCategory[];
}

export const quotes: Quote[] = [
  // Previous quotes remain the same...
  // Adding 50 new quotes

  // Business Strategy Quotes
  { text: "The best way to predict the future is to create it.", categories: ['business', 'mindset'] },
  { text: "Don't chase revenue, chase profit.", categories: ['business', 'wealth'] },
  { text: "The biggest opportunities are in the problems everyone else is avoiding.", categories: ['business', 'success'] },
  { text: "Your business should work harder than you do.", categories: ['business', 'mindset'] },
  { text: "Scale what works, cut what doesn't.", categories: ['business', 'growth'] },
  
  // Marketing Excellence
  { text: "The best marketing makes the sale before the conversation begins.", categories: ['marketing', 'business'] },
  { text: "If you can't explain your value in one sentence, you don't understand it well enough.", categories: ['marketing', 'business'] },
  { text: "Marketing is not about being everywhere, it's about being where it matters.", categories: ['marketing', 'business'] },
  { text: "The best offers solve present pain with future pleasure.", categories: ['marketing', 'business'] },
  { text: "Your marketing should make your sales easier, not harder.", categories: ['marketing', 'business'] },

  // Wealth Building
  { text: "Wealth is built by owning assets that appreciate while you sleep.", categories: ['wealth', 'business'] },
  { text: "The fastest way to wealth is to solve expensive problems cheaply.", categories: ['wealth', 'business'] },
  { text: "Money follows value like a shadow follows form.", categories: ['wealth', 'mindset'] },
  { text: "Build systems that make money while you build more systems.", categories: ['wealth', 'business'] },
  { text: "The rich buy assets, the poor buy liabilities, and the middle class buy liabilities thinking they are assets.", categories: ['wealth', 'mindset'] },

  // Growth Mindset
  { text: "The ceiling of your business is your personal growth.", categories: ['growth', 'mindset'] },
  { text: "Learn from everyone, follow no one.", categories: ['growth', 'mindset'] },
  { text: "The faster you fail, the faster you learn.", categories: ['growth', 'success'] },
  { text: "Your growth is proportional to your discomfort.", categories: ['growth', 'mindset'] },
  { text: "The best investment is in reducing your ignorance.", categories: ['growth', 'wealth'] },

  // Success Principles
  { text: "Success is not about intensity, it's about consistency.", categories: ['success', 'mindset'] },
  { text: "The gap between knowledge and action is the cost of your dreams.", categories: ['success', 'mindset'] },
  { text: "Your success is determined by the problems you're willing to solve.", categories: ['success', 'business'] },
  { text: "The bigger your vision, the smaller your competition.", categories: ['success', 'mindset'] },
  { text: "Success leaves breadcrumbs, follow them.", categories: ['success', 'growth'] },

  // Mindset Mastery
  { text: "Your beliefs set the boundaries of your success.", categories: ['mindset', 'success'] },
  { text: "The quality of your questions determines the quality of your life.", categories: ['mindset', 'growth'] },
  { text: "What you focus on expands, what you ignore contracts.", categories: ['mindset', 'success'] },
  { text: "Your income cannot exceed your self-concept.", categories: ['mindset', 'wealth'] },
  { text: "The size of your success is determined by the size of your belief.", categories: ['mindset', 'success'] },

  // Business Operations
  { text: "Systems beat motivation every time.", categories: ['business', 'success'] },
  { text: "The best businesses are boring to run but exciting to own.", categories: ['business', 'wealth'] },
  { text: "Automate the predictable so you can humanize the exceptional.", categories: ['business', 'growth'] },
  { text: "Your processes determine your profits.", categories: ['business', 'wealth'] },
  { text: "The best businesses run without their owners.", categories: ['business', 'success'] },

  // Marketing Strategy
  { text: "The best marketing is doing what you said you would do.", categories: ['marketing', 'business'] },
  { text: "Market to the problem, sell to the solution.", categories: ['marketing', 'business'] },
  { text: "The best marketing strategy is to be remarkable.", categories: ['marketing', 'success'] },
  { text: "Your marketing should make your competition irrelevant.", categories: ['marketing', 'business'] },
  { text: "The best marketing is word of mouth, and the best word of mouth is results.", categories: ['marketing', 'success'] },

  // Personal Development
  { text: "Your habits create your future.", categories: ['mindset', 'growth'] },
  { text: "What got you here won't get you there.", categories: ['growth', 'success'] },
  { text: "The bigger the dream, the more important the team.", categories: ['growth', 'business'] },
  { text: "Your network determines your net worth.", categories: ['growth', 'wealth'] },
  { text: "The quality of your life is determined by the quality of your habits.", categories: ['growth', 'mindset'] },

  // Wealth Mindset
  { text: "Make money by creating value, keep money by controlling costs.", categories: ['wealth', 'business'] },
  { text: "Wealth is not about making money, it's about keeping money.", categories: ['wealth', 'mindset'] },
  { text: "The best way to make money is to make other people money.", categories: ['wealth', 'business'] },
  { text: "Your wealth is determined by what you don't spend.", categories: ['wealth', 'mindset'] },
  { text: "Build assets that make money while you build more assets.", categories: ['wealth', 'business'] }
];