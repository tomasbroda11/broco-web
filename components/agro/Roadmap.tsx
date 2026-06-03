"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "./ui/SectionEyebrow";

const milestones = [
  { quarter: "Q1 2026", title: "Prototipo + pilotos", status: "done" },
  { quarter: "Q2 2026", title: "Producción · WhatsApp Business · OCR", status: "current" },
  { quarter: "Q3 2026", title: "50 productores · contratistas", status: "next" },
  { quarter: "Q4 2026", title: "Integración con acopios y exportadores", status: "next" },
  { quarter: "2027", title: "Expansión LatAm", status: "next" },
] as const;

function dotClass(status: (typeof milestones)[number]["status"]) {
  if (status === "done") {
    return "border-[var(--agro-violet)] bg-[var(--agro-violet)]";
  }

  if (status === "current") {
    return "animate-pulse border-[var(--agro-whatsapp)] bg-[var(--agro-whatsapp)]";
  }

  return "border-[var(--agro-bone)]/30 bg-[var(--agro-ink)]";
}

function mobileBorderClass(status: (typeof milestones)[number]["status"]) {
  if (status === "done") {
    return "border-[var(--agro-violet)]";
  }

  if (status === "current") {
    return "border-[var(--agro-whatsapp)]";
  }

  return "border-[var(--agro-bone)]/30";
}

export function Roadmap() {
  return (
    <section className="relative overflow-hidden bg-[var(--agro-ink-soft)] py-32 md:py-40">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionEyebrow color="blueBright">ROADMAP</SectionEyebrow>
          <h2 className="mt-4 font-[family-name:var(--font-agro-display)] text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Dónde estamos,
            <br />
            dónde vamos.
          </h2>
        </motion.div>

        <div className="relative mt-20 hidden md:block">
          <div className="absolute left-0 right-0 top-[50px] border-t border-[var(--agro-bone)]/15" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-[50px] origin-left border-t border-[var(--agro-violet)]/60"
          />
          <div className="grid grid-cols-5">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.quarter}
                initial={{ opacity: 0, transform: "translateY(24px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center"
              >
                <div className="mb-3 font-[family-name:var(--font-agro-mono)] text-xs uppercase tracking-widest text-[var(--agro-bone-dim)]">{milestone.quarter}</div>
                <div className={`z-10 size-4 rounded-full border-2 ${dotClass(milestone.status)}`} />
                <div className="mt-4 max-w-[180px] text-center">
                  <p className="font-[family-name:var(--font-agro-display)] text-lg leading-tight">{milestone.title}</p>
                  {milestone.status === "current" && (
                    <span className="mt-2 inline-block rounded-full bg-[var(--agro-whatsapp)]/15 px-2 py-1 font-[family-name:var(--font-agro-mono)] text-[10px] uppercase tracking-wider text-[var(--agro-whatsapp)]">
                      ESTAMOS ACÁ
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 space-y-5 md:hidden">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.quarter}
              initial={{ opacity: 0, transform: "translateY(24px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`border-l-2 bg-[var(--agro-ink)]/70 py-4 pl-4 pr-5 ${mobileBorderClass(milestone.status)}`}
            >
              <div className="font-[family-name:var(--font-agro-mono)] text-xs uppercase tracking-widest text-[var(--agro-bone-dim)]">{milestone.quarter}</div>
              <p className="mt-2 font-[family-name:var(--font-agro-display)] text-2xl leading-tight">{milestone.title}</p>
              {milestone.status === "current" && (
                <span className="mt-3 inline-block rounded-full bg-[var(--agro-whatsapp)]/15 px-2 py-1 font-[family-name:var(--font-agro-mono)] text-[10px] uppercase tracking-wider text-[var(--agro-whatsapp)]">
                  ESTAMOS ACÁ
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-24 max-w-3xl text-center font-[family-name:var(--font-agro-display)] text-2xl italic leading-snug text-[var(--agro-bone)] md:text-3xl"
        >
          Estamos en preproducción. Buscamos un partner que entienda agro
          <br />
          para acelerar lo que ya funciona.
        </motion.p>
      </div>
    </section>
  );
}
