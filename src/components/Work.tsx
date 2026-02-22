// this is my "selected work" section
// goal: clean, premium cards that feel intentional (not generic tailwind boxes)

import { site } from "@/content/site";
import { Section } from "./Section";

type WorkItem = {
  title: string;
  description: string;
  tags: string[];
  href: string | null;
  note: string;
};

function ArrowIcon() {
  return (
    // tiny arrow so clickable cards feel more app-like
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 17.6 16.6 8H10V6h10v10h-2V9.4L8.4 19 7 17.6z"
      />
    </svg>
  );
}

export function Work() {
  return (
    <Section id="work" title="Work">
      <div className="grid gap-4 md:grid-cols-3">
        {site.work.map((p: WorkItem) => {
          const clickable = Boolean(p.href);

          return (
            <div key={p.title} className="h-full">
              <a
                href={p.href ?? "#"}
                target={clickable ? "_blank" : undefined}
                rel={clickable ? "noreferrer" : undefined}
                aria-disabled={!clickable}
                className={[
                  // base card
                  "group ui-card block h-full rounded-2xl border",
                  "p-6 transition",
                  // hover polish
                  "hover:-translate-y-[2px]",
                  // focus polish (keyboard users)
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/35",
                  // if not clickable, i don't pretend it is
                  !clickable ? "pointer-events-none opacity-[0.92]" : "",
                ].join(" ")}
              >
                {/* top row: title + status */}
                <div className="flex items-start justify-between gap-3">
                  <div className="ui-text-strong text-base font-semibold tracking-tight leading-snug">
                    {p.title}
                  </div>

                  <div className="ui-text-faint flex items-center gap-2 text-xs">
                    {/* status label like "private" / "public" / "shipping" */}
                    <span className="ui-chip-subtle rounded-full border px-2.5 py-1">
                      {p.note}
                    </span>

                    {/* small arrow only if it's actually clickable */}
                    {clickable ? (
                      <span className="ui-text-soft transition">
                        <ArrowIcon />
                      </span>
                    ) : null}
                  </div>
                </div>

                {/* description */}
                <p className="ui-text-muted mt-3 text-sm leading-relaxed">
                  {p.description}
                </p>

                {/* tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="
                        ui-chip-subtle ui-text
                        rounded-full border px-3 py-1 text-xs
                        transition
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* tiny bottom hint (only if clickable) */}
                {clickable ? (
                  <div className="ui-text-faint mt-6 text-xs">open project</div>
                ) : (
                  <div className="ui-text-faint mt-6 text-xs">private / in progress</div>
                )}
              </a>
            </div>
          );
        })}
      </div>

      <div className="ui-text-faint mt-6 text-xs">
        i&apos;m keeping this tight on purpose. more projects get added as i ship.
      </div>
    </Section>
  );
}
