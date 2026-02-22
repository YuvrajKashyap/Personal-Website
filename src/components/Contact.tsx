// this is my contact section
// goal: make email + resume + core links obvious in one glance

import { site } from "@/content/site";
import { Section } from "./Section";

type LinkItem = {
  label: string;
  href: string;
};

export function Contact() {
  const primaryLinks: LinkItem[] = [
    { label: "email", href: `mailto:${site.links.email}` },
    { label: "resume", href: site.links.resume },
    { label: "linkedin", href: site.links.linkedin },
    { label: "github", href: site.links.github },
  ];

  const secondaryLinks: LinkItem[] = [
    { label: "youtube", href: site.links.youtube },
    { label: "x", href: site.links.x },
    { label: "instagram", href: site.links.instagram },
  ];

  return (
    <Section id="contact" title="Contact">
      <div className="ui-surface ui-radius-lg border p-5 md:p-6">
        <div className="type-body ui-text-muted max-w-2xl">
          if you&apos;re hiring for swe internships (summer 2026), or you want to talk research,
          ai, and building useful software, hit me.
        </div>

        <div className="mt-6">
          <div className="type-meta ui-text-faint mb-2">primary</div>
          <div className="flex flex-wrap gap-2">
            {primaryLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className={[
                  "ui-button ui-pill ui-interactive",
                  link.label === "email" || link.label === "resume"
                    ? "ui-button-accent"
                    : "ui-button-subtle",
                ].join(" ")}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <div className="type-meta ui-text-faint mb-2">secondary</div>
          <div className="flex flex-wrap gap-2">
            {secondaryLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="ui-button ui-button-subtle ui-pill ui-interactive"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="type-meta ui-text-faint mt-5">
          reminder: i still need to replace the placeholder handles in{" "}
          <span className="ui-text">site.ts</span>.
        </div>
      </div>
    </Section>
  );
}
