/**
 * Shared SMTP / nodemailer transport helper
 * --------------------------------------------------------------------
 * Single source of truth for building the mail transport used by the
 * contact, get-in-touch, and careers Route Handlers. Centralizing this
 * keeps host/port/secure/TLS handling identical across every route so
 * the three copies can't drift apart (which is how the careers route
 * ended up with a hardcoded `secure` and a NaN-prone port).
 *
 * Required env vars: SMTP_HOST, SMTP_USER, SMTP_PASSWORD
 * Optional env vars: SMTP_PORT (default 587), SMTP_SECURE ("true"/"false")
 * --------------------------------------------------------------------
 */

import nodemailer from "nodemailer";

/**
 * Returns the list of required SMTP env vars that are missing/empty.
 * An empty array means the configuration is present.
 */
export function getMissingSmtpConfig(): string[] {
  const missing: string[] = [];
  if (!process.env.SMTP_HOST) missing.push("SMTP_HOST");
  if (!process.env.SMTP_USER) missing.push("SMTP_USER");
  if (!process.env.SMTP_PASSWORD) missing.push("SMTP_PASSWORD");
  return missing;
}

/**
 * Builds a nodemailer transport with consistent configuration.
 *
 * - Port defaults to 587 when SMTP_PORT is unset (never NaN).
 * - `secure` is derived from the port: true for 465 (implicit TLS/SSL),
 *   false otherwise (587/STARTTLS) — unless SMTP_SECURE="true" forces it.
 * - TLS cert validation is enforced in production and relaxed elsewhere
 *   (e.g. self-signed certs in local/dev environments).
 */
export function createMailTransport() {
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: process.env.NODE_ENV === "production",
    },
  });
}
