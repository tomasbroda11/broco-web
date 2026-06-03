interface Props {
  items: string[];
}

export function Marquee({ items }: Props) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-[var(--agro-bone)]/10 py-4">
      <div className="flex animate-agro-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="mx-6 font-[family-name:var(--font-agro-mono)] text-xs uppercase tracking-widest text-[var(--agro-bone-dim)]">
            {item} <span className="ml-12 text-[var(--agro-violet)]">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
