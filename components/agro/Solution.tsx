"use client";

import { motion } from "framer-motion";
import { PhoneMockup } from "./ui/PhoneMockup";
import { SectionEyebrow } from "./ui/SectionEyebrow";
import { ChatBubble } from "./ui/ChatBubble";

export function Solution() {
  return (
    <section id="producto" className="bg-[var(--agro-ink-soft)] py-32 md:py-40">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <SectionEyebrow color="blueBright">LA SOLUCIÓN</SectionEyebrow>
          <h2 className="mx-auto mt-4 max-w-4xl text-center font-[family-name:var(--font-agro-display)] text-5xl font-bold leading-[1] tracking-tight md:text-7xl">
            BrocoAgro es un <span className="inline-block text-[var(--agro-whatsapp)]">agente de IA</span> que vive en WhatsApp.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--agro-bone-dim)]">Mandá texto, audio o foto. El agente entiende, confirma y guarda.</p>
        </motion.div>

        <div className="mt-20 grid items-center gap-8 md:grid-cols-3">
          <div className="space-y-6">
            <ChatBubble userMessage="gasté 45 dólares de glifosato en lote norte" botMessage="✅ Gasto registrado en Lote Norte" delay={0} />
            <ChatBubble userMessage={<span>📷 ticket</span>} botMessage="Vi en la factura: Agroquímicos San Martín, ARS 87.500" delay={0.15} />
          </div>

          <motion.div
            initial={{ opacity: 0, transform: "translateY(24px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <PhoneMockup videoSrc="/agro/videos/bot-product.mp4" />
          </motion.div>

          <div className="space-y-6">
            <ChatBubble userMessage="¿cuánta soja tengo en Casilda?" botMessage="Tenés 1.240 quintales en Casilda 🌱" delay={0.3} />
            <ChatBubble userMessage={<span>🎤 audio</span>} botMessage="Escuché: 'cargar 200 quintales en el lote sur'" delay={0.45} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, transform: "translateY(16px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--agro-bone)]/10 px-4 py-2 font-[family-name:var(--font-agro-mono)] text-xs uppercase tracking-wider text-[var(--agro-bone-dim)]">
            <span className="size-2 rounded-full bg-[var(--agro-whatsapp)] animate-pulse" />
            Potenciado por Claude Haiku 4.5 · OpenAI Whisper · Mistral OCR
          </div>
        </motion.div>
      </div>
    </section>
  );
}
