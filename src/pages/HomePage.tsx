// src/pages/HomePage.tsx

import React from 'react';
import { mockTools } from '../services/mock-tools';
import type { Tool } from '../types/tool';

/**
 * Renders a single tool card.
 * @param {object} props - The component props.
 * @param {Tool} props.tool - The tool to display.
 * @returns {JSX.Element} The rendered tool card.
 */
const ToolCard: React.FC<{ tool: Tool }> = ({ tool }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
    <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{tool.name}</h2>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{tool.description}</p>
    <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
      Visit Tool
    </a>
  </div>
);

/**
 * The home page component, which displays a list of development tools.
 * @returns {JSX.Element} The rendered home page.
 */
const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Dev Tools Point</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;