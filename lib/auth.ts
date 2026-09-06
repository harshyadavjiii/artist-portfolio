import "server-only";

import { cookies } from "next/headers";

const sessionCookie = "portfolio_admin_session";
const sessionValue = "authenticated";

export function isAdminPasswordConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD || (process.env.ADMIN_USERNAME && process.env.ADMIN_USER_PASSWORD));
}

export function isValidCredentials(username: string | undefined, password: string) {
  const isAdminPassword = Boolean(process.env.ADMIN_PASSWORD) && password === process.env.ADMIN_PASSWORD;
  const isNamedUser = Boolean(process.env.ADMIN_USERNAME && process.env.ADMIN_USER_PASSWORD)
    && username === process.env.ADMIN_USERNAME
    && password === process.env.ADMIN_USER_PASSWORD;

  return isAdminPassword || isNamedUser;
}

export async function isAdmin() {
  const cookieStore = await cookies();
  return cookieStore.get(sessionCookie)?.value === sessionValue;
}

export async function createAdminSession(secure: boolean) {
  const cookieStore = await cookies();
  cookieStore.set(sessionCookie, sessionValue, {
    httpOnly: true,
    sameSite: "lax",
    secure,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
}

export async function deleteAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(sessionCookie);
}
