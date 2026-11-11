interface ProficiencyBarProps {
  name: string;
  pct: number;
}

const SEGMENT_COUNT = 10;

export function ProficiencyBar({ name, pct }: ProficiencyBarProps) {
  // Each segment is 10%, so round to the nearest segment (75% draws 8, 74% draws 7).
  const filledCount = Math.round(pct / 10);
  const segments = Array.from({ length: SEGMENT_COUNT }, (_, i) => ({
    id: `segment-${i}`,
    filled: i < filledCount,
  }));

  return (
    <div className="proficiency-bar">
      <div className="proficiency-header">
        <span className="proficiency-name">{name}</span>
        <span className="proficiency-pct">{pct}%</span>
      </div>
      {/* The percentage above carries the meaning, so the bar is decorative. */}
      <div className="proficiency-track" aria-hidden="true">
        {segments.map((segment) => (
          <div
            key={segment.id}
            className={`proficiency-segment${segment.filled ? " filled" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
