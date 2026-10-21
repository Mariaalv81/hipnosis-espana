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

export function ValuationModal({
  children,
  triggerLabel = "Solicitar valoración de 15 min",
  triggerClassName = "",
  source = "Web - Solicitud Valoración 15 min",
  defaultModality = "Presencial en Sueca (Centro Sanar)",
  onOpenChange,
}: ValuationModalProps) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) {
      // Reset state after close
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
      setError("Ha habido un error al enviar tu solicitud. Por favor inténtalo de nuevo o contáctame por WhatsApp.");
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
              triggerClassName
            )}
          >
            <Clock className="size-4 shrink-0" />
            <span>{triggerLabel}</span>
          </button>
        )}
      </DialogTrigger>

      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-lg p-6 sm:p-8">
        {!submitted ? (
          <>
            <DialogHeader className="text-left space-y-2">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary w-fit">
                <Sparkles className="size-3.5" />
                <span>15 minutos sin coste ni compromiso</span>
              </div>
              <DialogTitle className="font-serif text-2xl font-normal text-foreground">
                Solicitar valoración de 15 minutos
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Una breve llamada conmigo para conocer qué te gustaría mejorar, resolver tus dudas sobre la hipnosis y valorar si este acompañamiento es adecuado para ti.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-left">
              {/* Honeypot anti-spam */}
              <input type="text" name="website" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

              <div className="grid gap-1.5">
                <label htmlFor="val-name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Nombre y apellidos *
                </label>
                <input
                  id="val-name"
                  name="name"
                  required
                  placeholder="Tu nombre completo"
                  className="rounded-xl border border-input bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="grid gap-1.5">
                  <label htmlFor="val-phone" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    id="val-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="600 000 000"
                    className="rounded-xl border border-input bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div className="grid gap-1.5">
                  <label htmlFor="val-email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Email *
                  </label>
                  <input
                    id="val-email"
                    name="email"
                    type="email"
                    required
                    placeholder="tu@email.com"
                    className="rounded-xl border border-input bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="grid gap-1.5">
                  <label htmlFor="val-modality" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Modalidad preferida
                  </label>
                  <select
                    id="val-modality"
                    name="modality"
                    defaultValue={defaultModality}
                    className="rounded-xl border border-input bg-card px-3.5 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring cursor-pointer"
                  >
                    <option value="Presencial en Sueca (Centro Sanar)">Presencial en Sueca</option>
                    <option value="Online (por videollamada)">Online (Videollamada)</option>
                    <option value="Colaboración profesional / Clínica">Colaboración profesional</option>
                    <option value="A domicilio en Valencia ciudad">A domicilio en Valencia</option>
                  </select>
                </div>

                <div className="grid gap-1.5">
                  <label htmlFor="val-time" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Horario para llamarte
                  </label>
                  <select
                    id="val-time"
                    name="preferredTime"
                    defaultValue="Mañanas (10:00 - 14:00)"
                    className="rounded-xl border border-input bg-card px-3.5 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring cursor-pointer"
                  >
                    <option value="Mañanas (10:00 - 14:00)">Mañanas (10:00 - 14:00)</option>
                    <option value="Tardes (16:00 - 20:00)">Tardes (16:00 - 20:00)</option>
                    <option value="Indiferente / Por WhatsApp">Indiferente / WhatsApp</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="val-message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  ¿Qué te gustaría trabajar o consultar?
                </label>
                <textarea
                  id="val-message"
                  name="message"
                  rows={3}
                  placeholder="Ej. Siento ansiedad por el trabajo, me cuesta dormir, o me gustaría saber si la hipnosis puede ayudarme con..."
                  className="rounded-xl border border-input bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                />
              </div>

              <label className="flex items-start gap-2.5 text-xs text-muted-foreground cursor-pointer pt-1">
                <input type="checkbox" required className="mt-0.5 rounded border-input" />
                <span>
                  Acepto el tratamiento de mis datos de contacto para coordinar la llamada de valoración de 15 minutos.
                </span>
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
                <span>{submitting ? "Enviando solicitud..." : "Solicitar llamada de 15 min (sin coste)"}</span>
              </button>

              <p className="text-center text-[0.72rem] text-muted-foreground">
                Te responderé personalmente en menos de 24 horas para fijar la hora exacta de la llamada.
              </p>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CheckCircle2 className="size-8" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-foreground">
              ¡Solicitud recibida correctamente!
            </h3>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
              Muchas gracias por tu confianza. He recibido tus datos y te escribiré por WhatsApp o te llamaré en el horario indicado para coordinar con calma el día y la hora de nuestra conversación.
            </p>
            <button
              type="button"
              onClick={() => handleOpenChange(false)}
              className="mt-6 inline-flex rounded-full bg-primary px-8 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Entendido
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
