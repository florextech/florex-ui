import { cn } from "../../utils/cn";

interface SkeletonProps {
  className?: string;
  circle?: boolean;
}

function Skeleton({ className, circle }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-[var(--surface-muted)]",
        circle ? "size-10 rounded-full" : "h-4 w-full rounded-lg",
        className,
      )}
    />
  );
}

export { Skeleton, type SkeletonProps };
