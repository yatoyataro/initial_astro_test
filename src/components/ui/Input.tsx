import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  /** Required so the <label htmlFor> link is explicit and stable. */
  id: string;
  hint?: string;
}

export function Input({ label, id, hint, className = "", ...props }: InputProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        id={id}
        className={`input-terminal ${className}`.trim()}
        aria-describedby={hintId}
        {...props}
      />
      {hint && (
        <p id={hintId} className="form-hint">
          {hint}
        </p>
      )}
    </div>
  );
}
