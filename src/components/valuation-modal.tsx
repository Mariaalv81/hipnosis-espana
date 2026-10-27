import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock, Phone, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useI18n, type Lang } from "@/lib/i18n";
import { loadRecaptcha } from "@/lib/recaptcha";
import { trackLeadSubmission } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface ValuationModalProps {
  children?: React.ReactNode;
  triggerLabel?: string;
  triggerClassName?: string;
  source?: string;
  defaultModality?: string;
  onOpenChange?: (open: boolean) => void;
}

const modalTranslations = {
  es: {
    badge: "15 minutos sin coste ni compromiso",
    title: "Solicitar valoración de 15 minutos",
    desc: "Una breve llamada conmigo para conocer qué te gustaría mejorar, resolver tus dudas sobre el proceso terapéutico y valorar si este acompañamiento es adecuado para ti.",
    nameLabel: "Nombre y apellidos *",
    namePlaceholder: "Tu nombre completo",
    phoneLabel: "Teléfono / WhatsApp *",
    phonePlaceholder: "600 000 000",
    emailLabel: "Email *",
    emailPlaceholder: "tu@email.com",
    modalityLabel: "Modalidad preferida",
    modalityOptions: [
      { value: "Presencial en Sueca (Centro Sanar)", label: "Presencial en Sueca (Centro Sanar)" },
      { value: "Online (por videollamada)", label: "Online (por videollamada)" },
      { value: "Colaboración profesional / Clínica", label: "Colaboración profesional / Clínica" },
      { value: "A domicilio en Valencia ciudad", label: "A domicilio en Valencia ciudad" },
    ],
    timeLabel: "Horario para llamarte",
    timeOptions: [
      { value: "Mañanas (10:00 - 14:00)", label: "Mañanas (10:00 - 14:00)" },
      { value: "Tardes (16:00 - 20:00)", label: "Tardes (16:00 - 20:00)" },
      { value: "Indiferente / Por WhatsApp", label: "Indiferente / Por WhatsApp" },
    ],
    messageLabel: "¿Qué te gustaría trabajar o consultar?",
    messagePlaceholder:
      "Ej. Siento ansiedad por el trabajo, me cuesta dormir, o me gustaría saber si la terapia puede ayudarme con...",
    consent:
      "Acepto el tratamiento de mis datos de contacto para coordinar la llamada de valoración de 15 minutos.",
    submitting: "Enviando solicitud...",
    submit: "Solicitar llamada de 15 min (sin coste)",
    note: "Te responderé personalmente en menos de 24 horas para fijar la hora exacta de la llamada.",
    successTitle: "¡Solicitud recibida correctamente!",
    successText:
      "Muchas gracias por tu confianza. He recibido tus datos y te escribiré por WhatsApp o te llamaré en el horario indicado para coordinar con calma el día y la hora de nuestra conversación.",
    understood: "Entendido",
    error:
      "Ha habido un error al enviar tu solicitud. Por favor inténtalo de nuevo o contáctame por WhatsApp.",
    defaultTrigger: "Solicitar valoración de 15 min",
  },
  va: {
    badge: "15 minuts sense cost ni compromís",
    title: "Sol·licitar valoració de 15 minuts",
    desc: "Una breu telefonada amb mi per a conéixer què t'agradaria millorar, resoldre els teus dubtes sobre el procés terapèutic i valorar si este acompanyament és adequat per a tu.",
    nameLabel: "Nom i cognoms *",
    namePlaceholder: "El teu nom complet",
    phoneLabel: "Telèfon / WhatsApp *",
    phonePlaceholder: "600 000 000",
    emailLabel: "Email *",
    emailPlaceholder: "el_teu@email.com",
    modalityLabel: "Modalitat preferida",
    modalityOptions: [
      { value: "Presencial en Sueca (Centro Sanar)", label: "Despatx a Sueca (Centre Sanar)" },
      { value: "Online (por videollamada)", label: "En línia (per videotrucada)" },
      {
        value: "Colaboración profesional / Clínica",
        label: "Col·laboració professional / Clínica",
      },
      { value: "A domicilio en Valencia ciudad", label: "A domicili a València ciutat" },
    ],
    timeLabel: "Horari per a telefonar-te",
    timeOptions: [
      { value: "Mañanas (10:00 - 14:00)", label: "Matins (10:00 - 14:00)" },
      { value: "Tardes (16:00 - 20:00)", label: "Vesprades (16:00 - 20:00)" },
      { value: "Indiferente / Por WhatsApp", label: "Indiferent / Per WhatsApp" },
    ],
    messageLabel: "Què t'agradaria treballar o consultar?",
    messagePlaceholder:
      "Ex. Sente angoixa per la feina, em costa dormir, o voldria saber si la teràpia pot ajudar-me amb...",
    consent:
      "Accepte el tractament de les meues dades de contacte per a coordinar la telefonada de valoració de 15 minuts.",
    submitting: "Enviant sol·licitud...",
    submit: "Sol·licitar telefonada de 15 min (sense cost)",
    note: "Et respondré personalment en menys de 24 hores per a fixar l'hora exacta de la telefonada.",
    successTitle: "Sol·licitud rebuda correctament!",
    successText:
      "Moltes gràcies per la teua confiança. He rebut les teues dades i t'escriuré per WhatsApp o et telefonaré en l'horari indicat per a coordinar amb calma el dia i l'hora de la conversa.",
    understood: "Entés",
    error:
      "Hi ha hagut un error en enviar la teua sol·licitud. Torna a intentar-ho o contacta'm per WhatsApp.",
    defaultTrigger: "Sol·licitar valoració de 15 min",
  },
  en: {
    badge: "15 minutes free & no obligation",
    title: "Request free 15-minute consultation",
    desc: "A brief phone or video call with me to explore what you'd like to improve, answer your questions about the therapeutic process, and assess whether this accompaniment is the right fit for you.",
    nameLabel: "Full name *",
    namePlaceholder: "Your full name",
    phoneLabel: "Phone / WhatsApp *",
    phonePlaceholder: "+34 600 000 000",
    emailLabel: "Email *",
    emailPlaceholder: "your@email.com",
    modalityLabel: "Preferred format",
    modalityOptions: [
      { value: "Presencial en Sueca (Centro Sanar)", label: "In-person in Sueca (Centro Sanar)" },
      { value: "Online (por videollamada)", label: "Online (live video call)" },
      { value: "Colaboración profesional / Clínica", label: "Professional partnership / Clinic" },
      { value: "A domicilio en Valencia ciudad", label: "Home visit in Valencia city" },
    ],
    timeLabel: "Best time to call you",
    timeOptions: [
      { value: "Mañanas (10:00 - 14:00)", label: "Mornings (10:00 - 14:00)" },
      { value: "Tardes (16:00 - 20:00)", label: "Afternoons (16:00 - 20:00)" },
      { value: "Indiferente / Por WhatsApp", label: "Anytime / Via WhatsApp" },
    ],
    messageLabel: "What would you like to explore or ask?",
    messagePlaceholder:
      "e.g. I feel stressed at work, trouble sleeping, or would like to know if therapy can help with...",
    consent:
      "I consent to the processing of my contact details to arrange the 15-minute consultation.",
    submitting: "Sending request...",
    submit: "Request 15-min call (free)",
    note: "I will reply to you personally within 24 hours to schedule the exact time for our call.",
    successTitle: "Request received successfully!",
    successText:
      "Thank you for reaching out. I have received your details and will message you on WhatsApp or call you during your preferred time window to calmly set a date and time.",
    understood: "Understood",
    error:
      "An error occurred while sending your request. Please try again or reach out directly via WhatsApp.",
    defaultTrigger: "Request 15-min consultation",
  },
};

export function ValuationModal({
  children,
  triggerLabel,
  triggerClassName = "",
  source = "Web - Solicitud Valoración 15 min",
  defaultModality = "Presencial en Sueca (Centro Sanar)",
  onOpenChange,
}: ValuationModalProps) {
  const { lang } = useI18n();
  const m = modalTranslations[(lang as Lang) in modalTranslations ? (lang as Lang) : "es"];
  const resolvedTrigger = triggerLabel ?? m.defaultTrigger;

  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) {
      setTimeout(() => {
        setSubmitted(false);
        setError(null);
      }, 300);
    }
    onOpenChange?.(nextOpen);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      modality: String(fd.get("modality") ?? defaultModality).trim(),
      preferredTime: String(fd.get("preferredTime") ?? "Indiferente").trim(),
      message: String(fd.get("message") ?? "").trim(),
      website: String(fd.get("website") ?? "").trim(), // honeypot
      recaptchaToken: undefined as string | undefined,
    };

    const fullMessage = [
      "Solicitud de Valoración Previa de 15 minutos (sin coste):",
      "",
      `Nombre: ${data.name}`,
      `Teléfono: ${data.phone}`,
      `Email: ${data.email}`,
      `Modalidad preferida: ${data.modality}`,
      `Horario preferido para la llamada: ${data.preferredTime}`,
      "",
      "Motivo / Consulta:",
      data.message || "Sin comentarios adicionales",
    ].join("\n");

    try {
      const siteKey = import.meta.env["VITE_RECAPTCHA_SITE_KEY"] as string | undefined;
      if (siteKey) {
        try {
          await loadRecaptcha(siteKey);
          data.recaptchaToken = await window.grecaptcha?.execute(siteKey, {
            action: "valuation_request",
          });
        } catch (err) {
          console.warn("reCAPTCHA unavailable, continuing without token", err);
        }
      }

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          source: source,
          modality: data.modality,
          specificDetail: `Llamada 15 min · ${data.preferredTime}`,
          phone: data.phone,
          email: data.email,
          message: fullMessage,
          website: data.website,
          recaptchaToken: data.recaptchaToken,
        }),
      });

      if (!res.ok) throw new Error("Error al enviar la solicitud");

      trackLeadSubmission(source);
      setSubmitted(true);
    } catch (err) {
      console.error("Valuation request error:", err);
      setError(m.error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children ?? (
          <button
            type="button"
            className={cn(
              "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring",
              triggerClassName,
            )}
          >
            <Clock className="size-4 shrink-0" />
            <span>{resolvedTrigger}</span>
          </button>
        )}
      </DialogTrigger>

      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-lg p-6 sm:p-8">
        {!submitted ? (
          <>
            <DialogHeader className="text-left space-y-2">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary w-fit">
                <Sparkles className="size-3.5" />
                <span>{m.badge}</span>
              </div>
              <DialogTitle className="font-serif text-2xl font-normal text-foreground">
                {m.title}
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {m.desc}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-left">
              {/* Honeypot anti-spam */}
              <input
                type="text"
                name="website"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid gap-1.5">
                <label
                  htmlFor="val-name"
                  className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  {m.nameLabel}
                </label>
                <input
                  id="val-name"
                  name="name"
                  required
                  placeholder={m.namePlaceholder}
                  className="rounded-xl border border-input bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="grid gap-1.5">
                  <label
                    htmlFor="val-phone"
                    className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {m.phoneLabel}
                  </label>
                  <input
                    id="val-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder={m.phonePlaceholder}
                    className="rounded-xl border border-input bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div className="grid gap-1.5">
                  <label
                    htmlFor="val-email"
                    className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {m.emailLabel}
                  </label>
                  <input
                    id="val-email"
                    name="email"
                    type="email"
                    required
                    placeholder={m.emailPlaceholder}
                    className="rounded-xl border border-input bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="grid gap-1.5">
                  <label
                    htmlFor="val-modality"
                    className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {m.modalityLabel}
                  </label>
                  <select
                    id="val-modality"
                    name="modality"
                    defaultValue={defaultModality}
                    className="rounded-xl border border-input bg-card px-3.5 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring cursor-pointer"
                  >
                    {m.modalityOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-1.5">
                  <label
                    htmlFor="val-time"
                    className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {m.timeLabel}
                  </label>
                  <select
                    id="val-time"
                    name="preferredTime"
                    defaultValue="Mañanas (10:00 - 14:00)"
                    className="rounded-xl border border-input bg-card px-3.5 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring cursor-pointer"
                  >
                    {m.timeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-1.5">
                <label
                  htmlFor="val-message"
                  className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  {m.messageLabel}
                </label>
                <textarea
                  id="val-message"
                  name="message"
                  rows={3}
                  placeholder={m.messagePlaceholder}
                  className="rounded-xl border border-input bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                />
              </div>

              <label className="flex items-start gap-2.5 text-xs text-muted-foreground cursor-pointer pt-1">
                <input type="checkbox" required className="mt-0.5 rounded border-input" />
                <span>{m.consent}</span>
              </label>

              {error && (
                <p className="rounded-lg bg-destructive/10 border border-destructive/20 p-3 text-xs text-destructive">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                <Phone className="size-4" />
                <span>{submitting ? m.submitting : m.submit}</span>
              </button>

              <p className="text-center text-[0.72rem] text-muted-foreground">{m.note}</p>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CheckCircle2 className="size-8" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-foreground">{m.successTitle}</h3>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
              {m.successText}
            </p>
            <button
              type="button"
              onClick={() => handleOpenChange(false)}
              className="mt-6 inline-flex rounded-full bg-primary px-8 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              {m.understood}
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
