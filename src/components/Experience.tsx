// this is my experience section
// i'm keeping it clean + skimmable, but still real and useful

import { site } from "@/content/site";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="grid gap-4">
        {site.experience.map((item) => (
          <div
            key={`${item.title}-${item.org}`}
            className="ui-surface ui-radius-lg ui-interactive border p-5 md:p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="type-card-title ui-text-strong">{item.title}</div>
              <div className="type-meta ui-text-faint">{item.time}</div>
            </div>

            <div className="type-body-sm ui-text-muted mt-1">{item.org}</div>

            <ul className="mt-4 space-y-2">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="type-body-sm ui-text flex gap-2">
                  <span className="ui-text-faint mt-[0.1rem] shrink-0">-</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
