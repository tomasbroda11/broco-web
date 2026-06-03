import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function BrocoSolutionsRibbon() {
  return (
    <div className="w-full bg-[var(--agro-ink-soft)] border-b border-[var(--agro-bone)]/10">
      <div className="container mx-auto max-w-7xl px-6 h-9 flex items-center justify-between text-xs font-[family-name:var(--font-agro-mono)]">
        <Link
          href="/"
          className="group flex items-center gap-1.5 text-[var(--agro-bone-dim)] hover:text-[var(--agro-bone)] transition-colors"
        >
          <span className="uppercase tracking-widest">
            Una solución de <span className="text-[var(--agro-bone)] font-medium">Broco Solutions</span>
          </span>
          <ArrowUpRight className="size-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
        <span className="hidden md:inline uppercase tracking-widest text-[var(--agro-bone-dim)]">
          AgTech · Argentina
        </span>
      </div>
    </div>
  );
}
