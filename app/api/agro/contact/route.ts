import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  nombre?: unknown;
  email?: unknown;
  empresa?: unknown;
  mensaje?: unknown;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload;
    const { nombre, email, empresa, mensaje } = body;

    if (typeof nombre !== "string" || nombre.length < 2) {
      return NextResponse.json({ error: "Nombre inválido" }, { status: 400 });
    }

    if (typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    if (typeof mensaje !== "string" || mensaje.length < 10) {
      return NextResponse.json({ error: "Mensaje muy corto" }, { status: 400 });
    }

    const safeEmpresa = typeof empresa === "string" ? empresa : "";

    // TODO: integrar con Resend o servicio de email cuando esté la API key.
    // Por ahora, log en consola del server. En producción Vercel queda en los logs.
    console.log("[AGRO-CONTACT]", { nombre, email, empresa: safeEmpresa, mensaje, ts: new Date().toISOString() });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Error procesando solicitud" }, { status: 500 });
  }
}
