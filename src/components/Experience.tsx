// this is my experience section
// i’m keeping it clean + skimmable, but still “real” and not fluffy

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
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/8 hover:border-white/20 hover:-translate-y-[2px]"
          >
            {/* top row: title + time */}
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="text-sm md:text-base font-semibold text-white/90">
                {item.title}
              </div>

              {/* time stays subtle */}
              <div className="text-xs text-white/45">{item.time}</div>
            </div>

            {/* org line */}
            <div className="mt-1 text-sm text-white/60">{item.org}</div>

            {/* bullets */}
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {item.bullets.map((b) => (
                <li key={b} className="leading-relaxed">
                  {/* tiny bullet dot but still minimal */}
                  <span className="mr-2 text-white/35">•</span>
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
