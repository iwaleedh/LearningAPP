export const note_cpe_2_6_3 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master engaging the target reader in CPE writing.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Engaging the Target Reader', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'What Examiners Assess', text: 'The <strong>target reader</strong> criterion asks: would the intended reader be fully informed and/or engaged? At C2, the reader should not only understand your text but be <strong>impressed, persuaded, or moved</strong> by it.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Techniques for Engagement', level: 2 } },
    { id: 'table-tech', type: 'comparisonTable', data: { caption: 'Engaging the reader by text type', headers: ['Text Type', 'Reader Expectation', 'How to Engage'], rows: [['Essay', 'To be convinced by a well-reasoned argument', 'Strong thesis, evidence, logical flow, nuanced conclusion'], ['Article', 'To be entertained and informed', 'Hook opening, vivid examples, personal voice, memorable close'], ['Report', 'To receive clear analysis and actionable recommendations', 'Clear headings, objective findings, specific recommendations'], ['Review', 'To decide whether to experience the subject', 'Balanced evaluation, specific detail, clear recommendation'], ['Letter', 'To understand the writer\'s position and respond', 'Clear purpose, polite firmness, specific requests/proposals']] } },
    { id: 'h-3', type: 'heading', data: { text: 'Universal Engagement Strategies', level: 2 } },
    { id: 'list-strat', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Specific detail</strong>: "The unemployment rate rose by 3.2%" is more engaging than "Unemployment increased significantly".' }, { text: '<strong>Varied sentence openings</strong>: Don\'t start every sentence the same way.' }, { text: '<strong>Purposeful conclusion</strong>: End strongly — with a call to action, a thought-provoking question, or a memorable statement.' }, { text: '<strong>Addressing the reader\'s needs</strong>: Articles = reader wants interesting reading. Reports = reader wants solutions. Always think: what does MY reader want from this text?' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'The Examiner Test', text: 'After writing, imagine you ARE the target reader. Would you: (1) understand everything? (2) be informed/persuaded? (3) want to keep reading? If the answer to any is "no", revise that section.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Target reader engagement: match content to reader expectations (essays → convince, articles → entertain, reports → inform with solutions). Use specific detail, varied openings, purposeful conclusions. At C2, the reader should be impressed, not just informed.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Engage the target reader: match content to expectations, use specific detail, vary sentence openings, end strongly. The C2 reader should be impressed, persuaded, or moved.',
    cues: [
      { id: 'cue-1', blockId: 'table-tech', prompt: 'How should you engage the reader in a CPE essay vs an article?', answer: 'Essay: reader wants to be convinced → strong thesis, evidence, logical flow, nuanced conclusion. Article: reader wants to be entertained and informed → hook opening, vivid examples, personal voice, memorable close.' },
    ]
  },
  evidence: [], mentions: []
};
