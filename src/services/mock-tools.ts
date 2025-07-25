// src/services/mock-tools.ts

import type { Tool } from '../types/tool';

/**
 * A mock list of development tools for initial data.
 */
export const mockTools: Tool[] = [
  {
    id: '1',
    name: 'Vite',
    description: 'Next Generation Frontend Tooling. It\'s fast!',
    category: 'Frontend Development',
    url: 'https://vitejs.dev/',
    logo: 'https://vitejs.dev/logo.svg',
    tags: ['build-tool', 'dev-server', 'frontend'],
    isFree: true,
    hasFreemium: false,
  },
  {
    id: '2',
    name: 'TanStack Router',
    description: 'Modern and type-safe router for React, Solid, Vue, Svelte and Qwik.',
    category: 'Frontend Development',
    url: 'https://tanstack.com/router/',
    tags: ['routing', 'react', 'typescript'],
    isFree: true,
    hasFreemium: false,
  },
  {
    id: '3',
    name: 'Xata',
    description: 'Serverless data platform with a spreadsheet-like UI and a robust API.',
    category: 'Database',
    url: 'https://xata.io/',
    tags: ['database', 'serverless', 'api'],
    isFree: true,
    hasFreemium: true,
  },
];