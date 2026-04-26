import { type ReactNode } from "react";
import { cn } from "../../utils/cn";

const gaps = { sm: "gap-2", md: "gap-4", lg: "gap-6" };

interface StackProps {
  direction?: "row" | "column";
  gap?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
}

function Stack({ direction = "column", gap = "md", className, children }: StackProps) {
  return (
    <div className={cn("flex", direction === "row" ? "flex-row" : "flex-col", gaps[gap], className)}>
      {children}
    </div>
  );
}

export { Stack, type StackProps };
