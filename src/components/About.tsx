// this is my about section component
// it pulls text from site.ts so i can update content without touching layout code

import { site } from "@/content/site";
import { Section } from "./Section"; // i’m using a reusable wrapper so every section feels consistent

export function About() {
  return (
    // id="about" is what the nav scrolls to
    <Section id="about" title={site.about.title}>
      <div className="grid gap-6 md:grid-cols-[1fr_280px]">
        {/* left side: actual about text */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/8 hover:border-white/20 hover:-translate-y-[2px]">
          <div className="space-y-3 text-sm text-white/70 leading-relaxed">
            {/* these are my main about paragraphs */}
            {site.about.body.map((p) => (
              <p key={p}>{p}</p>
            ))}

            {/* this is my minimal “outside tech” line (astrophysics) */}
            <p className="text-white/60">{site.about.outsideTech}</p>
          </div>
        </div>

        {/* right side: quick facts (this keeps it apple-ish and skimmable) */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/8 hover:border-white/20 hover:-translate-y-[2px]">
          <div className="text-sm font-semibold text-white/85">quick facts</div>

          <div className="mt-3 space-y-2 text-sm text-white/65">
            <div>• cs @ ut dallas</div>
            <div>• ai/ml + full-stack</div>
            <div>• research-driven</div>
            <div>• aspiring founder</div>
          </div>

          {/* optional note for me so i don’t forget */}
          <div className="mt-5 text-xs text-white/45">
            i can add a photo later (totally optional).
          </div>
        </div>
      </div>
    </Section>
  );
}
