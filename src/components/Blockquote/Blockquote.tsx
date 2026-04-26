import { type ReactNode } from "react";
import { cn } from "../../utils/cn";

interface BlockquoteProps {
  children: ReactNode;
  cite?: string;
  className?: string;
}

function Blockquote({ children, cite, className }: Readonly<BlockquoteProps>) {
  return (
    <figure className={cn("my-4", className)}>
      <blockquote className="border-l-2 border-(--brand-600) pl-4 text-sm italic text-(--foreground)">
        {children}
      </blockquote>
      {cite && <figcaption className="mt-2 pl-4 text-xs text-(--muted)">— {cite}</figcaption>}
    </figure>
  );
}

export { Blockquote, type BlockquoteProps };
