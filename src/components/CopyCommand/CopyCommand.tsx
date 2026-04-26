"use client";

import { useState } from "react";
import { cn } from "../../utils/cn";

interface CopyCommandProps {
  command: string;
  className?: string;
}

function CopyCommand({ command, className }: Readonly<CopyCommandProps>) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        "inline-flex items-center gap-3 rounded-xl border bg-(--surface) px-4 py-2.5 font-mono text-sm text-(--foreground) transition hover:border-[rgb(189_241_70/0.35)]",
        className,
      )}
    >
      <span className="text-(--muted)">$</span>
      <span>{command}</span>
      <span className="ml-auto text-xs text-(--muted)">{copied ? "Copied!" : "Copy"}</span>
    </button>
  );
}

export { CopyCommand, type CopyCommandProps };
