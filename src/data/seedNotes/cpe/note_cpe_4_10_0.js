export const note_cpe_4_10_0 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Develop fluency, coherence and extended discourse at C2 level for CPE Speaking.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Fluency, Coherence and Extended Discourse', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'What Examiners Expect at C2', text: 'At C2 level, you should speak <strong>fluently with only rare hesitation</strong> — not because you are searching for language, but because you are <strong>formulating complex ideas</strong>. Your speech should be <strong>coherent over extended turns</strong>, with clear logical development and smooth topic management.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Fluency Techniques', level: 2 } },
    { id: 'list-fluency', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Think-ahead processing</strong> — plan your next point while still speaking the current one.' }, { text: '<strong>Fillers used sparingly and naturally</strong>: "well", "I mean", "let me think" — but not every other sentence.' }, { text: '<strong>Self-correction that doesn\'t interrupt flow</strong> — "the impact was huge — or rather, disproportionate".' }, { text: '<strong>Varied pace</strong> — slow down for emphasis, speed up for less critical detail.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Coherence and Organisation', level: 2 } },
    { id: 'list-coherence', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Discourse markers for structure</strong>: "To begin with…", "Furthermore…", "Having said that…", "To sum up…".' }, { text: '<strong>Signposting topic shifts</strong>: "Moving on to a slightly different aspect…", "That brings me to…"' }, { text: '<strong>Referencing and linking</strong>: "As I mentioned earlier…", "Building on that point…"' }, { text: '<strong>Logical paragraph structure</strong> even in speech: claim → evidence → evaluation.' }] } },
    { id: 'h-4', type: 'heading', data: { text: 'Extended Discourse', level: 2 } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'The 2-Minute Long Turn', text: 'In Part 3, you must sustain a monologue for 2 minutes. Prepare by practising <strong>speaking on any topic for 2 minutes</strong> using the structure: introduce → develop 2–3 angles → conclude. Record yourself and check for coherence and natural flow.' } },
    { id: 'callout-warn', type: 'callout', data: { style: 'warning', title: 'Common Pitfalls', text: '• Speaking too fast without pausing for effect<br/>• Losing track of your argument and going off-topic<br/>• Repeating the same point in different words to fill time<br/>• Over-using "and" or "also" instead of varied connectors' } },
    { id: 'sum-1', type: 'summary', data: { text: 'C2 fluency means speaking with natural flow and only rare hesitation. Coherence requires discourse markers, signposting, and logical structure. Extended discourse needs planned organisation: introduce → develop → conclude. Practise 2-minute monologues regularly.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'C2 fluency = natural flow with rare hesitation. Coherence through discourse markers and logical structure. Extended discourse requires claim → evidence → evaluation over 2 minutes.',
    cues: [
      { id: 'cue-1', blockId: 'list-fluency', prompt: 'How does C2 fluency differ from C1?', answer: 'At C2, hesitation should be rare and only occur when formulating complex ideas, not searching for language. Self-correction should be smooth and not disrupt flow. Pacing should vary naturally for emphasis.' },
      { id: 'cue-2', blockId: 'list-coherence', prompt: 'Name four types of discourse markers for coherent speech.', answer: '1. Structure markers (To begin with, Furthermore). 2. Topic shift markers (Moving on to…). 3. Reference/linking markers (As I mentioned, Building on that). 4. Concluding markers (To sum up, In conclusion).' },
    ]
  },
  evidence: [], mentions: []
};
