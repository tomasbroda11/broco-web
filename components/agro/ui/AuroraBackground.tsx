interface AuroraBackgroundProps {
  className?: string;
}

export function AuroraBackground({ className = "absolute inset-0 -z-10 overflow-hidden" }: AuroraBackgroundProps) {
  return (
    <div className={className}>
      <div className="aurora-blob animate-agro-aurora bg-[var(--agro-violet)]" style={{ width: "600px", height: "600px", top: "-100px", left: "-100px" }} />
      <div className="aurora-blob animate-agro-aurora bg-[var(--agro-blue-bright)]" style={{ width: "500px", height: "500px", top: "30%", right: "-150px", animationDelay: "-20s" }} />
      <div className="aurora-blob animate-agro-aurora bg-[var(--agro-blue-deep)]" style={{ width: "700px", height: "700px", bottom: "-200px", left: "20%", animationDelay: "-40s" }} />
    </div>
  );
}
