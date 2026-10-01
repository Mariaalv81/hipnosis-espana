import fetch from "node-fetch";
import * as fs from "fs";
import * as path from "path";
import { google } from "googleapis";

export type VercelRequest = {
  method?: string;
  body?: unknown;
  headers?: Record<string, string | string[] | undefined>;
  query?: Record<string, string | string[] | undefined>;
  [key: string]: unknown;
};

export type VercelResponse = {
  status: (code: number) => VercelResponse;
  json: (body: unknown) => VercelResponse;
  send: (body: unknown) => VercelResponse;
  setHeader?: (name: string, value: string | string[]) => VercelResponse;
  [key: string]: unknown;
};

interface ContactRequestBody {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  website?: string;
  recaptchaToken?: string;
}

// Load .env.local into process.env for local dev (keeps production unchanged)
function loadLocalEnv() {
  try {
    const p = path.resolve(process.cwd(), ".env.local");
    if (!fs.existsSync(p)) return;
    const txt = fs.readFileSync(p, "utf8");
    for (const line of txt.split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Za-z0-9_]+)=(.*)$/);
      if (!m) continue;
      const k = m[1];
      if (!k) continue;
      let v = m[2] ?? "";
      // strip surrounding quotes if present
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
        v = v.slice(1, -1);
      }
      if (!process.env[k]) {
        process.env[k] = v;
      }
    }
  } catch (_e) {
    // ignore
  }
}

loadLocalEnv();

async function sendViaSendGrid({
  to,
  from,
  subject,
  text,
}: {
  to: string;
  from: string;
  subject: string;
  text: string;
}) {
  const apiKey = process.env["SENDGRID_API_KEY"];
  if (!apiKey) throw new Error("SENDGRID_API_KEY not set");

  const payload = {
    personalizations: [{ to: [{ email: to }] }],
    from: { email: from },
    subject,
    content: [{ type: "text/plain", value: text }],
  };

  const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`SendGrid error: ${res.status} ${body}`);
  }
}

async function appendToSheet({
  sheetId,
  name,
  email,
  phone,
  message,
}: {
  sheetId: string;
  name: string;
  email: string;
  phone?: string | undefined;
  message: string;
}) {
  const clientEmail = process.env["GOOGLE_SERVICE_ACCOUNT_EMAIL"];
  let privateKey = process.env["GOOGLE_PRIVATE_KEY"];

  if (!clientEmail || !privateKey) throw new Error("Google service account not configured");
  if (privateKey.includes("\\n")) privateKey = privateKey.replace(/\\n/g, "\n");

  const jwtClient = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  await jwtClient.authorize();

  const sheets = google.sheets({ version: "v4", auth: jwtClient });

  const values = [[new Date().toISOString(), name, email, phone ?? "", message]];

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "Sheet1!A:E",
    valueInputOption: "RAW",
    requestBody: { values },
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).send({ ok: false, error: "Method not allowed" });
  }

  try {
    const body = (req.body as ContactRequestBody | undefined) || {};
    const { name, email, phone, message, website, recaptchaToken } = body;

    // Honeypot: if website field (hidden) is filled, likely spam
    if (website) return res.status(400).json({ ok: false, error: "Spam detected" });

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    // Optional: verify reCAPTCHA if secret provided
    const recaptchaSecret = process.env["RECAPTCHA_SECRET"];
    if (recaptchaSecret) {
      if (!recaptchaToken) {
        return res.status(400).json({ ok: false, error: "Missing recaptcha token" });
      }

      const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${encodeURIComponent(recaptchaSecret)}&response=${encodeURIComponent(recaptchaToken)}`,
      });

      const verifyJson = (await verifyRes.json()) as { success?: boolean; score?: number };
      if (!verifyJson.success || (verifyJson.score !== undefined && verifyJson.score < 0.5)) {
        return res.status(400).json({ ok: false, error: "recaptcha verification failed" });
      }
    }

    // If Google Sheet configured, append row there
    const sheetId = process.env["SHEET_ID"];
    const hasGoogle = Boolean(
      sheetId && process.env["GOOGLE_SERVICE_ACCOUNT_EMAIL"] && process.env["GOOGLE_PRIVATE_KEY"],
    );
    console.log("env presence:", {
      sheetId: !sheetId,
      googleEmail: !process.env["GOOGLE_SERVICE_ACCOUNT_EMAIL"],
      googleKey: !process.env["GOOGLE_PRIVATE_KEY"],
      contactEmail: !process.env["CONTACT_EMAIL"],
      sendgridTo: !process.env["SENDGRID_TO"],
    });

    if (hasGoogle && sheetId) {
      await appendToSheet({ sheetId, name, email, phone, message });
      return res.status(200).json({ ok: true, via: "sheets" });
    }

    // Otherwise fallback to SendGrid
    const to = process.env["CONTACT_EMAIL"] || process.env["SENDGRID_TO"];
    const from =
      process.env["SENDGRID_FROM"] || process.env["CONTACT_EMAIL"] || "no-reply@example.com";

    if (!to) return res.status(500).json({ ok: false, error: "Recipient not configured" });

    const subject = `Contacto web: ${name}`;
    const text = `Nuevo mensaje desde la web:\n\nNombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone || "No indicado"}\n\nMensaje:\n${message}`;

    await sendViaSendGrid({ to, from, subject, text });

    return res.status(200).json({ ok: true, via: "sendgrid" });
  } catch (err: unknown) {
    console.error("send-email error", err);
    const message = err instanceof Error ? err.message : "Server error";
    return res.status(500).json({ ok: false, error: message });
  }
}
