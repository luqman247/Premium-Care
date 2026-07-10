import { COMPANY } from "@/lib/company";

export const CONTACT_TO_EMAIL =
  process.env.CONTACT_TO_EMAIL?.trim() || COMPANY.email;

export const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL?.trim() ||
  process.env.SMTP_FROM?.trim() ||
  "no-reply@premiumcare.dk";

export type ContactSubmission = {
  name: string;
  phone: string;
  message: string;
  source?: string;
  userAgent?: string;
  submittedAt: string;
};

export type ContactMailResult =
  | { ok: true; provider: "resend" | "smtp" }
  | { ok: false; reason: "not_configured" | "send_failed"; detail?: string };

function buildEmailText(submission: ContactSubmission): string {
  const lines = [
    "Ny henvendelse fra PremiumCare.dk",
    "",
    `Navn: ${submission.name || "(ikke angivet)"}`,
    `Telefon: ${submission.phone || "(ikke angivet)"}`,
    `Besked: ${submission.message || "(ikke angivet)"}`,
    `Sendt fra: ${submission.source || "/kontakt"}`,
    `Tidspunkt: ${submission.submittedAt}`,
  ];

  if (submission.userAgent) {
    lines.push(`Browser: ${submission.userAgent}`);
  }

  lines.push(
    "",
    "Oplysningerne er indsendt via kontaktformularen på premiumcare.dk og må kun bruges til at vende tilbage på henvendelsen",
  );

  return lines.join("\n");
}

function isEmailConfigured(): boolean {
  return Boolean(
    process.env.RESEND_API_KEY?.trim() ||
      (process.env.SMTP_HOST?.trim() &&
        process.env.SMTP_USER?.trim() &&
        process.env.SMTP_PASS?.trim()),
  );
}

async function sendViaResend(
  submission: ContactSubmission,
): Promise<ContactMailResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return { ok: false, reason: "not_configured" };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      subject: "Ny henvendelse fra PremiumCare.dk",
      text: buildEmailText(submission),
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    return {
      ok: false,
      reason: "send_failed",
      detail: detail.slice(0, 500),
    };
  }

  return { ok: true, provider: "resend" };
}

async function sendViaSmtp(
  submission: ContactSubmission,
): Promise<ContactMailResult> {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  const port = Number(process.env.SMTP_PORT || "587");

  if (!host || !user || !pass) {
    return { ok: false, reason: "not_configured" };
  }

  try {
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      subject: "Ny henvendelse fra PremiumCare.dk",
      text: buildEmailText(submission),
    });

    return { ok: true, provider: "smtp" };
  } catch (error) {
    return {
      ok: false,
      reason: "send_failed",
      detail: error instanceof Error ? error.message : "SMTP error",
    };
  }
}

/** Send contact enquiry to the configured recipient. Never fakes success. */
export async function sendContactEmail(
  submission: ContactSubmission,
): Promise<ContactMailResult> {
  if (!isEmailConfigured()) {
    return { ok: false, reason: "not_configured" };
  }

  if (process.env.RESEND_API_KEY?.trim()) {
    return sendViaResend(submission);
  }

  return sendViaSmtp(submission);
}

export function getContactMailConfigStatus() {
  return {
    to: CONTACT_TO_EMAIL,
    from: CONTACT_FROM_EMAIL,
    configured: isEmailConfigured(),
    provider: process.env.RESEND_API_KEY?.trim()
      ? "resend"
      : process.env.SMTP_HOST?.trim()
        ? "smtp"
        : "none",
  };
}
