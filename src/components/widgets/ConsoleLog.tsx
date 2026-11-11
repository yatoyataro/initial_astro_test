import { consoleStore } from "@scripts/consoleStore";
import { useEffect, useRef, useSyncExternalStore } from "react";

/** Decorative console. The surrounding panel is aria-hidden, so it never reaches screen readers. */
export function ConsoleLog() {
  const lines = useSyncExternalStore(
    consoleStore.subscribe,
    consoleStore.getSnapshot,
    consoleStore.getServerSnapshot
  );
  const containerRef = useRef<HTMLDivElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: scroll to the newest line whenever the log changes
  useEffect(() => {
    const el = containerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  return (
    <div ref={containerRef} className="console-log">
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
