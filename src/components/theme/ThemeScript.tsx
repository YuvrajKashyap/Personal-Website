import { DEFAULT_THEME, THEME_COOKIE_NAME } from "@/lib/theme/theme";

/**
 * Sets `html[data-theme]` from the `yk-theme` cookie before first paint.
 *
 * Rendered as a plain inline script at the very top of <body>, so the browser
 * executes it synchronously before parsing any page content. This replaces
 * the per-request server cookie read that made every public route dynamic;
 * pages can now be prerendered while still honoring the cookie on the first
 * frame. (Next's `beforeInteractive` Script is not used because in the App
 * Router it is queued and run later by the framework loader, not pre-paint.)
 */
const themeScript = `(function(){try{var m=document.cookie.match(/(?:^|; )${THEME_COOKIE_NAME}=(dark|light)(?:;|$)/);var t=m?m[1]:"${DEFAULT_THEME}";if(document.documentElement.dataset.theme!==t){document.documentElement.dataset.theme=t;}}catch(e){}})();`;

export function ThemeScript() {
  return (
    <script
      id="yk-theme-init"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: themeScript }}
    />
  );
}
