"use client";

import { animate, useInView, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function CountUp({ to, duration = 2, suffix = "", className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const value = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = value.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });

    return unsubscribe;
  }, [value]);

  useEffect(() => {
    if (!isInView) {
      return undefined;
    }

    const controls = animate(value, to, {
      duration,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [duration, isInView, to, value]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
      {suffix}
    </span>
  );
}
