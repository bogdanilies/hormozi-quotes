import { useState } from 'react';
import { quotes } from '../data/quotes';

export function useRandomQuote() {
  const [quote, setQuote] = useState(() => quotes[Math.floor(Math.random() * quotes.length)]);

  const getNewQuote = () => {
    let newQuote;
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote === quote);
    setQuote(newQuote);
  };

  return { quote, getNewQuote };
}