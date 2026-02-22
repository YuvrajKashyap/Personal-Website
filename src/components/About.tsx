// this is my about section component
// it pulls text from site.ts so i can edit content without touching layout code

import { site } from "@/content/site";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" title={site.about.title}>
      <div className="grid gap-4 md:grid-cols-[1fr_300px]">
        <div className="ui-surface ui-radius-lg ui-interactive border p-5">
          <div className="space-y-3">
            {site.about.body.map((paragraph) => (
              <p key={paragraph} className="type-body ui-text-muted">
                {paragraph}
              </p>
            ))}

            <p className="type-body ui-text">{site.about.outsideTech}</p>
          </div>
        </div>

        <div className="ui-surface ui-radius-lg ui-interactive border p-5">
          <div className="type-card-title ui-text-strong">quick facts</div>

          <div className="mt-3 space-y-2">
            <div className="type-body-sm ui-text">cs @ ut dallas</div>
            <div className="type-body-sm ui-text">ai/ml + full-stack</div>
            <div className="type-body-sm ui-text">research-driven</div>
            <div className="type-body-sm ui-text">aspiring founder</div>
          </div>

          <div className="type-meta ui-text-faint mt-5">
            i can add more here later (awards, stack, or current focus).
          </div>
        </div>
      </div>
    </Section>
  );
}
