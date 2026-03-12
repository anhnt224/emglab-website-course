"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const initialTheme: Theme =
      savedTheme ?? (systemPrefersDark ? "dark" : "light");

    root.classList.toggle("dark", initialTheme === "dark");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(initialTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    root.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  if (!mounted) {
    return (
      <button
        className="rounded-md border px-3 py-2 text-sm"
        aria-label="Toggle theme"
      >
        Theme
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
