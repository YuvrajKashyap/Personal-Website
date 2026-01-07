// this is my "now" section (what i'm up to right now)
// i’m keeping it clean + skimmable so it doesn’t look like a messy blog

import { site } from "@/content/site";
import { Section } from "./Section";

export function Now() {
  return (
    <Section id="now" title="Now">
      <div className="grid gap-4 md:grid-cols-2">
        {/* left: what i’m building */}
        <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/8 hover:border-white/20 hover:-translate-y-[2px]">
          <div className="text-base font-semibold text-white/90">building</div>

          <ul className="mt-3 space-y-2 text-sm text-white/70">
            {site.now.building.map((b) => (
              <li key={b} className="leading-relaxed">
                <span className="mr-2 text-white/35">•</span>
                {b}
              </li>
            ))}
          </ul>

          {/* i want this status super visible */}
          <div className="mt-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs text-cyan-100">
            {site.statusPill}
          </div>
        </div>

        {/* right: what i’m learning */}
        <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/8 hover:border-white/20 hover:-translate-y-[2px]">
          <div className="text-base font-semibold text-white/90">learning</div>

          <div className="mt-3 flex flex-wrap gap-2">
            {site.now.learning.map((l) => (
              <span
                key={l}
                className="
                  rounded-full border border-white/10 bg-white/5
                  px-3 py-1 text-xs text-white/70
                  group-hover:border-white/15 transition-colors
                "
              >
                {l}
              </span>
            ))}
          </div>

          {/* tiny note for future me */}
          <div className="mt-4 text-xs text-white/40">
            i’ll keep updating this as i add projects + skills.
          </div>
        </div>
      </div>
    </Section>
  );
}
