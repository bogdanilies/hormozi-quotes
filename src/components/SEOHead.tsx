import React from 'react';
import { Helmet } from 'react-helmet-async';

export function SEOHead() {
  return (
    <Helmet>
      <title>Alex Hormozi Quotes - Inspiring Business & Success Wisdom</title>
      <meta name="description" content="Discover 50+ powerful Alex Hormozi quotes on business, success, and entrepreneurship. Get daily inspiration from one of the most successful entrepreneurs." />
      <meta name="keywords" content="alex hormozi quotes, alex hormozi wisdom, business quotes, entrepreneurship quotes, success quotes" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Alex Hormozi Quotes - Daily Business Inspiration" />
      <meta property="og:description" content="Collection of Alex Hormozi's most impactful quotes on business and success." />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Alex Hormozi Quotes - Daily Business Inspiration" />
      <meta name="twitter:description" content="Collection of Alex Hormozi's most impactful quotes on business and success." />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://alexhormoziquotes.com" />
    </Helmet>
  );
}