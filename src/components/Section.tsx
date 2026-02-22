// this is my reusable section wrapper so every section looks consistent and premium
// it keeps the width, spacing, and title style the same across the whole page

import type { ReactNode } from "react";

type SectionProps = {
  id: string; // this is what the navbar scrolls to
  title: string; // section title like "Work" / "Now" / "About"
  children: ReactNode; // whatever content i put inside the section
};

export function Section({ id, title, children }: SectionProps) {
  return (
    // each section has an id for smooth scrolling
    <section id={id} className="py-20">
      <div className="mx-auto w-full max-w-5xl px-5">
        {/* section title */}
        <div className="mb-6 flex items-end justify-between">
          <h2 className="ui-text-strong text-lg md:text-xl font-semibold tracking-tight">
            {title}
          </h2>

          {/* tiny divider line just to make it feel more “designed” */}
          <div className="ui-divider hidden md:block h-px w-40" />
        </div>

        {/* section content */}
        {children}
      </div>
    </section>
  );
}
