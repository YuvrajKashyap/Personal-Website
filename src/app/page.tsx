// this is my main page. everything on my website is basically rendered from here (one-page scroll style)

import { site } from "@/content/site"; // this is my content file so i can change text/projects later without touching layout code
import { Nav } from "@/components/Nav"; // my sticky top nav that scrolls to sections
import { Work } from "@/components/Work"; // my "selected work" section
import { Now } from "@/components/Now"; // my "now" section (what i'm up to)
import { Experience } from "@/components/Experience"; // my experience section
import { About } from "@/components/About"; // my about section (and astrophysics line)
import { Contact } from "@/components/Contact"; // my contact section + socials
import { SocialLinks } from "@/components/SocialLinks"; // my clickable icon row (hover + premium)

export default function Page() {
  // quick initials for my placeholder avatar (until i add my real photo)
  const initials = site.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

  return (
    // this wrapper holds the entire site
    <main className="min-h-screen text-[rgb(var(--fg))]">
      {/* top nav (sticky + premium) */}
      <Nav />

      {/* hero section (first impression) */}
      <section id="home" className="pt-32 pb-20">
        <div className="mx-auto w-full max-w-5xl px-5">
          {/* hero wrapper (lighter glass instead of heavy block) */}
          <div className="relative">
            {/* background glow layer */}
            <div className="absolute -inset-10 opacity-45 pointer-events-none">
              <div className="hero-glow" />
            </div>

            {/* this is the “glass” surface */}
            <div className="ui-hero-surface relative rounded-[32px] border backdrop-blur p-8 md:p-12">
              {/* content grid */}
              <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center">
                {/* left side: text */}
                <div>
                  {/* internship status pill (i want this super visible) */}
                  <div className="ui-accent-pill inline-flex rounded-full border px-4 py-2 text-xs">
                    {site.statusPill}
                  </div>

                  {/* greeting */}
                  <div className="ui-text-muted mt-6 text-sm">hey, i&apos;m</div>

                  {/* name (main hero headline) */}
                  <h1 className="mt-1 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                    {site.name}
                  </h1>

                  {/* clean tagline */}
                  <p className="ui-text mt-4 text-base md:text-lg leading-relaxed max-w-xl">
                    {site.hero.headline}
                  </p>

                  {/* supporting line */}
                  <p className="ui-text-soft mt-4 text-sm md:text-base max-w-2xl leading-relaxed">
                    {site.hero.subheadline}
                  </p>

                  {/* buttons */}
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <a
                      href={`#${site.hero.ctaPrimary.to}`}
                      className="ui-accent-button rounded-xl border px-4 py-2 text-sm transition-colors"
                    >
                      {site.hero.ctaPrimary.label}
                    </a>

                    <a
                      href={site.hero.ctaSecondary.href}
                      className="ui-subtle-button ui-text-strong rounded-xl border px-4 py-2 text-sm transition-colors"
                    >
                      {site.hero.ctaSecondary.label}
                    </a>
                  </div>

                  {/* socials */}
                  <div className="mt-6">
                    <SocialLinks />
                  </div>
                </div>

                {/* right side: photo */}
                <div className="flex md:justify-end">
                  <div className="w-full max-w-[320px]">
                    <div className="ui-card rounded-3xl border p-4">
                      <div className="ui-chip-subtle relative aspect-square rounded-2xl overflow-hidden">
                        {/* placeholder until i add my photo */}
                        <div className="absolute inset-0 grid place-items-center">
                          <div className="ui-chip h-28 w-28 rounded-2xl border grid place-items-center">
                            <div className="ui-text-strong text-3xl font-semibold">
                              {initials}
                            </div>
                          </div>

                          <div className="ui-text-faint absolute bottom-4 text-xs">
                            add my photo later
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="ui-text-faint mt-3 text-xs">
                      cs @ ut dallas • applied ml + full-stack
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-2" />
        </div>
      </section>

      {/* rest of my sections */}
      <Work />
      <Now />
      <Experience />
      <About />
      <Contact />

      {/* footer */}
      <footer className="py-10">
        <div className="ui-text-faint mx-auto w-full max-w-5xl px-5 text-xs">
          © {new Date().getFullYear()} {site.name} • {site.domain}
        </div>
      </footer>
    </main>
  );
}
