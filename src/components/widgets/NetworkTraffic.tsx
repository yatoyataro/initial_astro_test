import { createTicker } from "@scripts/ticker";
import { useEffect, useState } from "react";

interface BarData {
  id: string;
  height: number;
  highlighted: boolean;
}

const BAR_COUNT = 24;

const INITIAL_BARS: BarData[] = Array.from({ length: BAR_COUNT }, (_, i) => ({
  id: `net-bar-${i}`,
  height: 25 + ((i * 17) % 60),
  highlighted: i % 4 === 0,
}));

function generateRandomBars(): BarData[] {
  const highlightIndices = new Set<number>();
  while (highlightIndices.size < 7) {
    highlightIndices.add(Math.floor(Math.random() * BAR_COUNT));
  }

  return Array.from({ length: BAR_COUNT }, (_, i) => ({
    id: `net-bar-${i}`,
    height: Math.floor(Math.random() * 80) + 15,
    highlighted: highlightIndices.has(i),
  }));
}

/** Decorative. Updates pause in background tabs and when the visitor prefers reduced motion. */
export function NetworkTraffic() {
  const [bars, setBars] = useState<BarData[]>(INITIAL_BARS);

  useEffect(() => {
    setBars(generateRandomBars());
    return createTicker(() => setBars(generateRandomBars()), 800);
  }, []);

  return (
    <div className="network-traffic">
      <div className="network-bars">
        {bars.map((bar) => (
          <div
            key={bar.id}
            className={`network-bar${bar.highlighted ? " highlight" : ""}`}
            style={{ height: `${bar.height}%` }}
          />
        ))}
      </div>
    </div>
  );
}
