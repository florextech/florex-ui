import { type ReactNode } from "react";

interface VisuallyHiddenProps {
  children: ReactNode;
}

function VisuallyHidden({ children }: VisuallyHiddenProps) {
  return <span className="sr-only">{children}</span>;
}

export { VisuallyHidden, type VisuallyHiddenProps };
