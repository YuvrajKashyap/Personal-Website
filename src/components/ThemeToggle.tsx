"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  // i check saved preference first, then fall back to system
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  // i keep the current theme on the root dataset so css can read it
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem("theme", theme);
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 16.2A4.2 4.2 0 1 0 12 7.8a4.2 4.2 0 0 0 0 8.4zm0 2A6.2 6.2 0 1 1 12 5.8a6.2 6.2 0 0 1 0 12.4zm0-16.4a1 1 0 0 1 1 1v1.3a1 1 0 1 1-2 0V2.8a1 1 0 0 1 1-1zm0 18.1a1 1 0 0 1 1 1v1.3a1 1 0 1 1-2 0V20.9a1 1 0 0 1 1-1zM3.8 11a1 1 0 1 1 0 2H2.5a1 1 0 1 1 0-2h1.3zm18.7 0a1 1 0 1 1 0 2h-1.3a1 1 0 1 1 0-2h1.3zM5.6 4.2a1 1 0 0 1 1.4 0l.9.9A1 1 0 0 1 6.5 6.5l-.9-.9a1 1 0 0 1 0-1.4zm11.9 11.9a1 1 0 0 1 1.4 0l.9.9a1 1 0 1 1-1.4 1.4l-.9-.9a1 1 0 0 1 0-1.4zM19.8 4.2a1 1 0 0 1 0 1.4l-.9.9a1 1 0 1 1-1.4-1.4l.9-.9a1 1 0 0 1 1.4 0zM7.9 16.1a1 1 0 0 1 0 1.4l-.9.9a1 1 0 1 1-1.4-1.4l.9-.9a1 1 0 0 1 1.4 0z"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.6 2.2a1 1 0 0 1 .8 1.6 8.7 8.7 0 1 0 4.7 15.6 1 1 0 0 1 1.4 1.2 10.7 10.7 0 1 1-8.2-18.5c.4 0 .8 0 1.3.1z"
      />
    </svg>
  );
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    // i sync state to whatever the saved/system theme is on mount
    const nextTheme = getPreferredTheme();
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }, []);

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      aria-pressed={theme === "dark"}
      aria-label={`switch to ${nextTheme} theme`}
      title={`switch to ${nextTheme} theme`}
      onClick={() => {
        // i update the root dataset + local storage together
        setTheme(nextTheme);
        applyTheme(nextTheme);
      }}
      className="ui-button ui-icon-button ui-button-subtle ui-interactive"
    >
      <span className="grid place-items-center">
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
}
