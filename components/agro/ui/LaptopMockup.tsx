import Image from "next/image";

interface LaptopMockupProps {
  src: string;
  alt: string;
}

export function LaptopMockup({ src, alt }: LaptopMockupProps) {
  return (
    <div className="overflow-hidden rounded-t-xl border border-[var(--agro-bone)]/20 bg-[var(--agro-ink-soft)] shadow-2xl">
      <div className="flex h-8 items-center gap-2 border-b border-[var(--agro-bone)]/10 bg-[var(--agro-ink)]/80 px-4">
        <div className="size-3 rounded-full bg-[#FF5F57]" />
        <div className="size-3 rounded-full bg-[#FEBC2E]" />
        <div className="size-3 rounded-full bg-[#28C840]" />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--agro-ink)]">
        <Image src={src} alt={alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
      </div>
    </div>
  );
}
