import { NextResponse } from "next/server";
import {
  generateEnquiryReferenceId,
  validateEnquiryInput,
  type EnquiryInput,
} from "@/lib/enquiry";

export async function POST(request: Request) {
  let body: EnquiryInput;
  try {
    body = (await request.json()) as EnquiryInput;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload." },
      { status: 400 },
    );
  }

  // Silently ignore bot submissions filling the hidden honeypot field
  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return NextResponse.json(
      {
        ok: true,
        referenceId: generateEnquiryReferenceId(),
        mode: "recorded",
      },
      { status: 200 },
    );
  }

  const validation = validateEnquiryInput(body);
  if (!validation.ok || !validation.data) {
    return NextResponse.json(
      { ok: false, errors: validation.errors },
      { status: 400 },
    );
  }

  const referenceId = generateEnquiryReferenceId();
  const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL?.trim();
  let mode: "forwarded" | "recorded" = "recorded";

  if (webhookUrl) {
    try {
      const forwardRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          referenceId,
          submittedAt: new Date().toISOString(),
          ...validation.data,
        }),
        signal: AbortSignal.timeout(5000),
      });
      if (forwardRes.ok) {
        mode = "forwarded";
      }
    } catch {
      // Keep enquiry flow resilient if webhook times out; user also receives direct tel: contacts
    }
  }

  return NextResponse.json(
    {
      ok: true,
      referenceId,
      mode,
    },
    { status: 201 },
  );
}
