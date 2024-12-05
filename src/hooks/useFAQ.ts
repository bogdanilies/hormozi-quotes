import { useState, useMemo } from 'react';
import { faqs } from '../data/faqs';

export function useFAQ() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFAQ = (index: number) => {
    setOpenIndexes(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const isOpen = (index: number) => openIndexes.includes(index);

  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return faqs;

    const query = searchQuery.toLowerCase();
    return faqs.filter(
      faq =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return { 
    faqs: filteredFaqs, 
    toggleFAQ, 
    isOpen,
    searchQuery,
    setSearchQuery,
    totalResults: filteredFaqs.length
  };
}