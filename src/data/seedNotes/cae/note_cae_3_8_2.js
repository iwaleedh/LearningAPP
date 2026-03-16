export const note_cae_3_8_2 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Develop skills for identifying opinion and feeling in CAE Listening tasks.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Identifying Opinion and Feeling', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Why This Matters', text: 'Many CAE Listening questions ask <strong>how</strong> a speaker feels or <strong>what</strong> they think — not just what they say. You must distinguish between facts the speaker reports and their personal opinion about those facts.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Language Clues for Opinion', level: 2 } },
    { id: 'list-opinion', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Direct opinion markers</strong>: "I think/believe/feel that…", "In my opinion…", "As far as I\'m concerned…"' }, { text: '<strong>Hedged opinions</strong>: "I tend to think…", "I would argue…", "It seems to me that…"' }, { text: '<strong>Strong opinions</strong>: "I\'m absolutely convinced…", "There\'s no doubt in my mind…", "I firmly believe…"' }, { text: '<strong>Reported vs personal</strong>: "Some people say X, but I…" — the opinion after "but" is the speaker\'s own view.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Language Clues for Feeling', level: 2 } },
    { id: 'table-feel', type: 'comparisonTable', data: { caption: 'Feeling indicators', headers: ['Feeling', 'Language Clues'], rows: [['Enthusiasm', '"I was thrilled / delighted / really excited about…"'], ['Disappointment', '"Unfortunately… / I\'d hoped for more… / It didn\'t quite live up to…"'], ['Surprise', '"I never expected… / To my amazement… / What really took me aback was…"'], ['Frustration', '"What really annoys me is… / It\'s infuriating when… / I couldn\'t believe they…"'], ['Uncertainty', '"I\'m not entirely sure… / I\'m in two minds about… / It\'s hard to say…"']] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'When a question asks "How does the speaker feel?", listen to the <strong>entire passage</strong> before choosing. Speakers often start with one feeling and shift — pick the final or overall feeling, not the first one you hear.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Opinion clues: direct markers (I believe), hedged (I tend to think), strong (I\'m convinced). Feeling clues: specific vocabulary + tone. Pay attention to "but" — what follows reveals the real view. Listen to the full passage before choosing.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Opinion markers: I think (direct), I tend to think (hedged), I\'m convinced (strong). Feeling: vocabulary (thrilled, frustrated) + tone. "But" often introduces the real opinion. Listen to full passage.',
    cues: [
      { id: 'cue-1', blockId: 'list-opinion', prompt: 'How can you distinguish between reported views and a speaker\'s own opinion?', answer: 'Speakers may present others\' views first: "Some people say X" or "It\'s widely believed that…" then reveal their own opinion after "but", "however", or "personally". The speaker\'s actual opinion follows these contrasting markers. Also listen for first-person markers: "I think", "In my view", "As far as I\'m concerned".' },
    ]
  },
  evidence: [], mentions: []
};
