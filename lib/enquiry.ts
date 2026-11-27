export const CONSULTATION_THEMES = [
  "One-to-one personal tarot reading",
  "Clarity at a decision or turning point",
  "General consultation enquiry",
] as const;

export const PREFERRED_CONTACT_MODES = [
  "Phone call",
  "Callback / Direct message",
] as const;

export interface EnquiryInput {
  name?: string;
  contact?: string;
  consultationTopic?: string;
  preferredContact?: string;
  message?: string;
  consent?: boolean;
  website?: string;
}

export interface SanitizedEnquiry {
  name: string;
  contact: string;
  consultationTopic: string;
  preferredContact: string;
  message: string;
  consent: true;
}

export interface EnquiryValidationResult {
  ok: boolean;
  errors: Partial<Record<"name" | "contact" | "consultationTopic" | "message" | "consent", string>>;
  data?: SanitizedEnquiry;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateEnquiryInput(input: EnquiryInput): EnquiryValidationResult {
  const errors: EnquiryValidationResult["errors"] = {};

  const name = (input.name ?? "").trim();
  const contact = (input.contact ?? "").trim();
  const consultationTopic =
    (input.consultationTopic ?? "").trim() || CONSULTATION_THEMES[0];
  const preferredContact =
    (input.preferredContact ?? "").trim() || PREFERRED_CONTACT_MODES[0];
  const message = (input.message ?? "").trim();
  const consent = Boolean(input.consent);

  if (name.length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  } else if (name.length > 120) {
    errors.name = "Name must be 120 characters or fewer.";
  }

  const digitsCount = contact.replace(/\D/g, "").length;
  const looksLikePhone = digitsCount >= 7 && digitsCount <= 15;
  const looksLikeEmail = EMAIL_PATTERN.test(contact);

  if (!looksLikePhone && !looksLikeEmail) {
    errors.contact =
      "Please enter a valid phone number or email address so Archana can reply.";
  } else if (contact.length > 160) {
    errors.contact = "Contact details must be 160 characters or fewer.";
  }

  if (consultationTopic.length > 120) {
    errors.consultationTopic = "Selected topic is too long.";
  }

  if (message.length > 1000) {
    errors.message = "Please keep your note under 1,000 characters.";
  }

  if (!consent) {
    errors.consent =
      "Please confirm that you understand tarot readings are for reflective guidance.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    errors: {},
    data: {
      name,
      contact,
      consultationTopic,
      preferredContact,
      message,
      consent: true,
    },
  };
}

export function generateEnquiryReferenceId(): string {
  const year = new Date().getFullYear();
  const suffix = Math.floor(1000 + Math.random() * 9000);
  return `TUP-${year}-${suffix}`;
}
