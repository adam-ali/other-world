import { PropsWithChildren, ReactNode } from 'react';
import './bottomBar.css';

interface BottomBarProps extends PropsWithChildren {}

interface BottomBarItemProps {
  icon: ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const BottomBarItem = ({ icon, label, isActive, onClick }: BottomBarItemProps) => {
  const buttonClassName = `glass-icon-button ${isActive ? 'glass-icon-button__active' : ''}`;

  return (
    <>
      <button className={buttonClassName} onClick={onClick} aria-label={label}>
        {icon}
        <p>{label}</p>
      </button>
    </>
  );
};
export function BottomBar({ children }: BottomBarProps) {
  return (
    <div className="liquidGlass-wrapper dock">
      <div className="liquidGlass-effect"></div>
      <div className="liquidGlass-tint"></div>
      <div className="liquidGlass-shine"></div>
      <div className="liquidGlass-text">
        <div className="dock">{children}</div>
      </div>
    </div>
  );
}

BottomBar.Item = BottomBarItem;
BottomBar.displayName = 'BottomBar';
