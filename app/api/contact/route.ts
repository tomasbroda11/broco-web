import { NextResponse } from "next/server";
import { pushLeadToGHL } from "@/lib/ghl";

export const runtime = "nodejs"; // también anda en 'edge' si preferís

export async function POST(req: Request) {
  try {
    const { name, email, whatsapp, company, industry, budget, message, fbclid, fbc, fbp, event_id, hp } = await req.json();

    // Honeypot anti-bots
    if (hp) return NextResponse.json({ ok: true });

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Faltan campos" }, { status: 400 });
    }

    const to = process.env.EMAIL_TO || "contacto@brocosolutions.com";
    const from = process.env.EMAIL_FROM || "Contacto Broco <onboarding@resend.dev>"; // usa tu dominio verificado si ya lo tenés
    const subject = "Nuevo contacto desde brocosolutions.com";

    const text = `Nombre: ${name}
Email: ${email}
WhatsApp: ${whatsapp || "-"}
Empresa: ${company || "-"}
Industria: ${industry || "-"}
Presupuesto estimado: ${budget || "-"}
Mensaje:
${message}`;

    const html = `
      <h2>Nuevo contacto</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>WhatsApp:</strong> ${whatsapp || "-"}</p>
      <p><strong>Empresa:</strong> ${company || "-"}</p>
      <p><strong>Industria:</strong> ${industry || "-"}</p>
      <p><strong>Presupuesto estimado:</strong> ${budget || "-"}</p>
      <p><strong>Mensaje:</strong></p>
      <pre style="white-space:pre-wrap;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,'Liberation Mono','Courier New',monospace;">${message}</pre>
    `;

    // Llamada directa a Resend
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY!}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject,
        html,
        text,
        reply_to: email,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error("Resend error", res.status, data);
      return NextResponse.json(
        { ok: false, error: data?.message || "Error enviando mail" },
        { status: 500 }
      );
    }

    try {
      await pushLeadToGHL({
        name,
        email,
        phone: whatsapp || undefined,
        company,
        industry,
        budget,
        fbclid,
        fbc,
        fbp,
        event_id,
      });
    } catch (ghlError) {
      console.error("GHL push error", ghlError);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Error enviando mail" }, { status: 500 });
  }
}
