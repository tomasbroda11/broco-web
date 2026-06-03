"use client";

import { motion, type Variants } from "framer-motion";

type RevealTag = "h1" | "h2" | "h3" | "p" | "span";

interface Props {
  text: string;
  className?: string;
  delay?: number;
  as?: RevealTag;
}

export function RevealText({ text, className = "", delay = 0, as = "h1" }: Props) {
  const words = text.split(" ");
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: delay } },
  };
  const word: Variants = {
    hidden: { transform: "translateY(30px)", opacity: 0 },
    visible: { transform: "translateY(0px)", opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  const Component = motion[as];

  return (
    <Component className={className} variants={container} initial="hidden" animate="visible">
      {words.map((w, i) => (
        <motion.span key={`${w}-${i}`} variants={word} className="mr-[0.25em] inline-block">
          {w}
        </motion.span>
      ))}
    </Component>
  );
}
