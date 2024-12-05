import React from 'react';
import { Quote } from 'lucide-react';
import { useRandomQuote } from '../hooks/useRandomQuote';

export function Hero() {
  const { quote, getNewQuote } = useRandomQuote();

  return (
    <div className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Alex Hormozi Quotes
        </h1>
        <Quote className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
        <p className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed">
          "{quote.text}"
        </p>
        <button
          onClick={getNewQuote}
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
        >
          Get Another Quote
        </button>
      </div>
    </div>
  );
}