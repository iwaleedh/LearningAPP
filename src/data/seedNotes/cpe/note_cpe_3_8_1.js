export const note_cpe_3_8_1 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Develop skills for following complex arguments and lectures at C2 level.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Following Complex Arguments and Lectures', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'C2 Challenge', text: 'CPE listening includes <strong>academic lectures, monologues, and extended discussions</strong> where speakers develop complex, multi-layered arguments. You need to follow the logic, track shifts in position, and distinguish main claims from supporting evidence.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Tracking Argument Structure', level: 2 } },
    { id: 'list-track', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Thesis statement</strong>: Listen for the speaker\'s main claim, often in the first 30 seconds.' }, { text: '<strong>Supporting evidence</strong>: Examples, statistics, anecdotes that back up the claim.' }, { text: '<strong>Counter-arguments</strong>: Signalled by "However", "On the other hand", "Critics argue".' }, { text: '<strong>Concessions</strong>: "Admittedly", "I grant you that" — the speaker accepts a point but maintains their overall position.' }, { text: '<strong>Conclusion / final position</strong>: "Ultimately", "On balance", "All things considered".' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Lecture Signal Phrases', level: 2 } },
    { id: 'table-signals', type: 'comparisonTable', data: { caption: 'Discourse markers in lectures', headers: ['Function', 'Signal Phrases'], rows: [['Introducing topic', '"What I want to focus on today is…", "Let me begin by…"'], ['Adding a point', '"Furthermore…", "Another aspect worth considering…"'], ['Contrasting', '"Having said that…", "Conversely…", "That said…"'], ['Giving examples', '"Take, for instance…", "A case in point is…"'], ['Summarising', '"So, to sum up…", "The key takeaway here is…"'], ['Digressing and returning', '"As an aside…", "But to get back to the main point…"']] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Active Listening', text: 'Don\'t passively hear — <strong>actively predict</strong>. When a speaker says "However…", expect a contrast. When they say "For example…", expect illustration. This preparation helps you process the next section faster.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Following complex arguments: track thesis → evidence → counter-arguments → concessions → conclusion. Use discourse markers as navigation signals (However = contrast, For example = illustration). Actively predict what comes next.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Track argument structure: thesis → evidence → counter-arguments → concessions → conclusion. Listen for discourse markers as navigation aids. Actively predict next section.',
    cues: [
      { id: 'cue-1', blockId: 'list-track', prompt: 'What five elements of argument structure should you track in a CPE lecture?', answer: '1. Thesis statement (main claim, usually first 30 seconds). 2. Supporting evidence (examples, statistics). 3. Counter-arguments (signalled by "However", "Critics argue"). 4. Concessions ("Admittedly", "I grant you that"). 5. Conclusion/final position ("Ultimately", "On balance").' },
    ]
  },
  evidence: [], mentions: []
};
