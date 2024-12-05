import React, { useState } from 'react';
import { quotes, QuoteCategory } from '../data/quotes';
import { CategoryFilter } from './CategoryFilter';

export function QuoteGrid() {
  const [visibleQuotes, setVisibleQuotes] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState<QuoteCategory | 'all'>('all');

  const filteredQuotes = selectedCategory === 'all'
    ? quotes
    : quotes.filter(quote => quote.categories.includes(selectedCategory as QuoteCategory));

  const showMore = () => {
    setVisibleQuotes(prev => Math.min(prev + 6, filteredQuotes.length));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Powerful Quotes from Alex Hormozi</h2>
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={category => {
          setSelectedCategory(category);
          setVisibleQuotes(6);
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredQuotes.slice(0, visibleQuotes).map((quote, index) => (
          <div 
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <p className="text-xl text-gray-800 mb-4">"{quote.text}"</p>
            <div className="flex flex-wrap gap-2">
              {quote.categories.map(category => (
                <span
                  key={category}
                  className="text-xs font-semibold px-2 py-1 bg-purple-100 text-purple-700 rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {visibleQuotes < filteredQuotes.length && (
        <div className="text-center mt-12">
          <button
            onClick={showMore}
            className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Show More Quotes
          </button>
        </div>
      )}
    </div>
  );
}