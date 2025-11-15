'use client';

import { useState } from 'react';
import PortfolioCard from './PortfolioCard';

interface PortfolioItem {
  id: string;
  name: string;
  categories: string[];
  status: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 'shopmate',
    name: 'ShopMate',
    categories: ['Website Design', 'Web App'],
    status: 'in progress',
  },
  {
    id: 'bincang-ai',
    name: 'Bincang AI',
    categories: ['Website Design', 'Web App'],
    status: 'in progress',
  },
  {
    id: 'tinjauin',
    name: 'Tinjauin',
    categories: ['Website Design', 'Web App'],
    status: 'in progress',
  },
];

const categories = ['All', 'Website Design', 'Web App'];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPortfolio =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.categories.includes(activeCategory));

  return (
    <section
      id="portfolio"
      className="min-h-screen bg-white dark:bg-[#1a1a1a] py-20 transition-colors"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">
            Portfolio
          </h2>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-colors text-sm md:text-base ${
                  activeCategory === category
                    ? 'bg-[#E46400] text-white'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          {/* Mobile: Horizontal scroll with hidden scrollbar and peek effect */}
          <div className="md:hidden overflow-x-auto -mx-6 px-6 pb-2 scrollbar-hide">
            <style>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
            <div className="flex gap-6 pb-4 min-w-min">
              {filteredPortfolio.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex-shrink-0 ${
                    index === 0 ? 'w-[280px]' : index === filteredPortfolio.length - 1 ? 'w-[280px]' : 'w-[280px]'
                  }`}
                >
                  <PortfolioCard
                    id={item.id}
                    name={item.name}
                    categories={item.categories}
                    image={`/portfolio/${item.id}.jpg`}
                    status={item.status}
                  />
                </div>
              ))}
              {/* Peek element - partial visibility of next card */}
              {filteredPortfolio.length > 1 && (
                <div className="flex-shrink-0 w-16"></div>
              )}
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <PortfolioCard
                key={item.id}
                id={item.id}
                name={item.name}
                categories={item.categories}
                image={`/portfolio/${item.id}.jpg`}
                status={item.status}
              />
            ))}
          </div>

          {/* Empty state */}
          {filteredPortfolio.length === 0 && (
            <div className="h-64 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
