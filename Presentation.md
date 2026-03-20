# Presentation.md — Presentation Feature Context File

Last updated: 2026-03-20

This file documents the full architecture, conventions, and patterns for the
Presentation feature so agents can extend it without re-exploring files.

---

## 1. Overview

**Feature:** Teacher-facing fullscreen slideshow mode.

**Route:** `/presentation` (browse) → `/presentation/:subject/:unitId/:topicId/:subtopicIndex` (player)

**Data source:** Existing seed notes `blocks[]` — no separate presentation data needed.

**Entry point:** "Presentation" nav item in the sidebar (below "Notes").

> [!IMPORTANT]
> **Text colour rule — NO dim or muted text.**
> The player runs on a dark `#0d0d1a` background.
> ALL text must use `#ffffff` (or a vivid accent colour).
> Never use `rgba(255,255,255,<0.9)`, `#cbd5e1`, `#e2e8f0`, `#94a3b8`, or any
> grey-tone for readable text. Structural colours (borders, backgrounds,
> decorative glows) may still use low-opacity whites.

---

## 2. Directory Structure

```text
src/
  pages/
    PresentationBrowsePage.jsx   ← /presentation — subject/unit/subtopic browser
    PresentationPage.jsx         ← /presentation/:s/:u/:t/:i — fullscreen player

  components/
    presentation/
      slideEngine.js             ← blocksToSlides() + totalSteps() + SUBJECT_COLORS
      SlideRenderer.jsx          ← dispatches slide.layout → correct component
      Presentation.css           ← all presentation CSS (player + browse + layouts + annotations)
      AnnotationCanvas.jsx       ← transparent canvas overlay with pointer/touch drawing
      AnnotationToolbar.jsx      ← floating side panel: tools, colours, sizes, clear
      layouts/
        SlideCover.jsx           ← 'cover' — objective/title slide
        SlideBullets.jsx         ← 'bullets' — heading + bullets/paragraphs
        SlideTable.jsx           ← 'table' — comparisonTable block
        SlideDiagram.jsx         ← 'diagram' — svg block
        SlideInfographic.jsx     ← 'infographic' — callout key
        SlideWorkedExample.jsx   ← 'worked-example' — callout worked
        SlideCalloutTip.jsx      ← 'tip' — callout tip
        SlideCalloutWarning.jsx  ← 'warning' — callout warning
        SlideEquation.jsx        ← 'equation' — equation block
        SlideChecklist.jsx       ← 'checklist' — checklist block
        SlideSummary.jsx         ← 'summary' — summary block
```

---

## 3. Routing (App.jsx)

```jsx
const PresentationBrowsePage = lazy(() => import('./pages/PresentationBrowsePage'));
const PresentationPage        = lazy(() => import('./pages/PresentationPage'));

<Route path="/presentation" element={<PresentationBrowsePage />} />
<Route path="/presentation/:subject/:unitId/:topicId/:subtopicIndex"
       element={<PresentationPage />} />
```

---

## 4. Slide Engine (`slideEngine.js`)

### Exports

```js
// Convert seed note blocks[] → slides[]
blocksToSlides(blocks, subject, meta) → slides[]

// Subject theme (primary colour, light, dark, emoji)
getSubjectTheme(subject) → { primary, light, dark, emoji }

// Total animation steps in a slide (max element delay + 1)
totalSteps(slide) → number

// Subject colour map
SUBJECT_COLORS = {
  chemistry:   { primary: '#6366f1', light: '#e0e7ff', dark: '#4338ca', emoji: '⚗️' },
  physics:     { primary: '#0ea5e9', light: '#e0f2fe', dark: '#0369a1', emoji: '⚡' },
  biology:     { primary: '#22c55e', light: '#dcfce7', dark: '#15803d', emoji: '🧬' },
  mathematics: { primary: '#f59e0b', light: '#fef3c7', dark: '#b45309', emoji: '📐' },
  economics:   { primary: '#ef4444', light: '#fee2e2', dark: '#b91c1c', emoji: '📊' },
  business:    { primary: '#8b5cf6', light: '#ede9fe', dark: '#6d28d9', emoji: '💼' },
  accounting:  { primary: '#14b8a6', light: '#ccfbf1', dark: '#0f766e', emoji: '🧾' },
  english:     { primary: '#ec4899', light: '#fce7f3', dark: '#be185d', emoji: '📝' },
}
```

### Slide Object Format

```js
{
  id: 'slide-N',
  layout: 'bullets',       // string — see layout map below
  title: 'Section Heading',
  elements: [              // array of content units, revealed in order
    { type: 'bullet',         html: '...',         delay: 0 },
    { type: 'paragraph',      html: '...',         delay: N },
    { type: 'table-header',   headers: [...],      delay: 0 },
    { type: 'table-row',      cells: [...],        delay: 1 },
    { type: 'step',           html: '...',         delay: 0 },
    { type: 'caption',        text: '...',         delay: N },
    { type: 'svg',            svg: '...',          delay: 0 },
    { type: 'equation',       html: '...',         delay: 0 },
    { type: 'callout-text',   html: '...',         delay: 0 },
    { type: 'summary-point',  text: '...',         delay: N },
    { type: 'checklist-item', text, checked, delay },
    { type: 'quote',          html, source, delay },
    { type: 'code',           code, delay },
  ],
  theme: { primary, light, dark, emoji },  // from getSubjectTheme()

  // Layout-specific extra fields:
  // cover:         objectiveText, subtitle, unit
  // table:         headers[], rows[][], caption
  // diagram:       svgContent, caption
  // equation:      html, caption
  // checklist:     items[]  (raw from block)
}
```

### Block → Slide Layout Mapping

| Seed note block type | `slide.layout` | Notes |
| --- | --- | --- |
| `objective` | `cover` | Always becomes slide 0 |
| `heading` + following content | `bullets` | Heading opens a new slide group |
| `list`, `paragraph` | *(appended to current bullets slide)* | |
| `comparisonTable` | `table` | Standalone slide |
| `svg` | `diagram` | Standalone slide |
| `callout` style=`key` | `infographic` | Standalone slide |
| `callout` style=`worked` | `worked-example` | Steps split on `<br/>` |
| `callout` style=`tip` | `tip` | Standalone slide |
| `callout` style=`warning` | `warning` | Standalone slide |
| `equation` | `equation` | Standalone slide |
| `checklist` | `checklist` | Standalone slide |
| `summary` | `summary` | Always the last slide |
| `quote` | *(appended to current bullets slide)* | |
| `code` | *(appended to current bullets slide)* | |

### Auto-split Rule

If a bullets slide accumulates > 7 elements, the overflow is pushed into a
continuation slide titled `"Title (cont.)"`.

### Empty-slide Elimination (post-processing)

After all slides are built, a second pass removes slides that have a title
but **zero elements** (caused by a `heading` block immediately followed by a
non-bullets block such as `callout`, `table`, `svg`, `equation`, etc.).

Logic:

1. For each orphaned empty bullets slide, its title is **donated** to the
   very next slide:
   - If the next slide has no title or a generic one (`'Equation'`, `'Diagram'`,
     `'Comparison Table'`), replace it.
   - Otherwise, prepend: `"Heading — ExistingTitle"`.
2. The empty slide is then dropped from the output.

> [!IMPORTANT]
> Never add content-free heading blocks to a seed note if the very next block
> creates its own standalone slide — combine the heading text into that block's
> `title` field instead.
---

## 5. Slide Layout Components

Each layout receives `{ slide, animStep }`.

`animStep` is an integer incremented by the player on each click/keypress.
An element becomes visible when `animStep >= element.delay`.

### Animation Pattern

```jsx
// Use this pattern in all layout components:
const isVisible = animStep >= el.delay;
<div
  className={`pres-element ${isVisible ? 'visible' : ''}`}
  style={{ transitionDelay: isVisible ? `${i * 60}ms` : '0ms' }}
>
```

CSS drives the transition:

```css
.pres-element         { opacity: 0; transform: translateX(-24px); transition: none; }
.pres-element.visible { opacity: 1; transform: none;
                        transition: opacity 0.4s ease,
                                    transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94); }
```

### Adding a New Layout

1. Create `src/components/presentation/layouts/SlideMyLayout.jsx`
2. Import and add to `LAYOUT_MAP` in `SlideRenderer.jsx`
3. Add CSS rules with `.pres-slide-my-layout` in `Presentation.css`
4. Add the new layout string to the `switch` in `slideEngine.js`

---

## 6. PresentationPage (Player) Architecture

File: `src/pages/PresentationPage.jsx`

### State

| Variable | Type | Purpose |
| --- | --- | --- |
| `slides` | `slide[]` | From `blocksToSlides()` |
| `slideIdx` | number | Current slide index |
| `animStep` | number | Animation step within current slide |
| `direction` | `'forward'` or `'back'` | Determines slide entry direction |
| `isFullscreen` | boolean | Tracks Fullscreen API state |
| `annotActive` | boolean | Annotation mode on/off |
| `annotTool` | `'pen'\|'highlighter'\|'eraser'` | Active drawing tool |
| `annotColor` | hex string | Current stroke colour |
| `annotSize` | `'s'\|'m'\|'l'` | Current stroke size |

### Navigation Logic

```text
Press → / Space / click canvas:
  if annotActive: clicks go to canvas (draw), not slide nav
  else if animStep < totalSteps(currentSlide) - 1:  animStep++
  else if slideIdx < slides.length - 1:             slideIdx++, animStep = 0, clear canvas

Press ←:
  if animStep > 0:    animStep--
  else slideIdx > 0:  slideIdx--, animStep = totalSteps(prevSlide) - 1, clear canvas

Press Escape:
  if annotActive: exit annotation mode (do NOT navigate away)
  else: navigate('/presentation')
Press F:      toggleFullscreen() — calls document.documentElement.requestFullscreen()
Press A:      toggle annotation mode
Press C:      clear canvas (only when annotActive)
```

### Layout (top to bottom)

```text
┌── .pres-topbar (48px) ─────────────────────────────────────────┐
│ [X Exit] [Subject badge] [Topic label]       [N/total] [⛶ FS]  │
├── .pres-progress-bar-track (3px) ──────────────────────────────┤
│   .pres-progress-bar-fill (fills left→right as slides advance) │
├── .pres-canvas (flex:1, click to advance) ─────────────────────┤
│   [‹]         SlideRenderer (slide card)              [›]      │
├── .pres-controls ──────────────────────────────────────────────┤
│ [··· dots ···]   "Step N of M"    [← Prev] [Reveal / Next →]  │
└────────────────────────────────────────────────────────────────┘
```

### Slide Card CSS

```css
.pres-slide { width: min(900px, 100%); min-height: min(540px, 78vh); }
.pres-slide--enter-right { animation: presEnterRight 0.42s ... }  /* forward */
.pres-slide--enter-left  { animation: presEnterLeft  0.42s ... }  /* back    */
```

The `key={slide-${slideIdx}}` on `<SlideRenderer>` forces a remount on every
slide change, re-triggering the entry animation.

---

## 7. PresentationBrowsePage

File: `src/pages/PresentationBrowsePage.jsx`

- Uses `getSyllabusBySubject(subject)` + `getSubjectLabel(subject)` from `syllabusIndex.js`
- Uses `getSeedNote(noteId)` to check if slides exist for each subtopic:

```js
const noteId = `note:${subject}:${unitId}:${topic.id}:${index}`;
const hasSlides = !!getSeedNote(noteId);
```

- Subjects in sidebar: `chemistry, physics, biology, mathematics, economics, business, accounting, english`
- `?subject=chemistry` query param drives subject selection

---

## 8. CSS Classes Reference

### Player container

| Class | Purpose |
| --- | --- |
| `.pres-page` | Fixed full-viewport container |
| `.pres-topbar` | 48px top bar |
| `.pres-progress-bar-track` / `.pres-progress-bar-fill` | 3px progress bar |
| `.pres-canvas` | Slide display area, click-to-advance |
| `.pres-slide` | Slide card (glassmorphism dark) |
| `.pres-controls` | Bottom nav bar |
| `.pres-dots` / `.pres-dot` | Slide dots: `.active`, `.passed` |
| `.pres-nav-btn` / `.pres-nav-btn--primary` | Prev / Reveal / Next buttons |

### Animation

| Class | Purpose |
| --- | --- |
| `.pres-element` | Element hidden state |
| `.pres-element.visible` | Element revealed state |
| `.pres-slide--enter-right` | Forward slide entry animation |
| `.pres-slide--enter-left` | Backward slide entry animation |

### Layout prefixes

Each layout uses a `.pres-slide-{layout}` class on its root element:

`.pres-slide-cover`, `.pres-slide-bullets`, `.pres-slide-table`,
`.pres-slide-diagram`, `.pres-slide-infographic`, `.pres-slide-worked`,
`.pres-slide-tip`, `.pres-slide-warning`, `.pres-slide-equation`,
`.pres-slide-checklist`, `.pres-slide-summary`

### Browse page extras

| Class | Purpose |
| --- | --- |
| `.pres-browse-header` | Hero icon + title row |
| `.pres-browse-header-icon` | Coloured icon square |
| `.pres-browse-btn` | "Open Slideshow" gradient button |
| `.pres-no-slides-badge` | Greyed "No slides yet" label |
| `.chapter-sidebar` / `.chapter-sidebar-item` | Subject picker sidebar |
| `.chapter-layout` / `.chapter-content` | Two-column layout flex container |

### CSS custom property

`--pres-color` is set on `.pres-page` and `.pres-slide` with the subject
accent colour and cascades into all child elements.

---

## 9. Equation Rendering

Same as NoteBlockRenderer — use `html` field, never `latex`.
The `.nb-frac`, `.nb-num`, `.nb-den` classes are re-declared inside
`.pres-slide` in `Presentation.css` for fraction rendering.

---

## 9b. SVG Diagram Text in Dark Mode

> [!IMPORTANT]
> Seed-note SVGs have hardcoded `fill` colours designed for **light** backgrounds
> (e.g. `fill="#374151"`, `fill="#6d28d9"`).
> A CSS rule in `Presentation.css` forces **all** SVG `text` and `tspan` elements
> inside `.pres-svg-wrapper` to `fill: #ffffff !important`.
> This applies automatically to every diagram slide — no changes needed in the SVG data.
> Structural/shape colours (lines, rectangles, polygons) are intentionally unchanged.

---

## 10. Adding Slides for a New Block Type

1. Handle the new block type in the `switch` in `slideEngine.js → blocksToSlides()`
2. Create element objects with `type` and `delay` fields
3. Either reuse an existing layout or add a new layout component
4. If new layout: register it in `SlideRenderer.jsx → LAYOUT_MAP`
5. Add layout styles to `Presentation.css`

---

## 11. Responsive Breakpoints

| Breakpoint | Changes |
| --- | --- |
| ≤ 768px | Browse page sidebar stacks vertically; canvas padding tightens |
| ≤ 480px | Topic label hidden; nav button text hidden; anim hint hidden |

---

## 12. Annotation System

### Files

| File | Role |
| --- | --- |
| `AnnotationCanvas.jsx` | Transparent `<canvas>` overlay on top of the slide card |
| `AnnotationToolbar.jsx` | Floating panel pinned to **top-right corner** of the slide card |
| Annotation CSS in `Presentation.css` | `.annot-*` classes |

### AnnotationCanvas API

```js
// Toggle with:
<AnnotationCanvas
  ref={canvasRef}      // forwardRef — exposes { clear() }
  active={annotActive} // true = draw mode; false = pointer-events:none
  tool='pen'           // 'pen' | 'highlighter' | 'eraser'
  color='#ffffff'      // CSS colour hex
  size='m'             // 's' | 'm' | 'l'
/>

// Clear all strokes:
canvasRef.current?.clear();
```

### Stroke size map

| Size | Pen (px) | Highlighter (px) | Eraser (px) |
| --- | --- | --- | --- |
| `s` | 2 | 14 | 18 |
| `m` | 4 | 22 | 32 |
| `l` | 8 | 36 | 56 |

### Tool behaviours

| Tool | `globalCompositeOperation` | `globalAlpha` |
| --- | --- | --- |
| `pen` | `source-over` | 1.0 |
| `highlighter` | `source-over` | 0.35 |
| `eraser` | `destination-out` | 1.0 |

### Colour palette

White `#ffffff`, Yellow `#facc15`, Orange `#fb923c`, Red `#f87171`,
Green `#34d399`, Blue `#60a5fa`, Pink `#e879f9`, Black `#000000`

### When annotations clear

Annotations are **ephemeral** — they clear when:

- Advancing to a new slide (not just a new step)
- Going back to a previous slide
- Jumping via dot navigation
- User presses **C** (when annotation mode on)
- User clicks the Trash button

### Annotation CSS classes

| Class | Purpose |
| --- | --- |
| `.annot-toggle-btn` | Circle pen toggle button (`.active` = primary colour glow) |
| `.annot-panel` | Expanded vertical toolbar panel (slide-in animation) |
| `.annot-tool-btn` | Individual tool button (`.active` = primary colour) |
| `.annot-color-swatch` | Colour circle (`.active` = white ring) |
| `.annot-size-btn` | S/M/L size button (`.active` = white highlight) |
| `.annot-clear-btn` | Red-tinted trash button |
| `.annot-mode-badge` | "✏️ ANNOTATING" pill badge at slide top |
| `.pres-canvas.annot-active` | Crosshair cursor on the canvas area |
