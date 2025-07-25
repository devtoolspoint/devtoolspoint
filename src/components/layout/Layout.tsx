// src/components/layout/Layout.tsx

import React from 'react';

/**
 * Main layout component for the application.
 * It includes a header, a main content area, and a footer.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the main area.
 * @returns {JSX.Element} The rendered layout component.
 */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-800 shadow-md p-4">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Dev Tools Point</h1>
      </header>
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <footer className="bg-white dark:bg-gray-800 shadow-md p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Dev Tools Point. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;