import { isAdmin } from "../../../lib/auth";
import { getContent, saveContent, type SiteContent } from "../../../lib/content";
import { revalidatePath } from "next/cache";

export async function GET() {
  return Response.json(await getContent());
}

export async function PUT(request: Request) {
  if (!(await isAdmin())) {
    return Response.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const content = (await request.json()) as SiteContent;
    await saveContent(content);
    revalidatePath("/", "layout");
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Content could not be saved." }, { status: 400 });
  }
}
