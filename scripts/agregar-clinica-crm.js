#!/usr/bin/env node

/**
 * Script CLI: Registrar Clínica o Centro B2B en Google Sheets CRM
 * Uso rápido:
 *   node scripts/agregar-clinica-crm.js --centro "Centro Nutrición Sueca" --contacto "Dra. Carmen" --especialidad "Nutrición" --telefono "612345678" --canal "B2B - Instagram DM Nutrición"
 */

import * as fs from "fs";
import * as path from "path";
import { google } from "googleapis";

function loadEnv() {
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
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
        v = v.slice(1, -1);
      }
      if (!process.env[k]) process.env[k] = v;
    }
  } catch (_e) {}
}

loadEnv();

function getArg(name) {
  const idx = process.argv.indexOf(`--${name}`);
  if (idx !== -1 && process.argv[idx + 1]) {
    return process.argv[idx + 1].trim();
  }
  return "";
}

async function main() {
  const args = process.argv.slice(2);
  if (args.includes("--help") || args.length === 0) {
    console.log(`
🏥 Uso del Script de Alta de Clínicas B2B en el CRM:

  node scripts/agregar-clinica-crm.js \\
    --centro "Nombre de la Clínica o Centro" \\
    --contacto "Persona de Contacto o Director/a" \\
    --especialidad "Nutrición y Dietética | Fisioterapia | Odontología | etc." \\
    --telefono "6XXXXXXXX" \\
    --email "contacto@clinica.es" \\
    --canal "B2B - Instagram DM Nutrición" \\
    --notas "Primer contacto por IG tras post sobre adherencia"

Parámetros opcionales:
    --prioridad "🔥 A - Alta" (por defecto)
    --estado "🟢 Nuevo (Por contactar)" (por defecto)
    --tipo "Atención In Situ (en centro)"
    `);
    process.exit(0);
  }

  const centro = getArg("centro") || "Centro / Clínica por concretar";
  const contacto = getArg("contacto") || "";
  const especialidad = getArg("especialidad") || "Salud y Bienestar";
  const telefono = getArg("telefono") || "";
  const email = getArg("email") || "";
  const canal = getArg("canal") || "B2B - Instagram DM";
  const notas = getArg("notas") || "Prospecto identificado";
  const prioridad = getArg("prioridad") || "🔥 A - Alta";
  const estado = getArg("estado") || "🟢 Nuevo (Por contactar)";
  const tipo = getArg("tipo") || "Atención In Situ (en centro)";

  const cleanDigits = telefono.replace(/[^\d]/g, "");
  let waNumber = cleanDigits;
  if (cleanDigits.length === 9 && (cleanDigits.startsWith("6") || cleanDigits.startsWith("7"))) {
    waNumber = "34" + cleanDigits;
  } else if (cleanDigits.startsWith("34") && cleanDigits.length === 11) {
    waNumber = cleanDigits;
  }
  const whatsappFormula = waNumber ? `=HYPERLINK("https://wa.me/${waNumber}"; "💬 Abrir WhatsApp")` : "";

  const now = new Date();
  const dateFormatted = new Intl.DateTimeFormat("es-ES", {
    timeZone: "Europe/Madrid",
    dateStyle: "short",
  }).format(now);

  console.log("-----------------------------------------");
  console.log("📝 Resumen de la Clínica a Registrar:");
  console.log("• Centro:", centro);
  console.log("• Contacto:", contacto);
  console.log("• Especialidad:", especialidad);
  console.log("• Teléfono:", telefono);
  console.log("• WhatsApp:", waNumber ? `https://wa.me/${waNumber}` : "No disponible");
  console.log("• Canal:", canal);
  console.log("• Estado:", estado);
  console.log("-----------------------------------------");

  const clientEmail = process.env["GOOGLE_SERVICE_ACCOUNT_EMAIL"];
  let privateKey = process.env["GOOGLE_PRIVATE_KEY"];
  const sheetId = process.env["SHEET_ID"];

  if (!clientEmail || !privateKey || !sheetId) {
    console.error("⚠️ Error: Faltan credenciales de Google Sheets en .env.local");
    process.exit(1);
  }

  if (privateKey.includes("\\n")) {
    privateKey = privateKey.replace(/\\n/g, "\n");
  }

  try {
    const jwt = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    await jwt.authorize();
    const sheets = google.sheets({ version: "v4", auth: jwt });

    // Fila estructurada de 12 columnas:
    // Prioridad | Estado | Canal | Centro | Contacto | Especialidad | Teléfono | WhatsApp | Email | Tipo | Fecha | Notas
    const rowValues = [
      prioridad,
      estado,
      canal,
      centro,
      contacto,
      especialidad,
      telefono,
      whatsappFormula,
      email,
      tipo,
      dateFormatted,
      notas,
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: `'Colaboradores'!A1`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [rowValues] },
    });

    console.log("✅ ¡Clínica registrada con éxito en la pestaña 'Colaboradores'!");
  } catch (err) {
    console.error("❌ Error al sincronizar con Google Sheets:", err.message);
    process.exit(1);
  }
}

main();
