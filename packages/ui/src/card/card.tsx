import { PropsWithChildren } from 'react';
import './card.css';

export function Card({ title, content }: any) {
  return (
    <div style={styles.card} className="glass-card">
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.content}>{content}</p>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
  },
  title: {
    margin: '0 0 8px',
    fontSize: '1.2rem',
  },
  content: {
    margin: 0,
    fontSize: '1rem',
    color: '#555',
  },
};
//
export function Card2({ children }: PropsWithChildren) {
  return (
    <>
      <div className="container container--inline">
        <div className="glass-container glass-container--rounded glass-container--large">
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
                numOctaves="2"
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
    </>
  );
}
