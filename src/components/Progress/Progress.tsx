import { cn } from "../../utils/cn";

const sizes = { sm: "h-1.5", md: "h-3" };

interface ProgressProps {
  value: number;
  size?: "sm" | "md";
  className?: string;
}

function Progress({ value, size = "md", className }: ProgressProps) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("w-full overflow-hidden rounded-full bg-(--surface-muted)", sizes[size], className)}
    >
      <div
        className="h-full rounded-full bg-(--brand-600) transition-all"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}

export { Progress, type ProgressProps };
