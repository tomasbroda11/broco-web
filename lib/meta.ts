import { createHash } from "node:crypto";

const META_DATASET_ID = "1754326395565308";
const DEFAULT_SOURCE_URL = "https://www.brocosolutions.com/";

type MetaUserData = {
  em?: string;
  ph?: string;
  fbc?: string;
  fbp?: string;
  client_ip_address?: string;
  client_user_agent?: string;
};

export type MetaLeadInput = {
  eventId: string;
  eventSourceUrl?: string;
  email?: string;
  whatsapp?: string;
  fbc?: string;
  fbp?: string;
  clientIpAddress?: string;
  clientUserAgent?: string;
  value: number;
};

function sha256(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

export async function sendLeadToMeta(input: MetaLeadInput): Promise<void> {
  const token = process.env.META_CAPI_TOKEN;
  if (!token) return;

  const normalizedEmail = input.email?.trim().toLowerCase() ?? "";
  const normalizedPhone = input.whatsapp?.replace(/\D/g, "") ?? "";
  const fbc = input.fbc?.trim();
  const fbp = input.fbp?.trim();
  const clientIpAddress = input.clientIpAddress?.trim();
  const clientUserAgent = input.clientUserAgent?.trim();
  const userData: MetaUserData = {};

  if (normalizedEmail) userData.em = sha256(normalizedEmail);
  if (normalizedPhone) userData.ph = sha256(normalizedPhone);
  if (fbc) userData.fbc = fbc;
  if (fbp) userData.fbp = fbp;
  if (clientIpAddress) userData.client_ip_address = clientIpAddress;
  if (clientUserAgent) userData.client_user_agent = clientUserAgent;

  const body: {
    data: Array<{
      event_name: "Lead";
      event_time: number;
      event_id: string;
      event_source_url: string;
      action_source: "website";
      user_data: MetaUserData;
      custom_data: {
        value: number;
        currency: "USD";
      };
    }>;
    test_event_code?: string;
  } = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id: input.eventId,
        event_source_url: input.eventSourceUrl || DEFAULT_SOURCE_URL,
        action_source: "website",
        user_data: userData,
        custom_data: {
          value: input.value,
          currency: "USD",
        },
      },
    ],
  };

  if (process.env.META_TEST_EVENT_CODE) {
    body.test_event_code = process.env.META_TEST_EVENT_CODE;
  }

  const response = await fetch(
    `https://graph.facebook.com/v21.0/${META_DATASET_ID}/events?access_token=${encodeURIComponent(token)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Meta CAPI ${response.status}: ${errorBody}`);
  }
}
