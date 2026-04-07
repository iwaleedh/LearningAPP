# CLAUDE.md — Study Smart

Reference document for AI agents and developers working on this codebase.

---

## Project Overview

**Study Smart** is an interactive A-Level exam-prep platform targeting Pearson Edexcel International A-Level students. It covers 7 subjects, delivering structured notes, exercises, flashcards, and past-paper practice inside a React PWA backed by Convex.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19.2 |
| Build | Vite 7.3 |
| Routing | React Router DOM 7.13 |
| Backend/Sync | Convex 1.34 |
| Legacy backend | Removed SpacetimeDB subtree (no longer active) |
| Math rendering | KaTeX 0.16 |
| Charts | Chart.js 4 + react-chartjs-2 |
| Icons | Lucide React |
| Styling | Vanilla CSS + CSS custom properties (no Tailwind) |
| PWA | Service Worker (`public/sw.js`) |
| Testing | Node native test runner (`--test`) |

**No TypeScript** — all source files are `.jsx` / `.js`.

---

## Dev Commands

```bash
npm run dev       # Vite dev server with HMR
npm run build     # Production build → dist/
npm run preview   # Preview production build
npm run lint      # ESLint check
npm run test      # node --test "src/**/*.test.js"
```

**Environment variables** (`.env.local`):
```
VITE_CONVEX_URL=https://<your-convex-deployment>.convex.cloud
VITE_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
```

---

## Directory Layout

```
LearningAPP/
├── src/
│   ├── App.jsx                    # Root component — routing, global keyboard shortcuts
│   ├── main.jsx                   # React root, Convex init
│   ├── convex-client.js           # Convex client singleton + imperative helpers
│   ├── index.css                  # Global design system (CSS custom properties)
│   ├── App.css
│   │
│   ├── pages/                     # Full-page route components
│   │   ├── HomePage.jsx           # Dashboard: stats, subject grid, quick actions
│   │   ├── ChapterPage.jsx        # Browse units/topics/subtopics by subject
│   │   ├── NotePage.jsx           # Primary reading view (lazy loaded)
│   │   ├── ExercisePage.jsx       # Practice problems
│   │   ├── PastPapersPage.jsx     # Timed past-paper practice
│   │   ├── FlashcardsPage.jsx     # Spaced repetition flashcards
│   │   ├── ProgressPage.jsx       # Study analytics
│   │   ├── MistakeBankPage.jsx    # Error review
│   │   ├── SettingsPage.jsx       # Preferences, theme
│   │   ├── TeacherDashboard.jsx   # Educator analytics
│   │   ├── AdvancedPage.jsx       # Advanced features (lazy loaded)
│   │   ├── Pages.css
│   │   └── NotePage.css
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx         # Top bar: menu toggle, search trigger
│   │   │   ├── Sidebar.jsx        # Left nav, theme toggle, mobile overlay
│   │   │   └── Layout.css
│   │   ├── notes/
│   │   │   ├── NoteBlockRenderer.jsx  # Renders all block types (see below)
│   │   │   ├── NoteBlockRenderer.css
│   │   │   ├── Notes.css
│   │   │   ├── Accordion.jsx
│   │   │   ├── GlossaryPopover.jsx
│   │   │   ├── CodePlayground.jsx
│   │   │   └── TextToSpeech.jsx
│   │   ├── exercises/
│   │   │   ├── MCQExercise.jsx        # Multiple choice
│   │   │   ├── FillBlankExercise.jsx  # Fill-in-blank (Levenshtein fuzzy match, tol=2)
│   │   │   ├── DragDropExercise.jsx   # Drag & drop categorisation
│   │   │   ├── SequenceExercise.jsx   # Ordering steps
│   │   │   └── KeywordCheck.jsx       # Keyword scanning
│   │   ├── student/
│   │   │   ├── CommandSearch.jsx  # ⌘K global search modal
│   │   │   ├── Highlighter.jsx
│   │   │   ├── StickyNotes.jsx
│   │   │   └── ExportPDF.jsx
│   │   ├── gamification/
│   │   │   ├── StreakTracker.jsx
│   │   │   ├── BadgeSystem.jsx
│   │   │   └── Leaderboard.jsx
│   │   ├── pastpapers/
│   │   │   ├── TimedExam.jsx
│   │   │   └── PerformanceChart.jsx
│   │   └── advanced/
│   │       └── AdvancedFeatures.jsx
│   │
│   ├── data/
│   │   ├── syllabusIndex.js           # getSyllabusBySubject(), getSubjectLabel()
│   │   ├── mathematicsSyllabus.js     # Unit/topic/subtopic definitions
│   │   ├── physicsSyllabus.js
│   │   ├── chemistrySyllabus.js
│   │   ├── biologySyllabus.js
│   │   ├── businessSyllabus.js
│   │   ├── economicsSyllabus.js
│   │   ├── accountingSyllabus.js
│   │   ├── *PastPapers.js             # Past paper data (7 files)
│   │   ├── noteDefinitions/           # Glossary terms per subject
│   │   ├── noteObjectives/            # Learning objectives per subject
│   │   └── seedNotes/
│   │       ├── index.js               # Imports & re-exports all notes (~400+)
│   │       ├── mathematics/           # 170+ note files
│   │       ├── physics/
│   │       ├── chemistry/
│   │       ├── biology/
│   │       ├── economics/
│   │       ├── business/
│   │       └── accounting/
│   │
│   ├── services/
│   │   ├── notes/
│   │   │   ├── noteContext.js         # buildNoteId, resolveNoteContext, breadcrumbs
│   │   │   ├── noteStore.js           # Local persistence helpers
│   │   │   ├── noteTypes.js           # Block type constants
│   │   │   ├── summaryValidation.js
│   │   │   └── mentionGraph.js        # Concept relationship graph
│   │   ├── pastPapers/
│   │   │   └── pastPaperService.js
│   │   └── grading/
│   │       └── gradingClient.js
│   │
│   ├── hooks/
│   │   ├── useNoteReadStatus.js   # localStorage read tracking (key: lt_read:{noteId})
│   │   ├── useTheme.js            # Dark/light mode toggle
│   │   ├── useDraftAutosave.js
│   │   └── usePwaStatus.js
│   │
│   ├── context/
│   │   ├── ThemeProvider.jsx      # Wraps app; sets data-theme on <html>
│   │   └── ThemeContext.jsx
│   │
├── convex/
│   ├── schema.ts                  # Convex schema
│   ├── http.ts                    # Convex HTTP actions
│   ├── featureFlags.ts            # Runtime feature flag storage
│   └── ...
│   │
│   ├── pwa/
│   │   ├── registerServiceWorker.js
│   │   └── pwaStatusStore.js
│   │
│   └── utils/
│       └── uploadValidation.js
│
├── public/
│   ├── notes/                     # Subject PDF folders served statically
│   │   ├── mathematics/
│   │   ├── chemistry/
│   │   ├── Biology/
│   │   └── Edexcel A Level Maths {Pure,Mechanics,Statistics}/
│   ├── pastpapers/                # ~1200 exam PDFs
│   │   ├── cae/
│   │   └── cpe/
│   ├── sw.js                      # Service worker
│   ├── manifest.json              # PWA manifest
│   └── icon-{192,512}.png
│
├── *.py                           # Python data pipeline scripts (see below)
├── vite.config.js
├── package.json
└── index.html
```

---

## Routing

All routes are defined in [src/App.jsx](src/App.jsx). `NotePage` and `AdvancedPage` are lazy-loaded.

| Route | Component | Notes |
|-------|-----------|-------|
| `/` | `HomePage` | Dashboard |
| `/chapters` | `ChapterPage` | Subject browser |
| `/chapters/:chapterId` | `ChapterPage` | |
| `/notes` | `ChapterPage` | Alias |
| `/notes/:subject/:unitId/:topicId/:subtopicIndex` | `NotePage` | Primary reading view |
| `/exercises` | `ExercisePage` | |
| `/past-papers` | `PastPapersPage` | |
| `/flashcards` | `FlashcardsPage` | |
| `/progress` | `ProgressPage` | |
| `/mistakes` | `MistakeBankPage` | |
| `/settings` | `SettingsPage` | |
| `/teacher` | `TeacherDashboard` | |
| `/advanced` | `AdvancedPage` | Lazy |

**Route params for NotePage:**
- `subject` — lowercase subject name (e.g. `mathematics`, `physics`)
- `unitId` — unit number (1–6)
- `topicId` — topic number within unit (1–7+)
- `subtopicIndex` — zero-indexed subtopic position

---

## Data Layer

### Hierarchy

```
Subject
  └── Unit  (e.g. WMA11 "Pure Mathematics 1")
        └── Topic  (e.g. "Algebra & Functions")
              └── Subtopic  (e.g. "Laws of indices")
                    └── Note file  (one JS file per subtopic)
```

### Syllabus file shape

```js
// src/data/mathematicsSyllabus.js
{
  qualification: 'Pearson Edexcel International A Level Mathematics',
  units: [
    {
      id: 1,
      code: 'WMA11',
      title: 'Pure Mathematics 1',
      topics: [
        {
          id: 1,
          title: 'Algebra & Functions',
          subtopics: ['Laws of indices', 'Manipulating surds', ...]
        }
      ]
    }
  ]
}
```

### Subjects & unit codes

| Subject | Unit codes |
|---------|-----------|
| Mathematics | WMA11–WMA14, WMS01–WMS02 |
| Physics | YPH01–YPH03 |
| Chemistry | YCH01–YCH03 |
| Biology | YBI01–YBI03 |
| Business | (Pearson Edexcel) |
| Economics | (Pearson Edexcel) |
| Accounting | (Pearson Edexcel) |

### Note file naming convention

```
src/data/seedNotes/{subject}/note_{subject}_{unitId}_{topicId}_{subtopicIndex}.js
```

Example: `note_mathematics_1_1_0.js` → Mathematics, Unit 1, Topic 1, Subtopic index 0.

Named export matches filename: `export const note_mathematics_1_1_0 = { ... }`.

All notes are re-exported from [src/data/seedNotes/index.js](src/data/seedNotes/index.js), keyed by note ID.

### Note ID format

`note:mathematics:1:1:0` — built by `buildNoteId()` in [src/services/notes/noteContext.js](src/services/notes/noteContext.js).

---

## Note Content Model

Each note file exports an object:

```js
{
  pdfPath: '/notes/mathematics/algebra-and-functions/laws-of-indices.pdf',
  blocks: [
    { id: 'obj-1',   type: 'objective',        data: { text: '<html>' } },
    { id: 'h-1',     type: 'heading',           data: { text: 'Title', level: 2 } },
    { id: 'para-1',  type: 'paragraph',         data: { text: '<html>' } },
    { id: 'list-1',  type: 'list',              data: { style: 'bullet'|'numbered', items: [{text}] } },
    { id: 'chk-1',   type: 'checklist',         data: { items: [{text, checked}] } },
    { id: 'eq-1',    type: 'equation',          data: { latex: '\\frac{a}{b}', caption: '' } },
    { id: 'tbl-1',   type: 'comparisonTable',   data: { caption, headers: [], rows: [[]] } },
    { id: 'svg-1',   type: 'svg',               data: { svg: '<svg>...</svg>', caption: '' } },
    { id: 'call-1',  type: 'callout',           data: { style: 'info'|'warning'|'success'|'key'|'worked', title, text } },
    { id: 'q-1',     type: 'quote',             data: { text, attribution } },
    { id: 'code-1',  type: 'code',              data: { language, code } },
    { id: 'sum-1',   type: 'summary',           data: { text } },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'One-line summary',
    cues: [
      { id: 'cue-1', blockId: 'para-1', prompt: 'Question?', answer: 'Answer.' }
    ]
  },
  evidence: [],
  mentions: []
}
```

**Block renderer:** [src/components/notes/NoteBlockRenderer.jsx](src/components/notes/NoteBlockRenderer.jsx)

---

## NotePage Features

- **Table of Contents** — auto-generated from `heading` blocks; sticky left panel
- **Recall panel** — right panel; shows one cue at a time with reveal; progress tracker
- **Reading progress bar** — scroll-driven
- **Breadcrumbs** — A-Level → Subject → Unit → Topic → Subtopic
- **Previous / Next navigation** — sequential subtopic traversal
- **PDF fallback** — iframe renders `pdfPath` when user toggles PDF view
- **Read tracking** — `useNoteReadStatus` persists to `localStorage` (`lt_read:{noteId}`)

---

## Key Services & Hooks

### `noteContext.js` ([src/services/notes/noteContext.js](src/services/notes/noteContext.js))
- `buildNoteId(subject, unitId, topicId, subtopicIndex)` — canonical note key
- `resolveNoteContext(params, syllabi, seedNotes)` — maps route params → note + breadcrumbs
- `estimateReadMinutes(blocks)` — WPM-based reading time
- `deriveConfidenceBand(score)` — returns `'red'|'amber'|'green'`

### `useNoteReadStatus` ([src/hooks/useNoteReadStatus.js](src/hooks/useNoteReadStatus.js))
- `markRead(noteId)`, `markUnread(noteId)`
- `getTotalReadCount()`, `getReadNoteIds()`
- Storage key: `lt_read:{noteId}`

### `useTheme` ([src/hooks/useTheme.js](src/hooks/useTheme.js))
- Returns `{ theme, toggleTheme }`
- Sets `data-theme="dark"|"light"` on `<html>`
- Persists to localStorage; respects system preference as default

### Convex ([src/convex-client.js](src/convex-client.js))
- Initialised async in `main.jsx`
- Stores anonymous/debug identity locally when Clerk is unavailable
- Provides imperative query, mutation, and subscription helpers for runtime services
- Used through `ConvexProvider` / `ConvexProviderWithClerk` in `AuthProvider.jsx`
- Env vars: `VITE_CONVEX_URL`, `VITE_CLERK_PUBLISHABLE_KEY`

---

## Styling System

No Tailwind — uses a custom CSS variable design system in [src/index.css](src/index.css).

**Key tokens:**

```css
/* Colors */
--color-primary: #6366f1;      /* indigo */
--color-accent:  #f59e0b;      /* amber */
--color-success: #10b981;
--color-error:   #ef4444;

/* Typography */
--font-sans: Inter, system-ui;
--font-mono: 'JetBrains Mono', 'Fira Code';

/* Layout */
--sidebar-width:      280px;
--header-height:      64px;
--max-content-width:  900px;
--max-page-width:     1400px;

/* Spacing */
--space-1: 0.25rem; /* ... through --space-20: 5rem */
```

**Dark mode:** `[data-theme="dark"]` selector overrides variables.

**Reusable utility classes:** `.card`, `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.btn-sm`, `.btn-lg`, `.btn-icon`, `.animate-fade-in`, `.animate-slide-in-up`, `.stat-card`, `.subject-card`, `.action-card`.

---

## Exercise Patterns

All exercise components follow a unified flow: **render → submit → show feedback → next**.

| Component | Matching strategy |
|-----------|------------------|
| `MCQExercise` | Exact option match; options shuffled on render |
| `FillBlankExercise` | Levenshtein distance ≤ 2 (fuzzy) |
| `DragDropExercise` | Category placement |
| `SequenceExercise` | Exact order match |
| `KeywordCheck` | Keyword presence scan |

---

## Python Pipeline Scripts (project root)

These scripts were used to extract, generate, and clean note data. They are **not part of the app runtime**.

| Script pattern | Purpose |
|----------------|---------|
| `extract_maths_pdfs.py` | Extract text from Edexcel PDF revision guides |
| `generate_notes_*.py` | Generate seed note JS files from extracted text |
| `write_wma*.py`, `write_wme*.py`, `write_wst*.py` | Write specific unit note files |
| `rewrite_*.py` | Re-generate individual topic note sections |
| `fix_*.py` | Patch syntax errors (bad escapes, apostrophes, etc.) |
| `update_index.py` | Regenerate `src/data/seedNotes/index.js` |
| `add_math_keys.py` | Add missing note keys to the index |
| `scan_*.py` | Scan for remaining issues in note files |

---

## PWA

- Manifest: [public/manifest.json](public/manifest.json)
- Service worker: [public/sw.js](public/sw.js)
- Registration: [src/pwa/registerServiceWorker.js](src/pwa/registerServiceWorker.js)
- Vite config sets `Service-Worker-Allowed: /` header to allow SW at root scope
- Status hook: `usePwaStatus()`
