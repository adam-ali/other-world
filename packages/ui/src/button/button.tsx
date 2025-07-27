import { PropsWithChildren } from 'react';
import './button.css';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function GlassButton({ children, ...other }: ButtonProps) {
  return (
    <>
      <button type="button" {...other} className="glass-button">
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
              {/* <filter id="lg-dist" x="0%" y="0%" width="100%" height="100%">
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
              </filter> */}
              <filter id="glass-distortion">
                <feTurbulence
                  type="turbulence"
                  baseFrequency="0.008"
                  numOctaves="2"
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="77"
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

export function GlassButton2({ children, ...other }: ButtonProps) {
  return (
    <>
      <button className="glass-button2" {...other}>
        <div className="glass-filter"></div>
        <div className="glass-overlay"></div>
        <div className="glass-specular"></div>
        <div className="glass-content">{children}</div>
      </button>
      <svg style={{ display: 'none' }}>
        <filter id="glass-distortion">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.008"
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="77" />
        </filter>
      </svg>
    </>
  );
}
