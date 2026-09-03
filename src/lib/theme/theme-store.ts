import { DEFAULT_THEME, resolveTheme, type ThemeMode } from "@/lib/theme/theme";

/**
 * Client-side theme store.
 *
 * The very first value comes from `html[data-theme]`, which the pre-paint
 * cookie script in the root layout has already set from `yk-theme`. That keeps
 * the initial render cookie-backed without forcing every route to render on
 * the server per request.
 */

type Listener = () => void;

const listeners = new Set<Listener>();
let cachedTheme: ThemeMode | null = null;

function readDocumentTheme(): ThemeMode {
  if (typeof document === "undefined") {
    return DEFAULT_THEME;
  }

  return resolveTheme(document.documentElement.dataset.theme);
}

export function getThemeSnapshot(): ThemeMode {
  if (cachedTheme === null) {
    cachedTheme = readDocumentTheme();
  }

  return cachedTheme;
}

export function getThemeServerSnapshot(): ThemeMode {
  return DEFAULT_THEME;
}

export function subscribeToTheme(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function setStoredTheme(nextTheme: ThemeMode) {
  const resolved = resolveTheme(nextTheme);

  if (cachedTheme === resolved) {
    return;
  }

  cachedTheme = resolved;
  listeners.forEach((listener) => listener());
}
