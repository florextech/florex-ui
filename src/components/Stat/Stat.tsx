import { cn } from "../../utils/cn";

interface StatProps {
  label: string;
  value: string | number;
  helpText?: string;
  trend?: "up" | "down" | "neutral";
  className?: string;
}

const trendConfig = {
  up: { arrow: "↑", color: "text-(--success)" },
  down: { arrow: "↓", color: "text-(--danger)" },
  neutral: { arrow: "→", color: "text-(--muted)" },
};

function Stat({ label, value, helpText, trend, className }: Readonly<StatProps>) {
  return (
    <div className={cn("space-y-1", className)}>
      <p className="text-xs font-medium text-(--muted)">{label}</p>
      <div className="flex items-baseline gap-2">
        <p className="text-2xl font-bold text-(--foreground)">{value}</p>
        {trend && <span className={cn("text-sm font-medium", trendConfig[trend].color)}>{trendConfig[trend].arrow}</span>}
      </div>
      {helpText && <p className="text-xs text-(--muted)">{helpText}</p>}
    </div>
  );
}

export { Stat, type StatProps };
