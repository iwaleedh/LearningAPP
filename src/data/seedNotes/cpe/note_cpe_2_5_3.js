export const note_cpe_2_5_3 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master CPE review writing at C2 Proficiency level.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Reviews', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Task Format', text: 'Write a review (280–320 words) of a book, film, TV series, exhibition, performance, or product for a magazine, website, or newspaper. You must <strong>describe, evaluate, and recommend</strong> (or not). The tone is semi-formal to neutral — engaging but informed.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Review Structure', level: 2 } },
    { id: 'list-struct', type: 'list', data: { style: 'numbered', items: [{ text: '<strong>Introduction</strong>: Name the subject, provide context (genre, creator, when/where). Hook the reader with a striking judgement or question.' }, { text: '<strong>Description</strong>: Summarise key features — plot (without spoilers), style, theme, standout elements.' }, { text: '<strong>Evaluation</strong>: Assess strengths and weaknesses with supporting detail. This is the core of a C2 review.' }, { text: '<strong>Recommendation</strong>: Who would enjoy this? Would you recommend it? Why / why not?' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Evaluative Language', level: 2 } },
    { id: 'table-eval', type: 'comparisonTable', data: { caption: 'Review vocabulary', headers: ['Positive', 'Negative', 'Balanced'], rows: [['riveting, compelling, thought-provoking', 'lacklustre, underwhelming, contrived', '"While X is commendable, Y leaves something to be desired."'], ['masterful, exquisite, groundbreaking', 'predictable, formulaic, heavy-handed', '"Despite its flaws, it remains a worthwhile experience."'], ['a tour de force, a triumph', 'a missed opportunity, a letdown', '"It does not quite live up to its promise, but…"']] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Review vs Report', text: 'A review is <strong>personal and evaluative</strong> — your opinion matters. A report is <strong>objective and factual</strong>. In a review, use "I" and express personal judgements. In a report, use impersonal language.' } },
    { id: 'callout-warn', type: 'callout', data: { style: 'warning', title: 'Avoid Plot Summary', text: 'Don\'t spend half your word count retelling the plot. Examiners want <strong>evaluation</strong>, not description. A brief summary (2–3 sentences) is enough — then analyse and judge.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'CPE reviews: 280–320 words. Structure: intro (context + hook) → brief description → evaluation (strengths/weaknesses) → recommendation. Use evaluative vocabulary (riveting, lacklustre, thought-provoking). Personal voice is appropriate. Don\'t over-summarise the plot.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'CPE reviews: describe briefly, evaluate strengths/weaknesses with specific detail, recommend. Use evaluative vocabulary. Personal voice OK. Don\'t over-summarise.',
    cues: [
      { id: 'cue-1', blockId: 'list-struct', prompt: 'What is the recommended structure for a CPE review?', answer: '1. Introduction: name subject, context, hooks reader. 2. Brief description: plot/features (2–3 sentences, no spoilers). 3. Evaluation: strengths and weaknesses with detail (core section). 4. Recommendation: who would enjoy it, would you recommend it?' },
    ]
  },
  evidence: [], mentions: []
};
