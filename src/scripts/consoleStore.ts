export type LogType = "ok" | "info" | "warn";

export interface LogLine {
  id: number;
  text: string;
  type: LogType;
}

const MAX_LINES = 50;

const INITIAL_LINES: LogLine[] = [
  { id: 1, text: "> SYSTEM INITIALIZED...", type: "info" },
  { id: 2, text: "> BOOTING KERNEL...", type: "info" },
  { id: 3, text: "[ OK ] LOADED: TYPEFACES", type: "ok" },
  { id: 4, text: "[ OK ] LOADED: SHADERS", type: "ok" },
  { id: 5, text: "> CATALOGING FOCUS...", type: "info" },
];

let lines: LogLine[] = INITIAL_LINES;
let nextId = INITIAL_LINES.length + 1;
const listeners = new Set<() => void>();

/**
 * Tiny external store for the decorative console panel.
 * Plain TypeScript (no React) so scripts and React islands can share it.
 * The shape matches what React's useSyncExternalStore expects.
 */
export const consoleStore = {
  append(text: string, type: LogType = "info") {
    lines = [...lines, { id: nextId++, text, type }].slice(-MAX_LINES);
    for (const listener of listeners) listener();
  },
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
  getSnapshot(): LogLine[] {
    return lines;
  },
  getServerSnapshot(): LogLine[] {
    return INITIAL_LINES;
  },
};
