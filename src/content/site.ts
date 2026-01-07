// this file is where i keep all my website text/data in one place
// so i can update stuff later without touching layout/components every time

export const site = {
  // basic identity stuff
  name: "Yuvraj Kashyap",
  domain: "yuvrajkashyap.com",

  // this is the small identity strip line under the hero
  roleLine:
    "cs @ ut dallas • applied ml + full-stack • navigation/planning research • aspiring founder",

  // this is the pill i want recruiters to notice instantly
  statusPill: "actively looking for swe internships — summer 2026",

  // top nav items (super easy to reorder later)
  nav: [
    { id: "home", label: "Home" },
    { id: "work", label: "Work" },
    { id: "now", label: "Now" },
    { id: "experience", label: "Experience" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ],

  // my links live here (i’ll fill these later)
  links: {
    email: "you@example.com", // replace later
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-handle",
    youtube: "https://www.youtube.com/@yk.blueprint",
    x: "https://x.com/your-handle",
    instagram: "https://instagram.com/your-handle",
    resume: "/resume.pdf", // drop resume.pdf into /public when ready
  },

  // hero content
  hero: {
    headline: "building clean, fast software with an ai-first mindset.",
    subheadline:
      "cs @ ut dallas • applied ml + full-stack • uav navigation/planning research • aspiring founder",
    ctaPrimary: { label: "View Work", to: "work" },
    ctaSecondary: { label: "Download Resume", href: "/resume.pdf" },
  },

  // work cards (v1 = small + clean)
  work: [
    {
      title: "uav navigation + planning (research)",
      description:
        "3d path planning + geometric modeling for urban environments. focused on real constraints, speed/optimality tradeoffs, and turning theory into an implementable pipeline.",
      tags: ["Research", "Planning", "Geometry", "ML/AI"],
      href: null,
      note: "in progress • private",
    },
    {
      title: "portfolio website (this site)",
      description:
        "apple-grade one-page portfolio built with next.js + motion. designed to iterate fast as i ship more projects.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Motion"],
      href: null,
      note: "v1 shipping now",
    },
    {
      title: "yk blueprint (youtube)",
      description:
        "building an audience by documenting systems, learning, and execution. long-term leverage play.",
      tags: ["Content", "Storytelling", "Consistency"],
      href: "https://www.youtube.com/@yk.blueprint",
      note: "public",
    },
  ],

  // now section
  now: {
    building: [
      "uav navigation/planning research (daescu)",
      "personal portfolio website (v1 → iterating weekly)",
      "growing an audience on youtube (yk blueprint)",
    ],
    learning: [
      "next.js (app router)",
      "typescript",
      "react patterns (component architecture)",
      "tailwind (systematic ui)",
      "ml systems (data → train → evaluate)",
      "pytorch",
      "llm integration",
      "sales fundamentals",
      "content creation systems",
      "quantitative analysis",
    ],
  },

  // experience section
  experience: [
    {
      title: "research assistant — uav navigation/planning",
      org: "ut dallas (daescu lab)",
      time: "current",
      bullets: [
        "working on modeling + planning problems with geometric assumptions + real constraints.",
        "bridging theory → implementable pipeline (data, sim, optimization, evaluation).",
      ],
    },
    {
      title: "nova autonomous driving research program",
      org: "program / lab",
      time: "past",
      bullets: ["research-oriented engineering work in autonomy (i’ll expand later)."],
    },
    {
      title: "peer advisor (pa)",
      org: "ut dallas housing",
      time: "past / current",
      bullets: [
        "leadership role with real responsibility + documentation standards.",
        "built systems for tracking, communication, and consistent follow-through.",
      ],
    },
  ],

  // about section
  about: {
    title: "About",
    body: [
      "i’m a cs student at ut dallas focused on full-stack engineering and applied ml.",
      "i care about clean systems, real proof, and shipping fast without losing quality.",
    ],
    outsideTech:
      "outside of tech, i’m obsessed with astrophysics — especially cosmology and big-picture questions about the universe.",
  },
};
