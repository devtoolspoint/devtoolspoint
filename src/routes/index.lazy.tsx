// src/routes/index.lazy.tsx

import { createLazyFileRoute } from '@tanstack/react-router';
import HomePage from '../pages/HomePage';

/**
 * Creates a lazy-loaded file route for the index page ('/').
 * This route renders the HomePage component.
 */
export const Route = createLazyFileRoute('/')({
  component: HomePage,
});