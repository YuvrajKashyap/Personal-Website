# project spec — yuvrajkashyap.com (personal website)

## 0) north star
this website exists to maximize my chances of landing **swe internships (summer 2026)** while also communicating:
- i’m legit (real work, real momentum)
- i have taste (apple-grade ui/ux)
- i build (projects, research, systems)
- i’m a long-term builder (aspiring founder)

primary viewer: recruiter + hiring manager (30s skim → clicks resume/projects).
secondary viewer: founders / builders / friends in tech.

success = a recruiter can instantly answer:
- who is he?
- what does he build?
- is he actively looking?
- how do i contact him / see resume?

## 1) core principles (this is the “not ai-coded” rulebook)
### design principles
- apple-grade = restraint, clarity, spacing, hierarchy, intentional motion.
- fewer elements, better quality.
- avoid “generic tailwind blocks” and “random glass cards everywhere”.
- no repeated lines of text (no duplicate identity strips).
- everything must align to a consistent design system: spacing, border, surface, hover, typography.

### engineering principles
- keep code modular + readable (components per section).
- content should be editable without touching layout (centralized data file).
- no unnecessary libraries (keep dependency surface small).
- performance matters (fast load, minimal jank).
- always keep vercel build passing.

### interaction principles
- motion should feel intentional and subtle (not gimmicky).
- hover states should be consistent across nav/buttons/cards/icons.
- keyboard focus states must exist (focus-visible rings).
- respect reduced motion settings.

## 2) current stack + deployment
- framework: next.js (app router) + typescript
- styling: tailwind css + css variables in globals.css
- hosting: vercel (auto deploy on push)
- domain: yuvrajkashyap.com + www.yuvrajkashyap.com

## 3) information architecture (site structure)
one-page scroll (hybrid):
- home (hero)
- work (selected work cards)
- now (current focus + learning)
- experience (timeline/cards)
- about (short story + outside-tech interest: astrophysics)
- contact (easy links + email)

nav: centered glass pill (not full-width bar), sticky/floating at top.

note: later we can add project detail pages or modals (hybrid), but v1 is one-page.

## 4) content system (single source of truth)
content lives in: `src/content/site.ts`
- hero: headline/subheadline/status pill
- work: list of cards
- now: building + learning list
- experience: role cards
- about: short story + astrophysics line
- links: github/linkedin/youtube/x/instagram/email/resume

rule: layout components should pull from site.ts, not hardcode content.

## 5) visual design system (must be consistent)
### theme requirement
- must support **light + dark** with a user toggle (persisted in localStorage).
- default theme:
  - if localStorage theme exists, use it
  - else follow prefers-color-scheme
- implementation should be via:
  - `document.documentElement.dataset.theme = "light" | "dark"`
  - css variables defined in `globals.css` for both themes

### colors
use css variables for:
- --bg
- --fg
- --muted
- --surface
- --surface2
- --border
- --accent (cyan for now, but should be easy to swap)
- --accentSoft
- --shadow

dark vibe: cinematic, deep, subtle gradients, not “cheap neon”.
light vibe: clean, crisp, slightly warm/neutral, not washed out.

### typography
- prioritize clean modern sans (current ok, can upgrade later).
- hierarchy rules:
  - hero name = largest
  - hero tagline = medium
  - hero subheadline = small muted
  - section titles consistent
- avoid too many font sizes. use a tight scale.

### spacing + rhythm
- sections should have consistent vertical rhythm (no random pt/pb).
- max width: `max-w-5xl` for content container.
- cards: consistent padding + border radius (rounded-2xl / rounded-3xl).
- avoid stacking too many boxes inside boxes.

### surfaces
- surfaces should be consistent:
  - nav pill: surface + blur + border
  - hero: ideally open layout, but v1 can be “glass surface” as placeholder
  - cards: subtle border + hover lift, not aggressive

hover system:
- background: surface → surface2
- border: border → stronger border
- micro lift: translateY(-2px)
- no giant scaling (except very subtle on icons if desired)

## 6) hero (landing) requirements
goal: the hero should “open” with me (not generic).
hero layout target:
- left: greeting + name + tagline + subheadline + ctas + social icons
- right: my photo (nice crop, premium frame)
- status pill visible: “actively looking for swe internships — summer 2026”

hero should not feel like “a chunky rectangle block”.
v2: hero becomes more open (less boxed), more white space, fewer borders.

photo:
- use next/image when real photo is added (from /public).
- default placeholder is ok temporarily.

social icons:
- clickable + hover states consistent with design system.
- no jarring scale jumps.

## 7) work section requirements
- show 2–4 “selected work” cards only (tight list).
- each card should read like premium product tiles.
- support “private / in progress” label without feeling dead.
- if link exists, show “open project” hint and arrow.

future:
- add project detail pages/modals.

## 8) now section requirements
- should feel like a “live update” section without being messy.
- two columns:
  - building list
  - learning tags (ordered by importance)
- include internship status pill (or small line) without duplicating hero.

## 9) experience requirements
- clean cards or timeline style.
- include:
  - research assistant (daescu lab)
  - nova program
  - peer advisor (pa)
- each entry:
  - title, org, time, 2–3 bullets
- keep bullets real and not fluffy.

## 10) about requirements
- short, confident, human.
- include astrophysics interest line minimalistically.
- optional quick facts column.
- later: add photo/extra interests (but keep minimal).

## 11) contact requirements
- make contacting me extremely easy:
  - email
  - github
  - linkedin
  - youtube
  - x
  - instagram
  - resume
- eventually add a real contact form (serverless route) if needed.
- keep the section premium, not spammy.

## 12) “tracker / tasks” page idea (later)
goal: a separate page that shows what i’m currently up to.

constraints:
- do not connect to my real google tasks publicly (privacy risk).
- v1: `/tracker` page shows a curated “public now list” (manual json in repo).
- v2: private version behind auth for real google tasks integration (optional).
- implement inside next.js (route + server functions), no separate express backend unless we’re building a product.

## 13) seo + polish checklist (v1 ship)
must:
- proper site title + description metadata (app router metadata)
- favicon (custom)
- og image (social preview)
- resume.pdf in /public (once ready)
- clean README (short, accurate)
- ensure vercel build passes (npm run build)
- ensure mobile looks good

nice later:
- analytics (vercel analytics or plausible)
- speed insights
- blog (markdown)
- project detail pages
- subtle scroll reveals (framer motion) if tasteful

## 14) “hates” workflow (iteration system)
we iterate in batches:
- 3 hates at a time
- codex implements
- i review
- commit

feedback format:
- priority (1–5)
- what looks wrong (1 sentence)
- what i want instead (1–2 sentences)
- reference (optional)

## 15) current priority roadmap (do these in order)
### p0 (must fix “ai-coded vibe”)
1) implement real light/dark toggle (theme system + css vars).
2) reduce boxiness: fewer borders, more open spacing, cleaner surfaces.
3) unify typography scale + spacing rhythm across sections.
4) clean hover language (consistent across nav/cards/icons/buttons).

### p1 (hero becomes premium)
5) hero open layout (less boxed), photo integration looks premium.
6) add my real photo (next/image) + optional subtle hover.
7) make socials + ctas look like a cohesive system.

### p2 (site polish)
8) redo Now + Contact to match Work quality.
9) refine Experience to feel less “card dump”.
10) add metadata/og/favicon.

### p3 (bonus features)
11) add `/tracker` page (public curated list).
12) consider serverless contact form.
13) consider dynamic stats (github/leetcode) if it adds value.

## 16) constraints (non-negotiables)
- no new libraries unless i explicitly approve.
- code must build on vercel (npm run build).
- do not expose personal/private tasks publicly.
- keep everything minimal and premium.
- comments in code are in first-person lowercase and sound like me.