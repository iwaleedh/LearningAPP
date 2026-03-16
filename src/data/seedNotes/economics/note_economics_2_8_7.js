export const note_economics_2_8_7 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain the determinants of government expenditure (G) as a component of AD, including the distinction between current and capital expenditure.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Government Spending (G)', level: 2 } },
    { id: 'callout-def', type: 'callout', data: { style: 'key', title: 'Definition', text: '<strong>Government spending (G)</strong> includes all state-funded expenditure on goods and services. It is a direct injection into the circular flow and a component of AD.<br/>Does NOT include transfer payments (welfare benefits, state pensions) — these redistribute income but are not direct spending on output.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Types of Government Spending', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Current expenditure</strong>: day-to-day spending — NHS, education salaries, defence, policing. Does not add to productive capacity directly.' }, { text: '<strong>Capital expenditure</strong>: investment in public infrastructure (roads, schools, hospitals). Adds to productive capacity → supply-side effect.' }, { text: '<strong>Transfer payments</strong>: benefits, pensions — not part of G in GDP accounts but affect C indirectly.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Determinants of Government Expenditure', level: 2 } },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Fiscal policy stance</strong>: discretionary spending decisions — expansionary in recessions (G increases), contractionary in booms.' }, { text: '<strong>Automatic stabilisers</strong>: welfare spending rises automatically in recession (more claimants); tax revenue falls — both cushion the fall in AD without discretionary action.' }, { text: '<strong>Demographic factors</strong>: ageing population increases NHS and pension expenditure.' }, { text: '<strong>Debt levels</strong>: high national debt forces spending cuts (austerity) to reduce budget deficit.' }, { text: '<strong>Political priorities</strong>: government may increase defence, infrastructure, or public services spending.' }] } },
    { id: 'sum-1', type: 'summary', data: { text: 'G = government spending on goods/services (not transfer payments). Determined by fiscal policy, automatic stabilisers, demographics, debt, and political priorities.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'G = government spending (not transfers). Current vs capital spending. Determinants: fiscal stance, automatic stabilisers, demographics, debt, priorities.',
    cues: [
      { id: 'cue-1', blockId: 'callout-def', prompt: 'Why are transfer payments excluded from the G component of AD?', answer: 'Transfer payments (benefits, pensions) are not spending on output — they redistribute income. They affect consumption (C) when recipients spend the money, but are not counted as government purchases of goods and services.' },
      { id: 'cue-2', blockId: 'list-2', prompt: 'What are automatic stabilisers and how do they affect G?', answer: 'Automatic stabilisers are government spending/tax mechanisms that change automatically with the economic cycle. In a recession, welfare spending rises as more people claim benefits — this boosts G and cushions the fall in AD without any discretionary policy change.' },
    ]
  },
  evidence: [], mentions: []
};
