import type { ReactNode } from "react";

interface TerminalBoxProps {
  legend: ReactNode;
  children: ReactNode;
  header?: ReactNode;
}

export function TerminalBox({ legend, children, header }: TerminalBoxProps) {
  return (
    <fieldset className="terminal-box">
      <legend className="terminal-legend">{legend}</legend>
      {header && (
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 12px",
            margin: "-1.25rem -1.5rem 1rem -1.5rem",
            background: "var(--bg-console-header)",
            borderBottom: "1px solid var(--border-box)",
          }}
        >
          {header}
        </header>
      )}
      {children}
    </fieldset>
  );
}
