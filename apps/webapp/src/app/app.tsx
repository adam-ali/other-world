import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from '../routeTree.gen';
import { TodoProvider } from './providers/todoProvider';

const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
export function App() {
  return (
    <TodoProvider>
      <RouterProvider router={router} />;
    </TodoProvider>
  );
}
