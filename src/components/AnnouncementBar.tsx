import React from 'react';

interface AnnouncementBarProps {
  className?: string;
}

export function AnnouncementBar({ className = '' }: AnnouncementBarProps) {
  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-purple-900 text-white py-3 px-4 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-3">
        <p className="text-sm sm:text-base font-medium text-center">Win a day with Alex Hormozi in Vegas</p>
        <a
          href="https://www.skool.com/games?ref=d8f60f1b25824ecc90680d3eb713b612"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-200"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}