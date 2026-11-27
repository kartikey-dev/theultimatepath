import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Phase 12: Consultation & Enquiry Form", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("validates enquiry payloads accurately and rejects missing fields", async () => {
    const { validateEnquiryInput } = await import("@/lib/enquiry");

    const invalid = validateEnquiryInput({
      name: "",
      contact: "12",
      consultationTopic: "",
      preferredContact: "Phone call",
      message: "",
      consent: false,
    });

    expect(invalid.ok).toBe(false);
    expect(invalid.errors.name).toBeDefined();
    expect(invalid.errors.contact).toBeDefined();
    expect(invalid.errors.consent).toBeDefined();

    const valid = validateEnquiryInput({
      name: "Ananya Verma",
      contact: "+91 98765 43210",
      consultationTopic: "One-to-one personal tarot reading",
      preferredContact: "Phone call",
      message: "Looking for clarity around a career decision.",
      consent: true,
    });

    expect(valid.ok).toBe(true);
    expect(valid.errors).toEqual({});
  });

  it("handles POST /api/enquiry validation errors and valid submissions cleanly", async () => {
    const { POST } = await import("@/app/api/enquiry/route");

    const badReq = new Request("http://localhost/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "", contact: "", consent: false }),
    });
    const badRes = await POST(badReq);
    expect(badRes.status).toBe(400);

    const goodReq = new Request("http://localhost/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Rohan Mehta",
        contact: "rohan@example.com",
        consultationTopic: "Clarity at a decision or turning point",
        preferredContact: "Callback / Direct message",
        message: "Would like to enquire about consultation availability.",
        consent: true,
      }),
    });
    const goodRes = await POST(goodReq);
    expect(goodRes.status).toBe(201);
    const json = (await goodRes.json()) as { ok: boolean; referenceId: string };
    expect(json.ok).toBe(true);
    expect(json.referenceId).toMatch(/^TUP-/);
  });

  it("renders ConsultationEnquiryForm on Consultations and Connect pages and submits interactively", async () => {
    const user = userEvent.setup();
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
      new Response(
        JSON.stringify({ ok: true, referenceId: "TUP-2026-1042" }),
        { status: 201, headers: { "Content-Type": "application/json" } },
      ),
    );

    const { default: ConsultationsPage } = await import(
      "@/app/consultations/page"
    );
    const { unmount } = render(<ConsultationsPage />);
    expect(
      screen.getByRole("heading", { name: /request a consultation/i }),
    ).toBeInTheDocument();
    unmount();

    const { default: ConnectPage } = await import("@/app/connect/page");
    render(<ConnectPage />);

    const nameInput = screen.getByLabelText(/your name/i);
    const contactInput = screen.getByLabelText(/phone number or email/i);
    const topicSelect = screen.getByLabelText(/consultation theme/i);
    const messageInput = screen.getByLabelText(/brief question or note/i);
    const consentCheckbox = screen.getByRole("checkbox", {
      name: /reflective guidance/i,
    });
    const submitBtn = screen.getByRole("button", {
      name: /send consultation enquiry/i,
    });

    await user.type(nameInput, "Priya Sharma");
    await user.type(contactInput, "+91 98111 22334");
    await user.selectOptions(topicSelect, "One-to-one personal tarot reading");
    await user.type(messageInput, "Seeking a personal reading this week.");
    await user.click(consentCheckbox);
    await user.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByRole("status")).toHaveTextContent(/TUP-2026-1042/i);
    });
  });
});

