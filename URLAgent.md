# URL Scraping & Note Enhancement Workflow

When a user provides a URL to scrape for study content, follow this workflow:

---

## Scraping & Analysis Phase

1. **Fetch the URL content** — Use appropriate tools to extract text and images from the provided URL
2. **Identify the subject** — Determine which subject (chemistry, physics, biology, etc.) the content belongs to
3. **Map to syllabus** — Find the matching unit/topic/subtopic in the relevant `src/data/{subject}Syllabus.js`
4. **Identify images/diagrams** — Extract all diagrams or images in the url web page that should become SVG illustrations

---

## Note Enhancement Guidelines

| Step | Requirement | Implementation |
|------|-------------|----------------|
| 1 | **Include diagrams** | If no existing SVG exists for a concept, create one using the `svg` block type |
| 2 | **Point form** | Convert all prose to bullet/numbered lists using the `list` block type |
| 3 | **Accuracy check** | Verify all scientific facts against the existing seed notes and syllabus |
| 4 | **Sequential ideas** | Present complex processes using numbered lists or create flowcharts using SVG |
| 5 | **Subtopic placement** | Match content to existing subtopics; if no suitable subtopic exists, create a new one (coordinate with existing topic structure) |

---

## Block Type Selection

- **Concepts/definitions** → `heading` + `paragraph` + `list`
- **Key formulas** → `callout` (style: 'key') with `equation` blocks
- **Step-by-step processes** → `list` (numbered) or `svg` (flowchart)
- **Comparisons** → `comparisonTable`
- **Worked examples** → `callout` (style: 'worked')
- **Exam tips** → `callout` (style: 'tip')
- **Warnings/common mistakes** → `callout` (style: 'warning')
- **Diagrams** → Convert images to `svg` blocks with descriptive captions
- **Summaries** → `summary` block at the end

---

## Subtopic Creation Rules

- **DO NOT change** existing main topics or unit structure
- **DO create** new subtopics only when content genuinely doesn't fit existing ones
- **New subtopic naming** — Use descriptive titles aligned with the A-Level/IAL syllabus naming conventions
- **Register in syllabus** — Add new subtopic to the appropriate `src/data/{subject}Syllabus.js`
- **Register in seedNotes** — Create the note file and add to `src/data/seedNotes/index.js`

---

## SVG Settings & Layout Rules

Every `svg` block is rendered by `NoteBlockRenderer.jsx` → `SvgBlock` component, wrapped in a scroll container. The following rules **must** be followed for SVGs to display correctly.

---

### 1. Always set `viewBox` — never use `width`/`height` attributes

```xml
<!-- ✅ CORRECT -->
<svg viewBox="0 0 650 480" xmlns="http://www.w3.org/2000/svg" ...>

<!-- ❌ WRONG — fixed pixel sizes break responsive scaling -->
<svg width="650" height="480" xmlns="http://www.w3.org/2000/svg" ...>
```

The app reads the `viewBox` width to classify the SVG as **narrow** or **wide**:
- `viewBox width ≤ 400` → `nb-svg-narrow` — scales up/down freely with container
- `viewBox width > 400` → `nb-svg-wide` — enforces `min-width: 420px`, horizontal scroll on mobile

---

### 2. Recommended `viewBox` sizes

| Content type | Recommended `viewBox` |
|---|---|
| Single molecule / small diagram | `0 0 320 200` |
| Single-step mechanism | `0 0 520 200` |
| Two-step mechanism | `0 0 650 320` |
| Three-step mechanism | `0 0 650 480` |
| Energy / graph diagram | `0 0 520 280` |
| Comparison side-by-side | `0 0 600 300` |
| Orbital / periodic table layout | `0 0 560 300` |

**Never exceed `viewBox` width of 800** — text becomes unreadably small when the SVG scales down.

---

### 3. Text rendering — use `<path>` bonds, not text characters

The most common rendering mistake is using text (`&#8212;`, `—`, `-`) for chemical bonds. These render at the **text baseline**, causing vertical misalignment.

```xml
<!-- ✅ CORRECT — drawn bond that anchors at exact y coordinates -->
<path d="M 94 75 L 120 75" stroke="#111827" stroke-width="1.5" />

<!-- ❌ WRONG — em-dash sits at font baseline, not atom centre -->
<text x="96" y="80">&#8212;</text>
```

---

### 4. All `<text>` elements must have explicit `text-anchor`

The renderer flags any `<text>` without `text-anchor` or `dominant-baseline` as unaligned. Always add one of:

```xml
text-anchor="middle"   <!-- centre-aligned on x — use for atoms/labels -->
text-anchor="start"    <!-- left-aligned on x — use for running text -->
text-anchor="end"      <!-- right-aligned on x — use sparingly -->
```

And use `dominant-baseline="central"` when you want a label vertically centred on a bond node.

---

### 5. Required `font-family` and `font-size`

Always set these on the root `<svg>` tag so all child text inherits them:

```xml
<svg viewBox="..." xmlns="http://www.w3.org/2000/svg"
     font-family="Inter,Arial,sans-serif"
     font-size="14">
```

- Use `font-size="14"` for body text, labels, and atom groups
- Use `font-size="16"` (via class or override) for main atom symbols (`CH₃`, `O`, etc.)
- Use `font-size="11"` for small annotations / captions inside the SVG
- Use `font-size="10"` for sub-labels, credit lines, or axis tick text

---

### 6. Use `<defs>` for arrowheads on curly arrows (mechanism arrows)

```xml
<defs>
  <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
    <polygon points="0 0, 6 2, 0 4" fill="#ef4444" />
  </marker>
</defs>

<!-- Curly arrow (mechanism) -->
<path d="M 115 65 Q 170 60 220 90"
      fill="none" stroke="#ef4444" stroke-width="1.5"
      marker-end="url(#arrowhead)" />
```

**Important:** If you have multiple SVGs on the same page that both define `id="arrowhead"`, the browser will use the first one. Use **unique ids** per SVG block:
- Propan-2-ol mechanism → `id="arrowhead"`
- Ethanol mechanism → `id="arrowhead-prim"`
- Any new mechanism → use a unique suffix, e.g. `id="arrowhead-sn2"`

---

### 7. Use CSS classes via `<style>` inside `<defs>` for consistency

All mechanism/diagram SVGs should embed these standard classes:

```xml
<defs>
  <style>
    .txt   { fill: #1f2937; }                          /* body text */
    .atom  { fill: #111827; font-family: monospace; font-size: 16px; }  /* atom labels */
    .charge { fill: #ef4444; font-weight: bold; font-size: 14px; }      /* + / - charges */
    .bond  { stroke: #111827; stroke-width: 1.5; fill: none; }         /* bonds */
    .curve { fill: none; stroke: #ef4444; stroke-width: 1.5;
             marker-end: url(#arrowhead-UNIQUE); }                      /* curly arrows */
    .hd    { fill: #1e40af; font-weight: bold; }       /* step headings */
    .dim   { fill: #6b7280; }                          /* faded labels */
  </style>
</defs>
```

---

### 8. Vertical spacing rules for multi-step mechanisms

Never place two step sections within 130px of each other vertically — they will overlap at normal font size. Use these safe y-positions:

| Step | Heading `y` | Content centre `y` |
|------|-------------|---------------------|
| Step 1 | `30` | `80–120` |
| Step 2 | `180` | `240–280` |
| Step 3 | `330` | `390–430` |
| Step 4 | `480` | `540–580` |

For a 3-step mechanism the total viewBox height must be at least **480**. For 4 steps, at least **620**.

---

### 9. Horizontal layout for reactant → product

Use these x zones for a standard left-to-right reaction:

| Zone | x range | Content |
|------|---------|---------|
| Reactant | `20–250` | starting material, bonds, labels |
| Operator | `260–310` | `+`, `→`, arrows |
| Product | `320–580` | product atoms and bonds |
| Annotation | `590–640` | small labels e.g. "(catalyst regen.)" |

For wide diagrams (`viewBox 0 0 650 …`) the total available x is ~640. Keep all text well within this width.

---

### 10. Lone pairs, charges, and subscript positioning

**Lone pairs** — use `<circle>` elements, not text colons:
```xml
<circle cx="177" cy="58" r="1.5" fill="#111827" />
<circle cx="183" cy="58" r="1.5" fill="#111827" />
```

**Positive charge** `+` — place 10–14px above and 8–10px to the right of the atom label:
```xml
<text x="510" y="66" class="charge" text-anchor="start">+</text>
<!-- when atom label is at x=500, y=80 -->
```

**Negative charge** `−` — same offset convention, use `class="charge"` (same red styling).

**Subscript numbers** in atom labels — use Unicode directly in the text string:
- `CH₃` → `CH&#8323;`  
- `CH₂` → `CH&#8322;`  
- `H₂O` → `H&#8322;O`

---

### 11. Common mistakes to avoid

| Mistake | Fix |
|---------|-----|
| Using `&#8212;` (`—`) for bonds | Replace with `<path d="M x1 y1 L x2 y2" class="bond" />` |
| Sharing `id="arrowhead"` across multiple SVGs | Use unique ids per SVG block |
| No `viewBox` attribute | Always set `viewBox="0 0 W H"` |
| No `text-anchor` on `<text>` | Add `text-anchor="middle"` or `"start"` to every text element |
| Text at `y=0` or `y` < 14 | First visible text at `y ≥ 20` — font ascenders will clip at y=0 |
| Step sections too close vertically | Keep ≥ 130px between step heading y-values |
| ViewBox width > 800 | Text becomes unreadably small — split into 2 SVGs instead |
| Using `\dfrac` or `\text` latex in JS strings | Use HTML + Unicode or `<tspan>` for fractions |

---

## Example Workflow

```
User provides: https://example.com/atomic-structure

1. Analyze content → Chemistry, Unit WCH11, Topic 2 (Atomic Structure)
2. Check existing subtopics (note_1_2_0 through note_1_2_8)
3. Parse Diagrams or pictures from the url and input as svg in the note. If content fits existing subtopic → enhance that note
4. If new concept → create new subtopic note_1_2_9
5. Convert images to SVG, write in point form, verify accuracy
6. Add recall cues and evidence references
```
