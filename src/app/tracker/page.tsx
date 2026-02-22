// this is my public build tracker page
// it is fully manual/curated (no private integrations)

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TrackerBoard } from "@/components/TrackerBoard";
import { site } from "@/content/site";
import { tracker } from "@/content/tracker";

function formatLongDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}

export default function TrackerPage() {
  return (
    <main className="min-h-screen text-[rgb(var(--fg))]">
      {/* i keep theme accessible here too since this is a first-class route */}
      <div className="fixed right-4 top-4 z-[60] sm:right-5 sm:top-5">
        <ThemeToggle />
      </div>

      <section className="ui-section-hero">
        <div className="ui-container">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/"
              className="ui-button ui-button-subtle ui-pill ui-interactive"
            >
              {site.ui.trackerBackLabel}
            </Link>

            <a
              href={`mailto:${site.links.email}`}
              className="ui-button ui-button-subtle ui-pill ui-interactive"
            >
              {site.ui.emailLabel}
            </a>

            <a
              href={site.links.resume}
              className="ui-button ui-button-accent ui-pill ui-interactive"
            >
              {site.ui.resumeLabel}
            </a>
          </div>

          <div className="ui-surface ui-radius-lg border mt-4 p-5 md:p-6">
            <div className="type-meta ui-text-faint">
              last updated {formatLongDate(tracker.lastUpdated)}
            </div>

            <h1 className="type-page-title ui-text-strong mt-2">
              {tracker.title}
            </h1>

            <p className="type-body ui-text-muted mt-3 max-w-3xl">
              {tracker.subtitle}
            </p>
          </div>

          <div className="mt-4">
            <TrackerBoard sections={tracker.sections} />
          </div>
        </div>
      </section>
    </main>
  );
}
