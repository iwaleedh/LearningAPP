export const note_cae_2_5_2 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master the format, structure, and language of reports for CAE Writing Part 2.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Reports', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'What Is a Report?', text: 'A <strong>report</strong> presents factual information about a situation, analyses findings, and may include recommendations. It is written for a specific reader (employer, college principal, committee).<br/><br/><strong>Word count</strong>: 220–260 words.<br/><strong>Register</strong>: Formal.<br/><strong>Key features</strong>: Headings, objective tone, data-driven language.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Report Structure', level: 2 } },
    { id: 'list-struct', type: 'list', data: { style: 'numbered', items: [{ text: '<strong>Title</strong>: "Report on…"' }, { text: '<strong>Introduction</strong>: State purpose and scope — "The aim of this report is to evaluate / assess / present findings on…"' }, { text: '<strong>Findings</strong> (with headings): 2–3 sections, each with a subheading. Present facts objectively.' }, { text: '<strong>Recommendations / Conclusion</strong>: Based on findings — "In light of the above, I would recommend…"' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Report vs Proposal vs Essay', level: 2 } },
    { id: 'table-diff', type: 'comparisonTable', data: { caption: 'Key differences', headers: ['Feature', 'Essay', 'Report', 'Proposal'], rows: [['Headings', 'No', 'Yes', 'Yes'], ['Tone', 'Argumentative', 'Objective/factual', 'Persuasive'], ['Time focus', 'General', 'Past/present (what happened)', 'Future (what should happen)'], ['Purpose', 'Discuss and evaluate', 'Inform and assess', 'Suggest and recommend']] } },
    { id: 'h-4', type: 'heading', data: { text: 'Useful Language', level: 2 } },
    { id: 'list-lang', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Introducing</strong>: "This report aims to… / The purpose of this report is to assess…"' }, { text: '<strong>Presenting findings</strong>: "The majority of respondents… / It was found that… / According to the survey…"' }, { text: '<strong>Analysing</strong>: "This can be attributed to… / A possible explanation is… / This suggests that…"' }, { text: '<strong>Recommending</strong>: "In light of these findings… / It is recommended that… / It would be advisable to…"' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Reports should sound objective — avoid "I think" and use impersonal structures: "It was observed that…", "The evidence suggests…". Use specific details rather than generalisations.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Reports: 220–260 words, formal, objective tone. Structure: title → introduction → findings (with headings) → recommendations. Present facts, not opinions. Use impersonal language. Different from essays (no headings, argumentative) and proposals (forward-looking, persuasive).' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Report: factual, objective, past/present focus. Title + intro + findings (headings) + recommendations. Impersonal language (It was found that…). Different from essay (no headings) and proposal (future focus).',
    cues: [
      { id: 'cue-1', blockId: 'table-diff', prompt: 'Compare the key differences between an essay, a report, and a proposal.', answer: 'Essay: no headings, argumentative tone, general time focus, discusses and evaluates. Report: headings, objective/factual tone, past/present focus, informs and assesses. Proposal: headings, persuasive tone, future focus, suggests and recommends. All require 220–260 words and formal register.' },
    ]
  },
  evidence: [], mentions: []
};
