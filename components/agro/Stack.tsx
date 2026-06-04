"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Database,
  LayoutDashboard,
  MessageCircle,
  type LucideIcon,
  Workflow,
} from "lucide-react";
import { SectionEyebrow } from "./ui/SectionEyebrow";

type StackNode = {
  label: string;
  description: string;
  Icon: LucideIcon;
  stroke: string;
  glow: string;
  ring: string;
  surface: string;
};

const nodes: StackNode[] = [
  {
    label: "WhatsApp",
    description: "Entrada natural del productor",
    Icon: MessageCircle,
    stroke: "#25D366",
    glow: "shadow-[0_0_0_1px_rgba(37,211,102,0.22),0_0_8px_rgba(37,211,102,0.16)]",
    ring: "border-[rgba(37,211,102,0.38)]",
    surface: "bg-[rgba(37,211,102,0.12)] text-[var(--agro-whatsapp)]",
  },
  {
    label: "Twilio",
    description: "Canal seguro de mensajeria",
    Icon: Workflow,
    stroke: "#F22F46",
    glow: "shadow-[0_0_0_1px_rgba(242,47,70,0.22),0_0_8px_rgba(242,47,70,0.14)]",
    ring: "border-[rgba(242,47,70,0.38)]",
    surface: "bg-[rgba(242,47,70,0.12)] text-[#F22F46]",
  },
  {
    label: "AI Agent",
    description: "Interpreta y ejecuta operaciones",
    Icon: Bot,
    stroke: "#6A11CB",
    glow: "shadow-[0_0_0_1px_rgba(106,17,203,0.22),0_0_8px_rgba(106,17,203,0.16)]",
    ring: "border-[rgba(106,17,203,0.38)]",
    surface: "bg-[rgba(106,17,203,0.12)] text-[var(--agro-violet)]",
  },
  {
    label: "Postgres",
    description: "Datos estructurados y auditables",
    Icon: Database,
    stroke: "#2575FC",
    glow: "shadow-[0_0_0_1px_rgba(37,117,252,0.22),0_0_8px_rgba(37,117,252,0.16)]",
    ring: "border-[rgba(37,117,252,0.38)]",
    surface: "bg-[rgba(37,117,252,0.12)] text-[var(--agro-blue-bright)]",
  },
  {
    label: "Dashboard",
    description: "Control operativo y reportes",
    Icon: LayoutDashboard,
    stroke: "#193582",
    glow: "shadow-[0_0_0_1px_rgba(25,53,130,0.24),0_0_8px_rgba(25,53,130,0.16)]",
    ring: "border-[rgba(25,53,130,0.45)]",
    surface: "bg-[rgba(25,53,130,0.18)] text-[#8BA9FF]",
  },
];

const cards = [
  {
    kicker: "01 · MOAT DE DATOS",
    title: "Cada interacción nos hace mejores",
    description:
      "Acumulamos un corpus único: cómo habla, escribe y manda fotos el productor argentino. Eso entrena un modelo de interpretación que nadie más tiene.",
  },
  {
    kicker: "02 · SWITCHING COST",
    title: "El historial es la trampa",
    description:
      "Una vez que un productor tiene 6 meses de gastos, cosechas y ventas en BrocoAgro, irse cuesta más que quedarse. El dato propio es la lock-in.",
  },
  {
    kicker: "03 · NETWORK EFFECT",
    title: "Más productores, mejor producto",
    description:
      "Cada cliente nuevo nos trae nuevo vocabulario, nuevos tickets, nuevos casos borde. El próximo cliente recibe un producto más afilado que el anterior.",
  },
];

export function Stack() {
  return (
    <section id="stack" className="relative bg-[var(--agro-ink)] py-32 md:py-40">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionEyebrow color="violet">STACK Y DEFENSIBILIDAD</SectionEyebrow>
          <h2 className="mt-4 font-[family-name:var(--font-agro-display)] text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Stack técnico,
            <br />
            defensibilidad real.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-[var(--agro-bone-dim)]">
            No es un wrapper sobre GPT. Es un producto con datos propios, multi-modelo y una arquitectura pensada para escalar.
          </p>
        </motion.div>

        <div className="mt-20">
          <div className="hidden md:block xl:hidden">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {nodes.map((node, index) => {
                const Icon = node.Icon;

                return (
                  <motion.div
                    key={node.label}
                    initial={{ opacity: 0, transform: "translateY(20px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className={`rounded-2xl border border-[var(--agro-bone)]/10 bg-[var(--agro-ink-soft)]/85 p-5 text-center ${
                      index === nodes.length - 1 ? "md:col-span-2 md:max-w-[26rem] md:justify-self-center lg:col-span-1 lg:max-w-none" : ""
                    }`}
                  >
                    <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[var(--agro-bone)]/10 bg-[var(--agro-ink)] p-2">
                      <div className={`flex h-full w-full items-center justify-center rounded-full border ${node.ring} ${node.surface} ${node.glow}`}>
                        <Icon className="size-8" strokeWidth={1.9} />
                      </div>
                    </div>

                    <div className="mt-5 font-[family-name:var(--font-agro-mono)] text-[11px] uppercase tracking-[0.22em] text-[var(--agro-bone-dim)]">
                      {node.label}
                    </div>

                    <div
                      className="mx-auto mt-4 mb-3 h-1.5 w-10 rounded-full"
                      style={{ backgroundColor: node.stroke }}
                      aria-hidden="true"
                    />
                    <p className="text-sm leading-6 text-[var(--agro-bone)]/88">{node.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative hidden xl:block">
            <div className="pointer-events-none absolute left-[10%] right-[10%] top-10 h-px bg-[linear-gradient(90deg,rgba(245,242,236,0)_0%,rgba(245,242,236,0.2)_10%,rgba(245,242,236,0.2)_90%,rgba(245,242,236,0)_100%)]" />
            <div className="pointer-events-none absolute left-[10%] right-[10%] top-10 h-px border-t border-dashed border-[var(--agro-bone)]/15" />

            <div className="grid grid-cols-5 gap-6">
              {nodes.map((node, index) => {
                const Icon = node.Icon;

                return (
                  <motion.div
                    key={node.label}
                    initial={{ opacity: 0, transform: "translateY(20px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex flex-col items-center"
                  >
                    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-[var(--agro-bone)]/10 bg-[var(--agro-ink-soft)] p-2">
                      <div className={`flex h-full w-full items-center justify-center rounded-full border ${node.ring} ${node.surface} ${node.glow}`}>
                        <Icon className="size-8" strokeWidth={1.9} />
                      </div>
                    </div>

                    <div className="mt-5 text-center">
                      <div className="font-[family-name:var(--font-agro-mono)] text-[11px] uppercase tracking-[0.22em] text-[var(--agro-bone-dim)]">
                        {node.label}
                      </div>
                    </div>

                    <div className="mt-4 w-full rounded-2xl border border-[var(--agro-bone)]/10 bg-[var(--agro-ink-soft)]/85 p-4 text-center">
                      <div
                        className="mx-auto mb-3 h-1.5 w-10 rounded-full"
                        style={{ backgroundColor: node.stroke }}
                        aria-hidden="true"
                      />
                      <p className="text-sm leading-6 text-[var(--agro-bone)]/88">{node.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative space-y-4 md:hidden">
            <div className="pointer-events-none absolute bottom-10 left-[1.7rem] top-10 w-px bg-[linear-gradient(180deg,rgba(245,242,236,0)_0%,rgba(245,242,236,0.14)_8%,rgba(245,242,236,0.14)_92%,rgba(245,242,236,0)_100%)]" />
            {nodes.map((node, index) => {
              const Icon = node.Icon;

              return (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, transform: "translateY(16px)" }}
                  whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex gap-4 rounded-2xl border border-[var(--agro-bone)]/10 bg-[var(--agro-ink-soft)]/90 p-4"
                >
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--agro-bone)]/10 bg-[var(--agro-ink)]">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full ${node.surface}`}>
                      <Icon className="size-[18px]" strokeWidth={2} />
                    </div>
                  </div>

                  <div className="min-w-0">
                    <div className="font-[family-name:var(--font-agro-mono)] text-[11px] uppercase tracking-[0.22em] text-[var(--agro-bone-dim)]">
                      {node.label}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[var(--agro-bone)]/88">{node.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.kicker}
              initial={{ opacity: 0, transform: "translateY(30px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl border border-[var(--agro-bone)]/10 bg-[var(--agro-ink-soft)] p-8 transition-[transform,border-color,box-shadow] hover:-translate-y-1 hover:border-[var(--agro-violet)]/40 hover:shadow-[0_0_30px_rgba(106,17,203,0.15)]"
            >
              <div className="mb-3 font-[family-name:var(--font-agro-mono)] text-xs uppercase tracking-widest text-[var(--agro-violet)]">
                {card.kicker}
              </div>
              <h3 className="mb-4 font-[family-name:var(--font-agro-display)] text-2xl font-bold leading-tight md:text-3xl">
                {card.title}
              </h3>
              <p className="leading-relaxed text-[var(--agro-bone-dim)]">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
