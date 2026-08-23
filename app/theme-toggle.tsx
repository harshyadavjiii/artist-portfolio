"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const storageKey = "swati-portfolio-theme";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(storageKey) as Theme | null;
    const preferredTheme =
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    const initialTheme = savedTheme ?? preferredTheme;

    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-fab fixed bottom-6 right-6 z-50 inline-flex h-14 items-center gap-3 rounded-full px-5 text-sm font-semibold shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition hover:-translate-y-1"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <span className="text-lg" aria-hidden="true">
        {mounted ? (theme === "light" ? "◐" : "☼") : "◐"}
      </span>
      <span>{mounted ? `${theme === "light" ? "Dark" : "Light"} mode` : "Theme"}</span>
    </button>
  );
}
