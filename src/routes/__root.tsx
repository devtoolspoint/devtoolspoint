// src/routes/__root.tsx

import { createRootRoute, Outlet } from '@tanstack/react-router';
import React from 'react';
import Layout from '../components/layout/Layout';

/**
 * The root route component of the application.
 * It defines the main layout that wraps all other pages.
 * The TanStack Router Devtools are included for debugging purposes.
 */
export const Route = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
      <TanStackRouterDevtools />
    </Layout>
  ),
});

/**
 * A lazy-loaded component for the TanStack Router Devtools.
 * This ensures the devtools are only loaded in development mode.
 */
const TanStackRouterDevtools = 
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import('@tanstack/react-router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      );