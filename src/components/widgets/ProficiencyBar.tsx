interface ProficiencyBarProps {
  name: string;
  pct: number;
}

export function ProficiencyBar({ name, pct }: ProficiencyBarProps) {
  const filledCount = Math.floor(pct / 10);
  const hasPartial = pct % 10 >= 5;
  const segments = Array.from({ length: 10 }, (_, i) => {
    if (i < filledCount) return 'filled';
    if (i === filledCount && hasPartial) return 'partial';
    return 'empty';
  });

  return (
    <div className="proficiency-bar">
      <div className="proficiency-header">
        <span className="proficiency-name">{name}</span>
        <span className="proficiency-pct">{pct}%</span>
      </div>
      <div className="proficiency-track">
        {segments.map((type, i) => (
          <div key={i} className={`proficiency-segment ${type}`} />
        ))}
      </div>
    </div>
  );
}