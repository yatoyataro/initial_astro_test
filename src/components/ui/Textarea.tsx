import { forwardRef } from 'react';
import type { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, className = '', id, ...props }, ref) => {
    const textareaId = id || label.toLowerCase().replace(/[^a-z0-9]/g, '-');
    return (
      <div className="form-group">
        <label htmlFor={textareaId} className="form-label">
          {label}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          className={`textarea-terminal ${className}`}
          {...props}
        />
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';