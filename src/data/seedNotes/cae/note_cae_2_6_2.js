export const note_cae_2_6_2 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand register and tone and how to select the appropriate level of formality for CAE Writing tasks.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Register and Tone', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Register vs Tone', text: '<strong>Register</strong> = level of formality (formal, semi-formal, informal). Determined by the target reader and task type.<br/><strong>Tone</strong> = the attitude or feeling behind the words (persuasive, objective, enthusiastic, critical, sympathetic). Determined by the purpose of the communication.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Register by Task Type', level: 2 } },
    { id: 'table-reg', type: 'comparisonTable', data: { caption: 'Expected register for each task', headers: ['Task', 'Register', 'Tone'], rows: [['Essay', 'Formal/semi-formal', 'Analytical, evaluative, balanced'], ['Report', 'Formal', 'Objective, factual, analytical'], ['Proposal', 'Formal', 'Persuasive, forward-looking, constructive'], ['Letter (formal)', 'Formal', 'Professional, polite, measured'], ['Letter (informal)', 'Informal', 'Warm, friendly, conversational'], ['Review', 'Semi-formal', 'Engaging, personal, evaluative']] } },
    { id: 'h-3', type: 'heading', data: { text: 'Identifying Register from the Task', level: 2 } },
    { id: 'list-ident', type: 'list', data: { style: 'bullet', items: [{ text: 'Look for the <strong>target reader</strong>: "Write to the principal" = formal. "Write to your friend" = informal.' }, { text: 'Look for the <strong>publication</strong>: "Write for an international magazine" = semi-formal.' }, { text: 'The <strong>task type</strong> also guides register: proposals and reports are always formal.' }] } },
    { id: 'callout-warn', type: 'callout', data: { style: 'warning', title: 'Register Consistency', text: 'The most common error is <strong>inconsistent register</strong> — starting formally then becoming casual. Once you set your register, maintain it throughout. Every sentence should feel like it belongs in the same text.' } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Before you start writing, decide your register in one word: formal, semi-formal, or informal. Write it at the top of your planning notes. This one decision shapes your entire piece.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Register = formality level; Tone = attitude. Match both to target reader and task type. Essays/reports/proposals: formal. Reviews: semi-formal. Informal letters: informal. Consistency is critical — never mix registers within a piece.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Register = formality, tone = attitude. Essay/report/proposal: formal. Review: semi-formal. Informal letter: informal. Identify from target reader and task type. Maintain consistency throughout.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'What is the difference between register and tone?', answer: 'Register: level of formality (formal, semi-formal, informal) — determined by the target reader and task type. Tone: the attitude behind the words (persuasive, objective, critical, sympathetic) — determined by the purpose. A formal report can have an objective tone, while a formal proposal has a persuasive tone. Both are formal register but different tone.' },
    ]
  },
  evidence: [], mentions: []
};
