export const note_cpe_2_4_0 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master CPE essay writing: complex argument and persuasion.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Essay Writing: Complex Argument and Persuasion', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'CPE Part 1: Compulsory Essay', text: 'You read <strong>two short texts</strong> on a topic and write an essay (240–280 words) discussing the ideas in both texts and giving your own <strong>reasoned opinion</strong>. This is compulsory — all candidates do it. You must engage with BOTH texts, not just one.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Essay Structure', level: 2 } },
    { id: 'list-struct', type: 'list', data: { style: 'numbered', items: [{ text: '<strong>Introduction</strong> (2–3 sentences): Introduce the topic, acknowledge its complexity, signal your position. Don\'t just restate the question.' }, { text: '<strong>Body paragraph 1</strong>: Engage with Text 1 — summarise its key idea, evaluate it, add your own perspective.' }, { text: '<strong>Body paragraph 2</strong>: Engage with Text 2 — summarise, evaluate, compare/contrast with Text 1 and your view.' }, { text: '<strong>Your own argument</strong>: Introduce an additional perspective that goes beyond the two texts.' }, { text: '<strong>Conclusion</strong> (2–3 sentences): Synthesise (don\'t just repeat). State your final position with nuance.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Persuasive Techniques', level: 2 } },
    { id: 'list-persuade', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Concession + counter</strong>: "While it is true that X, this overlooks the fact that Y."' }, { text: '<strong>Rhetorical question</strong>: "But can we really afford to ignore the long-term consequences?"' }, { text: '<strong>Evidence appeal</strong>: "Research consistently demonstrates that…"' }, { text: '<strong>Logical progression</strong>: "Given that A, and considering B, it follows that C."' }, { text: '<strong>Hedging for nuance</strong>: "It could be argued…", "There is a case to be made for…"' }] } },
    { id: 'callout-warn', type: 'callout', data: { style: 'warning', title: 'Common Mistakes', text: '<strong>Ignoring one text</strong>: You MUST reference both texts. Ignoring one limits your mark.<br/><strong>Simply agreeing/disagreeing</strong>: C2 demands nuance — consider limitations, exceptions, and conditions.<br/><strong>Word count</strong>: Under 240 or over 280 words can affect your score. Practice hitting the range in timed conditions.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'CPE essay: 240–280 words, engage with both texts, give a reasoned opinion. Structure: intro → Text 1 analysis → Text 2 analysis → own argument → synthesis conclusion. Use concession+counter, hedging, and logical progression. Show nuance, not black-and-white opinions.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'CPE essay: 240–280 words from two texts. Engage with both, add your own perspective, show nuance. Use concession+counter, hedging, and evidence appeals.',
    cues: [
      { id: 'cue-1', blockId: 'list-struct', prompt: 'What is the recommended structure for a CPE essay?', answer: '1. Introduction (topic + position, 2–3 sentences). 2. Body 1: engage with Text 1 (summarise, evaluate). 3. Body 2: engage with Text 2 (compare/contrast). 4. Your own argument beyond both texts. 5. Conclusion: synthesise and state final nuanced position.' },
    ]
  },
  evidence: [], mentions: []
};
