// Anti-spam protection: phone number encoded in base64 to protect from automated crawlers and harvesters
export const OBFUSCATED_WHATSAPP_PHONE = "MzQ2NTQ4NjUyNTM=";

export const siteSettings = {
  calendarScheduleUrl:
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2QapkMqcpGMND3W8pdGkUjG-QYMfHYue-CgTFVCy50llHRrsr4TZ8i0M_ZzfMRZTqoy1QvtLQJ?gv=true",
  contactEmail: "maria.a.cabo@gmail.com",
  centerAddress: "Sueca (Centro Sanar) · A domicilio en Valencia ciudad · Sesiones online",
  smokingProgramEmail: "maria.a.cabo@gmail.com",
  smokingProgramEmailBody:
    "Quiero dejar de fumar.\n\nMi nombre: \nMi teléfono: \nModalidad (Sueca / A domicilio en Valencia / Online): \nMejor horario para la entrevista de 20 minutos: ",
  instagramUrl: "https://www.instagram.com/mariacabo_hipnosis/",
  instagramHandle: "@mariacabo_hipnosis",
  whatsappDefaultMessage:
    "Hola María, he visto tu web y me gustaría consultarte sobre una sesión de hipnosis...",
};

/**
 * Returns the WhatsApp click-to-chat URL safely decoding the obfuscated number at client runtime
 */
export function getWhatsAppUrl(customText?: string): string {
  if (typeof window === "undefined") return "#";
  try {
    const rawDigits = window.atob(OBFUSCATED_WHATSAPP_PHONE);
    const msg = encodeURIComponent(customText || siteSettings.whatsappDefaultMessage);
    return `https://wa.me/${rawDigits}?text=${msg}`;
  } catch {
    return "#";
  }
}

