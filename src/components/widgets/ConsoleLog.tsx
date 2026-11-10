import { useEffect, useRef, useState } from "react";

export interface LogLine {
  text: string;
  type: "ok" | "info" | "warn";
  id: number;
}

let logLines: LogLine[] = [
  { text: "> SYSTEM INITIALIZED...", type: "info", id: 1 },
  { text: "> BOOTING KERNEL...", type: "info", id: 2 },
  { text: "[ OK ] LOADED: TYPEFACES", type: "ok", id: 3 },
  { text: "[ OK ] LOADED: SHADERS", type: "ok", id: 4 },
  { text: "> CATALOGING FOCUS...", type: "info", id: 5 },
];
let subscribers: ((lines: LogLine[]) => void)[] = [];
let nextId = 6;

export const consoleLog = {
  append(text: string, type: "ok" | "info" | "warn") {
    const line: LogLine = { text, type, id: nextId++ };
    logLines = [...logLines, line];
    if (logLines.length > 50) logLines = logLines.slice(-50);
    for (const fn of subscribers) {
      fn(logLines);
    }
  },
  subscribe(fn: (lines: LogLine[]) => void) {
    subscribers.push(fn);
    fn(logLines);
    return () => {
      subscribers = subscribers.filter((s) => s !== fn);
    };
  },
  getLines() {
    return logLines;
  },
};

export function ConsoleLog() {
  const [lines, setLines] = useState<LogLine[]>(logLines);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return consoleLog.subscribe(setLines);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [lines]);

  return (
    <div
      ref={containerRef}
      className="console-log"
      role="log"
      aria-live="polite"
      aria-atomic="false"
    >
      {lines.map((line) => (
        <div key={line.id} className={`console-line ${line.type}`}>
          {line.text}
        </div>
      ))}
      <span className="console-cursor" aria-hidden="true">
        █
      </span>
    </div>
  );
}
