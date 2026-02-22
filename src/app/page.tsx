// this is my main page (one-page scroll style)
// i keep the page assembly here and pull all actual content from site.ts

import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { site } from "@/content/site";
import { Nav } from "@/components/Nav";
import { Work } from "@/components/Work";
import { Experience } from "@/components/Experience";
import { Now } from "@/components/Now";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { SocialLinks } from "@/components/SocialLinks";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Page() {
  // i check for the local photo so the hero degrades gracefully if the file is missing
  const heroPhotoPath = "/images/hero-photo.jpg";
  const hasHeroPhoto = existsSync(path.join(process.cwd(), "public", "images", "hero-photo.jpg"));
  const emailHref = `mailto:${site.links.email}`;

  // quick initials fallback (only used if the photo file is missing)
  const initials = site.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");

  return (
    <main className="min-h-screen text-[rgb(var(--fg))]">
      {/* top nav stays focused on section jumps + recruiter actions */}
      <Nav />

      {/* i keep theme outside the nav so it feels like a site-level control */}
      <div className="fixed right-4 top-4 z-[60] sm:right-5 sm:top-5">
        <ThemeToggle />
      </div>

      {/* hero section (first impression) */}
      <section id="home" className="ui-section-hero">
        <div className="ui-container">
          <div className="relative">
            {/* soft aura behind the hero panel */}
            <div className="pointer-events-none absolute -inset-10 opacity-50">
              <div className="hero-glow" />
            </div>

            {/* i keep the hero panel slightly richer than the rest of the cards */}
            <div className="ui-surface ui-surface-hero ui-radius-lg border backdrop-blur px-6 py-7 md:px-10 md:py-10">
              <div className="grid items-center gap-9 md:grid-cols-[1.18fr_0.82fr]">
                {/* left side: core recruiting pitch */}
                <div>
                  <div className="ui-accent-pill type-meta-strong inline-flex items-center px-4 py-2">
                    {site.statusPill}
                  </div>

                  <div className="type-kicker ui-text-muted mt-6">hey, i&apos;m</div>

                  <h1 className="type-hero-name mt-1">{site.name}</h1>

                  <p className="type-hero-tagline ui-text mt-4 max-w-xl">
                    {site.hero.headline}
                  </p>

                  <p className="type-body ui-text-soft mt-4 max-w-2xl">
                    {site.hero.subheadline}
                  </p>

                  {/* i keep work/resume/email visible here for recruiter flow */}
                  <div className="mt-7 flex flex-wrap items-center gap-2.5">
                    <a
                      href={`#${site.hero.ctaPrimary.to}`}
                      className="ui-button ui-button-accent ui-interactive ui-pill"
                    >
                      {site.hero.ctaPrimary.label}
                    </a>

                    <a
                      href={site.hero.ctaSecondary.href}
                      className="ui-button ui-button-subtle ui-interactive ui-pill"
                    >
                      {site.hero.ctaSecondary.label}
                    </a>

                    <a
                      href={emailHref}
                      className="ui-button ui-button-subtle ui-interactive ui-pill"
                    >
                      {site.ui.emailCtaLabel}
                    </a>
                  </div>

                  <div className="mt-6">
                    <SocialLinks />
                  </div>
                </div>

                {/* right side: portrait / fallback */}
                <div className="flex md:justify-end">
                  <div className="w-full max-w-[330px]">
                    <div className="ui-surface ui-radius-lg border p-3">
                      <div className="ui-radius-lg ui-surface-soft relative aspect-square overflow-hidden border ui-separator">
                        {hasHeroPhoto ? (
                          <>
                            <Image
                              src={heroPhotoPath}
                              alt={`${site.name} portrait`}
                              fill
                              sizes="(max-width: 768px) 100vw, 330px"
                              className="object-cover object-[54%_38%]"
                              priority
                            />

                            {/* i add a soft bottom fade so the crop reads better in both themes */}
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
                          </>
                        ) : (
                          <div className="absolute inset-0 grid place-items-center">
                            <div className="ui-chip grid h-28 w-28 place-items-center border">
                              <div className="ui-text-strong text-3xl font-semibold">
                                {initials}
                              </div>
                            </div>

                            <div className="ui-text-faint type-meta absolute bottom-4">
                              add `public/images/hero-photo.jpg`
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="type-meta ui-text-faint mt-3">{site.roleLine}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* recruiter priority order */}
      <Work />
      <Experience />
      <Now />
      <About />
      <Contact />

      <footer className="ui-footer">
        <div className="ui-container type-meta ui-text-faint">
          &copy; {new Date().getFullYear()} {site.name} - {site.domain}
        </div>
      </footer>
    </main>
  );
}
