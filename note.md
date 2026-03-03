# Note System Specification (All Subjects)

This file defines what every subject note must include and how note features are implemented in the app.

## Scope
- Applies to: Chemistry, Biology, Physics, Mathematics, Business, Economics, Accounting.
- Granularity: one note per subtopic.
- Route pattern: `/notes/:subject/:unitId/:topicId/:subtopicIndex`.

## Required Header Metadata
Each note must include:
- `subject`
- `qualificationCode` (official Edexcel code, e.g. `YEC11`)
- `unitCode` (official unit code, e.g. `WEC12`)
- `noteId` (`note:${subject}:${unitId}:${topicId}:${subtopicIndex}`)
- `confidenceScore` (1-5)
- `confidenceBand` (derived from score):
  - `1-2 => red`
  - `3 => amber`
  - `4-5 => green`
- `estimatedReadMinutes` (auto from content word count)
- `estimatedReadMinutesOverride` (optional manual override)
- `breadcrumbs` (`A-Level > Subject > Unit > Topic X > Subtopic`)
- `lastEditedAt`

## Required Block Model
All notes use a block-based editor with these block types:
- `objective` (pinned top, non-removable)
- `paragraph`
- `heading`
- `list`
- `checklist`
- `quote`
- `equation` (LaTeX input + rendered output using KaTeX)
- `comparisonTable`
- `code` (language limited to Python/Java)
- `annotatedImage` (point hotspot authoring)
- `summary` (pinned bottom, non-removable)

Rules:
- Objective block auto-seeds from objective dataset or fallback prompt.
- Summary block enforces exact 50-word rule for note readiness.

## Definition Popups
- Terms are marked per block and linked to official definition datasets.
- Trigger behavior: hover + click.
- Accessibility: keyboard focus opens definition; `Esc` closes.

## Evidence / Case Study Sidebar
Each note can store structured evidence items:
- `id`
- `title`
- `detail`
- `year`
- `source`
- `tags[]`

## Active Recall Layer
Features:
- Global toggle `On/Off`.
- Cornell cue column with prompts anchored to block IDs.
- Convert selected text or block content to flashcard.
- Summary box is required to mark note as Ready.

Readiness rule:
- Autosave is always allowed.
- `Mark Note Ready` is allowed only when summary has exactly 50 words.

## Mentions and Connectivity
- Mention syntax: `@[[note:subject:unitId:topicId:subtopicIndex]]`.
- Scope: same subject only.
- Mention preview shows:
  - title / breadcrumb
  - confidence
  - estimated read time
  - snippet
- Graph fragment:
  - centered on current note
  - nodes are directly mentioned notes
  - edges are manual mention links only

## Visual and Interactive Features
- Annotated image block supports:
  - upload image to note assets
  - add point hotspots by clicking image
  - edit hotspot label/description
  - delete hotspot
- Comparison table template is built-in for compare/contrast responses.
- Code block has syntax-highlighted preview for Python and Java.

## Persistence (Local-First)
- Primary storage: IndexedDB database `lt_notes_v1`.
- Stores:
  - `notes` (key: `noteId`)
  - `flashcards` (key: `cardId`)
  - `note_assets` (key: `assetId`)
- Indexes:
  - `notes.bySubject`
  - `notes.byUpdatedAt`
  - `flashcards.bySubject`
  - `flashcards.bySourceNote`
- UI preferences in `localStorage`:
  - active sidebar tab
  - recall layer toggle
  - panel collapsed state
- Fallback:
  - if IndexedDB unavailable, use in-memory session fallback and show warning.

## Flashcard Integration
- Cards created from notes are saved to global deck.
- Flashcards include source backlink:
  - `sourceNoteId`
  - `sourceLabel`
- `/flashcards` reads user deck first; sample cards are fallback only.

## Data Datasets
Required datasets:
- Objectives: `src/data/noteObjectives/{subject}Objectives.js`
- Definitions: `src/data/noteDefinitions/{subject}Definitions.js`

Validation:
- Objective map keys must match valid syllabus-derived note IDs.
- Missing objective entries may use fallback objective prompt.

## Minimum QA Checklist (Per Subject)
- Open subtopic from `/chapters` and load correct note route.
- Header shows correct syllabus/qualification codes and breadcrumb.
- Objective block present at top; summary block present at bottom.
- Equation renders from LaTeX input.
- Definition popup works on hover/click and keyboard.
- Cue column and recall toggle behave correctly.
- Convert-to-card writes card visible in `/flashcards`.
- Summary readiness fails at 49/51 words, passes at 50 words.
- Mention preview opens and graph updates from manual mention.
- Note persists after refresh/offline (local-first behavior).

