import { type ReactNode } from "react";
import { cn } from "../../utils/cn";

const sizeMap = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-lg",
  lg: "text-2xl",
  xl: "text-3xl",
  "2xl": "text-4xl",
};

interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: keyof typeof sizeMap;
  className?: string;
  children: ReactNode;
}

function Heading({ as: Tag = "h2", size = "lg", className, children }: HeadingProps) {
  return (
    <Tag className={cn("font-display font-bold tracking-tight text-[var(--foreground)]", sizeMap[size], className)}>
      {children}
    </Tag>
  );
}

export { Heading, type HeadingProps };
