import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/contact-mail";

export const runtime = "nodejs";

const MAX_NAME = 120;
const MAX_PHONE = 40;
const MAX_MESSAGE = 4000;

type ParsedBody = {
  name: string;
  phone: string;
  message: string;
  companyWebsite: string;
  source: string;
};

function clean(value: FormDataEntryValue | string | null | undefined): string {
  if (typeof value !== "string") return "";
  return value.trim();
}

async function parseRequest(request: Request): Promise<ParsedBody> {
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const json = (await request.json()) as Record<string, unknown>;
    return {
      name: clean(typeof json.name === "string" ? json.name : ""),
      phone: clean(typeof json.phone === "string" ? json.phone : ""),
      message: clean(typeof json.message === "string" ? json.message : ""),
      companyWebsite: clean(
        typeof json.companyWebsite === "string" ? json.companyWebsite : "",
      ),
      source: clean(typeof json.source === "string" ? json.source : "/kontakt"),
    };
  }

  const form = await request.formData();
  return {
    name: clean(form.get("name")),
    phone: clean(form.get("phone")),
    message: clean(form.get("message")),
    companyWebsite: clean(form.get("companyWebsite")),
    source: clean(form.get("source")) || "/kontakt",
  };
}

function wantsJson(request: Request): boolean {
  const accept = request.headers.get("accept") || "";
  const contentType = request.headers.get("content-type") || "";
  return (
    accept.includes("application/json") ||
    contentType.includes("application/json") ||
    request.headers.get("x-requested-with") === "XMLHttpRequest"
  );
}

function validate(body: ParsedBody): string | null {
  if (!body.phone && !body.message) {
    return "Angiv telefonnummer eller en kort besked, så vi kan vende tilbage";
  }

  if (body.name.length > MAX_NAME) {
    return "Navnet er for langt";
  }

  if (body.phone.length > MAX_PHONE) {
    return "Telefonnummeret er for langt";
  }

  if (body.phone && body.phone.replace(/[\s()+-]/g, "").length < 8) {
    return "Angiv et gyldigt telefonnummer";
  }

  if (body.message.length > MAX_MESSAGE) {
    return "Beskeden er for lang";
  }

  return null;
}

export async function POST(request: Request) {
  const body = await parseRequest(request);
  const jsonMode = wantsJson(request);

  // Honeypot — silently accept without sending
  if (body.companyWebsite) {
    if (jsonMode) {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.redirect(new URL("/kontakt?sendt=1", request.url), 303);
  }

  const validationError = validate(body);
  if (validationError) {
    if (jsonMode) {
      return NextResponse.json(
        { ok: false, error: validationError },
        { status: 400 },
      );
    }
    return NextResponse.redirect(
      new URL(`/kontakt?fejl=1`, request.url),
      303,
    );
  }

  const result = await sendContactEmail({
    name: body.name,
    phone: body.phone,
    message: body.message,
    source: body.source || "/kontakt",
    userAgent: request.headers.get("user-agent") || undefined,
    submittedAt: new Date().toISOString(),
  });

  if (!result.ok) {
    const errorMessage =
      result.reason === "not_configured"
        ? "E-mail er ikke konfigureret. Kontakt os direkte på bibi@premiumcare.dk"
        : "Beskeden kunne ikke sendes. Prøv igen, eller kontakt os direkte på bibi@premiumcare.dk";

    if (jsonMode) {
      return NextResponse.json(
        {
          ok: false,
          error: errorMessage,
          reason: result.reason,
        },
        { status: result.reason === "not_configured" ? 503 : 502 },
      );
    }

    return NextResponse.redirect(
      new URL("/kontakt?fejl=1", request.url),
      303,
    );
  }

  if (jsonMode) {
    return NextResponse.json({ ok: true });
  }

  return NextResponse.redirect(new URL("/kontakt?sendt=1", request.url), 303);
}
