# Plan: Real-Time Collaborative PDF Annotation Platform
# Last updated: 2026-03-18

---

## 1. Feature Overview

**Feature name:** Do it Live — PDF Annotation
**Type:** Multi-phase feature across 4 releases
**Purpose:** Let students annotate past paper PDFs with drawing tools, save locally,
then (later phases) collaborate in real time with classmates and teachers.
**Entry point:** "Do it Live" button on `PastPapersPage` per paper card.
**Scope:** Past papers only (question papers). Not note PDFs, not user uploads.

---

## 2. Decisions Made

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Scope | Past papers only | Keep focused; button on `PastPapersPage` |
| Canvas library | **fabric.js v6** (ESM) | Best cross-device/browser/touch/retina support; built-in object model, serialization, selection |
| PDF rendering | **pdf.js** (`pdfjs-dist`) | Industry standard; renders to canvas so fabric.js can overlay |
| PDF export | **pdf-lib** | Lightweight (~200KB); merges annotation PNGs onto original PDF |
| Page navigation | Thumbnail sidebar + active page center | User preference |
| Phase 1 storage | **IndexedDB** (new `lt-annotations` DB) | Large data support; SpacetimeDB server not available yet |
| Teacher monitoring | Architect from Phase 1 | Equally important to student annotation |
| SpacetimeDB server | Frontend only for Phase 1 | Server access not available yet |
| Which PDF | Question paper only | Per user decision; key format supports MS later |
| Eraser tool | Object removal on click (no built-in EraserBrush in fabric v6) | fabric v6 dropped EraserBrush |
| Sidebar nav | No entry | Accessed only via PastPapersPage "Do it Live" button |

---

## 3. Infrastructure Context

### What exists today
- **PDF viewing**: `<iframe>` in modal on `PastPapersPage` — browser-native PDF rendering
- **Past paper data**: 13 `*PastPapers.js` files (one per subject), each exporting arrays of paper objects
- **Paper object shape**: `{ id, year, month, unit, unitName, type, questionPaperUrl, markingSchemeUrl, duration, totalMarks }`
- **Paper IDs**: Prefixed per subject (`chem-2026-jan-wch11`, `phys-...`). Globally unique across all 13 arrays.
- **PDF files**: Static in `public/pastpapers/` — flat structure, naming: `{unitCode}-{year}-{month}-{type}.pdf`
- **Persistence**: SpacetimeDB (4 tables: `user`, `note`, `flashcard`, `note_asset`). No IndexedDB in use.
- **Auth**: Device-based identity via SpacetimeDB. Auto-generated username. No email, no password.
- **Canvas**: Only `chart.js` for charts. No annotation canvas exists.
- **Mobile/PWA**: Full viewport meta, touch setup, service worker. Ready for canvas annotation.

### What's missing (must be built)
- `getPaperById(paperId)` utility — no cross-subject paper lookup exists
- pdf.js library — not installed
- fabric.js library — not installed
- pdf-lib library — not installed
- IndexedDB infrastructure — never used in this app
- Annotation page, route, components, services — all new

---

## 4. Phase 1: Local PDF Annotation Engine

### New dependencies
```bash
npm install pdfjs-dist fabric@^6 pdf-lib
```

### pdf.js worker config (in AnnotatePage.jsx, NOT vite.config.js)
```js
import * as pdfjsLib from 'pdfjs-dist';
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();
```

### Step 0 — Paper lookup utility (PREREQUISITE)
- **File**: `src/services/pastPapers/pastPaperService.js` (modify existing)
- Add `getPaperById(paperId)` function
- Imports all 13 `*PastPapers.js` arrays, builds a flat `Map<id, paper>` on first call (lazy init)
- Returns full paper object including `questionPaperUrl`
- Required so `AnnotatePage` can resolve paper from URL param `:paperId` on direct navigation/refresh

### Step 1 — Route + "Do it Live" button
- **New file**: `src/pages/AnnotatePage.jsx` — lazy-loaded via `React.lazy`
- **Route**: `/annotate/:paperId` in `src/App.jsx`
- **Button**: Add to `PastPapersPage.jsx` next to existing "View PDF" button on each paper card
  - `navigate(`/annotate/${paper.id}`)` from react-router
  - Icon: `PenTool` from lucide-react
  - Label: "Do it Live"
- **No Sidebar entry** — accessible only via PastPapersPage button (keeps nav clean)

### Step 2 — PDF rendering engine
- **New file**: `src/components/annotation/PdfRenderer.jsx`
- **pdf.js setup**:
  - Load PDF via `pdfjs.getDocument(paper.questionPaperUrl)`
  - Render each page to offscreen `<canvas>` at `1.5 × devicePixelRatio` scale (Retina-crisp)
  - CSS-scale canvas to logical size (`canvas.style.width = logicalWidth + 'px'`)
  - Store page count + dimensions for fabric.js canvas sizing
- **Loading states**: Spinner while PDF downloads; error message if fetch fails or URL invalid
- **Memory**: Only render active page at full resolution; release previous page canvas

### Step 3 — Thumbnail sidebar
- **New file**: `src/components/annotation/ThumbnailSidebar.jsx`
- Render each page at ~0.2x scale in a scrollable left panel (120px desktop, 80px tablet)
- Active page: indigo border highlight (using `var(--color-primary)`)
- Click thumbnail → display that page in center area
- Page number below each thumbnail
- Progressive rendering: `IntersectionObserver` renders visible thumbnails first
- **Mobile (≤768px)**: Sidebar hidden; replaced by page counter `"3 / 12"` with prev/next tap targets

### Step 4 — Annotation canvas layer
- **New file**: `src/components/annotation/AnnotationCanvas.jsx`
- **fabric.js Canvas** overlaid on PDF page:
  - `new Canvas(el, { enableRetinaScaling: true })` — fabric v6 API
  - Transparent background so PDF shows through
  - Canvas dimensions match PDF page exactly
- **Single canvas instance**: Reuse one fabric canvas, swap content on page change (not N canvases)
- **Touch handling**:
  - `touch-action: none` on canvas element (prevents browser pinch-zoom)
  - One finger → draw with active tool
  - Two fingers → pinch-to-zoom via fabric viewport transform + pan
- **State shape** (designed for Phase 2 sync):
  ```js
  {
    paperId: 'chem-2026-jan-wch11',
    pages: {
      1: { objects: [...],  // fabric.js serialized objects
           lastModified: '2026-03-18T...' },
      2: { objects: [...], lastModified: '...' }
    }
  }
  ```
  - Each object stored as serializable fabric.js JSON (via `canvas.toJSON()`)
  - This format translates directly to SpacetimeDB `annotation_stroke` rows in Phase 2

### Step 5 — Toolbar
- **New file**: `src/components/annotation/AnnotationToolbar.jsx`

**Drawing tools (left section):**

| Tool | Implementation | Shortcut |
|------|---------------|----------|
| Pen (freehand) | `fabric.PencilBrush` | P |
| Highlighter | `fabric.PencilBrush` with 40% opacity, 8px width | H |
| Text | Click to place `fabric.IText` (editable inline) | T |
| Rectangle | `fabric.Rect` drag-to-draw | R |
| Circle | `fabric.Circle` drag-to-draw | C |
| Arrow/Line | `fabric.Line` with arrowhead group | L |
| Eraser | Click object to remove (no built-in EraserBrush in fabric v6) | E |
| Select/Move | Default fabric.js selection mode | V |

**Controls (center):**

| Control | Implementation |
|---------|---------------|
| Color picker | 8 preset swatches (red, blue, green, orange, purple, black, white, yellow) + custom `<input type="color">`. Default: red |
| Stroke width | 3 toggle buttons: thin (2px), medium (4px), thick (8px) |
| Opacity | Range slider 20%–100% (primarily for highlighter) |

**Actions (right):**

| Action | Implementation | Shortcut |
|--------|---------------|----------|
| Undo | Pop from undo stack → restore canvas state | ⌘Z |
| Redo | Pop from redo stack → restore canvas state | ⌘⇧Z |
| Clear page | Confirm dialog → `canvas.clear()` on current page | — |
| Save | Manual save to IndexedDB | ⌘S |
| Export PDF | Merge annotations onto PDF via pdf-lib, trigger download | — |
| Close | Navigate back to PastPapersPage (warn if unsaved) | Esc |

### Step 6 — Undo/Redo system
- **New file**: `src/services/annotation/undoManager.js`
- Command pattern: each tool action pushes serialized canvas state (`canvas.toJSON()`)
- Max 50 undo levels per page (memory cap)
- Clear redo stack on new action
- Keyboard shortcuts registered at `AnnotatePage` level (not global — avoid conflict with ⌘K search)
- Undo scope is per-page; switching pages does not affect other pages' undo stacks

### Step 7 — IndexedDB persistence
- **New file**: `src/services/annotation/annotationStore.js`
- **This is new infrastructure** — the app has never used IndexedDB. Not a copy of `noteStore.js` (which uses SpacetimeDB).
- **Database**: `lt-annotations`
- **Object store**: `annotations`
- **Key**: `paperId:qp:pageNumber` (includes doc type so marking scheme annotations could coexist later)
- **Value**: `{ paperId, docType: 'qp', pageNumber, fabricJson, thumbnailDataUrl, updatedAt }`
- **API**:
  - `openAnnotationDB()` — open/upgrade IndexedDB
  - `savePageAnnotation(paperId, pageNum, fabricJson)` — upsert single page
  - `getPageAnnotations(paperId)` — returns all pages for a paper
  - `getAllAnnotatedPaperIds()` — list papers with annotations (for UI indicators)
  - `deleteAnnotations(paperId)` — remove all annotations for a paper
- **Auto-save**: Debounced 2s after last canvas change (reuse timing pattern from `src/hooks/useDraftAutosave.js`)
- **On page load**: Read from IndexedDB → `canvas.loadFromJSON()` per page
- **Unsaved changes guard**: `beforeunload` listener + React Router `useBlocker()` warns if dirty state exists between auto-saves
- Also save on page switch and on component unmount

### Step 8 — Export annotated PDF
- **New file**: `src/services/annotation/pdfExport.js`
- Use `pdf-lib` to load original PDF, then for each annotated page:
  - Render fabric.js canvas to PNG via `canvas.toDataURL('image/png')` at 2x for crisp output
  - Embed as image overlay on corresponding PDF page
- Download as `{unit}-{year}-{month}-annotated.pdf`
- **Also export raw JSON** alongside the flattened PDF to allow future re-import/continued editing

### Step 9 — Responsive design + CSS
- Add `.annotate-*` class styles to `src/pages/Pages.css`
- All styles use CSS custom properties (`var(--color-surface)`, `var(--color-text)`, etc.)
- Respect `[data-theme="dark"]` for toolbar, sidebar, and canvas container (PDF pages remain white)

| Breakpoint | Layout |
|------------|--------|
| ≤768px (mobile) | Toolbar icon-only row; no thumbnail sidebar; page counter "3/12" with prev/next; canvas full-width |
| 768–1024px (tablet) | Thumbnail sidebar 80px; toolbar full; canvas flex:1 |
| >1024px (desktop) | Thumbnail sidebar 120px; toolbar full; canvas flex:1 |

### Step 10 — Page layout assembly

```
┌──────────────────────────────────────────────────────────┐
│ TOOLBAR (sticky top)                                      │
│ [Pen][HL][Text][Rect][○][→][Eraser][Sel]                 │
│ [Color●][Width][Opacity]     [Undo][Redo][Save][DL][✕]   │
├────────┬─────────────────────────────────────────────────┤
│ THUMBS │ ACTIVE PAGE                                      │
│  [1]   │ ┌──────────────────────────────────┐            │
│  [2]   │ │  PDF canvas (background layer)    │            │
│ >[3]<  │ │  fabric.js canvas (annotation)    │            │
│  [4]   │ │  ← user interacts here            │            │
│  [5]   │ └──────────────────────────────────┘            │
│  ...   │                                                  │
└────────┴─────────────────────────────────────────────────┘
```

---

## 5. Phase 2: Real-Time Collaboration via SpacetimeDB

*Depends on: Phase 1 complete + SpacetimeDB server access*

### Step 11 — New SpacetimeDB tables (server-side Rust)

| Table | Columns | Notes |
|-------|---------|-------|
| `live_session` | `sessionId` (PK), `hostIdentity`, `paperId`, `title`, `createdAt`, `status` ('active'\|'ended') | One per annotation session |
| `session_participant` | `participantId` (PK), `sessionId`, `userIdentity`, `role` ('host'\|'editor'\|'viewer'), `joinedAt` | Many-to-one with session |
| `annotation_stroke` | `strokeId` (PK), `sessionId`, `pageNumber`, `userIdentity`, `fabricObjectJson`, `createdAt`, `updatedAt` | One row per canvas object |
| `session_invite` | `inviteId` (PK), `sessionId`, `fromIdentity`, `toUsername`, `status` ('pending'\|'accepted'\|'declined'), `createdAt` | Username-based (no email yet) |

### Step 12 — New reducers (server-side Rust)

| Reducer | Params | Action |
|---------|--------|--------|
| `createLiveSession` | `paperId`, `title` | Creates session + adds host as participant |
| `joinSession` | `sessionId` | Adds caller as participant |
| `inviteToSession` | `sessionId`, `targetUsername` | Creates pending invite |
| `respondToInvite` | `inviteId`, `accept: bool` | Updates invite; if accepted, joins session |
| `addStroke` | `sessionId`, `pageNumber`, `fabricObjectJson` | Inserts stroke row |
| `updateStroke` | `strokeId`, `fabricObjectJson` | Updates existing stroke |
| `deleteStroke` | `strokeId` | Removes stroke row |
| `endSession` | `sessionId` | Sets `status = 'ended'` |

### Step 13 — Client subscription architecture
**Global subscriptions** (added to `spacetime.js` on connect):
- `SELECT * FROM live_session WHERE status = 'active'`
- `SELECT * FROM session_participant WHERE userIdentity = :myIdentity`
- `SELECT * FROM session_invite WHERE toUsername = :myUsername AND status = 'pending'`

**Per-session subscription** (when user opens a live session):
- `SELECT * FROM annotation_stroke WHERE sessionId = :id`
- Subscribe only for active session — not all sessions globally

### Step 14 — Share dialog
- **New file**: `src/components/annotation/ShareDialog.jsx`
- Modal triggered by "Share" button in annotation toolbar
- Username search: filter `user` table client-side for matching usernames
- Permission selector: "Can edit" / "Can view"
- Active participants list with role badges
- Copy shareable link: `/annotate/:paperId?session=:sessionId`

### Step 15 — Real-time stroke sync
- **New file**: `src/services/annotation/sessionSync.js`
- **Outbound**: fabric.js `object:added` / `object:modified` / `object:removed` events → call corresponding reducer
- **Inbound**: SpacetimeDB subscription updates → deserialize fabric JSON → apply to canvas
- **Conflict resolution**: Last-write-wins (LWW) per stroke — handled by SpacetimeDB server
- **Batching**: Freehand strokes send complete path on mouseup/touchend (not per-point — prevents ~100 reducer calls/second)
- **Cursor presence** (optional): Lightweight `cursor_position` table or ephemeral broadcasts

### Step 16 — Session management UI
- Green "LIVE" indicator dot in toolbar when in a session
- Participant count badge + small avatar circles with initials
- "Leave Session" button for participants
- "End Session" button (host only) — confirms, marks session ended

---

## 6. Phase 3: Teacher Monitoring Dashboard

*Depends on: Phase 2 complete*

### Step 17 — Teacher role designation
- Add `role` field to `user` table: `'student'` (default) | `'teacher'`
- Teacher self-designation toggle in Settings page
- Teacher-specific routes gated by role check

### Step 18 — Monitoring page
- **New file**: `src/pages/TeacherMonitorPage.jsx`
- **Route**: `/teacher/monitor`
- **Layout**: Responsive grid of student session cards (4 cols desktop, 2 tablet, 1 mobile)
- Each card: student name, PDF title, live thumbnail (refreshed ~5s), time spent, click to expand
- Expanded view: full read-only annotation view of student's work
- **Subscription**: Teacher subscribes to all active sessions + participants + throttled latest strokes

### Step 19 — Notification system
- **New file**: `src/components/layout/NotificationBell.jsx`
- Bell icon added to `src/components/layout/Header.jsx` (next to search)
- Badge count: pending `session_invite` rows where `toUsername = me`
- Dropdown: list of invites with Accept / Decline buttons

### Step 20 — Teacher annotation tools
- Teacher can "drop in" to any active student session as viewer
- Optional: teacher can annotate on student's work (distinct color, like red marking pen)
- Teacher annotations tagged with `userIdentity` → rendered in teacher-specific color layer

---

## 7. Phase 4: Email Auth Upgrade

*Depends on: Phase 3 complete*

### Step 21 — User registration with email
- Add `email` field to `user` table
- Registration form on first visit: email + display name (no password — keep SpacetimeDB device auth)
- Email uniqueness enforced by reducer
- Optional: email verification via external service

### Step 22 — Email-based sharing
- Share dialog accepts email in addition to username
- If email not found → send invite email (requires email service integration, e.g., SendGrid)
- Email notifications for session invites

---

## 8. Files Reference

### Existing files to modify (Phase 1)

| File | Change |
|------|--------|
| `src/pages/PastPapersPage.jsx` | Add "Do it Live" button per paper card |
| `src/App.jsx` | Add `/annotate/:paperId` lazy-loaded route |
| `src/pages/Pages.css` | Add `.annotate-*` styles |
| `src/services/pastPapers/pastPaperService.js` | Add `getPaperById()` utility |
| `package.json` | Add `pdfjs-dist`, `fabric`, `pdf-lib` |

### New files to create (Phase 1)

| File | Purpose |
|------|---------|
| `src/pages/AnnotatePage.jsx` | Main page: layout, state, tool switching, keyboard shortcuts |
| `src/components/annotation/PdfRenderer.jsx` | pdf.js rendering (load, render, dimensions, loading states) |
| `src/components/annotation/AnnotationCanvas.jsx` | fabric.js canvas wrapper (overlay, gestures, retina) |
| `src/components/annotation/AnnotationToolbar.jsx` | Tool buttons, color picker, action buttons |
| `src/components/annotation/ThumbnailSidebar.jsx` | Page thumbnail navigation panel |
| `src/services/annotation/annotationStore.js` | IndexedDB CRUD for annotations |
| `src/services/annotation/undoManager.js` | Command-pattern undo/redo stack |
| `src/services/annotation/pdfExport.js` | Export annotated PDF via pdf-lib |

### New files (Phase 2)

| File | Purpose |
|------|---------|
| `src/components/annotation/ShareDialog.jsx` | Username search + invite + permissions |
| `src/services/annotation/sessionSync.js` | Real-time stroke sync via SpacetimeDB |

### New files (Phase 3)

| File | Purpose |
|------|---------|
| `src/pages/TeacherMonitorPage.jsx` | Grid of active student sessions |
| `src/components/layout/NotificationBell.jsx` | Header notification bell + invite dropdown |

### Reference patterns (read, don't clone)

| File | What to reference |
|------|------------------|
| `src/hooks/useDraftAutosave.js` | Debounced save timing pattern |
| `src/pages/PastPapersPage.jsx` | Modal pattern, page component structure |
| `src/pages/NotePage.jsx` | Sidebar layout pattern (for thumbnail sidebar) |
| `src/spacetime.js` | SpacetimeDB connection + subscription pattern (Phase 2) |
| `src/components/pastpapers/PerformanceChart.jsx` | Canvas ref pattern (chart.js, non-conflicting) |

---

## 9. Verification Checklist

### Phase 1

1. `npm run build` — zero errors
2. Past Papers → "Do it Live" button visible on each paper card
3. Click button → `/annotate/:paperId` loads; PDF renders at readable resolution
4. Thumbnail sidebar shows all pages; clicking navigates correctly
5. All 8 tools work: pen draws, highlighter semi-transparent wide, text editable inline, shapes drag-to-draw, eraser removes objects, select moves/resizes
6. Color picker changes stroke color; width toggle changes thickness
7. Undo 5+ actions → Redo restores them — no canvas corruption
8. Auto-save fires after 2s idle; close and reopen → annotations preserved from IndexedDB
9. ⌘S manually saves; unsaved indicator clears
10. Navigate away with unsaved changes → browser warns
11. Export downloads PDF with annotations visible on correct pages + JSON file alongside
12. Retina displays (MacBook, iPad, iPhone): annotations and PDF text are crisp (not blurry)
13. Dark mode: toolbar and sidebar respect theme; PDF pages remain white
14. Mobile Safari iOS: touch drawing works; two-finger zoom works; no browser zoom interference
15. Chrome Android: same touch verification as iOS
16. Performance: 20-page PDF loads in <3s; drawing has no visible input lag

### Phase 2

1. Create session → `live_session` row appears in SpacetimeDB
2. Invite by username → target user sees pending invite
3. Two browser tabs in same session: draw in one → appears in other within 500ms
4. Delete/modify stroke → reflected in other tab
5. End session → all participants see "Session ended"
6. Offline: annotations still save to IndexedDB; sync resumes on reconnect

### Phase 3

1. Teacher sees grid of all active student sessions
2. Thumbnails auto-refresh every ~5s
3. Click student card → read-only view of their annotations
4. Notification bell badge shows count of pending invites
5. Accept invite → joins session immediately

---

## 10. Architecture Notes

### Why fabric.js + pdf.js (not a single library)
- pdf.js handles PDF parsing/rendering (fonts, vectors, forms — the hard part)
- fabric.js handles interactive annotation (drawing, selection, serialization — the creative part)
- Separation means PDF rendering is pixel-perfect while annotations are editable objects
- fabric.js `toJSON()` serialization maps directly to SpacetimeDB `annotation_stroke` rows in Phase 2

### Why one canvas instance, not N
- Reusing a single fabric.js canvas and swapping content per page avoids memory blow-up on large PDFs (20–30 pages)
- Canvas state saved to IndexedDB on page switch; restored on page re-entry
- Adjacent page canvases are NOT pre-rendered (only active page is live)

### Why IndexedDB before SpacetimeDB
- SpacetimeDB server changes not currently available
- IndexedDB supports arbitrarily large binary/JSON data
- Migration path: Phase 2 adds a sync layer that writes to both IndexedDB (offline cache) and SpacetimeDB (cloud sync) — no rewrite needed

### Data flow — Phase 1

```
User draws on fabric.js canvas
  → fabric.js fires object:added event
  → serialize complete canvas to JSON
  → push to undo stack (max 50 per page)
  → set dirty flag
  → debounced 2s auto-save to IndexedDB

User opens previously annotated paper
  → getPaperById(paperId) from URL param
  → load PDF via pdf.js
  → read annotations from IndexedDB per page
  → canvas.loadFromJSON() restores objects
  → PDF renders underneath as background
```

### Data flow — Phase 2 (additive, no rewrite)

```
User draws on canvas (same as Phase 1)
  → ADDITIONALLY: if in live session, call addStroke reducer with fabric object JSON

SpacetimeDB subscription fires (new/updated/deleted stroke from another user)
  → deserialize fabric.js JSON → add/update/remove on canvas
  → tag with user-specific color for visual distinction
  → do NOT push to local undo stack (only user's own actions are undoable)
```

### Performance considerations
- Only active page rendered at full resolution; thumbnails at 0.2x
- Lazy PDF page rendering — render pages on demand, not all on load
- fabric.js canvas: one instance reused across page switches (not N simultaneous canvases)
- IndexedDB writes debounced to prevent I/O thrashing
- Thumbnails rendered progressively via IntersectionObserver
- Phase 2 stroke sync: batch freehand points, send complete polyline on mouseup (not per mousemove)

### Retina / HiDPI handling
- pdf.js: render at `scale × devicePixelRatio`, CSS-scale canvas element to logical dimensions
- fabric.js: `enableRetinaScaling: true` handles DPR automatically
- Export: render at 2x for crisp PNG overlay on exported PDF

---

## 11. Known Limitations & Future Enhancements

| Item | Status | Notes |
|------|--------|-------|
| Marking scheme annotation | Deferred | Key format `paperId:qp:pageNumber` supports `paperId:ms:pageNumber` later |
| ⌘K search integration | Deferred | CommandSearch is hardcoded; annotation pages not searchable via ⌘K yet |
| Offline PDF access | Not supported | Service worker doesn't cache PDFs; always requires network |
| Exported PDF re-import | Partial | JSON exported alongside flattened PDF enables re-import, but no UI for it yet |
| Note PDF annotation | Out of scope | Only past papers in Phase 1 |
| Email-based sharing | Phase 4 | Requires email registration system |
| Password auth | Not planned | SpacetimeDB device-based identity continues |

---

## 12. Conventions & Gotchas

- **fabric.js v6**: ESM-only, different API from v5. Use `new Canvas()` not `new fabric.Canvas()`. No built-in `EraserBrush` — implement eraser as click-to-remove-object.
- **pdf.js worker**: Must set `GlobalWorkerOptions.workerSrc` using `import.meta.url` pattern (Vite). Don't use CDN in production.
- **IndexedDB is new**: This app has never used IndexedDB. `annotationStore.js` is standalone — NOT based on `noteStore.js` (which uses SpacetimeDB).
- **No `getPaperById()` exists yet**: Must be added to `pastPaperService.js` before `AnnotatePage` can work at all.
- **CSS**: Use CSS custom properties only. No Tailwind. All `.annotate-*` classes in `Pages.css`. Respect `[data-theme="dark"]`.
- **Touch**: Set `touch-action: none` on canvas element. One finger draws, two fingers zoom/pan. Never allow browser-level pinch-zoom over the canvas.
- **Memory**: Release previous page's full-resolution PDF canvas on page switch. Only keep active page live.
- **Undo scope**: Per-page, not global. Switching pages does not affect other pages' undo stacks.
- **Auto-save triggers**: (1) 2s debounce after last stroke; (2) page switch; (3) component unmount.
- **Unsaved guard**: `beforeunload` + React Router `useBlocker()`. Only active when dirty flag is set (between strokes and next auto-save).
- **Dark mode**: Toolbar and sidebar use theme variables. The PDF canvas area and pages themselves remain white regardless of theme.
- **Keyboard shortcuts**: Register at `AnnotatePage` scope, not globally. Avoid clashing with ⌘K (CommandSearch) and other app-level shortcuts.
