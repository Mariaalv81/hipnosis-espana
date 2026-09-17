import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

// Lightweight, dependency-free SendGrid call if @sendgrid/mail not installed.
async function sendViaSendGrid({ to, from, subject, text }: { to: string; from: string; subject: string; text: string }) {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) throw new Error('SENDGRID_API_KEY not set');

  const payload = {
    personalizations: [{ to: [{ email: to }] }],
    from: { email: from },
    subject,
    content: [{ type: 'text/plain', value: text }],
  };

  const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`SendGrid error: ${res.status} ${body}`);
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).send({ ok: false, error: 'Method not allowed' });

  try {
    const { name, email, message, website, recaptchaToken } = req.body || {};

    // Honeypot: if website field (hidden) is filled, likely spam
    if (website) return res.status(400).json({ ok: false, error: 'Spam detected' });

    if (!name || !email || !message) return res.status(400).json({ ok: false, error: 'Missing fields' });

    // Optional: verify reCAPTCHA if secret provided
    const recaptchaSecret = process.env.RECAPTCHA_SECRET;
    if (recaptchaSecret) {
      if (!recaptchaToken) return res.status(400).json({ ok: false, error: 'Missing recaptcha token' });

      const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${encodeURIComponent(recaptchaSecret)}&response=${encodeURIComponent(recaptchaToken)}`,
      });

      const verifyJson = await verifyRes.json();
      if (!verifyJson.success || (verifyJson.score !== undefined && verifyJson.score < 0.5)) {
        return res.status(400).json({ ok: false, error: 'recaptcha verification failed' });
      }
    }

    // Prepare email
    const to = process.env.CONTACT_EMAIL || process.env.SENDGRID_TO;
    const from = process.env.SENDGRID_FROM || (process.env.CONTACT_EMAIL || 'no-reply@example.com');

    if (!to) return res.status(500).json({ ok: false, error: 'Recipient not configured' });

    const subject = `Contacto web: ${name}`;
    const text = `Nuevo mensaje desde la web:\n\nNombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`;

    await sendViaSendGrid({ to, from, subject, text });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('send-email error', err);
    return res.status(500).json({ ok: false, error: err.message || 'Server error' });
  }
}
