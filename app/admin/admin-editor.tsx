"use client";

import { useEffect, useState } from "react";

const sections = ["settings", "home", "about", "blog", "contact", "artworks", "journal"] as const;
type Section = (typeof sections)[number];

export default function AdminEditor() {
  const [active, setActive] = useState<Section>("home");
  const [values, setValues] = useState<Partial<Record<Section, string>>>({});
  const [status, setStatus] = useState("Loading content...");

  useEffect(() => {
    fetch("/api/content").then(async (response) => {
      const content = await response.json() as Record<Section, unknown>;
      const formatted = Object.fromEntries(sections.map((section) => [section, JSON.stringify(content[section], null, 2)])) as Partial<Record<Section, string>>;
      setValues(formatted);
      setStatus("Ready to edit");
    }).catch(() => setStatus("Could not load content."));
  }, []);

  async function save() {
    setStatus("Saving...");
    try {
      const parsed = JSON.parse(values[active] ?? "");
      const response = await fetch(`/api/content/${active}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(parsed) });
      if (!response.ok) throw new Error();
      setStatus(`${active} saved. Public pages are updated.`);
    } catch {
      setStatus("Save failed. Check that the editor contains valid JSON.");
    }
  }

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  return (
    <main className="theme-page min-h-screen px-6 pb-24 pt-28 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b pb-8">
          <div><p className="theme-kicker text-xs uppercase tracking-[0.35em]">Private studio</p><h1 className="theme-heading mt-3 font-[family:var(--font-display)] text-6xl leading-none">Portfolio editor</h1><p className="theme-body mt-4 max-w-2xl">Edit page copy, artwork previews, and every journal entry from one structured content store.</p></div>
          <button onClick={logout} className="theme-button-secondary rounded-full border px-5 py-3 text-sm font-semibold">Sign out</button>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[13rem_minmax(0,1fr)]">
          <nav className="grid content-start gap-2" aria-label="Content sections">{sections.map((section) => <button key={section} onClick={() => setActive(section)} className={`rounded-xl px-4 py-3 text-left text-sm font-semibold capitalize ${active === section ? "theme-button-primary" : "theme-chip border"}`}>{section}</button>)}</nav>
          <section className="min-w-0"><div className="mb-4 flex flex-wrap items-center justify-between gap-3"><h2 className="theme-heading font-[family:var(--font-display)] text-3xl capitalize">{active}</h2><span className="theme-body text-sm">{status}</span></div><textarea aria-label={`${active} JSON`} value={values[active] ?? ""} onChange={(event) => setValues({ ...values, [active]: event.target.value })} spellCheck={false} className="min-h-[42rem] w-full rounded-2xl border bg-black/[.04] p-5 font-mono text-sm leading-6 outline-none focus:ring-2 focus:ring-black/20" /><button onClick={save} className="theme-button-primary mt-5 rounded-full px-6 py-3 text-sm font-semibold">Save {active}</button></section>
        </div>
      </div>
    </main>
  );
}
