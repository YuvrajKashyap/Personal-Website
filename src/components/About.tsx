// this is my about section component
// it pulls text from site.ts so i can update content without touching layout code

import { site } from "@/content/site";
import { Section } from "./Section"; // i'm using a reusable wrapper so every section feels consistent

export function About() {
  return (
    // id="about" is what the nav scrolls to
    <Section id="about" title={site.about.title}>
      <div className="grid gap-6 md:grid-cols-[1fr_280px]">
        {/* left side: actual about text */}
        <div className="ui-card rounded-2xl border p-5 transition hover:-translate-y-[2px]">
          <div className="ui-text-muted space-y-3 text-sm leading-relaxed">
            {/* these are my main about paragraphs */}
            {site.about.body.map((p) => (
              <p key={p}>{p}</p>
            ))}

            {/* this is my minimal "outside tech" line (astrophysics) */}
            <p className="ui-text">{site.about.outsideTech}</p>
          </div>
        </div>

        {/* right side: quick facts (this keeps it apple-ish and skimmable) */}
        <div className="ui-card rounded-2xl border p-5 transition hover:-translate-y-[2px]">
          <div className="ui-text-strong text-sm font-semibold">quick facts</div>

          <div className="ui-text mt-3 space-y-2 text-sm">
            <div>• cs @ ut dallas</div>
            <div>• ai/ml + full-stack</div>
            <div>• research-driven</div>
            <div>• aspiring founder</div>
          </div>

          {/* optional note for me so i don't forget */}
          <div className="ui-text-faint mt-5 text-xs">
            i can add a photo later (totally optional).
          </div>
        </div>
      </div>
    </Section>
  );
}
