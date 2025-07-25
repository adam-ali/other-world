import type { PropsWithChildren } from 'react';
import { BottomBar, Button } from '@other-world/ui';
export default function WithBottomBar({ children }: PropsWithChildren) {
  return (
    <div>
      {children}
      <p>Bottom Bar</p>
      <Button>my Button</Button>
      <BottomBar />
    </div>
  );
}
