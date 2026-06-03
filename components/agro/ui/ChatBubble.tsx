"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ChatBubbleProps {
  userMessage: ReactNode;
  botMessage: string;
  delay?: number;
}

export function ChatBubble({ userMessage, botMessage, delay = 0 }: ChatBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(20px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-2 rounded-2xl border border-[var(--agro-bone)]/10 bg-[var(--agro-ink)]/60 p-4 backdrop-blur"
    >
      <div className="inline-block rounded-xl bg-[var(--agro-ink-soft)] px-3 py-2 font-[family-name:var(--font-agro-body)] text-sm text-[var(--agro-bone)]">{userMessage}</div>
      <div className="rounded-xl border border-[var(--agro-whatsapp)]/30 bg-[var(--agro-whatsapp)]/10 px-3 py-2 font-[family-name:var(--font-agro-body)] text-sm text-[var(--agro-bone)]">{botMessage}</div>
    </motion.div>
  );
}
