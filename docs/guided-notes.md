# Guided notes for students who need more support

Notes now open in **Step-by-step lesson** mode. The shared reader serves all 2,055 seed notes. **Complete notes** remains available as the full exam reference.

## Teaching and reading experience

- One manageable reading step at a time, with Back and Next controls.
- 18px desktop / 17px phone body text, generous line spacing, short reading measure, and restrained surfaces using the existing theme.
- Optional explanations for words in the current step.
- Untimed practice with explanatory feedback. Wrong answers can be retried; answering correctly is not required to continue.
- The current step and steps read are saved per note on this device. Returning resumes the saved step. Storage failure does not prevent reading.
- Completion marks the note read; it does not claim understanding or mastery. Students can revisit any step, use Contents, and undo the read status.

The 11 Chemistry WCH11 Topic 1 lessons have separately authored plain-language teaching sequences: atom/formula terms, moles, equations, relative mass, concentration, empirical formulae, reacting amounts, yield, gas practical, observations, and ideal gases. They contain 56 steps, concrete examples, questions and explanations. A simple labelled molecule diagram accompanies the introduction.

Other notes receive guided steps from their existing content. Paragraphs split at sentence or line boundaries, lists show up to three items at a time, and longer tables become labelled rows. Formula HTML and SVG geometry remain intact. This is a catalogue-wide reading overhaul; the other subjects' prose has not all been manually rewritten. The complete reference retains advanced detail and original comparison tables.

## Authoring a guided lesson

Attach `guidedLesson` to a seed note without replacing its `blocks`, `recall`, or `evidence`. See `src/data/guidedLessons/chemistryFoundations.js` for examples.

```js
guidedLesson: {
  goal: 'One clear thing the student will learn.',
  start: 'A short, reassuring starting instruction.',
  steps: [{
    id: 'stable-step-id',
    title: 'One concrete idea',
    kind: 'learn', // 'example' or 'remember' also supported
    blocks: [/* normal NoteBlock objects with unique IDs */],
    check: {
      prompt: 'A question about this step.',
      options: ['An answer', 'Another answer'],
      correctIndex: 0,
      explanation: 'Explain why the answer is correct.'
    }
  }]
}
```

For an open question, use `{ prompt, answer }` instead of options. The answer is sanitized HTML revealed on request. Keep step IDs stable: saved progress uses IDs rather than positions. Use HTML equations, never escaped LaTeX in JS strings.

Write short, direct sentences. Explain a technical term before using it repeatedly. Show one calculation operation per line and name every quantity and unit. Make an example concrete before asking for independent practice. Keep exam terminology accurate, use respectful language, and avoid student-facing ability labels.

## Validation

All catalogue notes are tested for a guided path, unique step IDs, and retained teaching blocks. Foundation lesson checks have valid answer choices and explanations. Unit checks cover formatting/subscripts, table values/captions, and saved progress with unavailable storage.

A React/JSDOM interaction check exercised retry feedback, next/back, focus, storage, completion and subsequent Contents navigation; all 56 authored steps rendered successfully. Application lint, the unit suite, and production build pass. Mobile Playwright coverage includes lesson resumption and the complete-reference diagram controls, but running the browser suite is blocked in this workspace by `listen EPERM` when starting its local server. Actual device and browser visual review remains outstanding.

## Catalogue-wide teaching support

Every subject's generated lesson now includes reading prompts matched to the content: pictures, formulas, individual list points, explanations, and worked examples. Self-check explanations come directly from the current step; existing explicitly answered recall questions take priority. No subject answers are invented, and the complete-reference blocks are not changed. CAE and CPE now include plain-language help for common language-study terms; IGCSE subjects use the corresponding subject vocabulary.

Catalogue tests require a guided path and a supported practice check in every seed note, and a reading prompt on each generated teaching step. Newly added seed notes inherit both reading formats automatically through the shared NotePage reader.
