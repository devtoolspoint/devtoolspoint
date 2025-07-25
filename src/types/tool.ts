// src/types/tool.ts

/**
 * Represents a development tool in the catalog.
 */
export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  logo?: string; // URL to the tool's logo
  tags: string[];
  isFree: boolean;
  hasFreemium: boolean;
}