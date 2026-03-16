export const note_cpe_2_5_2 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master CPE report writing at C2 Proficiency level.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Reports', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Task Format', text: 'Write a report (280–320 words) for a specific audience (employer, committee, council). Reports present <strong>factual information, analysis, and recommendations</strong>. They use headings, impersonal language, and a formal register.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Report Structure', level: 2 } },
    { id: 'list-struct', type: 'list', data: { style: 'numbered', items: [{ text: '<strong>Introduction</strong>: State the purpose — "The aim of this report is to assess / evaluate / examine…"' }, { text: '<strong>Finding 1</strong> (with heading): Present information, data, or observations on one aspect.' }, { text: '<strong>Finding 2</strong> (with heading): Address another aspect. Each section should be self-contained.' }, { text: '<strong>Conclusion & Recommendations</strong>: Summarise findings and make specific, actionable recommendations.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Report Language', level: 2 } },
    { id: 'table-lang', type: 'comparisonTable', data: { caption: 'Report language patterns', headers: ['Function', 'C2 Phrases'], rows: [['Introduction', '"The purpose of this report is to…", "This report sets out to…"'], ['Presenting findings', '"It was found that…", "The evidence suggests that…", "A notable finding was…"'], ['Making comparisons', '"In comparison with…", "This stands in marked contrast to…"'], ['Recommendations', '"It is strongly recommended that…", "It would be advisable to…", "Steps should be taken to…"'], ['Conclusion', '"In light of the above findings…", "Taking all factors into consideration…"']] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Headings Are Essential', text: 'Reports MUST use section headings. This is a format requirement. Headings make your report look professional and help the reader navigate. Use clear, descriptive headings: "Current Situation", "Key Challenges", "Recommendations".' } },
    { id: 'callout-warn', type: 'callout', data: { style: 'warning', title: 'Report ≠ Essay', text: 'Don\'t write a report like an essay. Reports are <strong>objective and factual</strong>, not personal and argumentative. Use impersonal language ("It was observed that…") not personal ("I think…"). Save opinions for the recommendations section.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'CPE reports: 280–320 words with headings. Structure: introduction (purpose) → findings (2+ sections) → recommendations. Use impersonal, formal language. Present facts objectively. Keep opinions for recommendations. Reports ≠ essays.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'CPE reports: headings required, impersonal language, objective findings, specific recommendations. Structure: intro → findings → conclusion + recommendations.',
    cues: [
      { id: 'cue-1', blockId: 'list-struct', prompt: 'What is the standard structure for a CPE report?', answer: '1. Introduction (state purpose: "This report sets out to…"). 2. Finding 1 (with heading, factual). 3. Finding 2 (with heading). 4. Conclusion & Recommendations (summarise + actionable suggestions). Use impersonal language throughout.' },
    ]
  },
  evidence: [], mentions: []
};
