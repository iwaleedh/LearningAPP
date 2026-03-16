export const note_economics_1_6_6 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain how government provision of information corrects information failure, including nudge theory and choice architecture, and evaluate the effectiveness of information-based interventions.' }, terms: [] },
    { id: 'h-1', type: 'heading', data: { text: 'Information Failure and the Need for Intervention', level: 2 }, terms: [] },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Why Information Failures Occur', text: 'Classical economics assumes consumers are <strong>perfectly informed</strong>. In reality, consumers often lack information about:<br/>• <strong>Product quality</strong> (healthcare, financial products, used cars)<br/>• <strong>Health risks</strong> (tobacco, alcohol, drugs, junk food)<br/>• <strong>Long-run consequences</strong> of decisions (pensions, education)<br/><br/>Without accurate information, consumers make decisions that do not maximise their welfare → market failure.' }, terms: [] },
    { id: 'h-2', type: 'heading', data: { text: 'Government Information Provision', level: 2 }, terms: [] },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Health information campaigns</strong>: anti-smoking adverts, "5-a-day" guidance, alcohol unit labelling — aimed at reducing demerit good consumption.' }, { text: '<strong>Compulsory labelling</strong>: food nutritional information, cigarette health warnings, energy efficiency ratings (A-G) on appliances — reduces information asymmetry between producers and consumers.' }, { text: '<strong>Mandatory disclosure</strong>: financial advisers must disclose commissions; estate agents must disclose property information; employers must publish gender pay gaps.' }, { text: '<strong>Government websites and helplines</strong>: money advice services, NHS Direct, Citizens Advice — improve consumer financial and health literacy.' }] }, terms: [] },
    { id: 'h-3', type: 'heading', data: { text: 'Nudge Theory and Choice Architecture', level: 2 }, terms: [] },
    { id: 'call-2', type: 'callout', data: { style: 'key', title: 'Nudge Theory (Thaler & Sunstein)', text: '<strong>Nudge theory</strong> (Richard Thaler & Cass Sunstein, 2008) holds that the way choices are <strong>presented (choice architecture)</strong> significantly influences decisions without restricting freedom.<br/><br/><strong>Key nudge tools</strong>:<br/>• <strong>Default options</strong>: auto-enrolment in pension schemes (auto-enrolled → must actively opt out) vs opt-in<br/>• <strong>Simplification</strong>: making healthy food prominent at eye level in canteens<br/>• <strong>Social norms</strong>: "90% of your neighbours pay taxes on time" messages to reduce tax evasion<br/>• <strong>Feedback</strong>: smart meters showing real-time energy use' }, terms: [] },
    { id: 'h-4', type: 'heading', data: { text: 'Evaluation', level: 2 }, terms: [] },
    { id: 'call-3', type: 'callout', data: { style: 'warning', title: 'Limitations of Information Provision and Nudges', text: '<strong>Information provision</strong>: may be ignored; health warnings on cigarettes have limited effect on addicted smokers; information overload can be as bad as too little.<br/><strong>Nudge</strong>: paternalistic — critics argue the state should not manipulate choices;<br/>effects may be temporary or weak; works best for one-off decisions (pensions) less well for habitual behaviour (diet); does not address structural poverty as root cause of unhealthy choices.' }, terms: [] },
    { id: 'sum-1', type: 'summary', data: { text: 'Government reduces information failure through campaigns, compulsory labelling, and mandatory disclosure. Nudge theory uses default options and choice architecture to guide decisions. Both preserve consumer freedom but have limited impact on entrenched behaviours.' }, terms: [] },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Info provision: campaigns, labelling, disclosure. Nudge: default options, choice architecture. Both correct info failure without coercion.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'Give three examples of goods/decisions where consumers suffer information failure.', answer: 'Healthcare (doctors know more than patients), financial products (complex terms), tobacco (underestimate long-term health risk).' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'How does compulsory nutritional labelling on food correct market failure?', answer: 'Reduces information asymmetry between producers (who know nutritional content) and consumers — enabling informed choice and reducing over-consumption of unhealthy foods.' },
      { id: 'cue-3', blockId: 'call-2', prompt: 'Explain how auto-enrolment in pensions is a nudge.', answer: 'Workers are automatically enrolled into pension savings (default = save). They can opt out but inertia means most stay enrolled — boosting saving without being compulsory.' },
      { id: 'cue-4', blockId: 'call-3', prompt: 'Give two limitations of nudge theory as a policy tool.', answer: 'Paternalistic (critics say governments should not manipulate choices); effects may be temporary or weak; works for one-off decisions but poorly for habitual behaviours.' },
    ]
  },
  evidence: [],
  mentions: []
};
