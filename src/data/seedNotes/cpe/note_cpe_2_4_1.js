export const note_cpe_2_4_1 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master synthesising and evaluating multiple viewpoints at C2 level.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Synthesising and Evaluating Multiple Viewpoints', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'The C2 Difference', text: 'At C1 you compare two views. At C2 you <strong>synthesise</strong> — weaving ideas together, identifying where they overlap, conflict, or complement each other, and <strong>evaluating</strong> the strength of each argument before reaching your own reasoned conclusion.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Synthesis Techniques', level: 2 } },
    { id: 'table-tech', type: 'comparisonTable', data: { caption: 'Ways to synthesise viewpoints', headers: ['Technique', 'What It Does', 'Language'], rows: [['Find common ground', 'Identify where both texts agree', '"Both writers converge on the idea that…"'], ['Highlight tension', 'Show where texts contradict', '"Whereas Text 1 advocates X, Text 2 contends that Y."'], ['Qualify a claim', 'Accept a position with limits', '"This holds true in certain contexts, but…"'], ['Reframe the debate', 'Offer a new angle neither text considers', '"Perhaps the more fundamental question is…"'], ['Rank importance', 'Argue one factor outweighs another', '"While both factors merit attention, X is arguably more pressing."']] } },
    { id: 'h-3', type: 'heading', data: { text: 'Evaluative Language', level: 2 } },
    { id: 'list-eval', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Assessing strength</strong>: "This is a compelling / persuasive / flawed / simplistic argument."' }, { text: '<strong>Questioning assumptions</strong>: "This rests on the assumption that…, which may not hold."' }, { text: '<strong>Acknowledging limitations</strong>: "The argument is valid to a point, but overlooks…"' }, { text: '<strong>Drawing implications</strong>: "If we accept this view, it follows that…"' }, { text: '<strong>Weighing evidence</strong>: "The evidence for X is more robust than for Y."' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Structure for Synthesis', text: 'Don\'t write "Text 1 says X. Text 2 says Y." instead, weave them together: "While both texts acknowledge the importance of Z, they diverge sharply on whether A or B is the more effective solution. Text 1\'s emphasis on A appears compelling, yet Text 2 raises valid concerns about…"' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Synthesis: find common ground, highlight tension, qualify claims, reframe the debate. Evaluative language: assess argument strength, question assumptions, acknowledge limitations, draw implications. Weave texts together — don\'t treat them separately.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Synthesis: weave viewpoints together (common ground, tension, qualification, reframing). Evaluate argument strength, question assumptions, acknowledge limitations.',
    cues: [
      { id: 'cue-1', blockId: 'table-tech', prompt: 'Name four techniques for synthesising multiple viewpoints.', answer: '1. Find common ground ("Both writers converge on…"). 2. Highlight tension ("Whereas Text 1 advocates X, Text 2 contends Y"). 3. Qualify a claim ("This holds true in certain contexts, but…"). 4. Reframe the debate ("Perhaps the more fundamental question is…"). 5. Rank importance ("X is arguably more pressing").' },
    ]
  },
  evidence: [], mentions: []
};
