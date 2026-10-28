// Anti-spam protection: phone number encoded in base64 to protect from automated crawlers and harvesters
export const OBFUSCATED_WHATSAPP_PHONE = "MzQ3MTEyNzI4NTM=";

export const siteSettings = {
  calendarScheduleUrl: "",
  contactEmail: "maria.a.cabo@gmail.com",
  centerAddress: "Sueca (Centro Sanar) · Sesiones presenciales y online",
  smokingProgramEmail: "maria.a.cabo@gmail.com",
  smokingProgramEmailBody:
    "Quiero dejar de fumar.\n\nMi nombre: \nMi teléfono: \nModalidad (Sueca / A domicilio en Valencia / Online): \nMejor horario para la entrevista de 15 minutos: ",
  instagramUrl: "https://www.instagram.com/mariacabo_terapeuta/",
  instagramHandle: "@mariacabo_terapeuta",
  whatsappDefaultMessage:
    "Hola María, he visto tu web y me gustaría consultarte sobre una sesión de terapia...",
};

/**
 * Returns the WhatsApp click-to-chat URL safely decoding the obfuscated number at client runtime
 */
export function getWhatsAppUrl(customText?: string): string {
  try {
    let rawDigits = "";
    if (typeof window !== "undefined" && typeof window.atob === "function") {
      rawDigits = window.atob(OBFUSCATED_WHATSAPP_PHONE);
    } else if (typeof atob === "function") {
      rawDigits = atob(OBFUSCATED_WHATSAPP_PHONE);
    } else if (typeof Buffer !== "undefined") {
      rawDigits = Buffer.from(OBFUSCATED_WHATSAPP_PHONE, "base64").toString("utf-8");
    }
    if (!rawDigits) return "#";
    const msg = encodeURIComponent(customText || siteSettings.whatsappDefaultMessage);
    return `https://wa.me/${rawDigits}?text=${msg}`;
  } catch {
    return "#";
  }
}
