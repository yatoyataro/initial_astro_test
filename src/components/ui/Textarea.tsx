import type { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  /** Required so the <label htmlFor> link is explicit and stable. */
  id: string;
  hint?: string;
}

export function Textarea({ label, id, hint, className = "", ...props }: TextareaProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <textarea
        id={id}
        className={`textarea-terminal ${className}`.trim()}
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
