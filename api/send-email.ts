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
  source?: string;
  modality?: string;
  specificDetail?: string;
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

function parseLeadData(body: ContactRequestBody) {
  let rawName = (body.name || "").trim();
  let source = (body.source || "").trim();
  let modality = (body.modality || "").trim();
  let specificDetail = (body.specificDetail || "").trim();
  const rawMessage = (body.message || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();

  // If source not explicitly provided, check if name has [Tag]
  const tagMatch = rawName.match(/\[(.*?)\]/);
  if (!source && tagMatch && tagMatch[1]) {
    source = `Web - ${tagMatch[1].trim()}`;
    rawName = rawName.replace(/\[(.*?)\]/, "").trim();
  }

  // Extract from message if present
  if (!source) {
    const headerMatch = rawMessage.match(
      /Consulta \/ Solicitud(?: de entrevista previa.*?)?:\s*(.+)/i,
    );
    if (headerMatch && headerMatch[1]) {
      source = `Web - ${headerMatch[1].trim()}`;
    } else {
      source = "Web - Contacto General";
    }
  }

  if (!modality) {
    const modMatch = rawMessage.match(/Modalidad(?:\s+preferida)?:\s*([^\n\r]+)/i);
    if (modMatch && modMatch[1]) {
      modality = modMatch[1].trim();
    }
  }

  if (!specificDetail) {
    const detailMatch = rawMessage.match(
      /(?:Detalle \/ Situación|Momentos de ansiedad|Consumo de tabaco):\s*([^\n\r]+)/i,
    );
    if (detailMatch && detailMatch[1]) {
      specificDetail = detailMatch[1].trim();
    }
  }

  // If specificDetail is not explicitly provided, or if this is general contact, keep it blank
  if (source === "Web - Contacto General" || !specificDetail) {
    specificDetail = specificDetail || "";
  }

  // Clean phone number for WhatsApp link
  const cleanDigits = phone.replace(/[^\d+]/g, "").replace(/^\+/, "");
  let whatsappPhone = cleanDigits;
  if (cleanDigits.length === 9 && (cleanDigits.startsWith("6") || cleanDigits.startsWith("7"))) {
    whatsappPhone = `34${cleanDigits}`;
  } else if (cleanDigits.startsWith("34") && cleanDigits.length === 11) {
    whatsappPhone = cleanDigits;
  }
  const whatsappUrl = whatsappPhone ? `https://wa.me/${whatsappPhone}` : "";

  return {
    name: rawName,
    email,
    phone,
    whatsappUrl,
    source,
    modality: modality || "Por concretar",
    specificDetail: specificDetail || "", // Empty if reason unknown
    message: rawMessage,
  };
}

function parseCorporateDetails(rawName: string, rawMessage: string) {
  let company = "";
  let contact = "";
  let role = "";
  let employees = "";
  let objective = "";
  let format = "";
  let participants = "";
  let notes = "";

  const compMatch = rawMessage.match(/Empresa:\s*([^\n\r]+)/i);
  if (compMatch && compMatch[1]) company = compMatch[1].trim();

  const contactMatch = rawMessage.match(/Persona de contacto:\s*([^\n\r]+)/i);
  if (contactMatch && contactMatch[1]) contact = contactMatch[1].trim();

  const roleMatch = rawMessage.match(/Cargo:\s*([^\n\r]+)/i);
  if (roleMatch && roleMatch[1]) role = roleMatch[1].trim();

  const empMatch = rawMessage.match(/Nº de empleados:\s*([^\n\r]+)/i);
  if (empMatch && empMatch[1]) employees = empMatch[1].trim();

  const objMatch = rawMessage.match(/Objetivo:\s*([^\n\r]+)/i);
  if (objMatch && objMatch[1]) objective = objMatch[1].trim();

  const fmtMatch = rawMessage.match(/Formato de interés:\s*([^\n\r]+)/i);
  if (fmtMatch && fmtMatch[1]) format = fmtMatch[1].trim();

  const partMatch = rawMessage.match(/Participantes previstos:\s*([^\n\r]+)/i);
  if (partMatch && partMatch[1]) participants = partMatch[1].trim();

  const msgMatch = rawMessage.match(/Mensaje:\s*([\s\S]*)$/i);
  if (msgMatch && msgMatch[1]) notes = msgMatch[1].trim();

  if (!company && rawName.includes(" · ")) {
    const parts = rawName.split(" · ");
    contact = parts[0]?.trim() || "";
    company = parts[1]?.trim() || "";
  } else if (!contact && rawName) {
    contact = rawName;
  }

  const cleanEmployees = employees.replace(/\s*empleados?/i, "").trim();
  const cleanParticipants = participants.replace(/\s*participantes?/i, "").trim();

  const employeesSummary = [
    cleanEmployees ? `${cleanEmployees} empleados` : "",
    cleanParticipants ? `${cleanParticipants} participantes` : "",
  ]
    .filter(Boolean)
    .join(" · ");

  const objectiveSummary = [objective, format].filter(Boolean).join(" · ");

  return {
    company: company || "Empresa por concretar",
    contact: contact || "Persona de contacto",
    role: role || "",
    employeesSummary,
    objectiveSummary,
    notes: notes || rawMessage,
  };
}

async function sendViaSendGrid({
  to,
  from,
  subject,
  text,
  html,
}: {
  to: string;
  from: string;
  subject: string;
  text: string;
  html?: string;
}) {
  const apiKey = process.env["SENDGRID_API_KEY"];
  if (!apiKey) throw new Error("SENDGRID_API_KEY not set");

  const content: { type: string; value: string }[] = [{ type: "text/plain", value: text }];
  if (html) {
    content.push({ type: "text/html", value: html });
  }

  const payload = {
    personalizations: [{ to: [{ email: to }] }],
    from: { email: from },
    subject,
    content,
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
  lead,
}: {
  sheetId: string;
  lead: ReturnType<typeof parseLeadData>;
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

  // Resolve target tab name
  const isCollaboratorLead =
    lead.source === "Colaboradores / Profesionales" ||
    lead.source.toLowerCase().includes("colaborador") ||
    lead.source.toLowerCase().includes("profesional");

  const isEmpresasLead =
    lead.source === "Web - Empresas" ||
    lead.source.toLowerCase().includes("empresa") ||
    lead.source.toLowerCase().includes("corporate") ||
    lead.source.toLowerCase().includes("b2b");

  let tabName = process.env["SHEET_TAB_NAME"] || "";
  let isCollaboratorTab = false;
  let isEmpresasTab = false;
  let sheetTitles: string[] = [];

  try {
    const meta = await sheets.spreadsheets.get({
      spreadsheetId: sheetId,
      fields: "sheets.properties.title",
    });
    sheetTitles = (meta.data.sheets || []).map((s) => s.properties?.title || "");

    if (isCollaboratorLead) {
      tabName = sheetTitles.find((t) => t.toLowerCase().includes("colaborador")) || "Colaboradores";
      isCollaboratorTab = true;
    } else if (isEmpresasLead) {
      tabName = sheetTitles.find((t) => t.toLowerCase().includes("empresa")) || "Empresas";
      isEmpresasTab = true;
    } else if (!tabName) {
      // Private client leads (particulares)
      tabName =
        sheetTitles.find((t) => t === "Leads Clientes" || t === "Clientes") ||
        sheetTitles.find((t) => t.includes("Cliente") || t.includes("Leads")) ||
        sheetTitles[0] ||
        "Leads Clientes";
    }

    // Auto-create tab if missing in spreadsheet
    if (!sheetTitles.includes(tabName)) {
      try {
        await sheets.spreadsheets.batchUpdate({
          spreadsheetId: sheetId,
          requestBody: {
            requests: [
              {
                addSheet: {
                  properties: { title: tabName },
                },
              },
            ],
          },
        });
        sheetTitles.push(tabName);
      } catch (_e) {
        // Tab might already exist or concurrent request
      }
    }
  } catch (_e) {
    if (!tabName) {
      if (isCollaboratorLead) {
        tabName = "Colaboradores";
        isCollaboratorTab = true;
      } else if (isEmpresasLead) {
        tabName = "Empresas";
        isEmpresasTab = true;
      } else {
        tabName = "Leads Clientes";
      }
    }
  }

  // Check existing header row to determine column structure
  let colCount = 0;
  try {
    const headRes = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: `'${tabName}'!1:1`,
    });
    const headerRow = headRes.data.values?.[0] as string[] | undefined;
    colCount = headerRow ? headerRow.length : 0;
  } catch (_e) {
    colCount = 0;
  }

  // Current date formatted in Spanish timezone (Europe/Madrid)
  const now = new Date();
  const dateFormatted = new Intl.DateTimeFormat("es-ES", {
    timeZone: "Europe/Madrid",
    dateStyle: "short",
    timeStyle: "short",
  }).format(now);

  // If sheet is completely empty, initialize with proper headers
  if (colCount === 0) {
    let defaultHeaders: string[] = [];
    if (isCollaboratorTab) {
      defaultHeaders = [
        "Prioridad",
        "Estado",
        "Profesional / Centro",
        "Localidad",
        "Especialidad",
        "Teléfono",
        "WhatsApp Directo",
        "Email",
        "Tipo Colaboración",
        "Próximo seguimiento",
        "Nº Derivaciones",
        "Notas y Acuerdos",
      ];
    } else if (isEmpresasLead || isEmpresasTab) {
      defaultHeaders = [
        "Fecha y Hora",
        "Estado",
        "Empresa",
        "Persona de Contacto",
        "Cargo / Rol",
        "Teléfono",
        "WhatsApp Directo",
        "Email",
        "Empleados / Participantes",
        "Objetivo / Formato",
        "Mensaje / Necesidad",
        "Próxima Acción / Notas",
      ];
    } else {
      defaultHeaders = [
        "Fecha y Hora",
        "Estado",
        "Canal / Origen",
        "Nombre",
        "Teléfono",
        "WhatsApp Directo",
        "Email",
        "Modalidad",
        "Motivo / Síntomas",
        "Mensaje / Notas",
        "Próxima Acción",
        "Historial / Pagos",
      ];
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: `'${tabName}'!A1`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [defaultHeaders] },
    });
    colCount = defaultHeaders.length;
  }

  let rowValues: string[];
  let endCol = "L";

  if (isCollaboratorTab && colCount === 12) {
    // Clean 12-column Colaboradores layout:
    // Prioridad | Estado | Profesional / Centro | Localidad | Especialidad | Teléfono | WhatsApp Directo | Email | Tipo Colaboración | Próximo seguimiento | Nº Derivaciones | Notas y Acuerdos
    const cleanPersonName = lead.name.replace(/\s*\(.*?\)$/, "").trim();
    let profession = lead.specificDetail;
    let center = "";
    if (lead.specificDetail && lead.specificDetail.includes(" · ")) {
      const parts = lead.specificDetail.split(" · ");
      profession = parts[0]?.trim() || "";
      center = parts[1]?.trim() || "";
    }

    rowValues = [
      "🔥 A",
      "🟢 Nuevo (Web)",
      center ? `${cleanPersonName} — ${center}` : cleanPersonName,
      "",
      profession,
      lead.phone,
      lead.whatsappUrl ? `=HYPERLINK("${lead.whatsappUrl}"; "💬 Chat")` : "",
      lead.email,
      "A definir",
      dateFormatted,
      "0",
      lead.message,
    ];
    endCol = "L";
  } else if (isCollaboratorTab && colCount >= 20) {
    // Colaboradores 24-column layout:
    const cleanPersonName = lead.name.replace(/\s*\(.*?\)$/, "").trim();
    let profession = lead.specificDetail;
    let center = "";
    if (lead.specificDetail && lead.specificDetail.includes(" · ")) {
      const parts = lead.specificDetail.split(" · ");
      profession = parts[0]?.trim() || "";
      center = parts[1]?.trim() || "";
    }

    rowValues = [
      "A", // Prioridad
      cleanPersonName, // Nombre
      "", // Apellidos
      center, // Centro
      profession, // Profesión
      "", // Localidad
      lead.email, // Email
      lead.phone, // Teléfono
      lead.whatsappUrl ? `=HYPERLINK("${lead.whatsappUrl}"; "💬 WhatsApp")` : "", // WhatsApp
      "", // Web
      "Web / Formulario Profesionales", // Fuente
      dateFormatted, // Primer contacto
      "Formulario Web", // Canal
      "Sí (Inbound)", // Respondió
      dateFormatted, // Fecha respuesta
      "Pendiente", // Reunión
      "", // Fecha reunión
      "A definir", // Tipo colaboración
      "", // Charla propuesta
      "", // Primera derivación
      "0", // Nº derivaciones
      dateFormatted, // Próximo seguimiento
      "⚪ Prospecto (Nuevo formulario web)", // Estado
      lead.message, // Notas
    ];
    endCol = "X";
  } else if (isEmpresasTab || isEmpresasLead) {
    // 12-column Empresas layout:
    // Fecha y Hora | Estado | Empresa | Persona de Contacto | Cargo / Rol | Teléfono | WhatsApp Directo | Email | Empleados / Participantes | Objetivo / Formato | Mensaje / Necesidad | Próxima Acción / Notas
    const corp = parseCorporateDetails(lead.name, lead.message);
    rowValues = [
      dateFormatted,
      "🟢 1. Solicitud Recibida",
      corp.company,
      corp.contact,
      corp.role,
      lead.phone,
      lead.whatsappUrl ? `=HYPERLINK("${lead.whatsappUrl}"; "💬 Chat")` : "",
      lead.email,
      corp.employeesSummary,
      corp.objectiveSummary,
      corp.notes,
      "Llamada de valoración / Enviar propuesta",
    ];
    endCol = "L";
  } else if (
    colCount <= 5 &&
    !sheetTitles.some((t) => t.includes("Cliente") || t.includes("Leads"))
  ) {
    // Legacy 5-column fallback only if no client tab exists
    rowValues = [
      dateFormatted,
      lead.name,
      lead.email,
      lead.phone,
      `[${lead.source} | ${lead.modality}]\n${lead.message}`,
    ];
    endCol = "E";
  } else {
    // Solo CRM 12-column layout (Leads Clientes / Privados)
    // NOTE: lead.specificDetail is intentionally empty "" if motive is not specified or unknown!
    rowValues = [
      dateFormatted,
      "🟢 1. Nuevo",
      lead.source,
      lead.name,
      lead.phone,
      lead.whatsappUrl ? `=HYPERLINK("${lead.whatsappUrl}"; "💬 Abrir WhatsApp")` : "",
      lead.email,
      lead.modality,
      lead.specificDetail || "", // Motivo / Síntomas: blank if unknown
      lead.message,
      "Contactar por WhatsApp / Email",
      "",
    ];
    endCol = "L";
  }

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: `'${tabName}'!A:${endCol}`,
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [rowValues] },
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).send({ ok: false, error: "Method not allowed" });
  }

  try {
    const body = (req.body as ContactRequestBody | undefined) || {};
    const { name, email, message, website, recaptchaToken } = body;

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

    const lead = parseLeadData(body);

    const sheetId = process.env["SHEET_ID"];
    const hasGoogle = Boolean(
      sheetId && process.env["GOOGLE_SERVICE_ACCOUNT_EMAIL"] && process.env["GOOGLE_PRIVATE_KEY"],
    );

    let sheetSaved = false;
    let sheetError: string | null = null;
    if (hasGoogle && sheetId) {
      try {
        await appendToSheet({ sheetId, lead });
        sheetSaved = true;
      } catch (err) {
        console.error("appendToSheet error:", err);
        sheetError = err instanceof Error ? err.message : String(err);
      }
    }

    // Send email alert to María A. Cabo via SendGrid if configured
    let emailSent = false;
    let emailError: string | null = null;
    const to = process.env["CONTACT_EMAIL"] || process.env["SENDGRID_TO"];
    const from =
      process.env["SENDGRID_FROM"] || process.env["CONTACT_EMAIL"] || "no-reply@mariacabo.com";
    const apiKey = process.env["SENDGRID_API_KEY"];

    if (to && apiKey) {
      try {
        const isCorp =
          lead.source === "Web - Empresas" ||
          lead.source.toLowerCase().includes("empresa") ||
          lead.source.toLowerCase().includes("corporate");
        const isCollab =
          lead.source === "Colaboradores / Profesionales" ||
          lead.source.toLowerCase().includes("colaborador") ||
          lead.source.toLowerCase().includes("profesional");

        let subject = `🟢 NUEVO LEAD CLIENTE: ${lead.name} · ${lead.source}`;
        let badgeText = "Nuevo Cliente";
        let badgeColor = "#15803d"; // Green

        if (isCorp) {
          const corp = parseCorporateDetails(lead.name, lead.message);
          subject = `🏢 NUEVO LEAD EMPRESA: ${corp.company} · ${corp.contact}`;
          badgeText = "Empresa / B2B";
          badgeColor = "#064e3b"; // Dark green / emerald
        } else if (isCollab) {
          subject = `🩺 NUEVO COLABORADOR: ${lead.name}`;
          badgeText = "Colaborador Profesional";
          badgeColor = "#0f766e"; // Teal
        }

        const displayDetail = lead.specificDetail || "No especificado / Consulta general";

        const text = [
          `¡Nuevo contacto recibido en la web!`,
          ``,
          `Tipo / Categoría: ${badgeText}`,
          `Nombre / Contacto: ${lead.name}`,
          `Origen / Servicio: ${lead.source}`,
          `Modalidad / Formato: ${lead.modality}`,
          `Teléfono: ${lead.phone || "No indicado"}`,
          `WhatsApp: ${lead.whatsappUrl || "No disponible"}`,
          `Email: ${lead.email}`,
          `Motivo / Detalle: ${displayDetail}`,
          ``,
          `Mensaje completo:`,
          lead.message,
        ].join("\n");

        const html = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background: #fafafa;">
            <div style="display: inline-block; background: ${badgeColor}; color: #ffffff; font-size: 11px; font-weight: bold; padding: 4px 10px; border-radius: 999px; text-transform: uppercase; margin-bottom: 12px;">${badgeText}</div>
            <h2 style="margin: 0 0 16px; color: #111827; font-size: 22px;">${lead.name}</h2>
            <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
              <p style="margin: 0 0 8px;"><strong>🎯 Canal / Servicio:</strong> ${lead.source}</p>
              <p style="margin: 0 0 8px;"><strong>📍 Modalidad:</strong> ${lead.modality}</p>
              <p style="margin: 0 0 8px;"><strong>📞 Teléfono:</strong> <a href="tel:${lead.phone}" style="color: #2563eb;">${lead.phone || "No indicado"}</a></p>
              <p style="margin: 0 0 8px;"><strong>✉️ Email:</strong> <a href="mailto:${lead.email}" style="color: #2563eb;">${lead.email}</a></p>
              <p style="margin: 0;"><strong>📝 Motivo:</strong> ${displayDetail}</p>
            </div>
            ${
              lead.whatsappUrl
                ? `<div style="margin-bottom: 20px;"><a href="${lead.whatsappUrl}" style="display: inline-block; background: #25D366; color: #ffffff; text-decoration: none; font-weight: bold; padding: 12px 20px; border-radius: 999px; font-size: 14px;">💬 Responder por WhatsApp ahora</a></div>`
                : ""
            }
            <div style="background: #f3f4f6; border-radius: 8px; padding: 12px; font-size: 13px; color: #374151; white-space: pre-wrap;"><strong>Mensaje completo:</strong><br>${lead.message}</div>
          </div>
        `;

        await sendViaSendGrid({ to, from, subject, text, html });
        emailSent = true;
      } catch (err) {
        console.error("sendViaSendGrid error:", err);
        emailError = err instanceof Error ? err.message : String(err);
      }
    }

    // If at least one channel worked (or fallback is ready), consider success
    if (sheetSaved || emailSent) {
      return res.status(200).json({
        ok: true,
        sheets: sheetSaved,
        email: emailSent,
      });
    }

    // If neither was configured or both failed
    if (sheetError || emailError) {
      return res.status(500).json({
        ok: false,
        error: sheetError || emailError || "Error al procesar el mensaje",
      });
    }

    return res.status(200).json({ ok: true, via: "received" });
  } catch (err: unknown) {
    console.error("send-email unexpected error", err);
    const message = err instanceof Error ? err.message : "Server error";
    return res.status(500).json({ ok: false, error: message });
  }
}
