import { PropsWithChildren } from 'react';
import './bottomBar.css';
export function BottomBar({ children, ...other }: PropsWithChildren) {
  return (
    <div className="liquidGlass-wrapper dock">
      <div className="liquidGlass-effect"></div>
      <div className="liquidGlass-tint"></div>
      <div className="liquidGlass-shine"></div>
      <div className="liquidGlass-text">
        <div className="dock">
          <img
            src="https://raw.githubusercontent.com/lucasromerodb/liquid-glass-effect-macos/refs/heads/main/assets/finder.png"
            alt="Finder"
          />
          <img
            src="https://raw.githubusercontent.com/lucasromerodb/liquid-glass-effect-macos/refs/heads/main/assets/map.png"
            alt="Finder"
          />
          <img
            src="https://raw.githubusercontent.com/lucasromerodb/liquid-glass-effect-macos/refs/heads/main/assets/messages.png"
            alt="Finder"
          />
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
