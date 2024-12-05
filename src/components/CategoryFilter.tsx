import React from 'react';
import type { QuoteCategory } from '../data/quotes';

interface CategoryFilterProps {
  selectedCategory: QuoteCategory | 'all';
  onSelectCategory: (category: QuoteCategory | 'all') => void;
}

const categories: { value: QuoteCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All Quotes' },
  { value: 'business', label: 'Business' },
  { value: 'success', label: 'Success' },
  { value: 'mindset', label: 'Mindset' },
  { value: 'growth', label: 'Growth' },
  { value: 'wealth', label: 'Wealth' },
  { value: 'marketing', label: 'Marketing' },
];

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onSelectCategory(value)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
            selectedCategory === value
              ? 'bg-purple-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-purple-100'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}