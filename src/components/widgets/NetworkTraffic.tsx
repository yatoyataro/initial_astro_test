import { useEffect, useState } from 'react';

export function NetworkTraffic() {
  const [bars, setBars] = useState<number[]>(() =>
    Array.from({ length: 24 }, () => Math.floor(Math.random() * 80) + 15)
  );
  const [highlights, setHighlights] = useState<number[]>(() => {
    const indices = new Set<number>();
    while (indices.size < 7) {
      indices.add(Math.floor(Math.random() * 24));
    }
    return Array.from(indices);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setBars(() =>
        Array.from({ length: 24 }, () => Math.floor(Math.random() * 80) + 15)
      );
      setHighlights(() => {
        const indices = new Set<number>();
        while (indices.size < 7) {
          indices.add(Math.floor(Math.random() * 24));
        }
        return Array.from(indices);
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="network-traffic">
      <div className="network-bars" role="img" aria-label="Network traffic visualization">
        {bars.map((height, index) => (
          <div
            key={index}
            className={`network-bar ${highlights.includes(index) ? 'highlight' : ''}`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}