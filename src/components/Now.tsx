// this is my "now" section (what i'm up to right now)
// i'm keeping it clean + skimmable so it doesn't look like a messy blog

import { site } from "@/content/site";
import { Section } from "./Section";

export function Now() {
  return (
    <Section id="now" title="Now">
      <div className="grid gap-4 md:grid-cols-2">
        {/* left: what i'm building */}
        <div className="ui-card group rounded-2xl border p-6 transition hover:-translate-y-[2px]">
          <div className="ui-text-strong text-base font-semibold">building</div>

          <ul className="ui-text-muted mt-3 space-y-2 text-sm">
            {site.now.building.map((b) => (
              <li key={b} className="leading-relaxed">
                <span className="ui-text-faint mr-2">•</span>
                {b}
              </li>
            ))}
          </ul>

          {/* i want this status super visible */}
          <div className="ui-accent-pill mt-5 inline-flex rounded-full border px-4 py-2 text-xs">
            {site.statusPill}
          </div>
        </div>

        {/* right: what i'm learning */}
        <div className="ui-card group rounded-2xl border p-6 transition hover:-translate-y-[2px]">
          <div className="ui-text-strong text-base font-semibold">learning</div>

          <div className="mt-3 flex flex-wrap gap-2">
            {site.now.learning.map((l) => (
              <span
                key={l}
                className="
                  ui-chip-subtle ui-text
                  rounded-full border px-3 py-1 text-xs
                  transition-colors
                "
              >
                {l}
              </span>
            ))}
          </div>

          {/* tiny note for future me */}
          <div className="ui-text-faint mt-4 text-xs">
            i'll keep updating this as i add projects + skills.
          </div>
        </div>
      </div>
    </Section>
  );
}
