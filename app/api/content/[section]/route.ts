import { isAdmin } from "../../../../lib/auth";
import { getContent, isContentSection, saveContent, type SiteContent } from "../../../../lib/content";
import { revalidatePath } from "next/cache";

export async function GET(_request: Request, { params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (!isContentSection(section)) return Response.json({ error: "Unknown content section." }, { status: 404 });
  const content = await getContent();
  return Response.json(content[section]);
}

export async function PUT(request: Request, { params }: { params: Promise<{ section: string }> }) {
  if (!(await isAdmin())) return Response.json({ error: "Unauthorized." }, { status: 401 });
  const { section } = await params;
  if (!isContentSection(section)) return Response.json({ error: "Unknown content section." }, { status: 404 });

  try {
    const content = await getContent();
    const value = await request.json();
    await saveContent({ ...content, [section]: value } as SiteContent);
    revalidatePath("/", "layout");
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Content could not be saved." }, { status: 400 });
  }
}
