"use client";

import Link from "next/link";
import { useId, useState, type FormEvent } from "react";
import { CrestSeal } from "@/components/CrestSeal";
import { COMPANY } from "@/lib/company";

type FormStatus = "idle" | "submitting" | "success" | "error";

type FieldErrors = {
  phone?: string;
  message?: string;
  form?: string;
};

export function ContactForm() {
  const formId = useId();
  const nameId = `${formId}-name`;
  const phoneId = `${formId}-phone`;
  const messageId = `${formId}-message`;
  const helperId = `${formId}-helper`;
  const statusId = `${formId}-status`;
  const privacyId = `${formId}-privacy`;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState("");

  function validateClient(): FieldErrors {
    const next: FieldErrors = {};
    const trimmedPhone = phone.trim();
    const trimmedMessage = message.trim();

    if (!trimmedPhone && !trimmedMessage) {
      next.form = "Angiv telefonnummer eller en kort besked, så vi kan vende tilbage";
      next.phone = "Påkrævet, hvis du ikke skriver en besked";
      next.message = "Påkrævet, hvis du ikke angiver telefon";
    } else if (
      trimmedPhone &&
      trimmedPhone.replace(/[\s()+-]/g, "").length < 8
    ) {
      next.phone = "Angiv et gyldigt telefonnummer";
    }

    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError("");

    const nextErrors = validateClient();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          message: message.trim(),
          companyWebsite: honeypot,
          source: "/kontakt",
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !data?.ok) {
        setStatus("error");
        setServerError(
          data?.error ||
            "Beskeden kunne ikke sendes. Prøv igen, eller kontakt os direkte på bibi@premiumcare.dk",
        );
        return;
      }

      setStatus("success");
      setName("");
      setPhone("");
      setMessage("");
      setErrors({});
    } catch {
      setStatus("error");
      setServerError(
        "Beskeden kunne ikke sendes. Prøv igen, eller kontakt os direkte på bibi@premiumcare.dk",
      );
    }
  }

  const isSubmitting = status === "submitting";
  const phoneInvalid = Boolean(errors.phone);
  const messageInvalid = Boolean(errors.message);

  return (
    <div className="contact-form-panel">
      <div className="contact-form-panel-top" aria-hidden="true">
        <CrestSeal size={40} decorative className="!p-0" />
      </div>

      <h2 className="contact-form-title">Skriv til os</h2>
      <p className="contact-form-lede">
        Du behøver ikke at kende den rigtige proces. Skriv eller ring - vi hjælper
        dig trygt videre
      </p>

      <div
        id={statusId}
        className="contact-form-status"
        role="status"
        aria-live="polite"
      >
        {status === "success" ? (
          <p className="contact-form-success">
            Tak - vi har modtaget din besked
          </p>
        ) : null}
        {status === "error" && (serverError || errors.form) ? (
          <p className="contact-form-error" role="alert">
            {serverError || errors.form}
          </p>
        ) : null}
      </div>

      <form className="contact-form" onSubmit={onSubmit} noValidate>
        <div className="contact-form-honeypot" aria-hidden="true">
          <label htmlFor={`${formId}-company`}>Firmaets website</label>
          <input
            id={`${formId}-company`}
            type="text"
            name="companyWebsite"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </div>

        <div className="contact-field">
          <label htmlFor={nameId} className="contact-label">
            Navn
          </label>
          <input
            id={nameId}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Dit navn"
            className="contact-input"
            value={name}
            onChange={(event) => setName(event.target.value)}
            disabled={isSubmitting}
            maxLength={120}
          />
        </div>

        <div className="contact-field">
          <label htmlFor={phoneId} className="contact-label">
            Telefonnummer
          </label>
          <input
            id={phoneId}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="Dit telefonnummer"
            className="contact-input"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            disabled={isSubmitting}
            maxLength={40}
            aria-invalid={phoneInvalid || undefined}
            aria-describedby={
              phoneInvalid ? `${phoneId}-error ${helperId}` : helperId
            }
          />
          {phoneInvalid ? (
            <p id={`${phoneId}-error`} className="contact-field-error">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div className="contact-field">
          <label htmlFor={messageId} className="contact-label">
            Besked
          </label>
          <textarea
            id={messageId}
            name="message"
            placeholder="Hvad vil du gerne tale med os om?"
            className="contact-textarea"
            rows={6}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            disabled={isSubmitting}
            maxLength={4000}
            aria-invalid={messageInvalid || undefined}
            aria-describedby={
              messageInvalid ? `${messageId}-error ${helperId}` : helperId
            }
          />
          {messageInvalid ? (
            <p id={`${messageId}-error`} className="contact-field-error">
              {errors.message}
            </p>
          ) : null}
          <p id={helperId} className="contact-helper">
            Du kan skrive kort. Vi vender tilbage og hjælper dig videre
          </p>
        </div>

        <button
          type="submit"
          className="btn-primary contact-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sender…" : "Send besked"}
        </button>
      </form>

      <p className="contact-trust">
        Vi bruger kun dine oplysninger til at vende tilbage på din henvendelse
      </p>

      <p className="contact-direct">
        <a href={`mailto:${COMPANY.email}`} className="focus-ring">
          {COMPANY.email}
        </a>
        <span aria-hidden="true"> · </span>
        <a href={COMPANY.phone.href} className="focus-ring">
          {COMPANY.phone.display}
        </a>
      </p>

      <p id={privacyId} className="contact-privacy">
        Vi behandler din henvendelse fortroligt og bruger kun oplysningerne til at
        kontakte dig.{" "}
        <Link href="/privatliv" className="underline underline-offset-4 focus-ring">
          Privatliv
        </Link>
      </p>
    </div>
  );
}
