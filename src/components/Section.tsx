// this is my reusable section wrapper so every section stays on the same rhythm
// it keeps width, spacing, and title treatment consistent across the page

import type { ReactNode } from "react";

type SectionProps = {
  id: string; // this is what the navbar scrolls to
  title: string; // section title like "Work" / "Now" / "About"
  children: ReactNode; // whatever content i put inside the section
};

export function Section({ id, title, children }: SectionProps) {
  return (
    // each section has an id for smooth scrolling
    <section id={id} className="ui-section">
      <div className="ui-container">
        {/* section title */}
        <div className="mb-7 flex items-end justify-between gap-4 md:mb-8">
          <h2 className="type-section-title ui-text-strong">{title}</h2>

          {/* tiny divider line so sections feel intentionally spaced */}
          <div className="ui-divider hidden h-px w-40 md:block" />
        </div>

        {/* section content */}
        {children}
      </div>
    </section>
  );
}
