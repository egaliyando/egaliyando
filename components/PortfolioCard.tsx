'use client';

import Image from 'next/image';

interface PortfolioCardProps {
  id: string;
  name: string;
  categories: string[];
  image: string;
  status: string;
}

export default function PortfolioCard({
  id,
  name,
  categories,
  image,
  status,
}: PortfolioCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 mb-4 transition-transform hover:scale-105">
        {/* Placeholder with gradient background */}
        <div
          className="w-full h-full bg-gradient-to-br from-[#0046ff] via-gray-400 to-blue-500 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity"
          style={{
            backgroundImage: `linear-gradient(135deg, #FF6B00, #9ca3af, #3B82F6)`,
          }}
        >
          <div className="text-center">
            <div className="text-white text-4xl font-bold mb-2">{name.charAt(0)}</div>
            <p className="text-white text-sm opacity-75">{name}</p>
          </div>
        </div>

        {/* Status badge */}
        <div className="absolute top-3 right-3 bg-[#E46400] text-white px-3 py-1 rounded-full text-xs font-medium">
          {status}
        </div>
      </div>

      {/* Project info */}
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-sky-500 dark:group-hover:text-sky-500 transition-colors">
        {name}
      </h3>

      {/* Categories */}
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {categories.join(', ')}
      </p>
    </div>
  );
}
