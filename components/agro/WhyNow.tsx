"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "./ui/SectionEyebrow";

const columns = [
  {
    title: "El productor ya está en WhatsApp",
    bullets: ["Penetración masiva del canal en Argentina", "Es donde habla con el ingeniero, el contratista, el acopio", "Costo de adopción cero"],
  },
  {
    title: "La IA recién ahora entiende el campo",
    bullets: ["Modelos como Claude interpretan jerga: 'un palo', 'lo de siempre'", "OCR de tickets de almacén rural sin estructura", "Audio en español agropecuario argentino"],
  },
  {
    title: "Argentina es el laboratorio perfecto",
    bullets: ["3er exportador mundial de soja", "Decenas de miles de productores medianos sin digitalizar", "Trampolín a Uruguay, Paraguay y Brasil"],
  },
];

export function WhyNow() {
  return (
    <section id="por-que" className="relative bg-[var(--agro-ink-soft)] py-32 md:py-40">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <SectionEyebrow color="blueBright">POR QUÉ AHORA</SectionEyebrow>
          <h2 className="mx-auto mt-4 max-w-4xl text-center font-[family-name:var(--font-agro-display)] text-5xl font-bold tracking-tight md:text-7xl">
            El timing es <span className="text-[var(--agro-blue-bright)]">ahora</span>.
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {columns.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, transform: "translateY(30px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl border border-[var(--agro-bone)]/10 bg-[var(--agro-ink)] p-8 transition-colors hover:border-[var(--agro-violet)]/30"
            >
              <div className="mb-6 font-[family-name:var(--font-agro-display)] text-7xl font-bold leading-none text-[var(--agro-violet)]/30">0{index + 1}</div>
              <h3 className="mb-4 font-[family-name:var(--font-agro-display)] text-2xl font-bold leading-tight md:text-3xl">{column.title}</h3>
              <ul className="space-y-3 text-[var(--agro-bone-dim)]">
                {column.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1.5 text-[var(--agro-violet)]">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
