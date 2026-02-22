// this is my top nav
// goal: centered pill with clean spacing + recruiter-priority actions

"use client";

import Link from "next/link";
import { site } from "@/content/site";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2 8 5 8-5H4zm16 10V10l-8 5-8-5v8h16z"
      />
    </svg>
  );
}

export function Nav() {
  return (
    // floating pill nav (not a full-width bar)
    <header className="fixed inset-x-0 top-4 z-50">
      {/* this keeps it centered and not full width */}
      <div className="ui-container">
        {/* the actual pill */}
        <div className="ui-surface ui-surface-frost ui-pill ui-shadow-md">
          <div className="flex items-center justify-between gap-3 px-4 py-2.5 sm:px-5">
            {/* left: my name */}
            <a
              href="#home"
              className="ui-text-strong type-nav ui-interactive ui-pill px-2 py-2"
            >
              {site.name}
            </a>

            {/* middle: nav items (desktop only) */}
            <nav className="hidden items-center gap-1 md:flex">
              {site.nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="ui-nav-link type-nav ui-interactive"
                >
                  {item.label}
                </a>
              ))}

              <Link
                href={site.links.tracker}
                className="ui-nav-link type-nav ui-interactive"
              >
                {site.ui.trackerLabel}
              </Link>
            </nav>

            {/* right: recruiter-priority actions */}
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${site.links.email}`}
                aria-label={site.ui.emailLabel}
                title={site.ui.emailLabel}
                className="ui-button ui-icon-button ui-button-subtle ui-interactive"
              >
                <MailIcon />
              </a>

              <a
                href={site.links.resume}
                className="ui-button ui-button-accent ui-interactive ui-pill"
              >
                {site.ui.resumeLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
