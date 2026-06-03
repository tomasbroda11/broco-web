import type { ReactNode } from "react";

interface SectionEyebrowProps {
  children: ReactNode;
  color?: "violet" | "blueBright" | "whatsapp";
}

const colorClasses: Record<NonNullable<SectionEyebrowProps["color"]>, string> = {
  violet: "text-[var(--agro-violet)]",
  blueBright: "text-[var(--agro-blue-bright)]",
  whatsapp: "text-[var(--agro-whatsapp)]",
};

export function SectionEyebrow({ children, color = "violet" }: SectionEyebrowProps) {
  return <div className={`font-[family-name:var(--font-agro-mono)] text-xs uppercase tracking-[0.25em] ${colorClasses[color]}`}>{children}</div>;
}
