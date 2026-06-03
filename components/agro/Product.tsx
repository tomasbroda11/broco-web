"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { LaptopMockup } from "./ui/LaptopMockup";
import { SectionEyebrow } from "./ui/SectionEyebrow";

const dashboards = [
  {
    label: "Dashboard — Balance global",
    src: "/agro/images/dashboard-1.png",
    alt: "Dashboard de BrocoAgro mostrando el balance global de la empresa",
  },
  {
    label: "Stock por ubicación",
    src: "/agro/images/dashboard-2.png",
    alt: "Vista de stock por ubicación con cards de cada lote",
  },
  {
    label: "Reportes por campaña",
    src: "/agro/images/dashboard-3.png",
    alt: "Reportes financieros con balance consolidado por campaña",
  },
  {
    label: "Gestión de lotes y ciclos",
    src: "/agro/images/dashboard-4.png",
    alt: "Gestión de ciclos productivos con timeline tipo Gantt",
  },
];

const chips = ["Multi-tenant", "Multi-usuario", "Multi-campaña", "Multi-cultivo", "Multi-ubicación", "ARS/USD", "Canjes a futuro", "Auditoría completa"];

export function Product() {
  return (
    <section className="bg-[var(--agro-ink)] py-32 md:py-40">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionEyebrow color="violet">EL PRODUCTO</SectionEyebrow>
          <h2 className="mt-4 font-[family-name:var(--font-agro-display)] text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Detrás del WhatsApp,
            <br />
            un SaaS completo.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-[var(--agro-bone-dim)]">El productor ve un chat. El equipo ve un dashboard. El contador ve los reportes. El admin ve todo.</p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {dashboards.map((dashboard, index) => (
            <motion.div
              key={dashboard.label}
              initial={{ opacity: 0, transform: "translateY(28px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.02} transitionSpeed={1500}>
                <LaptopMockup src={dashboard.src} alt={dashboard.alt} />
              </Tilt>
              <div className="mt-3 font-[family-name:var(--font-agro-mono)] text-sm uppercase tracking-wider text-[var(--agro-bone-dim)]">{dashboard.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 flex flex-wrap justify-center gap-3"
        >
          {chips.map((chip) => (
            <span key={chip} className="rounded-full border border-[var(--agro-bone)]/15 bg-[var(--agro-ink-soft)] px-4 py-2 font-[family-name:var(--font-agro-mono)] text-xs uppercase tracking-wider text-[var(--agro-bone-dim)]">
              {chip}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
