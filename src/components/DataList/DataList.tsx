import { type ReactNode } from "react";
import { cn } from "../../utils/cn";

function DataList({ children, className }: { children: ReactNode; className?: string }) {
  return <dl className={cn("grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm", className)}>{children}</dl>;
}

function DataListItem({ label, children }: { label: string; children: ReactNode }) {
  return (
    <>
      <dt className="text-(--muted)">{label}</dt>
      <dd className="text-(--foreground)">{children}</dd>
    </>
  );
}

export { DataList, DataListItem };
