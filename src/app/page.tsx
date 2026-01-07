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
    <main className="min-h-screen text-white">
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
            <div className="relative rounded-[32px] border border-white/10 bg-black/20 backdrop-blur p-8 md:p-12">
              {/* content grid */}
              <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center">
                {/* left side: text */}
                <div>
                  {/* internship status pill (i want this super visible) */}
                  <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs text-cyan-100">
                    {site.statusPill}
                  </div>

                  {/* greeting */}
                  <div className="mt-6 text-sm text-white/60">hey, i&apos;m</div>

                  {/* name (main hero headline) */}
                  <h1 className="mt-1 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                    {site.name}
                  </h1>

                  {/* clean tagline */}
                  <p className="mt-4 text-base md:text-lg text-white/70 leading-relaxed max-w-xl">
                    {site.hero.headline}
                  </p>

                  {/* supporting line */}
                  <p className="mt-4 text-sm md:text-base text-white/55 max-w-2xl leading-relaxed">
                    {site.hero.subheadline}
                  </p>

                  {/* buttons */}
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <a
                      href={`#${site.hero.ctaPrimary.to}`}
                      className="rounded-xl bg-cyan-400/15 border border-cyan-400/25 px-4 py-2 text-sm text-cyan-100 hover:bg-cyan-400/20 hover:border-cyan-300/40 transition-colors"
                    >
                      {site.hero.ctaPrimary.label}
                    </a>

                    <a
                      href={site.hero.ctaSecondary.href}
                      className="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm text-white hover:bg-white/15 hover:border-white/20 transition-colors"
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
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <div className="relative aspect-square rounded-2xl overflow-hidden bg-black/30">
                        {/* placeholder until i add my photo */}
                        <div className="absolute inset-0 grid place-items-center">
                          <div className="h-28 w-28 rounded-2xl border border-white/10 bg-white/5 grid place-items-center">
                            <div className="text-3xl font-semibold text-white/80">
                              {initials}
                            </div>
                          </div>

                          <div className="absolute bottom-4 text-xs text-white/40">
                            add my photo later
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 text-xs text-white/45">
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
        <div className="mx-auto w-full max-w-5xl px-5 text-xs text-white/35">
          © {new Date().getFullYear()} {site.name} • {site.domain}
        </div>
      </footer>
    </main>
  );
}
