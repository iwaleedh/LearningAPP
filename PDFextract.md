# PDF & Image Extraction → Seed Note Workflow

When a user shares a **PDF** (textbook page, spec extract, past-paper mark scheme, printed notes)
or an **image** (photo of notes, whiteboard, diagram, textbook scan), follow this workflow
to convert the content into accurate, spec-aligned seed notes.

---

## Phase 1 — Intake & Classification

- Identify the **file type**: multi-page PDF / single-page PDF / photograph / diagram image
- Determine the **subject** (chemistry, physics, biology, etc.) from content or filename
- Determine the **qualification level** (IAL A2 / IAS) and **unit code** (e.g. WBI11, WCH12)
- Scan the entire PDF/image before writing any note content — do not process page-by-page in isolation
- Note every major concept, every diagram, every equation, and every table present

---

## Phase 2 — Syllabus Mapping

- Open `src/data/{subject}Syllabus.js` and locate the matching unit
- For every piece of content extracted, find the correct **topic → subtopic** it belongs to
- Build a mapping table before writing any blocks:

| Extracted concept | Maps to topic id | Maps to subtopic string |
|-------------------|-----------------|-------------------------|
| (fill in per PDF) | … | … |

- If content genuinely does not fit any existing subtopic → flag it for **new subtopic creation** (see Phase 5)
- **Never** remap content to a different main topic just because the subtopic is missing

---

## Phase 3 — Content Extraction Rules

### 3a. Text → Point form
- Convert **all running prose** to bullet-point or numbered lists (`list` block)
- One idea per bullet — split compound sentences into separate points
- Use bold sparingly: only for defined terms on first use
- Preserve technical vocabulary exactly as it appears in the source (do not paraphrase spec language)

### 3b. Equations → HTML field
- **Always** use the `html:` field in `equation` blocks — never `latex:`
- Use `<sup>` / `<sub>` for exponents and subscripts
- Use `.nb-frac` span pattern for fractions:

```html
<span class="nb-frac">
  <span class="nb-num">numerator</span>
  <span class="nb-den">denominator</span>
</span>
```

- Useful Unicode: → ← ⇌ ± Δ δ θ λ μ π σ α β γ × ÷ ∑ ° ₀₁₂₃₄₅₆₇₈₉ ⁰¹²³⁴⁵⁶⁷⁸⁹

### 3c. Tables → `comparisonTable` block
- Extract all tabular data into `comparisonTable` blocks with `headers[]` and `rows[][]`
- Add a descriptive `caption` that would make sense without visual context

### 3d. Diagrams & images → SVG
- Every diagram, figure, graph, or image in the source **must** become an `svg` block
- Do **not** skip or summarise a diagram as text — redraw it as SVG
- Annotate with the same labels and arrows as the original
- Add a `caption` matching the original figure title or a descriptive equivalent
- See **SVG Rules** section below for all technical requirements

### 3e. Flowcharts & complex processes → SVG infographic
- Any process with 3+ sequential steps must be rendered as a **flowchart SVG**, not a plain list
- Any comparison of ≥ 3 items across ≥ 2 properties should be a `comparisonTable`, not prose
- Any cyclical process (e.g. carbon cycle, Krebs cycle) must be drawn as a **circular/loop SVG**
- Decision trees from mark schemes → diamond-node flowchart SVG

Flowchart node template:
```xml
<!-- Rounded rectangle node -->
<rect x="X" y="Y" width="160" height="40" rx="8" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.5"/>
<text x="X+80" y="Y+24" text-anchor="middle" font-size="13" fill="#1e1b4b">Label</text>

<!-- Diamond decision node -->
<polygon points="X+80,Y  X+160,Y+30  X+80,Y+60  X,Y+30" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
<text x="X+80" y="Y+34" text-anchor="middle" font-size="12" fill="#92400e">Decision?</text>

<!-- Arrow connector -->
<path d="M X1 Y1 L X2 Y2" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arrowhead-flow)"/>
```

---

## Phase 4 — Accuracy Verification

**Every factual claim extracted from the PDF must be cross-checked before committing to a block.**

| Check | Method |
|-------|--------|
| Numerical values (constants, ratios, thresholds) | Compare against existing seed notes in `src/data/seedNotes/` |
| Unit and formula definitions | Cross-reference `src/data/{subject}Syllabus.js` subtopic titles |
| Spec statements | Confirm wording matches the qualification level (IAS vs IA2) |
| Diagrams | Verify labels match the textual description — flag any discrepancy |
| Mark-scheme answers | Treat as authoritative; note if they conflict with seed note content |

- If a value or statement **cannot be verified**, add a `callout` (style: `'warning'`) flagging it for review
- Do **not** silently include unverified claims in `paragraph` or `list` blocks

---

## Phase 5 — Subtopic Placement & Creation

### Placement rules
- Place extracted content under the **most specific existing subtopic** that matches
- If content spans multiple subtopics, split it — do not create a mega-block subtopic
- Core Practical content always goes under its own `'Core Practical N: …'` subtopic

### New subtopic creation (when needed)
- Confirm no existing subtopic covers the material (check all subtopics in the topic, not just the obvious one)
- Name the new subtopic concisely — match IAL spec naming conventions (e.g. `'Hardy-Weinberg principle'`, not `'How allele frequencies change over time'`)
- Register it in `src/data/{subject}Syllabus.js` — append to the correct `subtopics[]` array
- Create the seed note file: `src/data/seedNotes/{subject}/note_{unitId}_{topicId}_{subtopicIndex}.js`
- Register in `src/data/seedNotes/index.js` (both import line and map entry)
- **Main topic titles and topic `id` values must never be changed**

---

## Phase 6 — Block Assembly Order

Build the `blocks[]` array in this order:

1. `objective` — learning objective extracted or inferred from spec point
2. `heading` (level 2) + content blocks — one section per major concept
3. `callout` (style: `'key'`) — key definitions and formulae
4. `svg` — diagrams, immediately after the content they illustrate
5. `callout` (style: `'worked'`) — worked examples from the PDF
6. `callout` (style: `'tip'`) — exam technique points from mark schemes
7. `callout` (style: `'warning'`) — common errors / unverified claims
8. `checklist` — exam-ready self-check items (near the end)
9. `summary` — one-paragraph recap (always last)

---

## Phase 7 — Recall Cues

Generate 4–6 recall cues from the most testable ideas in the PDF content:

```js
recall: {
  enabled: true,
  cues: [
    { id: 'cue-1', blockId: '<block-id-of-relevant-block>', prompt: 'Question?' },
  ],
  summaryText: 'One-sentence recap of the subtopic.',
  ready: false,
}
```

- Cue prompts must be answerable in 1–3 sentences
- Prefer cues that test application, not just recall of definitions
- `blockId` must match an actual `id` in the `blocks[]` array

---

## Block Type Quick Reference

| Source material | → Block type |
|----------------|-------------|
| Definition / key term | `callout` style `'key'` |
| Numbered process / method | `list` style `'numbered'` |
| Bullet-pointed facts | `list` style `'bullet'` |
| Formula / equation | `equation` with `html:` field |
| Table from textbook | `comparisonTable` |
| Diagram / figure | `svg` |
| Sequential process (3+ steps) | `svg` flowchart |
| Cyclical process | `svg` loop diagram |
| Worked example | `callout` style `'worked'` |
| Examiner tip / mark-scheme hint | `callout` style `'tip'` |
| Common mistake / unverified claim | `callout` style `'warning'` |
| Self-check tick list | `checklist` |
| Final recap | `summary` |

---

## SVG Technical Rules

These apply to **all** SVGs produced from PDF/image extraction.

### 1. Always use `viewBox` — never `width`/`height` attributes
```xml
<!-- ✅ -->
<svg viewBox="0 0 650 480" xmlns="http://www.w3.org/2000/svg"
     font-family="Inter,Arial,sans-serif" font-size="14">

<!-- ❌ fixed pixels break responsive scaling -->
<svg width="650" height="480" ...>
```

### 2. Recommended `viewBox` sizes

| Content type | Recommended `viewBox` |
|---|---|
| Single concept / small diagram | `0 0 320 200` |
| Single-step process | `0 0 520 200` |
| Two-step / two-column comparison | `0 0 650 320` |
| Three-step flowchart | `0 0 520 480` |
| Four-step flowchart | `0 0 520 620` |
| Cyclical / loop diagram | `0 0 500 500` |
| Graph / energy diagram | `0 0 520 280` |
| Side-by-side comparison | `0 0 600 300` |

- `viewBox width ≤ 400` → narrow (scales freely)
- `viewBox width > 400` → wide (min-width: 420px on mobile, horizontal scroll)
- **Never exceed `viewBox` width 800** — text becomes unreadably small when scaled

### 3. All `<text>` must have explicit `text-anchor`
```xml
text-anchor="middle"       <!-- atom labels, centred headings -->
text-anchor="start"        <!-- running left-aligned text -->
dominant-baseline="central" <!-- vertically centre a label on a bond node -->
```

### 4. Use `<path>` for bonds/arrows — never text characters for lines
```xml
<!-- ✅ -->
<path d="M 94 75 L 120 75" stroke="#111827" stroke-width="1.5" />

<!-- ❌ em-dash sits at font baseline -->
<text x="96" y="80">&#8212;</text>
```

### 5. Arrowheads via `<defs>` — use unique `id` per SVG
```xml
<defs>
  <marker id="arrowhead-UNIQUE" markerWidth="6" markerHeight="4"
          refX="5" refY="2" orient="auto">
    <polygon points="0 0, 6 2, 0 4" fill="#6366f1" />
  </marker>
</defs>
```

### 6. Standard CSS classes — embed inside `<defs><style>`
```xml
<defs>
  <style>
    .txt   { fill: #1f2937; }
    .atom  { fill: #111827; font-family: monospace; font-size: 16px; }
    .bond  { stroke: #111827; stroke-width: 1.5; fill: none; }
    .hd    { fill: #1e40af; font-weight: bold; }
    .dim   { fill: #6b7280; }
    .node  { fill: #e0e7ff; stroke: #6366f1; stroke-width: 1.5; }
    .arrow { fill: none; stroke: #6b7280; stroke-width: 1.5; }
  </style>
</defs>
```

### 7. Arrow path direction — arrowhead is placed at the END coordinate

SVG Y-coordinates increase **downward**. The `marker-end` arrowhead is placed at the **last coordinate** of the path.

```xml
<!-- ✅ Arrow pointing DOWN (reactants → product, top → bottom) -->
<path d="M 150 110 L 150 145" stroke="#1d4ed8" stroke-width="2" marker-end="url(#arr)"/>

<!-- ❌ Arrow pointing UP — common mistake when copying coordinates in wrong order -->
<path d="M 150 145 L 150 110" stroke="#1d4ed8" stroke-width="2" marker-end="url(#arr)"/>
```

**Rule:** Chemical reactions always flow **top → bottom** (reactants above, products below). The `(x2, y2)` end of the path must have a **larger Y value** than `(x1, y1)` for a downward arrow. For horizontal left→right flow, `x2 > x1`.

Mnemonic: **"Start at the source, end at the destination."** The arrowhead points to where you wrote last.

---

### 8. Process flow orientation — always top-to-bottom or left-to-right

| Flow type | Direction | Example |
|---|---|---|
| Reaction / synthesis | Top → Bottom | Monomers (top) → Polymer (bottom) |
| Sequential steps | Top → Bottom | Step 1 → Step 2 → Step 3 |
| Before / After comparison | Left → Right | Reactant | Arrow | Product |
| Cyclical | Clockwise from top | Krebs cycle, nitrogen cycle |

- **Never** draw a condensation or hydrolysis reaction with the product above the reactants
- If space is tighter left-to-right, use `Left → Right` orientation but keep the `marker-end` at the rightmost coordinate

---

### 9. Label placement on shapes — never overlap circle/rect boundaries

**Inside a circle:** Centre the text at `(cx, cy)` with `dominant-baseline="central"`:
```xml
<circle cx="100" cy="80" r="30" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
<text x="100" y="80" text-anchor="middle" dominant-baseline="central" font-size="12" fill="#1f2937">HO</text>
```

**Above a shape (caption/sub-label):** Place text at least `r + 16px` above the circle top (i.e. `y = cy - r - 16`):
```xml
<!-- circle at cy=80, r=30 → label above at y = 80 - 30 - 16 = 34 -->
<text x="100" y="34" text-anchor="middle" font-size="11" fill="#6b7280">monomer 1</text>
```

**Below a shape:** Place text at `cy + r + 14`:
```xml
<text x="100" y="124" text-anchor="middle" font-size="11" fill="#6b7280">sub-label</text>
```

**✅ Always check** that no two text elements share overlapping Y ranges. Minimum vertical gap between adjacent text baselines: **16px** for `font-size="12"`, **14px** for `font-size="11"`.

---

### 10. Minimum section gap — 80px between reaction stages

Each distinct stage of a reaction (reactants, arrow, product) needs enough vertical room. Recommended spacing for a vertical condensation/hydrolysis diagram:

| Element | Y range |
|---|---|
| Reactant circles (top) | `cy = 80`, `r = 30` → occupies `y 50–110` |
| Sub-labels below reactant circles | `y ≈ 128` |
| Condensation arrow | starts at `y ≈ 145`, ends at `y ≈ 185` |
| Arrow label text | `y ≈ 160–175` (beside the arrow, `x = cx + 12`) |
| Product circles / dimer | `cy ≈ 215`, `r = 30` → occupies `y 185–245` |
| Product label below | `y ≈ 262` |

Arrow length should be at least **35px** so the arrowhead and label text don't crowd each other.

---

### 11. Reaction label positioning — beside the arrow, never on top of it

Arrow labels (e.g. "Condensation −H₂O") must be placed **to the right** of a vertical arrow, or **above** a horizontal arrow — never centred on the arrow path itself.

```xml
<!-- Vertical arrow at x=150, from y=145 to y=185 -->
<path d="M 150 145 L 150 185" stroke="#1d4ed8" stroke-width="2" marker-end="url(#arr)"/>
<!-- Label to the right, vertically centred on the arrow midpoint -->
<text x="162" y="162" text-anchor="start" fill="#1d4ed8" font-size="12">Condensation</text>
<text x="162" y="177" text-anchor="start" fill="#1d4ed8" font-size="12">−H₂O</text>
```

- Offset label at least `12px` away from the arrow line (`x = arrow_x + 12`)
- Split multi-line labels into separate `<text>` elements spaced `15px` apart

---

### 12. Vertical step spacing — minimum 130px between step sections

| Step | Heading `y` | Content centre `y` |
|------|-------------|---------------------|
| Step 1 | `30` | `80–120` |
| Step 2 | `180` | `240–280` |
| Step 3 | `330` | `390–430` |
| Step 4 | `480` | `540–580` |

### 13. Colour palette (consistent with app design system)
| Use | Colour |
|-----|--------|
| Primary accent (nodes, highlights) | `#6366f1` (indigo) |
| Success / positive | `#16a34a` (green) |
| Warning / caution | `#d97706` (amber) |
| Error / danger | `#dc2626` (red) |
| Body text | `#1f2937` |
| Muted / secondary | `#6b7280` |
| Light node background | `#e0e7ff` |
| Light warning background | `#fef3c7` |

---

## Extraction Pipeline — Technical Reference

The pipeline lives in `pipeline/` and is run from inside that directory.
It converts a PDF into structured JSON + a visual HTML preview in 4 sequential steps.

---

### Quick-start

```bash
cd /path/to/LearningAPP/pipeline

# Full pipeline — all pages
python3 run_pipeline.py "../public/notes/Biology/AQA A Level Biology Student Book 1.pdf"

# Specific page range, custom title
python3 run_pipeline.py "../public/notes/Biology/AQA A Level Biology Student Book 1.pdf" \
  --pages 11-20 \
  --title "AQA Biology Ch.1 — Biological Molecules" \
  --dpi 300

# Resume from step 3 (re-run diagram detection + output only)
python3 run_pipeline.py "../public/notes/Biology/..." --from-step 3

# Skip step 3 entirely (OCR only, no diagram crops)
python3 run_pipeline.py "../public/notes/Biology/..." --skip-step 3
```

---

### CLI arguments (`run_pipeline.py`)

| Argument | Default | Description |
|----------|---------|-------------|
| `pdf_path` | *(required)* | Path to the input PDF file |
| `--pages` | all | Page range: `"11-20"` or specific pages `"1,3,5"` |
| `--dpi` | `300` | Render resolution for step 1 (higher = better OCR, larger files) |
| `--title` | filename | Document title in the HTML output |
| `--lang` | `eng` | Tesseract language code (e.g. `eng+equ` for equations) |
| `--output-dir` | `output` | Root directory for all step outputs |
| `--no-embed-images` | off | Link diagram images by path instead of base64-embedding in HTML |
| `--skip-step N` | — | Skip step N; repeatable: `--skip-step 2 --skip-step 3` |
| `--from-step N` | `1` | Resume from step N (1–4); skips all earlier steps |

---

### Output layout

```
pipeline/
  output/
    pages/                     ← Step 1 output
      page_011.png             ← one PNG per rendered page (300 DPI default)
      page_012.png
      manifest.json            ← { "11": "/abs/path/page_011.png", … }

    text/                      ← Step 2 output
      page_011.txt             ← cleaned OCR text
      page_011.tsv             ← word-level bounding boxes (Tesseract TSV)
      page_012.txt
      page_012.tsv
      manifest.json            ← { "11": { "txt": "…", "tsv": "…" }, … }

    diagrams/                  ← Step 3 output
      page_011_fig_01.png      ← cropped diagram PNG(s) per page
      page_012_fig_01.png
      manifest.json            ← { "11": ["/abs/path/page_011_fig_01.png"], … }

    html/                      ← Step 4 output
      output.json              ← structured page data (database-ready)
      output.html              ← visual browser preview (SVG-embedded figures)
```

---

### Step 1 — PDF → Page Images

**Script:** `step1_pdf_to_images.py`  
**Engine:** PyMuPDF (`fitz`) — no external binary needed  
**Output:** one PNG per page + `manifest.json`

- Renders at configurable DPI (default 300); AQA textbook pages render at ~4268×5522 px
- `--pages` accepts ranges (`11-20`) and comma-separated lists (`1,3,5`)
- Clamps out-of-range page numbers silently

---

### Step 2 — OCR

**Script:** `step2_ocr_pages.py`  
**Engine:** Tesseract 5.5.2 (`oem 3` LSTM, `psm 1` auto-segment)  
**Output:** `.txt` + `.tsv` per page + `manifest.json`

- Preprocessing: greyscale → sharpen (improves accuracy on slightly blurry scans)
- `.tsv` contains word-level bounding boxes — reserved for future text-masking in step 3
- `--lang eng+equ` adds equation support; any Tesseract language pack is valid

---

### Step 3 — Diagram Detection & Cropping

**Script:** `step3_detect_diagrams.py`  
**Output:** cropped diagram PNGs + `manifest.json`

Two strategies, both respecting the `--pages` filter:

| Strategy | Method | Best for |
|----------|--------|----------|
| **A** (default) | PyMuPDF embedded image extraction | Publisher PDFs with actual embedded rasters (fast, lossless) |
| **B** (fallback) | Whitespace-gap heuristic on page PNGs | Flat scans with no embedded images |

Strategy A is always tried first. Strategy B runs on pages where A found nothing.  
Use `--strategy A` or `--strategy B` to force a single strategy.  
`--min-height N` sets the minimum pixel height to count as a diagram (default: 200 px at 300 DPI ≈ 17 mm).

> **Important:** The page filter fix (March 2026) ensures Strategy A only processes the pages  
> selected via `--pages`, not all 328 pages in the book.

---

### Step 4 — Build JSON + HTML

**Script:** `step4_build_html.py`  
**Output:** `output/html/output.json` + `output/html/output.html`

#### JSON output (database-ready)

```json
[
  {
    "page": 11,
    "text": "Glucose and other sugars\n\nGlucose is a monosaccharide…",
    "diagrams": [
      "/abs/path/to/pipeline/output/diagrams/page_011_fig_01.png"
    ]
  }
]
```

| Field | Type | Description |
|-------|------|-------------|
| `page` | `int` | 1-based page number from the original PDF |
| `text` | `string` | OCR text — form-feeds removed, 3+ blank lines collapsed to 2 |
| `diagrams` | `string[]` | Absolute paths to cropped diagram PNGs; `[]` if none found |

#### HTML output (visual preview)

Figures are embedded as **inline SVG `<image>` elements** (not `<img>` tags) so the container
can later be replaced with hand-drawn vector paths when authoring a seed note `svg` block:

```html
<svg viewBox="0 0 {W} {H}"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     role="img" aria-label="{filename}">
  <image xlink:href="data:image/png;base64,…"
         x="0" y="0" width="{W}" height="{H}"
         preserveAspectRatio="xMidYMid meet" />
</svg>
```

`--no-embed-images` links images by file path instead of base64-encoding them (much smaller HTML,
but not self-contained — only works on the local machine).

---

### Conversion workflow (pipeline output → seed note `svg` block)

1. Open `pipeline/output/html/output.html` in a browser — locate the figure by page section
2. Cross-reference the raster at `pipeline/output/diagrams/page_NNN_fig_NN.png`
3. Use the raster as a visual guide; redraw as SVG following all SVG Rules above
4. In the seed note file create an `svg` block:
   ```js
   { type: 'svg', id: 'svg-figX-Y', data: { svg: `<svg viewBox="…">…</svg>`, caption: 'Figure X.Y — …' } }
   ```
5. The `viewBox` of the seed note SVG does **not** need to match the PNG dimensions —
   use the recommended sizes from SVG Rule §2

---

### Dependencies

```
PyMuPDF (fitz) >= 1.27   — PDF rendering + embedded image extraction
Pillow >= 12.0            — image preprocessing
pytesseract >= 0.3        — Python wrapper for Tesseract
Tesseract >= 5.0          — OCR engine (install via Homebrew: brew install tesseract)
```

Install: `pip install -r pipeline/requirements.txt`

---

## Common Mistakes to Avoid

- Using `latex:` instead of `html:` in `equation` blocks → JS escape sequences corrupt backslashes
- Creating a new main topic when a new subtopic is all that is needed
- Including diagrams as description text rather than SVG → always convert to SVG
- Writing prose paragraphs instead of lists → always convert to point form
- Using the same `id` for multiple blocks in the same note
- Setting fixed `width`/`height` on SVGs instead of `viewBox`
- Silently including unverified facts — always flag with a `warning` callout
- Forgetting to add new subtopics/notes to both `{subject}Syllabus.js` AND `seedNotes/index.js`
- **SVG arrow points the wrong direction** — `marker-end` is at the END coordinate `(x2,y2)`; for downward arrows `y2 > y1`; writing coordinates in reverse order flips the arrow
- **Text labels overlapping shape edges** — always place circle labels at `(cx, cy)` with `dominant-baseline="central"` or at least `r + 14px` outside the shape
- **Reaction stages too close vertically** — leave at least 80px between the bottom of one stage and the top of the next; arrow needs ≥ 35px length
- **Arrow label on top of the arrow line** — offset labels `12px` to the right of a vertical arrow or `12px` above a horizontal arrow; never centre text over the path itself
- **Product drawn above reactants** — reactions always flow top→bottom (or left→right); never invert the direction
