# AGENTS.md — Rovo Dev Context File
# Last updated: 2026-03-01 (Section 6 — NotePage UX fully documented)

This file gives AI agents (Rovo Dev) full context about the project architecture,
conventions, and patterns so they can work efficiently without re-exploring files.

---

## 1. Project Overview

**App name:** LearningTracker (LT)
**Type:** Progressive Web App (PWA) — React + Vite
**Purpose:** A-Level / IAL study companion for students covering Chemistry, Physics,
Biology, Maths, Business, Economics, Accounting, CAE/CPE English.
**Styling:** Custom CSS variables design system (no Tailwind, no MUI).
**Router:** React Router v6 (BrowserRouter).
**State:** Local component state + IndexedDB via `noteStore.js`. No Redux/Zustand.
**Build:** Vite. Run `npm run dev` to start dev server on port 5173.

---

## 2. Directory Structure

```
public/
  notes/chemistry/     ← PDF source files per unit (e.g. wch11-1.pdf)
  pastpapers/          ← Past paper PDFs
  sw.js                ← Service worker (PWA)

src/
  App.jsx              ← Root: BrowserRouter, Routes, Sidebar, Header
  main.jsx             ← ReactDOM.createRoot entry point

  pages/               ← One file per route
    ChapterPage.jsx    ← /chapters — syllabus browser with unit sidebar
    NotePage.jsx       ← /notes/:subject/:unitId/:topicId/:subtopicIndex
    FlashcardsPage.jsx
    ProgressPage.jsx
    PastPapersPage.jsx
    ExercisePage.jsx
    MistakeBankPage.jsx
    SettingsPage.jsx
    TeacherDashboard.jsx
    AdvancedPage.jsx   ← Lazy loaded
    Pages.css          ← Page-level CSS (chapter layout, note toolbar, etc.)

  components/
    layout/
      Sidebar.jsx      ← Left nav (Notes, Past Papers, Flashcards, etc.)
      Header.jsx       ← Top bar with menu toggle + Cmd+K search
    notes/
      NoteBlockRenderer.jsx   ← Renders seed note block arrays → HTML
      NoteBlockRenderer.css   ← Block-level styles
      Notes.css               ← Legacy note styles
      Accordion.jsx
      GlossaryPopover.jsx
      TextToSpeech.jsx
      CodePlayground.jsx
    student/
      CommandSearch.jsx        ← Cmd+K search overlay
      StickyNotes.jsx
    pastpapers/
      TimedExam.jsx
    advanced/
      AdvancedFeatures.jsx

  context/
    ThemeContext.jsx    ← { theme, setTheme }
    ThemeProvider.jsx   ← Wraps app, applies data-theme attribute

  data/
    syllabusIndex.js          ← { getSyllabusBySubject, getSubjectLabel }
    chemistrySyllabus.js      ← Chemistry unit/topic/subtopic tree
    physicsSyllabus.js
    biologySyllabus.js
    mathematicsSyllabus.js
    (other subjects...)

    noteObjectives/           ← Per-subject learning objective maps
    noteDefinitions/          ← Per-subject glossary term maps
    seedNotes/
      index.js                ← seedNotes map + getSeedNote(noteId)
      chemistry/
        note_1_1_0.js         ← WCH11 Topic 1 Subtopic 0
        note_1_1_1.js         ← WCH11 Topic 1 Subtopic 1
        ... (note_1_1_0 through note_1_1_9)

  services/
    notes/
      noteTypes.js       ← JSDoc typedefs: NoteBlock, NoteDocument, etc.
      noteStore.js       ← IndexedDB CRUD: getNote, upsertNote, listNotesBySubject
      noteContext.js     ← resolveNoteContext, buildNoteId, buildBreadcrumbs
      mentionGraph.js    ← Cross-note mention extraction
      summaryValidation.js
    pastPapers/
      pastPaperService.js
    grading/
      gradingClient.js

  hooks/
    useDraftAutosave.js    ← Debounced autosave for note editing
    usePwaStatus.js        ← PWA install/update detection
    useTheme.js            ← Reads ThemeContext
    useNoteReadStatus.js   ← Per-note read/unread state (localStorage) + getTotalReadCount(), getReadNoteIds()

  utils/               ← Utility helpers
  pwa/                 ← Service worker registration
```

---

## 3. Routing

| Path | Component | Description |
|------|-----------|-------------|
| `/` | HomePage | Dashboard |
| `/chapters?subject=chemistry` | ChapterPage | Browse units/topics |
| `/notes/:subject/:unitId/:topicId/:subtopicIndex` | NotePage | View/edit a note |
| `/exercises` | ExercisePage | Practice questions |
| `/past-papers` | PastPapersPage | Past paper viewer |
| `/flashcards` | FlashcardsPage | Spaced repetition cards |
| `/progress` | ProgressPage | Confidence scores + analytics |
| `/mistakes` | MistakeBankPage | Error tracking |
| `/settings` | SettingsPage | Theme, preferences |
| `/teacher` | TeacherDashboard | Class overview |
| `/advanced` | AdvancedPage | Advanced features (lazy) |

---

## 4. Notes Architecture

### 4a. noteId Format

```
note:<subject>:<unitId>:<topicId>:<subtopicIndex>
e.g. note:chemistry:1:1:0
```

Built by `buildNoteId()` in `noteContext.js`.

### 4b. Data Flow

```
URL params (/notes/chemistry/1/1/0)
    ↓ resolveNoteContext() → context object (noteId, unitCode, etc.)
    ↓ getSeedNote(noteId)  → seed note object { blocks, recall, evidence }
    ↓ NoteBlockRenderer    → renders blocks[] as styled HTML
    ↓ noteStore (IndexedDB) → persists user edits (not yet wired to NotePage)
```

### 4c. Seed Notes

- Location: `src/data/seedNotes/chemistry/note_{unitId}_{topicId}_{subtopicIndex}.js`
- Index: `src/data/seedNotes/index.js` — maps `'chemistry:1:1:0'` → note object
- Format: `{ blocks: [...], recall: {...}, evidence: [...] }`
- Export: named export `note_chemistry_1_1_0` (except note_1_1_7 which uses default export)

**IMPORTANT:** Always add new seed notes to `src/data/seedNotes/index.js` — both the import AND the `seedNotes` map entry.

### 4d. NoteDocument Structure

```js
{
  noteId: 'note:chemistry:1:1:0',
  subject: 'chemistry',
  qualificationCode: 'WCH11',
  unitCode: 'WCH11',
  unitId: 1,
  topicId: 1,
  subtopicIndex: 0,
  unitTitle: '...',
  topicTitle: '...',
  subtopicTitle: '...',
  breadcrumbs: 'A-Level > Chemistry > ...',
  confidenceScore: 3,           // 1–5
  confidenceBand: 'amber',      // 'red'|'amber'|'green'
  estimatedReadMinutes: 8,
  blocks: [...],                // array of NoteBlock
  recall: { enabled, cues, summaryText, ready },
  evidence: [...],
  mentions: [...],
  createdAt: ISO string,
  lastEditedAt: ISO string,
}
```

---

## 5. NoteBlockRenderer — Block Types

File: `src/components/notes/NoteBlockRenderer.jsx`
CSS:  `src/components/notes/NoteBlockRenderer.css`

### Supported Block Types

| type | Description | Key data fields |
|------|-------------|-----------------|
| `objective` | Learning objective — blue gradient box at top | `data.text` |
| `heading` | Section heading h1–h6 | `data.text`, `data.level` (2=default) |
| `paragraph` | Body text paragraph | `data.text` |
| `list` | Bullet or numbered list | `data.style` ('bullet'/'numbered'), `data.items[]` (string or `{text}`) |
| `checklist` | Interactive tick checklist | `data.items[]` `{text, checked}` — click to toggle |
| `equation` | Math formula with fraction rendering | `data.html` (preferred) or `data.latex`, `data.caption` |
| `comparisonTable` | Styled table with coloured header | `data.headers[]`, `data.rows[][]`, `data.caption` |
| `summary` | Yellow summary box | `data.text` |
| `callout` | Key idea / worked example / tip / warning box | `data.style` ('key'/'worked'/'tip'/'warning'), `data.title`, `data.text` |
| `svg` | Inline SVG diagram or animation | `data.svg` (raw SVG string), `data.caption` |
| `quote` | Block quote | `data.text`, `data.source` |
| `code` | Code block | `data.code` or `data.text` |

### Callout Styles

| style | Icon | Background | Use for |
|-------|------|------------|---------|
| `key` | 💡 | Blue gradient | Key definitions, important formulae |
| `worked` | ✏️ | Green gradient | Worked examples (monospace body) |
| `tip` | 💬 | Purple gradient | Exam tips, mnemonics |
| `warning` | ⚠️ | Orange gradient | Common mistakes, watch-outs |

### Equation Rendering

**ALWAYS use `html` field, not `latex` field.**

Reason: JS string literals interpret `\d`, `\t`, `\q`, `\r` as escape sequences,
silently corrupting LaTeX backslash commands.

Use direct HTML with Unicode and `<sup>`, `<sub>`, and `.nb-frac` spans:

```js
// ✅ CORRECT
html: 'n = <span class="nb-frac"><span class="nb-num">m</span><span class="nb-den">M</span></span>'

// ✅ CORRECT — simple equations
html: 'L = 6.02 × 10<sup>23</sup> mol<sup>−1</sup>'

// ❌ WRONG — \d and \t are JS escape sequences
latex: 'n = \\dfrac{m}{M}'
```

Fraction HTML pattern:
```html
<span class="nb-frac">
  <span class="nb-num">numerator</span>
  <span class="nb-den">denominator</span>
</span>
```

Useful Unicode:
- Superscript: use `<sup>...</sup>`
- Subscript: use `<sub>...</sub>`
- Arrows: → ← ⇌ ⇒
- Multiplication: ×
- Division: ÷
- Plus/minus: ±
- Summation: ∑
- Degree: °
- Subscript digits: ₀₁₂₃₄₅₆₇₈₉
- Superscript digits: ⁰¹²³⁴⁵⁶⁷⁸⁹
- Delta: Δ, delta: δ, theta: θ, lambda: λ, mu: μ, pi: π, sigma: σ, alpha: α, beta: β, gamma: γ

---

## 6. NotePage UX

Files: `src/pages/NotePage.jsx`, `src/pages/NotePage.css`

### Full Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│ TOOLBAR (.note-toolbar  card)                                         │
│ LEFT: [Subject badge] [Qualification badge] [Unit badge] [Title h2]  │
│ RIGHT: [% read / ✓ Read btn] [☰ Contents] [🧠 Recall] [📖|📄] [←]   │
├──────────────────────────────────────────────────────────────────────┤
│ READ PROGRESS BAR (.note-read-progress) — 3px gradient bar           │
├──────────────────────────────────────────────────────────────────────┤
│ .note-body (flex row, flex:1, overflow:hidden)                        │
│                                                                       │
│ ┌─ ToC ──┬─── .note-scroll-area ────────────────┬─ Recall Panel ──┐  │
│ │220px   │ NoteBlockRenderer (blocks[])          │ 280px           │  │
│ │sidebar │ + ScrollToTopButton (sticky float)    │ Cue card UI     │  │
│ │        │                                        │                 │  │
│ └────────┴────────────────────────────────────────┴─────────────────┘  │
│                                                                       │
│  OR (view === 'pdf'):                                                 │
│ ┌─── .note-pdf-container ──────────────────────────────────────────┐  │
│ │ <iframe src="/notes/{subject}/{unitCode}-1.pdf" />                │  │
│ └──────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────┘
```

Border-radius rules: the three panels (ToC, scroll area, recall) share borders
seamlessly — adjacent panel borders are removed and radii adjusted via CSS sibling
selectors (`.note-toc + .note-scroll-area`, `:has(+ .recall-panel)`).

### State

| Variable | Type | Purpose |
|----------|------|---------|
| `view` | `'notes'` \| `'pdf'` | Which content panel is shown |
| `recallOpen` | boolean | Whether Recall panel is visible |
| `tocOpen` | boolean | Whether ToC sidebar is visible (default `true`) |
| `scrollPct` | number 0–100 | Scroll progress % (drives read button state) |

- Switching to `view === 'pdf'` automatically closes the Recall panel.
- PDF toggle only appears if a `seedNote` exists.
- ToC toggle only appears if `toc.length > 0` and `view === 'notes'`.
- Recall toggle only appears if `seedNote.recall.cues.length > 0`.

### PDF URL convention
```js
`/notes/${context.subject}/${context.unitCode?.toLowerCase()}-1.pdf`
// e.g. /notes/chemistry/wch11-1.pdf
```

### Seed note loading
```js
const noteId = `note:${context.subject}:${context.unitId}:${context.topicId}:${context.subtopicIndex}`;
const seedNote = getSeedNote(noteId); // from src/data/seedNotes/index.js
```

### Feature: Read Progress Bar

Component: `ReadProgressBar` (in `NotePage.jsx`)

- A 3px thin bar rendered between the toolbar and `.note-body`.
- Listens to `scroll` events on `.note-scroll-area` via `scrollRef`.
- Fills left-to-right with a primary-colour gradient as the user scrolls.
- Reports scroll percentage via `onScrollPct` callback → stored in `scrollPct` state.
- Only shown in `view === 'notes'` when a seed note exists.

### Feature: Mark as Read Button

Hook: `useNoteReadStatus(noteId)` in `src/hooks/useNoteReadStatus.js`

- Persists read state to `localStorage` with key format `lt_read:<noteId>`.
- Value stored is an ISO timestamp of when the note was marked read.
- Returns `{ isRead, readAt, markRead, markUnread }`.

Button states (CSS classes on `.note-read-btn`):

| Class | Condition | Appearance | Behaviour |
|-------|-----------|------------|-----------|
| `.note-read-btn--idle` | `scrollPct < 80`, not read | Grey, disabled, shows `"XX% read"` | Not clickable |
| `.note-read-btn--ready` | `scrollPct >= 80`, not read | Green pulsing gradient | Calls `markRead()` on click |
| `.note-read-btn--done` | `isRead === true` | Solid green, shows `"✓ Read"` | Calls `markUnread()` on click; tooltip shows date read |

Helper exports from `useNoteReadStatus.js`:
- `getTotalReadCount()` — scans localStorage, returns count of all read notes (used by ProgressPage).
- `getReadNoteIds()` — returns a `Set` of all read `noteId` strings.

### Feature: Table of Contents (ToC)

Component: `TableOfContents` (in `NotePage.jsx`)
Hook: `useActiveHeading(scrollRef, toc)` (in `NotePage.jsx`)

- Built by `buildToc(blocks)` — filters `heading` blocks with `level <= 3`.
- Renders as a 220px left sidebar (`.note-toc`) with scrollable nav links.
- Each link scrolls the note area to the corresponding block via `scrollIntoView`.
- Active heading tracked by `useActiveHeading` — monitors scroll position and
  compares heading element positions relative to the scroll container top (threshold: 80px).
- Active link gets class `.active` (indigo highlight + right border accent).
- Level-2 headings have `padding-left: var(--space-3)`, level-3 get `var(--space-6)`.
- Hidden on screens ≤ 900px (CSS `display: none`).

### Feature: Recall Panel

Component: `RecallPanel` (in `NotePage.jsx`)

- Renders as a 280px right sidebar (`.recall-panel`).
- Shows recall cues from `seedNote.recall.cues[]` one at a time.
- Each cue has a `prompt` question; clicking "Show Answer" reveals `recall.summaryText`.
- Navigation: Prev/Next buttons + dot indicators (`.recall-dot`).
  - Dot turns primary colour when active, green (`.done`) when answer revealed.
- Progress bar at top of panel fills as cues are completed.
- If no cues exist, shows a friendly empty state message.

### Feature: Scroll-to-Top Button

Component: `ScrollToTopButton` (in `NotePage.jsx`)

- Sticky button (`position: sticky; bottom: var(--space-5)`) floated to the right
  inside the scroll container — does not affect layout flow.
- Hidden by default (`opacity: 0`, `pointer-events: none`); animates in when `scrollPct > 20`.
- Smooth-scrolls the note area back to top on click.
- CSS classes: `.note-scroll-top-btn`, `.note-scroll-top-btn--visible`.
- 44px circle on desktop, 48px on mobile (≤ 768px) for touch comfort.

### Empty State

When no seed note exists for the URL params, `.note-empty` is shown — a centred
flex column with 📝 emoji, title, and subtitle. No toolbar feature buttons are rendered.

### Responsive Breakpoints

| Breakpoint | Changes |
|------------|---------|
| ≤ 900px | ToC hidden; Recall panel stacks below note area (full-width, 300px height); `flex-direction: column` |
| ≤ 600px | Toolbar margins/padding tighten; title truncates at 180px; Recall panel height 260px; progress bar margin tightens |
| ≤ 768px (NoteBlockRenderer) | Smaller font/padding for blocks; tables compact; checklist items min-height 44px |

---

## 7. ChapterPage UX

File: `src/pages/ChapterPage.jsx`

### Layout
```
┌──────────────┬──────────────────────────────────────────────┐
│ SIDEBAR      │ CONTENT                                       │
│ (card)       │                                               │
│ Subject name │ h1: Unit N: Title                            │
│ Qualification│ meta: topics count, subtopics count, source  │
│ ─────────    │                                               │
│ [1] WCH11    │ Topic N: Title (card)                        │
│ [2] WCH12    │   • Subtopic name    [Open Note →]           │
│ [3] WCH13    │   • Subtopic name    [Open Note →]           │
│ ...          │   ...                                         │
└──────────────┴──────────────────────────────────────────────┘
```

- Subject passed via `?subject=chemistry` query param
- "Open Note" links to `/notes/:subject/:unitId/:topicId/:subtopicIndex`

---

## 8. CSS Design System

All CSS uses custom properties. Key variables:

```css
--color-primary          /* Indigo/purple — buttons, accents */
--color-primary-dark
--color-primary-50       /* Very light primary for backgrounds */
--color-text             /* Main text */
--color-text-secondary
--color-text-tertiary
--color-surface          /* Card backgrounds */
--color-bg-secondary     /* Slightly off-white/grey background */
--color-border
--color-border-light
--color-success-light

--font-size-xs / sm / base / lg / xl / 2xl
--space-1 through --space-8  /* 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px */
```

Common utility classes:
- `.card` — rounded card with border and shadow
- `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.btn-sm` — buttons
- `.badge` — small label badge
- `.animate-fade-in` — CSS fade-in animation

---

## 9. Seed Note Authoring Guide

### File naming
`src/data/seedNotes/chemistry/note_{unitId}_{topicId}_{subtopicIndex}.js`

### Export convention
Use **named export** (NOT default):
```js
export const note_chemistry_1_1_0 = { blocks: [...], recall: {...}, evidence: [...] };
```

### Block order convention
1. `objective` block
2. Sections: heading → paragraph → list/table/svg/callout/equation (as needed)
3. Worked examples (callout, style: 'worked')
4. Key ideas (callout, style: 'key') — can appear anywhere relevant
5. SVG diagrams near the content they illustrate
6. Exam checklist (checklist block) near end
7. `summary` block last

### Recall cues
Each seed note should have 4–6 recall cues:
```js
recall: {
  enabled: true,
  cues: [
    { id: 'cue-1', blockId: 'some-block-id', prompt: 'Question text?' },
  ],
  summaryText: '...',
  ready: false,
}
```

### Evidence
```js
evidence: [
  { id: 'ev-1', title: '...', detail: '...', year: '2023', source: '...', tags: [...] },
]
```

### IDs
Every block must have a unique `id` string within the note. Use descriptive names:
`'h-mole'`, `'p-avogadro'`, `'eq-moles'`, `'table-particles'`, `'svg-atom'`, `'callout-we1'`

---

## 10. Chemistry WCH11 — Topic 1 Status

All 10 subtopic seed notes are complete:

| File | Subtopic | Content |
|------|----------|---------|
| `note_1_1_0.js` | Atomic & formula terms | Atom, element, ion, molecule, compound, empirical/molecular formula, nuclide notation |
| `note_1_1_1.js` | Mole & Avogadro constant | Mole definition, L = 6.02×10²³, molar mass, molar volume 24 dm³, worked examples |
| `note_1_1_2.js` | Full & ionic equations | Balancing steps, state symbols, ionic equation method, acid reactions table, displacement |
| `note_1_1_3.js` | Relative mass calculations | Aᵣ, Mᵣ, relative formula mass, molar mass, ppm (solution and gas), worked examples |
| `note_1_1_4.js` | Solution concentration | c = n/V in mol dm⁻³ and g dm⁻³, interconversions, worked examples |
| `note_1_1_5.js` | Empirical & molecular formulae | % composition → empirical, fractional ratios, molecular formula from Mᵣ |
| `note_1_1_6.js` | Stoichiometric mass & volume | Mole ratios, reacting masses, molar volume, ideal gas pV=nRT |
| `note_1_1_7.js` | % yield & atom economy | % yield formula, reasons < 100%, atom economy formula, green chemistry |
| `note_1_1_8.js` | Core Practical 1 | Mg + HCl gas syringe, method, sources of error, improvements |
| `note_1_1_9.js` | Equations from observations | Gas tests, displacement, precipitation, acid reactions, step-by-step ionic equation SVG |

**PDF source:** `public/notes/chemistry/wch11-1.pdf`

---

## 10b. Chemistry WCH11 — Topic 2 Status

All 9 subtopic seed notes are complete:

| File | Subtopic | Content |
|------|----------|---------|
| `note_1_2_0.js` | Subatomic particles & charges | Proton/neutron/electron table, nucleus scale, SVG atom diagram, ion electron count |
| `note_1_2_1.js` | Atomic & mass numbers | Z and A definitions, nuclide notation ᴬ_ZX, particle calculation rules, worked examples |
| `note_1_2_2.js` | Isotopes & isotope notation | Isotope definition, chlorine/boron tables, Aᵣ weighted average formula + worked examples |
| `note_1_2_3.js` | Mass spectrometry basics | TOF 4-stage SVG, ionisation methods (ESI vs e⁻ bombardment), neon Aᵣ worked example |
| `note_1_2_4.js` | Ionisation energy trends | IE₁ equation, 3 factors, Period 3 SVG graph (dips at Al & S), Group 2 table, successive IEs |
| `note_1_2_5.js` | Atomic model development | Dalton → Thomson → Rutherford (SVG α-scattering) → Bohr → Modern; evidence for each |
| `note_1_2_6.js` | s and p orbitals | Orbital definition, Pauli & Hund's rules, s/p shape SVG, sub-shell capacity, filling order |
| `note_1_2_7.js` | Electronic configuration & periodicity | Full & abbreviated configs, ion configs (Fe²⁺/Fe³⁺ 4s/3d rule), s/p/d/f blocks table |
| `note_1_2_8.js` | Periodic trends in properties | Atomic radius, IE₁, electronegativity trends; Period 3 melting point & structure table |

**PDF source:** `public/notes/chemistry/wch11-1.pdf`

---

## 10c. Chemistry WCH11 — Topic 3 Status

All 12 subtopic seed notes are complete:

| File | Subtopic | Content |
|------|----------|---------|
| `note_1_3_0.js` | Evidence for ionic species | Electrolysis, conductivity table, brittleness, solubility, X-ray crystallography |
| `note_1_3_1.js` | Ion formation & electron transfer | Ionic bond definition, ion charge from group, NaCl/MgO/CaCl₂ electron transfer worked examples |
| `note_1_3_2.js` | Dot-and-cross ionic diagrams | Rules for ionic diagrams, NaCl SVG, MgO and CaCl₂ worked descriptions, common mistakes |
| `note_1_3_3.js` | Giant ionic lattice structure | NaCl lattice SVG, high mp, conductivity, brittleness, solubility all explained |
| `note_1_3_4.js` | Ionic size, charge & strength | Coulomb's law, charge effect table, radius effect table, isoelectronic series, NaCl vs MgO |
| `note_1_3_5.js` | Ionic polarisation effects | Polarising power, polarisability, Fajans' rules table, AlCl₃/AgI worked examples, SVG diagram |
| `note_1_3_6.js` | Covalent bonding & diagrams | Covalent bond definition, single/double/triple bond table, dot-and-cross SVG (H₂/Cl₂/H₂O/CO₂), dative bonds |
| `note_1_3_7.js` | Giant covalent structures | Diamond, graphite (SVG), SiO₂ — structure and properties; comparison table |
| `note_1_3_8.js` | Electronegativity & bond polarity | EN trends, ΔEN → bond type table, dipole moments, CO₂ vs H₂O SVG, polar molecule rules |
| `note_1_3_9.js` | Electron-pair repulsion shapes | VSEPR rules, full shapes table, CH₄/NH₃/H₂O SVG, lone pair effects, shape vs electron geometry |
| `note_1_3_10.js` | Metallic bonding model | M⁺ lattice + electron sea SVG, bond strength factors, Na/Mg/Al melting point table |
| `note_1_3_11.js` | Metal property interpretation | Conductivity, thermal conductivity, malleability SVG, high mp, contrast with ionic compounds |

**PDF source:** `public/notes/chemistry/wch11-1.pdf`

---

## 11. Adding Notes for a New Subject/Unit

1. Create seed note files: `src/data/seedNotes/{subject}/note_{u}_{t}_{s}.js`
2. Import and register in `src/data/seedNotes/index.js`
3. Place PDF in `public/notes/{subject}/{unitcode}-1.pdf`
4. Verify syllabus exists in `src/data/{subject}Syllabus.js`
5. Run `npm run build` to confirm no errors

---

## 12. Key Conventions & Gotchas

- **LaTeX strings:** Never use `\dfrac`, `\text` etc. in JS string literals — use `html:` field with direct HTML instead.
- **Export style:** All seed notes use named exports EXCEPT `note_1_1_7` which uses default. New notes should always use named exports.
- **note_1_1_7 import:** Uses `import note_chemistry_1_1_7 from '...'` (default) — keep consistent.
- **noteId:** Always `note:subject:unitId:topicId:subtopicIndex` — 5 parts separated by colons.
- **seedNotes map key:** Always `subject:unitId:topicId:subtopicIndex` — 4 parts (no `note:` prefix).
- **PDF naming:** `{unitcode.toLowerCase()}-1.pdf` in `public/notes/{subject}/`.
- **CSS:** Do not use inline Tailwind classes. Use CSS variables and existing utility classes.
- **Superscripts/subscripts in text:** Use Unicode directly in strings: ₂ ⁻¹ etc. or `<sup>`/`<sub>` in html fields.
- **No Redux:** All state is local (useState) or IndexedDB (noteStore). No global state library.
- **Lazy loading:** `NotePage` and `AdvancedPage` are lazy-loaded via `React.lazy()`.
- **ThemeProvider:** Wraps entire app. Use `useTheme()` hook to read `{ theme, setTheme }`.

---

## 13. URL Scraping & Note Enhancement Workflow

When a user provides a URL to scrape for study content, follow this workflow:

### 13a. Scraping & Analysis Phase

1. **Fetch the URL content** — Use appropriate tools to extract text and images from the provided URL
2. **Identify the subject** — Determine which subject (chemistry, physics, biology, etc.) the content belongs to
3. **Map to syllabus** — Find the matching unit/topic/subtopic in the relevant `src/data/{subject}Syllabus.js`
4. **Identify images/diagrams** — Extract all diagrams or images in the url web page that should become SVG illustrations

### 13b. Note Enhancement Guidelines

| Step | Requirement | Implementation |
|------|-------------|----------------|
| 1 | **Include diagrams** | If no existing SVG exists for a concept, create one using the `svg` block type |
| 2 | **Point form** | Convert all prose to bullet/numbered lists using the `list` block type |
| 3 | **Accuracy check** | Verify all scientific facts against the existing seed notes and syllabus |
| 4 | **Sequential ideas** | Present complex processes using numbered lists or create flowcharts using SVG |
| 5 | **Subtopic placement** | Match content to existing subtopics; if no suitable subtopic exists, create a new one (coordinate with existing topic structure) |

### 13c. Block Type Selection

- **Concepts/definitions** → `heading` + `paragraph` + `list`
- **Key formulas** → `callout` (style: 'key') with `equation` blocks
- **Step-by-step processes** → `list` (numbered) or `svg` (flowchart)
- **Comparisons** → `comparisonTable`
- **Worked examples** → `callout` (style: 'worked')
- **Exam tips** → `callout` (style: 'tip')
- **Warnings/common mistakes** → `callout` (style: 'warning')
- **Diagrams** → Convert images to `svg` blocks with descriptive captions
- **Summaries** → `summary` block at the end

### 13d. Subtopic Creation Rules

- **DO NOT change** existing main topics or unit structure
- **DO create** new subtopics only when content genuinely doesn't fit existing ones
- **New subtopic naming** — Use descriptive titles aligned with the A-Level/IAL syllabus naming conventions
- **Register in syllabus** — Add new subtopic to the appropriate `src/data/{subject}Syllabus.js`
- **Register in seedNotes** — Create the note file and add to `src/data/seedNotes/index.js`

### 13e. Example Workflow

```
User provides: https://example.com/atomic-structure

1. Analyze content → Chemistry, Unit WCH11, Topic 2 (Atomic Structure)
2. Check existing subtopics (note_1_2_0 through note_1_2_8)
3. Parse Diagrams or pictures from the url and input as svg in the note. If content fits existing subtopic → enhance that note
4. If new concept → create new subtopic note_1_2_9
5. Convert images to SVG, write in point form, verify accuracy
6. Add recall cues and evidence references
```
