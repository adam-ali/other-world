import './GlassInput.css';

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function GlassInput({ label, ...props }: GlassInputProps) {
  return (
    <div className="glass-input-wrapper">
      {label && <label className="glass-label">{label}</label>}
      <input className="glass-input" {...props} />
    </div>
  );
}

export default GlassInput;
