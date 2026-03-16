export const note_cae_1_2_3 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand the format, strategy and key skills for CAE Reading & Use of English Part 8: Multiple matching.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Part 8: Multiple Matching', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Task Format', text: '<strong>Text</strong>: One long text divided into 4–6 sections, OR several short texts on a related theme.<br/><strong>Questions</strong>: 10 statements — match each to the correct section or text.<br/><strong>Marks</strong>: 10 (1 mark per question).<br/><strong>Focus</strong>: Scanning for specific information, detail, opinion, and attitude across a long or multi-section text.' } },
    { id: 'h-2', type: 'heading', data: { text: 'What the Questions Test', level: 2 } },
    { id: 'list-tested', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Specific detail</strong> — "Which section mentions…?"' }, { text: '<strong>Opinion</strong> — "Which person expresses the view that…?"' }, { text: '<strong>Comparison</strong> — "Which person agrees with person X about…?"' }, { text: '<strong>Experience</strong> — "Which person describes a situation where…?"' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Strategy', level: 2 } },
    { id: 'list-strat', type: 'list', data: { style: 'numbered', items: [{ text: 'Read the questions first — underline key words in each statement.' }, { text: 'Skim all sections/texts quickly to get the gist of each.' }, { text: 'Go through questions one by one. Scan for paraphrases of the key words in each section.' }, { text: 'A section may match more than one question. Don\'t assume each section is used only once.' }, { text: 'Check your answer makes sense — the statement must be fully supported by the text, not partially.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'This is a <strong>scanning task</strong>, not a detailed reading task. You do not need to understand every word. Train yourself to locate specific information quickly by practising with timed reading exercises.' } },
    { id: 'callout-warn', type: 'callout', data: { style: 'warning', title: 'Watch Out', text: 'The same section can be the answer to more than one question. Similarly, some sections may not be the answer to any question. Don\'t try to distribute answers evenly across sections.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Part 8: 10 matching questions on a long or multi-section text (1 mark each). Scan for specific information, detail, and opinion. Read questions first and underline key words. Sections can be used more than once.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Part 8: 10 statements × 1 mark, matched to text sections. Scanning task — read questions first, underline key words, then scan for paraphrases. A section can answer multiple questions.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'How does Part 8 differ from Part 5 in approach?', answer: 'Part 8 is a scanning task (10 statements, 1 mark each) across multiple sections — you scan for specific information rather than reading in detail. Part 5 is a detailed reading task (6 four-option MCQs, 2 marks each) on one long text. In Part 8, read questions first then scan; sections can match multiple questions.' },
    ]
  },
  evidence: [], mentions: []
};
