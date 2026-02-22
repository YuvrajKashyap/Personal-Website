// this is my "now" section (what i'm up to right now)
// i keep it clean + skimmable so it reads fast

import { site } from "@/content/site";
import { Section } from "./Section";

export function Now() {
  return (
    <Section id="now" title="Now">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="ui-surface ui-radius-lg ui-interactive border p-5 md:p-6">
          <div className="type-card-title ui-text-strong">building</div>

          <ul className="mt-3 space-y-2">
            {site.now.building.map((item) => (
              <li key={item} className="type-body-sm ui-text flex gap-2">
                <span className="ui-text-faint mt-[0.1rem] shrink-0">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="ui-accent-pill type-meta-strong mt-5 inline-flex items-center px-4 py-2">
            {site.statusPill}
          </div>
        </div>

        <div className="ui-surface ui-radius-lg ui-interactive border p-5 md:p-6">
          <div className="type-card-title ui-text-strong">learning</div>

          <div className="mt-3 flex flex-wrap gap-2">
            {site.now.learning.map((item) => (
              <span key={item} className="ui-chip-subtle type-meta ui-text px-3 py-1">
                {item}
              </span>
            ))}
          </div>

          <div className="type-meta ui-text-faint mt-4">
            i&apos;ll keep updating this as i add projects + skills.
          </div>
        </div>
      </div>
    </Section>
  );
}
