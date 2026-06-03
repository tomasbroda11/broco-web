"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/agro/ui/AuroraBackground";
import { PhoneMockup } from "@/components/agro/ui/PhoneMockup";
import { Marquee } from "@/components/agro/ui/Marquee";
import { RevealText } from "@/components/agro/ui/RevealText";

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen flex-col justify-between overflow-hidden">
      <AuroraBackground />

      <div className="flex flex-1 items-center">
        <div className="container mx-auto max-w-7xl px-6 py-20 md:py-32">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Texto */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, transform: "translateY(10px)" }}
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                transition={{ duration: 0.6 }}
                className="font-[family-name:var(--font-agro-mono)] text-xs uppercase tracking-[0.2em] text-[var(--agro-blue-bright)]"
              >
                El primer ERP agro conversacional
              </motion.div>

              <h1 className="font-[family-name:var(--font-agro-display)] text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                <RevealText text="El campo se gestiona" as="span" className="block" />
                <RevealText text="desde un" as="span" className="block" delay={0.3} />
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block animate-agro-glow rounded-lg px-2 text-[var(--agro-whatsapp)]"
                >
                  WhatsApp.
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, transform: "translateY(20px)" }}
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="max-w-md font-[family-name:var(--font-agro-body)] text-lg text-[var(--agro-bone-dim)]"
              >
                Stock, gastos, cosecha, ventas. Audio, fotos, texto. Un agente de IA que entiende cómo habla el productor argentino.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, transform: "translateY(20px)" }}
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#contacto"
                  className="rounded-full bg-[var(--agro-violet)] px-6 py-3 font-[family-name:var(--font-agro-body)] font-medium text-[var(--agro-bone)] shadow-lg shadow-[var(--agro-violet)]/30 transition-transform hover:scale-105 active:scale-[0.97]"
                >
                  Agendar demo
                </a>
                <a
                  href="#producto"
                  className="rounded-full border border-[var(--agro-bone)]/20 px-6 py-3 font-[family-name:var(--font-agro-body)] font-medium text-[var(--agro-bone)] transition-colors hover:border-[var(--agro-bone)]/40 active:scale-[0.97]"
                >
                  Ver cómo funciona
                </a>
              </motion.div>
            </div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, transform: "translateX(50px)" }}
              animate={{ opacity: 1, transform: "translateX(0px)" }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center md:justify-end"
            >
              <PhoneMockup videoSrc="/agro/videos/bot-hero.mp4" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee inferior */}
      <Marquee
        items={[
          "WhatsApp Business",
          "Claude AI",
          "Multi-tenant",
          "Cloud-native",
          "Argentina-first",
          "Twilio",
          "Postgres",
          "Audio",
          "OCR",
          "Real-time",
        ]}
      />
    </section>
  );
}
