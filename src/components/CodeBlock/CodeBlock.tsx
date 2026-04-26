import { useState } from "react";
import { cn } from "../../utils/cn";

interface CodeBlockProps {
  children: string;
  title?: string;
  className?: string;
}

function CodeBlock({ children, title, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={cn("overflow-hidden rounded-xl border bg-[var(--surface)]", className)}>
      {title && (
        <div className="flex items-center justify-between border-b px-4 py-2 text-xs text-[var(--muted)]">
          <span>{title}</span>
        </div>
      )}
      <div className="relative">
        <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-[var(--foreground)]">
          <code className="font-mono">{children}</code>
        </pre>
        <button
          type="button"
          onClick={copy}
          className="absolute right-2 top-2 rounded-lg border bg-[var(--surface-muted)] px-2 py-1 text-xs text-[var(--muted)] transition hover:text-[var(--foreground)]"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}

export { CodeBlock, type CodeBlockProps };
