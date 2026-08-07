import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const SESSION_COOKIE = "little_luminaries_teacher";
const SESSION_TTL_SECONDS = 60 * 60 * 8;

function secret() {
  return process.env.SESSION_SECRET || "little-luminaries-local-development-secret";
}

function sign(payload: string) {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}

function equal(left: string, right: string) {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function credentialsAreValid(email: string, password: string) {
  const expectedEmail = process.env.TEACHER_EMAIL || "teacher@littleluminaries.com";
  const expectedPassword = process.env.TEACHER_PASSWORD || "littleluminaries-demo";
  return equal(email.trim().toLowerCase(), expectedEmail.toLowerCase()) && equal(password, expectedPassword);
}

export function createSessionToken(email: string) {
  const payload = Buffer.from(JSON.stringify({ email, expires: Date.now() + SESSION_TTL_SECONDS * 1000 })).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

export function sessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  };
}

export function isTeacherAuthenticated() {
  const token = cookies().get(SESSION_COOKIE)?.value;
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature || !equal(signature, sign(payload))) return false;
  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString()) as { expires: number };
    return session.expires > Date.now();
  } catch {
    return false;
  }
}
