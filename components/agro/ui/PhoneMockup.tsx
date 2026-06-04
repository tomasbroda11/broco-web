"use client";

import Tilt from "react-parallax-tilt";
import { useEffect, useState } from "react";

interface Props {
  videoSrc: string;
  glow?: boolean;
  compactOnMobile?: boolean;
  disableTiltOnMobile?: boolean;
}

export function PhoneMockup({ videoSrc, glow = true, compactOnMobile = false, disableTiltOnMobile = false }: Props) {
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(max-width: 640px)");
    const onChange = () => setIsSmallMobile(media.matches);

    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const useCompactMobileFrame = compactOnMobile && isSmallMobile;
  const disableTilt = disableTiltOnMobile && isSmallMobile;

  return (
    <div className="relative">
      {glow && (
        <div
          className={`absolute inset-0 rounded-full bg-[var(--agro-violet)]/30 blur-3xl ${
            useCompactMobileFrame ? "-m-6 sm:-m-10" : "-m-10"
          }`}
        />
      )}
      <Tilt
        tiltMaxAngleX={disableTilt ? 0 : 8}
        tiltMaxAngleY={disableTilt ? 0 : 8}
        glareEnable={false}
        tiltEnable={!disableTilt}
        className="relative"
      >
        <div
          className={`relative mx-auto overflow-hidden rounded-[3rem] border-[8px] border-[var(--agro-ink-soft)] bg-[var(--agro-ink)] shadow-2xl ${
            useCompactMobileFrame ? "h-[470px] w-[226px] sm:h-[580px] sm:w-[280px]" : "h-[580px] w-[280px]"
          }`}
        >
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-[var(--agro-ink)]" />
          {/* Video */}
          <video src={videoSrc} poster="/agro/images/placeholder.svg" autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </Tilt>
    </div>
  );
}
