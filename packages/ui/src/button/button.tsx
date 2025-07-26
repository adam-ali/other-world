import { PropsWithChildren } from 'react';
import './button.css';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps) {
  return (
    <button type="button" {...other}>
      {children}
    </button>
  );
}

Button.displayName = 'Button';

export function GlassButton({ children }: PropsWithChildren) {
  return (
    <>
      <button type="button" className="glass-button">
        <div className="container container--inline">
          <div className="glass-container glass-container--rounded">
            <div className="glass-filter"></div>
            <div className="glass-overlay"></div>
            <div className="glass-specular"></div>
            <div className="glass-content glass-content--inline">{children}</div>
          </div>
        </div>

        <div className="container">
          <div className="glass-container">
            <div className="glass-filter"></div>
            <div className="glass-overlay"></div>
            <div className="glass-specular"></div>

            <svg style={{ display: 'none' }}>
              <filter id="lg-dist" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.008 0.008"
                  numOctaves="4"
                  seed="92"
                  result="noise"
                />
                <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="blurred"
                  scale="70"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
            </svg>
          </div>
        </div>
      </button>
    </>
  );
}
