"use client";

import Tilt from "react-parallax-tilt";

interface Props {
  videoSrc: string;
  glow?: boolean;
}

export function PhoneMockup({ videoSrc, glow = true }: Props) {
  return (
    <div className="relative">
      {glow && <div className="absolute inset-0 -m-10 rounded-full bg-[var(--agro-violet)]/30 blur-3xl" />}
      <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={false} className="relative">
        <div className="relative mx-auto h-[580px] w-[280px] overflow-hidden rounded-[3rem] border-[8px] border-[var(--agro-ink-soft)] bg-[var(--agro-ink)] shadow-2xl">
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-[var(--agro-ink)]" />
          {/* Video */}
          <video src={videoSrc} poster="/agro/images/placeholder.svg" autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </Tilt>
    </div>
  );
}
