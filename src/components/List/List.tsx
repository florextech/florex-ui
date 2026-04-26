import { type ReactNode } from "react";
import { cn } from "../../utils/cn";

interface ListProps {
  children: ReactNode;
  ordered?: boolean;
  className?: string;
}

function List({ children, ordered, className }: ListProps) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={cn("space-y-1 pl-5 text-sm text-[var(--foreground)]", ordered ? "list-decimal" : "list-disc", className)}>
      {children}
    </Tag>
  );
}

function ListItem({ children, className }: { children: ReactNode; className?: string }) {
  return <li className={cn("marker:text-[var(--brand-600)]", className)}>{children}</li>;
}

export { List, ListItem, type ListProps };
