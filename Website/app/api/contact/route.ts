import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await request.formData();
  return NextResponse.redirect(new URL("/kontakt?sendt=1", request.url), 303);
}
