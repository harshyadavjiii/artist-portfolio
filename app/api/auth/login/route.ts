import { createAdminSession, isAdminPasswordConfigured, isValidCredentials } from "../../../../lib/auth";

export async function POST(request: Request) {
  if (!isAdminPasswordConfigured()) {
    return Response.json({ error: "ADMIN_PASSWORD is not configured." }, { status: 503 });
  }

  const body = (await request.json()) as { username?: string; password?: string };
  if (!body.password || !isValidCredentials(body.username, body.password)) {
    return Response.json({ error: "Incorrect password." }, { status: 401 });
  }

  const isHttps = new URL(request.url).protocol === "https:" || request.headers.get("x-forwarded-proto") === "https";
  await createAdminSession(isHttps);
  return Response.json({ ok: true });
}
