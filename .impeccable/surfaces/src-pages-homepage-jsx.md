---
version: 1
slug: "src-pages-homepage-jsx"
primary_target: "src/pages/HomePage.jsx"
related_targets: ["src/index.css","src/components/layout/Layout.css"]
---

# Study Smart app shell + Home (whole-app burgundy overhaul)

Scope: design system tokens, app shell (sidebar, header), Home dashboard first; Chapters, Notes, Exercises, Flashcards, Past Papers, Progress, Mistakes, Settings inherit the same system. Visitor mode: Operate (Notes surfaces: Read).

Audience/job: international Edexcel IAL & IGCSE students revising in the evening at home, often on phones. Task on Home: resume study in one tap, see momentum (streak, progress), pick a subject.

Constraints: burgundy is the main colour (user-pinned); clean sans body + Patrick Hand note headings; dark-first, light first-class; WCAG AA; 44px targets; read-progress keys unchanged.

## Direction contract

THESIS: Category-standard study app at Notion/Duolingo/Quizlet/Khan craft, made ours by one decision: burgundy owns the brand field (sidebar, primary actions, progress) on warm burgundy-tinted neutrals. Refuses the incumbent navy dashboard with glowing icon tiles, floating emoji and gradient everything.

OWN-WORLD: Dark ground of warm near-black with a burgundy cast; surfaces one step lifted; hairline warm borders; burgundy #8b1e3f family for primary fills, rose tint for text-on-dark accents; gold for streak/achievement only; green for done. Rounded 14–16px cards, 12px buttons, pill chips, progress rings for subject mastery, line icons (lucide). Inter UI, tabular numerals for stats.

STORY: Student opens the app at night, is greeted, sees "Continue learning" with the exact note they left, their streak, and subjects with mastery rings; one tap resumes; they never wonder where to go next.

FIRST VIEWPORT: Desktop: burgundy sidebar left; content: greeting + date line top-left, streak chip top-right; a wide Continue card (subject, subtopic title, progress, primary "Resume" button) beside a compact Today stack (notes read, exercises, recall). Below: "Your subjects" grid of cards with progress rings. Phone: greeting, Continue card full width, streak inline, subjects 2-up.

FORM: Category standard (user took the standing exit); grounded list position: canon, outside the ordered seven; seed key 50978d42 (degraded roll). Signature interaction: subject progress rings animate from 0 to value once on first paint; Continue card is the single primary action. Motion grammar: one staggered settle on load, ease-out, reduced-motion respected.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
