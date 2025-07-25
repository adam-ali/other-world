import WithBottomBar from '@/layouts/withBottomBar';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <WithBottomBar>
        <Outlet />
      </WithBottomBar>
      <TanStackRouterDevtools />
    </>
  ),
});
