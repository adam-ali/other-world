import type { PropsWithChildren, ReactNode } from 'react';
import { BottomBar } from '@other-world/ui';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  BookEditFreeIcons,
  Notebook02Icon,
  RightToLeftListBulletIcon,
} from '@hugeicons/core-free-icons';
import './withBottomBar.css';
import { useNavigate, useRouterState } from '@tanstack/react-router';

interface BottomBarItemConfig {
  path: string;
  icon: ReactNode;
  label: string;
}

export default function WithBottomBar({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const router = useRouterState();

  const navItems: BottomBarItemConfig[] = [
    {
      path: '/',
      label: 'ToDo',
      icon: <HugeiconsIcon icon={RightToLeftListBulletIcon} />,
    },
    { path: '/notes', label: 'Notes', icon: <HugeiconsIcon icon={Notebook02Icon} /> },
    { path: '/diary', label: 'Diary', icon: <HugeiconsIcon icon={BookEditFreeIcons} /> },
  ];

  const onItemClick = (itemId: string) => {
    navigate({ to: `/${itemId}` });
  };

  return (
    <div className="layout">
      <main className="main-content">{children}</main>
      <footer className="footer">
        <BottomBar>
          {navItems.map((item) => (
            <BottomBar.Item
              key={item.label}
              icon={item.icon}
              label={item.label}
              isActive={item.path === router.location.pathname}
              onClick={() => onItemClick(item.path)}
            />
          ))}
        </BottomBar>
      </footer>
    </div>
  );
}
