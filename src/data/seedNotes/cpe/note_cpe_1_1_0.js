export const note_cpe_1_1_0 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master CPE Part 1: Multiple-choice cloze at C2 Proficiency level.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Part 1: Multiple-Choice Cloze', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Task Format', text: 'A text with <strong>8 gaps</strong>. Each gap has <strong>4 options</strong> (A–D). You choose the word that fits the gap. The text is longer and more complex than CAE, often drawn from literary, academic, or journalistic sources.' } },
    { id: 'h-2', type: 'heading', data: { text: 'What Is Tested', level: 2 } },
    { id: 'list-tested', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Precise collocations</strong>: "make an impression" (not "do an impression")' }, { text: '<strong>Subtle meaning distinctions</strong>: slim vs. slender vs. thin vs. narrow' }, { text: '<strong>Complementation patterns</strong>: "accused him of" (not "accused him for")' }, { text: '<strong>Fixed expressions</strong>: "by and large", "in the wake of", "to no avail"' }, { text: '<strong>Idiomatic usage</strong>: "shed light on", "turn a blind eye to"' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Strategy', level: 2 } },
    { id: 'list-strat', type: 'list', data: { style: 'numbered', items: [{ text: 'Read the whole text first for overall meaning — CPE texts have complex arguments.' }, { text: 'For each gap, predict the word before looking at the options.' }, { text: 'Check all four options — at C2, distractors are very close in meaning.' }, { text: 'Test collocations: does the word fit with the words immediately before and after?' }, { text: 'Consider register: is the text formal, literary, or journalistic? The right word must match.' }, { text: 'Read the completed sentence aloud in your head — does it sound natural?' }] } },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Example', text: '"The discovery ______ new ground in the field of genetics."<br/>A) shattered  B) broke  C) cracked  D) split<br/><br/><strong>Answer: B) broke</strong> — "broke new ground" is a fixed expression meaning "pioneered". The other verbs don\'t collocate with "ground" in this sense.' } },
    { id: 'callout-warn', type: 'callout', data: { style: 'warning', title: 'C2 vs C1 Difference', text: 'CPE Part 1 demands <strong>finer distinctions</strong> than CAE. All four options may be synonyms in general — the correct answer depends on collocation, register, or complementation. Read around the gap, not just the gap itself.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'CPE Part 1: 8 gaps, 4 options each. Tests precise collocations, subtle meaning differences, fixed expressions, and complementation patterns. Read the full text first, predict before looking at options, and check collocations carefully. Distractors are very close at C2.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'CPE Part 1: 8 multiple-choice cloze gaps testing precise collocations, subtle meaning distinctions, complementation, fixed expressions, and register.',
    cues: [
      { id: 'cue-1', blockId: 'list-tested', prompt: 'What five language areas does CPE Part 1 test?', answer: '1. Precise collocations (make an impression). 2. Subtle meaning distinctions (slim vs. slender). 3. Complementation patterns (accused of, not for). 4. Fixed expressions (by and large, to no avail). 5. Idiomatic usage (shed light on).' },
      { id: 'cue-2', blockId: 'list-strat', prompt: 'What is the recommended strategy for CPE Part 1?', answer: 'Read the whole text first. Predict the word before looking at options. Check all four options carefully. Test collocations with surrounding words. Consider register. Read completed sentence to check naturalness.' },
    ]
  },
  evidence: [], mentions: []
};
