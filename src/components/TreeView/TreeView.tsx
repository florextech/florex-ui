import { type ReactNode } from "react";
import { cn } from "../../utils/cn";
import { ChevronRight } from "../../utils/icons";

function TreeView({ children, className }: Readonly<{ children: ReactNode; className?: string }>) {
  return <div className={cn("text-sm text-(--foreground)", className)}>{children}</div>;
}

interface TreeNodeProps {
  label: ReactNode;
  children?: ReactNode;
  defaultOpen?: boolean;
}

function TreeNode({ label, children, defaultOpen }: Readonly<TreeNodeProps>) {
  if (!children) {
    return <div className="flex items-center gap-1 py-1 pl-5">{label}</div>;
  }

  return (
    <details open={defaultOpen} className="group/node">
      <summary className="flex cursor-pointer items-center gap-1 py-1 [&::-webkit-details-marker]:hidden">
        <span className="transition-transform group-open/node:rotate-90">
          <ChevronRight size={14} />
        </span>
        {label}
      </summary>
      <div className="pl-4">{children}</div>
    </details>
  );
}

export { TreeView, TreeNode };
