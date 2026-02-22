// this file is my manual tracker content (no integrations, no private data)
// i can update this whenever i ship something or change priorities

export type TrackerItemStatus = "active" | "queued" | "shipped";

export type TrackerItem = {
  title: string;
  note: string;
  status: TrackerItemStatus;
  link?: string;
  updatedAt: string; // yyyy-mm-dd
};

export type TrackerSection = {
  title: string;
  items: TrackerItem[];
};

export const tracker = {
  title: "Tracker",
  subtitle:
    "a curated build queue for what i'm actively working on, what i'm teeing up next, and what just shipped.",
  lastUpdated: "2026-02-22",
  sections: [
    {
      title: "In Progress",
      items: [
        {
          title: "portfolio v2 polish pass",
          note: "tightening typography, interaction polish, and consistency across sections.",
          status: "active" as const,
          link: "/",
          updatedAt: "2026-02-22",
        },
        {
          title: "uav planning research implementation notes",
          note: "turning paper + geometric assumptions into a cleaner experiment pipeline.",
          status: "active" as const,
          updatedAt: "2026-02-21",
        },
        {
          title: "internship recruiting pipeline tracker",
          note: "manual workflow for applications, follow-ups, and materials quality control.",
          status: "active" as const,
          updatedAt: "2026-02-20",
        },
      ],
    },
    {
      title: "Up Next",
      items: [
        {
          title: "project case study pages",
          note: "deep dives for research + engineering work with problem, constraints, and results.",
          status: "queued" as const,
          updatedAt: "2026-02-22",
        },
        {
          title: "resume refresh (spring recruiting version)",
          note: "sharper bullets, outcomes first, cleaner technical signal.",
          status: "queued" as const,
          link: "/resume.pdf",
          updatedAt: "2026-02-19",
        },
        {
          title: "youtube workflow cleanup",
          note: "reduce editing friction and make publishing cadence more sustainable.",
          status: "queued" as const,
          link: "https://www.youtube.com/@yk.blueprint",
          updatedAt: "2026-02-18",
        },
      ],
    },
    {
      title: "Recently Shipped",
      items: [
        {
          title: "light / dark theme system",
          note: "dataset-based theme toggle with local storage persistence and system fallback.",
          status: "shipped" as const,
          link: "/",
          updatedAt: "2026-02-22",
        },
        {
          title: "hero portrait integration",
          note: "real image in the hero slot with theme-safe framing and fallback behavior.",
          status: "shipped" as const,
          link: "/",
          updatedAt: "2026-02-22",
        },
      ],
    },
  ] satisfies TrackerSection[],
};
