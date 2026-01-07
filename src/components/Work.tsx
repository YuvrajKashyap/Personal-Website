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
    // tiny arrow so clickable cards feel more “app-like”
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
                  "group block h-full rounded-2xl border border-white/10 bg-white/5",
                  "p-6 transition",
                  // hover polish
                  "hover:bg-white/8 hover:border-white/20 hover:-translate-y-[2px]",
                  // focus polish (keyboard users)
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/35",
                  // if not clickable, don’t pretend it is
                  !clickable ? "pointer-events-none opacity-[0.92]" : "",
                ].join(" ")}
              >
                {/* top row: title + status */}
                <div className="flex items-start justify-between gap-3">
                  <div className="text-base font-semibold tracking-tight text-white/90 leading-snug">
                    {p.title}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-white/45">
                    {/* status label like "private" / "public" / "shipping" */}
                    <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1">
                      {p.note}
                    </span>

                    {/* small arrow only if it’s actually clickable */}
                    {clickable ? (
                      <span className="text-white/55 group-hover:text-white transition">
                        <ArrowIcon />
                      </span>
                    ) : null}
                  </div>
                </div>

                {/* description */}
                <p className="mt-3 text-sm text-white/65 leading-relaxed">
                  {p.description}
                </p>

                {/* tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="
                        rounded-full border border-white/10 bg-white/5
                        px-3 py-1 text-xs text-white/70
                        group-hover:border-white/15 transition
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* tiny bottom hint (only if clickable) */}
                {clickable ? (
                  <div className="mt-6 text-xs text-white/40">
                    open project
                  </div>
                ) : (
                  <div className="mt-6 text-xs text-white/40">
                    private / in progress
                  </div>
                )}
              </a>
            </div>
          );
        })}
      </div>

      <div className="mt-6 text-xs text-white/40">
        i’m keeping this tight on purpose. more projects get added as i ship.
      </div>
    </Section>
  );
}
