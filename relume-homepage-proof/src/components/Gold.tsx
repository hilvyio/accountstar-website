import type { ReactNode } from "react";

export function Gold({ children }: { children: ReactNode }) {
  return <span className="text-brand-gold">{children}</span>;
}
