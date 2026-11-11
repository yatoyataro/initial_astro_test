import type { ReactNode } from "react";

type HeadingLevel = 2 | 3 | 4;

interface TerminalBoxProps {
  /** Text shown on the box border (or in the title bar for the console variant). */
  title: string;
  children: ReactNode;
  /**
   * Semantic heading level for the title. Pass `null` for purely decorative panels
   * (they are rendered as a plain <div> with no heading).
   */
  headingLevel?: HeadingLevel | null;
  /** Right-aligned text in the console-style title bar. */
  meta?: string;
  variant?: "box" | "console";
  className?: string;
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export function TerminalBox({
  title,
  children,
  headingLevel = 3,
  meta,
  variant = "box",
  className = "",
}: TerminalBoxProps) {
  const titleId = `box-${slugify(title)}`;
  const Wrapper = headingLevel ? "section" : "div";
  const Heading = headingLevel ? (`h${headingLevel}` as "h2" | "h3" | "h4") : "p";
  const classes = ["terminal-box", variant === "console" ? "terminal-box--console" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Wrapper className={classes} aria-labelledby={headingLevel ? titleId : undefined}>
      {variant === "console" ? (
        <header className="terminal-box__bar">
          <Heading id={headingLevel ? titleId : undefined} className="terminal-box__bar-title">
            {title}
          </Heading>
          {meta && <span className="terminal-box__bar-meta">{meta}</span>}
        </header>
      ) : (
        <Heading id={headingLevel ? titleId : undefined} className="terminal-box__title">
          {title}
        </Heading>
      )}
      <div className="terminal-box__body">{children}</div>
    </Wrapper>
  );
}
