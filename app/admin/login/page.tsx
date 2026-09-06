"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const response = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username, password }) });
    if (!response.ok) {
      const result = (await response.json()) as { error?: string };
      setError(result.error ?? "Unable to sign in.");
      setBusy(false);
      return;
    }
    router.push("/admin");
    router.refresh();
  }

  return (
    <main className="theme-page page-shell">
      <div className="page-intro max-w-xl">
        <p className="theme-kicker text-xs uppercase tracking-[0.35em]">Private studio</p>
        <h1 className="theme-heading mt-5 font-[family:var(--font-display)] text-6xl leading-none">Edit the portfolio.</h1>
        <form onSubmit={submit} className="mt-10 grid gap-4">
          <label className="theme-body grid gap-2 text-sm">Username <span className="font-normal opacity-60">(leave blank for admin password)</span><input className="rounded-xl border bg-white/40 px-4 py-3" type="text" autoComplete="username" value={username} onChange={(event) => setUsername(event.target.value)} /></label>
          <label className="theme-body grid gap-2 text-sm">Admin password<input className="rounded-xl border bg-white/40 px-4 py-3" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label>
          {error && <p className="text-sm text-red-700">{error}</p>}
          <button className="theme-button-primary rounded-full px-6 py-3 text-sm font-semibold" disabled={busy}>{busy ? "Signing in..." : "Open editor"}</button>
        </form>
      </div>
    </main>
  );
}
