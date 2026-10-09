---
version: 1
slug: "src-pages-notepage-jsx"
primary_target: "src/pages/NotePage.jsx"
related_targets: ["src/components/notes/GuidedNoteReader.jsx", "src/components/notes/GuidedNoteReader.css"]
---

# Guided note reading

Mode: Read with familiar Operate controls. Audience: students who need more support with subject foundations, reading, confidence or working memory; phones are a primary device.

Direction: one idea at a time on a calm reading surface. Keep the established burgundy brand, sans body and Patrick Hand note headings. Begin with a clear goal, then a short explanation/example, an optional word explanation and an untimed question. Back and Next remain visible within the step. The Complete notes toggle offers the full reference.

Hierarchy: goal → progress → current step → optional word help → try a question → next action. Desktop Contents is closed initially; phone Contents still opens as a sheet. No additional panels open by default.

Intentional reading sizes: 18px desktop / 17px phone, line-height 1.8, maximum 64ch, touch controls at least 44px. Neutral examples replace bright gradients in guided mode. Primary colour indicates actions, selection and progress. Respect the app's existing light/dark themes and reduced-motion preferences.

Review: source and rendered DOM inspection completed, followed by corrections to completion navigation, table captions/extra columns, and progress wording. React interactions and all 56 authored Chemistry steps verified. The manual design detector found only advisory font/radius deviations; the reading sizes are documented in DESIGN.md and progress tracks now use the existing full-radius token. Real browser visual review is blocked by local-server restrictions; no screenshot or device-validation claim is made.

Content scope and authoring contract: docs/guided-notes.md. All 2,055 notes use guided delivery; 11 Chemistry foundation lessons have independently rewritten teaching sequences. The wider catalogue retains its original subject prose split into smaller steps.
