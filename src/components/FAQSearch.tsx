import React from 'react';
import { Search } from 'lucide-react';

interface FAQSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function FAQSearch({ searchQuery, setSearchQuery }: FAQSearchProps) {
  return (
    <div className="max-w-2xl mx-auto mb-12">
      <div className="relative">
        <input
          type="text"
          placeholder="Search FAQ questions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors duration-200"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>
      <p className="text-sm text-gray-500 mt-2 text-center">
        Type your question to find relevant answers about Alex Hormozi
      </p>
    </div>
  );
}