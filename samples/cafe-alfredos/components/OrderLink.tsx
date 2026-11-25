import { ORDER_URL } from "@/data/site";
import type { ReactNode } from "react";

export function OrderLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      className={className}
      href={ORDER_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
