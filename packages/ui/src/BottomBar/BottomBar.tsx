import { PropsWithChildren } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { Notebook02Icon, RightToLeftListBulletIcon } from '@hugeicons/core-free-icons';
import './bottomBar.css';
export function BottomBar({ children, ...other }: PropsWithChildren) {
  return (
    <div className="liquidGlass-wrapper dock">
      <div className="liquidGlass-effect"></div>
      <div className="liquidGlass-tint"></div>
      <div className="liquidGlass-shine"></div>
      <div className="liquidGlass-text">
        <div className="dock">
          <button className="glass-icon-button">
            <HugeiconsIcon icon={RightToLeftListBulletIcon} />
            <p>Todos</p>
          </button>
          <button className="glass-icon-button">
            <HugeiconsIcon icon={Notebook02Icon} />
            <p>Notes</p>
          </button>

          <img
            src="https://raw.githubusercontent.com/lucasromerodb/liquid-glass-effect-macos/refs/heads/main/assets/notes.png"
            alt="Finder"
          />
          <img
            src="https://raw.githubusercontent.com/lucasromerodb/liquid-glass-effect-macos/refs/heads/main/assets/safari.png"
            alt="Finder"
          />
        </div>
      </div>
    </div>
  );
}

BottomBar.displayName = 'BottomBar';
