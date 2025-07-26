import './card.css';

export function Card({ title, content }) {
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
