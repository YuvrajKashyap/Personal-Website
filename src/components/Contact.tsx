// this is my contact section
// goal: make it super easy to reach me + see my socials in one glance

import { site } from "@/content/site";
import { Section } from "./Section";

type LinkItem = {
  label: string;
  href: string;
};

export function Contact() {
  // i’m keeping this list here so it’s easy to reorder later
  const links: LinkItem[] = [
    { label: "email", href: `mailto:${site.links.email}` },
    { label: "github", href: site.links.github },
    { label: "linkedin", href: site.links.linkedin },
    { label: "youtube", href: site.links.youtube },
    { label: "x", href: site.links.x },
    { label: "instagram", href: site.links.instagram },
    { label: "resume", href: site.links.resume },
  ];

  return (
    <Section id="contact" title="Contact">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/8 hover:border-white/20 hover:-translate-y-[2px]">
        {/* top line */}
        <div className="text-sm text-white/70 leading-relaxed max-w-2xl">
          if you’re hiring for swe internships (summer 2026) or want to talk research / ai /
          building stuff, hit me.
        </div>

        {/* social buttons */}
        <div className="mt-5 flex flex-wrap gap-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/35"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* little note so i remember to replace placeholder links */}
        <div className="mt-4 text-xs text-white/40">
          reminder: i need to replace the placeholder handles in <span className="text-white/60">site.ts</span>.
        </div>
      </div>
    </Section>
  );
}
