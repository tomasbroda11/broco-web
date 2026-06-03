"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "./ui/SectionEyebrow";

const bubbles = [
  { size: 48, top: "12%", left: "8%", delay: "0s" },
  { size: 90, top: "20%", left: "78%", delay: "-1.2s" },
  { size: 64, top: "68%", left: "12%", delay: "-2.4s" },
  { size: 120, top: "62%", left: "70%", delay: "-3.1s" },
  { size: 42, top: "42%", left: "26%", delay: "-1.7s" },
  { size: 76, top: "10%", left: "52%", delay: "-4.2s" },
  { size: 54, top: "80%", left: "44%", delay: "-2.8s" },
];

export function Insight() {
  return (
    <section className="relative overflow-hidden bg-black py-40 md:py-56">
      {bubbles.map((bubble, index) => (
        <div
          key={`${bubble.top}-${bubble.left}-${index}`}
          className="absolute z-0 animate-agro-float rounded-2xl bg-[var(--agro-whatsapp)]/[0.03]"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            top: bubble.top,
            left: bubble.left,
            animationDelay: bubble.delay,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionEyebrow color="whatsapp">PERO...</SectionEyebrow>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, transform: "translateY(28px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-[family-name:var(--font-agro-display)] text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
        >
          <span className="block">El campo ya usa</span>
          <span className="inline-block animate-agro-glow rounded-lg px-3 text-[var(--agro-whatsapp)]">WhatsApp</span>
          <span className="mt-4 block">todo el día.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-12 max-w-2xl text-xl text-[var(--agro-bone-dim)]"
        >
          Hablamos con productores. Todos tienen WhatsApp abierto desde las 6 de la mañana. Ninguno va a aprender un ERP de escritorio.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 font-[family-name:var(--font-agro-display)] text-3xl italic text-[var(--agro-blue-bright)] md:text-4xl"
        >
          ¿Y si el ERP viviera adentro de WhatsApp?
        </motion.p>
      </div>
    </section>
  );
}
