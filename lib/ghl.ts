// lib/ghl.ts
// Empuja un lead a GoHighLevel: crea/actualiza el contacto y abre una oportunidad.
// El token va en la env var GHL_TOKEN (nunca hardcodeado, nunca en el cliente).

const GHL_BASE = "https://services.leadconnectorhq.com";

const LOCATION_ID = "i2OPO1GQskK2zGW8oSzL";
const PIPELINE_ID = "iO8CmGLKbGAO5NETmMb7"; // Embudo De Ventas | Tomás
const STAGE_ID = "0d9eb2c7-bff0-4c76-8d40-966e8cfcaad3"; // Leads | Form

const CF = {
  empresa: "hK2NBWnV4dmJPmiHZzBN",
  industria: "dA8T4KbWf8uHSpw5fMaH",
  servicio: "S1BguIZsinH94z53gJfk",
  presupuesto: "IaFCqXil28kTv2APRBdi",
  fbclid: "JyRv9ebXbMVlRe12Zome",
  fbc: "zBimD8wPR3QTgJuCL0XP",
  fbp: "NLF5nKSnOfiUOqzXJlGO",
  event_id: "VEpSKXSR2UmPPxSNseDb",
} as const;

function ghlHeaders() {
  const token = process.env.GHL_TOKEN;
  if (!token) throw new Error("Falta la env var GHL_TOKEN");
  return {
    Authorization: `Bearer ${token}`,
    Version: "2021-07-28",
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

export type LeadInput = {
  name: string;
  email?: string;
  phone?: string; // whatsapp
  company?: string;
  industry?: string;
  service?: string;
  budget?: string;
  fbclid?: string;
  fbc?: string; // _fbc
  fbp?: string; // _fbp
  eventId?: string;
};

export async function pushLeadToGHL(lead: LeadInput) {
  const contactRes = await fetch(`${GHL_BASE}/contacts/upsert`, {
    method: "POST",
    headers: ghlHeaders(),
    body: JSON.stringify({
      locationId: LOCATION_ID,
      firstName: lead.name,
      email: lead.email,
      phone: lead.phone,
      companyName: lead.company,
      source: "Web - Next.js",
      tags: ["web-form"],
      customFields: [
        { id: CF.empresa, field_value: lead.company ?? "" },
        { id: CF.industria, field_value: lead.industry ?? "" },
        { id: CF.servicio, field_value: lead.service ?? "" },
        { id: CF.presupuesto, field_value: lead.budget ?? "" },
        { id: CF.fbclid, field_value: lead.fbclid ?? "" },
        { id: CF.fbc, field_value: lead.fbc ?? "" },
        { id: CF.fbp, field_value: lead.fbp ?? "" },
        { id: CF.event_id, field_value: lead.eventId ?? "" },
      ],
    }),
  });
  const contactData = await contactRes.json();
  if (!contactRes.ok) throw new Error(`GHL contacto ${contactRes.status}: ${JSON.stringify(contactData)}`);
  const contactId: string | undefined = contactData.contact?.id;
  if (!contactId) throw new Error(`GHL no devolvió contactId: ${JSON.stringify(contactData)}`);

  const oppRes = await fetch(`${GHL_BASE}/opportunities/`, {
    method: "POST",
    headers: ghlHeaders(),
    body: JSON.stringify({
      locationId: LOCATION_ID,
      pipelineId: PIPELINE_ID,
      pipelineStageId: STAGE_ID,
      name: `${lead.name}${lead.company ? " - " + lead.company : ""}`,
      status: "open",
      contactId,
    }),
  });
  const oppData: {
    message?: string;
    meta?: { existingId?: string };
    opportunity?: { id?: string };
  } = await oppRes.json();
  if (!oppRes.ok) {
    if (oppRes.status === 400 && oppData.message?.toLowerCase().includes("duplicate")) {
      return {
        contactId,
        opportunityId: oppData.meta?.existingId,
        duplicate: true,
      };
    }
    throw new Error(`GHL oportunidad ${oppRes.status}: ${JSON.stringify(oppData)}`);
  }
  return {
    contactId,
    opportunityId: oppData.opportunity?.id,
    duplicate: false,
  };
}
