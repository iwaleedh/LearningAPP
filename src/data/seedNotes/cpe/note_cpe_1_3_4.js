export const note_cpe_1_3_4 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master advanced grammar: inversion, cleft sentences, and mixed conditionals at C2 level.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Advanced Grammar Structures', level: 2 } },
    { id: 'h-2', type: 'heading', data: { text: 'Inversion', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'When to Invert', text: 'Inversion (auxiliary before subject) occurs after <strong>negative/restrictive adverbials</strong> at the start of a sentence. This is a core C2 grammar structure tested heavily in Part 4 (key word transformations).' } },
    { id: 'list-inv', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Never</strong>: "Never have I seen such chaos."' }, { text: '<strong>Rarely / Seldom</strong>: "Rarely does one encounter such generosity."' }, { text: '<strong>Not only… but also</strong>: "Not only did she win, but she also broke the record."' }, { text: '<strong>No sooner… than</strong>: "No sooner had we arrived than it started raining."' }, { text: '<strong>Hardly / Scarcely… when</strong>: "Hardly had I sat down when the phone rang."' }, { text: '<strong>Only + adverbial</strong>: "Only then did I realise my mistake."' }, { text: '<strong>Under no circumstances</strong>: "Under no circumstances should you open this door."' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Cleft Sentences', level: 2 } },
    { id: 'table-cleft', type: 'comparisonTable', data: { caption: 'Cleft sentence patterns', headers: ['Type', 'Pattern', 'Example'], rows: [['It-cleft', 'It + be + focus + that/who', '"It was the noise that bothered me most."'], ['Wh-cleft', 'What + clause + be + focus', '"What I need is a good rest."'], ['All-cleft', 'All + clause + be + focus', '"All I want is some peace and quiet."'], ['Reverse cleft', 'Focus + be + what + clause', '"A good rest is what I need."'], ['The thing/reason', 'The reason why + clause + be', '"The reason why I left was the salary."']] } },
    { id: 'h-4', type: 'heading', data: { text: 'Mixed Conditionals', level: 2 } },
    { id: 'list-cond', type: 'list', data: { style: 'numbered', items: [{ text: '<strong>Past condition → present result</strong>: "If I had studied medicine, I would be a doctor now." (had + pp → would + infinitive)' }, { text: '<strong>Present condition → past result</strong>: "If she weren\'t so shy, she would have spoken up." (were → would have + pp)' }, { text: '<strong>Inverted conditional</strong>: "Had I known, I would have acted differently." (= If I had known…)' }, { text: '<strong>Were + to</strong>: "Were the company to collapse, thousands would lose their jobs."' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'In the Exam', text: 'These structures dominate Part 4 (key word transformations) and impress examiners in Writing and Speaking. Don\'t overuse them — 2-3 well-placed advanced structures across a whole essay or speaking test is ideal.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'C2 grammar: Inversion after negative adverbials (Never have I…, No sooner had…). Cleft sentences for emphasis (It was X that…, What I need is…). Mixed conditionals (past→present, present→past). Inverted conditionals (Had I known…). Use sparingly but accurately.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'C2 grammar: inversion (negative adverbials → auxiliary before subject), cleft sentences (it-cleft, wh-cleft), mixed conditionals (past→present, present→past), inverted conditionals.',
    cues: [
      { id: 'cue-1', blockId: 'list-inv', prompt: 'Give four negative adverbials that trigger inversion, with examples.', answer: '1. Never: "Never have I seen…". 2. Not only… but also: "Not only did she win…". 3. No sooner… than: "No sooner had we arrived than…". 4. Under no circumstances: "Under no circumstances should you…". Also: rarely, seldom, hardly…when, only then.' },
      { id: 'cue-2', blockId: 'list-cond', prompt: 'What are the two types of mixed conditional and how do they form?', answer: '1. Past condition → present result: "If I had studied medicine (past perfect), I would be a doctor now (would + infinitive)." 2. Present condition → past result: "If she weren\'t so shy (past subjunctive), she would have spoken up (would have + past participle)."' },
    ]
  },
  evidence: [], mentions: []
};
