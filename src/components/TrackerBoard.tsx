// this is my tracker board ui
// i keep it task-like and clean without turning it into a clone

import type { TrackerItem, TrackerSection } from "@/content/tracker";

type TrackerBoardProps = {
  sections: TrackerSection[];
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 17.6 16.6 8H10V6h10v10h-2V9.4L8.4 19 7 17.6z"
      />
    </svg>
  );
}

function statusClass(status: TrackerItem["status"]) {
  if (status === "active") return "ui-status ui-status-active";
  if (status === "shipped") return "ui-status ui-status-shipped";
  return "ui-status ui-status-queued";
}

function TrackerRow({
  item,
  isLast,
}: {
  item: TrackerItem;
  isLast: boolean;
}) {
  const rowClass = [
    "ui-interactive flex items-start gap-3 px-4 py-3.5 md:px-5",
    !isLast ? "border-b ui-separator" : "",
  ].join(" ");

  const meta = (
    <div className="ml-auto flex shrink-0 items-center gap-2 pl-3">
      <span className={statusClass(item.status)}>{item.status}</span>
      <span className="type-meta ui-text-faint">{formatDate(item.updatedAt)}</span>
      {item.link ? (
        <span className="ui-text-soft" aria-hidden="true">
          <ArrowIcon />
        </span>
      ) : null}
    </div>
  );

  const body = (
    <>
      <span className="ui-check mt-[0.2rem]" data-state={item.status} aria-hidden="true" />

      <div className="min-w-0 flex-1">
        <div className="type-card-title ui-text-strong">{item.title}</div>
        <p className="type-body-sm ui-text-muted mt-1">{item.note}</p>
      </div>

      {meta}
    </>
  );

  if (item.link) {
    const external = item.link.startsWith("http");

    return (
      <a
        href={item.link}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={rowClass}
      >
        {body}
      </a>
    );
  }

  return (
    <div
      tabIndex={0}
      role="group"
      aria-label={`${item.title}. ${item.status}. updated ${formatDate(item.updatedAt)}`}
      className={rowClass}
    >
      {body}
    </div>
  );
}

export function TrackerBoard({ sections }: TrackerBoardProps) {
  return (
    <div className="grid gap-4">
      {sections.map((section) => (
        <section key={section.title} className="ui-surface ui-radius-lg border overflow-hidden">
          <div className="border-b ui-separator px-4 py-3 md:px-5">
            <h2 className="type-card-title ui-text-strong">{section.title}</h2>
          </div>

          <div>
            {section.items.map((item, index) => (
              <TrackerRow
                key={`${section.title}-${item.title}`}
                item={item}
                isLast={index === section.items.length - 1}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
