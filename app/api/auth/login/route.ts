import { NextResponse } from "next/server";
import { createSessionToken, credentialsAreValid, SESSION_COOKIE, sessionCookieOptions } from "@/lib/teacher-auth";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { email?: string; password?: string } | null;
  if (!body?.email || !body.password || !credentialsAreValid(body.email, body.password)) {
    return NextResponse.json({ error: "The email address or password is incorrect." }, { status: 401 });
  }
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, createSessionToken(body.email), sessionCookieOptions());
  return response;
}
