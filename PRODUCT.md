# Product

<!-- impeccable:product-schema 1 -->

## Platform

web — a responsive React PWA. Phones are a primary device; mobile web stays `web`.

## Stack

Existing: React 19 + Vite 7, React Router 7, vanilla CSS with custom properties (no Tailwind, no TypeScript), Convex backend, Clerk auth, lucide-react icons, KaTeX, Chart.js.

## Users

International students preparing for Pearson Edexcel International A Level (IAL) and IGCSE exams, across many countries (the Maldives is one market among several). The catalogue also includes Cambridge CAE/CPE English. Students mostly revise in the **evening at home**, often on a phone, sometimes on a laptop.

Secondary roles: admins who approve accounts and trials (`/admin`).

Notes prioritise students who need more support with reading, working memory, confidence, or subject foundations. Use respectful language, short teaching steps, concrete examples, optional word help, and an unhurried pace. Do not label students by ability in the app.

## Jobs

- Read structured, syllabus-ordered notes (subject → unit → topic → subtopic) and mark them read.
- Start notes as guided lessons, resume a saved step, try a question with an explanation, and open the complete exam reference when needed.
- Self-test with recall cues, exercises (MCQ, fill-blank, drag-drop, sequence, keyword) and flashcards.
- Practise timed past papers and review performance.
- Track progress and streaks; revisit mistakes in the Mistake Bank.

## Capabilities and constraints

- Content is authored per syllabus subtopic; note blocks are rendered by `NoteBlockRenderer` (objective, heading, paragraph, list, checklist, equation, table, svg, callout, quote, code, summary, deeper).
- Accounts need approval (trial/approval flow); feature flags gate sections.
- Read progress is keyed by note ID (`note:{subject}:{unit}:{topic}:{index}`) and must survive UI changes.
- Dhivehi (Thaana) font support is loaded and must keep working.

## Brand commitments

- Name: **Study Smart**.
- **Burgundy is the main theme colour** (user-pinned, October 2026).
- Notes typography (user-confirmed): clean sans body text for reading; Patrick Hand kept for note headings.
- The app should feel study-friendly and attractive without overwhelming students — minimal chrome on small screens.
- Visual direction (user-chosen, October 2026): the **category standard** for study apps, executed at full craft — not an experimental world. Quality bar: Notion (calm, content-first), Duolingo (motivating progress and streaks), Quizlet (study-tool flows), Khan Academy (structured mastery progress).

## Accessibility

WCAG 2.1 AA contrast in both themes; 44px minimum touch targets; keyboard focus visible; respect `prefers-reduced-motion`.

## Open decisions

- Default theme follows the evening-study scene (dark first), with light mode as a first-class alternative.
