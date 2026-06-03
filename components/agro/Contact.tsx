"use client";

import { useState } from "react";
import { ExternalLink, Mail, MessageCircle } from "lucide-react";
import { AuroraBackground } from "./ui/AuroraBackground";
import { SectionEyebrow } from "./ui/SectionEyebrow";

type ContactStatus = "idle" | "loading" | "success" | "error";

interface ContactState {
  nombre: string;
  email: string;
  empresa: string;
  mensaje: string;
}

const initialState: ContactState = {
  nombre: "",
  email: "",
  empresa: "",
  mensaje: "",
};

export function Contact() {
  const [state, setState] = useState<ContactState>(initialState);
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit() {
    if (state.nombre.length < 2 || !state.email.includes("@") || state.mensaje.length < 10) {
      setStatus("error");
      setErrorMsg("Revisá los datos: nombre, email y mensaje de al menos 10 caracteres.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/agro/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });

      if (!res.ok) {
        throw new Error("fail");
      }

      setStatus("success");
      setState(initialState);
    } catch {
      setStatus("error");
      setErrorMsg("No pudimos enviar el mensaje. Probá por email directo.");
    }
  }

  return (
    <section id="contacto" className="relative isolate overflow-hidden bg-[var(--agro-ink)] py-32 md:py-48">
      <AuroraBackground className="absolute inset-0 -z-10 overflow-hidden opacity-20" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <SectionEyebrow color="whatsapp">HABLEMOS</SectionEyebrow>
        <h2 className="mt-4 font-[family-name:var(--font-agro-display)] text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl lg:text-9xl">Hablemos.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-[var(--agro-bone-dim)]">
          Buscamos inversores que entiendan que el campo es el próximo gran vertical de SaaS conversacional. Si te resuena, escribinos.
        </p>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <a
            href="mailto:contacto@brocosolutions.com"
            className="group rounded-2xl border border-[var(--agro-bone)]/10 bg-[var(--agro-ink-soft)] p-6 transition-[border-color,background-color,transform] hover:-translate-y-1 hover:border-[var(--agro-violet)]/40 hover:bg-[var(--agro-violet)]/5"
          >
            <Mail className="mx-auto mb-3 size-6 text-[var(--agro-violet)] transition-transform group-hover:scale-110" />
            <div className="mb-1 font-[family-name:var(--font-agro-mono)] text-xs uppercase tracking-widest text-[var(--agro-bone-dim)]">EMAIL</div>
            <div className="break-all font-[family-name:var(--font-agro-body)] text-sm text-[var(--agro-bone)]">contacto@brocosolutions.com</div>
          </a>

          <a
            href="https://www.linkedin.com/company/brocosolutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-[var(--agro-bone)]/10 bg-[var(--agro-ink-soft)] p-6 transition-[border-color,background-color,transform] hover:-translate-y-1 hover:border-[var(--agro-blue-bright)]/40 hover:bg-[var(--agro-blue-bright)]/5"
          >
            <ExternalLink className="mx-auto mb-3 size-6 text-[var(--agro-blue-bright)] transition-transform group-hover:scale-110" />
            <div className="mb-1 font-[family-name:var(--font-agro-mono)] text-xs uppercase tracking-widest text-[var(--agro-bone-dim)]">LINKEDIN</div>
            <div className="font-[family-name:var(--font-agro-body)] text-sm text-[var(--agro-bone)]">/company/brocosolutions</div>
          </a>

          <a
            href="https://wa.me/5493412795326"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-[var(--agro-bone)]/10 bg-[var(--agro-ink-soft)] p-6 transition-[border-color,background-color,transform] hover:-translate-y-1 hover:border-[var(--agro-whatsapp)]/40 hover:bg-[var(--agro-whatsapp)]/5"
          >
            <MessageCircle className="mx-auto mb-3 size-6 text-[var(--agro-whatsapp)] transition-transform group-hover:scale-110" />
            <div className="mb-1 font-[family-name:var(--font-agro-mono)] text-xs uppercase tracking-widest text-[var(--agro-bone-dim)]">WHATSAPP</div>
            <div className="font-[family-name:var(--font-agro-body)] text-sm text-[var(--agro-bone)]">+54 9 341 279 5326</div>
          </a>
        </div>

        <div className="mx-auto mt-20 max-w-2xl rounded-2xl border border-[var(--agro-bone)]/10 bg-[var(--agro-ink-soft)] p-8 text-left">
          <h3 className="mb-6 text-center font-[family-name:var(--font-agro-display)] text-2xl">O escribinos directamente</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Nombre"
              value={state.nombre}
              onChange={(e) => setState({ ...state, nombre: e.target.value })}
              className="rounded-xl border border-[var(--agro-bone)]/20 bg-[var(--agro-ink)] px-4 py-3 text-[var(--agro-bone)] transition-colors placeholder:text-[var(--agro-bone-dim)] focus:border-[var(--agro-violet)] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={state.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
              className="rounded-xl border border-[var(--agro-bone)]/20 bg-[var(--agro-ink)] px-4 py-3 text-[var(--agro-bone)] transition-colors placeholder:text-[var(--agro-bone-dim)] focus:border-[var(--agro-violet)] focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Empresa / fondo"
            value={state.empresa}
            onChange={(e) => setState({ ...state, empresa: e.target.value })}
            className="mt-4 w-full rounded-xl border border-[var(--agro-bone)]/20 bg-[var(--agro-ink)] px-4 py-3 text-[var(--agro-bone)] transition-colors placeholder:text-[var(--agro-bone-dim)] focus:border-[var(--agro-violet)] focus:outline-none"
          />
          <textarea
            placeholder="¿De qué querés hablar?"
            value={state.mensaje}
            onChange={(e) => setState({ ...state, mensaje: e.target.value })}
            rows={4}
            className="mt-4 w-full resize-none rounded-xl border border-[var(--agro-bone)]/20 bg-[var(--agro-ink)] px-4 py-3 text-[var(--agro-bone)] transition-colors placeholder:text-[var(--agro-bone-dim)] focus:border-[var(--agro-violet)] focus:outline-none"
          />
          <button
            type="button"
            onClick={handleSubmit}
            disabled={status === "loading" || status === "success"}
            className="mt-6 w-full rounded-full bg-[var(--agro-violet)] px-6 py-3 font-medium text-[var(--agro-bone)] shadow-lg shadow-[var(--agro-violet)]/30 transition-transform hover:scale-[1.02] active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "loading" ? "Enviando..." : status === "success" ? "✓ Mensaje enviado" : "Enviar mensaje"}
          </button>
          {status === "error" && <p className="mt-3 text-center text-sm text-red-400">{errorMsg}</p>}
          {status === "success" && <p className="mt-3 text-center text-sm text-[var(--agro-whatsapp)]">Gracias. Te respondemos en menos de 24hs.</p>}
        </div>
      </div>
    </section>
  );
}
