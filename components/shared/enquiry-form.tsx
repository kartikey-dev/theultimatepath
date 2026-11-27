"use client";

import { useState, type FormEvent } from "react";
import { ArcanaEmblem } from "@/components/graphics/arcana-emblem";
import {
  CONSULTATION_THEMES,
  PREFERRED_CONTACT_MODES,
  validateEnquiryInput,
  type EnquiryValidationResult,
} from "@/lib/enquiry";
import { PHONE_CONTACTS } from "@/lib/site-config";

interface ConsultationEnquiryFormProps {
  idPrefix?: string;
}

export function ConsultationEnquiryForm({
  idPrefix = "enquiry",
}: ConsultationEnquiryFormProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [consultationTopic, setConsultationTopic] = useState<string>(
    CONSULTATION_THEMES[0],
  );
  const [preferredContact, setPreferredContact] = useState<string>(
    PREFERRED_CONTACT_MODES[0],
  );
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");

  const [errors, setErrors] = useState<EnquiryValidationResult["errors"]>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError(null);

    const check = validateEnquiryInput({
      name,
      contact,
      consultationTopic,
      preferredContact,
      message,
      consent,
      website,
    });

    if (!check.ok) {
      setErrors(check.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          contact,
          consultationTopic,
          preferredContact,
          message,
          consent,
          website,
        }),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        referenceId?: string;
        errors?: EnquiryValidationResult["errors"];
        error?: string;
      };

      if (!response.ok || !payload.ok) {
        if (payload.errors) {
          setErrors(payload.errors);
        } else {
          setServerError(
            payload.error ||
              "Unable to submit right now. Please call Archana directly using the numbers below.",
          );
        }
        return;
      }

      setSubmittedRef(payload.referenceId ?? "TUP-RECEIVED");
      setName("");
      setContact("");
      setMessage("");
      setConsent(false);
    } catch {
      setServerError(
        "Unable to send right now. Please call Archana directly at +91 90769 77905 or +91 80526 23615.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="enquiry-form-layout">
      <div className="enquiry-form-layout__aside">
        <p className="eyebrow">Consultation Enquiry</p>
        <h2>Request a consultation</h2>
        <p className="prose-lead">
          Share your preferred contact details and what brings you to a tarot
          reading. Consultation format, timing, and applicable fee details are
          confirmed directly with Archana Mahajan when she replies.
        </p>

        <div className="surface-card enquiry-direct-box">
          <div className="surface-card__top">
            <span className="surface-card__index">Prefer to speak directly?</span>
            <ArcanaEmblem variant="moon" />
          </div>
          <p>You are always welcome to call Archana directly:</p>
          <div className="enquiry-direct-box__phones">
            {PHONE_CONTACTS.map((phone) => (
              <a key={phone.id} href={phone.href} className="inline-link">
                Call {phone.display}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="surface-card enquiry-form-card">
        {submittedRef ? (
          <div className="form-success" role="status">
            <span className="surface-card__index">Enquiry received</span>
            <h3>Thank you for reaching out</h3>
            <p>
              Your consultation enquiry has been noted with reference{" "}
              <strong>{submittedRef}</strong>. For immediate scheduling, you can
              also call{" "}
              <a href={PHONE_CONTACTS[0].href} className="inline-link">
                {PHONE_CONTACTS[0].display}
              </a>
              .
            </p>
            <div>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setSubmittedRef(null)}
              >
                Send another enquiry
              </button>
            </div>
          </div>
        ) : (
          <form
            className="enquiry-form"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Consultation enquiry form"
          >
            <div className="form-honeypot" aria-hidden="true">
              <label htmlFor={`${idPrefix}-website`}>Website</label>
              <input
                id={`${idPrefix}-website`}
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            <div className="form-grid">
              <div className="form-field">
                <label htmlFor={`${idPrefix}-name`} className="form-label">
                  Your name <span aria-hidden="true">*</span>
                </label>
                <input
                  id={`${idPrefix}-name`}
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={
                    errors.name ? `${idPrefix}-name-error` : undefined
                  }
                  placeholder="Enter your full name"
                />
                {errors.name ? (
                  <p id={`${idPrefix}-name-error`} className="form-error" role="alert">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div className="form-field">
                <label htmlFor={`${idPrefix}-contact`} className="form-label">
                  Phone number or email <span aria-hidden="true">*</span>
                </label>
                <input
                  id={`${idPrefix}-contact`}
                  name="contact"
                  type="text"
                  required
                  autoComplete="tel"
                  className="form-control"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  aria-invalid={Boolean(errors.contact)}
                  aria-describedby={
                    errors.contact ? `${idPrefix}-contact-error` : undefined
                  }
                  placeholder="+91 98XXX XXXXX or email"
                />
                {errors.contact ? (
                  <p
                    id={`${idPrefix}-contact-error`}
                    className="form-error"
                    role="alert"
                  >
                    {errors.contact}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="form-grid">
              <div className="form-field">
                <label htmlFor={`${idPrefix}-topic`} className="form-label">
                  Consultation theme
                </label>
                <select
                  id={`${idPrefix}-topic`}
                  name="consultationTopic"
                  className="form-control"
                  value={consultationTopic}
                  onChange={(e) => setConsultationTopic(e.target.value)}
                >
                  {CONSULTATION_THEMES.map((theme) => (
                    <option key={theme} value={theme}>
                      {theme}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label htmlFor={`${idPrefix}-reply-mode`} className="form-label">
                  Preferred way to reply
                </label>
                <select
                  id={`${idPrefix}-reply-mode`}
                  name="preferredContact"
                  className="form-control"
                  value={preferredContact}
                  onChange={(e) => setPreferredContact(e.target.value)}
                >
                  {PREFERRED_CONTACT_MODES.map((mode) => (
                    <option key={mode} value={mode}>
                      {mode}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor={`${idPrefix}-message`} className="form-label">
                Brief question or note (optional)
              </label>
              <textarea
                id={`${idPrefix}-message`}
                name="message"
                rows={4}
                className="form-control form-control--textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? `${idPrefix}-message-error` : undefined
                }
                placeholder="Share briefly what you would like to reflect on (no sensitive documents needed)"
              />
              {errors.message ? (
                <p
                  id={`${idPrefix}-message-error`}
                  className="form-error"
                  role="alert"
                >
                  {errors.message}
                </p>
              ) : null}
            </div>

            <div className="form-field">
              <label className="form-checkbox">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={
                    errors.consent ? `${idPrefix}-consent-error` : undefined
                  }
                />
                <span>
                  I understand tarot consultations offer reflective guidance and
                  personal insight, and do not replace medical, mental-health,
                  legal, or financial advice.
                </span>
              </label>
              {errors.consent ? (
                <p
                  id={`${idPrefix}-consent-error`}
                  className="form-error"
                  role="alert"
                >
                  {errors.consent}
                </p>
              ) : null}
            </div>

            {serverError ? (
              <p className="form-error" role="alert">
                {serverError}
              </p>
            ) : null}

            <div className="form-actions">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Sending enquiry..."
                  : "Send consultation enquiry"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
