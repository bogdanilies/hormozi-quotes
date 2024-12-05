import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useFAQ } from '../hooks/useFAQ';
import { FAQSearch } from './FAQSearch';

export function FAQ() {
  const { faqs, toggleFAQ, isOpen, searchQuery, setSearchQuery, totalResults } = useFAQ();

  const midPoint = Math.ceil(faqs.length / 2);
  const leftColumnFaqs = faqs.slice(0, midPoint);
  const rightColumnFaqs = faqs.slice(midPoint);

  const FAQItem = ({ faq, index }: { faq: { question: string; answer: string }; index: number }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
      <button
        className="w-full px-4 sm:px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
        onClick={() => toggleFAQ(index)}
      >
        <span className="font-semibold text-base sm:text-lg pr-4">{faq.question}</span>
        {isOpen(index) ? (
          <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen(index) && (
        <div className="px-4 sm:px-6 py-4 bg-gray-50">
          <p className="text-sm sm:text-base text-gray-700">{faq.answer}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Frequently Asked Questions About Alex Hormozi</h2>
        
        <FAQSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        {searchQuery && (
          <p className="text-center mb-8 text-gray-600">
            Found {totalResults} result{totalResults !== 1 ? 's' : ''} for "{searchQuery}"
          </p>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {leftColumnFaqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
          
          <div className="space-y-4">
            {rightColumnFaqs.map((faq, index) => (
              <FAQItem key={index + midPoint} faq={faq} index={index + midPoint} />
            ))}
          </div>
        </div>

        {faqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No questions found matching your search. Try different keywords.</p>
          </div>
        )}
      </div>
    </div>
  );
}