import { cn } from "../../utils/cn";

interface StatProps {
  label: string;
  value: string | number;
  helpText?: string;
  trend?: "up" | "down" | "neutral";
  className?: string;
}

const trendConfig = {
  up: { arrow: "↑", color: "text-[var(--success)]" },
  down: { arrow: "↓", color: "text-[var(--danger)]" },
  neutral: { arrow: "→", color: "text-[var(--muted)]" },
};

function Stat({ label, value, helpText, trend, className }: StatProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <p className="text-xs font-medium text-[var(--muted)]">{label}</p>
      <div className="flex items-baseline gap-2">
        <p className="text-2xl font-bold text-[var(--foreground)]">{value}</p>
        {trend && <span className={cn("text-sm font-medium", trendConfig[trend].color)}>{trendConfig[trend].arrow}</span>}
      </div>
      {helpText && <p className="text-xs text-[var(--muted)]">{helpText}</p>}
    </div>
  );
}

export { Stat, type StatProps };
