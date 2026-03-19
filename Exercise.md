# Exercise.md — Exercise Authoring Guide

Reference document for AI agents creating exercise sets for any subject/topic.
Attach this file whenever generating exercises for a new topic.

---

## 1. Architecture Overview

**Exercise system flow:**
```
ExercisePage.jsx → subject dropdown → unit:topic dropdown → exercise type grid → loads questions → renders component
```

- Exercise data lives in `src/data/exercises/{subject}/`
- Index file: `src/data/exercises/index.js` — maps `'subject:unitId:topicId'` → exercise set object
- ExercisePage auto-discovers sets via `getExerciseSet(subject, unitId, topicId)`
- No component changes needed when adding new exercise sets — just create data file + register in index

**Available subjects (ExercisePage):**
- `chemistry` (AL Chemistry) — available ✅
- `biology` (AL Biology) — available ✅
- `physics` (AL Physics) — available: false (coming soon)
- `mathematics` (AL Mathematics) — available: false (coming soon)

---

## 2. File Naming & Export Convention

### File path
```
src/data/exercises/{subject}/exercises_{subject}_{unitId}_{topicId}.js
```
Example: `src/data/exercises/chemistry/exercises_chemistry_1_3.js`

### Named export
```js
export const exercises_{subject}_{unitId}_{topicId} = {
    mcq: [...],
    fillblank: [...],
    dragdrop: [...],
    sequence: [...],
    keyword: [...],
    flashcards: [...],
};
```

### ID convention
For Topic 1 within a unit: `mcq-1`, `fb-1`, `dd-1`, `seq-1`, `kw-1`, `fc-1`
For Topic N (N ≥ 2): `mcq-tN-1`, `fb-tN-1`, `dd-tN-1`, `seq-tN-1`, `kw-tN-1`, `fc-tN-1`

Example for Topic 3: `mcq-t3-1`, `mcq-t3-2`, ..., `fb-t3-1`, etc.

---

## 3. Question Counts (Target Per Topic)

| Type | Key | Count | Description |
|------|-----|-------|-------------|
| Multiple Choice | `mcq` | ~30 | 4-option questions with rationale |
| Fill-in-the-Blank | `fillblank` | ~15 | Template with `__BLANK__` placeholders |
| Drag & Drop | `dragdrop` | ~10 | Categorisation (2-5 category buckets) |
| Sequence | `sequence` | ~8 | Step ordering (4-6 steps) |
| Keyword Check | `keyword` | ~12 | Exam-style short answers (2-4 marks) |
| Flashcards | `flashcards` | ~25+ | Front/back recall pairs |
| **Total** | | **~100** | Per topic |

---

## 4. Data Shapes (Exact Props Per Component)

### 4a. MCQ — `MCQExercise.jsx`

```js
{
    id: 'mcq-t3-1',
    stem: 'What is the term for...?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],  // exactly 4
    correctAnswer: 0,      // 0-indexed into options array
    rationale: 'Explanation of why the correct answer is right...',
    topic: 'Subtopic Name',  // ← REQUIRED, shown as grouping label
}
```

**Notes:**
- Options are auto-shuffled on render — `correctAnswer` index corresponds to original array position
- `rationale` shown after submission — explain WHY correct and WHY others are wrong
- `topic` field groups questions and is displayed — use the subtopic title

### 4b. Fill-Blank — `FillBlankExercise.jsx`

```js
{
    id: 'fb-t3-1',
    stem: 'Complete the following about ionic bonding.',
    template: 'Ionic bonding is the __BLANK__ attraction between __BLANK__ charged ions.',
    blanks: [
        { answer: 'electrostatic' },
        { answer: 'oppositely' },
    ],
    rationale: 'Ionic bonding is defined as...',
}
```

**Notes:**
- Each `__BLANK__` in `template` maps to corresponding entry in `blanks[]` (order matters)
- Matching uses **Levenshtein distance ≤ 2** (fuzzy) — answers like "electrosatic" accepted
- Keep answers SHORT (1-3 words) for reliable fuzzy matching
- Use Unicode for special chars: ², ⁻¹, ×, → (not LaTeX)
- No `topic` field used

### 4c. Drag-Drop — `DragDropExercise.jsx`

```js
{
    id: 'dd-t3-1',
    stem: 'Sort the following substances by structure type.',
    categories: ['Giant Ionic', 'Simple Molecular', 'Giant Covalent'],  // 2-5 categories
    items: [
        { text: 'NaCl', category: 'Giant Ionic' },
        { text: 'H₂O', category: 'Simple Molecular' },
        { text: 'Diamond', category: 'Giant Covalent' },
        // 6-10 items total
    ],
}
```

**Notes:**
- `category` field in each item must exactly match one of the `categories[]` strings
- Items auto-shuffled on render
- Aim for 6-10 items per question, distributed across categories
- No `topic` or `rationale` field

### 4d. Sequence — `SequenceExercise.jsx`

```js
{
    id: 'seq-t3-1',
    stem: 'Put these steps in the correct order:',
    steps: [
        'First step (this is the correct first step)',
        'Second step',
        'Third step',
        'Fourth step',
        // 4-6 steps in CORRECT order
    ],
}
```

**Notes:**
- The array index IS the correct order — steps[0] is the first step
- Steps auto-shuffled on render
- User drags to reorder; correct = matching original position
- 4-6 steps recommended
- No `topic` or `rationale` field

### 4e. Keyword Check — `KeywordCheck.jsx`

```js
{
    id: 'kw-t3-1',
    stem: 'Define ionic bonding. [2 marks]',
    marks: 2,
    keywords: ['electrostatic', 'attraction', 'oppositely charged', 'ions'],
    modelAnswer: 'Ionic bonding is the strong electrostatic attraction between oppositely charged ions in a giant ionic lattice.',
}
```

**Notes:**
- `stem` should include mark allocation in square brackets: `[2 marks]`, `[3 marks]`
- `keywords` are scanned case-insensitively in the student's answer
- Multi-word keywords (e.g. 'oppositely charged') matched as phrase
- Score = (keywords found / total keywords) × 100%
- `modelAnswer` shown on demand — write a full exam-quality response
- Typically 3-7 keywords per question
- No `topic` field

### 4f. Flashcards — `FlashcardExercise.jsx`

```js
{
    id: 'fc-t3-1',
    front: 'Define ionic bonding.',
    back: 'The strong electrostatic attraction between oppositely charged ions, acting in all directions throughout the giant ionic lattice.',
    topic: 'Ionic Bonding',  // ← REQUIRED, shown as badge
}
```

**Notes:**
- `front`: question/prompt (keep concise)
- `back`: full answer (can use `\n` for line breaks, bullet points with `•`)
- `topic` field is required and displayed as a badge
- Self-assessed (no auto-grading)

---

## 5. Registration in Index

After creating the exercise file, edit `src/data/exercises/index.js`:

```js
// Add import
import { exercises_{subject}_{unitId}_{topicId} } from './{subject}/exercises_{subject}_{unitId}_{topicId}';

// Add to exerciseSets map
export const exerciseSets = {
    // ... existing entries
    '{subject}:{unitId}:{topicId}': exercises_{subject}_{unitId}_{topicId},
};
```

The `getExerciseSet()` and `getAvailableTopics()` functions work automatically — no changes needed.

---

## 6. Content Guidelines

### Source material
- **Always** reference the corresponding seed notes: `src/data/seedNotes/{subject}/note_{unitId}_{topicId}_{subtopicIndex}.js`
- Extract facts, definitions, formulas, and procedures from the note blocks
- Cross-check data accuracy against the seed note content

### Question distribution
- Distribute questions evenly across all subtopics within the topic
- MCQ: ~2-3 per subtopic
- Fill-blank: focus on definitions, formulas, calculations
- Drag-drop: focus on classification, comparison, categorisation
- Sequence: focus on procedures, methods, decision trees
- Keyword: exam-style "define", "explain", "describe" questions
- Flashcards: ~2 per subtopic, covering key definitions and facts

### Text formatting rules
- Use **Unicode** for special characters: ², ³, ⁻¹, ×, →, ⇌, Δ, θ, °, ₂, ₃
- Use `<sup>` and `<sub>` only in `stem` or `front`/`back` fields if needed (HTML rendered)
- **Never** use LaTeX (`\dfrac`, `\text`) — JS string literals corrupt backslash sequences
- For fractions in text, write: `n/V` or `m ÷ M` or use Unicode fraction chars
- For chemical formulae: `H₂O`, `CO₂`, `Na⁺`, `Cl⁻`, `Fe³⁺`

### Quality standards
- Every MCQ `rationale` should explain why the correct answer is right AND briefly why distractors are wrong
- Distractors should be plausible (common misconceptions, off-by-one errors, confusable terms)
- Fill-blank answers should be 1-3 words for reliable fuzzy matching
- Keyword lists should contain the minimum essential terms for a correct exam answer
- Model answers should be exam-board quality (Pearson Edexcel standard)

---

## 7. Exercise Type Suitability Guide

Use this to decide which exercise types suit different content areas:

| Content Type | Best Exercise Types |
|-------------|-------------------|
| Definitions & terminology | MCQ, Keyword, Flashcards, Fill-blank |
| Numerical calculations | Fill-blank, MCQ |
| Classification / comparison | Drag-drop, MCQ, Flashcards |
| Procedures / methods | Sequence, Keyword |
| Cause-and-effect / explanations | Keyword, MCQ |
| Property trends | MCQ, Drag-drop, Fill-blank |
| Diagram interpretation | MCQ, Fill-blank |
| Practical / experimental | Sequence, Keyword, MCQ |
| Formula recall | Fill-blank, Flashcards |

---

## 8. Existing Exercise Sets (Current State)

| Key | File | Subject | Unit | Topic |
|-----|------|---------|------|-------|
| `chemistry:1:1` | `exercises_chemistry_1_1.js` | Chemistry | WCH11 | Topic 1: Formulae, Equations, Moles |
| `chemistry:1:2` | `exercises_chemistry_1_2.js` | Chemistry | WCH11 | Topic 2: Atomic Structure |
| `biology:1:1` | `exercises_biology_1_1.js` | Biology | WBI11 | Topic 1 |
| `biology:1:2` | `exercises_biology_1_2.js` | Biology | WBI11 | Topic 2 |

**To add:** Create exercise file → register import + map entry in `src/data/exercises/index.js`

---

## 9. Verification Checklist

After creating an exercise set, verify:

1. **Build:** `npm run build` — no import/syntax errors
2. **Load:** `npm run dev` → `/exercises` → select subject → select unit:topic → all 6 types appear in grid
3. **MCQ:** Select correct answer → green feedback + rationale
4. **Fill-blank:** Type answer → fuzzy match accepts close spelling
5. **Drag-drop:** Drag to correct categories → green indicators
6. **Sequence:** Reorder correctly → green checkmarks
7. **Keyword:** Type answer with keywords → percentage score + chips
8. **Flashcards:** Click to flip → front/back render correctly
9. **ID uniqueness:** All IDs unique within the file (no duplicates across types)
10. **Factual accuracy:** Spot-check 3-5 questions per type against seed notes

---

## 10. Template: Creating Exercises for a New Topic

**Steps:**

1. **Identify scope:** Subject, Unit ID, Topic ID, all subtopic indices
2. **Read seed notes:** `src/data/seedNotes/{subject}/note_{unitId}_{topicId}_*.js` — extract key concepts per subtopic
3. **Create file:** `src/data/exercises/{subject}/exercises_{subject}_{unitId}_{topicId}.js`
4. **Write questions:** Follow counts (§3), shapes (§4), content guidelines (§6)
5. **Register:** Add import + map entry in `src/data/exercises/index.js`
6. **Verify:** Run checklist (§9)
