interface ProficiencyBarProps {
  name: string;
  pct: number;
}

export function ProficiencyBar({ name, pct }: ProficiencyBarProps) {
  const filledCount = Math.floor(pct / 10);
  const hasPartial = pct % 10 >= 5;
  const segments = Array.from({ length: 10 }, (_, i) => {
    let type = "empty";
    if (i < filledCount) {
      type = "filled";
    } else if (i === filledCount && hasPartial) {
      type = "partial";
    }
    return {
      id: `${name}-seg-${i}`,
      type,
    };
  });

  return (
    <div className="proficiency-bar">
      <div className="proficiency-header">
        <span className="proficiency-name">{name}</span>
        <span className="proficiency-pct">{pct}%</span>
      </div>
      <div className="proficiency-track">
        {segments.map((segment) => (
          <div key={segment.id} className={`proficiency-segment ${segment.type}`} />
        ))}
      </div>
    </div>
  );
}
