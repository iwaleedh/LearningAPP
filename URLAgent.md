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
