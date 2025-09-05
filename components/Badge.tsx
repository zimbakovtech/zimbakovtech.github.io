import { ReactNode } from "react";

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-surface/70 text-text-secondary px-3 py-1 text-xs border border-white/5">
      {children}
    </span>
  );
}
