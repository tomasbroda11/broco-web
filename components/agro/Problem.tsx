"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { X } from "lucide-react";
import { SectionEyebrow } from "./ui/SectionEyebrow";

const problemItems = [
  "Llama al ingeniero por teléfono para saber cuánto le queda de soja",
  "Anota los gastos en una libreta que se mancha de barro",
  "Manda fotos de tickets al contador por WhatsApp",
  "Llega fin de mes y nadie sabe qué se gastó dónde",
];

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, transform: "translateY(20px)" },
  visible: { opacity: 1, transform: "translateY(0px)" },
};

export function Problem() {
  return (
    <section className="relative bg-[var(--agro-ink)] py-32 md:py-40">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-2xl md:col-span-7"
          >
            <Image
              src="/agro/images/socios-campo.jpg"
              alt="Productores en el campo argentino"
              width={1200}
              height={800}
              className="h-full w-full object-cover object-[center_27%] brightness-90 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--agro-ink)] via-transparent to-transparent" />
          </motion.div>

          <div className="md:col-span-5">
            <SectionEyebrow color="violet">EL PROBLEMA</SectionEyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-agro-display)] text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              El productor argentino <span className="block">no usa software.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-[var(--agro-bone-dim)]">Usa un cuaderno, una planilla del contador y la memoria.</p>

            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-10 space-y-5"
            >
              {problemItems.map((item) => (
                <motion.li key={item} variants={itemVariants} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="flex items-start gap-3">
                  <X className="mt-1 size-5 shrink-0 text-[var(--agro-violet)]/60" />
                  <span className="text-base text-[var(--agro-bone)]/90">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-10 border-t border-[var(--agro-bone)]/10 pt-8">
              <p className="font-[family-name:var(--font-agro-display)] text-2xl italic leading-snug text-[var(--agro-bone)] md:text-3xl">
                No porque le falte voluntad.
                <br />
                Porque nadie le hizo un software que entienda cómo trabaja.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
