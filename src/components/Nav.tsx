// this is my top nav
// goal: centered glass pill (not full width), clean spacing, premium hover states

"use client";

import { site } from "@/content/site";

export function Nav() {
  return (
    // floating pill nav (not a full-width bar)
    <header className="fixed top-4 left-0 right-0 z-50">
      {/* this keeps it centered and not 100% width */}
      <div className="mx-auto w-[92%] md:w-[80%] max-w-5xl">
        {/* the actual pill */}
        <div className="rounded-full border border-white/10 bg-black/40 backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.45)]">
          <div className="px-5 py-2.5 flex items-center justify-between gap-4">
            {/* left: my name */}
            <a
              href="#home"
              className="text-sm font-semibold tracking-tight text-white/85 hover:text-white transition-colors"
            >
              {site.name}
            </a>

            {/* middle: nav items (desktop only) */}
            <nav className="hidden md:flex items-center gap-1">
              {site.nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-full px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* right: actions */}
            <div className="flex items-center gap-2">
              {/* mobile shortcut */}
              <a
                href="#contact"
                className="md:hidden rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white hover:border-white/20 transition-colors"
              >
                contact
              </a>

              {/* resume button */}
              <a
                href={site.links.resume}
                className="inline-flex rounded-full bg-cyan-400/15 border border-cyan-400/25 px-3 py-2 text-sm text-cyan-100 hover:bg-cyan-400/20 hover:border-cyan-300/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/35"
              >
                resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
