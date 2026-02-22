// this is my experience section
// i'm keeping it clean + skimmable, but still "real" and not fluffy

import { site } from "@/content/site";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="grid gap-4">
        {/* loop through my experience items from site.ts */}
        {site.experience.map((item) => (
          <div
            key={`${item.title}-${item.org}`}
            className="ui-card rounded-2xl border p-6 transition hover:-translate-y-[2px]"
          >
            {/* top row: title + time */}
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="ui-text-strong text-sm font-semibold md:text-base">
                {item.title}
              </div>

              {/* time stays subtle */}
              <div className="ui-text-faint text-xs">{item.time}</div>
            </div>

            {/* org line */}
            <div className="ui-text-muted mt-1 text-sm">{item.org}</div>

            {/* bullets */}
            <ul className="ui-text mt-4 space-y-2 text-sm">
              {item.bullets.map((b) => (
                <li key={b} className="leading-relaxed">
                  {/* tiny bullet dot but still minimal */}
                  <span className="ui-text-faint mr-2">•</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
