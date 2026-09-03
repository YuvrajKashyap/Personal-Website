"use client";

import { useSyncExternalStore, type ReactNode } from "react";

import type { ThemeMode } from "@/lib/theme/theme";
import { getThemeSnapshot, subscribeToTheme } from "@/lib/theme/theme-store";

type HomePageProps = Readonly<{
  /** Theme resolved from the cookie on the server for this request. */
  serverTheme: ThemeMode;
  darkHero: ReactNode;
  lightHero: ReactNode;
  /** Shared lower Home sections, rendered once on the server. */
  children: ReactNode;
}>;

/**
 * Owns theme-aware view selection for Home. The heroes and sections arrive as
 * server-rendered nodes, so their code stays out of the client bundle; only
 * the active hero is mounted, and toggling swaps instantly.
 */
export function HomePage({
  serverTheme,
  darkHero,
  lightHero,
  children,
}: HomePageProps) {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    () => serverTheme,
  );

  return (
    <main className={`home-page home-page-${theme}`}>
      {theme === "dark" ? darkHero : lightHero}
      <div className="home-sections" data-home-variant={theme}>
        {children}
      </div>
    </main>
  );
}
