// this is my "selected work" section
// goal: clean, premium cards that feel intentional (not generic blocks)

import { site } from "@/content/site";
import { Section } from "./Section";

type WorkItem = {
  title: string;
  description: string;
  tags: string[];
  href: string | null;
  note: string;
};

function ArrowIcon() {
  return (
    // tiny arrow so clickable cards feel more app-like
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 17.6 16.6 8H10V6h10v10h-2V9.4L8.4 19 7 17.6z"
      />
    </svg>
  );
}

export function Work() {
  return (
    <Section id="work" title="Work">
      <div className="grid gap-4 md:grid-cols-3">
        {site.work.map((project: WorkItem) => {
          const clickable = Boolean(project.href);

          return (
            <div key={project.title} className="h-full">
              <a
                href={project.href ?? "#"}
                target={clickable ? "_blank" : undefined}
                rel={clickable ? "noreferrer" : undefined}
                aria-disabled={!clickable}
                className={[
                  "ui-surface ui-radius-lg block h-full border p-5 md:p-6",
                  clickable ? "ui-interactive" : "cursor-default opacity-[0.96]",
                  !clickable ? "pointer-events-none" : "",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="type-card-title ui-text-strong">{project.title}</div>

                  <div className="type-meta ui-text-faint flex items-center gap-2">
                    <span className="ui-chip-subtle px-2.5 py-1">{project.note}</span>

                    {clickable ? (
                      <span className="ui-text-soft">
                        <ArrowIcon />
                      </span>
                    ) : null}
                  </div>
                </div>

                <p className="type-body-sm ui-text-muted mt-3">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="ui-chip-subtle type-meta ui-text px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="type-meta ui-text-faint mt-6">
                  {clickable ? "open project" : "private / in progress"}
                </div>
              </a>
            </div>
          );
        })}
      </div>

      <div className="type-meta ui-text-faint mt-5">
        i&apos;m keeping this tight on purpose. more projects get added as i ship.
      </div>
    </Section>
  );
}
